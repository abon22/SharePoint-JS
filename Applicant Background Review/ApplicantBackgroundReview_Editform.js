<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>



$(document).ready(function(){


	// document.getElementById("ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff171_ctl00_ctl00_TextField_inplacerte").style.width = "1100px";

 //      var div = document.getElementById('ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff171_ctl00_ctl00_TextField_inplacerte');
 //      		div.innerHTML = "<table cellspacing='0' width='100%' class='ms-rteTable-default'> <tbody> <tr> <td class='ms-rteTable-default' style='width: 50%; text-align: center;'>​<strong>QUESTIONS</strong><br/></td> <td class='ms-rteTable-default' style='width: 50%; text-align: center;'>​<strong>ANSWERS</strong><br/></td> </tr> <tr> <td class='ms-rteTable-default'>​<span style='font-family: &quot;segoe ui&quot;, segoe, tahoma, helvetica, arial, sans-serif;'>​A</span><span style='font-family: &quot;segoe ui&quot;, segoe, tahoma, helvetica, arial, sans-serif;'>ny record of violation against Company Policy/ Regulations? Please specify including sanction(s) served.</span><br/></td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​What do you consider as the employee&#39;s strengths?<br/></td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​​What do you consider as the employee&#39;s areas for improvement?<br/></td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​​What were the employee&#39;s significant contributions, if any, to the organization?<br/></td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​​How do you describe the employee&#39;s attitude towards fellow employee&#39;s Superior&#39;s? Peers?<br/></td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​Other recommendations/ suggestions/ comments that may be significant to&#160;his/ her application with us?<br/></td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​If your company allows re-hiring of previous employees, would you re-hire him/her. (YES/NO/MAybe)<br/></td> <td class='ms-rteTable-default'>​</td> </tr> </tbody></table>";



	var val=$("Select[Title='Reason/s for Separation']").val();
			
			if(val=="Other")
			{
				$('#applicantBackgroundReview #specifyReason').show();
			}
			else
				$('#applicantBackgroundReview #specifyReason').hide();

	var val=$("Select[Title='Mode of Checking']").val();
			
			if(val=="Other")
			{
				$('#applicantBackgroundReview #mocOther').show();
			}
			else
				$('#applicantBackgroundReview #mocOther').hide();		



//READ ONLY
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff21_ctl00_ctl00_TextField').prop('readonly', true);
	$("#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff31_ctl00_Lookup").prop("disabled", true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff41_ctl00_ctl00_DateTimeField_DateTimeFieldDate').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff41_ctl00_ctl00_DateTimeField_DateTimeFieldDateHours').prop('disabled', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff41_ctl00_ctl00_DateTimeField_DateTimeFieldDateMinutes').prop('disabled', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff41_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage').remove();
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff61_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff71_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff91_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff101_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff111_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff121_ctl00_ctl00_DateTimeField_DateTimeFieldDate').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff121_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage').remove();
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff131_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff141_ctl00_ctl00_DateTimeField_DateTimeFieldDate').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff141_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage').remove();
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff151_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff171_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff181_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff191_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff201_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff211_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff221_ctl00_ctl00_TextField').prop('readonly', true);
	$("input[type=radio]").attr('disabled', true);
	$("#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff161_ctl00_DropDownChoice").prop("disabled", true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff241_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff251_ctl00_ctl00_TextField').prop('readonly', true);
	$("#ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff51_ctl00_DropDownChoice").prop("disabled", true);
	$("div[id='ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_ff171_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');


	//	//------change Save to Submit---------
	var inputcontrols = document.getElementsByTagName("input");
	for(i = 0; i<inputcontrols.length; i++){
	    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Cancel")
	        inputcontrols[i].value = "Back";
	}

	//hide save ribbon button
  $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

  document.getElementById("ctl00_ctl42_g_95323dde_dca7_4173_9961_8c546c1da790_savebutton2_ctl00_diidIOSaveItem").style.display = "none";	


});


</script>