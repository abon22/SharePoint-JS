<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>


<script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
<script type="text/javascript" src="/_layouts/15/sp.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script>
<script src="/SiteAssets/sputility.min.js"></script>
<script src="/SiteAssets/Scripts/spjs-utility.js"></script>
<script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script>
<script src="/SiteAssets/Scripts/jquery.maskedinput.js"></script>
<script src="/SiteAssets/Scripts/jquery.maskedinput.min.js"></script>
<script type="text/javascript" src="/_layouts/15/SP.UserProfiles.js"></script>

<script type="text/javascript">


//--------Change 'Save' to 'Submit'-----------------
(function ($, undefined)
{
    $("document").ready(function ()
    {
         $("#ctl00_ctl43_g_5821ba74_f0aa_4f21_8e62_5e8684f66277_ff71_ctl00_ctl00_TextField").mask("LQF-9999-?999",{placeholder:"LQF-YYYY-XXX"});
        var inputcontrols = document.getElementsByTagName("input");
        for(i = 0; i<inputcontrols.length; i++)
        {
            if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
                inputcontrols[i].value = "Add Expenses";
        }
        var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
        ribbonSave.text("Add Expenses");
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
   
    alert("Error: " + args.get_message());
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
//alert(userProfileProperties );
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
    //alert(requestorName);
    document.getElementById('ctl00_ctl43_g_5821ba74_f0aa_4f21_8e62_5e8684f66277_ff31_ctl00_ctl00_TextField').value = requestorName;
    document.getElementById('ctl00_ctl43_g_5821ba74_f0aa_4f21_8e62_5e8684f66277_ff41_ctl00_ctl00_TextField').value = department;

immediate_head_var = manager;
    immediate_head();
}


function immediate_head() {

var immediate_head_temp = immediate_head_var;
//console.log(immediate_head_temp);

var res_immediate = immediate_head_temp.substring(9);
console.log(res_immediate);

document.getElementById('ctl00_ctl43_g_5821ba74_f0aa_4f21_8e62_5e8684f66277_ff61_ctl00_ctl00_UserField_upLevelDiv').innerHTML=res_immediate;
$('#ctl00_ctl43_g_5821ba74_f0aa_4f21_8e62_5e8684f66277_ff61_ctl00_ctl00_UserField_checkNames').click();


}

var get_lqf_field="";

var thisListGuid = '{247C4734-16F6-4753-AE01-A27C3B241745}';
function get_lfq_data(){
  var queryBuffer = [];
    queryBuffer.push("<Where><Eq><FieldRef Name='Title' /><Value Type='Text'>"+get_lqf_field+"</Value></Eq></Where>");
    //queryBuffer.push("<OrderBy><FieldRef Name='ID' Ascending='FALSE' /></OrderBy>");
  var res = spjs_QueryItems({listName:thisListGuid,query:queryBuffer.join(''),viewFields:['Title'],rowLimit:1});
  
  if(res.count<0){
    alert("An error occurred. Most likely the parameter \"thisListGuid\" is wrong.");
  }else if(res.count>0){
    return res.items[0].Title;
  }else{
    return '';
  }
}



function PreSaveAction(){
    
    var check_lqf=$("input[id='ctl00_ctl43_g_5821ba74_f0aa_4f21_8e62_5e8684f66277_ff71_ctl00_ctl00_TextField']").val();
    var cheque_cash=$("input[id='ctl00_ctl43_g_5821ba74_f0aa_4f21_8e62_5e8684f66277_ff81_ctl00_ctl00_TextField']").val();
    get_lqf_field = check_lqf;
     //console.log("check_lqf:" +check_lqf);

     if(cheque_cash!=""){

        var URL = location.pathname.replace('NewFormCopy.aspx','EditFormCopy.aspx');
        if(GetUrlKeyValue('IsDlg')==='1'){
            URL+="?IsDlg=1";
        }
        $("#aspnetForm").attr('action',location.pathname+"?Source="+URL);

        //console.log("check_lqf:"+check_lqf);
        if(check_lqf!=""){
            //console.log("a");
            var lqf_data = get_lfq_data();
           // console.log("lqf_data: "+lqf_data);


            if(lqf_data==""){
                alert("Warning, LQF Ref. No. ("+get_lqf_field+") is not a valid reference number. Please enter a valid reference no. for LQF field!")
                $("#ctl00_ctl43_g_c4be4803_8b77_4563_b0b4_71a84da19650_ff71_ctl00_ctl00_TextField").focus();
                return false;
            }else{
                //console.log("a");
                return true;
                
            }
        }else{
           // console.log("b");
            return true;


        }

     }else{
        alert("Please input Cheque/Cash Issued to field.");
        return false;
     }



    
}

</script><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i>