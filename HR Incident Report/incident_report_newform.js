<p>&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script<script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;


//------------------------------------------------------------------------
 $(document).ready(function()
{
//<span class='ms-metadata'>Please click the attach button to attach file.</span>
var html = "<tr><td width='190px' valign='top' style='padding: 6px 0px;' ><h3 class='ms-standardheader'><nobr>Attach Files</nobr></h3></td><td valign='top'  id='attachmentsOnClient'><input type='file' name='fileupload0' id='onetidIOFile' size='56' style='width: 386px;' title='Name'> </input></td></tr><tr><td  style='padding: 6px 0px;'> &nbsp </td><td > <span class='ms-metadata ms-rteThemeForeColor-5-0'  >*Please click the attach button to attach the file.</span> <input name='Button1' type='button' value='Attach' onclick='OkAttach()' style='float: right;'' /> </td></tr>"+

    "<tr><td  style='padding: 6px 0px;'> &nbsp </td><td>  &nbsp  </td></tr>";


$('.ms-formtable > tbody > tr').eq(5).after(html);

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

SPUtility.GetSPField('Status').MakeReadOnly();
SPUtility.HideSPField('Status');
SPUtility.GetSPField('CC').MakeReadOnly();
SPUtility.HideSPField('CC');
SPUtility.GetSPField('Memo No').MakeReadOnly();
SPUtility.HideSPField('Memo No');
SPUtility.GetSPField('Employee Name').MakeReadOnly();
SPUtility.HideSPField('Employee Name');
SPUtility.GetSPField('Department').MakeReadOnly();
SPUtility.HideSPField('Department');
SPUtility.GetSPField('Position Title').MakeReadOnly();
SPUtility.HideSPField('Position Title');
SPUtility.GetSPField('Team Head').MakeReadOnly();
SPUtility.HideSPField('Team Head');
SPUtility.GetSPField('Date').MakeReadOnly();
SPUtility.HideSPField('Date');
SPUtility.GetSPField('Code of Conduct').MakeReadOnly();
SPUtility.HideSPField('Code of Conduct');
SPUtility.GetSPField('Level of Offense').MakeReadOnly();
SPUtility.HideSPField('Level of Offense');
SPUtility.GetSPField('Possible Decision').MakeReadOnly();
SPUtility.HideSPField('Possible Decision');
SPUtility.GetSPField('Guilty of Committing').MakeReadOnly();
SPUtility.HideSPField('Guilty of Committing');
SPUtility.GetSPField('Employee Explanation').MakeReadOnly();
SPUtility.HideSPField('Employee Explanation');
SPUtility.GetSPField('Final Decision').MakeReadOnly();
SPUtility.HideSPField('Final Decision');
SPUtility.GetSPField('Level of Penalties').MakeReadOnly();
SPUtility.HideSPField('Level of Penalties');
SPUtility.GetSPField("Comment's/Remarks").MakeReadOnly();
SPUtility.HideSPField("Comment's/Remarks");
SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
SPUtility.HideSPField('Date and Time Created');
SPUtility.GetSPField('Duration (Reported to Closed)').MakeReadOnly();
SPUtility.HideSPField('Duration (Reported to Closed)');
SPUtility.GetSPField('Date and Time Changed').MakeReadOnly();
SPUtility.HideSPField('Date and Time Changed');
SPUtility.GetSPField('Duration(Report to NTE)').MakeReadOnly();
SPUtility.HideSPField('Duration(Report to NTE)');
SPUtility.GetSPField('Duration(NTE to Closed)').MakeReadOnly();
SPUtility.HideSPField('Duration(NTE to Closed)');

/*var currentdate = new Date();
var getHour_temp = ((currentdate.getHours()<10)?'0':'')+currentdate.getHours();
var getMinutes_temp = ((currentdate.getMinutes()<10)?'0':'')+currentdate.getMinutes();

var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + getHour_temp + ":"
                + getMinutes_temp;

                console.log(datetime);


               var timeAgo = jQuery.timeago(new Date(datetime));
               console.log(timeAgo)
*/





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
    document.getElementById('Report_x0020_Name_a52518aa-6448-4a38-86a1-68c5c95f6579_$TextField').value = requestorName;
   document.getElementById('Department_x002f_Section_d7429d0a-7340-4bac-a2d5-9e389476d83e_$TextField').value = department;
}
 
 //---------------------------------------------------------------------------------------------------------------
 
/*
 function AttachFile()
{
    SP.Ribbon.PageManager.get_instance().executeRootCommand("Ribbon.ListForm.Edit.Actions.AttachFile", null, null, null);
}

<a onclick='javascript:AttachFile();'>browse</a>

*/
 function PreSaveAction()

{

var incident_type = $("select[id='Incident_x0020_Type_2b6eab5b-de0e-4db9-bede-277540fe53b8_$DropDownChoice']").val();


var currentdate = new Date();
var getHour_temp = ((currentdate.getHours()<10)?'0':'')+currentdate.getHours();
var getMinutes_temp = ((currentdate.getMinutes()<10)?'0':'')+currentdate.getMinutes();

var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + getHour_temp + ":"
                + getMinutes_temp;
  


 document.getElementById('Date_x0020_and_x0020_Time_x0020__059844a3-f969-4b78-bd4d-f740fb7725ae_$TextField').value = datetime;

if(incident_type == "")
{
alert("Information. Incident type needs value, please select incident type.");
return false;
}
else{
return true;
}
}
 

</script><i>&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;<b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin&#8203;&#8203;g the request , Please send an email to 
      <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>&#8203;&#8203;&#8203; or click the link.&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;&#8203;</i></p>
      
