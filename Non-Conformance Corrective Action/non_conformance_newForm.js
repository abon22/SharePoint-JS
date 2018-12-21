<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

$(document).ready(function()
{

//readonly document no
$("input[id='ctl00_ctl43_g_6115a0e9_ab0a_42a0_b651_525d9489c31e_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_6115a0e9_ab0a_42a0_b651_525d9489c31e_ff11_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_6115a0e9_ab0a_42a0_b651_525d9489c31e_ff11_ctl00_ctl00_TextField").size = "25";

//readonly non-conformance no
$("input[id='ctl00_ctl43_g_6115a0e9_ab0a_42a0_b651_525d9489c31e_ff31_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_6115a0e9_ab0a_42a0_b651_525d9489c31e_ff31_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_6115a0e9_ab0a_42a0_b651_525d9489c31e_ff31_ctl00_ctl00_TextField").size = "25";

//resize non-conformity
 document.getElementById("ctl00_ctl43_g_6115a0e9_ab0a_42a0_b651_525d9489c31e_ff91_ctl00_ctl00_TextField").style.width = "1202px";
 //resize OFI
  document.getElementById("ctl00_ctl43_g_6115a0e9_ab0a_42a0_b651_525d9489c31e_ff101_ctl00_ctl00_TextField").style.width = "1202px";


});

//get the name of the current user
var context = null;
var web = null;
var currentUser = null;
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
document.getElementById('ctl00_ctl43_g_6115a0e9_ab0a_42a0_b651_525d9489c31e_ff71_ctl00_ctl00_UserField_upLevelDiv').innerHTML=this._currentUser.get_title();
//change the ID here to your people picker field ID.
}

function onFaiureMethod(sender, args) {

 alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());
}



</script>
<p>&nbsp;</p>
