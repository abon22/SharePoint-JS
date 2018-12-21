<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"><span id="ms-rterangecursor-start" aria-hidden="true"></span><span id="ms-rterangecursor-end" aria-hidden="true"></span></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

//--------Change 'Save' to 'Submit'-----------------

  $(document).ready(function()
{
    
$("div[id='s4-ribbonrow']").css("display","none");



  var inputcontrols = document.getElementsByTagName("input");
        for(i = 0; i<inputcontrols.length; i++)
        {
            if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
                inputcontrols[i].value = "Submit";
        }
        var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
        ribbonSave.text("Submit");

       $('.ms-formtable tbody tr:eq(5) td:eq(0)').html('<h3 class="ms-standardheader"><nobr>Date Equipment <br>Picked Up<span class="ms-accentText" title="This is a required field."> *</span></nobr></h3>');
       $('.ms-formtable tbody tr:eq(7) td:eq(0)').html('<h3 class="ms-standardheader"><nobr>Date Equipment will be <br>Returned<span class="ms-accentText" title="This is a required field."> *</span></nobr></h3>');
       $('.ms-formtable tbody tr:eq(9) td:eq(0)').html('<h3 class="ms-standardheader"><nobr>I understand that it is my<br> responsibility to<span class="ms-accentText" title="This is a required field."> *</span></nobr></h3>');

SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
SPUtility.HideSPField('Date and Time Created');

SPUtility.GetSPField('IT-AVP Approval').MakeReadOnly();
SPUtility.HideSPField('IT-AVP Approval');

SPUtility.GetSPField('IT-Technician Status').MakeReadOnly();
SPUtility.HideSPField('IT-Technician Status');

SPUtility.GetSPField('Reference Number').MakeReadOnly();
SPUtility.HideSPField('Reference Number');

//alert("test");

 var waiver_div = document.getElementById('Equipments_7ff5c84d-c8e5-4941-8542-4be90c46428e_$TextField_inplacerte');
  waiver_div.innerHTML = "<table border='1' cellpadding='0' cellspacing='0' style='width: 810px; height: 265px;'><colgroup style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'><col width='156' style='width: 117pt;'></col><col width='278' style='width: 209pt;'></col><col width='162' span='2' style='width: 122pt;'></col> </colgroup><tbody style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'><tr height='21' style='height: 15.75pt;'><td colspan='4' height='21' class='xl70' width='758' style='border-right: 1pt solid black; height: 15.75pt; width: 570pt; text-align: center;'><strong style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'>Equipment Being Checked Out</strong></td></tr><tr height='40' style='height: 30pt;'><td class='xl66' style='height: 41px; border-top: none; text-align: center; width: 1px;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'><strong>Qty</strong></span></td><td class='xl64' style='border-top: none; border-left: none; text-align: center; width: 669px; height: 41px;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'><strong>Equipment</strong></span></td><td class='xl65' style='border-top: none; border-left: none; width: 229px; text-align: center; height: 41px;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'><strong>Condition When Check Out (Good, Fair, Poor)</strong></span></td><td class='xl67' style='border-top: none; border-left: none; width: 289px; text-align: center; height: 41px;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'><strong>Condition When Returned (Good, Fair, Poor)</strong></span></td></tr><tr height='20' style='height: 15pt;'><td class='xl68' style='height: 21px; border-top: none; width: 1px;'><span style='font-size: 10pt;'>&#160;</span></td><td class='xl63' style='border-top: none; border-left: none; width: 669px; height: 21px;'><span style='font-size: 10pt;'>&#160;</span></td><td class='xl63' style='border-top: none; border-left: none; width: 229px; height: 21px;'><span style='font-size: 10pt;'>&#160;</span></td><td class='xl69' style='border-top: none; border-left: none; width: 289px; height: 21px;'><span style='font-size: 10pt;'>&#160;</span></td></tr><tr height='20' style='height: 15pt;'><td height='20' class='xl68' style='height: 15pt; border-top: none; width: 1px;'><span style='font-size: 10pt;'>&#160;</span></td><td class='xl63' style='border-top: none; border-left: none; width: 669px;'><span style='font-size: 10pt;'>&#160;</span></td><td class='xl63' style='border-top: none; border-left: none; width: 229px;'><span style='font-size: 10pt;'>&#160;</span></td><td class='xl69' style='border-top: none; border-left: none; width: 289px;'><span style='font-size: 10pt;'>&#160;</span></td></tr><tr height='20' style='height: 15pt;'><td height='20' class='xl68' style='height: 15pt; border-top: none; width: 1px;'><br/></td><td class='xl63' style='border-top: none; border-left: none; width: 669px;'><span style='font-size: 10pt;'>&#160;</span></td><td class='xl63' style='border-top: none; border-left: none; width: 229px;'><span style='font-size: 10pt;'>&#160;</span></td><td class='xl69' style='border-top: none; border-left: none; width: 289px;'><span style='font-size: 10pt;'>&#160;</span></td></tr><tr height='20' style='height: 15pt;'><td height='20' class='xl68' style='height: 15pt; border-top: none; width: 1px;'><span style='font-size: 10pt;'>&#160;</span></td><td class='xl63' style='border-top: none; border-left: none; width: 669px;'><span style='font-size: 10pt;'>&#160;</span></td><td class='xl63' style='border-top: none; border-left: none; width: 229px;'><span style='font-size: 10pt;'>&#160;</span></td><td class='xl69' style='border-top: none; border-left: none; width: 289px;'><span style='font-size: 10pt;'>&#160;</span></td></tr><tr height='20' style='height: 15pt;'><td height='20' class='xl68' style='height: 15pt; border-top: none; width: 1px;'><span style='font-size: 10pt;'>&#160;</span></td><td class='xl63' style='border-top: none; border-left: none; width: 669px;'><span style='font-size: 10pt;'>&#160;</span></td><td class='xl63' style='border-top: none; border-left: none; width: 229px;'><span style='font-size: 10pt;'>&#160;</span></td><td class='xl69' style='border-top: none; border-left: none; width: 289px;'><span style='font-size: 10pt;'>&#160;</span></td></tr></tbody></table>";


});


var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.



ExecuteOrDelayUntilScriptLoaded(init,'sp.js');


 var targetUser;

function init()
{

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
    //  alert(account);
    //document.getElementById('Target_x0020_User_7a3010a9-5c64-4d5a-8bf9-457d088f7ff3_$TextField').value = targetUser_temp;


    SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');
}


function getUserProperties() {



targetUser = 'hoitcebu\\'+targetUser;
    // Replace the placeholder value with the target user's credentials.
   //  alert(targetUser);



    // Get the current client context and PeopleManager instance.
    var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);


    // Specify the properties to retrieve and target user for the
    // UserProfilePropertiesForUser object.
    var profilePropertyNames = ["PreferredName", "Department", "Manager", "PictureURL"];
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
    document.getElementById('Employee_x0020_Name_4e868dbe-5cbc-4d4c-9781-5df72231cb8b_$TextField').value = requestorName;
    document.getElementById('Department_x002f_Section_48c25472-93e5-4efa-9baa-96cdbb1bbaa9_$TextField').value = department;
   // document.getElementById('Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField').value = manager;


}

// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args){
alert("Error: " + args.get_message());

}

var agree_0 = 0;
var agree_1 = 0;
var agree_2 = 0;
var agree_3= 0;
 $(function() {



 //SPUtility.HideSPField('Date and Time Created')
 //SPUtility.HideSPField('TempID');

 //SPUtility.HideSPField('From');
 //SPUtility.HideSPField('To');
 //SPUtility.HideSPField('Pay period with the amount of ₱');
// SPUtility.HideSPField('By every');


 //---- CHECKBOXES---
 //-------------------------------------------------------------------------------------------------------

$('input[id=I_x0020_understand_x0020_that_x0_d871b1e4-0f78-419b-bf77-8c9eb391e8f0_MultiChoiceOption_0').change( function() {

  if(document.getElementById('I_x0020_understand_x0020_that_x0_d871b1e4-0f78-419b-bf77-8c9eb391e8f0_MultiChoiceOption_0').checked) {
   agree_0= 1;
} else {
    agree_0= 0;
}

});

//-------------------------------------------------------------------------------------------------------

$('input[id=I_x0020_understand_x0020_that_x0_d871b1e4-0f78-419b-bf77-8c9eb391e8f0_MultiChoiceOption_1').change( function() {

  if(document.getElementById('I_x0020_understand_x0020_that_x0_d871b1e4-0f78-419b-bf77-8c9eb391e8f0_MultiChoiceOption_1').checked) {
   agree_1= 1;
} else {
    agree_1= 0;
}

});

//-------------------------------------------------------------------------------------------------------

$('input[id=I_x0020_understand_x0020_that_x0_d871b1e4-0f78-419b-bf77-8c9eb391e8f0_MultiChoiceOption_2').change( function() {

  if(document.getElementById('I_x0020_understand_x0020_that_x0_d871b1e4-0f78-419b-bf77-8c9eb391e8f0_MultiChoiceOption_2').checked) {
   agree_2= 1;
} else {
    agree_2= 0;
}

});

//-------------------------------------------------------------------------------------------------------

$('input[id=I_x0020_understand_x0020_that_x0_d871b1e4-0f78-419b-bf77-8c9eb391e8f0_MultiChoiceOption_3').change( function() {

  if(document.getElementById('I_x0020_understand_x0020_that_x0_d871b1e4-0f78-419b-bf77-8c9eb391e8f0_MultiChoiceOption_3').checked) {
   agree_3= 1;
} else {
    agree_3= 0;
}

});

//-------------------------------------------------------------------------------------------------------




})

function PreSaveAction()

{

//var from = $("input[title='From']").val();
//var to = $("input[title='To']").val();
//var pay_period = $("input[title='Pay period with the amount of ₱']").val();
//var by_every= $("select[title='By every']").val();


var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-"
                + currentdate.getDate() + " "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();
    //alert(datetime);

var picked_up_date=$("input[id='Date_x0020_Equipment_x0020_Picke_11fa92c7-0c13-429a-b590-0119edb402cf_$DateTimeFieldDate']").val();
var returned_date=$("input[id='Date_x0020_Equipment_x0020_will__3a3e55e1-cdce-45ea-a115-4f742fb61183_$DateTimeFieldDate']").val();


var formated_picked_up_date = new Date(picked_up_date);
var formated_returned_date = new Date(returned_date);

//alert(formated_picked_up_date+" > "+formated_returned_date);

if(formated_picked_up_date>formated_returned_date)
{
alert("Date returned must not be less than picked up date.");
return false;
}
else if(agree_0!= 1 || agree_1!= 1 || agree_2!= 1 || agree_3!= 1 )
{
alert("Please check all responsibilities!");
return false;
}
else
{
 document.getElementById('Date_x0020_and_x0020_Time_x0020__fd523183-9e09-4b8a-a72f-345c7121d20d_$TextField').value = datetime;
return true;
}




}//end function




</script><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you recieve an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t recieve any email upon submittin​​g the request , Please send an email to
   <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i><br/>
