<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script>
//--------------------------
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


        
        
        
        document.getElementById("Document_x0020_No_x002e__73576400-145d-4cae-9448-507ef5f6ced1_$TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("Document_x0020_No_x002e__73576400-145d-4cae-9448-507ef5f6ced1_$TextField").size = "11";

$("input[id='Document_x0020_No_x002e__73576400-145d-4cae-9448-507ef5f6ced1_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

$("input[id='Revision_a59d3026-ebbc-45ab-a193-2f00e0413dd3_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 


openDialog();

    });
    //---------------------

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

SPUtility.HideSPField('Reference Number');
SPUtility.HideSPField('Priority');
SPUtility.HideSPField('Purchaser Status');
SPUtility.HideSPField('Actual Price');
SPUtility.HideSPField('CEO Approval');
SPUtility.HideSPField('Finance Status');
SPUtility.HideSPField('VP Approval');
SPUtility.HideSPField('Comments');
SPUtility.HideSPField('Date and Time Created');
SPUtility.HideSPField('Duration (Executive Approve/Reject)');
SPUtility.HideSPField('Duration (Finance Approve/Reject/Closed)');
SPUtility.HideSPField('Date and Time Created (For Purchasing)');
SPUtility.HideSPField('Remarks');




    
    
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
    document.getElementById('Requestor_x0027_s_x0020_Name_5c6246d0-388a-407b-9fa8-7591eecdd30a_$TextField').value = requestorName;
    document.getElementById('Department_x002f_Section_c553ed45-58e8-489f-b68c-f5f92677912d_$TextField').value = department;
   // document.getElementById('Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField').value = manager;
    immediate_head_var = manager;
   immediate_head();
    
}

function immediate_head() {
ExecuteOrDelayUntilScriptLoaded(function () {
    setTimeout(function () {
        var ppDiv = $("[id$='ClientPeoplePicker'][title='Immediate Head']");
        var ppEditor = ppDiv.find("[title='Immediate Head']");
        var spPP = SPClientPeoplePicker.SPClientPeoplePickerDict[ppDiv[0].id];
        ppEditor.val(immediate_head_var);
        spPP.AddUnresolvedUserFromEditor(true);
    }, 500);
}, "clientpeoplepicker.js");



}

// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
    document.getElementById('Requestor_x0027_s_x0020_Name_5c6246d0-388a-407b-9fa8-7591eecdd30a_$TextField').value = "Error: " + args.get_message();
    document.getElementById('Department_x002f_Section_c553ed45-58e8-489f-b68c-f5f92677912d_$TextField').value = "Error: " + args.get_message();
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


 document.getElementById('Date_x0020_and_x0020_Time_x0020__05f9679e-f3a5-4f80-8e3d-583b0858d519_$TextField').value = datetime;
 
// var varPriority = $("input[title='Date and Time Created']").val();
 //alert(varPriority);
return true;

}


function openDialog() {
   var e = document.getElementById('d10');
   var options = {
    title: "Reminder",
    width: 1200,
    height: 720,
    html: e
   };
   SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
}




</script><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to 
      <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i>


<div style="display:none">
   <div id="d10">
       <h3 class="ms-core-pageTitle"> Purchase Lead Time <img width="35px" align="center" src="https://intranet.houseofit.com.au/SiteAssets/info%20icon.png"/></h3> <br>
       <img width="100%" align="center" src="https://intranet.houseofit.com.au/SiteAssets/puchasing%20time%20lead/2018-02-01_8-41-49.png"/>
       <img width="100%" align="center" src="https://intranet.houseofit.com.au/SiteAssets/puchasing%20time%20lead/2018-02-01_8-42-02.png"/>
       </div>
   </div>
</div>