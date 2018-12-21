​​​​​​​​​<script src="/SiteAssets/Scripts/jquery-1.11.1.js" type="text/javascript"></script>​​​​​​<script src="/SiteAssets/Scripts/jquery.timeago.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script>​​​​​​​​​<script src="/SiteAssets/Scripts/SPServices-0.7.2.min.js" type="text/javascript"></script> ​​​​​​​​<script type="text/javascript">

//--------Change 'Save' to 'Submit'-----------------
(function ($, undefined)
{
    $("document").ready(function ()
    {
        var inputcontrols = document.getElementsByTagName("input");
        for(i = 0; i<inputcontrols.length; i++)
        {
            if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
                inputcontrols[i].value = "Submit";
        }
        var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
        ribbonSave.text("Submit");
    });
})(jQuery);
//------------------------------------

var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.




ExecuteOrDelayUntilScriptLoaded(init,'sp.js');


 var targetUser;




function init()
{
 
//SPUtility.GetSPField('Temp').MakeReadOnly();
//SPUtility.HideSPField('Temp');
//SPUtility.GetSPField('Immediate Head').MakeReadOnly();
//SPUtility.HideSPField('Immediate Head');
 
SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
SPUtility.HideSPField('Date and Time Created');


    
    
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
    document.getElementById('Request_x0020_Name_88614aa9-d383-4ebe-a934-23126a05f58c_$TextField').value = requestorName;
    document.getElementById('Department_x002f_Section_970c1761-867c-46a2-ad3b-67d98e02e2f0_$TextField').value = department;
   //document.getElementById('Immediate_x0020_Head_f13a864c-9abc-421d-b3bd-f93d031f053c_$ClientPeoplePicker').value = manager;
    immediate_head_var = manager;
    //alert(manager);
 //  immediate_head();
  
    
}



function immediate_head() {
ExecuteOrDelayUntilScriptLoaded(function () {
    setTimeout(function () {
        var ppDiv = $("[id='Immediate_x0020_Head_f13a864c-9abc-421d-b3bd-f93d031f053c_$ClientPeoplePicker'][title='Immediate Head']");
       var ppEditor = ppDiv.find("[title='Immediate Head']");
        var spPP = SPClientPeoplePicker.SPClientPeoplePickerDict[ppDiv[0].id];
      

        ppEditor.val(immediate_head_var );
        //console.log(ppEditor);
        console.log(immediate_head_var);
        spPP.AddUnresolvedUserFromEditor(true);
    }, 2000);
}, "clientpeoplepicker.js");


}




//------------------------------------------



// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
    document.getElementById('Request_x0020_Name_88614aa9-d383-4ebe-a934-23126a05f58c_$TextField').value = "Error: " + args.get_message();
    document.getElementById('Department_x002f_Section_970c1761-867c-46a2-ad3b-67d98e02e2f0_$TextField').value = "Error: " + args.get_message();
}


//----------------------------------------------------------------------------------------------


function PreSaveAction()

{
var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();


document.getElementById('Date_x0020_and_x0020_Time_x0020__dfd90877-039d-42c3-82dd-29a4fb098b30_$TextField').value = datetime;
 

return true;

}




</script><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you recieve an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t recieve any email upon submittin​​g the request , Please send an email to 
   <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i>