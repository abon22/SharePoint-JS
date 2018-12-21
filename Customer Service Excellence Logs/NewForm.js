<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

//get the name of the current user
var context = null;
var web = null;
var currentUser = null;
var currentName;



ExecuteOrDelayUntilScriptLoaded(GetUserLoginName, "sp.js");

function GetUserLoginName() {
  context = new SP.ClientContext.get_current();
  web = context.get_web();
  this._currentUser = web.get_currentUser();
  context.load(this._currentUser);
  context.executeQueryAsync(Function.createDelegate(this, this.onSuccessMethod),
  Function.createDelegate(this, this.onFailureMethod));
}




function onSuccessMethod(sender, args) {

// document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff831_ctl00_ctl00_TextField').value =this._currentUser.get_title();
//change the ID here to your people picker field ID.

// currentName = this._currentUser.get_title();
// var admin1 = "Henry Ybalez";

// 	if (document.getElementById("ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDate") != admin1 && document.getElementById("ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage") != admin1){

// 		//readonly request date
// 		$("input[id='ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
//     	document.getElementById("ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "25";
// 		var from_cal2 = document.getElementById("ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
//     		from_cal2.src = "";
//     		from_cal2.alt = "";
// 	}

  


}

var Employee_Username;
var emp_targetListItem;
var Employee_ID;
var Item_ID = -1;
var Submit = "good";

function Get_EmployeeID(){
	  var clientContext = new SP.ClientContext('https://intranet.houseofit.com.au/');
      var oList = clientContext.get_web().get_lists().getByTitle('Employee Profile');
      var camlQuery = new SP.CamlQuery();
      camlQuery.set_viewXml('<View><Query><Where><Eq><FieldRef Name=\'LI_Username\'/>' + 
        '<Value Type=\'Text\'>'+Employee_Username+'</Value></Eq></Where></Query><RowLimit>1</RowLimit></View>');
        this.emp_targetListItem = oList.getItems(camlQuery);
      clientContext.load(emp_targetListItem);
      clientContext.executeQueryAsync(Function.createDelegate(this, this.Get_EmployeeID_Succeeded), Function.createDelegate(this, this.onQueryFailed));
}

function Get_EmployeeID_Succeeded(){
	 var enumerator = emp_targetListItem.getEnumerator();

    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();  
        Item_ID = listItem.get_item("ID");
        Employee_ID = listItem.get_item("LI_EmployeeID");
    }

    if(Item_ID != -1){
    	// alert(Employee_ID);

    	document.getElementById("ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff61_ctl00_ctl00_TextField").value = Employee_ID;
    	Item_ID = -1;
    	Submit = "good"
    }
    else if(Item_ID == -1){
    	Submit = "bad"
    	alert("Person Involved is not yet added to the Employee Database");
    }

}
function onQueryFailed(){
	alert("Query Failed");
}



$(document).ready(function()
{

	$('#ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff41_ctl00_ctl00_UserField_upLevelDiv').bind('DOMNodeInserted', function() {
	if(document.getElementById("ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff41_ctl00_ctl00_UserField_hiddenSpanData").value != "&#160;"){
		var username = document.querySelector('.ms-entity-resolved').id;
		var array_username = username.split("\\");
		Employee_Username = array_username[1];
		// alert(Employee_Username);
		ExecuteOrDelayUntilScriptLoaded(Get_EmployeeID, "sp.js");
	// break;
	}
});

	//readonly cse log no.
	$("input[id='ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff101_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	document.getElementById("ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff101_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
	document.getElementById("ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff101_ctl00_ctl00_TextField").size = "25";
	document.getElementById("ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff61_ctl00_ctl00_TextField").style.width = "150px";
	$("input[id='ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff61_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


	//readonly revision
	$("input[id='ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	document.getElementById("ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff21_ctl00_ctl00_TextField").className = "ms-long ms-spellcheck-true ";
	document.getElementById("ctl00_ctl43_g_cd391338_cbe3_458a_b4e2_5036e0751526_ff21_ctl00_ctl00_TextField").size = "25";


			//----Chage Save to Submit------
	var inputcontrols = document.getElementsByTagName("input");
	for(i = 0; i<inputcontrols.length; i++)
	{
	    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
	        inputcontrols[i].value = "Submit";
	}
	var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
	ribbonSave.text("Submit");    




});

function PreSaveAction()
{

	if(Submit == "good"){

		return true;
	}
	if(Submit == "bad"){
		alert("Person Involved is not yet added to the Employee Database");
		return false;
	}



}






</script>