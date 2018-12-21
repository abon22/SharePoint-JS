<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">

var purchaser_status;


var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

function init(){
  //alert("Init running...");

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));



 }

 function onQuerySucceeded() {

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;

var purchaser_status = $('select[id=Status_3f277a5c-c7ae-4bbe-9d44-0456fb548f94_$DropDownChoice]').val();
var ceo_approval = $('select[id=Executive_x0020_Status_e66cc29a-ca24-4366-8360-8765c38d977a_$DropDownChoice]').val();
var vp_approval = $('select[id=VP_x0020_Approval_91ae899f-2430-410b-afcc-f297d76cdebf_$DropDownChoice]').val();
var finance_status = $('select[id=Finance_x0020_Status_732597d1-5806-407d-87cf-6a4a7b4918ab_$DropDownChoice]').val();



    if(purchaser_status=="Forwarded")//Purchasing Officer | Admin Assistant
    {

	    if(targetUser=="lendiec" || targetUser=="danteb" || targetUser=="litoa"  ){
	    SPUtility.GetSPField('Purchaser Status').MakeEditable();
	    SPUtility.ShowSPField('Purchaser Status');
	    }else{
	    SPUtility.ShowSPField('Purchaser Status');
	    }
}
    else if(purchaser_status=="For Purchasing")//if purchasing
    {

		if(finance_status=="" ){

		    if(targetUser=="cherryy" || targetUser=="jestinel" || targetUser=="shiennar" || targetUser=="litoa"){
		    SPUtility.GetSPField('Finance Status').MakeEditable();

		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Purchaser Status');

		    }else{
		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Purchaser Status');
		    }
	    }
	    else if(finance_status=="Budgeted"){

	    if(ceo_approval=="" ){

		    if(targetUser=="artems" || targetUser=="aysoukhomlinov" ||  targetUser=="litoa"){
		    SPUtility.GetSPField('CEO Approval').MakeEditable();


		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('CEO Approval');

		    }else{
		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('CEO Approval');
		    }

		    }

		    else{

		    }



	    }
	    else if(finance_status=="Unbudgeted" ){
	    	if(vp_approval=="" ){

		    if(targetUser=="mithis" || targetUser=="litoa"){
		    SPUtility.GetSPField('VP Approval').MakeEditable();

		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('VP Approval');

		    }else{
		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('VP Approval');
		    }

		    }

		    else if(vp_approval=="Approved" && ceo_approval =="") {

		    if(targetUser=="artems"  || targetUser=="aysoukhomlinov" || targetUser=="litoa"){
		    SPUtility.GetSPField('CEO Approval').MakeEditable();

		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('VP Approval');
		    SPUtility.ShowSPField('CEO Approval');

		    }else{
		    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('CEO Approval');
		    SPUtility.ShowSPField('VP Approval');
		    }




		    }else
    {
    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('CEO Approval');
		    SPUtility.ShowSPField('VP Approval');

    }




	    }else{
              SPUtility.ShowSPField('Finance Status');
    SPUtility.ShowSPField('Purchaser Status');
    SPUtility.ShowSPField('CEO Approval');
    SPUtility.ShowSPField('VP Approval');

    $("input[id='ctl00_ctl42_g_74159a94_1031_4051_836a_79ac1caf077b_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
      }




    }else
    {
    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('CEO Approval');
		    SPUtility.ShowSPField('VP Approval');

    }//end if purchasing


    if(ceo_approval=="Approve" && purchaser_status=="For Purchasing" )//Purchaser to Closed
    {

    if(targetUser=="melodyr" || targetUser=="danteb" || targetUser=="litoa" ){
    SPUtility.GetSPField('Purchaser Status').MakeEditable();

    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('CEO Approval');
		    SPUtility.ShowSPField('VP Approval');
		    SPUtility.ShowSPField('Finance Status');

    }else{
    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('CEO Approval');
		    SPUtility.ShowSPField('VP Approval');
		    SPUtility.ShowSPField('Finance Status');
		    }

    }

    else if(purchaser_status=="Closed" || ceo_approval=="Rejected" || vp_approval=="Rejected")
    {
    //SPUtility.GetSPField('Purchaser Status').MakeEditable();
    	SPUtility.ShowSPField('Finance Status');
		SPUtility.ShowSPField('Purchaser Status');
		SPUtility.ShowSPField('CEO Approval');
		SPUtility.ShowSPField('VP Approval');

    $("input[id='ctl00_ctl42_g_74159a94_1031_4051_836a_79ac1caf077b_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


    }




}

function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());

    $("input[id='ctl00_ctl42_g_b1c51ed8_2c16_469e_81e0_73d40d7e4e96_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}





$(function() {

SPUtility.GetSPField('CEO Approval').MakeReadOnly();
SPUtility.HideSPField('CEO Approval');

SPUtility.GetSPField('VP Approval').MakeReadOnly();
SPUtility.HideSPField('VP Approval');

SPUtility.GetSPField('Finance Status').MakeReadOnly();
SPUtility.HideSPField('Finance Status');


  SPUtility.GetSPField('Purchaser Status').MakeReadOnly();
SPUtility.HideSPField('Purchaser Status');

//------change Save to Submit---------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");


        document.getElementById("Document_x0020_No_x002e__73576400-145d-4cae-9448-507ef5f6ced1_$TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("Document_x0020_No_x002e__73576400-145d-4cae-9448-507ef5f6ced1_$TextField").size = "11";

$("input[id='Document_x0020_No_x002e__73576400-145d-4cae-9448-507ef5f6ced1_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

$("input[id='Revision_a59d3026-ebbc-45ab-a193-2f00e0413dd3_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');



//-------------------------------------

var from_cal = document.getElementById("Date_x0020_Needed_e7ec99f2-89ec-4acc-88d4-f7b8297b053a_$DateTimeFieldDateDatePickerImage");
from_cal.src = "";
from_cal.alt = "";

  SPUtility.HideSPField('Actual Price');
  SPUtility.HideSPField('Remarks');
  SPUtility.HideSPField('CEO Approval');

  SPUtility.HideSPField('Date and Time Created');
  SPUtility.HideSPField('Duration (Executive Approve/Reject)');
  SPUtility.HideSPField('Duration (Finance Approve/Reject/Closed)');
  SPUtility.HideSPField('Date and Time Created (For Purchasing)');

 purchaser_status= $('select[id=Status_3f277a5c-c7ae-4bbe-9d44-0456fb548f94_$DropDownChoice]').val();
 executive_status= $('select[id=Executive_x0020_Status_e66cc29a-ca24-4366-8360-8765c38d977a_$DropDownChoice]').val();









 //-------------------------------------------------------------------------------------------------------


   $('select[id=Status_3f277a5c-c7ae-4bbe-9d44-0456fb548f94_$DropDownChoice]').change( function() {
   purchaser_status= $('select[id=Status_3f277a5c-c7ae-4bbe-9d44-0456fb548f94_$DropDownChoice]').val();

  if(purchaser_status=="For Purchasing" ){
  SPUtility.ShowSPField('Actual Price');

  }else if(purchaser_status=="Closed" && ceo_temp ==""){
  SPUtility.HideSPField('Actual Price');


  }else if(purchaser_status=="Closed" && ceo_temp=="Approved"){
  SPUtility.ShowSPField('Actual Price');

  }else if(purchaser_status==""){
  SPUtility.HideSPField('Actual Price');

  }

  });



 //-------------------------------------------------------------------------------------------------------






})


var purchase_temp,ceo_temp, vp_temp,finance_temp;

function getQueryString() {
  var assoc = new Array();
  var queryString = unescape(location.search.substring(1));
  var keyValues = queryString.split('&');
  for (var i in keyValues) {
    var key = keyValues[i].split('=');
    assoc[key[0]] = key[1];
    }
  return assoc;
}

 $(document).ready(function()
{

SPUtility.HideSPField('Actual Price');
SPUtility.HideSPField('CEO Approval');

SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
SPUtility.HideSPField('Date and Time Created');
//------------------------------------------------------------------------------------

$("input[id='Requestor_x0027_s_x0020_Name_5c6246d0-388a-407b-9fa8-7591eecdd30a_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Department_x002f_Section_c553ed45-58e8-489f-b68c-f5f92677912d_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("textarea[id='Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("textarea[id='Purpose_abd6b598-3804-4a18-93f1-e6b4b1302059_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Estimated_x0020_Price_180a060a-bf49-4efd-b412-ee10561313b9_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Date_x0020_Needed_e7ec99f2-89ec-4acc-88d4-f7b8297b053a_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

$("select[id='Priority_a8eb573e-9e11-481a-a8c9-1104a54b2fbd_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');

 purchase_temp= $('select[id=Purchaser_x0020_Status_0779b27d-d787-454d-9eba-458f70b9dfea_$DropDownChoice]').val();
  ceo_temp= $('select[id=CEO_x0020_Approval_10933744-fed0-4344-8529-986f8351f8d5_$DropDownChoice]').val();
  vp_temp= $('select[id=VP_x0020_Approval_cf70f3f8-5ea5-4dc3-aa73-a59deeab2245_$DropDownChoice]').val();
  finance_temp= $('select[id=Finance_x0020_Status_f95efa3a-a9da-4a70-9e74-2f1240bc61d3_$DropDownChoice]').val();


purchase_temp = $('select[id=Status_3f277a5c-c7ae-4bbe-9d44-0456fb548f94_$DropDownChoice]').val();
ceo_temp = $('select[id=Executive_x0020_Status_e66cc29a-ca24-4366-8360-8765c38d977a_$DropDownChoice]').val();
vp_temp = $('select[id=VP_x0020_Approval_91ae899f-2430-410b-afcc-f297d76cdebf_$DropDownChoice]').val();
finance_temp = $('select[id=Finance_x0020_Status_732597d1-5806-407d-87cf-6a4a7b4918ab_$DropDownChoice]').val();
var actual_temp = $('select[id=Actual_x0020_Price_43ac142c-63be-4732-b084-d24e708e835c_$CurrencyField]').val();

if(purchase_temp!="Forwarded"  || ceo_temp!= "" || vp_temp!= "" || finance_temp!= ""  ){
  SPUtility.ShowSPField('Actual Price');
$("input[id='Actual_x0020_Price_43ac142c-63be-4732-b084-d24e708e835c_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
  }




})



function PreSaveAction()
{

//--------------------------------------------------

var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-"
                + currentdate.getDate() + " "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();


var created_date_time = $("input[title='Date and Time Created']").val();
var timeAgo = jQuery.timeago(new Date(created_date_time));

var created_date_time_purchasing = $("input[title='Date and Time Created (For Purchasing)']").val();
var timeAgo_purchasing = jQuery.timeago(new Date(created_date_time_purchasing ));

//----------------------------------------------------

 executive_status= $('select[id=Executive_x0020_Status_e66cc29a-ca24-4366-8360-8765c38d977a_$DropDownChoice]').val();
 finance_status = $('select[id=Status_3f277a5c-c7ae-4bbe-9d44-0456fb548f94_$DropDownChoice]').val();

var duration_finance_a_r_c = $("input[title='Duration (Finance Approve/Reject/Closed)']").val();
var duration_executive_a_r = $("input[title='Duration (Executive Approve/Reject)']").val();
var purchasing_date_time = $("input[title='Date and Time Created (For Purchasing)']").val();


if(finance_status == "For Purchasing" && purchasing_date_time==""){

document.getElementById('Date_x0020_and_x0020_Time_x0020_0_bb78f19e-7c65-468b-9977-0fcbc4cd11db_$TextField').value = datetime ;

}

if(executive_status== "Approve" && purchasing_date_time!="" || executive_status=="Reject" && purchasing_date_time!="" )
{

document.getElementById('Duration_x0020__x0028_Executive__084a7979-e6b9-4d2d-a316-0b7945c5291c_$TextField').value = timeAgo_purchasing ;

}

var get_actual_price = $('input[id=Actual_x0020_Price_43ac142c-63be-4732-b084-d24e708e835c_$CurrencyField]').val();

 if(purchaser_status=="For Purchasing" && get_actual_price==""){
  alert("Please add Actual Price.");
  return false;
  }else
  {
  return true;
  }

}



</script>​​​​​​​​​​​​​​​​​​​​​​
