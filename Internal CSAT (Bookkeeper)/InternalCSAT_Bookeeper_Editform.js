<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

$(document).ready(function()
{

	$("input[type=radio]").attr('disabled', true); 
	$("input[type=text]").attr('disabled', true); 


//$("textarea[id='ctl00_ctl42_g_51c83dfc_e930_4289_8468_d52d87e489ee_ff31_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("textarea[id='ctl00_ctl42_g_47a945ed_27b9_4e71_9e7c_8e57d32336e0_ff31_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
// $("textarea[id='ctl00_ctl42_g_5e4abe5a_f3c0_4b4f_bceb_278dcd9c92b5_ff81_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
// $("textarea[id='ctl00_ctl42_g_5e4abe5a_f3c0_4b4f_bceb_278dcd9c92b5_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


	 //hide submit button
       $("input[id='ctl00_ctl42_g_51c83dfc_e930_4289_8468_d52d87e489ee_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
});

</script>