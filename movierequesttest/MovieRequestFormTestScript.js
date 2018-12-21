​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"><span id="ms-rterangecursor-start" aria-hidden="true"></span><span id="ms-rterangecursor-end" aria-hidden="true"></span></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

//style="white-space:normal;"

  $(document).ready(function()
{

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

//SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
//SPUtility.HideSPField('Date and Time Created');
// SPUtility.GetSPField('Status').MakeReadOnly();
// SPUtility.HideSPField('Status');
//
// SPUtility.GetSPField('Approval By').MakeReadOnly();
// SPUtility.HideSPField('Approval By');


var HrApproval = $("select[id='HR_x0020_Approval0_c8c27904-c468-44b7-8d18-58a134ffa1c4_$DropDownChoice']").val();
var ImmediateHeadApproval = $("select[id='HR_x0020_Approval_25a2ffb8-ef2f-44f6-a880-c888b5f46b19_$DropDownChoice']").val();
//SPUtility.HideSPField("HR Approval");

alert (HrApproval);
// if (HrApproval == "")
// {
// 	alert ("test scriptttt");
// }

});


</script><span id="ms-rterangecursor-start" aria-hidden="true"></span><span id="ms-rterangecursor-end" aria-hidden="true"></span>
