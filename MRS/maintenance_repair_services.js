<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script>


var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.


ExecuteOrDelayUntilScriptLoaded(init,'sp.js');


 var targetUser;
 
 //------------------------------------------------------------------------
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


        document.getElementById("Document_x0020_No_x002e__5fc2e3d8-5aa1-49e1-ad24-4f2ee7405ef1_$TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("Document_x0020_No_x002e__5fc2e3d8-5aa1-49e1-ad24-4f2ee7405ef1_$TextField").size = "11";

$("input[id='Document_x0020_No_x002e__5fc2e3d8-5aa1-49e1-ad24-4f2ee7405ef1_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

$("input[id='Revision_4e22f957-1ef5-4737-82cf-fba8e44adbc1_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 



//SPUtility.GetSPField('Temp').MakeReadOnly();
//SPUtility.HideSPField('Temp');

//SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
SPUtility.HideSPField('Date and Time Created');

SPUtility.HideSPField('Reference Number');
SPUtility.GetSPField('Reference Number').MakeReadOnly();
SPUtility.HideSPField('CC');
SPUtility.GetSPField('CC').MakeReadOnly();
SPUtility.HideSPField('Issue Status');
SPUtility.GetSPField('Issue Status').MakeReadOnly();
SPUtility.HideSPField('Action Taken');
SPUtility.GetSPField('Action Taken').MakeReadOnly();
SPUtility.HideSPField('Duration (Request to Closed)');
SPUtility.GetSPField('Duration (Request to Closed)').MakeReadOnly();
SPUtility.HideSPField('Comments/Remarks');
SPUtility.GetSPField('Comments/Remarks').MakeReadOnly();
SPUtility.HideSPField('Date Case Closed');
SPUtility.GetSPField('Date Case Closed').MakeReadOnly();


});



//------------------------------------------------------------------------


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
    document.getElementById('Requestor_x0020_Name_6217e0e7-2961-4dae-b9b4-da8c530aaf73_$TextField').value = requestorName;
    document.getElementById('Department_x002f_Section_f553388d-9381-4ea1-91b0-3ec8b45152dc_$TextField').value = department;
    //document.getElementById('Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField').value = manager;
  
    
}



// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
    document.getElementById('Requestor_x0020_Name_6217e0e7-2961-4dae-b9b4-da8c530aaf73_$TextField').value = "Error: " + args.get_message();
    document.getElementById('Department_x002f_Section_f553388d-9381-4ea1-91b0-3ec8b45152dc_$TextField').value = "Error: " + args.get_message();
}


function PreSaveAction()

{
var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();
    //alert(datetime);


 document.getElementById('Date_x0020_and_x0020_Time_x0020__d94ffb5f-594d-47db-b181-244012727370_$TextField').value = datetime;
 
// var varPriority = $("input[title='Date and Time Created']").val();
 //alert(varPriority);
return true;

}


</script><i><b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to 
      <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i>
