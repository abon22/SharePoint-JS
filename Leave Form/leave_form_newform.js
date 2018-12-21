
​​​​​​​​​​​<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script>
 $(document).ready(function()
{


$(".ms-formlabel").css("text-align", "right");

oneSecondFunction();


//------change Save to Submit---------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");

/*$('.ms-formtable').closest('table').append("<tr id='attachment_id' style='display:none'><td>Add Attachment</td><td><input type='button' onclick=' javascript:UploadAttachment()' value='Add File'/></td></tr>");
*/

/*var select = document.getElementById("Leave_x0020_Request_cc531537-e985-49ab-ad2a-60cda95ec2e6_$DropDownChoice");
select.onchange = function(){
    var selectedString = select.options[select.selectedIndex].value;
    console.log(selectedString);


    if(selectedString=="Sick Leave"){
    	console.log("a");
    	$("#attachment_id").css("display","");

    }else{
    	console.log("b");
    	$("#attachment_id").css("display","none");

    }
}*/
//setInterval(oneSecondFunction, 500);


$("input[id='Start_x0020_of_x0020_leave_x0020_88cdefae-9db0-4aea-97a0-6a17995a0029_$DateTimeFieldDate']").focus(function() {
	//console.log("a");
	oneSecondFunction(1);
})

$("input[id='Start_x0020_of_x0020_leave_x0020_88cdefae-9db0-4aea-97a0-6a17995a0029_$DateTimeFieldDate']").focusout(function() {
	//console.log("a");
	oneSecondFunction(1);
})

//====================================================================================================

$("input[id='End_x0020_of_x0020_leave_x0020_p_2c8769db-32c8-424a-a306-f48833c9f8bf_$DateTimeFieldDate']").focus(function() {
	//console.log("b");
	oneSecondFunction(2);
})

$("input[id='End_x0020_of_x0020_leave_x0020_p_2c8769db-32c8-424a-a306-f48833c9f8bf_$DateTimeFieldDate']").focusout(function() {
	//console.log("b");
	oneSecondFunction(2);
})




$("input[id='Duration_baf510cc-11e3-40e2-b1a9-0727b7e8e2e7_$RadioButtonChoiceField0']").change(function() {
document.getElementById('Total_x0020_leave_x0020_days_c01cab09-e33b-43a5-8a86-9768db25c16a_$NumberField').value = "1";
SPUtility.GetSPField('Total leave days').MakeEditable();
		SPUtility.GetSPField('Total leave days').MakeReadOnly();

})

$("input[id='Duration_baf510cc-11e3-40e2-b1a9-0727b7e8e2e7_$RadioButtonChoiceField1']").change(function() {
document.getElementById('Total_x0020_leave_x0020_days_c01cab09-e33b-43a5-8a86-9768db25c16a_$NumberField').value = "0.5";
SPUtility.GetSPField('Total leave days').MakeEditable();
		SPUtility.GetSPField('Total leave days').MakeReadOnly();
})

$("input[id='Duration_baf510cc-11e3-40e2-b1a9-0727b7e8e2e7_$RadioButtonChoiceField2']").change(function() {
document.getElementById('Total_x0020_leave_x0020_days_c01cab09-e33b-43a5-8a86-9768db25c16a_$NumberField').value = "0.5";
SPUtility.GetSPField('Total leave days').MakeEditable();
		SPUtility.GetSPField('Total leave days').MakeReadOnly();
})



});



function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}


function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}
var valid;

 function oneSecondFunction(choice) {

var startPeriod = document.getElementById('Start_x0020_of_x0020_leave_x0020_88cdefae-9db0-4aea-97a0-6a17995a0029_$DateTimeFieldDate').value;
var endPeriod = document.getElementById('End_x0020_of_x0020_leave_x0020_p_2c8769db-32c8-424a-a306-f48833c9f8bf_$DateTimeFieldDate').value;
var days = daydiff(parseDate(startPeriod), parseDate(endPeriod))+1;

	if(days>0.5){
		//console.log(days)
		document.getElementById('Total_x0020_leave_x0020_days_c01cab09-e33b-43a5-8a86-9768db25c16a_$NumberField').value = days;
		SPUtility.GetSPField('Total leave days').MakeEditable();
		SPUtility.GetSPField('Total leave days').MakeReadOnly();
		valid=1;
	}else if(days<=0){
		//alert("Please enter a valid leave period.")
		

		if(choice==1){
		//document.getElementById('Start_x0020_of_x0020_leave_x0020_88cdefae-9db0-4aea-97a0-6a17995a0029_$DateTimeFieldDate').value = "";
		document.getElementById('End_x0020_of_x0020_leave_x0020_p_2c8769db-32c8-424a-a306-f48833c9f8bf_$DateTimeFieldDate').value = startPeriod;
		//document.getElementById("Reason_a9254264-2c10-4e1d-9ace-9587edb11e16_$TextField").focus();
		}else if (choice==2){
		document.getElementById('End_x0020_of_x0020_leave_x0020_p_2c8769db-32c8-424a-a306-f48833c9f8bf_$DateTimeFieldDate').value = "";
		//document.getElementById("Reason_a9254264-2c10-4e1d-9ace-9587edb11e16_$TextField").focus();
		}

		valid=0;

	}

	if(days>1){
		SPUtility.HideSPField('Duration');
		document.getElementById("Duration_baf510cc-11e3-40e2-b1a9-0727b7e8e2e7_$RadioButtonChoiceField0").checked = true;

	}else if(days==1){
		SPUtility.ShowSPField('Duration');
		document.getElementById("Duration_baf510cc-11e3-40e2-b1a9-0727b7e8e2e7_$RadioButtonChoiceField0").checked = true;

	}


}

/*

		<p>1. Plese submit you leave request by completing the form below and attaching any relevant documents.</p>
		<p>2. Once submitted, your request will be forwarded to accounts department.</p>

*/


</script>



<script language="javascript" type="text/javascript">
function PreSaveAction() {

    if(valid==0)
    {
        alert("Please enter a valid leave period.");
        return false; 
    }else if(valid==1){
    	return true; //true
    }

    
} 

 

</script>