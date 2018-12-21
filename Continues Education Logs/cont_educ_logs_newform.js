<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script>
<script src="/_layouts/15/init.js" type="text/javascript"></script>
<script src="/_layouts/15/sp.runtime.js" type="text/javascript"></script>
<script src="/_layouts/15/sp.js" type="text/javascript"></script>
<script src="/_layouts/15/SP.UserProfiles.js" type="text/javascript"></script><script>


var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.




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

$("input[id='Total_x0020__x0023__x0020_of_x00_fa5e7f32-6444-4f0d-a718-284346d87194_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');







setInterval(function() {

    
var sdate = document.getElementById('Start_x0020_Time_9348f435-85f5-493c-820e-ce79a06ae465_$DateTimeFieldDate').value;
var shour = document.getElementById('Start_x0020_Time_9348f435-85f5-493c-820e-ce79a06ae465_$DateTimeFieldDateHours').value;
var smin = document.getElementById('Start_x0020_Time_9348f435-85f5-493c-820e-ce79a06ae465_$DateTimeFieldDateMinutes').value;

var fdate = document.getElementById('Finish_x0020_Time_b45c58c2-d157-4245-8f4b-7446d55a88df_$DateTimeFieldDate').value;
var fhour = document.getElementById('Finish_x0020_Time_b45c58c2-d157-4245-8f4b-7446d55a88df_$DateTimeFieldDateHours').value;
var fmin = document.getElementById('Finish_x0020_Time_b45c58c2-d157-4245-8f4b-7446d55a88df_$DateTimeFieldDateMinutes').value;


    var sdateandtime = sdate +" "+shour+":"+smin;
var fdateandtime = fdate +" "+fhour+":"+fmin;

var startDate = new Date(sdateandtime);
var endDate = new Date(fdateandtime);
var timeDiff = Math.abs(startDate - endDate);

var hh = Math.floor(timeDiff / 1000 / 60 / 60);
if(hh < 10) {
    hh = '0' + hh;
}
timeDiff -= hh * 1000 * 60 * 60;
var mm = Math.floor(timeDiff / 1000 / 60);
if(mm < 10) {
    mm = '0' + mm;
}
timeDiff -= mm * 1000 * 60;
var ss = Math.floor(timeDiff / 1000);
if(ss < 10) {
    ss = '0' + ss;
}
document.getElementById('Total_x0020__x0023__x0020_of_x00_fa5e7f32-6444-4f0d-a718-284346d87194_$NumberField').value = hh + "." + mm;


}, 1000);


});

ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
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

    getUserProperties();
}


function getUserProperties() {


targetUser = 'hoitcebu\\'+targetUser;
    // Replace the placeholder value with the target user's credentials.
    // alert(targetUser);
     
     

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
    document.getElementById('Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField').value = requestorName;
    //alert(requestorName);
   // document.getElementById('Department_x002f_Section_6a1eb13d-a297-4f9d-be58-1e58014d57d6_$TextField').value = department;
    //document.getElementById('Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField').value = manager;
    
}



// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
    document.getElementById('Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField').value = "Error: " + args.get_message();
    //document.getElementById('Department_x002f_Section_6a1eb13d-a297-4f9d-be58-1e58014d57d6_$TextField').value = "Error: " + args.get_message();
}




</script>