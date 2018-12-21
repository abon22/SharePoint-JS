<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"><span id="ms-rterangecursor-start" aria-hidden="true"></span><span id="ms-rterangecursor-end" aria-hidden="true"></span></script><script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script><script type="text/javascript" src="/_layouts/15/sp.js"></script><script type="text/javascript" src="/_layouts/15/SP.UserProfiles.js"></script> 
<script type="text/javascript">


_spBodyOnLoadFunctionNames.push("dropDownTypeofEvaluation");

//--------------------------------------------------------------------------------------

	//userProfileProperties

    var userProfileProperties;
    ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
    var targetUser;


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
        document.getElementById('ctl00_ctl43_g_e579df5c_e18d_486e_a7f3_24ce5a101458_ff11_ctl00_ctl00_TextField').value = requestorName;
        //document.getElementById('ctl00_ctl43_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField').value = department;
        //alert(department);
    immediate_head_var = manager;

    }

//--------------------------------------------------------------------------------------


    function dropDownTypeofEvaluation()
    {
        $("Select[Title='Job Order Type']").change(function () {
            var val=$("Select[Title='Job Order Type']").val();
            
            if($(this).val()=="")
            {
                $('#tblJobOrderRequest #repair').hide();
                $('#tblJobOrderRequest #projecttitle').hide();
                $('#tblJobOrderRequest #projectdescription').hide();
                $('#tblJobOrderRequest #acknowledgement').hide();
                $('#tblJobOrderRequest #acknowledgementby').hide();
            }
            else if($(this).val()=="Repair")
            {
                $('#tblJobOrderRequest #repair').show();
                $('#tblJobOrderRequest #projecttitle').hide();
                $('#tblJobOrderRequest #projectdescription').hide();
                $('#tblJobOrderRequest #acknowledgement').hide();
                $('#tblJobOrderRequest #acknowledgementby').hide();
                $('#tblJobOrderRequest #requestedCompletionDate').hide();
            }
            else if($(this).val()=="Project")
            {            
            	$('#tblJobOrderRequest #projecttitle').show();
                $('#tblJobOrderRequest #projectdescription').show();
                $('#tblJobOrderRequest #requestedCompletionDate').show();
                $('#tblJobOrderRequest #repair').hide();
                $('#tblJobOrderRequest #acknowledgement').hide();
                $('#tblJobOrderRequest #acknowledgementby').hide();
            }




        });
    }

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

            document.getElementById("sideNavBox").style.display = "none";
			document.getElementById("DeltaPlaceHolderMain").style.marginRight = "200px";
        });
    })(jQuery);

//------------------------------------


$(document).ready(function()
{

    $('#tblJobOrderRequest #repair').hide();
    $('#tblJobOrderRequest #projecttitle').hide();
    $('#tblJobOrderRequest #projectdescription').hide();
    $('#tblJobOrderRequest #acknowledgement').hide();
    $('#tblJobOrderRequest #acknowledgementby').hide();
    $('#tblJobOrderRequest #estimatedCompletionDate').hide();
    $('#tblJobOrderRequest #requestedCompletionDate').hide();
    $('#tblJobOrderRequest #Status').hide();

    $("input[id='ctl00_ctl43_g_e579df5c_e18d_486e_a7f3_24ce5a101458_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');





});



function PreSaveAction(){


    var department = $("Select[Title='Department']").val();
    var val=$("Select[Title='Job Order Type']").val();
    var projectTitle = document.getElementById("ctl00_ctl43_g_e579df5c_e18d_486e_a7f3_24ce5a101458_ff81_ctl00_ctl00_TextField").value;
    var projectDescription = document.getElementById("ctl00_ctl43_g_e579df5c_e18d_486e_a7f3_24ce5a101458_ff51_ctl00_ctl00_TextField").value;
    var requestedCompletionDate = document.getElementById("ctl00_ctl43_g_e579df5c_e18d_486e_a7f3_24ce5a101458_ff91_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value;
    var issue = document.getElementById("ctl00_ctl43_g_e579df5c_e18d_486e_a7f3_24ce5a101458_ff41_ctl00_ctl00_TextField").value;
            
            if(department =="(None)")
            {              
                alert("Please fill up the empty fields!");
                return false;
            }

            if(val=="")
            {
                alert("Please fill up the empty fields!");
                return false;

            }
            else if(val=="Repair")
            {
                if(issue == "")
                {
                    alert("Please fill up the empty fields!");
                    return false;

                }
              
            }
            else if(val=="Project")
            {            
                if(department =="(None)" || projectTitle == "" || projectDescription == "" || requestedCompletionDate == "")
                {
                    alert("Please fill up the empty fields!");
                    return false;
                     
                }
            }


            return true;



}






































</script> ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​<div id='NoteHide'><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i></div>