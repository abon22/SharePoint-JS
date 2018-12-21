​​​​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">


//var status_executive = $("select[title='Status (Executive)']").val();
var issue_id;
var status;

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

function init(){

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));

 }

 function onQuerySucceeded() {


 var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;


get_issue_type= $("select[title='Status']").val();
get_memo_no= $("input[title='Memo No']").val();
explanation= $("textarea[title='Employee Explanation']").val();

// alert(targetUser);

if(get_issue_type=="Forwarded"){

	if(targetUser=="diannag" || targetUser=="ninoc" ||  targetUser=="alfieo" || targetUser=="fernandos" || targetUser=="carla")
	{
	SPUtility.GetSPField('Status').MakeEditable();
	}else
	{
	$("input[id='ctl00_ctl43_g_be3335ce_5ebd_4f3c_a832_836ea5476b33_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

	}

}else if(get_issue_type=="Issue NTE"){

if(explanation=="")
{

SPUtility.ShowSPField('Memo No');
SPUtility.GetSPField('Memo No').MakeReadOnly();

//SPUtility.ShowSPField('Department/Section');

SPUtility.HideSPField('Team Head');
SPUtility.HideSPField('Team Head');
SPUtility.HideSPField('Employee Involved');
SPUtility.HideSPField('CC');

//SPUtility.ShowSPField('Employee Name(Other Specify)');

SPUtility.ShowSPField('Date');
SPUtility.ShowSPField('Code of Conduct');
SPUtility.ShowSPField('Level of Offense');
SPUtility.ShowSPField('Possible Decision');
SPUtility.ShowSPField('Department');
SPUtility.ShowSPField('Position Title');
SPUtility.ShowSPField('Employee Explanation');
SPUtility.GetSPField('Employee Explanation').MakeEditable();

	if(targetUser=="diannag" || targetUser=="ninoc" ||  targetUser=="alfieo" || targetUser=="fernandos" || targetUser=="carla")
	{
	SPUtility.GetSPField('Status').MakeEditable();
	}


}

else
{

SPUtility.ShowSPField('Memo No');
SPUtility.GetSPField('Memo No').MakeReadOnly();

//SPUtility.ShowSPField('Department/Section');

SPUtility.HideSPField('Team Head');
SPUtility.HideSPField('Team Head');
SPUtility.HideSPField('Employee Involved');
SPUtility.HideSPField('CC');

//SPUtility.ShowSPField('Employee Name(Other Specify)');

SPUtility.ShowSPField('Date');
SPUtility.ShowSPField('Code of Conduct');
SPUtility.ShowSPField('Level of Offense');
SPUtility.ShowSPField('Possible Decision');
SPUtility.ShowSPField('Department');
SPUtility.ShowSPField('Position Title');
SPUtility.ShowSPField('Employee Explanation');

	if(targetUser=="diannag" || targetUser=="ninoc" ||  targetUser=="alfieo" || targetUser=="fernandos" || targetUser=="carla")
	{
	SPUtility.GetSPField('Status').MakeEditable();
	}

}


}else if(get_issue_type == "In Progress")
{

SPUtility.ShowSPField('CC');
  if(targetUser=="diannag" || targetUser=="ninoc" || targetUser=="alfieo" || targetUser=="fernandos" || targetUser=="carla")
  {
  SPUtility.GetSPField('Status').MakeEditable();
  }
}


else if(get_issue_type=="Issued Notice of Decision" && get_memo_no !=""){

SPUtility.ShowSPField('Memo No');
SPUtility.GetSPField('Memo No').MakeReadOnly();
SPUtility.ShowSPField('Team Head');
SPUtility.ShowSPField('Employee Name');

SPUtility.ShowSPField('Date');
SPUtility.ShowSPField('Code of Conduct');
SPUtility.ShowSPField('Level of Offense');
SPUtility.ShowSPField('Possible Decision');

SPUtility.ShowSPField('Final Decision');
SPUtility.ShowSPField('Level of Penalties');
SPUtility.ShowSPField('Guilty of Committing');
SPUtility.ShowSPField('Department');
SPUtility.ShowSPField('Position Title');
SPUtility.ShowSPField('Employee Explanation');
SPUtility.ShowSPField('CC');



if(targetUser=="diannag" || targetUser=="ninoc" || targetUser=="alfieo" || targetUser=="fernandos" || targetUser=="carla")
{

SPUtility.GetSPField('Status').MakeEditable();
}else
{
$("input[id='ctl00_ctl43_g_be3335ce_5ebd_4f3c_a832_836ea5476b33_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

}

}

else if(get_issue_type=="Case Closed" && get_memo_no !=""){

SPUtility.ShowSPField('Memo No');
//SPUtility.ShowSPField('Department/Section');
SPUtility.ShowSPField('Team Head');
SPUtility.ShowSPField('Employee Name');
//SPUtility.ShowSPField('Employee Name(Other Specify)');
SPUtility.ShowSPField('Date');
SPUtility.ShowSPField('Code of Conduct');
SPUtility.ShowSPField('Level of Offense');
SPUtility.ShowSPField('Possible Decision');
SPUtility.ShowSPField('Final Decision');
SPUtility.ShowSPField('Level of Penalties');
SPUtility.ShowSPField('Guilty of Committing');
SPUtility.ShowSPField('Department');
SPUtility.ShowSPField('Position Title');
SPUtility.ShowSPField('Employee Explanation');
SPUtility.ShowSPField('CC');

$("input[id='ctl00_ctl43_g_be3335ce_5ebd_4f3c_a832_836ea5476b33_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


}



 //----------------------------------------------------------------------------------------------------------

 var d = new Date();


$('select[id=Status0_ca20d50d-627c-4dff-9a08-464693059bc8_$DropDownChoice]').change( function() {
   status = $('select[id=Status0_ca20d50d-627c-4dff-9a08-464693059bc8_$DropDownChoice]').val();


  if(status == "In Progress")
  {

SPUtility.HideSPField('Memo No');
//SPUtility.HideSPField('Department/Section');
SPUtility.HideSPField('Team Head');
SPUtility.HideSPField('Employee Name');
//SPUtility.HideSPField('Employee Name(Other Specify)');
SPUtility.HideSPField('Date');
SPUtility.HideSPField('Code of Conduct');
SPUtility.HideSPField('Level of Offense');
SPUtility.HideSPField('Possible Decision');
SPUtility.ShowSPField('CC');
SPUtility.HideSPField('Department');
SPUtility.HideSPField('Position Title');


  }
   else if(status == "Forwarded")
  {

SPUtility.HideSPField('Memo No');
//SPUtility.HideSPField('Department/Section');
SPUtility.HideSPField('Team Head');
SPUtility.HideSPField('Employee Name');
//SPUtility.HideSPField('Employee Name(Other Specify)');
SPUtility.HideSPField('Date');
SPUtility.HideSPField('Code of Conduct');
SPUtility.HideSPField('Level of Offense');
SPUtility.HideSPField('Possible Decision');
SPUtility.ShowSPField('Department');
SPUtility.ShowSPField('Position Title');
  }
  else if(status == "Issue NTE")
  {

 // alert(issue_id);

//alert(issue_id.toString().length);

//$("input[id='Requestor_x0027_s_x0020_Name_dcda19f9-49d6-4f54-bee5-ba231b633505_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
if(issue_id.toString().length == 1)
{

document.getElementById('Memo_x0020_No_4c5cabe5-2f7d-465b-9c87-fdce6de04632_$TextField').value = "Memo-"+d.getFullYear()+"-00"+issue_id ;

}
else if(issue_id.toString().length == 2)
{
document.getElementById('Memo_x0020_No_4c5cabe5-2f7d-465b-9c87-fdce6de04632_$TextField').value = "Memo-"+d.getFullYear()+"-0"+issue_id ;
}
else if(issue_id.toString().length == 3)
{
document.getElementById('Memo_x0020_No_4c5cabe5-2f7d-465b-9c87-fdce6de04632_$TextField').value = "Memo-"+d.getFullYear()+"-"+issue_id ;
}

SPUtility.GetSPField('Memo No').MakeReadOnly();


SPUtility.ShowSPField('Memo No');
//SPUtility.ShowSPField('Department/Section');
SPUtility.ShowSPField('Team Head');
SPUtility.GetSPField('Team Head').MakeEditable();

SPUtility.ShowSPField('Employee Name');
SPUtility.GetSPField('Employee Name').MakeEditable();
//SPUtility.ShowSPField('Employee Name(Other Specify)');
SPUtility.ShowSPField('Date');
SPUtility.GetSPField('Date').MakeEditable();
SPUtility.ShowSPField('Code of Conduct');
SPUtility.GetSPField('Code of Conduct').MakeEditable();
SPUtility.ShowSPField('Level of Offense');
SPUtility.GetSPField('Level of Offense').MakeEditable();
SPUtility.ShowSPField('Possible Decision');
SPUtility.GetSPField('Possible Decision').MakeEditable();
SPUtility.ShowSPField('Department');
SPUtility.GetSPField('Department').MakeEditable();
SPUtility.ShowSPField('Position Title');
SPUtility.GetSPField('Position Title').MakeEditable();
SPUtility.ShowSPField('CC');
SPUtility.GetSPField('CC').MakeEditable();

//alert((d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear())

document.getElementById('Date_62b3a37a-a6ca-4a13-b1e8-4de2d7eafc49_$DateTimeFieldDate').value =(d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear();

  }
  else if(status == "Issued Notice of Decision")
  {

SPUtility.ShowSPField('Final Decision');
SPUtility.GetSPField('Final Decision').MakeEditable();
SPUtility.ShowSPField('Level of Penalties');
SPUtility.GetSPField('Level of Penalties').MakeEditable();
SPUtility.ShowSPField('Guilty of Committing');
SPUtility.GetSPField('Guilty of Committing').MakeEditable();

  }
  else if(status == "Case Closed")
  {



  }

  });

//----------------------------------------------------------------------------------------------------------------





}

function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());

    $("input[id='ctl00_ctl43_g_be3335ce_5ebd_4f3c_a832_836ea5476b33_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}



$(function() {


SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
SPUtility.HideSPField('Date and Time Created');

SPUtility.GetSPField('Date and Time Changed').MakeReadOnly();
SPUtility.HideSPField('Date and Time Changed');

SPUtility.GetSPField('Duration(Report to NTE)').MakeReadOnly();
SPUtility.HideSPField('Duration(Report to NTE)');


SPUtility.GetSPField('Duration(NTE to Closed)').MakeReadOnly();
SPUtility.HideSPField('Duration(NTE to Closed)');

SPUtility.GetSPField('Duration (Reported to Closed)').MakeReadOnly();
SPUtility.HideSPField('Duration (Reported to Closed)');

SPUtility.GetSPField('Reporter Name').MakeReadOnly();
SPUtility.GetSPField('Reporter Department/Section').MakeReadOnly();
//SPUtility.GetSPField('Employee Involved').MakeReadOnly();
SPUtility.GetSPField('Date and Time').MakeReadOnly();
SPUtility.GetSPField('Date').MakeReadOnly();
SPUtility.GetSPField('Incident Type').MakeReadOnly();
SPUtility.GetSPField('Issue/Concern').MakeReadOnly();
SPUtility.GetSPField('Status').MakeReadOnly();


//SPUtility.GetSPField('Memo No').MakeReadOnly();
SPUtility.HideSPField('Memo No');
SPUtility.HideSPField('Team Head');
//SPUtility.GetSPField('Employee Name').MakeReadOnly();
SPUtility.HideSPField('Employee Name');
SPUtility.GetSPField('Date').MakeReadOnly();
SPUtility.HideSPField('Date');
SPUtility.GetSPField('Code of Conduct').MakeReadOnly();
SPUtility.HideSPField('Code of Conduct');
SPUtility.GetSPField('Level of Offense').MakeReadOnly();
SPUtility.HideSPField('Level of Offense');
SPUtility.GetSPField('Possible Decision').MakeReadOnly();
SPUtility.HideSPField('Possible Decision');
SPUtility.GetSPField('Final Decision').MakeReadOnly();
SPUtility.HideSPField('Final Decision');
SPUtility.GetSPField('Level of Penalties').MakeReadOnly();
SPUtility.HideSPField('Level of Penalties');
SPUtility.GetSPField('Guilty of Committing').MakeReadOnly();
SPUtility.HideSPField('Guilty of Committing');
SPUtility.GetSPField('Employee Explanation').MakeReadOnly();
SPUtility.HideSPField('Employee Explanation');
SPUtility.GetSPField('Department').MakeReadOnly();
SPUtility.HideSPField('Department');
SPUtility.GetSPField('Position Title').MakeReadOnly();
SPUtility.HideSPField('Position Title');
//SPUtility.GetSPField('CC').MakeReadOnly();
SPUtility.HideSPField('CC');



//------change Save to Submit---------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");
//-------------------------------------

var from_cal = document.getElementById("Date_x0020_and_x0020_Time_a2e639ee-470e-40bc-aa35-c23b26daadad_$DateTimeFieldDateDatePickerImage");
from_cal.src = "";
from_cal.alt = "";


  // Get the ID from the query string
  var id = getQueryString()["ID"];
 issue_id= 130 + parseInt(id);
//alert(issue_id);

  // Find the form's main table
  var table = $('table.ms-formtable');

  // Add a row with the ID in
  table.prepend(
    "<tr><td class='ms-formlabel'><h3 class='ms-standardheader'>Issue ID</h3></td>" +
                "<td class='ms-formbody'>" + id + "&nbsp;</td></tr>"
                );

 document.getElementById("Description_x0020_of_x0020_Offen_f0929e09-b19d-48da-bcf5-dd19e8005ee3_$TextField").style.height = "164px";
 document.getElementById("Description_x0020_of_x0020_Offen_f0929e09-b19d-48da-bcf5-dd19e8005ee3_$TextField").style.width = "571px";

 //document.getElementById("Offense_0d2f5619-6d37-4ac5-8602-c2f1cfffcc06_$TextField").style.height = "65px";
 //document.getElementById("Offense_0d2f5619-6d37-4ac5-8602-c2f1cfffcc06_$TextField").style.width = "571px";

 document.getElementById("Code_x0020_of_x0020_Conduct_6cf46556-c237-4bab-9867-a5ca625544be_$TextField").style.height = "164px";
 document.getElementById("Code_x0020_of_x0020_Conduct_6cf46556-c237-4bab-9867-a5ca625544be_$TextField").style.width = "571px";

  //document.getElementById("Possible_x0020_Decision_f083f774-e3bd-4de5-9bd3-681683d81add_$TextField").style.height = "65px";
 //document.getElementById("Possible_x0020_Decision_f083f774-e3bd-4de5-9bd3-681683d81add_$TextField").style.width = "571px";

  document.getElementById("Guilty_x0020_of_x0020_Committing_7707a2ad-a279-4acf-a568-665d83d2e553_$TextField").style.height = "150px";
 document.getElementById("Guilty_x0020_of_x0020_Committing_7707a2ad-a279-4acf-a568-665d83d2e553_$TextField").style.width = "571px";


 document.getElementById("Employee_x0020_Explanation_b64c6926-8c26-4b4c-855c-803e511e9440_$TextField").style.height = "250px";
 document.getElementById("Employee_x0020_Explanation_b64c6926-8c26-4b4c-855c-803e511e9440_$TextField").style.width = "571px";

                })
function getQueryString() {
  var assoc = new Array();
  var queryString = unescape(location.search.substring(1));
  var keyValues = queryString.split('&');
  for (var i in keyValues) {
    var key = keyValues[i].split('=');
    assoc[key[0]] = key[1];
    }
  return assoc;
}

 $(document).ready(function()
{



})



function PreSaveAction()
{

//--------------------------------------------------

var currentdate = new Date();
var getHour_temp = ((currentdate.getHours()<10)?'0':'')+currentdate.getHours();
var getMinutes_temp = ((currentdate.getMinutes()<10)?'0':'')+currentdate.getMinutes();

var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + getHour_temp + ":"
                + getMinutes_temp;


var created_date_time = $("input[title='Date and Time Created']").val();
var timeAgo = jQuery.timeago(new Date(created_date_time));

//--------------------------------------------------



var employee_name= $("div[title='Employee Name']").text().trim();

//var employee_other = document.getElementById('Employee_x0020_Name_x0028_Other__a7a3af3f-7ba4-47e7-9dc3-896450c1d6c7_$TextField').value;

var team_head= $("div[title='Team Head']").text().trim();
//var dept_section = document.getElementById('Department_x002f_Section0_b55a0411-0dfd-4ae3-b181-253bd5f78cf1_$TextField').value;
var offense = document.getElementById('Offense_0d2f5619-6d37-4ac5-8602-c2f1cfffcc06_$DropDownChoice').value;
var possible_descision= document.getElementById('Possible_x0020_Decision_f083f774-e3bd-4de5-9bd3-681683d81add_$DropDownChoice').value;

var duration_r2c = $("input[title='Duration (Reported to Closed)']").val();

var department = $('select[id=Department_6730f7a9-2e9c-4f00-a96e-194d6ba38229_$LookupField]').val();
var position_title = $('select[id=Position_x0020_Title_a5af7f32-09f0-410b-91bb-95a2792ab042_$LookupField]').val();

var code_conduct = $("textarea[id='Code_x0020_of_x0020_Conduct_6cf46556-c237-4bab-9867-a5ca625544be_$TextField']").val();



var status_nod = $('select[id=Status0_ca20d50d-627c-4dff-9a08-464693059bc8_$DropDownChoice]').val();
var get_decision = $("select[id='Decision_6e62b9b6-4d41-4a3a-9447-6c463990347e_$DropDownChoice']").val();
var get_penalty = $("select[id='Level_x0020__x0020_of_x0020_Pena_a139adb2-c4ec-4a92-a91c-cd851f0c7642_$DropDownChoice']").val();

var guilty_of = $("textarea[id='Guilty_x0020_of_x0020_Committing_7707a2ad-a279-4acf-a568-665d83d2e553_$TextField']").val();
var explanation = $("textarea[id='Employee_x0020_Explanation_b64c6926-8c26-4b4c-855c-803e511e9440_$TextField']").val();

if (status == "Issue NTE"){


if(employee_name == "Enter a name or email address..."){
  alert("Please add Employee Name!");

  return false;
}else if(department == '0'){
alert("Please select a Department!");
return false;

}else if(position_title == '0'){
alert("Please select a Position Title!");
return false;

}else if(team_head == "Enter a name or email address..."){
  alert("Please add Team Head");

  return false;
}else if (code_conduct == ''){

alert("Code of Conduct needs value, Please enter a code of conduct!");

}else if(offense == ""){
  alert("Please enter Level of Offense!");

  return false;
  }
else if(possible_descision== ""){
     alert("Please enter Posible Decision!");

  return false;
  }


  else
  {

  document.getElementById('Date_x0020_and_x0020_Time_x0020_0_c2aaeedd-427e-451f-b350-53e72f2c52ba_$TextField').value = datetime;
  document.getElementById('Duration_x0028_Report_x0020_to_x_738bf1d7-f8e6-40af-b501-f1a45c01b0ef_$TextField').value = timeAgo;

  return true;
 // return false;


  }
}
else if(status == "Issued Notice of Decision"){

if(guilty_of == ''){
alert("Guilty needs a value, Please enter Guilty of Committing!");
return false;

}else if(explanation == ''){
alert("Explanation needs a value, Please enter Employee Explanation!");
return false;

}else if(get_decision == '' || get_penalty == ''){
alert("Final decision and level of penalties needs a value, Please input Final Decision and Level of Penalties!");
return false;

}else
{
return true;
}



}
else if(get_issue_type == "Issue NTE" && status == "Case Closed" ){

var changed_date_time = $("input[title='Date and Time Changed']").val();
var timeAgoChange = jQuery.timeago(new Date(changed_date_time));
document.getElementById('Duration_x0028_NTE_x0020_to_x002_474bc622-9efb-4ba1-96a5-2a200728d584_$TextField').value = timeAgoChange;
return true
}


else if(status == "Case Closed" && duration_r2c == ""){

document.getElementById('Duration_x0020_Report_x0020_to_x_7b4cccea-c274-4c44-836d-380f9b4e1c53_$TextField').value = timeAgo;
return true;
//return false;
}

else
{
return true;
//return false;
}



//---------------------------------------------------------






//--------------------------------------------------------
}



</script>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
