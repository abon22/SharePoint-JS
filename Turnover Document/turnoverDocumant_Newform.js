﻿<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"><span id="ms-rterangecursor-start" aria-hidden="true"></span><span id="ms-rterangecursor-end" aria-hidden="true"></span></script><script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script><script type="text/javascript" src="/_layouts/15/sp.js"></script><script type="text/javascript" src="/_layouts/15/SP.UserProfiles.js"></script> 
<script type="text/javascript">



//--------Change 'Save' to 'Submit'-----------------
(function ($, undefined)
{
    $("document").ready(function ()
    {
        var inputcontrols = document.getElementsByTagName("input");
        for(i = 0; i<inputcontrols.length; i++)
        {
            if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
                inputcontrols[i].value = "Add Documents";
        }
        var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
        ribbonSave.text("Add Documents");
    });
})(jQuery);
//------------------------------------



var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

//---------------------------------------------------------------------------------------------------------
  
    $(document).ready(function()
{
//SPUtility.HideSPField('HR Approval');
//SPUtility.HideSPField("Employee's Folder Name");
});

    function init(){

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    //targetUser = "hoitcebu\\litoa";
    //alert(targetUser.get_loginName());
    this.clientContext2.load(targetUser);
   
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));

    //=================================================

 }

 function onQuerySucceeded() {

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;
 //alert(targetUser);
  
    SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');
}

function onRequestFail(sender, args) {
     alert("Please contact administrator. Error: " + args.get_message());
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
    userProfileProperties = peopleManager.getUserProfilePropertiesFor(userProfilePropertiesForUser);
    //alert(userProfileProperties );
    // Load the UserProfilePropertiesForUser object and send the request.
    clientContext.load(userProfilePropertiesForUser);
    clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
}

var immediate_head_var;
// This function runs if the executeQueryAsync call succeeds.
var log_in_preferred_name;
function onRequestSuccess() {
    var requestorName = userProfileProperties[0];
    log_in_preferred_name = userProfileProperties[0]
    var department =  userProfileProperties[1];
    var manager =  userProfileProperties[2];
    //alert(requestorName);
    document.getElementById('ctl00_ctl42_g_8e189a47_4c49_4263_8b63_3e6f9cdef865_ff21_ctl00_ctl00_TextField').value = requestorName;
    //document.getElementById('ctl00_ctl42_g_3ed85d37_32c7_4ad1_8b03_b3e71dd77f3f_ff41_ctl00_ctl00_TextField').value = department;

immediate_head_var = manager;

//get_liquidation_forms();
}


function PreSaveAction(){
    var URL = location.pathname.replace('NewformCopy.aspx','EditFormCopy.aspx');
    if(GetUrlKeyValue('IsDlg')==='1'){
        URL+="?IsDlg=1";
    }
    $("#aspnetForm").attr('action',location.pathname+"?Source="+URL);

    // if(can_proceed_liquidation=="No"){
    // return false;
    // }else{

        //console.log(URL);
     return true;   
   // }
    
}

</script><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i>

