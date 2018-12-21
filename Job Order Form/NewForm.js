<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var context = null;
var web = null;
var currentUser = null;
ExecuteOrDelayUntilScriptLoaded(GetUserLoginName, "sp.js");


//----------- set people picker name ------------------
function GetUserLoginName() {
  context = new SP.ClientContext.get_current();
  web = context.get_web();
  this._currentUser = web.get_currentUser();
  context.load(this._currentUser);
  context.executeQueryAsync(Function.createDelegate(this, this.onSuccessMethod),
  Function.createDelegate(this, this.onFailureMethod));
}

function onSuccessMethod(sender, args) 
{
document.getElementById('ctl00_ctl43_g_fa93cf21_1c33_4165_9720_2e6279a7b55d_ff21_ctl00_ctl00_UserField_upLevelDiv').innerHTML=this._currentUser.get_title();
}

function onFaiureMethod(sender, args) {

 alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());

 }
//-------------------------------------------



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

//resize Corrective Action Steps
document.getElementById("ctl00_ctl43_g_fa93cf21_1c33_4165_9720_2e6279a7b55d_ff51_ctl00_ctl00_TextField").style.width = "600px";
document.getElementById("ctl00_ctl43_g_fa93cf21_1c33_4165_9720_2e6279a7b55d_ff51_ctl00_ctl00_TextField").style.height = "250px";



//readonly job order no.
$("input[id='ctl00_ctl43_g_fa93cf21_1c33_4165_9720_2e6279a7b55d_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_fa93cf21_1c33_4165_9720_2e6279a7b55d_ff11_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_fa93cf21_1c33_4165_9720_2e6279a7b55d_ff11_ctl00_ctl00_TextField").size = "25";

})







</script>