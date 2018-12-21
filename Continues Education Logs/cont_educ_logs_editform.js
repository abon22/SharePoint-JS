<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script>
<script src="/_layouts/15/init.js" type="text/javascript"></script>
<script src="/_layouts/15/sp.runtime.js" type="text/javascript"></script>
<script src="/_layouts/15/sp.js" type="text/javascript"></script>
<script src="/_layouts/15/SP.UserProfiles.js" type="text/javascript"></script><script>


var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.




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

$("input[id='Total_x0020__x0023__x0020_of_x00_fa5e7f32-6444-4f0d-a718-284346d87194_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');






setInterval(function() {

    
var sdate = document.getElementById('Start_x0020_Time_9348f435-85f5-493c-820e-ce79a06ae465_$DateTimeFieldDate').value;
var shour = document.getElementById('Start_x0020_Time_9348f435-85f5-493c-820e-ce79a06ae465_$DateTimeFieldDateHours').value;
var smin = document.getElementById('Start_x0020_Time_9348f435-85f5-493c-820e-ce79a06ae465_$DateTimeFieldDateMinutes').value;

var fdate = document.getElementById('Finish_x0020_Time_b45c58c2-d157-4245-8f4b-7446d55a88df_$DateTimeFieldDate').value;
var fhour = document.getElementById('Finish_x0020_Time_b45c58c2-d157-4245-8f4b-7446d55a88df_$DateTimeFieldDateHours').value;
var fmin = document.getElementById('Finish_x0020_Time_b45c58c2-d157-4245-8f4b-7446d55a88df_$DateTimeFieldDateMinutes').value;


    var sdateandtime = sdate +" "+shour+":"+smin;
var fdateandtime = fdate +" "+fhour+":"+fmin;

var startDate = new Date(sdateandtime);
var endDate = new Date(fdateandtime);
var timeDiff = Math.abs(startDate - endDate);

var hh = Math.floor(timeDiff / 1000 / 60 / 60);
if(hh < 10) {
    hh = '0' + hh;
}
timeDiff -= hh * 1000 * 60 * 60;
var mm = Math.floor(timeDiff / 1000 / 60);
if(mm < 10) {
    mm = '0' + mm;
}
timeDiff -= mm * 1000 * 60;
var ss = Math.floor(timeDiff / 1000);
if(ss < 10) {
    ss = '0' + ss;
}
document.getElementById('Total_x0020__x0023__x0020_of_x00_fa5e7f32-6444-4f0d-a718-284346d87194_$NumberField').value = hh + "." + mm;


}, 1000);


});


</script>