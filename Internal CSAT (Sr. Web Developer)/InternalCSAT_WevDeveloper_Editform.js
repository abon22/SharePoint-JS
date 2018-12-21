<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

$(document).ready(function()
{

	$("input[type=radio]").attr('disabled', true); 
	$("input[type=text]").attr('disabled', true); 


$("textarea[id='ctl00_ctl42_g_886ac608_79e9_479a_b198_f7c228c74cd3_ff51_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("textarea[id='ctl00_ctl42_g_886ac608_79e9_479a_b198_f7c228c74cd3_ff31_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
// $("textarea[id='ctl00_ctl42_g_5e4abe5a_f3c0_4b4f_bceb_278dcd9c92b5_ff81_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
// $("textarea[id='ctl00_ctl42_g_5e4abe5a_f3c0_4b4f_bceb_278dcd9c92b5_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


	 //hide submit button
       $("input[id='ctl00_ctl42_g_51c83dfc_e930_4289_8468_d52d87e489ee_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
});

</script>