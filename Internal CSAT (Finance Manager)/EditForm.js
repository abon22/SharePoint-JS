<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="/_layouts/sp.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>


$(document).ready(function()
{

		//----Chage Save to Submit------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");    


 // $('#metrics #kpi1').hide();
 // $('#metrics #mkpi1').hide();
 //$('#metrics #remarks1').hide();
 // $('#metrics #month1').hide();



 //readOnly kpi dropDown
 // document.getElementById("kpi1").style.display = 'None';
 //    kpi = $("select[id='ctl00_ctl42_g_c5f1675c_cb33_48c5_a960_744c0bfe6483_ff31_ctl00_DropDownChoice']").val();
 //  document.getElementById('kpi2').innerHTML="<input type='text' size='95px' value='"+kpi+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
 //  document.getElementById("ctl00_ctl42_g_c5f1675c_cb33_48c5_a960_744c0bfe6483_ff31_ctl00_DropDownChoice").size = "25000";
 //  $('#metrics #kpi2').show();

  $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
   document.getElementById("ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff11_ctl00_ctl00_TextField").style.width = "150px";

//readonly 15%
if(document.getElementById('ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff21_ctl00_ctl00').checked){
  $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff21_ctl00_ctl01']").attr('disabled', 'disabled');
}else if(document.getElementById('ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff21_ctl00_ctl01').checked){
  $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff21_ctl00_ctl00']").attr('disabled', 'disabled');
}

//readonly remarks1
$("textarea[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff61_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff61_ctl00_ctl00_TextField").className = "ms-long ms-spellcheck-true";
document.getElementById("ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff61_ctl00_ctl00_TextField").size = "25";


//readonly remarks1
// if(document.getElementById('ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff61_ctl00_ctl00').checked){
//   $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff61_ctl00_ctl01']").attr('disabled', 'disabled');
// }else if(document.getElementById('ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff61_ctl00_ctl01').checked){
//   $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff61_ctl00_ctl00']").attr('disabled', 'disabled');
// }

//readonly 25%
if(document.getElementById('ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff31_ctl00_ctl00').checked){
  $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff31_ctl00_ctl01']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff31_ctl00_ctl02']").attr('disabled', 'disabled');
}else if(document.getElementById('ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff31_ctl00_ctl01').checked){
  $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff31_ctl00_ctl00']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff31_ctl00_ctl02']").attr('disabled', 'disabled');
}else if(document.getElementById('ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff31_ctl00_ctl02').checked){
  $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff31_ctl00_ctl01']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff31_ctl00_ctl00']").attr('disabled', 'disabled');

}
//readonly remarks
$("textarea[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff51_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff51_ctl00_ctl00_TextField").className = "ms-long ms-spellcheck-true";
document.getElementById("ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff51_ctl00_ctl00_TextField").size = "25";
//readonly remarks
// if(document.getElementById('ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff51_ctl00_ctl00').checked){
//   $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff51_ctl00_ctl01']").attr('disabled', 'disabled');
//   $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff51_ctl00_ctl02']").attr('disabled', 'disabled');
// }else if(document.getElementById('ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff51_ctl00_ctl01').checked){
//   $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff51_ctl00_ctl00']").attr('disabled', 'disabled');
//   $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff51_ctl00_ctl02']").attr('disabled', 'disabled');
// }else if(document.getElementById('ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff51_ctl00_ctl02').checked){
//   $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff51_ctl00_ctl01']").attr('disabled', 'disabled');
//   $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff51_ctl00_ctl00']").attr('disabled', 'disabled');

// }

//readonly 20%
if(document.getElementById('ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff41_ctl00_ctl00').checked){
  $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff41_ctl00_ctl01']").attr('disabled', 'disabled');
}else if(document.getElementById('ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff41_ctl00_ctl01').checked){
  $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff41_ctl00_ctl00']").attr('disabled', 'disabled');
}

//readonly remarks2
// if(document.getElementById('ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff71_ctl00_ctl00').checked){
//   $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff71_ctl00_ctl01']").attr('disabled', 'disabled');
// }else if(document.getElementById('ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff71_ctl00_ctl01').checked){
//   $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff71_ctl00_ctl00']").attr('disabled', 'disabled');
// }


//readonly remarks2
$("textarea[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff71_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff71_ctl00_ctl00_TextField").className = "ms-long ms-spellcheck-true";
document.getElementById("ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff71_ctl00_ctl00_TextField").size = "25";


  $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff81_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
   document.getElementById("ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_ff81_ctl00_ctl00_TextField").style.width = "150px";
   
   //hide submit button
       $("input[id='ctl00_ctl42_g_c3664516_b0d9_4790_b82e_e6bc33b1c5c6_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

})





</script>