​​​​​​​​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;


//------------------------------------------------------------------------
 $(document).ready(function()
{

/*        document.getElementById("Document_x0020_No_x002e__7e32e4c1-f328-4516-9b03-60a3dbb49e59_$TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("Document_x0020_No_x002e__7e32e4c1-f328-4516-9b03-60a3dbb49e59_$TextField").size = "11";

$("input[id='Document_x0020_No_x002e__7e32e4c1-f328-4516-9b03-60a3dbb49e59_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

$("input[id='Revision_1dc89cc7-7612-4796-8271-a7f33dbfc65f_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 
*/

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

 var checklist_div = document.getElementById('Log_x0020_Details_0c85f439-5ea8-431f-8adf-f8e6436316b2_$TextField_inplacerte');

 checklist_div.innerHTML = "<table border='1' cellspacing='0' style='width: 945px; height: 283px; text-align: center;'> <tbody style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'> <tr dir='ltr' class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 7%; height: 1px;'> <p> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'> <strong>PART</strong></span></p> </td> <td class='ms-rteTableOddCol-default' style='width: 16%; height: 1px;'> <p> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'> <b>DESCRIPTION</b></span></p> </td> <td class='ms-rteTableEvenCol-default' style='width: 9%; height: 1px;'> <p> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'> <b>SCHEDULE</b></span></p> </td> <td class='ms-rteTableOddCol-default' style='width: 15%; height: 1px;'> <p> <b>PROCEDURE</b></p> </td> <td class='ms-rteTableEvenCol-default' colspan='1' style='width: 6%; height: 1px;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'> <strong>REMARKS</strong></span></td> <td colspan='1' style='width: 10%; height: 1px;'> <b>RECOMMENDATION</b></td> </tr> <tr class='ms-rteTableOddRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' rowspan='3' style='width: 7%; height: 16px; text-align: center; vertical-align: middle;'>Tires<br/></td> <td class='ms-rteTableOddCol-default' style='width: 16%; height: 16px;'>1. Inspect Tire thread<br/></td> <td bgcolor='#C6EFCE' class='ms-rteTableEvenCol-default' rowspan='1' style='width: 9%; height: 16px; text-align: center;'>Weekly<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' style='height: 16px; width: 15%;'> <br/> </td> <td class='ms-rteTableEvenCol-default' colspan='1' rowspan='3' style='height: 16px; width: 6%; text-align: center; vertical-align: middle;'> <div style='text-align: center;'> <br/> </div> </td> <td class='ms-rteTableOddCol-default' colspan='1' rowspan='3' style='height: 16px; width: 10%;'> <br/> </td> </tr> <tr class='ms-rteTableEvenRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' style='width: 16%; height: 16px;'>​2. Tire Pressure &#160;<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' bgcolor='#FFC7CE' style='width: 9%; height: 16px; text-align: center;'>​Daily<br/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='height: 16px; width: 15%;'>By using tire pressure.<br/></td> </tr> <tr class='ms-rteTableOddRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' style='width: 16%; height: 16px;'>​3. Tire wear<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' bgcolor='#C6EFCE' style='width: 9%; height: 16px; text-align: center;'>​Weekly<br/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='height: 16px; width: 15%;'>​<br/></td> </tr> <tr class='ms-rteTableEvenRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' rowspan='3' style='width: 7%; text-align: center; vertical-align: middle;'>Batteries<br/></td> <td class='ms-rteTableOddCol-default' style='width: 16%;'>1. Check Voltage<br/></td> <td class='ms-rteTableEvenCol-default' rowspan='3' bgcolor='#C6EFCE' style='width: 9%; text-align: center;'>Weekly<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 15%;'>Free Maintenance<br/></td> <td class='ms-rteTableEvenCol-default' colspan='1' rowspan='3' style='width: 6%; text-align: center; vertical-align: middle;'> <br/> </td> <td class='ms-rteTableOddCol-default' colspan='1' rowspan='3' style='width: 10%;'> <br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/> </td> </tr> <tr class='ms-rteTableOddRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' style='width: 16%;'>​2. Secure battery tie-down<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 15%;'>​Under warranty battery<br/></td> </tr> <tr class='ms-rteTableEvenRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' style='width: 16%;'>​3. Conduct charge/discharge load test<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 15%;'>​<br/></td> </tr> <tr class='ms-rteTableOddRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' rowspan='2' style='width: 7%; text-align: center; vertical-align: middle;'>Brakes<br/></td> <td class='ms-rteTableOddCol-default' style='width: 16%;'>1. Check brake fluid<br/></td> <td bgcolor='#C6EFCE' class='ms-rteTableEvenCol-default' rowspan='2' style='width: 9%; text-align: center;'> <br/>Weekly<br/><br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td> <td class='ms-rteTableOddCol-default' rowspan='2' style='width: 15%;'>Open the brake fluid reservoir and check if it&#39;s low or not.<br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td> <td class='ms-rteTableEvenCol-default' colspan='1' rowspan='2' style='width: 6%; text-align: center; vertical-align: middle;'> <br/> </td> <td class='ms-rteTableOddCol-default' colspan='1' rowspan='2' style='width: 10%;'> <br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/> </td> </tr> <tr class='ms-rteTableEvenRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' style='width: 16%;'>​2. Evaluate wear on the drum, brake pads and rotors<br/></td> </tr> <tr class='ms-rteTableOddRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' style='width: 7%; text-align: center; vertical-align: middle;'>Steering and Suspension<br/></td> <td class='ms-rteTableOddCol-default' style='width: 16%;'>1. Examine power steering belt, Power steering fluid level, Power steering pump<br/>2. Check fluid leaks<br/></td> <td bgcolor='#C6EFCE' class='ms-rteTableEvenCol-default' style='width: 9%; text-align: center;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px; text-align: center;'> <br/>Weekly</span><br/><br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td> <td class='ms-rteTableOddCol-default' style='width: 15%;'>Wipe the power steering and check if it&#39;s leaking or not.<br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td> <td class='ms-rteTableEvenCol-default' colspan='1' style='width: 6%; text-align: center; vertical-align: middle;'> <br/> </td> <td class='ms-rteTableOddCol-default' colspan='1' style='width: 10%;'> <br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/> </td> </tr> <tr class='ms-rteTableEvenRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' style='width: 7%; text-align: center; vertical-align: middle;'>Safety Lights<br/></td> <td class='ms-rteTableOddCol-default' style='width: 16%;'>1. Inspect headlights, brake lights, Hazard lights, and turn signals<br/></td> <td class='ms-rteTableEvenCol-default' bgcolor='#C6EFCE' style='width: 9%; text-align: center;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px; text-align: center;'> <br/>Weekly</span><br/></span></td> <td class='ms-rteTableOddCol-default' style='width: 15%;'>Check the fuse box if all lights are functional.<br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td> <td class='ms-rteTableEvenCol-default' colspan='1' style='width: 6%; text-align: center; vertical-align: middle;'> <br/> </td> <td class='ms-rteTableOddCol-default' colspan='1' style='width: 10%;'> <br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/> </td> </tr> <tr class='ms-rteTableOddRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' style='width: 7%; text-align: center; vertical-align: middle;'>Windshield Wipers<br/></td> <td class='ms-rteTableOddCol-default' style='width: 16%;'>1. Examine the windshield and wiper blades<br/></td> <td class='ms-rteTableEvenCol-default' bgcolor='#C6EFCE' style='width: 9%; text-align: center;'>Weekly<br/></td> <td class='ms-rteTableOddCol-default' style='width: 15%;'>If the wiper screeches when turned on, it needs replacement<br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td> <td class='ms-rteTableEvenCol-default' colspan='1' style='width: 6%; text-align: center; vertical-align: middle;'> <br/> </td> <td class='ms-rteTableOddCol-default' colspan='1' style='width: 10%;'> <br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/> </td> </tr> <tr class='ms-rteTableEvenRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' style='width: 7%; text-align: center; vertical-align: middle;'>Engine<br/></td> <td class='ms-rteTableOddCol-default' style='width: 16%;'>1. Inspect for leaks and damages<br/></td> <td class='ms-rteTableEvenCol-default' bgcolor='#C6EFCE' style='width: 9%; text-align: center;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px; text-align: center;'>Weekly</span><br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td> <td class='ms-rteTableOddCol-default' style='width: 15%;'>Check the cylinder head if there are excess engine oil&#160;<br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td> <td class='ms-rteTableEvenCol-default' colspan='1' style='width: 6%; text-align: center; vertical-align: middle;'> <br/> </td> <td class='ms-rteTableOddCol-default' colspan='1' style='width: 10%;'> <br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/> </td> </tr> <tr class='ms-rteTableOddRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' rowspan='3' style='width: 7%; text-align: center; vertical-align: middle;'>Fluid Levels<br/></td> <td class='ms-rteTableOddCol-default' style='width: 16%;'>1. Check the oil levels<br/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' bgcolor='#FFC7CE' style='width: 9%; text-align: center;'>Daily<br/></td> <td class='ms-rteTableOddCol-default' rowspan='3' style='width: 15%;'>Open the fluid reservoirs and check if it&#39;s low or not.<br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td> <td class='ms-rteTableEvenCol-default' colspan='1' rowspan='3' style='width: 6%; text-align: center; vertical-align: middle;'> <br/> </td> <td class='ms-rteTableOddCol-default' colspan='1' rowspan='3' style='width: 10%;'> <br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/> </td> </tr> <tr class='ms-rteTableEvenRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' style='width: 16%;'>​2. Coolant Levels<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' bgcolor='#FFC7CE' style='width: 9%; text-align: center;'>​Daily<br/></td> </tr> <tr class='ms-rteTableOddRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' style='width: 16%;'>​3. Transmission Fluids and Washer fluids<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' bgcolor='#C6EFCE' style='width: 9%; text-align: center;'>Weekly​<br/></td> </tr> <tr class='ms-rteTableEvenRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' style='width: 7%; text-align: center; vertical-align: middle;'>Hoses<br/></td> <td class='ms-rteTableOddCol-default' style='width: 16%;'>1. Check for leaks and other issues<br/></td> <td class='ms-rteTableEvenCol-default' bgcolor='#C6EFCE' style='width: 9%; text-align: center;'>Weekly<br/></td> <td class='ms-rteTableOddCol-default' style='width: 15%;'>Wipe the hoses too see where the leakings are.<br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td> <td class='ms-rteTableEvenCol-default' colspan='1' style='width: 6%; text-align: center; vertical-align: middle;'> <br/> </td> <td class='ms-rteTableOddCol-default' colspan='1' style='width: 10%;'> <br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/> </td> </tr> <tr class='ms-rteTableOddRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 7%; text-align: center; vertical-align: middle;'>Exhaust&#160;System<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 16%;'>1. Examine the exhaust manifold, Catalyctic converter, Tailpipes, muffler<br/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' bgcolor='#C6EFCE' style='width: 9%; text-align: center;'>Weekly<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 15%;'>Remove the muffler, Intercooler, EGR, Turbo and clean with pressure washer.<br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' colspan='1' style='width: 6%; text-align: center; vertical-align: middle;'> <br/> </td> <td class='ms-rteTableOddCol-default' rowspan='1' colspan='1' style='width: 10%;'> <br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/> </td> </tr> <tr class='ms-rteTableEvenRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 7%; text-align: center; vertical-align: middle;'>Air Filter<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 16%;'>1. Check for clogged air filter<br/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' bgcolor='#C6EFCE' style='width: 9%; text-align: center;'>Weekly<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 15%;'>Remove the filter and clean it with air pressure<br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' colspan='1' style='width: 6%; text-align: center; vertical-align: middle;'> <br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/> </td> <td class='ms-rteTableOddCol-default' rowspan='1' colspan='1' style='width: 10%;'> <div> </div> <br/> </td> </tr> <tr class='ms-rteTableOddRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 7%; text-align: center; vertical-align: middle;'>​Interior and Exterior<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 16%;'>&#160;1. Inspect the seatbelts, Car seats, Doors and Windows<br/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' bgcolor='#C6EFCE' style='width: 9%; text-align: center;'>​Weekly<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 15%;'>If the seatbelt strap is still stretchable it still works, check if the seat cover cloth is ripped, Check if the door lock is still functional, check if the window still works.<br/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' colspan='1' style='width: 6%; text-align: center; vertical-align: middle;'>​<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' colspan='1' style='width: 10%;'>​<br/></td> </tr> <tr class='ms-rteTableEvenRow-default' style='text-align: left;'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 7%; text-align: center; vertical-align: middle;'>​Camera<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 16%;'>1. Check the camera if working and recording<br/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' bgcolor='#FFC7CE' style='width: 9%; text-align: center;'>​Daily<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 15%;'>​If the camera is still blinking red it&#39;s still functional.<br/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' colspan='1' style='width: 6%; text-align: center; vertical-align: middle;'>​<br/></td> <td class='ms-rteTableOddCol-default' rowspan='1' colspan='1' style='width: 10%;'>​<br/></td> </tr> </tbody></table>";


});

//------------------------------------------------------------------------

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
    document.getElementById('Officer_x0027_s_x0020_Name_66338da4-46cf-4f32-814e-b28dea3053a9_$TextField').value = requestorName;
    //document.getElementById('Department_x002f_Section_aa1d5da4-b183-40dd-b7e0-c3d5e2de85b3_$TextField').value = department;
    immediate_head_var = manager;
    immediate_head();

}

function immediate_head() {

var immediate_head_temp = immediate_head_var;

var res_immediate = immediate_head_temp.substring(9);
console.log(res_immediate);
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
 

</script><i>​​​​​​<b>Note:</b> Make sure you recieve an email once you save the request from sharepoint@houseofit.com.au indicating &quot;Than​k you for Submitting​&quot;.<br/> If you haven&#39;t recieve any email upon submittin​​g the request , Please send an email to 
   <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​​​​​​​​​​​​​​​​​​</i>