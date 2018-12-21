<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script>


var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.


ExecuteOrDelayUntilScriptLoaded(init,'sp.js');

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

document.getElementById("Document_x0020_No_x002e__e5782e89-ded6-4312-86f1-de22d77aba8e_$TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("Document_x0020_No_x002e__e5782e89-ded6-4312-86f1-de22d77aba8e_$TextField").size = "11";

$("input[id='Document_x0020_No_x002e__e5782e89-ded6-4312-86f1-de22d77aba8e_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

$("input[id='Revision_576b25f9-ad66-4042-a4af-48b0905687a7_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 


SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
SPUtility.HideSPField('Date and Time Created');

SPUtility.HideSPField('Reference Number');
SPUtility.HideSPField('Actual Price');
SPUtility.HideSPField('Purchaser Status');
SPUtility.HideSPField('CEO Approval');
SPUtility.HideSPField('VP Approval');
SPUtility.HideSPField('Finance Status');
SPUtility.HideSPField('Comments');

 var waiver_div = document.getElementById('Items_x0020_Specification_65e5dbb6-acc6-4b4b-82c5-de291cdfc26c_$TextField_inplacerte');
  waiver_div.innerHTML = "<table border='1' cellspacing='0' class='ms-rteTable-default' style='width: 680px; height: 228px; text-align: center;'><tbody style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'><tr dir='ltr' class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 1%; height: 1px;'><p><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'><strong>Qty</strong></span></p></td><td class='ms-rteTableOddCol-default' style='width: 8%; height: 1px;'><p><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'><b>Item</b></span></p></td><td class='ms-rteTableEvenCol-default' style='width: 11%; height: 1px;'><p><b>Description</b></p></td></tr><tr class='ms-rteTableOddRow-default' style='text-align: left;'><td class='ms-rteTableEvenCol-default' style='width: 1%; text-align: center; height: 1px;'><br/></td><td class='ms-rteTableOddCol-default' style='width: 8%; height: 1px;'><br/></td><td class='ms-rteTableEvenCol-default' style='width: 11%; height: 1px;'><br/></td></tr><tr class='ms-rteTableEvenRow-default' style='text-align: left;'><td class='ms-rteTableEvenCol-default' style='width: 1%; text-align: center; height: 1px;'><br/></td><td class='ms-rteTableOddCol-default' style='width: 8%; height: 1px;'><br/></td><td class='ms-rteTableEvenCol-default' style='width: 11%; height: 1px;'><br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td></tr><tr class='ms-rteTableOddRow-default' style='text-align: left;'><td class='ms-rteTableEvenCol-default' style='width: 1%; text-align: center; height: 1px;'><br/></td><td class='ms-rteTableOddCol-default' style='width: 8%; height: 1px;'><br/></td><td class='ms-rteTableEvenCol-default' style='width: 11%; height: 1px;'><br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td></tr><tr class='ms-rteTableEvenRow-default' style='text-align: left;'><td class='ms-rteTableEvenCol-default' style='width: 1%; text-align: center; height: 2px;'><br/></td><td class='ms-rteTableOddCol-default' style='width: 8%; height: 2px;'><br/></td><td class='ms-rteTableEvenCol-default' style='width: 11%; height: 2px;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'><br/></span></td></tr><tr class='ms-rteTableOddRow-default' style='text-align: left;'><td class='ms-rteTableEvenCol-default' style='width: 1%; text-align: center; height: 1px;'><br/></td><td class='ms-rteTableOddCol-default' style='width: 8%; height: 1px;'><br/></td><td class='ms-rteTableEvenCol-default' style='width: 11%; height: 1px;'><br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14px;'/></td></tr></tbody></table>";


openDialog();

});

 var targetUser;

 function init(){
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
    document.getElementById('Requestor_x0027_s_x0020_Name_dd5a9d2b-c257-4120-a493-942b72e06a8d_$TextField').value = requestorName;
    document.getElementById('Department_x002f_Section_6a1eb13d-a297-4f9d-be58-1e58014d57d6_$TextField').value = department;
    //document.getElementById('Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField').value = manager;
  
    
}



// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
    document.getElementById('Requestor_x0027_s_x0020_Name_dd5a9d2b-c257-4120-a493-942b72e06a8d_$TextField').value = "Error: " + args.get_message();
    document.getElementById('Department_x002f_Section_6a1eb13d-a297-4f9d-be58-1e58014d57d6_$TextField').value = "Error: " + args.get_message();
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



function PreSaveAction()

{
var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();
    //alert(datetime);

 var cheque_cash = $("input[title='Cheque/Cash Issued to']").val();

 document.getElementById('Date_x0020_and_x0020_Time_x0020__5dc721c3-2696-451b-8330-85c4c44d9795_$TextField').value = datetime;
 
// var varPriority = $("input[title='Date and Time Created']").val();
 //alert(varPriority);

if(cheque_cash == "" || cheque_cash == null){
    alert("Please input Cheque/Cash Issued to field.")
    return false;
}else{

    return true;//true

}



}

</script><i><b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to 
      <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i>

<div style="display:none">
   <div id="d10">
       <h3 class="ms-core-pageTitle"> Purchase Lead Time <img width="35px" align="center" src="https://intranet.houseofit.com.au/SiteAssets/info%20icon.png"/></h3> <br>
       <img width="100%" align="center" src="https://intranet.houseofit.com.au/SiteAssets/puchasing%20time%20lead/2018-02-01_8-41-49.png"/>
       <img width="100%" align="center" src="https://intranet.houseofit.com.au/SiteAssets/puchasing%20time%20lead/2018-02-01_8-42-02.png"/>
       </div>
   </div>
</div>