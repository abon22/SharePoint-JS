
​​​​​​​​​<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script> ​​​<script src="/SiteAssets/Scripts/jquery.timeago.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script>
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
                inputcontrols[i].value = "Submit";
        }
        var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
        ribbonSave.text("Submit");

        // openDialog();

        document.getElementById("Employee_x0020_Information_x0020").innerText = "";
        document.getElementById("Employee_x0020_Information_x0020").style.border = "none";
        document.getElementById("Employee_x0020_Information_x0020").style.borderBottom = "thin solid black";
        document.getElementById("Employee_x0020_Information_x0020_37081d9f-148b-4ef9-a5fb-8f92b995dd20_$TextField").style.border = "none";
        document.getElementById("Employee_x0020_Information_x0020_37081d9f-148b-4ef9-a5fb-8f92b995dd20_$TextField").style.borderTop = "thin solid black";
        document.getElementById("Employee_x0020_Information_x0020_37081d9f-148b-4ef9-a5fb-8f92b995dd20_$TextField").readOnly = true

        document.getElementById("Personal_x0020_Info_x0020_Separa").innerText = "";
        document.getElementById("Personal_x0020_Info_x0020_Separa").style.border = "none";
        document.getElementById("Personal_x0020_Info_x0020_Separa").style.borderBottom = "thin solid black";
        document.getElementById("Personal_x0020_Info_x0020_Separa_37085ef3-790a-4524-a9fd-5f5869f1ca61_$TextField").style.border = "none";
        document.getElementById("Personal_x0020_Info_x0020_Separa_37085ef3-790a-4524-a9fd-5f5869f1ca61_$TextField").style.borderTop = "thin solid black";
        document.getElementById("Personal_x0020_Info_x0020_Separa_37085ef3-790a-4524-a9fd-5f5869f1ca61_$TextField").readOnly = true

        document.getElementById("School_x0020_Information_x0020_S").innerText = "";
        document.getElementById("School_x0020_Information_x0020_S").style.border = "none";
        document.getElementById("School_x0020_Information_x0020_S").style.borderBottom = "thin solid black";        
        document.getElementById("School_x0020_Information_x0020_S_2b43110d-c296-4907-bba8-120e22577a81_$TextField").style.border = "none";
        document.getElementById("School_x0020_Information_x0020_S_2b43110d-c296-4907-bba8-120e22577a81_$TextField").style.borderTop = "thin solid black";
        document.getElementById("School_x0020_Information_x0020_S_2b43110d-c296-4907-bba8-120e22577a81_$TextField").readOnly = true

        SPUtility.HideSPField('Existing Beneficiary Requirement');
        document.getElementById("Existing_x0020_Beneficiary_x0020_7df5643e-4a8d-43f3-9e5a-b65ba9f8b13c_$TextField").style.border = "none";
        document.getElementById("Existing_x0020_Beneficiary_x0020_7df5643e-4a8d-43f3-9e5a-b65ba9f8b13c_$TextField").style.background = "#f2f2f2";
        document.getElementById("Existing_x0020_Beneficiary_x0020_7df5643e-4a8d-43f3-9e5a-b65ba9f8b13c_$TextField").value = "Previous Grade Attachment";
        document.getElementById("Existing_x0020_Beneficiary_x0020_7df5643e-4a8d-43f3-9e5a-b65ba9f8b13c_$TextField").style.color = "green";

        document.getElementById("Ribbon.ListForm.Edit.Commit.Publish-Large").style.display = "none";

        HideBefore_LiquidationReferenceID_IsCorrect();
        SPUtility.HideSPField('Liquidation Reference Number');

        SPUtility.HideSPField('Department Head Approval');
        SPUtility.HideSPField('Reference Number');
        SPUtility.HideSPField('HR Approval');
        SPUtility.HideSPField('VP-Philippines Approval');
        SPUtility.HideSPField('Finance Approval');
        SPUtility.HideSPField('CEO Approval');

        SPUtility.HideSPField('Department Head Notes');
        SPUtility.HideSPField('HR Notes');
        SPUtility.HideSPField('VP-Philippines Notes');
        SPUtility.HideSPField('Finance Notes');
        SPUtility.HideSPField('Allocation Type');
        SPUtility.HideSPField('Next Approver');

        SPUtility.HideSPField('Employee Performance');
        SPUtility.HideSPField('Company Violations');
        SPUtility.HideSPField('Amount');

        SPUtility.HideSPField('Reference Number');

        document.getElementById("Liquidation_x0020_Reference_x002_1f950e22-0516-4344-a608-cff4f1862ab9_$TextField")
            .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                Execute_Check_LiquidationReferenceID();
                // alert(document.getElementById("Liquidation_x0020_Reference_x002_1f950e22-0516-4344-a608-cff4f1862ab9_$TextField").value);
            }
        });        

            document.getElementById("ctl00_ctl43_g_506640a1_61e9_402e_91dc_b772c136ec3e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "none";     

            document.getElementById("Existing_x0020_Beneficiary_x0020_7df5643e-4a8d-43f3-9e5a-b65ba9f8b13c_$TextField").readOnly = true;       

    });
})(jQuery);
//------------------------------------

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

//----------------------------------------------------------------------------------------------------------------


 $(function() {
 
    $('select[id=Beneficiary_x0020_Type_1d599927-6abe-49d1-b593-01a80b01d44b_$DropDownChoice]').change( function() {
    var beneficiary_type = $('select[id=Beneficiary_x0020_Type_1d599927-6abe-49d1-b593-01a80b01d44b_$DropDownChoice]').val();
        if(beneficiary_type == "New"){
            Show_LiquidationReferenceID_IsCorrect();
            SPUtility.HideSPField('Liquidation Reference Number');
            SPUtility.HideSPField('Existing Beneficiary Requirement');
        }
        else if(beneficiary_type == "Existing"){
        	openDialog();
        	HideBefore_LiquidationReferenceID_IsCorrect();
        	SPUtility.ShowSPField('Liquidation Reference Number');

        }
    });


    $('select[id=Civil_x0020_Status_64dbd0ed-40c9-4e0a-8fe8-9c6a0daa4df6_$DropDownChoice]').change( function() {
    var CivilStatus = $('select[id=Civil_x0020_Status_64dbd0ed-40c9-4e0a-8fe8-9c6a0daa4df6_$DropDownChoice]').val();
        if(CivilStatus == "Married"){
            SPUtility.ShowSPField('Name of Spouse');
        }
        else{
            SPUtility.HideSPField('Name of Spouse');
        }
    });

    // $('select[id=Beneficiary_x0020_Type_1d599927-6abe-49d1-b593-01a80b01d44b_$DropDownChoice]').change( function() {
    // var Beneficiary = $('select[id=Beneficiary_x0020_Type_1d599927-6abe-49d1-b593-01a80b01d44b_$DropDownChoice]').val();
    //     if(Beneficiary == "Existing"){
    //         SPUtility.ShowSPField('Existing Beneficiary Requirement');
    //         document.getElementById("ctl00_ctl43_g_506640a1_61e9_402e_91dc_b772c136ec3e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "block";           
    //     }   
    //     else if (Beneficiary == "New"){
    //         SPUtility.HideSPField('Existing Beneficiary Requirement');
    //         document.getElementById("ctl00_ctl43_g_506640a1_61e9_402e_91dc_b772c136ec3e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "block";            
    //     }
    //     else if (Beneficiary == "Existing"){
    //         document.getElementById("ctl00_ctl43_g_506640a1_61e9_402e_91dc_b772c136ec3e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "none";    
    //     }
    // });

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
    // document.getElementById('Requestor_x0027_s_x0020_Name_830abf27-3b1b-40e4-b667-9c03c1e96781_$TextField').value = "Error: " + args.get_message();
    // document.getElementById('Department_8ce26bfb-1875-42a5-b44d-bacc6b77fd1b_$TextField').value = "Error: " + args.get_message();
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
var Requestor;
function onRequestSuccess() {
    var requestorName = userProfileProperties[0];
    var department =  userProfileProperties[1];
    var manager =  userProfileProperties[2];

    Requestor = userProfileProperties[0];
    //alert(manager);
    document.getElementById('Employee_x0020_Name_a8471726-833a-457e-818c-44dadcf1f810_$TextField').value = requestorName;
    document.getElementById('Department_33be01e2-a4c1-4def-ba26-a900dd2526cb_$TextField').value = department;

    SPUtility.GetSPField("Employee Name").MakeReadOnly();
    SPUtility.GetSPField('Department').MakeReadOnly();

   immediate_head_var = manager;

}

function openDialog() {

   var e = document.getElementById('d10');
   var options = {
    title: "Reminder",
    width: 625,
    height: 140,
    html: e.cloneNode(true)
   };
   SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
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

// else { return true ;}

    if(document.getElementById("Beneficiary_x0020_Type_1d599927-6abe-49d1-b593-01a80b01d44b_$DropDownChoice").value == "Existing"){
                // var elm = document.getElementById("idAttachmentsTable");
                // if (elm == null || elm.rows.length == 0)
                //     {
                //     document.getElementById("idAttachmentsRow").style.display='none';

                //     alert("Please attach Documents");
                //     return false ;
                //     }
                if (document.getElementById('idAttachmentsRow').style.display=='none' )
                  {
                     alert('Previous Grade Attachment is Required');
                     return false ;
                  }
                else {  
                   // document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value = "For Department Head Approval";
                    return true;    
                }
    }
    else{
       // document.getElementById("Status_12138a52-8949-4037-ac44-1964b7c03181_$TextField").value = "For Department Head Approval";
        return true;
    }

}


function OpenLiquidationForm(){
    window.open("https://intranet.houseofit.com.au/Lists/Liquidation%20Form%20V2/NewFormCopy.aspx?Source=https%3A%2F%2Fintranet%2Ehouseofit%2Ecom%2Eau%2FLists%2FLiquidation%2520Form%2520V2%2FMy%2520Liquidation%2520Forms%2Easpx&ContentTypeId=0x0100CE9B550708C7BD4BADEF13F0EE19389A&RootFolder=%2FLists%2FLiquidation%20Form%20V2","_self")
}
function CloseDialog(){
    SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.Cancel);
    SPUtility.ShowSPField('Liquidation Reference Number');
}

function Execute_Check_LiquidationReferenceID(){
    ExecuteOrDelayUntilScriptLoaded(Check_LiquidationReferenceID,'sp.js');
}

function Check_LiquidationReferenceID(){
    var Liquidation_RefID = document.getElementById("Liquidation_x0020_Reference_x002_1f950e22-0516-4344-a608-cff4f1862ab9_$TextField").value;

    // try{
    // var context = new SP.ClientContext();
    // var list = context.get_web().get_lists().getByTitle('Liquidation Form');
    // var caml = new SP.CamlQuery();
    // caml.set_viewXml("<Query><Where><Eq><FieldRef Name='Title' /><Value Type='Text'>"+Liquidation_RefID+"</Value></Eq></Where></Query>");
    // returnedItems = list.getItems(caml);
    // context.load(returnedItems);
    // context.executeQueryAsync(Check_LiquidationReferenceID_Succeeded, Check_LiquidationReferenceID_Failed);
    // }
    // catch(err){
    // alert("Liquidation Reference Number Does Not Exist")
    // HideBefore_LiquidationReferenceID_IsCorrect();
    // return false;
    // }
    var context = new SP.ClientContext();
    var list = context.get_web().get_lists().getByTitle('Liquidation Form');
    var caml = new SP.CamlQuery();
    caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='Title' /><Value Type='Text'>"+Liquidation_RefID+"</Value></Eq></Where></Query><RowLimit>1</RowLimit></View>");
    returnedItems = list.getItems(caml);
    context.load(returnedItems);
    context.executeQueryAsync(Check_LiquidationReferenceID_Succeeded, Check_LiquidationReferenceID_Failed);

}

function Check_LiquidationReferenceID_Succeeded(){
    var enumerator = returnedItems.getEnumerator();
    // var Ref_ID;
    var ItemID = -1;
    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();  
        // Ref_ID = listItem.get_item('Title'); 
        ItemID = listItem.get_item("ID");
    }
    if(ItemID == -1){
        alert("Liquidation Reference Number Does Not Exist");
        HideBefore_LiquidationReferenceID_IsCorrect();
    }   
    else{
        Show_LiquidationReferenceID_IsCorrect();
    }
    // if(Ref_ID == null){
    //     alert("Liquidation Reference Number Does Not Exist")
    //     HideBefore_LiquidationReferenceID_IsCorrect();
    // }
    // else{
    //     Show_LiquidationReferenceID_IsCorrect();
    // }

}
function Check_LiquidationReferenceID_Failed(){
    alert("query failed");
}

function HideBefore_LiquidationReferenceID_IsCorrect(){
    SPUtility.HideSPField('Residence/Complete Mailing Address');
    SPUtility.HideSPField('Date of Birth');
    SPUtility.HideSPField('Civil Status');
    SPUtility.HideSPField('Name of Spouse');
    // SPUtility.HideSPField('Beneficiary Type');
    // SPUtility.HideSPField('Liquidation Reference Number');
    SPUtility.HideSPField('Name of School');
    SPUtility.HideSPField('Degree');
    SPUtility.HideSPField('Course');
    SPUtility.HideSPField('School Year From');
    SPUtility.HideSPField('School Year To');
    SPUtility.HideSPField('Level');
    SPUtility.HideSPField('Academic Term');

    document.getElementById("Employee_x0020_Information_x0020_37081d9f-148b-4ef9-a5fb-8f92b995dd20_$TextField").style.display = "none";
    document.getElementById("Personal_x0020_Info_x0020_Separa_37085ef3-790a-4524-a9fd-5f5869f1ca61_$TextField").style.display = "none";
    document.getElementById("School_x0020_Information_x0020_S_2b43110d-c296-4907-bba8-120e22577a81_$TextField").style.display = "none";

    document.getElementById("Employee_x0020_Information_x0020").style.display = "none";
    document.getElementById("Personal_x0020_Info_x0020_Separa").style.display = "none";
    document.getElementById("School_x0020_Information_x0020_S").style.display = "none";

    document.getElementById("ctl00_ctl43_g_506640a1_61e9_402e_91dc_b772c136ec3e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "none";
}

function Show_LiquidationReferenceID_IsCorrect(){
    SPUtility.ShowSPField('Residence/Complete Mailing Address');
    SPUtility.ShowSPField('Date of Birth');
    SPUtility.ShowSPField('Civil Status');
    
    if(document.getElementById("Civil_x0020_Status_64dbd0ed-40c9-4e0a-8fe8-9c6a0daa4df6_$DropDownChoice").value == "Married"){
        SPUtility.ShowSPField('Name of Spouse');
    }

    SPUtility.ShowSPField('Beneficiary Type');
    SPUtility.ShowSPField('Name of School');
    SPUtility.ShowSPField('Degree');
    SPUtility.ShowSPField('Course');
    SPUtility.ShowSPField('School Year From');
    SPUtility.ShowSPField('School Year To');
    SPUtility.ShowSPField('Level');
    SPUtility.ShowSPField('Academic Term');
    SPUtility.ShowSPField('Existing Beneficiary Requirement');

    document.getElementById("Employee_x0020_Information_x0020_37081d9f-148b-4ef9-a5fb-8f92b995dd20_$TextField").style.display = "block";
    document.getElementById("Personal_x0020_Info_x0020_Separa_37085ef3-790a-4524-a9fd-5f5869f1ca61_$TextField").style.display = "block";
    document.getElementById("School_x0020_Information_x0020_S_2b43110d-c296-4907-bba8-120e22577a81_$TextField").style.display = "block";

    document.getElementById("Employee_x0020_Information_x0020").style.display = "block";
    document.getElementById("Personal_x0020_Info_x0020_Separa").style.display = "block";
    document.getElementById("School_x0020_Information_x0020_S").style.display = "block";   

    document.getElementById("ctl00_ctl43_g_506640a1_61e9_402e_91dc_b772c136ec3e_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "block"; 
}

</script><i><b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to 
      <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i><br><br>

      <div style="display:none">
   <div id="d10">
       <h3 class="ms-core-pageTitle"> Educational Plan Availment Form <img width="35px" align="center" src="https://intranet.houseofit.com.au/SiteAssets/info%20icon.png"/></h3> <br>
       <div class="ms-textLarge ms-rteForeColor-2"> A Liquidation is required in this form. Already submitted a liquidation form?</div><br>
       <div align="right">
    <input type="button" name="" value="Yes" onclick="CloseDialog()" id="" target="">
    <input type="button" name="" value="No" onclick="OpenLiquidationForm()" id="" style="" class="ms-ButtonHeightWidth" target="">
        </div>
   </div>
</div>