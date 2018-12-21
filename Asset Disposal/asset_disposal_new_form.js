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

var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");

$("label[id='Preparation_7d5ec9c9-4352-4da4-9209-025a8b8bb7b4_$TextField']").css("width","1165px");

$("h3[id='Preparation_7d5ec9c9-4352-4da4-9209-025a8b8bb7b4_$TextField']").css("fontcolor","white");

var AsetDetails = document.getElementById('ctl00_ctl42_g_2388a60a_86ec_4d4a_8713_09afd09f4b24_ff51_ctl00_ctl00_TextField_inplacerte');

AsetDetails.innerHTML = "<table cellspacing='0' id='id_asset_details' border='1' width='1000px' class='ms-rteTable-default'> <tbody> <tr> <td class='ms-rteTable-default' style='width: 20px;'> <h3>​Asset Code</h3> </td> <td class='ms-rteTable-default' style='width: 20px;'> <h3>​Serial Number</h3> </td> <td class='ms-rteTable-default' style='width: 60px;'> <h3>​Asset Description</h3> </td> <td class='ms-rteTable-default' style='width: 60px;'> <h3>​Reason for Disposal</h3> </td> </tr> <tr> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> </tr> <tr> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> </tr> <tr> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> </tr> <tr> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> </tr> <tr> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> </tr> <tr> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> <td class='ms-rteTable-default'> <h3>​</h3> </td> </tr> </tbody></table><p></p>";
$("input[id='ctl00_ctl42_g_2388a60a_86ec_4d4a_8713_09afd09f4b24_ff21_ctl00_ctl00_TextField']").prop("readonly","true").css("background","#F2F2F2");
$("input[id='ctl00_ctl42_g_2388a60a_86ec_4d4a_8713_09afd09f4b24_ff31_ctl00_ctl00_TextField']").prop("readonly","true").css("background","#F2F2F2");
});

var targetUser;

 function init(){


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

    $("input[id='ctl00_ctl42_g_2388a60a_86ec_4d4a_8713_09afd09f4b24_ff21_ctl00_ctl00_TextField']").attr('readonly','true');

// $("div[class='ms-dlgContent']").css("width","1200");
}
function getUserProperties() {

 // $("input[id='Immediate_head_approval_44dc580a-988d-44b4-9504-bac3d809fa31_$DropDownChoice']").attr('hidden', 'hidden');

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
    document.getElementById('ctl00_ctl42_g_2388a60a_86ec_4d4a_8713_09afd09f4b24_ff21_ctl00_ctl00_TextField').value = requestorName;
    document.getElementById('ctl00_ctl42_g_2388a60a_86ec_4d4a_8713_09afd09f4b24_ff31_ctl00_ctl00_TextField').value = department;
    //document.getElementById('Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField').value = manager;
}

// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
  alert( "Error: " + args.get_message());
}
</script>
