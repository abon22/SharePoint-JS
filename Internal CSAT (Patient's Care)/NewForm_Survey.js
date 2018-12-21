<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>



$(document).ready(function()
{

//resize comment 1
  document.getElementById("ctl00_ctl42_g_5d4b665d_37df_47b5_ba0b_3bc90867133a_ff21_ctl00_ctl00_TextField").style.width = "644px";
  document.getElementById("ctl00_ctl42_g_5d4b665d_37df_47b5_ba0b_3bc90867133a_ff21_ctl00_ctl00_TextField").style.height = "90px";

  //resize comment 2
  document.getElementById("ctl00_ctl42_g_5d4b665d_37df_47b5_ba0b_3bc90867133a_ff41_ctl00_ctl00_TextField").style.width = "644px";
  document.getElementById("ctl00_ctl42_g_5d4b665d_37df_47b5_ba0b_3bc90867133a_ff41_ctl00_ctl00_TextField").style.height = "90px";


//----Chage Finish to Submit------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Finish")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Finish')");
ribbonSave.text("Submit");    


})

</script>