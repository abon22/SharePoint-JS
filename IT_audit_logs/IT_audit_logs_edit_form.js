​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js">
</script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script>
<script src="/SiteAssets/sputility.min.js"></script><script>

//style="white-space:normal;"

var userProfileProperties;

ExecuteOrDelayUntilScriptLoaded(init,'sp.js');

  $(document).ready(function()
{

//------change Save to Submit---------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}

});

var targetUser;

 function init(){
//SPUtility.GetSPField('Temp').MakeReadOnly();
//SPUtility.HideSPField('Temp');

        //------------------------
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

    SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');

    $("input[id='Name_a4da7009-9428-4c0c-b46b-1ad240f4015c_$TextField']").attr('readonly', 'readonly');

    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
    $("input[id='ctl00_ctl43_g_670a2d9d_b8a9_41d3_b698_ef71773ad075_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr("hidden","hidden");
    
}
function getUserProperties() {

targetUser = 'hoitcebu\\'+targetUser;
    // Replace the placeholder value with the target user's credentials.
     //alert(targetUser);

    // Get the current client context and PeopleManager instance.
    var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);


    // Specify the properties to retrieve and target user for the
    // UserProfilePropertiesForUser object.
    var profilePropertyNames = ["PreferredName", "Department", "Manager"];
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
var immediate_head_var;
// This function runs if the executeQueryAsync call succeeds.
function onRequestSuccess() {
    var requestorName = userProfileProperties[0];
    var department =  userProfileProperties[1];
    var manager =  userProfileProperties[2];
    document.getElementById('Name_a4da7009-9428-4c0c-b46b-1ad240f4015c_$TextField').value = requestorName;
    //document.getElementById('Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField').value = manager;
}

// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
  alert( "Error: " + args.get_message());
}
</script>
