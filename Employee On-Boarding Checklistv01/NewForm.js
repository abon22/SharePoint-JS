<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

//get the name of the current user
	// var context = null;
	// var web = null;
	// var currentUser = null;
	// ExecuteOrDelayUntilScriptLoaded(GetUserLoginName, "sp.js");

	// function GetUserLoginName() {
	//   context = new SP.ClientContext.get_current();
	//   web = context.get_web();
	//   this._currentUser = web.get_currentUser();
	//   context.load(this._currentUser);
	//   context.executeQueryAsync(Function.createDelegate(this, this.onSuccessMethod),
	//   Function.createDelegate(this, this.onFailureMethod));
	// }

	// function onSuccessMethod(sender, args) {
	// 	 //document.getElementById("ctl00_ctl42_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff21_ctl00_ctl00_TextField").value = WeightedScore;
	// document.getElementById('ctl00_ctl42_g_8f2561c3_c204_4744_9087_9ff5d0dbec09_ff41_ctl00_ctl00_UserField_upLevelDiv').innerHTML =this._currentUser.get_title();
	// //change the ID here to your people picker field ID.
	// }

	// function onFaiureMethod(sender, args) {

	//  alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());
	// }


$(document).ready(function(){

//----------------Chage Save to Submit-------------
  var inputcontrols = document.getElementsByTagName("input");
  for(i = 0; i<inputcontrols.length; i++)
  {
      if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
  }
  var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
  ribbonSave.text("Submit");

//$('#ctl00_ctl42_g_e531d380_bd97_44a4_95f6_751573c02395_ff31_ctl00_DropDownChoice').remove();

document.getElementById("ctl00_ctl42_g_8f2561c3_c204_4744_9087_9ff5d0dbec09_ff81_ctl00_ctl00").disabled=true;

//LOAD value
var div = document.getElementById('ctl00_ctl42_g_8f2561c3_c204_4744_9087_9ff5d0dbec09_ff421_ctl00_ctl00_TextField');
     div.innerHTML ="•Company Profile\t•Code of Conduct\t•Benefits\n•Pre-employment requirements\t•Process & Procedure\t•Payroll Computation\t•Deductions\t•Tax"
var div = document.getElementById('ctl00_ctl42_g_8f2561c3_c204_4744_9087_9ff5d0dbec09_ff781_ctl00_ctl00_TextField');
     div.innerHTML ="•Job Description\t•Soft Skills Training\n•Product Specific Training\t•Job Specific Tools"     

//READ ONLY
$("input[id='ctl00_ctl42_g_8f2561c3_c204_4744_9087_9ff5d0dbec09_ff1081_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("textarea[id='ctl00_ctl42_g_8f2561c3_c204_4744_9087_9ff5d0dbec09_ff421_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("textarea[id='ctl00_ctl42_g_8f2561c3_c204_4744_9087_9ff5d0dbec09_ff781_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


//RESIZING the fields
	document.getElementById("ctl00_ctl42_g_8f2561c3_c204_4744_9087_9ff5d0dbec09_ff1081_ctl00_ctl00_TextField").style.width = "155px";
	document.getElementById("ctl00_ctl42_g_8f2561c3_c204_4744_9087_9ff5d0dbec09_ff31_ctl00_ctl00_TextField").style.width = "155px";
	document.getElementById("ctl00_ctl42_g_8f2561c3_c204_4744_9087_9ff5d0dbec09_ff421_ctl00_ctl00_TextField").style.width = "315px";
	document.getElementById("ctl00_ctl42_g_8f2561c3_c204_4744_9087_9ff5d0dbec09_ff781_ctl00_ctl00_TextField").style.width = "315px";
	

});
























</script>
<p>&nbsp;</p>