​​​​​​​​​<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/hrad/Lists/HR%20201%20Access%20Request/_layouts/15/sp.runtime.js"></script><script type="text/javascript" src="/hrad/Lists/HR%20201%20Access%20Request/_layouts/15/sp.js"></script><script type="text/javascript" src="/hrad/Lists/HR%20201%20Access%20Request/_layouts/15/SP.UserProfiles.js"></script><script type="text/javascript">


  //ExpenseId=1
    $(document).ready(function()
{

 itemId = GetUrlKeyValue("SFID", false, location.href);
 var unit_type = GetUrlKeyValue("UNIT_TYPE", false, location.href);
document.getElementById('ctl00_ctl43_g_f061a6c3_f323_494c_98d4_ee2a28836ec5_ff11_ctl00_ctl00_TextField').value = itemId;
//document.getElementById('ctl00_ctl43_g_f061a6c3_f323_494c_98d4_ee2a28836ec5_ff171_ctl00_ctl00_TextField').value = unit_type;
//SPUtility.HideSPField('FBID');


});



function PreSaveAction()

{

return true;


}

</script>