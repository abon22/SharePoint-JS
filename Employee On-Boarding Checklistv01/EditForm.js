<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>


$(document).ready(function(){

//LOAD value
var div = document.getElementById('ctl00_ctl42_g_7fc0921a_1cc5_469b_8d10_992bddb5af8d_ff421_ctl00_ctl00_TextField');
     div.innerHTML ="•Company Profile\t•Code of Conduct\t•Benefits\n•Pre-employment requirements\t•Process & Procedure\t•Payroll Computation\t•Deductions\t•Tax"
var div = document.getElementById('ctl00_ctl42_g_7fc0921a_1cc5_469b_8d10_992bddb5af8d_ff781_ctl00_ctl00_TextField');
     div.innerHTML ="•Job Description\t•Soft Skills Training\n•Product Specific Training\t•Job Specific Tools"  	

//READ ONLY
$("input[id='ctl00_ctl42_g_7fc0921a_1cc5_469b_8d10_992bddb5af8d_ff1081_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='ctl00_ctl42_g_7fc0921a_1cc5_469b_8d10_992bddb5af8d_ff31_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("textarea[id='ctl00_ctl42_g_7fc0921a_1cc5_469b_8d10_992bddb5af8d_ff421_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("textarea[id='ctl00_ctl42_g_7fc0921a_1cc5_469b_8d10_992bddb5af8d_ff781_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

//readOnly dropDownStatus
  document.getElementById("Status1").style.display = 'None';
    classification = $("select[id='ctl00_ctl42_g_7fc0921a_1cc5_469b_8d10_992bddb5af8d_ff21_ctl00_DropDownChoice']").val();
  document.getElementById('Status2').innerHTML="<input type='text' value='"+classification+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
   $('#basicInfo #Status2').show();

//readOnly dropDownSpeaker
  document.getElementById("speaker1").style.display = 'None';
    classification = $("select[id='ctl00_ctl42_g_7fc0921a_1cc5_469b_8d10_992bddb5af8d_ff791_ctl00_DropDownChoice']").val();
  document.getElementById('speaker2').innerHTML="<input type='text' value='"+classification+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
   $('#companyOrientation #speaker2').show();   

//read only date time
  $("input[id='ctl00_ctl42_g_7fc0921a_1cc5_469b_8d10_992bddb5af8d_ff51_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

  //hide save ribbon button
  $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
  
  $('input[title="Date Started"]').parent().next().hide();

  //----------------Chage Save to Submit-------------
  var inputcontrols = document.getElementsByTagName("input");
  for(i = 0; i<inputcontrols.length; i++)
  {
      if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
  }
  var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
  ribbonSave.text("Submit");



//RESIZING the fields
	document.getElementById("ctl00_ctl42_g_7fc0921a_1cc5_469b_8d10_992bddb5af8d_ff1081_ctl00_ctl00_TextField").style.width = "155px";
	document.getElementById("ctl00_ctl42_g_7fc0921a_1cc5_469b_8d10_992bddb5af8d_ff31_ctl00_ctl00_TextField").style.width = "155px";
	document.getElementById("ctl00_ctl42_g_7fc0921a_1cc5_469b_8d10_992bddb5af8d_ff421_ctl00_ctl00_TextField").style.width = "315px";
	document.getElementById("ctl00_ctl42_g_7fc0921a_1cc5_469b_8d10_992bddb5af8d_ff781_ctl00_ctl00_TextField").style.width = "315px";















});
























</script>
<p>&nbsp;</p>