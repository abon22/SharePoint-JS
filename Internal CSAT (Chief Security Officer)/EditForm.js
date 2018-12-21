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



 $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
   document.getElementById("ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff11_ctl00_ctl00_TextField").style.width = "150px";

 

//readonly no of reworks
if(document.getElementById('ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff21_ctl00_ctl00').checked){
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff21_ctl00_ctl01']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff21_ctl00_ctl02']").attr('disabled', 'disabled');
}else if(document.getElementById('ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff21_ctl00_ctl01').checked){
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff21_ctl00_ctl00']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff21_ctl00_ctl02']").attr('disabled', 'disabled');
}else if(document.getElementById('ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff21_ctl00_ctl02').checked){
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff21_ctl00_ctl01']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff21_ctl00_ctl00']").attr('disabled', 'disabled');
}


//readonly no of reworks
$("textarea[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff41_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff41_ctl00_ctl00_TextField").className = "ms-long ms-spellcheck-true";
document.getElementById("ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff41_ctl00_ctl00_TextField").size = "25";



//readonly csat rating
if(document.getElementById('ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl00').checked){
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl01']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl02']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl03']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl04']").attr('disabled', 'disabled');
}else if(document.getElementById('ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl01').checked){
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl00']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl02']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl03']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl04']").attr('disabled', 'disabled');
}else if(document.getElementById('ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl02').checked){
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl01']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl00']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl03']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl04']").attr('disabled', 'disabled');
}else if(document.getElementById('ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl03').checked){
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl01']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl00']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl02']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl04']").attr('disabled', 'disabled');
 }else if(document.getElementById('ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl04').checked){
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl01']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl00']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl02']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff31_ctl00_ctl03']").attr('disabled', 'disabled');
}


//readonly no of errors
if(document.getElementById('ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl00').checked){
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl01']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl02']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl03']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl04']").attr('disabled', 'disabled');
}else if(document.getElementById('ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl01').checked){
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl00']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl02']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl03']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl04']").attr('disabled', 'disabled');
}else if(document.getElementById('ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl02').checked){
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl01']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl00']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl03']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl04']").attr('disabled', 'disabled');
}else if(document.getElementById('ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl03').checked){
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl01']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl00']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl02']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl04']").attr('disabled', 'disabled');
 }else if(document.getElementById('ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl04').checked){
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl01']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl00']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl02']").attr('disabled', 'disabled');
  $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff71_ctl00_ctl03']").attr('disabled', 'disabled');
}

 $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff61_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
   document.getElementById("ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff61_ctl00_ctl00_TextField").style.width = "150px";

//readonly csat rating
$("textarea[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff51_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff51_ctl00_ctl00_TextField").className = "ms-long ms-spellcheck-true";
document.getElementById("ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff51_ctl00_ctl00_TextField").size = "25";

//readonly no of errors
$("textarea[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff81_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff81_ctl00_ctl00_TextField").className = "ms-long ms-spellcheck-true";
document.getElementById("ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_ff81_ctl00_ctl00_TextField").size = "25";

   //hide submit button
      $("input[id='ctl00_ctl42_g_2131c2d0_213e_4556_9176_7e8fbc91f2bc_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


})





</script>