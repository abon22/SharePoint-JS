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

currentName = this._currentUser.get_title();



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



 $('#cse #logno2').hide();
 $('#cse #revision2').hide();
 $('#cse #date2').hide();
 $('#cse #employee2').hide();
 $('#cse #department2').hide();
 $('#cse #team2').hide();
 $('#cse #employID2').hide();
 $('#cse #immediatehead2').hide();


//readonly cse no
$("input[id='ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff101_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff101_ctl00_ctl00_TextField").className = "ms-long ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff101_ctl00_ctl00_TextField").size = "25";

//readonly request date
$("input[id='ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "25";
var from_cal2 = document.getElementById("ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
    from_cal2.src = "";
    from_cal2.alt = "";

//readOnly department dropDown lookUp source
var deprtmnt = document.getElementById("ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff51_ctl00_Lookup");
var selectedText = deprtmnt.options[deprtmnt.selectedIndex].text;
document.getElementById("department1").style.display = 'None';
document.getElementById('department2').innerHTML="<input type='text' value='"+selectedText+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
 $('#cse #department2').show();

//readOnly team dropDown lookUp source
var team = document.getElementById("ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff71_ctl00_Lookup");
var selectedText = team.options[team.selectedIndex].text;
document.getElementById("team1").style.display = 'None';
document.getElementById('team2').innerHTML="<input type='text' value='"+selectedText+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
 $('#cse #team2').show();

//readonly revision
$("input[id='ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff21_ctl00_ctl00_TextField").className = "ms-long ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff21_ctl00_ctl00_TextField").size = "25";



//readOnly employee name
$("div[id='ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff41_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
$( "a[id='ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff41_ctl00_ctl00_UserField_checkNames']" ).empty();
$( "a[id='ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff41_ctl00_ctl00_UserField_browse']" ).empty();


//ID no
$("input[id='ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff61_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff61_ctl00_ctl00_TextField").className = "ms-long ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff61_ctl00_ctl00_TextField").size = "25";

//immediate head
$("div[id='ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff81_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
$( "a[id='ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff81_ctl00_ctl00_UserField_checkNames']" ).empty();
$( "a[id='ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff81_ctl00_ctl00_UserField_browse']" ).empty();


//readOnly details
$("div[id='ctl00_ctl43_g_6fe8a4a1_0c08_494b_9f79_4c2f0f7849f0_ff91_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

})




</script>