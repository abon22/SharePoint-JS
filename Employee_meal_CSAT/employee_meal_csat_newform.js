<style>
 
/* Removes Top Buttons */
table[id*='toolBarTbltop']{display:none;}
 
/* Removes Line */
.ms-formline {display:none;}
 
/* Removes Number Headings */
th.ms-gridCol {font-weight: bold!important;}
 
/* Change Main Question */
.ms-formlabel {font-weight: bold!important;}
 
/* Change Sub Question Options */
.ms-gridT1, .ms-gridCol {font-weight:normal!important;}
 
/* Change Sub Question Options Column Width */
.ms-gridCol {color:#444!important; width:110px!important;}
 
/* Change Sub Question Title Width */
.ms-gridT1 {padding: 0px 0px 10px 0px; width:400px!important;}
 
</style>
 
<script language="javascript" type="text/javascript" src="https://intranet.houseofit.com.au/SiteAssets/Scripts/jquery-1.12.4.min.js"></script>
<script language="javascript" type="text/javascript" src="https://intranet.houseofit.com.au/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script>
<script language="javascript" type="text/javascript">
 
$(document).ready(function (){
 
// 1st Rating Scale
$("td.ms-gridCol:eq(1)").append("Needs Improvement");
$("td.ms-gridCol:eq(3)").append("Very Satisfactory");
 
// // 2nd Rating Scale
// $("td.ms-gridCol:eq(6)").append("Needs Improvement ");
// $("td.ms-gridCol:eq(8)").append(" Very Satisfactory");
 
// // 3rd Rating Scale
// $("td.ms-gridCol:eq(11)").append("Needs Improvement ");
// $("td.ms-gridCol:eq(13)").append(" Very Satisfactory");
 
// // 4th Rating Scale
// $("td.ms-gridCol:eq(16)").append("Needs Improvement ");
// $("td.ms-gridCol:eq(18)").append(" Very Satisfactory");
 
// // 5th Rating Scale
// $("td.ms-gridCol:eq(21)").append("Needs Improvement ");
// $("td.ms-gridCol:eq(23)").append(" Very Satisfactory");
 
});
 
</script>