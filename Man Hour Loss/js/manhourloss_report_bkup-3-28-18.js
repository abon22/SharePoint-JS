

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet">
  <script type="text/javascript" src="/SiteAssets/Scripts/js/jquery.min.js"></script>
  <script type="text/javascript" src="/SiteAssets/Scripts/js/moment.min.js"></script>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script>
  
<style>

/** ---------------------------------------- **/

@media screen and (max-width: 580px) {
  body {
    font-size: 16px;
    line-height: 22px;
  }
}

.wrapper {
  margin: 0 auto;
  padding: 0px;
  max-width: 1450px;
}

.table {
  margin: 0 0 40px 0;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: table;
}
@media screen and (max-width: 580px) {
  .table {
    display: block;
  }
}

.fixdiv{

	position:fixed;
	margin: auto;
	z-index:10;
	top: 65px;
	padding: 4px 0;
	width: 25%;
	border-radius: 5px;
	background: #fcfcfc;
	text-align: center;
	opacity:0.9;
	/*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	transition: opacity 0.25s linear, top 0.25s linear;*/
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  

}

.row {
  display: table-row;
  background: #f6f6f6;
}
.row:nth-of-type(odd) {
  background: #e9e9e9;
}
.row.header {
  font-weight: 900;
  color: #ffffff;
  background: #ea6153;
}
.row.green {
  background: #27ae60;
}
.row.blue {
  background: #2980b9;
}
.row.orange {
  background: #DC3912;
}
@media screen and (max-width: 580px) {
  .row {
    padding: 14px 0 7px;
    display: block;
  }
  .row.header {
    padding: 0;
    height: 6px;
  }
  .row.header .cell {
    display: none;
  }
  .row .cell {
    margin-bottom: 10px;
  }
  .row .cell:before {
    margin-bottom: 3px;
    content: attr(data-title);
    min-width: 98px;
    font-size: 10px;
    line-height: 10px;
    font-weight: bold;
    text-transform: uppercase;
    color: #969696;
    display: block;
  }
}

.cell {
  padding: 6px 12px;
  display: table-cell;
}
@media screen and (max-width: 580px) {
  .cell {
    padding: 2px 16px;
  }
}

/** ---------------------------------------- **/

#sideNavBox {
display: none;
}
#contentBox {
margin-left: 20px;
}
.ms-fullscreenmode #contentBox
{
    margin-left: 0;
}




#table_id tr:nth-child(even) {background: #f7f7f7}
#table_id tr:nth-child(odd) {background: #FFF}
#table_id_employee tr:nth-child(even) {background: #f7f7f7}
#table_id_employee tr:nth-child(odd) {background: #FFF}

*, *:before, *:after {
  box-sizing: border-box;
}


.c-dropdown {
  position: relative;
  display: inline-block;
  text-align: left;
}
.c-dropdown__list {
  margin: 5px 0 0 0;
  padding: 6px 0;
  list-style: none;
  position: absolute;
  top: 125%;
  left: 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  border-radius: 10px;
  background: #fcfcfc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: opacity 0.25s linear, top 0.25s linear;
}
.c-dropdown.is-open .c-dropdown__list {
  opacity: 1;
  visibility: visible;
  top: 100%;
}
.c-dropdown__item {
  padding: 6px 12px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  color: #434a54;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color 0.25s linear;
}
.c-dropdown__item:hover {
  background-color: #e6e9ed;
}
/**
 * Component: Button
 * --------------------------------------------------
 */
.c-button {
  -webkit-appearance: none;
  margin: 0;
  border: 0;
  overflow: visible;
  font: inherit;
  text-transform: none;
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  text-align: center;
  user-select: none;
}
.c-button:hover, .c-button:focus {
  outline: none;
  text-decoration: none;
}
.c-button:not(:disabled) {
  cursor: pointer;
}
/**
 * Component: Button
 * Modifier: Dropdown
 * --------------------------------------------------
 */
.c-button--dropdown {
  padding: 6px 34px 6px 12px;
  background-color: #1BA1E2;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  min-height: 32px;
  border-radius: 3px;
  transition: background-color 0.2s linear;
}
.c-button--dropdown:hover {
  background-color: #46bbf2;
}
.c-button--dropdown:after {
  content: "";
  position: absolute;
  top: 14px;
  right: 11px;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top-color: #e6e9ed;
}



</style>
  <script type="text/javascript">



var avg_div;
var total_per_emp_div;

var date_today = new Date();
var current_month = date_today.getMonth();
var arr_month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']



function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}


var arr_data=[];
      function drawChart() {
        ////console.log("-------------------------------");
        ////console.log(arr_data);
        ////console.log("-------------------------------");
        var data = google.visualization.arrayToDataTable(arr_data);

          ////console.log(data);

        var options = {
          title: 'Per Department Per Occurence',
        
          pieHole: 0.5,
        showLables: 'true',
        pieSliceText: 'value',
        pieSliceTextStyle: {
            color: 'white',
            fontSize:15
        },
        animation:{
        duration: 1000,
        startup: true, 
        easing: 'out',
      },
        is3D:true,

          

          legend:'labeled'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);

      }



    
 var arr_data_line=[];

      function drawChart2() {
        var data2 = google.visualization.arrayToDataTable(arr_data_line);

        var options2 = {
          title: 'Man Hour Loss Chart',
          animation: {
          startup: true,   /* Need to add this for animations */
          duration: 1000,
          easing: 'out',
        }, curveType: 'function',
        legend: 'right',
        pointSize: 5,
        hAxis: {
          title: 'Month'
        },
        vAxis:{    /* You may wish to add this to make curve animations appear from the bottom of the chart */
          title: '% Per Manpower',
          baseline: 0,
        }

        };

        var chart2 = new google.visualization.LineChart(document.getElementById('curve_chart'));
        chart2.draw(data2, options2);
      }

      	var manhour_manpower_data = [];
        function drawChart3() {

        var department_manhour2 =  [
        ["Department", "Man Hour Loss", { role: 'annotation' } ],
        ["IT", 8.94, '8.94'],
        ["CHROD", 10.49, '10.49'],
        ["TQM", 19.30, '19.30'],
        ["FINANCE", 21.45, '21.45']
      ];
       // var data2 = google.visualization.arrayToDataTable(department_manhour);
       	//console.log("===============================")
        //console.log(department_manhour2);
        //console.log("===============================")


       /* var department_manhour =  [
        manhour_manpower_data
      ];*/
      //	console.log(manhour_manpower_data);
      var data2 = google.visualization.arrayToDataTable(manhour_manpower_data)

   
        var options2 = {
          title: 'Departmental Manhour Loss Vs Manpower Number',
          animation: {
          startup: true,   /* Need to add this for animations */
          duration: 1000,
          easing: 'out',
        },
        legend: 'right',
        is3D:true,
        hAxis: {
          title: 'Departments'
        },
        vAxis:{    /* You may wish to add this to make curve animations appear from the bottom of the chart */
          title: 'Man Hour Loss (hour)',
          baseline: 0,
        }

        };

        var chart2 = new google.visualization.ColumnChart(document.getElementById('bar_chart'));
        chart2.draw(data2, options2);
      }



var what_department="";
function getItems(url,selected_year,selected_month,set_what_department) {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {

          avg_div = document.getElementById('per_dept_disp');
          total_per_emp_div = document.getElementById('per_emp_disp');
          

          emp_title = document.getElementById('emp_title');
          dept_title = document.getElementById('dept_title');
          

          emp_title.innerHTML = "Report "+selected_year+" By Employee";
          dept_title.innerHTML = "Report "+selected_year+" By Department";
          
          avg_div.innerHTML = "<div class='row header orange'><div class='cell'>Department Name</div><div class='cell'>Total</div><div class='cell'>Jan</div><div class='cell'>Feb</div><div class='cell'>Mar</div><div class='cell'>Apr</div><div class='cell'>May</div><div class='cell'>Jun</div><div class='cell'>Jul</div><div class='cell'>Aug</div><div class='cell'>Sep</div><div class='cell'>Oct</div><div class='cell'>Nov</div><div class='cell'>Dec</div></div>";


          total_per_emp_div.innerHTML = "<div class='row header blue'><div class='cell'>Employee Name</div><div class='cell'>Total</div><div class='cell'>Jan</div><div class='cell'>Feb</div><div class='cell'>Mar</div><div class='cell'>Apr</div><div class='cell'>May</div><div class='cell'>Jun</div><div class='cell'>Jul</div><div class='cell'>Aug</div><div class='cell'>Sep</div><div class='cell'>Oct</div><div class='cell'>Nov</div><div class='cell'>Dec</div></div>";

        

          //('#table_id').innerHTML="";

          dataRes = data.d.results;
          ////console.log(dataRes);
          var var_dept=[];
          var var_year=[];
          var arr_year=[];



        for (a=0; a< dataRes.length; a++) {
          var db_year = moment(dataRes[a].Date).format("YYYY");
          if(db_year){
            var_year.push(db_year);
          }
        }
        arr_year = var_year.filter(onlyUnique).sort();


        var year_div = document.getElementById('year_append_id');
        var year_list="";

        var department_div = document.getElementById('department_append_id');
        var department_list="";


        //--------------------------------------------------------
         for (a=0; a< arr_year.length; a++) {

          if(selected_year!=arr_year[a]){
            year_list += "<li class='c-dropdown__item' data-dropdown-value='"+arr_year[a]+"'>"+arr_year[a]+"</li>";
          }

            
         }


          
           year_div.innerHTML=" Select Year: <input type='hidden' name='Year' id='Year' class='js-dropdown__input' value='"+selected_year+"'><span class='c-button c-button--dropdown js-dropdown__current'>"+selected_year+"</span><ul class='c-dropdown__list'>"+year_list+"</ul>";

        for (a=0; a< dataRes.length; a++) {
          var db_department = dataRes[a].Department.Title;
          var db_year = moment(dataRes[a].Date).format("YYYY");


          if(db_department){
          	if(db_year == selected_year){
          		var_dept.push(db_department);
          	}

            
          }

        }
       // arr_department = var_dept.filter(onlyUnique).sort();
        arr_department = var_dept.filter(onlyUnique).sort();

        
        if(set_what_department){
        	what_department = set_what_department;
        }else{
        	what_department = "All";
        }

        //what_department = set_what_department;
        if(what_department != "All"){
        	//console.log("a");

        	for (var i=arr_department.length-1; i>=0; i--) {
			    if (arr_department[i] != what_department) {
			        arr_department.splice(i, 1);
			        // break;       //<-- Uncomment  if only the first term has to be removed
			    }
			}
        }
        //--------------------------------------------------------

        //console.log(arr_department)

        //--------------------------------------------------------
        var var_dept_select=[];

        var arr_department_select=[];
        for (a=0; a< dataRes.length; a++) {
          var db_department_select = dataRes[a].Department.Title;
           var db_year = moment(dataRes[a].Date).format("YYYY");


          if(db_department_select){
          	if(db_year == selected_year){
          		var_dept_select.push(db_department_select);
          	}

            
          }

        }
        //var_dept_select.push("All");
        arr_department_select = var_dept_select.filter(onlyUnique).sort();
        arr_department_select.push("All");
        //console.log("################################")
        //console.log(arr_department_select);
        //console.log("################################")


        for (a=0; a< arr_department_select.length; a++) {

          if(what_department!=arr_department_select[a]){
            department_list += "<li class='c-dropdown__item' data-dropdown-value='"+arr_department_select[a]+"'>"+arr_department_select[a]+"</li>";
          }

            
         }
         department_div.innerHTML="";
         department_div.innerHTML="Select Department: <input type='hidden' name='Department_Name' id='department_id' class='js-dropdown__input3' value='"+what_department+"'><span class='c-button c-button--dropdown js-dropdown__current3'>"+what_department+"</span><ul class='c-dropdown__list'>"+department_list+"</ul>";



        //-------------------------------------------------------------------------------------------------------------------------------------




          

        for (i=0; i< arr_department.length; i++) {

           var totalperjan = 0, totalperfeb = 0, totalpermar = 0, totalperapr = 0, totalpermay = 0, totalperjun = 0, totalperjul = 0, totalperaug = 0, totalpersep = 0, totalperoct = 0, totalpernov = 0, totalperdec = 0;


          for (a=0; a< dataRes.length; a++) {

       

            var created = dataRes[a].Date;
            var fmtcreatedyear =  moment(created).format("YYYY");
            var fmtcreatedmonth = moment(created).format("MMM");

              if(fmtcreatedyear==selected_year){





                    if(fmtcreatedmonth=="Jan" && arr_department[i] == dataRes[a].Department.Title){
                      totalperjan +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Feb"  && arr_department[i] == dataRes[a].Department.Title){
                      totalperfeb +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Mar"  && arr_department[i] == dataRes[a].Department.Title){
                      totalpermar +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Apr"  && arr_department[i] == dataRes[a].Department.Title){
                      totalperapr +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="May"  && arr_department[i] == dataRes[a].Department.Title){
                      totalpermay +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jun"  && arr_department[i] == dataRes[a].Department.Title){
                      totalperjun +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jul"  && arr_department[i] == dataRes[a].Department.Title){
                      totalperjul +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Aug"  && arr_department[i] == dataRes[a].Department.Title){
                      totalperaug +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Sep"  && arr_department[i] == dataRes[a].Department.Title){
                      totalpersep +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Oct"  && arr_department[i] == dataRes[a].Department.Title){
                      totalperoct +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Nov"  && arr_department[i] == dataRes[a].Department.Title){
                      totalpernov +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Dec"  && arr_department[i] == dataRes[a].Department.Title){
                      totalperdec +=dataRes[a].Hours;
                      
                    }
              }


          } //for loop

            var department_append ="<div class='cell' style='font-weight:500'> "+arr_department[i]+"</div>";

            totalperjan = totalperjan || 0;

            var jan_append ="<div class='cell' > "+parseFloat(totalperjan).toFixed(2)+"</div>";

            totalperfeb = totalperfeb || 0;
            var feb_append ="<div class='cell' > "+parseFloat(totalperfeb).toFixed(2)+"</div>";

            totalpermar = totalpermar || 0;
            var mar_append ="<div class='cell' > "+parseFloat(totalpermar).toFixed(2)+"</div>";

            totalperapr = totalperapr || 0;
            var apr_append ="<div class='cell' > "+parseFloat(totalperapr).toFixed(2)+"</div>";

            totalpermay = totalpermay || 0;
            var may_append ="<div class='cell' > "+parseFloat(totalpermay).toFixed(2)+"</div>";

            totalperjun = totalperjun || 0;
            var jun_append ="<div class='cell' > "+parseFloat(totalperjun).toFixed(2)+"</div>";

            totalperjul = totalperjul || 0;
            var jul_append ="<div class='cell' > "+parseFloat(totalperjul).toFixed(2)+"</div>";

            totalperaug = totalperaug || 0;
            var aug_append ="<div class='cell' > "+parseFloat(totalperaug).toFixed(2)+"</div>";

            totalpersep = totalpersep || 0;
            var sep_append ="<div class='cell' > "+parseFloat(totalpersep).toFixed(2)+"</div>";

            totalperoct = totalperoct || 0;
            var oct_append ="<div class='cell' > "+parseFloat(totalperoct).toFixed(2)+"</div>";

            totalpernov = totalpernov || 0;
            var nov_append ="<div class='cell' > "+parseFloat(totalpernov).toFixed(2)+"</div>";

            totalperdec = totalperdec || 0;

            var dec_append ="<div class='cell' > "+parseFloat(totalperdec).toFixed(2)+"</div>";

            var total_per_department = totalperjan + totalperfeb + totalpermar + totalperapr + totalpermay + totalperjun + totalperjul + totalperaug + totalpersep + totalperoct + totalpernov + totalperdec;

            var total_append ="<div class='cell' > "+parseFloat(total_per_department).toFixed(2)+"</div>";


          $('#per_dept_disp').append("<div class='row'>"+department_append+"<b style='font-weight:500'>"+total_append+"</b>"+jan_append+""+feb_append+""+mar_append+""+apr_append+""+may_append+""+jun_append+""+jul_append+""+aug_append+""+sep_append+""+oct_append+""+nov_append+""+dec_append+"</div>");




        }//for loop


        //-------------------------------------------------------------------------------------------------------------------------------------

          var arr_employee;
          var employee_list=[];

         for (a=0; a< dataRes.length; a++) {
          var db_employee = dataRes[a].Name.Title;
          var created = dataRes[a].Date;
          var db_department = dataRes[a].Department.Title;
          var fmtcreatedyear =  moment(created).format("YYYY");

          if(db_employee){
          		if(what_department!="All"){
          			if(fmtcreatedyear==selected_year && db_department == what_department){
		                employee_list.push(db_employee);
		            }

          		}else{
          			if(fmtcreatedyear==selected_year){
		                employee_list.push(db_employee);
		            }
          		}
            

          }

        }

        arr_employee = employee_list.filter(onlyUnique).sort();
        
//console.log(arr_employee);


for (i=0; i< arr_employee.length; i++) {

           var totalperjan = 0, totalperfeb = 0, totalpermar = 0, totalperapr = 0, totalpermay = 0, totalperjun = 0, totalperjul = 0, totalperaug = 0, totalpersep = 0, totalperoct = 0, totalpernov = 0, totalperdec = 0;


          for (a=0; a< dataRes.length; a++) {

       

            var created = dataRes[a].Date;
            var fmtcreatedyear =  moment(created).format("YYYY");
            var fmtcreatedmonth = moment(created).format("MMM");
            var employee_name = dataRes[a].Name.Title;
            

            //alert(arr_department);



              if(fmtcreatedyear==selected_year && arr_employee[i]==employee_name){


                    if(fmtcreatedmonth=="Jan" ){
                      totalperjan +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Feb"  ){
                      totalperfeb +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Mar"  ){
                      totalpermar +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Apr"  ){
                      totalperapr +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="May"  ){
                      totalpermay +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jun"  ){
                      totalperjun +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jul"  ){
                      totalperjul +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Aug"  ){
                      totalperaug +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Sep"  ){
                      totalpersep +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Oct"  ){
                      totalperoct +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Nov"  ){
                      totalpernov +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Dec"  ){
                      totalperdec +=dataRes[a].Hours;
                      
                    }
              }


          } //for loop

            var employee_append ="<div class='cell' style='font-weight:500'>"+arr_employee[i]+"</div>";

            totalperjan = totalperjan || 0;

            var jan_append ="<div class='cell' > "+parseFloat(totalperjan).toFixed(2)+"</div>";

            totalperfeb = totalperfeb || 0;
            var feb_append ="<div class='cell' > "+parseFloat(totalperfeb).toFixed(2)+"</div>";

            totalpermar = totalpermar || 0;
            var mar_append ="<div class='cell' > "+parseFloat(totalpermar).toFixed(2)+"</div>";

            totalperapr = totalperapr || 0;
            var apr_append ="<div class='cell' > "+parseFloat(totalperapr).toFixed(2)+"</div>";

            totalpermay = totalpermay || 0;
            var may_append ="<div class='cell' > "+parseFloat(totalpermay).toFixed(2)+"</div>";

            totalperjun = totalperjun || 0;
            var jun_append ="<div class='cell' > "+parseFloat(totalperjun).toFixed(2)+"</div>";

            totalperjul = totalperjul || 0;
            var jul_append ="<div class='cell' > "+parseFloat(totalperjul).toFixed(2)+"</div>";

            totalperaug = totalperaug || 0;
            var aug_append ="<div class='cell' > "+parseFloat(totalperaug).toFixed(2)+"</div>";

            totalpersep = totalpersep || 0;
            var sep_append ="<div class='cell' > "+parseFloat(totalpersep).toFixed(2)+"</div>";

            totalperoct = totalperoct || 0;
            var oct_append ="<div class='cell' > "+parseFloat(totalperoct).toFixed(2)+"</div>";

            totalpernov = totalpernov || 0;
            var nov_append ="<div class='cell' > "+parseFloat(totalpernov).toFixed(2)+"</div>";

            totalperdec = totalperdec || 0;

            var dec_append ="<div class='cell' > "+parseFloat(totalperdec).toFixed(2)+"</div>";

            var total_per_department = totalperjan + totalperfeb + totalpermar + totalperapr + totalpermay + totalperjun + totalperjul + totalperaug + totalpersep + totalperoct + totalpernov + totalperdec;

            var total_append ="<div class='cell' > "+parseFloat(total_per_department).toFixed(2)+"</div>";


          $('#per_emp_disp').append("<div class='row'>"+employee_append+"<b style='font-weight:500'>"+total_append+"</b>"+jan_append+""+feb_append+""+mar_append+""+apr_append+""+may_append+""+jun_append+""+jul_append+""+aug_append+""+sep_append+""+oct_append+""+nov_append+""+dec_append+"</div>");


        }//for loop


//-------------------------------------------------------------------------------------------------------------------------------------


var arr_department;
arr_data=[];
var arr_obj=[];


        arr_obj=['Department', 'Total Hours Loss'];
        arr_data.push(arr_obj)

        for (a=0; a< arr_department.length; a++) {


          var dept_loss_hours = 0;
          for (b=0; b< dataRes.length; b++) {
            var fmtcreatedyear =  moment(dataRes[b].Date).format("YYYY");
            //////console.log("fmtcreatedyear: "+fmtcreatedyear);
            //////console.log("selected_year: "+selected_year);
            if(fmtcreatedyear==selected_year){

              if(arr_department[a] == dataRes[b].Department.Title){
             dept_loss_hours +=dataRes[b].Hours;
            }
            }
            

          }
          ////console.log(arr_department[a]+": "+Number(dept_loss_hours).toFixed(2));
          //arr_obj = arr_department[a];
            var hoursloss = Number(dept_loss_hours).toFixed(2);
          arr_obj = [arr_department[a], Number(hoursloss)];

         arr_data.push(arr_obj)

        }

      ////console.log(arr_data);

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);


////console.log(arr_data_line2);

var arr_months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    var data_line_obj=[];
    var data_line_dept = [];

    data_line_dept.push("Month");
    for (a=0; a< arr_department.length; a++) {
    data_line_dept.push(arr_department[a]);
    }

var arr_main = [];
var arr_obj2=[];

arr_main.push(data_line_dept);

    for (a=0; a< arr_months.length; a++) {
    var arr_data_per_month=[];
    arr_data_per_month.push(arr_months[a]);

    for (b=0; b< arr_department.length; b++) {
         var dept_loss_hours = 0;
      for (c=0; c< dataRes.length; c++) {
          var fmtcreatedyear =  moment(dataRes[c].Date).format("YYYY");
          var fmtcreatedmonth =  moment(dataRes[c].Date).format("MMM");

          if(fmtcreatedyear==selected_year){

            if(arr_months[a] == fmtcreatedmonth){

              if(arr_department[b] == dataRes[c].Department.Title){
              dept_loss_hours =dept_loss_hours+dataRes[c].Hours;
            }

            }
          }

      }
      
      var hoursloss = Number(dept_loss_hours).toFixed(2);
      arr_data_per_month.push(Number(hoursloss));
    }

    arr_main.push(arr_data_per_month);
    }

    arr_data_line = arr_main;

////console.log("***************************")
////console.log(arr_main);

      google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart2);

      var var_month=[];
      var arr_month=[];

         for (b=0; b< dataRes.length; b++) {
              var db_month = moment(dataRes[b].Date).format("MMM");
              var db_year = moment(dataRes[b].Date).format("YYYY");
              if(selected_year==db_year){
                var_month.push(db_month);

              }
            }

         arr_month = var_month.filter(onlyUnique);

        for (a=0; a<arr_month.length; a++) {

          var last_month = "";
          last_month = arr_month[a];
        }
        
        if(selected_month){
           last_month = selected_month;
        }else{
          last_month = last_month;
        }

      getItems2(urlForAllItems2,selected_year,last_month);


        },//end sucesss
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });//end ajax request
}//end function
var dataRes2;

function getItems2(url,selected_year,selected_month) {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {

        	//alert(what_department);

          dataRes2 = data.d.results;
         //console.log(dataRes2.length);

          var arr_count_dept =[];

          for (a=0; a< dataRes2.length; a++) {
          arr_count_dept.push(dataRes2[a].LI_Department);
          }
          var counts_departments={};
          arr_count_dept.forEach(function(x) { counts_departments[x] = (counts_departments[x] || 0)+1; });

         //console.log(counts_departments);


          dept_loss_number_percent = document.getElementById('per_dept_percent');
          dept_percent_title = document.getElementById('dept_percent_title');
          dept_percent_title.innerHTML = "Departmental Hours Percentage ("+selected_month+")";

          dept_loss_number_percent.innerHTML = "<div class='row header blue'><div class='cell'>Department Name</div><div class='cell'>Manhour Loss</div><div class='cell'>Manpower</div><div class='cell'>% Per Manpower</div></div>";

        var var_month=[];
        var arr_month=[];


         for (b=0; b< dataRes.length; b++) {
              var db_month = moment(dataRes[b].Date).format("MMM");
              var db_year = moment(dataRes[b].Date).format("YYYY");
              var db_department = dataRes[b].Department.Title;


              if(what_department != "All"){
              	if(selected_year==db_year && what_department==db_department){
	                var_month.push(db_month);
	             }
              }else{
              	if(selected_year==db_year){
                	var_month.push(db_month);
              	}

              }
              


            }

         arr_month = var_month.filter(onlyUnique);
         //console.log("*************");
         
         //console.log("*************");



        var month_div = document.getElementById('month_append_id');
        var month_list="";
        

        for (a=0; a<arr_month.length; a++) {
          if(selected_month!=arr_month[a]){
              month_list += "<li class='c-dropdown__item' data-dropdown-value='"+arr_month[a]+"'>"+arr_month[a]+"</li>";
          }

          var last_month = "";
          last_month = arr_month[a];
        }

        if(selected_month){
           last_month = selected_month;
        }else{
          last_month = last_month;
        }
      
        month_div.innerHTML = "Select Month: <input type='hidden' name='Month' id='Month' class='js-dropdown__input2' value='"+last_month+"'><span class='c-button c-button--dropdown js-dropdown__current2'>"+last_month+"</span><ul class='c-dropdown__list'>"+month_list+"</ul>"



        var var_dept=[];
        var arr_department=[];


        for (c=0; c< dataRes.length; c++) {
          var db_department = dataRes[c].Department.Title;
          var db_year = moment(dataRes[c].Date).format("YYYY");


          if(db_department){
          		if(db_year == selected_year){
          			var_dept.push(db_department);
          		}
            
          }

        }
        arr_department = var_dept.filter(onlyUnique).sort();

        
        if(what_department != "All"){
        	//console.log("a");

        	for (var i=arr_department.length-1; i>=0; i--) {
			    if (arr_department[i] != what_department) {
			        arr_department.splice(i, 1);
			        // break;       //<-- Uncomment  if only the first term has to be removed
			    }
			}
        }

       // console.log("-----department-----");
        //console.log(arr_department);
       // console.log("-----department-----");

        //-----------------------------------------------------------------------------------------------------------
        manhour_manpower_data = [];
        manhour_manpower_data.push(["Department", "Man Hour Loss", { role: 'annotation' } ]);
        
          for (i=0; i< arr_department.length; i++) {

            var arr_manhour_manpower = [];

           var totalperjan = 0, totalperfeb = 0, totalpermar = 0, totalperapr = 0, totalpermay = 0, totalperjun = 0, totalperjul = 0, totalperaug = 0, totalpersep = 0, totalperoct = 0, totalpernov = 0, totalperdec = 0;


          for (a=0; a< dataRes.length; a++) {

       

            var created = dataRes[a].Date;
            var fmtcreatedyear =  moment(created).format("YYYY");
            var fmtcreatedmonth = moment(created).format("MMM");

              if(fmtcreatedyear==selected_year){

                    if(fmtcreatedmonth=="Jan" && arr_department[i] == dataRes[a].Department.Title){
                      totalperjan +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Feb"  && arr_department[i] == dataRes[a].Department.Title){
                      totalperfeb +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Mar"  && arr_department[i] == dataRes[a].Department.Title){
                      totalpermar +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Apr"  && arr_department[i] == dataRes[a].Department.Title){
                      totalperapr +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="May"  && arr_department[i] == dataRes[a].Department.Title){
                      totalpermay +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jun"  && arr_department[i] == dataRes[a].Department.Title){
                      totalperjun +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Jul"  && arr_department[i] == dataRes[a].Department.Title){
                      totalperjul +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Aug"  && arr_department[i] == dataRes[a].Department.Title){
                      totalperaug +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Sep"  && arr_department[i] == dataRes[a].Department.Title){
                      totalpersep +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Oct"  && arr_department[i] == dataRes[a].Department.Title){
                      totalperoct +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Nov"  && arr_department[i] == dataRes[a].Department.Title){
                      totalpernov +=dataRes[a].Hours;

                    }else if(fmtcreatedmonth=="Dec"  && arr_department[i] == dataRes[a].Department.Title){
                      totalperdec +=dataRes[a].Hours;
                      
                    }
              }


          } //for loop

            var department_append ="<div class='cell' style='font-weight:500'> "+arr_department[i]+"</div>";

            totalperjan = totalperjan || 0;

            var jan_append ="<div class='cell' > "+parseFloat(totalperjan).toFixed(2)+"</div>";

            totalperfeb = totalperfeb || 0;
            var feb_append ="<div class='cell' > "+parseFloat(totalperfeb).toFixed(2)+"</div>";

            totalpermar = totalpermar || 0;
            var mar_append ="<div class='cell' > "+parseFloat(totalpermar).toFixed(2)+"</div>";

            totalperapr = totalperapr || 0;
            var apr_append ="<div class='cell' > "+parseFloat(totalperapr).toFixed(2)+"</div>";

            totalpermay = totalpermay || 0;
            var may_append ="<div class='cell' > "+parseFloat(totalpermay).toFixed(2)+"</div>";

            totalperjun = totalperjun || 0;
            var jun_append ="<div class='cell' > "+parseFloat(totalperjun).toFixed(2)+"</div>";

            totalperjul = totalperjul || 0;
            var jul_append ="<div class='cell' > "+parseFloat(totalperjul).toFixed(2)+"</div>";

            totalperaug = totalperaug || 0;
            var aug_append ="<div class='cell' > "+parseFloat(totalperaug).toFixed(2)+"</div>";

            totalpersep = totalpersep || 0;
            var sep_append ="<div class='cell' > "+parseFloat(totalpersep).toFixed(2)+"</div>";

            totalperoct = totalperoct || 0;
            var oct_append ="<div class='cell' > "+parseFloat(totalperoct).toFixed(2)+"</div>";

            totalpernov = totalpernov || 0;
            var nov_append ="<div class='cell' > "+parseFloat(totalpernov).toFixed(2)+"</div>";

            totalperdec = totalperdec || 0;

            var dec_append ="<div class='cell' > "+parseFloat(totalperdec).toFixed(2)+"</div>";


          var manhour_loss_total="";
          if(selected_month=="Jan"){
              manhour_loss_total = totalperjan;
          }else if(selected_month=="Feb"){
              manhour_loss_total = totalperfeb;
          }else if(selected_month=="Mar"){
              manhour_loss_total = totalpermar;
          }else if(selected_month=="Apr"){
              manhour_loss_total = totalperapr;
          }else if(selected_month=="May"){
              manhour_loss_total = totalpermay;
          }else if(selected_month=="Jun"){
              manhour_loss_total = totalperjun;
          }else if(selected_month=="Jul"){
              manhour_loss_total = totalperjul;
          }else if(selected_month=="Aug"){
              manhour_loss_total = totalperaug;
          }else if(selected_month=="Sep"){
              manhour_loss_total = totalpersep;
          }else if(selected_month=="Oct"){
              manhour_loss_total = totalperoct;
          }else if(selected_month=="Nov"){
              manhour_loss_total = totalpernov;
          }else if(selected_month=="Dec"){
              manhour_loss_total = totalperdec;
          }

            

          /*if(arr_department[i] == "" ){

          }*/
          //console.log(counts_departments[arr_department[i]]);

            var percent = manhour_loss_total / counts_departments[arr_department[i]];
            //console.log(percent);

          $('#per_dept_percent').append("<div class='row'>"+department_append+"<div class='cell' ><b style='font-weight:500'>"+parseFloat(manhour_loss_total).toFixed(2)+"</b></div><div class='cell' >"+counts_departments[arr_department[i]]+"</div><div class='cell' ><b style='font-weight:500'>"+parseFloat(percent).toFixed(2)+"</b></div></div>");
            
          // manhour_manpower_obj = arr_department[i],
          arr_manhour_manpower = [arr_department[i], Number(parseFloat(percent).toFixed(2)), parseFloat(percent).toFixed(2)];
          manhour_manpower_data.push(arr_manhour_manpower);


        }//for loop
        //-----------------------------------------------------------------------------------------------------------

          //console.log(manhour_manpower_data);



      /*var department_manhour =  [
        ["Department", "Man Hour Loss", { role: 'annotation' } ],
        ["Copper", 8.94, '8.94'],
        ["Silver", 10.49, '10.49'],
        ["Gold", 19.30, '19.30'],
        ["Platinum", 21.45, '21.45']
      ];*/
      /*var department_manhour =  [
        ["Department", "Man Hour Loss", { role: 'annotation' } ],
        manhour_manpower_data
      ];*/
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart3);


        },//end success
        error: function (error) {
            alert(JSON.stringify(error));
        }
      });//end ajax request
  }//end function

/*&$filter=Name ne 'Attachments' and Name ne 'Item' and Name ne 'Forms'*/


var urlForAllItems = "/_api/Web/Lists/GetByTitle('Man Hour Loss')/Items?$select=Man_x0020_hour_x0020_loss_x0020_,Hours,Date,Id,Hours,Department/Id,Department/Title,Name/Title,Name&$expand=Name/Title&$expand=Department&$OrderBy=Date asc";

var urlForAllItems2 = "/_api/Web/Lists/GetByTitle('Employee Profile')/Items?$select=LI_Department&$top=1000&$OrderBy=LI_Department asc&$filter=LI_Separated eq 'Active' ";

 		function OnScrollDiv (div) {
           //console.log(div.scrollTop);
           //temp_scroll=div.scrollTop;
           //console.log(this.scrollTop);
           //console.log(div.scrollTop);

      	  if (div.scrollTop > 100) {
		    $("#id_div_fixed").addClass("fixdiv");
		   // console.log("hey_a");
		  } else {
		    $("#id_div_fixed").removeClass("fixdiv");
		    //console.log("hey_b");
		  }
        }

      $(document).ready(function() {

      	 
       // $('#Year').val('2018');
        var currentTime = new Date()
        var current_year = currentTime.getFullYear();
        var current_month = currentTime.getMonth();

        //alert(arr_month[current_month]);
        getItems(urlForAllItems,current_year,arr_month[current_month],"All");
        
        $("#s4-workspace").scroll(function() {
		    OnScrollDiv(this);
		}); 

      });



  var $html = $('html');
  
  $html.on('click.ui.dropdown', '.js-dropdown', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
  });
  
  $html.on('click.ui.dropdown', '.js-dropdown [data-dropdown-value]', function(e) {
    e.preventDefault();
    var $item = $(this);
    var $dropdown = $item.parents('.js-dropdown');
    $dropdown.find('.js-dropdown__input').val($item.data('dropdown-value'));
    $dropdown.find('.js-dropdown__current').text($item.text());

    var selected_year = $item.data('dropdown-value');
    ////console.log(selected_year);

    getItems(urlForAllItems,selected_year);


  });
  
  $html.on('click.ui.dropdown', function(e) {
    var $target = $(e.target);
    if (!$target.parents().hasClass('js-dropdown')) {
      $('.js-dropdown').removeClass('is-open');
      //////console.log("b");
    }
  });

//------------------------------------------------------------------------------------

var $html2 = $('html');
  $html2.on('click.ui.dropdown', '.js-dropdown2', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
  });

   $html2.on('click.ui.dropdown', '.js-dropdown2 [data-dropdown-value]', function(e) {
    e.preventDefault();
    var $item = $(this);
    var $dropdown = $item.parents('.js-dropdown2');
    $dropdown.find('.js-dropdown__input2').val($item.data('dropdown-value'));
    $dropdown.find('.js-dropdown__current2').text($item.text());

    var selected_month = $item.data('dropdown-value');
    //console.log("selected_month: "+selected_month);
    var get_selected_year = $("#Year").val();

   ////console.log(get_selected_year);

    getItems2(urlForAllItems2,get_selected_year,selected_month);
    //getItems(urlForAllItems,selected_year);

  });

     $html2.on('click.ui.dropdown', function(e) {
    var $target = $(e.target);
    if (!$target.parents().hasClass('js-dropdown2')) {
      $('.js-dropdown2').removeClass('is-open');
      ////console.log("b");
    }
  });

 //------------------------------------------------------------------------------------

 var $html2 = $('html');
  $html2.on('click.ui.dropdown', '.js-dropdown3', function(e) {
    e.preventDefault();
    $(this).toggleClass('is-open');
  });

   $html2.on('click.ui.dropdown', '.js-dropdown3 [data-dropdown-value]', function(e) {
    e.preventDefault();
    var $item = $(this);
    var $dropdown = $item.parents('.js-dropdown3');
    $dropdown.find('.js-dropdown__input3').val($item.data('dropdown-value'));
    $dropdown.find('.js-dropdown__current3').text($item.text());

    var selected_dept = $item.data('dropdown-value');
    //console.log("selected_month: "+selected_month);
    var get_selected_year = $("#Year").val();
    var get_selected_month = $("#Month").val();

   ////console.log(get_selected_year);
//alert("aw");
    //getItems2(urlForAllItems2,get_selected_year,get_selected_month);
    getItems(urlForAllItems,get_selected_year,get_selected_month,selected_dept);

  });

     $html2.on('click.ui.dropdown', function(e) {
    var $target = $(e.target);
    if (!$target.parents().hasClass('js-dropdown3')) {
      $('.js-dropdown3').removeClass('is-open');
      ////console.log("b");
    }
  });

 //------------------------------------------------------------------------------------
  

/*<div class="c-dropdown js-dropdown2" id="">Select Month: <input type='hidden' name='Month' id='Month' class='js-dropdown__input2' value='Selected Month'><span class='c-button c-button--dropdown js-dropdown__current2'>Selected Month</span><ul class='c-dropdown__list'><li class="c-dropdown__item" data-dropdown-value="test">test</li></ul></div>
    </div>
    */


/*style="position:fixed;z-index:10;"*/
  </script>


</head>

<body>
<br>

<div id="id_div_fixed" >
		<div class="c-dropdown js-dropdown" id="year_append_id" ></div> &nbsp &nbsp &nbsp
		<div class="c-dropdown js-dropdown3" id="department_append_id" ></div>
</div>

<span align="right"><h2><a style="text-decoration:none" href="https://intranet.houseofit.com.au/Lists/Man%20Hour%20Loss/AllItems.aspx">Man Hour Loss Calendar/Entry</a></h2></span>

<div class="wrapper">
<h1 id="emp_title"></h1>
  <div class="table" id="per_emp_disp">
  </div>
</div>



<div id="curve_chart"  align="center" style="width: 100%; height: 500px"></div>

<table class="columns" cellpadding="10" >
<tr>
  <td style="vertical-align: top;"><br><br>
    <div class="wrapper">
    <h1 id="dept_title" align="center"></h1>
      <div class="table" id="per_dept_disp">
      </div>
    </div>
  </td>

  <td style="vertical-align: top;">

    <div class="wrapper" style="">
      <div class="c-dropdown js-dropdown2" id="month_append_id"></div>

      <h1 id="dept_percent_title" align="center"></h1>
      <div class="table" id="per_dept_percent">
      </div>

  </td>

</tr>

<tr>
<td style="width:900px;height:500px;">
<div id="piechart" style="width:100%;height: 100%;"  align="center"  ></div></td>
<td style="width:900px;height:500px;">
<div id="bar_chart"  style="width:100%;height: 100%;" align="center"></div></td>
</tr>
</table>


</body>


 
</html>
