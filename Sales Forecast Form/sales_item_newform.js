​​​​​​​​​<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/hrad/Lists/HR%20201%20Access%20Request/_layouts/15/sp.runtime.js"></script><script type="text/javascript" src="/hrad/Lists/HR%20201%20Access%20Request/_layouts/15/sp.js"></script><script type="text/javascript" src="/hrad/Lists/HR%20201%20Access%20Request/_layouts/15/SP.UserProfiles.js"></script><script type="text/javascript">

//--------Change 'Save' to 'Submit'-----------------
(function ($, undefined)
{
    $("document").ready(function ()
    {
        var inputcontrols = document.getElementsByTagName("input");
        for(i = 0; i<inputcontrols.length; i++)
        {
            if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
                inputcontrols[i].value = "Add";
        }
        var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
        ribbonSave.text("Add");
    });
})(jQuery);
//------------------------------------

  //ExpenseId=1
    $(document).ready(function()
{
    console.log("aw");
 itemId = GetUrlKeyValue("SFID", false, location.href);
 var unit_type = GetUrlKeyValue("UNIT_TYPE", false, location.href);
document.getElementById('ctl00_ctl43_g_55f35028_7b07_4432_a2b8_ac0865fbb0ad_ff11_ctl00_ctl00_TextField').value = itemId;
document.getElementById('ctl00_ctl43_g_55f35028_7b07_4432_a2b8_ac0865fbb0ad_ff171_ctl00_ctl00_TextField').value = unit_type;
//SPUtility.HideSPField('FBID');
});
function PreSaveAction()
{
return true;
}
</script>