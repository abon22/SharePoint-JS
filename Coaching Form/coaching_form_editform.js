​​​​​​​​​​​<script  type="text/javascript" src="https://intranet.houseofit.com.au/SiteAssets/Scripts/jquery.min.js" ></script><script type="text/javascript" src="https://intranet.houseofit.com.au/SiteAssets/Scripts/jquery.timeago.js"></script><script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/2014.02/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">

var check_0; 
$( document ).ready(function() {

 $("#Issue_x0020_of_x0020_Concern_1eadcb64-59fe-4cb7-8373-1e97e89f5d1f_MultiChoiceTable tr").css({"display": "inline"});
 $("#When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_ChoiceRadioTable tr").css({"display": "inline"});
 $("#Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_ChoiceRadioTable tr").css({"display": "inline"});

 document.getElementById("Behaviour_x002f_Performance_x002_ed0f4d88-bd25-4575-a934-4190983b9408_$TextField").style.height = "144px";
 document.getElementById("Behaviour_x002f_Performance_x002_ed0f4d88-bd25-4575-a934-4190983b9408_$TextField").style.width = "862px";
    
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

//SPUtility.HideSPField('Immediate Head');
$('#Immediate_x0020_Head').hide();
$("[title='Immediate Head Required Field']").hide();


//SPUtility.HideSPField('Staff Name');
$('#Staff_x0020_Name').hide();
$("[title='Staff Name Required Field']").hide();
//SPUtility.HideSPField('Remarks');
$('#Remarks_10c5d0a3-9ab0-4ddf-b4d3-243b370993f2_$TextField').hide();



$("input[id='Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
 
$("select[id='Section_x002f_Department_e89c5c3d-ef66-4cfd-8ac8-4c011b81db22_$LookupField']").attr('disabled', 'disabled');
$("select[id='Job_x0020_Title_fe72ad60-5aed-4a14-af97-7ca39d68c925_$LookupField']").attr('disabled', 'disabled');

$("input[id='Covered_x0020_Period_x0020_From_1f0bdc0f-d245-413a-809c-e879b778f288_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("select[id='Covered_x0020_Period_x0020_From_1f0bdc0f-d245-413a-809c-e879b778f288_$DateTimeFieldDateHours']").attr('disabled', 'disabled');
$("select[id='Covered_x0020_Period_x0020_From_1f0bdc0f-d245-413a-809c-e879b778f288_$DateTimeFieldDateMinutes']").attr('disabled', 'disabled');


$("input[id='To_7c27da90-e690-4fcc-a4fc-a856ff6d90b0_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("select[id='To_7c27da90-e690-4fcc-a4fc-a856ff6d90b0_$DateTimeFieldDateHours']").attr('disabled', 'disabled');
$("select[id='To_7c27da90-e690-4fcc-a4fc-a856ff6d90b0_$DateTimeFieldDateMinutes']").attr('disabled', 'disabled');


$("input[id='Next_x0020_Coaching_x0020_Schedu_cdec10f6-5311-49ee-8361-7332ab6408e5_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');



var from_cal = document.getElementById("Covered_x0020_Period_x0020_From_1f0bdc0f-d245-413a-809c-e879b778f288_$DateTimeFieldDateDatePickerImage");
from_cal.src = "";
from_cal.alt = "";

var to_cal = document.getElementById("To_7c27da90-e690-4fcc-a4fc-a856ff6d90b0_$DateTimeFieldDateDatePickerImage");
to_cal.src = "";
to_cal.alt = "";


var plan_cal = document.getElementById("Action_x0020_Plan_x002f_s_x0020__4ecf1d2a-565d-4e86-a33a-28fb0d7d60be_$DateTimeFieldDateDatePickerImage");
plan_cal.src = "";
plan_cal.alt = "";

//======================================================================
 
$("input[id='Issue_x0020_of_x0020_Concern_1eadcb64-59fe-4cb7-8373-1e97e89f5d1f_MultiChoiceOption_1']").attr('disabled', 'disabled');
$("input[id='Issue_x0020_of_x0020_Concern_1eadcb64-59fe-4cb7-8373-1e97e89f5d1f_MultiChoiceOption_0']").attr('disabled', 'disabled');


//======================================================================
if(document.getElementById('When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField0').checked) {
 
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField1']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField2']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField3']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceFieldFillInRadio']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceFieldFillInText']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

}
if(document.getElementById('When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField1').checked) {
 
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField0']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField2']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField3']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceFieldFillInRadio']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceFieldFillInText']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

}
if(document.getElementById('When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField2').checked) {
 
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField1']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField0']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField3']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceFieldFillInRadio']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceFieldFillInText']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

}
if(document.getElementById('When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField3').checked) {
 
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField1']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField2']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField0']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceFieldFillInRadio']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceFieldFillInText']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

}
 if(document.getElementById('When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceFieldFillInRadio').checked) {

 $("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField0']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField1']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField2']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceField3']").attr('disabled', 'disabled');
$("input[id='When_x0020_can_x0020_you_x0020_d_11db8163-2951-4f37-bb83-19263dd5e2e0_$RadioButtonChoiceFieldFillInText']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

}

//======================================================================

// if(document.getElementById('Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField0').checked) {
 
// $("input[id='Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField1']").attr('disabled', 'disabled');
// $("input[id='Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField2']").attr('disabled', 'disabled');

// }
// if(document.getElementById('Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField1').checked) {
 
// $("input[id='Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField0']").attr('disabled', 'disabled');
// $("input[id='Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField2']").attr('disabled', 'disabled');

// }
// if(document.getElementById('Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField2').checked) {
 
// $("input[id='Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField1']").attr('disabled', 'disabled');
// $("input[id='Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField0']").attr('disabled', 'disabled');

// }
if(document.getElementById('Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField0').checked && document.getElementById('Agreement_0a0c4785-0f28-47f6-8299-2df09bd532d1_$RadioButtonChoiceField0').checked) {


}
if(document.getElementById('Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField1').checked && document.getElementById('Agreement_0a0c4785-0f28-47f6-8299-2df09bd532d1_$RadioButtonChoiceField0').checked) {

$("input[id='Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField0']").attr('disabled', 'disabled');


}
if(document.getElementById('Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField2').checked && document.getElementById('Agreement_0a0c4785-0f28-47f6-8299-2df09bd532d1_$RadioButtonChoiceField0').checked) {

$("input[id='Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField0']").attr('disabled', 'disabled');
$("input[id='Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField1']").attr('disabled', 'disabled');
$("input[id='ctl00_ctl40_g_163a3b3e_9362_462f_9088_bcc59f3ed0b2_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


//SPUtility.ShowSPField('Remarks');
document.getElementById("Remarks_10c5d0a3-9ab0-4ddf-b4d3-243b370993f2_$TextField").style.width = "862px";
$("textarea[id='Remarks_10c5d0a3-9ab0-4ddf-b4d3-243b370993f2_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


}
 

  $('input[type=radio][name=Status_x0020_of_x0020_the_x0020__77c5f4a4-9ef0-4bb7-a582-15d11b4841b0_$RadioButtonChoiceField]').change(function() {
        if (this.value == 'Pending') {
            //SPUtility.HideSPField('Remarks');
            $('#Remarks_10c5d0a3-9ab0-4ddf-b4d3-243b370993f2_$TextField').hide();
        }
        else if (this.value == 'In Progress') {
            //SPUtility.HideSPField('Remarks');
            $('#Remarks_10c5d0a3-9ab0-4ddf-b4d3-243b370993f2_$TextField').hide();
        }
        else if (this.value == 'Completed') {
           //SPUtility.ShowSPField('Remarks');
           document.getElementById("Remarks_10c5d0a3-9ab0-4ddf-b4d3-243b370993f2_$TextField").style.width = "862px";
        }
    });



$("input[id='Action_x0020_Plan_x002f_s_x0020__4ecf1d2a-565d-4e86-a33a-28fb0d7d60be_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

//======================================================================


if(document.getElementById('Agreement_0a0c4785-0f28-47f6-8299-2df09bd532d1_$RadioButtonChoiceField0').checked) {

	



	$("input[id='Agreement_0a0c4785-0f28-47f6-8299-2df09bd532d1_$RadioButtonChoiceField1']").attr('disabled', 'disabled');

$("textarea[id='Behaviour_x002f_Performance_x002_ed0f4d88-bd25-4575-a934-4190983b9408_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

document.getElementById("Areas_x0020_of_x0020_Opportunity_61c2170a-b732-4bca-8a33-ec02f1388263_$TextField_inplacerte").contentEditable = false;
$("div[id='Areas_x0020_of_x0020_Opportunity_61c2170a-b732-4bca-8a33-ec02f1388263_$TextField_inplacerte']").css('background-color','#F6F6F6');
$("div[id='Areas_x0020_of_x0020_Opportunity_61c2170a-b732-4bca-8a33-ec02f1388263_$TextField_topDiv']").css('background-color','#F6F6F6');

document.getElementById("Areas_x0020_of_x0020_Opportunity0_4293c5cd-56e0-450d-946b-03aaff630100_$TextField_inplacerte").contentEditable = false;
$("div[id='Areas_x0020_of_x0020_Opportunity0_4293c5cd-56e0-450d-946b-03aaff630100_$TextField_inplacerte']").css('background-color','#F6F6F6');
$("div[id='Areas_x0020_of_x0020_Opportunity0_4293c5cd-56e0-450d-946b-03aaff630100_$TextField_topDiv']").css('background-color','#F6F6F6');

document.getElementById("Action_x0020_Plan_x0020_and_x002_8e168611-005e-4774-861b-a166b9e31ac0_$TextField_inplacerte").contentEditable = false;
$("div[id='Action_x0020_Plan_x0020_and_x002_8e168611-005e-4774-861b-a166b9e31ac0_$TextField_inplacerte']").css('background-color','#F6F6F6');
$("div[id='Action_x0020_Plan_x0020_and_x002_8e168611-005e-4774-861b-a166b9e31ac0_$TextField_topDiv']").css('background-color','#F6F6F6');

 
}else if(document.getElementById('Agreement_0a0c4785-0f28-47f6-8299-2df09bd532d1_$RadioButtonChoiceField1').checked){



}else{


$("textarea[id='Behaviour_x002f_Performance_x002_ed0f4d88-bd25-4575-a934-4190983b9408_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

document.getElementById("Areas_x0020_of_x0020_Opportunity_61c2170a-b732-4bca-8a33-ec02f1388263_$TextField_inplacerte").contentEditable = false;
$("div[id='Areas_x0020_of_x0020_Opportunity_61c2170a-b732-4bca-8a33-ec02f1388263_$TextField_inplacerte']").css('background-color','#F6F6F6');
$("div[id='Areas_x0020_of_x0020_Opportunity_61c2170a-b732-4bca-8a33-ec02f1388263_$TextField_topDiv']").css('background-color','#F6F6F6');

document.getElementById("Areas_x0020_of_x0020_Opportunity0_4293c5cd-56e0-450d-946b-03aaff630100_$TextField_inplacerte").contentEditable = false;
$("div[id='Areas_x0020_of_x0020_Opportunity0_4293c5cd-56e0-450d-946b-03aaff630100_$TextField_inplacerte']").css('background-color','#F6F6F6');
$("div[id='Areas_x0020_of_x0020_Opportunity0_4293c5cd-56e0-450d-946b-03aaff630100_$TextField_topDiv']").css('background-color','#F6F6F6');

document.getElementById("Action_x0020_Plan_x0020_and_x002_8e168611-005e-4774-861b-a166b9e31ac0_$TextField_inplacerte").contentEditable = false;
$("div[id='Action_x0020_Plan_x0020_and_x002_8e168611-005e-4774-861b-a166b9e31ac0_$TextField_inplacerte']").css('background-color','#F6F6F6');
$("div[id='Action_x0020_Plan_x0020_and_x002_8e168611-005e-4774-861b-a166b9e31ac0_$TextField_topDiv']").css('background-color','#F6F6F6');

 

}


});


function PreSaveAction()
{


if(document.getElementById('Agreement_0a0c4785-0f28-47f6-8299-2df09bd532d1_$RadioButtonChoiceField0').checked) {
 	return true;
}else if (document.getElementById('Agreement_0a0c4785-0f28-47f6-8299-2df09bd532d1_$RadioButtonChoiceField1').checked) {
 	return true;
}else{
	alert("Please select if you want to acknowledge or not.");
	return false;

}

}


</script>