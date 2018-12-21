<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script>


var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.

 $(function() {
 
 
 //------change Save to Submit---------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");    
//-------------------------------------


 //document.getElementById("ctl00_ctl43_g_80eeda80_d153_4c5d_8adc_cb5ef5bdee7f_ff71_ctl00_ctl00_TextField").style.display='none';
 
 // document.getElementById("ctl00_ctl43_g_80eeda80_d153_4c5d_8adc_cb5ef5bdee7f_ff81_ctl00_ctl00_TextField_inplacerte").style.display='none';
  });



</script>