​​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">

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
        
       // var waiver_div = document.getElementById('Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField_inplacerte');
  //waiver_div.innerHTML = "<table border='1' cellpadding='0' cellspacing='0' width='626' style='width: 470pt;'> <colgroup><col width='64' span='2' style='width: 48pt;'></col><col width='209' style='width: 157pt;'></col><col width='87' style='width: 65pt;'></col><col width='90' style='width: 68pt;'></col><col width='112' style='width: 84pt;'></col> </colgroup> <tbody> <tr height='20' style='height: 15pt;'> <td height='20' class='xl63 ' width='64' style='height: 15pt; width: 48pt;'> <strong>Item</strong></td> <td class='xl63 ' width='64' style='width: 48pt;'> <strong>Code</strong></td> <td class='xl63 ' width='209' style='width: 157pt;'> <strong>Description</strong></td> <td class='xl63 ' width='87' style='width: 65pt;'> <strong>Qty</strong></td> <td class='xl63 ' width='90' style='width: 68pt;'> <strong>Unit Price</strong></td> <td class='xl63 ' width='112' style='width: 84pt;'> <strong>Amount(Php)</strong></td> </tr> <tr height='20' style='height: 15pt;'> <td height='20' class='xl63 ' width='64' style='height: 15pt; width: 48pt;'> <br/> </td> <td class='xl63 ' width='64' style='width: 48pt;'> </td> <td class='xl63 ' width='209' style='width: 157pt;'> <br/> </td> <td class='xl63 ' width='87' style='width: 65pt;'> <br/> </td> <td class='xl64 ' width='90' style='width: 68pt;'> <br/> </td> <td class='xl65 ' width='112' style='width: 84pt;'> </td> </tr> <tr height='20' style='height: 15pt;'> <td height='20' class='xl63 ' width='64' style='height: 15pt; width: 48pt;'> </td> <td class='xl63 ' width='64' style='width: 48pt;'> <br/> </td> <td class='xl63 ' width='209' style='width: 157pt;'> </td> <td class='xl63 ' width='87' style='width: 65pt;'> </td> <td class='xl63 ' width='90' style='width: 68pt;'> </td> <td class='xl63 ' width='112' style='width: 84pt;'> </td> </tr> <tr height='20' style='height: 15pt;'> <td height='20' class='xl66 ' width='64' style='height: 15pt; width: 48pt;'> </td> <td class='xl63 ' width='64' style='width: 48pt;'> <br/> </td> <td class='xl63 ' width='209' style='width: 157pt;'> </td> <td class='xl63 ' width='87' style='width: 65pt;'> </td> <td class='xl63 ' width='90' style='width: 68pt;'> </td> <td class='xl63 ' width='112' style='width: 84pt;'> </td> </tr> <tr height='20' style='height: 15pt;'> <td height='20' class='xl63 ' width='64' style='height: 15pt; width: 48pt;'> </td> <td class='xl63 ' width='64' style='width: 48pt;'> <br/> </td> <td class='xl63 ' width='209' style='width: 157pt;'> </td> <td class='xl63 ' width='87' style='width: 65pt;'> </td> <td class='xl63 ' width='90' style='width: 68pt;'> </td> <td class='xl63 ' width='112' style='width: 84pt;'> </td> </tr> <tr height='20' style='height: 15pt;'> <td height='20' class='xl63 ' width='64' style='height: 15pt; width: 48pt;'> </td> <td class='xl63 ' width='64' style='width: 48pt;'> <br/> </td> <td class='xl63 ' width='209' style='width: 157pt;'> </td> <td class='xl63 ' width='87' style='width: 65pt;'> </td> <td class='xl63 ' width='90' style='width: 68pt;'> </td> <td class='xl63 ' width='112' style='width: 84pt;'> </td> </tr> <tr height='20' style='height: 15pt;'> <td height='20' class='xl63 ' width='64' style='height: 15pt; width: 48pt;'> </td> <td class='xl63 ' width='64' style='width: 48pt;'> </td> <td class='xl63 ' width='209' style='width: 157pt;'> </td> <td class='xl63 ' width='87' style='width: 65pt;'> </td> <td class='xl63 ' width='90' style='width: 68pt;'> </td> <td class='xl63 ' width='112' style='width: 84pt;'> </td> </tr> <tr height='20' style='height: 15pt;'> <td height='20' class='xl63 ' width='64' style='height: 15pt; width: 48pt;'> </td> <td class='xl63 ' width='64' style='width: 48pt;'> </td> <td class='xl63 ' width='209' style='width: 157pt;'> </td> <td class='xl63 ' width='87' style='width: 65pt;'> </td> <td class='xl63 ' width='90' style='width: 68pt;'> </td> <td class='xl63 ' width='112' style='width: 84pt;'> </td> </tr> <tr height='20' style='height: 15pt;'> <td height='20' class='xl63 ' width='64' rowspan='1' style='height: 15pt; width: 48pt;'>​</td> <td class='xl63 ' width='64' rowspan='1' style='width: 48pt;'>​</td> <td class='xl63 ' width='209' rowspan='1' style='width: 157pt;'>​</td> <td class='xl63 ' width='87' rowspan='1' style='width: 65pt;'>​</td> <td class='xl63 ' width='90' rowspan='1' style='width: 68pt;'>​</td> <td class='xl63 ' width='112' rowspan='1' style='width: 84pt;'>​</td> </tr> <tr height='20' style='height: 15pt;'> <td height='20' class='xl63 ' width='64' rowspan='1' style='height: 15pt; width: 48pt;'>​</td> <td class='xl63 ' width='64' rowspan='1' style='width: 48pt;'>​</td> <td class='xl63 ' width='209' rowspan='1' style='width: 157pt;'>​</td> <td class='xl63 ' width='87' rowspan='1' style='width: 65pt;'>​</td> <td class='xl63 ' width='90' rowspan='1' style='width: 68pt;'>​</td> <td class='xl63 ' width='112' rowspan='1' style='width: 84pt;'>​</td> </tr> <tr height='20' style='height: 15pt;'> <td height='20' class='xl63 ' width='64' style='height: 15pt; width: 48pt;'> </td> <td class='xl63 ' width='64' style='width: 48pt;'> </td> <td class='xl63 ' width='209' style='width: 157pt;'> </td> <td class='xl63 ' width='87' style='width: 65pt;'> </td> <td> <strong>TOTAL</strong></td> <td class='xl63 ' width='112' style='width: 84pt;'> </td> </tr> </tbody></table>";
        
        
    });
})(jQuery);
//------------------------------------

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

//-----------------------------------------------------------------------------------------------------------

 $(function() {
 SPUtility.HideSPField('Actual Price');
 // SPUtility.HideSPField('Issue Status');
  
  SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
SPUtility.HideSPField('Date and Time Created');


SPUtility.GetSPField('Duration (Requested to Approved)').MakeReadOnly();
SPUtility.HideSPField('Duration (Requested to Approved)');


SPUtility.GetSPField('Date and Time Approved').MakeReadOnly();
SPUtility.HideSPField('Date and Time Approved');


SPUtility.GetSPField('Duration (Approved to Closed)').MakeReadOnly();
SPUtility.HideSPField('Duration (Approved to Closed)');



SPUtility.GetSPField('Duration (Requested to Rejected)').MakeReadOnly();
SPUtility.HideSPField('Duration (Requested to Rejected)');

SPUtility.HideSPField('CSO Approval');
SPUtility.HideSPField('CEO Approval');
SPUtility.HideSPField('Status');
 
})
  
    function init(){

 

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

function onRequestFail(sender, args) {
    document.getElementById('Requestor_x0020_Name_7db43aba-90a7-4bb3-8c6e-460211954749_$TextField').value = "Error: " + args.get_message();
    document.getElementById('Department_x002f_Section_6b91d99b-6438-4bc2-bc72-47e618657f68_$TextField').value = "Error: " + args.get_message();
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
    document.getElementById('Requestor_x0020_Name_3e911b8d-b559-4f09-ad67-b4de76d5e899_$TextField').value = requestorName;
    document.getElementById('Department_x002f_Section_1768174f-efca-44e9-a89e-b22be60f239f_$TextField').value = department;
    immediate_head_var = manager;
    immediate_head();

}

function immediate_head() {

var immediate_head_temp = immediate_head_var;
var res_immediate = immediate_head_temp.substring(9);
var key_var = "i:0#.w|hoitcebu\\"+res_immediate;


ExecuteOrDelayUntilScriptLoaded(function () {
    setTimeout(function () {

        var dispTitle = "Immediate Head Required Field";
        var pickerDiv = $("[id$='ClientPeoplePicker'][title='" + dispTitle + "']");
        var peoplePicker = SPClientPeoplePicker.SPClientPeoplePickerDict[pickerDiv[0].id];
        var usrObj = { 'Key': key_var};
        peoplePicker.AddUnresolvedUser(usrObj,true); 

    }, 500);
}, "clientpeoplepicker.js");


}

 
 //---------------------------------------------------------------------------------------------------------------



function PreSaveAction()
{

var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();
 //   alert(datetime);


document.getElementById('Date_x0020_and_x0020_Time_x0020_0_5a549afb-8b61-4331-8cd0-6a00dc456f03_$TextField').value = datetime;
 
return true;
}





</script><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you recieve an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t recieve any email upon submittin​​g the request , Please send an email to 
   <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i><br/>