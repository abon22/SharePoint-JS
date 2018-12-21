<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>


var context = null;
var web = null;
var currentUser = null;
ExecuteOrDelayUntilScriptLoaded(GetUserLoginName, "sp.js");


//----------- set people picker name ------------------
function GetUserLoginName() {
  context = new SP.ClientContext.get_current();
  web = context.get_web();
  this._currentUser = web.get_currentUser();
  context.load(this._currentUser);
  context.executeQueryAsync(Function.createDelegate(this, this.onSuccessMethod),
  Function.createDelegate(this, this.onFailureMethod));
}

function onSuccessMethod(sender, args) 
{
document.getElementById('ctl00_ctl42_g_d5650b42_f063_4b48_a3c6_bfbd94d4e396_ff21_ctl00_ctl00_TextField').value = this._currentUser.get_title();
}

function onFaiureMethod(sender, args) {

 alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());

 }
//-------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------

_spBodyOnLoadFunctionNames.push("dropDownApproval");
_spBodyOnLoadFunctionNames.push("MoCOthers");

	function dropDownApproval()
	{
		$("Select[Title='Reason/s for Separation']").change(function () {
			var val=$("Select[Title='Reason/s for Separation']").val();
			
			if($(this).val()=="Other")
			{
				$('#applicantBackgroundReview #specifyReason').show();
			}
			else
				$('#applicantBackgroundReview #specifyReason').hide();



		});
	}

	function MoCOthers()
	{
		$("Select[Title='Mode of Checking']").change(function () {
			var val=$("Select[Title='Mode of Checking']").val();
			
			if($(this).val()=="Other")
			{
				$('#applicantBackgroundReview #mocOther').show();
			}
			else
				$('#applicantBackgroundReview #mocOther').hide();
		});
	}




                               
$(document).ready(function()
{
	$('#applicantBackgroundReview #specifyReason').hide();
	$('#applicantBackgroundReview #mocOther').hide();

     document.getElementById("ctl00_ctl42_g_d5650b42_f063_4b48_a3c6_bfbd94d4e396_ff171_ctl00_ctl00_TextField_inplacerte").style.width = "1100px";

     var div = document.getElementById('ctl00_ctl42_g_d5650b42_f063_4b48_a3c6_bfbd94d4e396_ff171_ctl00_ctl00_TextField_inplacerte');
      	div.innerHTML = "<table cellspacing='0' width='100%' class='ms-rteTable-default'> <tbody> <tr> <td class='ms-rteTable-default' style='width: 50%; text-align: center;'>​<strong>QUESTIONS</strong><br/></td> <td class='ms-rteTable-default' style='width: 50%; text-align: center;'>​<strong>ANSWERS</strong><br/></td> </tr> <tr> <td class='ms-rteTable-default'>​<span style='font-family: &quot;segoe ui&quot;, segoe, tahoma, helvetica, arial, sans-serif;'>​A</span><span style='font-family: &quot;segoe ui&quot;, segoe, tahoma, helvetica, arial, sans-serif;'>ny record of violation against Company Policy/ Regulations? Please specify including sanction(s) served.</span><br/></td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​What do you consider as the employee&#39;s strengths?<br/></td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​​What do you consider as the employee&#39;s areas for improvement?<br/></td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​​What were the employee&#39;s significant contributions, if any, to the organization?<br/></td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​​How do you describe the employee&#39;s attitude towards fellow employee&#39;s Superior&#39;s? Peers?<br/></td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​Other recommendations/ suggestions/ comments that may be significant to&#160;his/ her application with us?<br/></td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​If your company allows re-hiring of previous employees, would you re-hire him/her. (YES/NO/MAybe)<br/></td> <td class='ms-rteTable-default'>​</td> </tr> </tbody></table>";

});




function PreSaveAction(){


    var Position = $("Select[Title='Position']").val();
    var modeOfChecking = $("Select[Title='Mode of Checking']").val();
    var applicantName = $("Select[Title='Applicant Name']").val();
    var positionQualified = $("Select[Title='Position Qualified for']").val();
    var companyName = $("Select[Title='Company Name']").val();
    var nameReference = $("Select[Title='Name of Reference']").val();
    var positionReference = $("Select[Title='Position of Reference']").val();
    var dateEmployment = $("Select[Title='Date of Employment']").val();
    var lastPositionTitle = $("Select[Title='Last Position Title']").val();
    var separationDate = $("Select[Title='Separation Date']").val();
    var lastSalary = $("Select[Title='Last Salary']").val();
    var q1 = $("Select[Title='Question #1']").val();
     var r1 = $('select[id=ctl00_ctl42_g_d5650b42_f063_4b48_a3c6_bfbd94d4e396_ff251_ctl00_ctl00_TextField]').val();
     var r2 = $("Select[Title='Specify']").val();
    // var q4 = $("Select[Title='Question #4']").val();
    // var q5 = $("Select[Title='Question #5']").val();
    // var q6 = $("Select[Title='Question #6']").val();
    //var q7 = $("Select[Title='']").val();

        if(Position == "0" || modeOfChecking == "" || applicantName == "" || positionQualified == "" || companyName == "" || nameReference == "" || positionReference == "" || dateEmployment == "" || lastPositionTitle == "" || separationDate == "" || lastSalary == "" || q1 == "" ) 
        //|| modeOfChecking == "" || q3 == "" || q4 == "" || q5 == "" || q6 == ""
        {
            alert("Please don't leave the fields empty.");
            //alert(r1);
            return false;
        }

        // if(r1 == "")
        //     {
        //     	alert("Please don't leave the fields empty.");
        //     	return false;
        //     }

        //     if(r2 == "")
        //     {
        //     	alert("Please don't leave the fields empty.");
        //     	return false;
        //     }

    return true;
}






</script>