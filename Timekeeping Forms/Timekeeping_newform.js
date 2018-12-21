<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.

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
//-------------------------------------

 // SPUtility.HideSPField('Immediate Supervisor Approval');
 // SPUtility.HideSPField('HR Approval');

$("input[id='Name_b77e541a-389e-40aa-a2af-fbadfce99272_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

 SPUtility.HideSPField("Immediate Head Approval");
 SPUtility.HideSPField("HR Approval");
 SPUtility.HideSPField("Timekeeper Status");
 // SPUtility.HideSPField("HR Officer");

// Forms_ec20daa9-dcce-4729-87a1-4b255c6a650b_$TextField_topDiv
// textarea:focus, input:focus{
//     outline: none;
// }
$("div[id='Forms_ec20daa9-dcce-4729-87a1-4b255c6a650b_$TextField_inplacerte']").css("width","935");

$("select[id='Form_x0020_Type_0a9ba43f-2d82-4eeb-98c0-ead6d3726f89_$DropDownChoice']").change(function() {
var formType = $("select[id='Form_x0020_Type_0a9ba43f-2d82-4eeb-98c0-ead6d3726f89_$DropDownChoice']").val();


$("div[class='ms-dlgContent']").css("height","850");;
//alert(formType);
// document.getElementById("Forms_ec20daa9-dcce-4729-87a1-4b255c6a650b_$TextField_inplacerte").value = "test";
var div = document.getElementById('Forms_ec20daa9-dcce-4729-87a1-4b255c6a650b_$TextField_inplacerte');

if(formType == "Official Business")
{

div.innerHTML ="<p> <strong>Official Business</strong></p><br/> <br/><table cellspacing='0' border='1' class='ms-rteTable-default' style='width: 935px; height: 121px;'> <tbody> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='2' dir='ltr' style='width: 16.6667px; text-align: center;'> <strong>Date</strong></td> <td class='ms-rteTableOddCol-default' colspan='2' style='width: 20px; text-align: center;'> <strong>Time</strong></td> <td class='ms-rteTableEvenCol-default' rowspan='2' style='width: 34px; text-align: center;'> <strong>Destination</strong></td> <td class='ms-rteTableOddCol-default' rowspan='2' style='width: 10px; text-align: center;'> <strong>Purpose</strong></td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='text-align: center; width: 10px;'> <strong>From</strong></td> <td class='ms-rteTableOddCol-default' style='text-align: center; width: 10px;'> <strong>To</strong></td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 76px;'> <br/> </td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 78px;'> <br/> </td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 24px;'> <br/> </td> <td class='ms-rteTableEvenCol-default' rowspan='1'> <br/> </td> <td> <br/> </td> </tr> <tr> <td class='ms-rteTableFooterOddCol-default' rowspan='1' style='width: 76px;'> <br/> </td> <td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 78px;'> <br/> </td> <td class='ms-rteTableFooterOddCol-default' rowspan='1' style='width: 34px;'> <br/> </td> <td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 177px;'> <br/> </td> <td> <br/> </td> </tr> <tr class='ms-rteTableFooterRow-default'> <td class='ms-rteTableFooterEvenCol-default' rowspan='1'> <br/> </td> <td class='ms-rteTableFooterOddCol-default' rowspan='1' style='width: 76px;'> <br/> </td> <td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 78px;'> <br/> </td> <td class='ms-rteTableFooterOddCol-default' rowspan='1' style='width: 34px;'> <br/> </td> <td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 177px;'> <br/> </td> </tr> </tbody></table><p></p>";


}
else if(formType == "Offset")
{

  div.innerHTML = "<p> <strong>Offset</strong></p><table cellspacing='0' border='1' class='ms-rteTable-default' style='width: 935px; height: 121px;'> <tbody> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='2' dir='ltr' style='width: 16.6667%; text-align: center;'> <strong>Date<br/>Rendered</strong></td> <td class='ms-rteTableOddCol-default' colspan='2' style='width: 16.6667%; text-align: center;'> <strong>Time</strong></td> <td class='ms-rteTableEvenCol-default' rowspan='2' style='width: 15%; text-align: center;'> <b>Number of Hours</b></td> <td class='ms-rteTableOddCol-default' rowspan='2' style='width: 147px; text-align: center;'> <strong>Work to be done</strong></td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='text-align: center; width: 15%;'> <strong>From</strong></td> <td class='ms-rteTableOddCol-default' style='text-align: center; width: 78px;'> <strong>To</strong></td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 76px;'> </td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 78px;'> </td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 15%;'> <br/> </td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 147px;'> </td> <td> </td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1'> </td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 78px;'> </td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 15%;'> </td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 147px;'> <br/> </td> <td> <br/> </td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1'> </td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 76px;'> </td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 78px;'> </td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 15%;'> </td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 147px;'> </td> </tr> </tbody></table><p></p>";
}
else if(formType == "Change Shift")
{

    div.innerHTML = "<p><b>Change Shift</b></p><table cellspacing='0' border='1' class='ms-rteTable-default' style='width: 935px; height: 121px;'><tbody><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' colspan='2' style='width: 24%; text-align: center; height: 10px;'><b>Schedule From</b></td><td class='ms-rteTableOddCol-default' rowspan='1' colspan='2' style='width: 15%; text-align: center; height: 10px;'><strong>Schedule to</strong><br/><br/></td><td class='ms-rteTableEvenCol-default' rowspan='2'style='width: 147px; text-align: center; height: 10px;'><strong>Remarks</strong>&#160;</td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' style='text-align: center; width: 91px; height: 20px;'><strong>From</strong></td><td class='ms-rteTableOddCol-default' style='text-align: center; width: 98px; height: 20px;'><strong>To</strong></td><td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 12%; text-align: center; height: 20px;'><strong>From</strong></td><td class='ms-rteTableOddCol-default' rowspan='1' colspan='1' style='width: 12%; text-align: center; height: 20px;'><strong>To</strong></td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 91px;'><br/></td><td class='ms-rteTableOddCol-default' rowspan='1' style='width: 98px;'><br/></td><td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 12%;'><br/></td><td class='ms-rteTableOddCol-default'rowspan='1' colspan='1' style='width: 9%;'><br/></td><td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 147px;'><br/></td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 91px;'><br/></td><td class='ms-rteTableOddCol-default' rowspan='1' style='width: 98px;'><br/></td><td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 9%;'><br/></td><td class='ms-rteTableOddCol-default'rowspan='1' colspan='1' style='width: 9%;'><br/></td><td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 147px;'><br/></td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 91px;'><br/></td><td class='ms-rteTableOddCol-default' rowspan='1' style='width: 98px;'><br/></td><td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 9%;'><br/></td><td class='ms-rteTableOddCol-default'rowspan='1' colspan='1' style='width: 9%;'><br/></td><td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 147px;'><br/></td></tr></tbody></table><p></p>";
}
     });
})
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

$("div[class='ms-dlgContent']").css("width","1200");
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
    document.getElementById('Name_b77e541a-389e-40aa-a2af-fbadfce99272_$TextField').value = requestorName;
    //document.getElementById('Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField').value = manager;


}

// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
  alert( "Error: " + args.get_message());
}






</script>
