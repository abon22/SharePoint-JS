
​​​​​​​​​<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script> ​​​<script src="/SiteAssets/Scripts/jquery.timeago.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script type="text/javascript"> 

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
        //document.getElementById('Nurse_b2425b55-2e3b-4aad-91d6-274b3a328be6_$TextField').value = requestorName;
        //document.getElementById('ctl00_ctl42_g_9e84bd08_8328_4877_b4a9_3cab998e04ad_ff111_ctl00_ctl00_TextField').value = department;
        //alert(department);
    immediate_head_var = manager;

    }

//--------------------------------------------------------------------------------------

_spBodyOnLoadFunctionNames.push("dropDownTypeofEvaluation");

 function dropDownTypeofEvaluation()
    {
        $("Select[Title='Approval']").change(function () {
            var val=$("Select[Title='Approval']").val();
            
            if($(this).val()=="")
            {
                //alert("None");
            }
            else if($(this).val()=="Approved")
            {
                //alert("Approved");
            }
            else if($(this).val()=="Disapproved")
            {            
                //alert("Disapproved");

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

        $("input[id='Nurse_b2425b55-2e3b-4aad-91d6-274b3a328be6_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        $("input[id='Employee_x0020_name_45fbfa6c-3517-47a6-93ff-599c5ca856cd_$ClientPeoplePicker']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        $("input[id='']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        $("input[id='']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        $("textarea[id='Reason_3127456a-2246-41d5-a78c-2733bedc9e91_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        $("input[id='Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

        


        });
    })(jQuery);

$(document).ready(function()
{


    var val=$("Select[Title='Approval']").val();

        
        if(val!="")
        {
            //alert("None");
            $("select[id='Approval_10b9bfc1-08e1-4e28-8518-c84f93a2ced3_$DropDownChoice']").attr('disabled', 'disabled');
            $("textarea[id='Comments_x002f__x0020_Notes_7ce0715d-3c29-486b-bc2a-3f9389c0314c_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            $("input[id='ctl00_ctl42_g_236071c2_de54_4e39_ba27_33fd96ac0ba3_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');


        }



});

//function Presave
function PreSaveAction(){

    var val=$("Select[Title='Approval']").val();
        var notes = document.getElementById("Comments_x002f__x0020_Notes_7ce0715d-3c29-486b-bc2a-3f9389c0314c_$TextField").value;
        
        if(val=="")
        {
            //alert("None");
        }
        else if(val=="Approved")
        {
            //alert("Approved");
        }
        else if(val=="Disapproved")
        {            
            //alert("Disapproved");

            if(notes == "")
            {
                alert("You must state your reason for disapproval.");
                return false;
            }

        }


        return true;

}






















</script> 


<style>

.sp-peoplepicker-delImage{

display:none;

}
.sp-peoplepicker-editorInput{

display:none;

}

</style>