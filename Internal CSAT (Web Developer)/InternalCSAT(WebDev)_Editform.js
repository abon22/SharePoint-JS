<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

$(document).ready(function()
{

	$("input[type=radio]").attr('disabled', true); 
	$("input[type=text]").attr('disabled', true); 


$("textarea[id='ctl00_ctl42_g_c6804612_4da5_4782_835d_7d731241b23f_ff41_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("textarea[id='ctl00_ctl42_g_c6804612_4da5_4782_835d_7d731241b23f_ff51_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("textarea[id='ctl00_ctl42_g_c6804612_4da5_4782_835d_7d731241b23f_ff71_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
//$("textarea[id='ctl00_ctl42_g_5e4abe5a_f3c0_4b4f_bceb_278dcd9c92b5_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


	 //hide submit button
       $("input[id='ctl00_ctl42_g_c6804612_4da5_4782_835d_7d731241b23f_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
});

</script>