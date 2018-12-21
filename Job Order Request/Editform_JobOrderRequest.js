
​​​​​​​​​<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script> ​​​<script src="/SiteAssets/Scripts/jquery.timeago.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script type="text/javascript"> 


checkbox1 = 0;

//--------------------------------------------------------------------------------------

  function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl43_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
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

            document.getElementById("Purchase_x0020_Order_x0020_Refer_8fc8374a-a312-43c0-abfb-8b9b5774edea_$TextField")
            .addEventListener("keyup", function(event) {
            event.preventDefault();
                if (event.keyCode === 13) {
                    Execute_Check_LiquidationReferenceID();
                    // alert(document.getElementById("Liquidation_x0020_Reference_x002_1f950e22-0516-4344-a608-cff4f1862ab9_$TextField").value);
                }
            }); 

//Status
            var Status = document.getElementById("Status_44d121a4-c31d-4862-bd64-76851f376239_$DropDownChoice").value;

            if(Status == "In Progress")
            {
                $("input[id='Estimated_x0020_Completion_x0020_da10b0af-d5f6-47d5-9760-dfbf6519e02d_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                var req_cal = document.getElementById("Estimated_x0020_Completion_x0020_da10b0af-d5f6-47d5-9760-dfbf6519e02d_$DateTimeFieldDateDatePickerImage");
                req_cal.src = "";
                req_cal.alt = "";

                $("select[id='Purchase_x0020_Order_x0020_Reque_2fa9c22f-e820-4698-b79b-913243b96dfd_$DropDownChoice']").attr('disabled', 'disabled');
                $("input[id='Purchase_x0020_Order_x0020_Refer_8fc8374a-a312-43c0-abfb-8b9b5774edea_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

            }
            else if(Status == "On Hold")
            {
                $("input[id='Estimated_x0020_Completion_x0020_da10b0af-d5f6-47d5-9760-dfbf6519e02d_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                var req_cal = document.getElementById("Estimated_x0020_Completion_x0020_da10b0af-d5f6-47d5-9760-dfbf6519e02d_$DateTimeFieldDateDatePickerImage");
                req_cal.src = "";
                req_cal.alt = "";

                $("select[id='Purchase_x0020_Order_x0020_Reque_2fa9c22f-e820-4698-b79b-913243b96dfd_$DropDownChoice']").attr('disabled', 'disabled');
                $("input[id='Purchase_x0020_Order_x0020_Refer_8fc8374a-a312-43c0-abfb-8b9b5774edea_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

            }
            else if(Status == "Cancelled")
            {
                $("input[id='Estimated_x0020_Completion_x0020_da10b0af-d5f6-47d5-9760-dfbf6519e02d_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
                var req_cal = document.getElementById("Estimated_x0020_Completion_x0020_da10b0af-d5f6-47d5-9760-dfbf6519e02d_$DateTimeFieldDateDatePickerImage");
                req_cal.src = "";
                req_cal.alt = "";

                $("select[id='Purchase_x0020_Order_x0020_Reque_2fa9c22f-e820-4698-b79b-913243b96dfd_$DropDownChoice']").attr('disabled', 'disabled');
                $("input[id='Purchase_x0020_Order_x0020_Refer_8fc8374a-a312-43c0-abfb-8b9b5774edea_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

            }


//JobOrderType






        });
    })(jQuery);

//get the name of the current user
    var context = null;
    var web = null;
    var currentUser = null;

    ExecuteOrDelayUntilScriptLoaded(GetUserLoginName, "sp.js");

        function GetUserLoginName() 
        {
          context = new SP.ClientContext.get_current();
          web = context.get_web();
          this._currentUser = web.get_currentUser();
          context.load(this._currentUser);
          context.executeQueryAsync(Function.createDelegate(this, this.onSuccessMethod),
          Function.createDelegate(this, this.onFailureMethod));
        }

//onSuccessMethod
    function onSuccessMethod(sender, args) 
    {

        var requestorName = document.getElementById("Requestor_x0027_s_x0020_Name_dbcc8fc6-03e9-4409-93b8-e3fdab16e1d8_$TextField").value;

        //var trimmedrequestorName = requestorName.replace(/[|&;$%@"<>()+,]/g, "");

        var approvalStatus = $("Select[Title='Approval Status']").val();
        
        var currentName = this._currentUser.get_title();

        console.log("currentName: "+currentName);
        console.log(requestorName);

            if (currentName == requestorName)
            {
                if(checkbox1 == 0)
                {
                    document.getElementById('Acknowledge_x0020_by_79493382-8946-4bf4-b428-1f8ddbab31f0_$TextField').value =this._currentUser.get_title();
                    SPUtility.HideSPField('Acknowledge by');
                }

            }
            else if (currentName == "Perpie Baldomar" || currentName == "Nowmar Calidro")
            {
               if(checkbox1 == 0){
                //alert("This is me!");
                SPUtility.HideSPField('Acknowledgement');
                SPUtility.HideSPField('Acknowledge by');

                if(requestorName == "Perpie Baldomar" || requestorName == "Nowmar Calidro")
                {
                	SPUtility.ShowSPField('Acknowledgement');
                    SPUtility.ShowSPField('Acknowledge by');
                }
                }
                else
                {
                    SPUtility.ShowSPField('Acknowledgement');
                    SPUtility.ShowSPField('Acknowledge by');
                }
            }
            
    }

    function onFaiureMethod(sender, args)
    {
        alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());
    }


//------------------------------------

$(document).ready(function()
{

    var ckbox = $('#Acknowledgement_5721fb5e-3af2-4463-8f0e-765f4ab226a6_MultiChoiceOption_0');

    if (ckbox.is(':checked')){
    //alert("Checkbox is checked.");
    $("select[id='Status_44d121a4-c31d-4862-bd64-76851f376239_$DropDownChoice']").attr('disabled', 'disabled');
    $("input[id='Acknowledgement_5721fb5e-3af2-4463-8f0e-765f4ab226a6_MultiChoiceOption_0']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
    $("textarea[id='Notes_x002f_Comments_6c78ce56-784f-4acc-a355-0722b3612cc5_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_7b9f7710_8616_49e9_96ae_36895f476784_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
}

    //.change function checkboxes
    $("input[type='checkbox'][id='Acknowledgement_5721fb5e-3af2-4463-8f0e-765f4ab226a6_MultiChoiceOption_0']").change(function(){
          //alert(chk1);
        if(document.getElementById('Acknowledgement_5721fb5e-3af2-4463-8f0e-765f4ab226a6_MultiChoiceOption_0').checked){
            checkbox1=1;
            //alert(chk1);
        }

    });

    if(document.getElementById('Acknowledgement_5721fb5e-3af2-4463-8f0e-765f4ab226a6_MultiChoiceOption_0').checked){
      checkbox1=1;
      //alert(chk1);
    }

    SPUtility.HideSPField('Acknowledgement');
    SPUtility.HideSPField('Acknowledge by');
    SPUtility.HideSPField('Purchase Order Reference Number');

    var val=$("Select[Title='Purchase Order Request']").val();
            
        if(val == "YES"){
            SPUtility.ShowSPField('Purchase Order Reference Number');
        }
        else if(val == "No"){
            SPUtility.HideSPField('Purchase Order Reference Number');
        }

        //var Status = document.getElementById("Status_44d121a4-c31d-4862-bd64-76851f376239_$DropDownChoice").value;
        var Status=$("Select[Title='Status']").val();
        if(Status == "Complete"){
            $("input[id='Estimated_x0020_Completion_x0020_da10b0af-d5f6-47d5-9760-dfbf6519e02d_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            var req_cal = document.getElementById("Estimated_x0020_Completion_x0020_da10b0af-d5f6-47d5-9760-dfbf6519e02d_$DateTimeFieldDateDatePickerImage");
            req_cal.src = "";
            req_cal.alt = "";

            $("select[id='Purchase_x0020_Order_x0020_Reque_2fa9c22f-e820-4698-b79b-913243b96dfd_$DropDownChoice']").attr('disabled', 'disabled');
            $("input[id='Purchase_x0020_Order_x0020_Refer_8fc8374a-a312-43c0-abfb-8b9b5774edea_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

            SPUtility.ShowSPField('Acknowledgement');
            SPUtility.ShowSPField('Acknowledge by');

        }    

        var status=$("Select[Title='Status']").val();

            if (status == "Complete") { //ckbox.is(':checked') || 
                $("select[id='Status_44d121a4-c31d-4862-bd64-76851f376239_$DropDownChoice']").attr('disabled', 'disabled');
            }

     $("input[id='Reference_x0020_Number_a85e6fc3-1c6f-4940-a953-1a92c7317bc2_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='Requestor_x0027_s_x0020_Name_dbcc8fc6-03e9-4409-93b8-e3fdab16e1d8_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("select[id='Department_f82c3bc0-eedf-404c-95a8-389558716a5a_$LookupField']").attr('disabled', 'disabled');
    $("select[id='Job_x0020_Order_x0020_Type_ba658223-b712-4719-9abc-be9ea0e1ac09_$DropDownChoice']").attr('disabled', 'disabled');
    $("input[id='Project_x0020_Title_bafebb94-59a0-4599-8c42-6df705867706_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='Project_x0020_Description_d0514c4e-4700-47a2-8fa0-2c9889980657_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='Acknowledge_x0020_by_79493382-8946-4bf4-b428-1f8ddbab31f0_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

    $("input[id='Requested_x0020_Completion_x0020_897d70ec-3167-4ad5-afd6-86555de1f399_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        var req_cal = document.getElementById("Requested_x0020_Completion_x0020_897d70ec-3167-4ad5-afd6-86555de1f399_$DateTimeFieldDateDatePickerImage");
        req_cal.src = "";
        req_cal.alt = ""; 

    jobOrderType= $('select[id=Job_x0020_Order_x0020_Type_ba658223-b712-4719-9abc-be9ea0e1ac09_$DropDownChoice]').val();

        if(jobOrderType=="Repair"){
            SPUtility.ShowSPField('Issue/Concern Summary');
            
            SPUtility.HideSPField('Project Title');
            SPUtility.HideSPField('Project Description');
            SPUtility.HideSPField('Estimated Completion Date');
            SPUtility.HideSPField('Requested Completion Date');
            $("textarea[id='Issue_x002f_Concern_x0020_Summar_3094b8f2-2ff4-4132-afb8-cf6a665436e1_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

        }        
        else if(jobOrderType=="Project"){
            SPUtility.ShowSPField('Project Title');
            SPUtility.ShowSPField('Project Description');
            SPUtility.ShowSPField('Estimated Completion Date');

            SPUtility.HideSPField('Issue/Concern Summary');
        }


   
});

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

function OpenLiquidationForm(){
    window.open("https://intranet.houseofit.com.au/Lists/Purchase%20Order%20Request/NewForm.aspx?Source=https%3A%2F%2Fintranet%2Ehouseofit%2Ecom%2Eau%2FLists%2FPurchase%2520Order%2520Request%2FAll%2520Closed%2520Request%2Easpx&ContentTypeId=0x010300B6A141FC02D0ED458CD4211A1BF2C4ED&RootFolder=%2FLists%2FPurchase%20Order%20Request","_self")
}
function CloseDialog(){
    SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.Cancel);
    SPUtility.ShowSPField('Purchase Order Reference Number');
}

$(function() {
 
    $('select[id=Purchase_x0020_Order_x0020_Reque_2fa9c22f-e820-4698-b79b-913243b96dfd_$DropDownChoice]').change( function() {
    var beneficiary_type = $('select[id=Purchase_x0020_Order_x0020_Reque_2fa9c22f-e820-4698-b79b-913243b96dfd_$DropDownChoice]').val();
        if(beneficiary_type == "NO"){
            // Show_LiquidationReferenceID_IsCorrect();
            // SPUtility.HideSPField('Liquidation Reference Number');
            SPUtility.HideSPField('Purchase Order Reference Number');
            //alert("NO");


        }
        else if(beneficiary_type == "YES"){
            openDialog();
            // HideBefore_LiquidationReferenceID_IsCorrect();
            SPUtility.ShowSPField('Purchase Order Reference Number');

        }
    });

})

function Execute_Check_LiquidationReferenceID(){
    ExecuteOrDelayUntilScriptLoaded(Check_LiquidationReferenceID,'sp.js');
}

function Check_LiquidationReferenceID(){
    var Liquidation_RefID = document.getElementById("Purchase_x0020_Order_x0020_Refer_8fc8374a-a312-43c0-abfb-8b9b5774edea_$TextField").value;

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
    var list = context.get_web().get_lists().getByTitle('Purchase Order Request');
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
        alert("Purchase Order Reference Number Does Not Exist");
        //HideBefore_LiquidationReferenceID_IsCorrect();
    }   
    else{
        //Show_LiquidationReferenceID_IsCorrect();
        alert("Purchase Order Reference Number Is Valid");
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

// function HideBefore_LiquidationReferenceID_IsCorrect(){
    
// }

// function Show_LiquidationReferenceID_IsCorrect(){
 
// }


//function PreSaveAction()
function PreSaveAction()
    {

    //check the checkBoxes
        if(document.getElementById('Acknowledgement_5721fb5e-3af2-4463-8f0e-765f4ab226a6_MultiChoiceOption_0').checked){
          checkbox1=1;
          //alert(checkbox1);
        }

        var requestorName = document.getElementById("Requestor_x0027_s_x0020_Name_dbcc8fc6-03e9-4409-93b8-e3fdab16e1d8_$TextField").value;       
        var currentName = this._currentUser.get_title();
        var status=$("Select[Title='Status']").val();

            if (status == "Complete") { //ckbox.is(':checked') || 
                //$("select[id='Status_44d121a4-c31d-4862-bd64-76851f376239_$DropDownChoice']").attr('disabled', 'disabled');
            if(currentName == requestorName)
            {
                if(checkbox1==0)
                {
                  alert("Please check the acknowledgement to submit");
                  return false;      
                }
                else if (checkbox1==1)
                {
                  return true;//true
                }
            }   
            }

            

        return true;//true
    }








</script> 

<div style="display:none">
   <div id="d10">
       <h3 class="ms-core-pageTitle"> Purchase Order Form <img width="35px" align="center" src="https://intranet.houseofit.com.au/SiteAssets/info%20icon.png"/></h3> <br>
       <div class="ms-textLarge ms-rteForeColor-2"> A Purchase Order Form is required. Already submitted a Purchase Order Form?</div><br>
       <div align="right">
    <input type="button" name="" value="No" onclick="OpenLiquidationForm()" id="" target="">
    <input type="button" name="" value="Yes" onclick="CloseDialog()" id="" style="" class="ms-ButtonHeightWidth" target="">
        </div>
   </div>
</div> ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​