<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script>
<script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script>
<script>

var userProfileProperties;

//ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

function checkuserprofile()
{
  //alert("Init running...");

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded2), Function.createDelegate(this,this.onQueryFailed2));

}

  function onQuerySucceeded2()
  {

var account = targetUser.get_loginName();
targetUser_temp = account.substring(account.indexOf("|") + 10);
targetUser = targetUser_temp;

var User_IT_AVP = 'fernandos';
var User_Admin_Officer = 'sptest';

var Department = $("select[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_ff31_ctl00_DropDownChoice']").val();
var asset_type = $("select[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_ff91_ctl00_DropDownChoice']").val();

var IT_AVP_Approval = $("select[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_ff71_ctl00_DropDownChoice']").val();
var Admin_Officer_Approval = $("select[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_ff81_ctl00_DropDownChoice']").val();

$("input[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_ff21_ctl00_ctl00_TextField']").prop("readonly","true").css("background","#F2F2F2");
$("select[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_ff31_ctl00_DropDownChoice']").prop("disabled","true");
$("input[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_ff31_ctl00_ctl00_TextField']").prop("readonly","true").css("background","#F2F2F2");
$("input[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_ff41_ctl00_ctl00_TextField']").prop("readonly","true").css("background","#F2F2F2");
$("select[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_ff91_ctl00_DropDownChoice']").prop("disabled","true");

if(asset_type == "IT Asset") {
  if(IT_AVP_Approval == ""){
    $('#tbl_asset_disposal #tr_admin_officer').hide();
    if(targetUser != User_IT_AVP){
      $('#tbl_asset_disposal #tr_it_avp').hide();
      $("input[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").attr('hidden', 'hidden');
    }
  }
  else if(IT_AVP_Approval == "Approved" || IT_AVP_Approval == "Rejected"){
    $('#tbl_asset_disposal #tr_admin_officer').hide();
    $("select[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_ff71_ctl00_DropDownChoice']").prop("disabled","true");
    $("input[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").attr('hidden', 'hidden');
  }
}
else if (asset_type == "Non IT Asset") {
  if(Admin_Officer_Approval == ""){
    $('#tbl_asset_disposal #tr_it_avp').hide();
    if(targetUser != User_Admin_Officer){
      $('#tbl_asset_disposal #tr_admin_officer').hide();
      $("input[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").attr('hidden', 'hidden');
    }
  }
  else if(Admin_Officer_Approval == "Approved" || Admin_Officer_Approval == "Rejected"){
    $('#tbl_asset_disposal #tr_it_avp').hide();
    $("select[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_ff71_ctl00_DropDownChoice']").prop("disabled","true");
    $("input[id='ctl00_ctl42_g_96820937_a684_4198_bca2_8f360a15b8e0_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").attr('hidden', 'hidden');
  }
}

}
function onRequestSuccess() {

}
function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    $("input[id='ctl00_ctl42_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}

$(function() {
  checkuserprofile();
});

</script>
