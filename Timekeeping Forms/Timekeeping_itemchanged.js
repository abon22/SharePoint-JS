<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

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
var get_preferredname;
  function onQuerySucceeded2()
  {


var account = targetUser.get_loginName();
targetUser_temp = account.substring(account.indexOf("|") + 10);
targetUser = targetUser_temp;

SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');

// alert(targetUser);

$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
$("a[id='Ribbon.ListForm.Edit.Actions.DeleteItem-Large']").css("visibility","hidden");
$("a[id='Ribbon.ListForm.Edit.Actions.AttachFile-Large']").css("visibility","hidden");
$("a[id='Ribbon.ListForm.Edit.Clipboard.Paste-Large']").css("visibility","hidden");
$("a[id='Ribbon.ListForm.Edit.Commit-LargeLarge']").css("visibility","hidden");
$("a[id='Ribbon.ListForm.Edit.Clipboard-LargeMedium']").css("visibility","hidden");

SPUtility.ShowSPField('Name');
SPUtility.GetSPField('Name').MakeReadOnly();

SPUtility.ShowSPField('Department');
SPUtility.GetSPField('Department').MakeReadOnly();

SPUtility.ShowSPField('Designation');
SPUtility.GetSPField('Designation').MakeReadOnly()

SPUtility.ShowSPField('Employee ID');
SPUtility.GetSPField('Employee ID').MakeReadOnly();

SPUtility.HideSPField('Immediate Head');

SPUtility.ShowSPField('Form Type');
SPUtility.GetSPField('Form Type').MakeReadOnly();

SPUtility.ShowSPField('Form');
SPUtility.GetSPField('Form').MakeReadOnly();

}

function getUserProperties() {
targetUser = 'hoitcebu\\'+targetUser;

var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
    // Specify the properties to retrieve and target user for the
    // UserProfilePropertiesForUser object.
    var profilePropertyNames = ["PreferredName"];
       var userProfilePropertiesForUser =
        new SP.UserProfiles.UserProfilePropertiesForUser(
            clientContext,
            targetUser,
            profilePropertyNames);
    // Get user profile properties for the target user.
    // To get the value for only one user profile property, use the
    // getUserProfilePropertyFor method.
    userProfileProperties = peopleManager.getUserProfilePropertiesFor(
        userProfilePropertiesForUser);

    // Load the UserProfilePropertiesForUser object and send the request.
    clientContext.load(userProfilePropertiesForUser);
    clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
}
function onRequestSuccess() {
    get_preferredname = userProfileProperties[0];
  //alert("Login user: "+get_preferredname);
   get_query_immediate_head();

}
  function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());

    $("input[id='ctl00_ctl42_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}
 function get_query_immediate_head(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('HR Timekeeping Forms');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback, onFailedCallback);
 }
var get_immediate;

    function onSucceededCallback(sender, args) {
         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

      var id = listItem.get_item('ID')

        if(itemId==id){//if

      get_immediate= listItem.get_item('Immediate_x0020_Head').get_lookupValue();
     // alert("From DB: "+get_immediate);

        }//end if

      }  //end while

    // $("div[class='ms-cui-tabContainer']").css("display","none");

var ImmediateSupervisor_Approval = $("select[id='Immediate_head_approval_44dc580a-988d-44b4-9504-bac3d809fa31_$DropDownChoice']").val();
var HR_Approval = $("select[id='HR_x0020_Approval_dabf2e54-069a-4c96-bd99-1f03c4c330be_$DropDownChoice']").val();
var Timekeeper_status = $("select[id='Timekeeper_x0020_Status_b2995ce3-dae9-44b6-b97a-a7f79f30ed60_$DropDownChoice']").val();

// var ImmediateHead = $("Immediate_x0020_Head_f07cdd35-537a-418c-9c70-7045c39f83aa_$ClientPeoplePicker']").val();

//alert("Login User: "+get_preferredname);
//get_immediate = Database query

// alert(get_preferredname +"-------"+get_immediate)


// IMMEDIATE HEAD STAGE -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
if(ImmediateSupervisor_Approval == "" && HR_Approval == "")
{
  if(get_preferredname == get_immediate)
  {
    SPUtility.ShowSPField('Immediate Head Approval');
    SPUtility.GetSPField('Immediate Head Approval').MakeEditable();
    SPUtility.HideSPField('HR Approval');
    SPUtility.HideSPField("Timekeeper Status");
  }
  else
  {
    SPUtility.HideSPField('Immediate Head Approval');
    SPUtility.HideSPField('HR Approval');
    SPUtility.HideSPField('Timekeeper Status');
    $("input[id='ctl00_ctl42_g_d399c7d3_b465_4065_ad46_185746215c93_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").css("visibility","hidden");
  }
}
// IF APPROVED by THE IMMEDIATE HEAD -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
else if(ImmediateSupervisor_Approval == "Approved" && HR_Approval == "") {
    // alert("hoitcebu"+'\\'+"fernandos");
  if(targetUser == "hoitcebu"+'\\'+"idrianb") {
    SPUtility.ShowSPField('Immediate Head Approval');
    SPUtility.GetSPField('Immediate Head Approval').MakeReadOnly();
    SPUtility.ShowSPField('HR Approval');
    SPUtility.GetSPField('HR Approval').MakeEditable();
    SPUtility.HideSPField("Timekeeper Status");
  }
  else {
    SPUtility.ShowSPField('Immediate Head Approval');
    SPUtility.GetSPField('Immediate Head Approval').MakeReadOnly();
    SPUtility.HideSPField('HR Approval');
    SPUtility.HideSPField("Timekeeper Status");
    $("input[id='ctl00_ctl42_g_d399c7d3_b465_4065_ad46_185746215c93_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").css("visibility","hidden");
  }
}
// IF REJECTED BY THE IMMEDIATE HEAD -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
else if(ImmediateSupervisor_Approval == "Rejected" && HR_Approval == "") {
    SPUtility.ShowSPField('Immediate Head Approval');
    SPUtility.GetSPField('Immediate Head Approval').MakeReadOnly();
    SPUtility.HideSPField("HR Approval");
    SPUtility.HideSPField("Timekeeper Status");
    $("input[id='ctl00_ctl42_g_d399c7d3_b465_4065_ad46_185746215c93_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").css("visibility","hidden");
}
// IF APPROVED BY THE HR OFFICER -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
else if(ImmediateSupervisor_Approval == "Approved" && HR_Approval == "Approved" && Timekeeper_status == "") {
  if(targetUser == "hoitcebu"+'\\'+"idrianb") {
    SPUtility.ShowSPField('Immediate Head Approval');
    SPUtility.GetSPField('Immediate Head Approval').MakeReadOnly();
    SPUtility.ShowSPField('HR Approval');
    SPUtility.GetSPField('HR Approval').MakeReadOnly();
    SPUtility.ShowSPField('Timekeeper Status');
    SPUtility.GetSPField('Timekeeper Status').MakeEditable();
  }
  else {
    SPUtility.ShowSPField('Immediate Head Approval');
    SPUtility.GetSPField('Immediate Head Approval').MakeReadOnly();
    SPUtility.ShowSPField('HR Approval');
    SPUtility.GetSPField('HR Approval').MakeReadOnly();
    SPUtility.HideSPField("Timekeeper Status");
    $("input[id='ctl00_ctl42_g_d399c7d3_b465_4065_ad46_185746215c93_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").css("visibility","hidden");
  }
}
// IF REJECTED BY THE HR OFFICER -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
else if(ImmediateSupervisor_Approval == "Approved" && HR_Approval == "Rejected" && Timekeeper_status == "") {
    SPUtility.ShowSPField('Immediate Head Approval');
    SPUtility.GetSPField('Immediate Head Approval').MakeReadOnly();
    SPUtility.ShowSPField('HR Approval');
    SPUtility.GetSPField('HR Approval').MakeReadOnly();
    SPUtility.HideSPField("Timekeeper Status");
    $("input[id='ctl00_ctl42_g_d399c7d3_b465_4065_ad46_185746215c93_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").css("visibility","hidden");
}
// IF SET AS STATUS CLOSED BY THE TIMEKEEPER -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
else if(ImmediateSupervisor_Approval == "Approved" && HR_Approval == "Approved" && Timekeeper_status == "Closed") {
    SPUtility.ShowSPField('Immediate Head Approval');
    SPUtility.GetSPField('Immediate Head Approval').MakeReadOnly();
    SPUtility.ShowSPField('HR Approval');
    SPUtility.GetSPField('HR Approval').MakeReadOnly();
    SPUtility.ShowSPField('Timekeeper Status');
    SPUtility.GetSPField('Timekeeper Status').MakeReadOnly();
  $("input[id='ctl00_ctl42_g_d399c7d3_b465_4065_ad46_185746215c93_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
}
}
     function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

    //  $("input[id='ctl00_ctl42_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }

$(function() {
  checkuserprofile();
});
</script>
