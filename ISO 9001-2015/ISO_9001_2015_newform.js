<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script> ​​​<script src="/SiteAssets/Scripts/jquery.timeago.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script type="text/javascript">

    $(document).ready(function()
{

SPUtility.HideSPField('Section Title');
SPUtility.HideSPField('Section Subtitle');

});



function PreSaveAction()

{

//var sect_title= $("select[id='Title0_c1ecaeec-2186-4942-ae3f-64588f1519ee_$LookupField']").val();
var sect_title = SPUtility.GetSPField('Title').GetValue();
var sect_subtitle = SPUtility.GetSPField('Subtitle').GetValue();

SPUtility.GetSPField('Section Title').SetValue(sect_title);
SPUtility.GetSPField('Section Subtitle').SetValue(sect_subtitle);
 
return true;

}

</script>