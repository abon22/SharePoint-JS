​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>


_spBodyOnLoadFunctionNames.push("dropDownApproval");
_spBodyOnLoadFunctionNames.push("Odometer");

//dropDownApproval
	function dropDownApproval()
	{
		$("Select[Title='Approval']").change(function () {
			var val=$("Select[Title='Approval']").val();
			var reasonRejection = $('textarea[id=ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff211_ctl00_ctl00_TextField]').val();
			
			if($(this).val()=="Approved")
				{
					$("#reasonRejection1").hide();
					$("#reasonRejection2").hide();
				}
				else if($(this).val()=="Rejected")
				{
					$("#reasonRejection1").show();
					$("#reasonRejection2").show();
				}
		});
	}

//get the name of the current user
	var context = null;
	var web = null;
	var currentUser = null;
	var rOdometer = 0;
	var bOdometer = 0;

	ExecuteOrDelayUntilScriptLoaded(GetUserLoginName, "sp.js");

	function GetUserLoginName() {
	  context = new SP.ClientContext.get_current();
	  web = context.get_web();
	  this._currentUser = web.get_currentUser();
	  context.load(this._currentUser);
	  context.executeQueryAsync(Function.createDelegate(this, this.onSuccessMethod),
	  Function.createDelegate(this, this.onFailureMethod));
	}

function onSuccessMethod(sender, args) {

//FOR THE PERSON TO APPROVE or REJECT
	var currentName = this._currentUser.get_title();
	var Approval = $("Select[Title='Approval']").val();
	var Status = $("Select[Title='Request Status']").val();
	var vehicleType = $("Select[Title='Vehicle Type']").val();
	var licensePlateNo = $('textarea[id=ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff171_ctl00_ctl00_TextField]').val();
	var returnOdometer = $('textarea[id=ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff161_ctl00_ctl00_TextField]').val();
	var beginnOdometer = $('textarea[id=ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff181_ctl00_ctl00_TextField]').val();

		 if(currentName == 'Nowmar Calidro'.trim() || currentName == 'Alin Florea'.trim())//if(currentName == 'Lendie Catubig'.trim())
		 {
		 		if(Approval != "")
		 		{

		 			$('#vehicleRequestForm #requestStatus').show();
		 			$('#vehicleRequestForm #returnOdometer').show();
					$('#vehicleRequestForm #beginnOdometer').show();
					$('#vehicleRequestForm #notes').show();

					$("#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff31_ctl00_DropDownChoice").prop("disabled", true);
					/*vehicleType*/
          //$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff151_ctl00_ctl00_TextField').prop('readonly', true);
				 	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff171_ctl00_ctl00_TextField').prop('readonly', true);
				 	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff211_ctl00_ctl00_TextField').prop('readonly', true);	
          $("#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff151_ctl00_DropDownChoice").prop("disabled", false);      						
		 		
					 	if(Status == "Open")
						{
							$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff161_ctl00_ctl00_TextField').prop('readonly', false);
							$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff181_ctl00_ctl00_TextField').prop('readonly', false);
							$("#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff201_ctl00_DropDownChoice").prop("disabled", false);			
						}
						else if (Status == "Close")
						{
							$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff161_ctl00_ctl00_TextField').prop('readonly', true);
							$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff181_ctl00_ctl00_TextField').prop('readonly', true);
              $('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff251_ctl00_ctl00_TextField').prop('readonly', true);
							$("#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff201_ctl00_DropDownChoice").prop("disabled", true);
              $("#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff151_ctl00_DropDownChoice").prop("disabled", true);
							document.getElementById("ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_savebutton2_ctl00_diidIOSaveItem").style.display = "none";
						}
		 		}

		 }
		 else
		 {
		 	$("#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff31_ctl00_DropDownChoice").prop("disabled", true);
			//$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff151_ctl00_ctl00_TextField').prop('readonly', true);
      $("#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff151_ctl00_DropDownChoice").prop("disabled", true); 
			$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff171_ctl00_ctl00_TextField').prop('readonly', true);
			$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff211_ctl00_ctl00_TextField').prop('readonly', true);
			$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff161_ctl00_ctl00_TextField').prop('readonly', true);
			$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff181_ctl00_ctl00_TextField').prop('readonly', true);
			$("#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff201_ctl00_DropDownChoice").prop("disabled", true);
			document.getElementById("ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_savebutton2_ctl00_diidIOSaveItem").style.display = "none";	
		 }	 		
}


$(document).ready(function()
{

	document.getElementById("ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff261_ctl00_ctl00_TextField_inplacerte").style.width = "800px";
	$("div[id='ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff261_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

//FOR Hiding 
	$('#vehicleRequestForm #requestStatus').hide();
	$('#vehicleRequestForm #returnOdometer').hide();
	$('#vehicleRequestForm #beginnOdometer').hide();
	$('#vehicleRequestForm #notes').hide();

//FOR DROPDOWN  		 
	var val = $("Select[Title='Approval']").val();
	var dpvalue=$("Select[Title='Approval']").val();
	var reasonRejection = $('textarea[id=ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff211_ctl00_ctl00_TextField]').val();

		if(val != "")
		{
	 		//$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff151_ctl00_ctl00_TextField').prop('readonly', true);
      $("#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff151_ctl00_DropDownChoice").prop("disabled", true); 
	 		$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff171_ctl00_ctl00_TextField').prop('readonly', true);

	 			if(val == "Rejected")
		 		{
		 			$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff211_ctl00_ctl00_TextField').prop('readonly', true);
		 		}		 			
		 		else
		 		{
		 			$("#reasonRejection1").hide(); 
		 			$("#reasonRejection2").hide();
		 		}
		}
		
		//alert(dpvalue);
	 	if(dpvalue=="")
		{				
			$("#reasonRejection1").hide();
			$("#reasonRejection2").hide();
		}
		else if(dpvalue=="Rejected")
		{				
			$("#reasonRejection1").show();
			$("#reasonRejection2").show();
		}
		else //if($(this).val()=="Rejected")
		{
			$("#reasonRejection1").hide();
			$("#reasonRejection2").hide();
		}

//	//------change Save to Submit---------
	var inputcontrols = document.getElementsByTagName("input");
	for(i = 0; i<inputcontrols.length; i++){
	    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
	        inputcontrols[i].value = "Submit";
	}
	
//resize Reference #
    document.getElementById("ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff191_ctl00_ctl00_TextField").style.width = "140px";
  
//hide save ribbon button
  $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


//for disable input text
	document.getElementById("ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff241_ctl00_ctl00").disabled=true;
	$("#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff231_ctl00_Lookup").prop("disabled", true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff191_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff11_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff201_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDate').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff41_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff51_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff61_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff71_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff81_ctl00_ctl00').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff91_ctl00_ctl00_DateTimeField_DateTimeFieldDate').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff101_ctl00_ctl00_DateTimeField_DateTimeFieldDate').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff111_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff121_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff131_ctl00_ctl00_TextField').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff91_ctl00_ctl00_DateTimeField_DateTimeFieldDateHours').prop('disabled', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff101_ctl00_ctl00_DateTimeField_DateTimeFieldDateHours').prop('disabled', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff91_ctl00_ctl00_DateTimeField_DateTimeFieldDateMinutes').prop('disabled', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff101_ctl00_ctl00_DateTimeField_DateTimeFieldDateMinutes').prop('disabled', true);
	$('table tr td#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff141_ctl00_ctl00_UserField_containerCell').prop('readonly', true);
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage').remove();
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff91_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage').remove();
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff101_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage').remove();
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff141_ctl00_ctl00_UserField_browse').remove();
	$('#ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff141_ctl00_ctl00_UserField_checkNames').remove();


});


function PreSaveAction(){

	$("input[name$=ctl00]").removeAttr("disabled");

	var dpApproval = $('select[id=ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff31_ctl00_DropDownChoice]').val();
	var reasonRejection = $('textarea[id=ctl00_ctl43_g_f43d07eb_55ba_4480_b344_6b761d714d9d_ff211_ctl00_ctl00_TextField]').val();
	var vehicle = $("input[Title*='Vehicle Type']").val();
    var license = $("input[Title*='License Plate #']").val();
    var returnOdometer = $("input[Title*='Return Odometer']").val();
    var beginnOdometer = $("input[Title*='Begin Odometer']").val();
    var requestStatus = $("Select[Title='Request Status']").val();

    	if(dpApproval == "" || vehicle == "" || license == "")
			{
				alert("Please provide the needed information.");
		        return false;
			}

		if(dpApproval =="Rejected")
		{
			if (reasonRejection == "")
			{
				alert("Reason for Rejection Field is empty.");
				return false;
			}
				
		}

    	// if(returnOdometer == "" || beginnOdometer == "" || requestStatus == "Open")
     //    {
     //        alert("Please provide the needed information.\nYou need to close to this ticket.");
     //        return false;
     //    } 	
			




		

	return true;
}
</script>
