<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

//variables declared
var checked_acknowledge=0; 


$(document).ready(function()
{ 
//start of document.ready function

	//finalRemarks = $("select[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff201_ctl00_DropDownChoice']").val();
		//show AuditorsComment & RemarksStatus
	 		$('#table_nccar #auditorsComment_label').show();

	get_user();

	//hfgsjdgsjdgsjdgkjsgkdjgskdjg

	//default settings
	$('#table_nccar #acknowledged_by').hide(); 
 	$('#table_nccar #root_causeLabel').hide();
 	$('#table_nccar #root_causeField').hide();
 	$('#table_nccar #correctiveAction_label').hide();
 	$('#table_nccar #correctiveAction_field').hide();
 	$('#table_nccar #implementation_date').hide();
  	$('#table_nccar #caRemarks_followUpDate').hide();
 	$('#table_nccar #caNotes_label').hide();
 	$('#table_nccar #canotes_field').hide();
 	$('#table_nccar #auditorsComment_label').hide();
 	$('#table_nccar #auditorsComment_field').hide();
 	$('#table_nccar #remarksStatus').hide();
 	$('#table_nccar #closedByDate').hide();
	$('#table_nccar #CA_remarksVariable').hide();
	//$('#table_nccar #auditorsComment_label').hide();
 	
 	//$('#table_nccar #ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff191_ctl00_ctl00_TextField').hide();

 	//duplicateFields
 	//$('#table_nccar #acknowledged_by').hide();
 	//$('#table_nccar #classificationField2').hide();
 	$('#table_nccar #department_field2').hide();
 	$('#table_nccar #CA_field2').hide();
 	$('#table_nccar #fRemarks2').hide();
 	$('#table_nccar #acknowledged_by2').hide();
 	
		//$("#ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_ff291_ctl00_DropDownChoice").val("None").attr('selected','selected'); dropdownReset


 	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff241_ctl00_ctl00_TextField").value = "false";
	//----------------Chage Save to Submit-------------
	var inputcontrols = document.getElementsByTagName("input");
	for(i = 0; i<inputcontrols.length; i++)
	{
    	if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
	}
	var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
	ribbonSave.text("Submit");

	//readonly document no.
	$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff11_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff11_ctl00_ctl00_TextField").size = "25";

	//readonly date closed
	$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
		document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "40";
		 	var from_cal2 = document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
		 	from_cal2.src = "";
		 	from_cal2.alt = "";

	//readonly non-conformance no
	$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff31_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff31_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff31_ctl00_ctl00_TextField").size = "25";

	//readOnly classification dropDown
	document.getElementById("classificationField1").style.display = 'None';
    classification = $("select[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff41_ctl00_DropDownChoice']").val();
	document.getElementById('classificationField2').innerHTML="<input type='text' value='"+classification+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
 	$('#table_nccar #classificationField2').show();

 	//readOnly department dropDown lookUp source
 	var deprtmnt = document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff51_ctl00_Lookup");
 	var selectedText = deprtmnt.options[deprtmnt.selectedIndex].text;
	document.getElementById("department_field1").style.display = 'None';
	document.getElementById('department_field2').innerHTML="<input type='text' value='"+selectedText+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
 	$('#table_nccar #department_field2').show();

 	//readOnly DepartmentHead
  $("div[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff61_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
  $( "a[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff61_ctl00_ctl00_UserField_checkNames']" ).empty();
  $( "a[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff61_ctl00_ctl00_UserField_browse']" ).empty();

  	//readOnly auditor
  $("div[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff71_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
  $( "a[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff71_ctl00_ctl00_UserField_checkNames']" ).empty();
  $( "a[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff71_ctl00_ctl00_UserField_browse']" ).empty();

  	//readOnly auditee
  $("div[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff81_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
  $( "a[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff81_ctl00_ctl00_UserField_checkNames']" ).empty();
  $( "a[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff81_ctl00_ctl00_UserField_browse']" ).empty();


	//resize non-conformity
 	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff91_ctl00_ctl00_TextField").style.width = "1202px";
 	//readonly non-conformity
 	$("textarea[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
  	//$("textarea[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff91_ctl00_ctl00_TextField']").removeAttr('readonly').css('background-color','White'); //removeReadonly
 
 	//resize OFI
  	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff101_ctl00_ctl00_TextField").style.width = "1202px";
  	//readonly OFI
  	$("textarea[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff101_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

  	//resize Corrective Action
  	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff141_ctl00_ctl00_TextField").style.width = "1202px";

  	//resize Corrective Action
  	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff171_ctl00_ctl00_TextField").style.width = "1202px";

  	//resize Corrective Action
  	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff191_ctl00_ctl00_TextField").style.width = "1202px";

  	//readonly acknowlegde by
  	$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff121_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff121_ctl00_ctl00_TextField").size = "40";

	//readonly status
  	$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff211_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff211_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff211_ctl00_ctl00_TextField").size = "40";

	//readonly closed by
  	$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff221_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff221_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
	document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff221_ctl00_ctl00_TextField").size = "40";

	//readonly date closed
	$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff231_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
		document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff231_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "40";
		 	var from_cal2 = document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff231_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
		 	from_cal2.src = "";
		 	from_cal2.alt = "";

	var followUpDate = $('input[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDate]').val();
 	var ca_remarks = $('select[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff161_ctl00_DropDownChoice]').val();
 	var fRemarks = $('select[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff201_ctl00_DropDownChoice]').val();


 	//check i acknowledge if it has a value
	if(document.getElementById('ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff111_ctl00_ctl00').checked)
 	{
 		//alert("acknowledged")
 		//if i acknowledge is checked
 		$('#table_nccar #i_acknowledge').hide();
 		$('#table_nccar #acknowledged_by').show();
 		$('#table_nccar #root_causeLabel').show();
 		$('#table_nccar #root_causeField').show();
 		$('#table_nccar #correctiveAction_label').show();
 		$('#table_nccar #correctiveAction_field').show();
 		$('#table_nccar #implementation_date').show();
 		$('#table_nccar #acknowledged_by2').show();

 		//readonly CorrectiveAction
  		$("textarea[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff141_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
  		//readOnly RootCause
  		$("div[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff131_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
  		//readonly ImplementationDate
		$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
		document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "40";
		 	var from_cal2 = document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
		 	from_cal2.src = "";
		 	from_cal2.alt = "";

		//show Corrective Action Fields (remarks,followUp Date & Notes)
		$('#table_nccar #caRemarks_followUpDate').show();
 		$('#table_nccar #caNotes_label').show();
 		$('#table_nccar #canotes_field').show();

 		

 		if(ca_remarks=="Valid" && followUpDate!="")
 		{	
 			//alert("HI valid")
 			//show followup-date
 			$('#table_nccar #followDateUpLabel').show();
 			$('#table_nccar #followDateUpField').show();


	 		//readOnly CA Remarks
	 		document.getElementById("CA_field1").style.display = 'None';
	    	caRemarks = $("select[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff161_ctl00_DropDownChoice']").val();
			document.getElementById('CA_field2').innerHTML="<input type='text' value='"+caRemarks+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
	 		$('#table_nccar #CA_field2').show();

	 		//readOnly Follow-up Date
	 		$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
			document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "40";
			 	var from_cal2 = document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
			 	from_cal2.src = "";
			 	from_cal2.alt = "";

	 		//Insert this <SharePoint:AppendOnlyHistory runat="server" ControlMode="Edit" FieldName="CA_x0020_Notes" ItemId="{@ID}"  />	to display comments
	 		//hide CA Notes box
	 		$('#table_nccar #ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff171_ctl00_ctl00_TextField').hide();

	 		//show AuditorsComment & RemarksStatus
	 		$('#table_nccar #auditorsComment_label').show();
	 		$('#table_nccar #auditorsComment_field').show();
	 		$('#table_nccar #remarksStatus').show();

		 		if(fRemarks=="CA Effective" && ca_remarks=="Valid")
		 		{
		 			//hide Auditor's Comment box
		 			$('#table_nccar #ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff191_ctl00_ctl00_TextField').hide();
			 		//readOnly Final Remarks
			 		document.getElementById("fRemarks1").style.display = 'None';
			    	finalRemarks = $("select[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff201_ctl00_DropDownChoice']").val();
					document.getElementById('fRemarks2').innerHTML="<input type='text' value='"+finalRemarks+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
			 		$('#table_nccar #fRemarks2').show();

			 		//show closed date and closed by
			 		$('#table_nccar #closedByDate').show();

			 		//hide submit button
			 			$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
						$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
		 		}	
 		}

 		//bookMark
 		else if (ca_remarks=="Invalid" && followUpDate!="")
 		{

 			//reset ca Remarks
 			$("#CA_field1").val("Csa").attr('selected','selected');
 			//alert(halaka)

 			//hide follow-up
 			$('#table_nccar #followDateUpLabel').hide();
 			$('#table_nccar #followDateUpField').hide();

 			//hide Corrective Action Fields (remarks,followUp Date)
			$('#table_nccar #caRemarks_followUpDate').hide();
			//hide CA Notes box
	 		$('#table_nccar #ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff171_ctl00_ctl00_TextField').hide();
	 		//enable rootcause for div
	 		 $("div[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff131_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'true').css('background-color','White');
	 		//enable corrective action
	 		$("textarea[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff141_ctl00_ctl00_TextField']").removeAttr('readonly').css('background-color','White');
	 		document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff161_ctl00_DropDownChoice").value = "None";
	 		//enable date
	 		// $("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").removeAttr('readonly').css('background-color','White');
	 		// from_cal2.src = "/_layouts/15/images/calendar_25.gif";
		 	// from_cal2.alt = "Select a date from the calendar.";

 		} 
 	}
 	else
 	{
 		//alert("aaaaaaaaaaaaa");
 			//show AuditorsComment
	 		$('#table_nccar #auditorsComment_label').hide();
	 		$('#table_nccar #auditorsComment_field').hide();
 			
 	}

	//i acknowledge change function
 	$("input[type='checkbox'][name='ctl00$ctl42$g_c450f089_f99f_49aa_980c_1cdc8650322e$ff111$ctl00$ctl00']").change(function()
 	{
 	
 		if(document.getElementById('ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff111_ctl00_ctl00').checked)
 		{
 			checked_acknowledge=1;
 			$('#table_nccar #root_causeLabel').show();
 			$('#table_nccar #root_causeField').show();
 			$('#table_nccar #correctiveAction_label').show();
 			$('#table_nccar #correctiveAction_field').show();
 			$('#table_nccar #implementation_date').show();

 			//alert(get_preferredname);
 			document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff121_ctl00_ctl00_TextField").value = get_preferredname;

 			var div = document.getElementById('ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff131_ctl00_ctl00_TextField_inplacerte');
			div.innerHTML = "<table cellspacing='0' class='ms-rteTable-default' style='width: 1210px; height: 301px;'> <tbody> <tr class='ms-rteTableHeaderRow-default' style='text-align: center;'> <th class='ms-rteTableHeaderEvenCol-default' rowspan='1' colspan='6' style='width: 1%; text-align: center;'> <span style='color: #191919; text-decoration: none solid #191919;'> <strong style='text-decoration: none solid #191919;'>5 Why&#39;s Diagram​ ​ </strong> <span style='text-decoration: none solid #191919;'>​ ​</span> ​ ​</span></th> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%; text-align: center;'> <strong>​Measurements</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%; text-align: center;'> <strong>​Materials</strong></td> <td class='ms-rteTableEvenCol-default' style='width: 4%; text-align: center;'> <strong>​Methods</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%; text-align: center;'> <strong>​Machines</strong></td> <td class='ms-rteTableEvenCol-default' style='width: 4%; text-align: center;'> <strong>​Manpower</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%; text-align: center;'> <strong>​Environment</strong></td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​<br/></td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​<br/></td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​<br/></td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> </tbody></table>"

 		}
 		else
 		{
 			checked_acknowledge=0;
 			$('#table_nccar #root_causeLabel').hide();
 			$('#table_nccar #root_causeField').hide();
 			$('#table_nccar #correctiveAction_label').hide();
 			$('#table_nccar #correctiveAction_field').hide();
 			$('#table_nccar #implementation_date').hide();
 		}
 		//readOnly department

 	});
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!
			var yyyy = today.getFullYear();
			var today = mm+'/'+dd+'/'+yyyy;

			//Final remarks changeFunction
	 		$("select[name='ctl00$ctl42$g_c450f089_f99f_49aa_980c_1cdc8650322e$ff201$ctl00$DropDownChoice']").change(function()
 			{
 				var fRemarks_this = $('select[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff201_ctl00_DropDownChoice]').val();

 				if(fRemarks_this=="CA Effective")
 				{
 						//insert value on closed by
 						document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff221_ctl00_ctl00_TextField").value = get_preferredname;
 						//change value on status
 						document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff211_ctl00_ctl00_TextField").value = "Closed";
 						//insert date today
 						document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff231_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value = today;
 						document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff241_ctl00_ctl00_TextField").value = "true";
 					
 				}
 				else if(fRemarks_this !="CA Effective")
 				{
 					//alert("Not Effective")
 						//change value on status
 						document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff211_ctl00_ctl00_TextField").value = "Open";
 						document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff241_ctl00_ctl00_TextField").value = "true";
 						// //ca_remarks dropdownReset
 						// $("#ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff161_ctl00_DropDownChoice").val("Nodsdsdsdne").attr('selected','selected');
 						//reset ca remarks
 						$("#CA_field1").val("Csa").attr('selected','selected');
 						//reset follow-up date
 						//document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value = "";

 				}
 			});

}); //end of document.ready function

		//get current user login "hoitcebu/carla" 
		var userProfileProperties;
		var targetUser;
		function get_user() 
		{

			this.clientContext2 = new SP.ClientContext.get_current();
			this.oWeb = clientContext2.get_web();
			targetUser = this.oWeb.get_currentUser();
			this.clientContext2.load(targetUser);
			this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));
		}

		var get_preferredname;
		function onQuerySucceeded() 
		{

			var account = targetUser.get_loginName();
			targetUser_temp = account.substring(account.indexOf("|") +10);
			targetUser = targetUser_temp;
			SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');
		}

		function getUserProperties() 
		{
			targetUser = 'hoitcebu\\'+targetUser;

			var clientContext = new SP.ClientContext.get_current();
			var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);


			var profilePropertyNames = ["PreferredName"];
			var userProfilePropertiesForUser =
			new SP.UserProfiles.UserProfilePropertiesForUser(
			clientContext,
			targetUser,
			profilePropertyNames);

			userProfileProperties = peopleManager.getUserProfilePropertiesFor(
			userProfilePropertiesForUser);

			// Load the UserProfilePropertiesForUser object and send the request.
			clientContext.load(userProfilePropertiesForUser);
			clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
		}

		function onRequestSuccess() 
		{
			get_preferredname = userProfileProperties[0];
			get_nccar();
		}

		function onRequestFail(sender, args) 
		{
			alert("Error Occurred! Please contact administrator, " + args.get_message());

			$("input[id='ctl00$ctl42$g_c450f089_f99f_49aa_980c_1cdc8650322e$savebutton2$ctl00$diidIOSaveItem']").attr('hidden', 'hidden');
			$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
		}

		function get_nccar()
		{
			console.log("nccar")
			itemId = GetUrlKeyValue("ID", false, location.href);

			//Get the current context
			var context = new SP.ClientContext();
			//Get the Announcements list. Alter this code to match the name of your list
			var list = context.get_web().get_lists().getByTitle('Non-Conformance Corrective Action Report v1');
			//Create a new CAML query
			var caml = new SP.CamlQuery();
			//Create the CAML that will return only items with the titles that begin with 'T'
			caml.set_viewXml("<Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query>");
			//Specify the query and load the list oject
			returnedItems = list.getItems(caml);
			context.load(returnedItems);
			//Run the query asynchronously, passing the functions to call when a response arrives
			context.executeQueryAsync(onSucceededCallback, onFailedCallback);
		}

		var auditor;
		var auditee;
		var DepartmentHead;
		var ca_remarks_status="";
		var arr_auditee=[];

		function onSucceededCallback(sender, args) 
		{
			var enumerator = returnedItems.getEnumerator();
			while (enumerator.moveNext()) 
			{

				var listItem = enumerator.get_current();
				var id = listItem.get_item('ID')

				if(itemId==id)
				{
					auditor= listItem.get_item('Auditor').get_lookupValue();
					DepartmentHead= listItem.get_item('Department_x0020_Head').get_lookupValue();
				
					var lookupVals = listItem.get_item('Auditee');
					//var lookupVals = listItem.get_item('DepartmentHead');
					var lookuptext='';

					for(var i = 0;i < lookupVals.length;i++) 
					{
						arr_auditee[i]=lookupVals[i].get_lookupValue();
					}

					for(var c=0;c<=arr_auditee.length;c++)
					{
						if(arr_auditee[c]==get_preferredname)
						{
							auditee=arr_auditee[c];
						}

					}
				}//end if
			}  //end while
			
			var concatUsername = "hoitcebu\\"+"victors";
			var concatUsername2 = "hoitcebu\\"+"paulm";
			var caRemarksDropdown = $('select[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff161_ctl00_DropDownChoice]').val();
			var fRemarksLast = $('select[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff201_ctl00_DropDownChoice]').val();
			console.log("get_preferredname: "+get_preferredname+" || auditor: "+auditor)
		if (get_preferredname==auditor)
 		{
 				//alert("jjj")
 				if(document.getElementById('ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff111_ctl00_ctl00').checked)
 					{
 					}
 					else
 					{
 					$('#table_nccar #i_acknowledge').hide();
 					//hide submit button
		 			$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
					$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
					}
 				 //CA remarks changeFunction
	 		$("select[name='ctl00$ctl42$g_c450f089_f99f_49aa_980c_1cdc8650322e$ff161$ctl00$DropDownChoice']").change(function()
 			{
 				var caRemarks_this = $('select[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff161_ctl00_DropDownChoice]').val();

 				if(caRemarks_this=="Valid")
 				{
 					//alert("YOW valid");
 						$('#table_nccar #followDateUpLabel').show();
 						$('#table_nccar #followDateUpField').show();
 						//document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff241_ctl00_ctl00_TextField").value = "true";

 						//readOnly Follow-up Date
 						$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").removeAttr('readonly').css('background-color','White');
		 		
				document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "20";
				 	var from_cal2 = document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
				 	from_cal2.src = "/_layouts/15/images/calendar_25.gif";
				 	from_cal2.alt = "Select a date from the calendar.";
 										
 				}
 				else if(caRemarks_this =="Invalid")
 				{
 					//alert("YOW invalid");
 						$('#table_nccar #followDateUpLabel').hide();
 						$('#table_nccar #followDateUpField').hide();
 						//document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff241_ctl00_ctl00_TextField").value = "false";
 						document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value = "";

				//readOnly Follow-up Date
		 		$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
				document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "20";
				 	var from_cal2 = document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
				 	from_cal2.src = "";
				 	from_cal2.alt = "";
 				}
 			});

 				//readonly CorrectiveAction
		  		$("textarea[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff141_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
		  		//readOnly RootCause
		  		$("div[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff131_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
		  		//readonly ImplementationDate
				$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
				document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "40";
				 	var from_cal2 = document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
				 	from_cal2.src = "";
				 	from_cal2.alt = "";

				

 				//show CA Notes box
 				if(caRemarksDropdown=="Valid")
 				{
 					//alert("Valid");
 					$('#table_nccar #ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff171_ctl00_ctl00_TextField').hide();
 					$('#table_nccar #auditorsComment_label').show();
 					$('#table_nccar #auditorsComment_field').show();

 				}
 				else if(caRemarksDropdown =="Invalid")
 				{
 					//alert("Invalid");
					$('#table_nccar #ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff171_ctl00_ctl00_TextField').show();
					$('#table_nccar #caRemarks_followUpDate').show();

					//readonly CorrectiveAction
			  		$("textarea[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff141_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
			  		//readOnly RootCause
			  		$("div[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff131_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
 				}
	 		
 			}

 			else if (get_preferredname!=auditor)
 			{
 			
 				//alert(DepartmentHead+" "+get_preferredname);
 				//alert(get_preferredname);
 					
	 				var caRemarksDropdown2 = $('select[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff161_ctl00_DropDownChoice]').val();
	 				var status123 = $('textarea[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff211_ctl00_ctl00_TextField]').val();
	 				var thisdate = $('input[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDate]');
	 				//hide CA Notes box
	 				//alert("not equal "+auditee);
		 			//$('#table_nccar #ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff171_ctl00_ctl00_TextField').hide();
		 		if (get_preferredname==auditee || get_preferredname == DepartmentHead)
	 			{		$('#table_nccar #caRemarks_followUpDate').hide();

	 				if(document.getElementById('ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff111_ctl00_ctl00').checked)
 					{
 					}
 					else
 					{
		 				var closedby = $('textarea[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff221_ctl00_ctl00_TextField]');
		 				//alert("shit")
		 				$('#table_nccar #auditorsComment_label').hide();
	 					$('#table_nccar #auditorsComment_field').hide();
	 					$('#table_nccar #remarksStatus').hide();
	 					$('#table_nccar #ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff171_ctl00_ctl00_TextField').show();
	 					if (closedby !="")
	 					{
	 							//alert("SSS")
	 							$('#table_nccar #ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff171_ctl00_ctl00_TextField').hide();
	 							$('#table_nccar #auditorsComment_label').hide();
	 							$('#table_nccar #auditorsComment_field').hide();
	 							$('#table_nccar #remarksStatus').hide();

	 					}
 					}

 					if (caRemarksDropdown2=="Valid")
 					{
 						var finalRrr = $('select[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff201_ctl00_DropDownChoice]').val();	
 						
 						//alert("char")
 						 	$('#table_nccar #caRemarks_followUpDate').show();
 						 	$('#table_nccar #remarksStatus').hide();
		 				//readonly CorrectiveAction
				  		$("textarea[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff141_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
				  		//readOnly RootCause
				  		$("div[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff131_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
				  		//readonly ImplementationDate
						$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
						document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "40";
						 	var from_cal2 = document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
						 	from_cal2.src = "";
						 	from_cal2.alt = "";

						 	if (finalRrr == "CA Not Effective" || finalRrr == "Change CA" || finalRrr == "For re-verification on follow-up audit")
						 	{
						 		//alert("Char char")
						 		$('#table_nccar #auditorsComment_label').hide();
 								$('#table_nccar #auditorsComment_field').hide();
						 		//hide Corrective Action Fields (remarks,followUp Date)
						 		$('#table_nccar #caRemarks_followUpDate').hide();
						 		//show CA Notes box
						 		$('#table_nccar #ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff171_ctl00_ctl00_TextField').show();
						 		//enable rootcause for div
						 		 $("div[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff131_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'true').css('background-color','White');
						 		//enable corrective action
						 		$("textarea[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff141_ctl00_ctl00_TextField']").removeAttr('readonly').css('background-color','White');
						 		//enable date
						 		$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").removeAttr('readonly').css('background-color','White');
						 		var from_cal12 = document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
								from_cal12.src = "/_layouts/15/images/calendar_25.gif";
								rom_cal12.alt = "Select a date from the calendar.";
						 	}
						 	else if (finalRrr=="CA Effective")
						 	{
						 		$('#table_nccar #remarksStatus').show();
						 	}
		 			}
 					else if(caRemarksDropdown2 !="Valid")
	 				{

	 					//hide Corrective Action Fields (remarks,followUp Date)
						$('#table_nccar #caRemarks_followUpDate').hide();
						//show CA Notes box
				 		$('#table_nccar #ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff171_ctl00_ctl00_TextField').show();
				 		//enable rootcause for div
				 		 $("div[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff131_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'true').css('background-color','White');
				 		//enable corrective action
				 		$("textarea[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff141_ctl00_ctl00_TextField']").removeAttr('readonly').css('background-color','White');
				 		//enable date
				 		$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").removeAttr('readonly').css('background-color','White');
				 		var from_cal12 = document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
						from_cal12.src = "/_layouts/15/images/calendar_25.gif";
						rom_cal12.alt = "Select a date from the calendar.";
	 				}

		 		}
		 		else if (get_preferredname != auditee)
 				{
					$('#table_nccar #caRemarks_followUpDate').hide();
					//hide CA Notes box
					$('#table_nccar #ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff171_ctl00_ctl00_TextField').hide();
					//readonly CorrectiveAction
			  		$("textarea[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff141_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
			  		//readOnly RootCause
			  		$("div[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff131_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
			  		//readonly ImplementationDate
					$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
					document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "40";
					 	var from_cal2 = document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
					 	from_cal2.src = "";
					 	from_cal2.alt = "";
				 	//hide submit button
		 			$("input[id='ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
					$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
	 			}
 			}
		}

		function onFailedCallback(sender, args) 
		{
			//Formulate HTML to display details of the error
			var markup = '<p>The request failed: <br>';
			markup += 'Message: ' + args.get_message() + '<br>';
			//Display the details
			alert(markup );

			$("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
			$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
		}


function PreSaveAction() //start of saveFunction
{
	var correctAction = $('textarea[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff141_ctl00_ctl00_TextField]').val();
	var implementationDate = $('input[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff151_ctl00_ctl00_DateTimeField_DateTimeFieldDate]').val();
	var CA_remarks = $('select[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff161_ctl00_DropDownChoice]').val();
	var followUpDate = $('input[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDate]').val();
	


	//------------INPUT VALIDATION ----------------
	if(correctAction=="" && checked_acknowledge==1)
	{
		alert("Corrective Action is empty. Please enter a value.");
 		return false;
	}
	else if(implementationDate=="" && checked_acknowledge==1)
	{
		alert("Implementation Date is empty. Please enter a value.");
 		return false;
	}

	else if(CA_remarks=="" && status=="Open")
	{
		alert("CA Remarks is empty. Please enter a value.")
		return false;
	}

	else if(followUpDate=="" && status=="Open")
	{
		alert("Follow-up Date is empty. Please enter a value.")
		return false;
	}


		/*$("select[name='ctl00$ctl42$g_c450f089_f99f_49aa_980c_1cdc8650322e$ff201$ctl00$DropDownChoice']").change(function()
 			{
 				var fRemarks_this = $('select[id=ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff201_ctl00_DropDownChoice]').val();
 				if(fRemarks_this !="CA Effective")
 				{
 						
 						//reset follow-up date
 						document.getElementById("ctl00_ctl43_g_c450f089_f99f_49aa_980c_1cdc8650322e_ff181_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value = "";

 				}

 			});*/
	return true;

}//end of saveFunction


</script>
<p>&nbsp;</p>