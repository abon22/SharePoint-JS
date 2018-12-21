<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/SiteAssets/Scripts/spjs-utility.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">


var userProfileProperties;

//ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

function checkuserprofile()
{
  //alert("Init running...");

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded2), Function.createDelegate(this,this.onQueryFailed2));

	$("input[id='Request_x0020_Status_882ec1c1-3052-43eb-90a6-7d54b3084f09_$TextField']").attr('hidden', 'hidden');
}

  function onQuerySucceeded2() {

var account = targetUser.get_loginName();
targetUser_temp = account.substring(account.indexOf("|") + 10);
targetUser = targetUser_temp;
//alert(targetUser);
var IT_AVP_Status = $("select[id='CEO_x0020_Approval_e9287364-845f-4fc2-b8ac-72b69ec9286a_$DropDownChoice']").val();
var IT_Technician_Status = $("select[id='Finance_x0020_Status_2a93b847-ed57-41d6-b465-5535c5b999c1_$DropDownChoice']").val();

var IT_AVP = 'idrianb';
var technician = 'idrianb';


    if(IT_AVP_Status=="")//IT-AVP Approval
    {
    	if(targetUser == IT_AVP){


   		    SPUtility.GetSPField('IT-AVP Approval').MakeEditable();
    	    SPUtility.ShowSPField('IT-AVP Approval');

          SPUtility.GetSPField('IT-Technician Status').MakeReadOnly();
		      SPUtility.HideSPField('IT-Technician Status');
    	}
    	else{
  		    SPUtility.ShowSPField('IT-AVP Approval');
    	     $("input[id='ctl00_ctl43_g_57944548_6ef5_4692_9f69_4f7761e1651d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    	     $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
    	}
    }
    else if(IT_AVP_Status=="Approved" && IT_Technician_Status==""){
    	if(targetUser == technician || targetUser == technician || targetUser == technician){
    	   SPUtility.ShowSPField('IT-AVP Approval');
    	   SPUtility.GetSPField('IT-Technician Status').MakeEditable();
    	   SPUtility.GetSPField('Equipments').MakeEditable();
    	   SPUtility.ShowSPField('IT-Technician Status');
      	 SPUtility.GetSPField('IT-AVP Approval').MakeReadOnly();
    	}
    	else{
       	SPUtility.ShowSPField('IT-AVP Approval');
       	SPUtility.ShowSPField('IT-Technician Status');

    	  $("input[id='ctl00_ctl43_g_57944548_6ef5_4692_9f69_4f7761e1651d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    	  $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
    	}
    }

    else if(IT_AVP_Status=="Approved" && IT_Technician_Status=="Available"){
    	if(targetUser == technician || targetUser == technician || targetUser == technician){

    	SPUtility.ShowSPField('IT-AVP Approval');
      SPUtility.ShowSPField('IT-Technician Status');
    	SPUtility.GetSPField('IT-Technician Status').MakeEditable();
		  SPUtility.GetSPField('Employee Name').MakeReadOnly();
		  SPUtility.GetSPField('Department/Section').MakeReadOnly();
		  SPUtility.GetSPField('Purpose').MakeReadOnly();
		  SPUtility.GetSPField('Equipments').MakeEditable();
		  SPUtility.GetSPField('Date Equipment Picked Up').MakeEditable();
		  SPUtility.GetSPField('Date Equipment Returned').MakeEditable();
		  SPUtility.GetSPField('Reference Number').MakeReadOnly();
		  SPUtility.GetSPField('Comments').MakeReadOnly();

    	//$("input[id='ctl00_ctl43_g_57944548_6ef5_4692_9f69_4f7761e1651d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    	$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
    	$("input[id='ctl00_ctl43_g_57944548_6ef5_4692_9f69_4f7761e1651d_ctl00_toolBarTbl_RightRptControls_ctl01_ctl00_diidIOGoBack']").attr('hidden', 'hidden');
    	$("div[id='s4-ribbonrow']").css("display","none");
    	}
    }
    else if(IT_AVP_Status=="Approved" && IT_Technician_Status=="Closed"){
      if(targetUser==technician || targetUser==technician || targetUser==technician){

      SPUtility.ShowSPField('IT-AVP Approval');
      SPUtility.ShowSPField('IT-Technician Status');
      SPUtility.GetSPField('Employee Name').MakeReadOnly();
      SPUtility.ShowSPField('Employee Name');
      SPUtility.GetSPField('Department/Section').MakeReadOnly();
      SPUtility.ShowSPField('Department/Section');
      SPUtility.GetSPField('Purpose').MakeReadOnly();
      SPUtility.ShowSPField('Purpose');
    //SPUtility.GetSPField('Equipments').MakeReadOnly();
    SPUtility.ShowSPField('Equipments');
    SPUtility.ShowSPField('Date Equipment Picked Up');
    SPUtility.ShowSPField('Date Equipment Returned');
    SPUtility.GetSPField('Reference Number').MakeReadOnly();
    SPUtility.GetSPField('Comments').MakeReadOnly();

      //$("input[id='ctl00_ctl43_g_57944548_6ef5_4692_9f69_4f7761e1651d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
      // $("input[id='ctl00_ctl43_g_57944548_6ef5_4692_9f69_4f7761e1651d_ctl00_toolBarTbl_RightRptControls_ctl01_ctl00_diidIOGoBack']").attr('hidden', 'hidden');
      $("input[id='ctl00_ctl43_g_57944548_6ef5_4692_9f69_4f7761e1651d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
      $("div[id='s4-ribbonrow']").css("display","none");
      }
    }
    else if(IT_AVP_Status=="Approved" && IT_Technician_Status=="Unavailable"){

		SPUtility.ShowSPField('IT-AVP Approval');
		SPUtility.ShowSPField('IT-Technician Status');

        $("input[id='ctl00_ctl43_g_57944548_6ef5_4692_9f69_4f7761e1651d_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
        $("input[id='ctl00_ctl43_g_57944548_6ef5_4692_9f69_4f7761e1651d_ctl00_toolBarTbl_RightRptControls_ctl01_ctl00_diidIOGoBack']").attr('hidden', 'hidden');

    }
    else if(IT_AVP_Status=="Rejected" && IT_Technician_Status=="")
    {

		  SPUtility.ShowSPField('IT-AVP Approval');
    	SPUtility.ShowSPField('IT-Technician Status');

    	$("input[id='ctl00_ctl43_g_8363f22a_0e7e_4141_95bf_2ec5ad6d8cbc_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    	$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

    }
}

function onRequestFail2(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());

    $("input[id='ctl00_ctl43_g_8363f22a_0e7e_4141_95bf_2ec5ad6d8cbc_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}

//--------Change 'Save' to 'Submit'-----------------
$(function() {

    SPUtility.GetSPField('IT-AVP Approval').MakeReadOnly();
    SPUtility.HideSPField('IT-AVP Approval');

    SPUtility.GetSPField('IT-Technician Status').MakeReadOnly();
    SPUtility.HideSPField('IT-Technician Status');
//SPUtility.HideSPField('Reference Number');
    SPUtility.HideSPField('Date and Time Created');

        var inputcontrols = document.getElementsByTagName("input");
        for(i = 0; i<inputcontrols.length; i++)
        {
            if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
                inputcontrols[i].value = "Submit";
        }
        var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
        ribbonSave.text("Submit");

      //$("#ExpenseItemFilter").hide();
       // $("#created_date_and_time").hide();

var check_IT_AVP_Status = $("select[id='CEO_x0020_Status_aa7b2b8f-c43e-40d6-af1b-95627ebd9631_$DropDownChoice']").val();
if(check_IT_AVP_Status!='')
{
     var from_cal = document.getElementById("Date_x0020_Equipment_x0020_Picke_11fa92c7-0c13-429a-b590-0119edb402cf_$DateTimeFieldDate");
        from_cal.src = "";
        from_cal.alt = "";
//SPUtility.ShowSPField('Item Expenses');

//SPUtility.GetSPField('Date').MakeReadOnly();
//SPUtility.ShowSPField('Date');

SPUtility.GetSPField('Employee Name').MakeReadOnly();
SPUtility.ShowSPField('Employee Name');

SPUtility.GetSPField('Department/Section').MakeReadOnly();
SPUtility.ShowSPField('Department/Section');

SPUtility.GetSPField('Purpose').MakeReadOnly();
SPUtility.ShowSPField('Purpose');

SPUtility.GetSPField('Equipments').MakeReadOnly();
SPUtility.ShowSPField('Equipments');

SPUtility.GetSPField('Date Equipment Picked Up').MakeReadOnly();
SPUtility.GetSPField('Date Equipment Returned').MakeReadOnly();

SPUtility.GetSPField('Reference Number').MakeReadOnly();

//SPUtility.GetSPField('I understand that it is my responsibility to').MakeReadOnly();

$("div[id='s4-ribbonrow']").css("display","none");

$("input[id='I_x0020_understand_x0020_that_x0_d871b1e4-0f78-419b-bf77-8c9eb391e8f0_MultiChoiceOption_0']").attr('disabled', 'disabled');
$("input[id='I_x0020_understand_x0020_that_x0_d871b1e4-0f78-419b-bf77-8c9eb391e8f0_MultiChoiceOption_1']").attr('disabled', 'disabled');
$("input[id='I_x0020_understand_x0020_that_x0_d871b1e4-0f78-419b-bf77-8c9eb391e8f0_MultiChoiceOption_2']").attr('disabled', 'disabled');
$("input[id='I_x0020_understand_x0020_that_x0_d871b1e4-0f78-419b-bf77-8c9eb391e8f0_MultiChoiceOption_3']").attr('disabled', 'disabled');

checkuserprofile();

}

  });


function PreSaveAction()

{


if($("input[id='Date_x0020_and_x0020_Time_x0020__f9fb9bc1-97a5-48bc-96d3-8ff5c90cb703_$TextField']").val() ==''){
var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-"
                + currentdate.getDate() + " "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();
document.getElementById('Date_x0020_and_x0020_Time_x0020__f9fb9bc1-97a5-48bc-96d3-8ff5c90cb703_$TextField').value = datetime;

}


//if($('select[id=ctl00_ctl43_g_9d719ba5_757b_45ee_9d47_c0ffa226bbdf_ff71_ctl00_DropDownChoice]').val() ==''){

 // $('select[id=ctl00_ctl43_g_9d719ba5_757b_45ee_9d47_c0ffa226bbdf_ff71_ctl00_DropDownChoice]').val('In Progress');
 // return true;


//}
var get_IT_AVP_Status_2 = $("select[id='CEO_x0020_Approval_e9287364-845f-4fc2-b8ac-72b69ec9286a_$DropDownChoice']").val();

if(get_IT_AVP_Status_2 ==''){

  alert("Please change the CEO Aproval to Approved/Rejected.");
  return false;

}
// else if($('select[id=ctl00_ctl43_g_9d719ba5_757b_45ee_9d47_c0ffa226bbdf_ff71_ctl00_DropDownChoice]').val() =='Approved' && $('select[id=ctl00_ctl43_g_9d719ba5_757b_45ee_9d47_c0ffa226bbdf_ff81_ctl00_DropDownChoice]').val() ==''){
//   alert("Please change the IT-Technician Status to Closed.");
//   return false;
// }
else{

  return true;
}

}
</script> ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
