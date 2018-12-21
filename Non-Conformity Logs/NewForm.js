<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>


_spBodyOnLoadFunctionNames.push("dropDownTypeofEvaluation");


function dropDownTypeofEvaluation()
    {

    }




$(document).ready(function()
{

//----Chage Save to Submit------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");    

//resize Describe the Existing Problem
document.getElementById("ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff111_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff111_ctl00_ctl00_TextField").size = "25";

//readonly document no
$("input[id='ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff11_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff11_ctl00_ctl00_TextField").size = "25";

//readonly Revision
$("input[id='ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff131_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff131_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff131_ctl00_ctl00_TextField").size = "25";


document.getElementById("ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff111_ctl00_ctl00_TextField").readOnly = true;
document.getElementById("ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff111_ctl00_ctl00_TextField").style.background = "#ebebeb";

document.getElementById("ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff111_ctl00_ctl00_TextField").setAttribute("tabIndex", "-1");


        // $('#ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff61_ctl00_ctl00_UserField_downlevelTextBox').change(function () {
        //     alert($('#ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff61_ctl00_ctl00_UserField_downlevelTextBox').val());
        // });


// alert(document.getElementById("ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff61_ctl00_ctl00_UserField_hiddenSpanData").value);



$('#ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff61_ctl00_ctl00_UserField_upLevelDiv').bind('DOMNodeInserted', function() {
	// alert("1");
	if(document.getElementById("ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff61_ctl00_ctl00_UserField_hiddenSpanData").value != "&#160;"){
		// alert("2");
		var username = document.querySelector('.ms-entity-resolved').id;
		var array_username = username.split("\\");
		Employee_Username = array_username[1];
		// alert(Employee_Username);
		ExecuteOrDelayUntilScriptLoaded(Get_EmployeeID, "sp.js");
	// break;
	}
});

})


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
    	document.getElementById("ctl00_ctl43_g_81c7bc75_cd02_44c1_a06f_a5ae3f3546b9_ff111_ctl00_ctl00_TextField").value = Employee_ID;
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