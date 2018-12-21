<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

$(document).ready(function()
{
	 $("input[id='ctl00_ctl42_g_e25db2c3_58a0_4f02_8e06_a9f9fc137a5f_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	 document.getElementById("ctl00_ctl42_g_e25db2c3_58a0_4f02_8e06_a9f9fc137a5f_ff11_ctl00_ctl00_TextField").style.width = "150px";

	document.getElementById("ctl00_ctl42_g_e25db2c3_58a0_4f02_8e06_a9f9fc137a5f_ff21_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl42_g_e25db2c3_58a0_4f02_8e06_a9f9fc137a5f_ff21_ctl00_ctl01").disabled=true;
    document.getElementById("ctl00_ctl42_g_e25db2c3_58a0_4f02_8e06_a9f9fc137a5f_ff21_ctl00_ctl02").disabled=true;

    

    $("input[id='ctl00_ctl42_g_e25db2c3_58a0_4f02_8e06_a9f9fc137a5f_ff31_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	 document.getElementById("ctl00_ctl42_g_e25db2c3_58a0_4f02_8e06_a9f9fc137a5f_ff31_ctl00_ctl00_TextField").style.width = "150px";

	 $("textarea[id='ctl00_ctl42_g_e25db2c3_58a0_4f02_8e06_a9f9fc137a5f_ff41_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

	 //hide submit button
       $("input[id='ctl00_ctl42_g_3d444181_0a8a_4198_9f17_290be7048d5a_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
});

</script>