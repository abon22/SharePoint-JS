/*var fd;
var firstday;

var ld;
var lastday;*/


var employee_orient_ids=[];
var elem ;

var countOptions = {
  useEasing: true,
  separator: ''
}

var th = ['','thousand','million', 'billion','trillion'];
// uncomment this line for English Number System
// var th = ['','thousand','million', 'milliard','billion'];

var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine']; var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen']; var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']; function toWords(s){s = s.toString(); s = s.replace(/[\, ]/g,''); if (s != parseFloat(s)) return 'not a number'; var x = s.indexOf('.'); if (x == -1) x = s.length; if (x > 15) return 'too big'; var n = s.split(''); var str = ''; var sk = 0; for (var i=0; i < x; i++) {if ((x-i)%3==2) {if (n[i] == '1') {str += tn[Number(n[i+1])] + ' '; i++; sk=1;} else if (n[i]!=0) {str += tw[n[i]-2] + ' ';sk=1;}} else if (n[i]!=0) {str += dg[n[i]] +' '; if ((x-i)%3==0) str += 'hundred ';sk=1;} if ((x-i)%3==1) {if (sk) str += th[(x-i-1)/3] + ' ';sk=0;}} if (x != s.length) {var y = s.length; str += 'point '; for (var i=x+1; i<y; i++) str += dg[n[i]] +' ';} return str.replace(/\s+/g,' ');}


function findAndReplace(string, target, replacement) {
 
 var i = 0, length = string.length;
 
 for (i; i < length; i++) {
 
   string = string.replace(target, replacement);
 
 }
 
 return string;
 
}

/*var count = new CountUp('MyNumber', 0, 2016, 0, 5, countOptions);
count.start(function() {})*/

// Source: http://stackoverflow.com/questions/497790



var dates = {
    convert:function(d) {
        // Converts the date in d to a date-object. The input can be:
        //   a date object: returned without modification
        //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
        //   a number     : Interpreted as number of milliseconds
        //                  since 1 Jan 1970 (a timestamp) 
        //   a string     : Any format supported by the javascript engine, like
        //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
        //  an object     : Interpreted as an object with year, month and date
        //                  attributes.  **NOTE** month is 0-11.
        return (
            d.constructor === Date ? d :
            d.constructor === Array ? new Date(d[0],d[1],d[2]) :
            d.constructor === Number ? new Date(d) :
            d.constructor === String ? new Date(d) :
            typeof d === "object" ? new Date(d.year,d.month,d.date) :
            NaN
        );
    },
    compare:function(a,b) {
        // Compare two dates (could be of any type supported by the convert
        // function above) and returns:
        //  -1 : if a < b
        //   0 : if a = b
        //   1 : if a > b
        // NaN : if a or b is an illegal date
        // NOTE: The code inside isFinite does an assignment (=).
        return (
            isFinite(a=this.convert(a).valueOf()) &&
            isFinite(b=this.convert(b).valueOf()) ?
            (a>b)-(a<b) :
            NaN
        );
    },
    inRange:function(d,start,end) {
        // Checks if date in d is between dates in start and end.
        // Returns a boolean or NaN:
        //    true  : if d is between start and end (inclusive)
        //    false : if d is before start or after end
        //    NaN   : if one or more of the dates is illegal.
        // NOTE: The code inside isFinite does an assignment (=).
       return (
            isFinite(d=this.convert(d).valueOf()) &&
            isFinite(start=this.convert(start).valueOf()) &&
            isFinite(end=this.convert(end).valueOf()) ?
            start <= d && d <= end :
            NaN
        );
    }
}

var dataRes;

//always use query to make sure data is updated
function getItems(start_date, end_date, selected_topic) {

$('#example2').progress({
  percent: 0
});

	var d1 = new Date(start_date);
	//console.log(d1.getTime());

	var d2 = new Date(end_date);
	//console.log(d2.getTime());

/*
	var urlForAllItems = "/_api/Web/Lists/GetByTitle('Employee Profile')/Items?$select=Orrient_NewHire_NewRole, Orrient_DEPT_SPEC, Orrient_ACCNTNG, Orrient_HR, LI_DepartmentHead, LI_PositionTitle, LI_Department, LI_LastName, LI_FirstName, LI_EmployeeID, LI_Department, ID, LI_DateJoined&$top=1000&$OrderBy=LI_EmployeeID asc&$filter=((LI_Separated%20eq%20'Active')%20and%20(LI_EmployeeStatus%20eq%20'Employee'))";*/

	var urlForAllItems = "/_api/Web/Lists/GetByTitle('Employee Profile')/Items?$select=Orrient_NewHire_NewRole, Orrient_DEPT_SPEC, Orrient_ACCNTNG, Orrient_HR, LI_DepartmentHead, LI_PositionTitle, LI_Department, LI_LastName, LI_FirstName, LI_EmployeeID, LI_Department, ID, LI_DateJoined&$top=1000&$OrderBy=LI_EmployeeID desc&$filter=LI_Separated eq 'Active' ";

	$.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + urlForAllItems,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {

        dataRes = data.d.results;
        //console.log(dataRes);


       	$("#tbodyid").empty();
       	$("#chkbox_select_all").prop('checked', false);
       	var ischeck_toogle_check = $('#toogle_checked_input').is(':checked'); 

       	var count_hr =0;
       	var count_accounting =0;
       	var count_dept_spec =0;
       	var total_pending_count =0;
       	var count_employee =0;

       	for (a=0; a< dataRes.length; a++) {
       		var date_joined = dataRes[a].LI_DateJoined;
       		var temp_datejoined = new Date(date_joined);

			if(dates.inRange(temp_datejoined,d1,d2)){
				count_employee = count_employee + 1;

				var db_id = dataRes[a].ID;
				var employee_id = dataRes[a].LI_EmployeeID;
				var employee_fname = dataRes[a].LI_FirstName;
				var employee_lname = dataRes[a].LI_LastName;
				var employee_full_name = employee_fname +" "+employee_lname;
				var employee_date_joined = temp_datejoined.format("MM/dd/yyyy");
				var employee_orient_hr = dataRes[a].Orrient_HR;
				var employee_orient_accntng = dataRes[a].Orrient_ACCNTNG;
				var employee_orient_dept_spec = dataRes[a].Orrient_DEPT_SPEC;



				var hr_html="";
				var accounting_html="";
				var dept_spec_html="";


				if(employee_orient_hr == "" || employee_orient_hr == 0 || employee_orient_hr == null){
					hr_html = "<i class='large red close icon'></i>";
					count_hr = count_hr+1;
				}else{
					hr_html = "<i class='large green checkmark icon'></i>";
				}

				if(employee_orient_accntng == "" || employee_orient_accntng == 0 || employee_orient_accntng == null){
					accounting_html = "<i class='large red close icon'></i>";
					count_accounting = count_accounting+1;
				}else{
					accounting_html = "<i class='large green checkmark icon'></i>";
				}

				if(employee_orient_dept_spec == "" || employee_orient_dept_spec == 0 || employee_orient_dept_spec == null){
					dept_spec_html = "<i class='large red close icon'></i>";
					count_dept_spec = count_dept_spec+1;
				}else{
					dept_spec_html = "<i class='large green checkmark icon'></i>";
				}



				//console.log("employee_orient_hr: "+employee_orient_hr)
			if(selected_topic == "All"){
				//console.log("selected_topic: "+selected_topic);
				$('#list_employee_for_orient tbody').append("<tr class='' render='' style='display: table-row;'> <td class='center aligned'> <div class='ui fitted checkbox'> <input type='checkbox' value="+db_id+" name='chkbox_name' onchange='check_item(this)' id='data-"+db_id+"'> <label></label> </div> </td> <td class=''>"+employee_id+"</td> <td class=''>"+employee_full_name+"</td> <td class=''>"+employee_date_joined+"</td> <td class=''>"+hr_html+"</td> <td class=''>"+accounting_html+"</td> <td class=''>"+dept_spec_html+"</td> <td class='td_dont_click'><div class='ui right floated button ' id='temp_view_item' value='"+db_id+"'>View/Edit<i class='right chevron icon'></i></div></td> </tr>");


			// }else if(selected_topic == "HR" && employee_orient_hr == 0  || selected_topic == "HR" && employee_orient_hr == null){
			}else if(selected_topic == "HR" || selected_topic == "HR" ){
				//console.log("selected_topic: "+selected_topic);

				var ischeck_toogle_check = $('#toogle_checked_input').is(':checked'); 
				if(ischeck_toogle_check == true){
					//console.log("a");//check
					$('#list_employee_for_orient tbody').append("<tr class='' render='' style='display: table-row;'> <td class='center aligned'> <div class='ui fitted checkbox'> <input type='checkbox' value="+db_id+" name='chkbox_name' onchange='check_item(this)' id='data-"+db_id+"'> <label></label> </div> </td> <td class=''>"+employee_id+"</td> <td class=''>"+employee_full_name+"</td> <td class=''>"+employee_date_joined+"</td> <td class=''>"+hr_html+"</td> <td class=''>"+accounting_html+"</td> <td class=''>"+dept_spec_html+"</td> <td class=''><div class='ui right floated button' id='temp_view_item' value='"+db_id+"'>View/Edit<i class='right chevron icon'></i></div></td> </tr>");
				}else{
					//console.log("b");//uncheck
					if(selected_topic == "HR" && employee_orient_hr == 0  || selected_topic == "HR" && employee_orient_hr == null){
					$('#list_employee_for_orient tbody').append("<tr class='' render='' style='display: table-row;'> <td class='center aligned'> <div class='ui fitted checkbox'> <input type='checkbox' value="+db_id+" name='chkbox_name' onchange='check_item(this)' id='data-"+db_id+"'> <label></label> </div> </td> <td class=''>"+employee_id+"</td> <td class=''>"+employee_full_name+"</td> <td class=''>"+employee_date_joined+"</td> <td class=''>"+hr_html+"</td> <td class=''>"+accounting_html+"</td> <td class=''>"+dept_spec_html+"</td> <td class=''><div class='ui right floated button' id='temp_view_item' value='"+db_id+"'>View/Edit<i class='right chevron icon'></i></div></td> </tr>");
					}
				}

		

			// }else if(selected_topic == "Accounting" && employee_orient_accntng == 0  || selected_topic == "Accounting" && employee_orient_accntng == null){
			}else if(selected_topic == "Accounting" || selected_topic == "Accounting" ){
				//console.log("selected_topic: "+selected_topic);
				var ischeck_toogle_check = $('#toogle_checked_input').is(':checked'); 
				if(ischeck_toogle_check == true){
					$('#list_employee_for_orient tbody').append("<tr class='' render='' style='display: table-row;'> <td class='center aligned'> <div class='ui fitted checkbox'> <input type='checkbox' value="+db_id+" name='chkbox_name' onchange='check_item(this)' id='data-"+db_id+"'> <label></label> </div> </td> <td class=''>"+employee_id+"</td> <td class=''>"+employee_full_name+"</td> <td class=''>"+employee_date_joined+"</td> <td class=''>"+hr_html+"</td> <td class=''>"+accounting_html+"</td> <td class=''>"+dept_spec_html+"</td> <td class=''><div class='ui right floated button' id='temp_view_item' value='"+db_id+"'>View/Edit<i class='right chevron icon'></i></div></td> </tr>");
				}else{
					if(selected_topic == "Accounting" && employee_orient_accntng == 0  || selected_topic == "Accounting" && employee_orient_accntng == null){
					$('#list_employee_for_orient tbody').append("<tr class='' render='' style='display: table-row;'> <td class='center aligned'> <div class='ui fitted checkbox'> <input type='checkbox' value="+db_id+" name='chkbox_name' onchange='check_item(this)' id='data-"+db_id+"'> <label></label> </div> </td> <td class=''>"+employee_id+"</td> <td class=''>"+employee_full_name+"</td> <td class=''>"+employee_date_joined+"</td> <td class=''>"+hr_html+"</td> <td class=''>"+accounting_html+"</td> <td class=''>"+dept_spec_html+"</td> <td class=''><div class='ui right floated button' id='temp_view_item' value='"+db_id+"'>View/Edit<i class='right chevron icon'></i></div></td> </tr>");
					}

				}
				
			// }else if(selected_topic == "Department-specific" && employee_orient_dept_spec == 0  || selected_topic == "Department-specific" && employee_orient_dept_spec == null){
			}else if(selected_topic == "Department-specific"  || selected_topic == "Department-specific"){
				//console.log("selected_topic: "+selected_topic);
				var ischeck_toogle_check = $('#toogle_checked_input').is(':checked'); 
				if(ischeck_toogle_check == true){
					$('#list_employee_for_orient tbody').append("<tr class='' render='' style='display: table-row;'> <td class='center aligned'> <div class='ui fitted checkbox'> <input type='checkbox' value="+db_id+" name='chkbox_name' onchange='check_item(this)' id='data-"+db_id+"'> <label></label> </div> </td> <td class=''>"+employee_id+"</td> <td class=''>"+employee_full_name+"</td> <td class=''>"+employee_date_joined+"</td> <td class=''>"+hr_html+"</td> <td class=''>"+accounting_html+"</td> <td class=''>"+dept_spec_html+"</td> <td class=''><div class='ui right floated button' id='temp_view_item' value='"+db_id+"'>View/Edit<i class='right chevron icon'></i></div></td> </tr>");
				}
				else{
					if(selected_topic == "Department-specific" && employee_orient_dept_spec == 0  || selected_topic == "Department-specific" && employee_orient_dept_spec == null){
						$('#list_employee_for_orient tbody').append("<tr class='' render='' style='display: table-row;'> <td class='center aligned'> <div class='ui fitted checkbox'> <input type='checkbox' value="+db_id+" name='chkbox_name' onchange='check_item(this)' id='data-"+db_id+"'> <label></label> </div> </td> <td class=''>"+employee_id+"</td> <td class=''>"+employee_full_name+"</td> <td class=''>"+employee_date_joined+"</td> <td class=''>"+hr_html+"</td> <td class=''>"+accounting_html+"</td> <td class=''>"+dept_spec_html+"</td> <td class=''><div class='ui right floated button' id='temp_view_item' value='"+db_id+"'>View/Edit<i class='right chevron icon'></i></div></td> </tr>");
					}

				}
				

			}
				
			}// end date in range

        } //end for loop
/*
        console.log("count_hr: "+count_hr);
        console.log("count_accounting: "+count_accounting);
        console.log("count_dept_spec: "+count_dept_spec);*/

        total_pending_count = count_hr + count_accounting + count_dept_spec;
        //$(this).attr('title',toWords($(this).text()));
        //var number_to_word = toWords(120);
         //number_to_word = findAndReplace(number_to_word, " ", "<br>");



        /*$('#no_of_employee_id').html(1);
        $('#pending_hr_id').html(count_hr);
        $('#pending_accounting_id').html(count_accounting);
        $('#pending_dept_spec_id').html(count_dept_spec);
        $('#total_pending_id').html(total_pending_count);
        $('#total_pending_id').html(total_pending_count);*/

        var no_of_employee_id = new CountUp('no_of_employee_id', 0, count_employee, 0, 1, countOptions);
		no_of_employee_id.start(function() {});

		var pending_hr_id = new CountUp('pending_hr_id', 0, count_hr, 0, 1, countOptions);
		pending_hr_id.start(function() {});

		var pending_accounting_id = new CountUp('pending_accounting_id', 0, count_accounting, 0, 1, countOptions);
		pending_accounting_id.start(function() {});

		var pending_dept_spec_id = new CountUp('pending_dept_spec_id', 0, count_dept_spec, 0, 1, countOptions);
		pending_dept_spec_id.start(function() {});

		var total_pending_id = new CountUp('total_pending_id', 0, total_pending_count, 0, 1, countOptions);
		total_pending_id.start(function() {});


        $('.ui.right.floated.button')
		  .on('click', function() {


		    $('.load-employee-profile')
		  .transition()
		  .transition();
		 //.transition('fade left');
		  /*console.log($(this).attr("value"));*/
		 // console.log(this)
		  var selected_db_id = $(this).attr("value");

		  for (a=0; a< dataRes.length; a++) {


		  	var db_id = dataRes[a].ID;

		  	if(selected_db_id == db_id){

		  		var date_joined = dataRes[a].LI_DateJoined;
       			var temp_datejoined = new Date(date_joined);

		  		//console.log(selected_db_id+" = "+db_id)

		  		var db_id = dataRes[a].ID;
				var employee_id = dataRes[a].LI_EmployeeID;
				var employee_fname = dataRes[a].LI_FirstName;
				var employee_lname = dataRes[a].LI_LastName;
				var employee_full_name = employee_fname +" "+employee_lname;
				var employee_date_joined = temp_datejoined.format("MMMM dd, yyyy");
				var employee_department = dataRes[a].LI_Department;
				var employee_pos = dataRes[a].LI_PositionTitle;
				var employee_dept_head = dataRes[a].LI_DepartmentHead;
				var employee_orient_hr = dataRes[a].Orrient_HR;
				var employee_orient_accntng = dataRes[a].Orrient_ACCNTNG;
				var employee_orient_dept_spec = dataRes[a].Orrient_DEPT_SPEC;
				var employee_orient_new_hire_role = dataRes[a].Orrient_NewHire_NewRole;

				//console.log("employee_orient_new_hire_role: "+employee_orient_new_hire_role);

				//console.log(employee_date_joined);

				if(employee_orient_new_hire_role == null || employee_orient_new_hire_role == "" ){

					document.getElementById("message_success_id_2").innerHTML = "<div class='ui negative compact message'><p><i class='icon attention'></i>Please select employee assignment.</p></div>"


					$("#new_hire_id").prop('checked',false);
					$("#new_role_id").prop('checked',false);
					//console.log("a");

				}else if(employee_orient_new_hire_role == "New Hire"){
					//console.log("b");
					$('#new_hire_id').prop('checked', true);
					$('#new_role_id').prop('checked', false);
					document.getElementById("message_success_id_2").innerHTML=""
				}else if(employee_orient_new_hire_role == "New Role Assignment"){
					$('#new_role_id').prop('checked', true);
					$('#new_hire_id').prop('checked', false);
					document.getElementById("message_success_id_2").innerHTML=""
					
				}


				if(employee_orient_hr == "" || employee_orient_hr == 0 || employee_orient_hr == null){
					$('#hr_checkbox_id').prop('checked', false);
					$('#table_check_me td').find("#check_hr").attr("class","icon");
				}else{
					$('#hr_checkbox_id').prop('checked', true);
					$('#table_check_me td').find("#check_hr").attr("class","icon checkmark");
				}

				if(employee_orient_accntng == "" || employee_orient_accntng == 0 || employee_orient_accntng == null){
					$('#accounting_checkbox_id').prop('checked', false);
					$('#table_check_me td').find("#check_accounting").attr("class","icon");

				}else{
					$('#accounting_checkbox_id').prop('checked', true);
					$('#table_check_me td').find("#check_accounting").attr("class","icon checkmark");
				}

				if(employee_orient_dept_spec == "" || employee_orient_dept_spec == 0 || employee_orient_dept_spec == null){
					$('#dept_spec_checkbox_id').prop('checked', false);
					$('#table_check_me td').find("#check_dept_spec").attr("class","icon");
				}else{
					$('#dept_spec_checkbox_id').prop('checked', true);
					$('#table_check_me td').find("#check_dept_spec").attr("class","icon checkmark");
				}



				$('#employee_temp_id').val(db_id);
				$('#employee_profile_id_no').val(employee_id);
				$('#employee_profile_name').val(employee_full_name);
				$('#employee_profile_date_joined').val(employee_date_joined);
				$('#employee_profile_department').val(employee_department);
				$('#employee_profile_pos').val(employee_pos);
				$('#employee_profile_dept_head').val(employee_dept_head);


		  	}// end if

		  }


		  });

		  $('#example2').progress({
			  percent: 100
			});

		  employee_orient_ids = [];
		  elem = document.getElementById("number_of_check_item")
		  elem.innerHTML = employee_orient_ids.length;


		},//end sucesss
		error: function (error) {
		    alert(JSON.stringify(error));
		    }
		});//end ajax request
}//end function



function update_employee_profile(employee_db_id, Orrient_NewHire_NewRole, db_hr, db_accounting, db_dept_spec) {
	$('#example2').progress({
  percent: 0
});

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Employee Profile');
    this.oListItem = oList.getItemById(employee_db_id);
    oListItem.set_item('Orrient_NewHire_NewRole', Orrient_NewHire_NewRole);
    oListItem.set_item('Orrient_HR', db_hr);
    oListItem.set_item('Orrient_ACCNTNG', db_accounting);
    oListItem.set_item('Orrient_DEPT_SPEC', db_dept_spec);
    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function onQuerySucceeded() {
    //console.log('Items Updated');
   // document.location.reload(true);
	var selected_topic = $('#topic_value_id').val();
	var firstday = $('#startdate_id').val();
	var lastday = $('#enddate_id').val();

	setTimeout(function(){ 
	document.getElementById("loading_screen").innerHTML = "<div class='ui disabled inverted dimmer'><div class='ui medium text loader'>Loading</div></div>";
    }, 1000);

	document.getElementById("message_success_id").innerHTML = "<div class='ui positive compact message'><p><i class='check circle icon'></i>Employee Successfully Updated! </p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);

   	getItems(firstday, lastday, selected_topic);
}

function onQueryFailed(sender, args) {alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());}



//employee_orient_ids=[];
function check_item(check_item){

var evID = $(check_item).closest('tr').attr("style");
//console.log(evID);

if(evID == "display: table-row;"){
  if(document.getElementById(check_item.id).checked == true){

  	var selected_topic = $('#topic_value_id').val();
    	if(selected_topic == "All"){
    		//alert("Please select specific topic!");
    		document.getElementById("message_success_id").innerHTML = "<div class='ui warning compact message'><p><i class='info circle icon'></i>Please select specific topic!</p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);
    		

    		$("#"+check_item.id+"").prop('checked', false);
    	}else{
			var needle = document.getElementById(check_item.id).value;
    		var isInArray = employee_orient_ids.includes(needle);
    		if(isInArray==false){
    		employee_orient_ids.push(document.getElementById(check_item.id).value);
    		}
    		if(employee_orient_ids.length==0){
    		elem.innerHTML = employee_orient_ids.length;
    		}else{
    		elem.innerHTML = employee_orient_ids.length;
    		}

    	}

    
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = employee_orient_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {employee_orient_ids.splice(i, 1);}
    if(employee_orient_ids.length==0){
    elem.innerHTML = employee_orient_ids.length;
    }else{
    elem.innerHTML = employee_orient_ids.length;
    }
  }
}else{
$("#"+check_item.id+"").prop('checked', false);
}


  //console.log(employee_orient_ids);
}


$(document).ready(function() {


//document.getElementById("loading_screen").innerHTML = "<div class='ui active inverted dimmer'><div class='ui text loader'>Loading</div></div>";


$('input').keypress(function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
});



$('#checked_selected_item').click(function() {
	//console.log("checked_selected_item");

	var selected_topic = $('#topic_value_id').val();
	//console.log(selected_topic);
	//console.log(employee_orient_ids);

	
	// setTimeout(function(){ 
	// 			document.getElementById("loading_screen").innerHTML = "<div class='ui disabled inverted dimmer'><div class='ui medium text loader'>Loading</div></div>";
 //             }, 1000);

	if(selected_topic == "HR"){

		//if(employee_orient_ids)

		if(employee_orient_ids.length != 0){
			document.getElementById("loading_screen").innerHTML = "<div class='ui active inverted dimmer'><div class='ui large text loader'>Loading</div></div>";

			var itemArray = [];
		    var clientContext = SP.ClientContext.get_current();
		    var oList = clientContext.get_web().get_lists().getByTitle('Employee Profile');//Modify this

		    for(var i = 0; i<= employee_orient_ids.length-1; i++){ 
		    //console.log("employee_orient_ids: "+employee_orient_ids[i]);  
		    var oListItem = oList.getItemById(employee_orient_ids[i]);  
		    oListItem.set_item('Orrient_HR', '1');//Modify this
		    oListItem.update();
		    itemArray[i] = oListItem;
		    clientContext.load(itemArray[i]);
		    }

		    

		    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);

		}else{

			document.getElementById("message_success_id").innerHTML = "<div class='ui warning compact message'><p><i class='info circle icon'></i>Please select employee/s to be updated!</p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);

		}
		
		
	}
	if(selected_topic == "Accounting"){

		if(employee_orient_ids.length != 0){
			document.getElementById("loading_screen").innerHTML = "<div class='ui active inverted dimmer'><div class='ui large text loader'>Loading</div></div>";
			var itemArray = [];
		    var clientContext = SP.ClientContext.get_current();
		    var oList = clientContext.get_web().get_lists().getByTitle('Employee Profile');//Modify this
		    for(var i = 0; i<= employee_orient_ids.length-1; i++){ 
		    //console.log(employee_orient_ids[i]);  
		    var oListItem = oList.getItemById(employee_orient_ids[i]);  
		    oListItem.set_item('Orrient_ACCNTNG', '1');//Modify this
		    oListItem.update();
		    itemArray[i] = oListItem;
		    clientContext.load(itemArray[i]);
		    }
		    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
		}else{
			document.getElementById("message_success_id").innerHTML = "<div class='ui warning compact message'><p><i class='info circle icon'></i>Please select employee/s to be updated!</p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);
		}
		
	
	}
	if(selected_topic == "Department-specific"){

		if(employee_orient_ids.length != 0){
			document.getElementById("loading_screen").innerHTML = "<div class='ui active inverted dimmer'><div class='ui large text loader'>Loading</div></div>";
			var itemArray = [];
		    var clientContext = SP.ClientContext.get_current();
		    var oList = clientContext.get_web().get_lists().getByTitle('Employee Profile');//Modify this
		    for(var i = 0; i<= employee_orient_ids.length-1; i++){ 
		    //console.log(employee_orient_ids[i]);  
		    var oListItem = oList.getItemById(employee_orient_ids[i]);  
		    oListItem.set_item('Orrient_DEPT_SPEC', '1');//Modify this
		    oListItem.update();
		    itemArray[i] = oListItem;
		    clientContext.load(itemArray[i]);
			}
			clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
		}else{
			document.getElementById("message_success_id").innerHTML = "<div class='ui warning compact message'><p><i class='info circle icon'></i>Please select employee/s to be updated!</p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);
		}
		
		
	}

	



});

$('#unchecked_selected_item').click(function() {

	var selected_topic = $('#topic_value_id').val();
	//console.log(selected_topic);
	//console.log(employee_orient_ids);

	


	if(selected_topic == "HR"){


		if(employee_orient_ids.length != 0){
			document.getElementById("loading_screen").innerHTML = "<div class='ui active inverted dimmer'><div class='ui large text loader'>Loading</div></div>";
			var itemArray = [];
		    var clientContext = SP.ClientContext.get_current();
		    var oList = clientContext.get_web().get_lists().getByTitle('Employee Profile');//Modify this
		    for(var i = 0; i<= employee_orient_ids.length-1; i++){ 
		   // console.log(employee_orient_ids[i]);  
		    var oListItem = oList.getItemById(employee_orient_ids[i]);  
		    oListItem.set_item('Orrient_HR', '0');//Modify this
		    oListItem.update();
		    itemArray[i] = oListItem;
		    clientContext.load(itemArray[i]);
		    }

		    

		    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
		}else{
			document.getElementById("message_success_id").innerHTML = "<div class='ui warning compact message'><p><i class='info circle icon'></i>Please select employee/s to be updated!</p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);
		}
		
		
	}
	if(selected_topic == "Accounting"){

		if(employee_orient_ids.length != 0){
			document.getElementById("loading_screen").innerHTML = "<div class='ui active inverted dimmer'><div class='ui large text loader'>Loading</div></div>";
			var itemArray = [];
		    var clientContext = SP.ClientContext.get_current();
		    var oList = clientContext.get_web().get_lists().getByTitle('Employee Profile');//Modify this
		    for(var i = 0; i<= employee_orient_ids.length-1; i++){ 
		    //console.log(employee_orient_ids[i]);  
		    var oListItem = oList.getItemById(employee_orient_ids[i]);  
		    oListItem.set_item('Orrient_ACCNTNG', '0');//Modify this
		    oListItem.update();
		    itemArray[i] = oListItem;
		    clientContext.load(itemArray[i]);
		    }
		    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
		}else{
			document.getElementById("message_success_id").innerHTML = "<div class='ui warning compact message'><p><i class='info circle icon'></i>Please select employee/s to be updated!</p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);
		}
		
		
	}
	if(selected_topic == "Department-specific"){

		if(employee_orient_ids.length != 0){
			document.getElementById("loading_screen").innerHTML = "<div class='ui active inverted dimmer'><div class='ui large text loader'>Loading</div></div>";
			var itemArray = [];
		    var clientContext = SP.ClientContext.get_current();
		    var oList = clientContext.get_web().get_lists().getByTitle('Employee Profile');//Modify this
		    for(var i = 0; i<= employee_orient_ids.length-1; i++){ 
		   // console.log(employee_orient_ids[i]);  
		    var oListItem = oList.getItemById(employee_orient_ids[i]);  
		    oListItem.set_item('Orrient_DEPT_SPEC', '0');//Modify this
		    oListItem.update();
		    itemArray[i] = oListItem;
		    clientContext.load(itemArray[i]);
			}
			clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
		}else{
			document.getElementById("message_success_id").innerHTML = "<div class='ui warning compact message'><p><i class='info circle icon'></i>Please select employee/s to be updated!</p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);
		}
		
		
	}

	



});


$('#chkbox_select_all').on('change', function () {



    if ($(this).prop('checked')) {
    	var selected_topic = $('#topic_value_id').val();
    	if(selected_topic == "All"){
    		//alert("Please select specific topic!");
    		document.getElementById("message_success_id").innerHTML = "<div class='ui warning compact message'><p><i class='info circle icon'></i>Please select specific topic!</p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);
    		$(this).prop('checked', false);
    	}
        $("input[name='chkbox_name']").each(function () {
        	
        	if(selected_topic != "All"){
        	$(this).prop('checked', true).trigger('change');
        	}
            
        });
    } else {
        $("input[name='chkbox_name']").each(function () {
            $(this).prop('checked', false).trigger('change');
        });
    }
});


// Write on keyup event of keyword input element
	$("#employee_search").keyup(function(){
		// When value of the input is not blank
		if( $(this).val() != "")
		{
			// Show only matching TR, hide rest of them
			$("#list_employee_for_orient tbody>tr").hide();
			$("#list_employee_for_orient td:contains-ci('" + $(this).val() + "')").parent("tr").show();

		}
		else
		{
			// When there is no input or clean again, show everything back
			$("#list_employee_for_orient tbody>tr").show();
		}
	});
// jQuery expression for case-insensitive filter



$('#toogle_checked_items').change(function() {

var selected_topic = $('#topic_value_id').val();
var firstday = $('#startdate_id').val();
var lastday = $('#enddate_id').val();

getItems(firstday, lastday, selected_topic);

});


$('#topic_dropdown_id').change(function() {

var selected_topic = $('#topic_value_id').val();
var firstday = $('#startdate_id').val();
var lastday = $('#enddate_id').val();

//console.log(firstday+" - "+lastday);

getItems(firstday, lastday, selected_topic);


});


$('#employee_orient_save_btn').click(function() {



	var Orrient_NewHire_NewRole="";
	var db_hr=0;
	var db_accounting=0;
	var db_dept_spec=0;



	var ischeck_new_hire = $('#new_hire_id').is(':checked'); 
	if(ischeck_new_hire == true){
		//console.log($('#new_hire_id').val());
		Orrient_NewHire_NewRole = $('#new_hire_id').val();
	}
	var ischeck_new_role = $('#new_role_id').is(':checked'); 
	if(ischeck_new_role == true){
		//console.log($('#new_role_id').val());
		Orrient_NewHire_NewRole = $('#new_role_id').val();
	}

	var ischeck_hr = $('#hr_checkbox_id').is(':checked'); 
	var ischeck_accounting = $('#accounting_checkbox_id').is(':checked'); 
	var ischeck_dept_spec = $('#dept_spec_checkbox_id').is(':checked'); 
	var employee_db_id = $('#employee_temp_id').val();
	
	if(employee_db_id){

		if(ischeck_hr){
			db_hr = 1;
		}else{
			db_hr = 0;
		}
		//----------------------------
		if(ischeck_accounting){
			db_accounting = 1;
		}else{
			db_accounting = 0;
		}
		//----------------------------
		if(ischeck_dept_spec){
			db_dept_spec = 1;
		}else{
			db_dept_spec = 0;
		}
		//----------------------------

		
		/*console.log(employee_db_id+": "+Orrient_NewHire_NewRole);
		console.log("db_hr: "+db_hr);
		console.log("db_accounting: "+db_accounting);
		console.log("db_dept_spec: "+db_dept_spec);*/


		update_employee_profile(employee_db_id, Orrient_NewHire_NewRole, db_hr, db_accounting, db_dept_spec)


	}else{
		//alert("Please select employee to be updated!")
		document.getElementById("message_success_id").innerHTML = "<div class='ui warning compact message'><p><i class='info circle icon'></i>Please select employee to be updated!</p></div>"
            setTimeout(function(){ 
                $('.message')
                  .closest('.message')
                  .transition('fade')
                ;
             }, 3000);
	}



});


	$(".chb").change(function()
      {
          $(".chb").prop('checked',false);
          $(this).prop('checked',true);
      });



$('.ui.sticky')
  .sticky()
;

$('.ui.dropdown')
  .dropdown()
;





$('#table_check_me tr').change(function() {

	var ischeck_hr = $('#hr_checkbox_id').is(':checked'); 
	if(ischeck_hr == true){
		$('#table_check_me td').find("#check_hr").attr("class","icon checkmark");

	}else{
		$('#table_check_me td').find("#check_hr").attr("class","icon");
	}

	//---------------------------------------

	var ischeck_accounting = $('#accounting_checkbox_id').is(':checked'); 
	if(ischeck_accounting == true){
		$('#table_check_me td').find("#check_accounting").attr("class","icon checkmark");

	}else{
		$('#table_check_me td').find("#check_accounting").attr("class","icon");
	}

	//--------------------------------------



	var ischeck_dept_spec = $('#dept_spec_checkbox_id').is(':checked'); 
	if(ischeck_dept_spec == true){
		$('#table_check_me td').find("#check_dept_spec").attr("class","icon checkmark");

	}else{
		$('#table_check_me td').find("#check_dept_spec").attr("class","icon");
	}



});
var d = new Date(new Date().getFullYear(), 0, 1);
//console.log(d);
 var fd = Date.today().clearTime().moveToFirstDayOfMonth();
// console.log(fd);
 var firstday = d.toString("MM/dd/yyyy");
//alert(firstday);

$('#startdate_id').val(firstday);
$('#rangestart').calendar({
  type: 'date',
  today: true,
  endCalendar: $('#rangeend'),
  onHidden: function () {
   		var selected_topic_2 = $('#topic_value_id').val();
		var firstday_2 = $('#startdate_id').val();
		var lastday_2 = $('#enddate_id').val();

		getItems(firstday_2, lastday_2, selected_topic_2);

		//console.log("enddate: "+selected_topic_2+" - "+firstday_2+" - "+lastday_2);
    },
  
});


//-----------------------------------------------
 // var ld = Date.today().clearTime().moveToLastDayOfMonth();
 var ld = Date.today();
 var lastday = ld.toString("MM/dd/yyyy");
//alert(lastday);

$('#enddate_id').val(lastday);
$('#rangeend').calendar({
  type: 'date',
  today: true,
  startCalendar: $('#rangestart'),
  onHidden: function () {
   		var selected_topic_2 = $('#topic_value_id').val();
		var firstday_2 = $('#startdate_id').val();
		var lastday_2 = $('#enddate_id').val();

		getItems(firstday_2, lastday_2, selected_topic_2);

		//console.log("enddate: "+selected_topic_2+" - "+firstday_2+" - "+lastday_2);
    },
});


getItems(firstday, lastday,"All");




});//end document ready


$.extend($.expr[":"], 
{
    "contains-ci": function(elem, i, match, array) 
    {
        return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});


