 ​​​​​​​​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">

var issue_id;
var status;
var purchase_status;
var purchase_temp;
var ceo_temp;

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

var purchaser_status = $('select[id=Purchaser_x0020_Status_0779b27d-d787-454d-9eba-458f70b9dfea_$DropDownChoice]').val();
var ceo_approval = $('select[id=CEO_x0020_Approval_10933744-fed0-4344-8529-986f8351f8d5_$DropDownChoice]').val();
var vp_approval = $('select[id=VP_x0020_Approval_cf70f3f8-5ea5-4dc3-aa73-a59deeab2245_$DropDownChoice]').val();
var finance_status = $('select[id=Finance_x0020_Status_f95efa3a-a9da-4a70-9e74-2f1240bc61d3_$DropDownChoice]').val();

    if(purchaser_status=="")//Purchasing Officer | Admin Assistant
    {
    
	    if(targetUser=="lendiec" || targetUser=="danteb" || targetUser=="litoa" ){
	    SPUtility.GetSPField('Purchaser Status').MakeEditable();
	    SPUtility.ShowSPField('Purchaser Status');
	    }else{
	    SPUtility.ShowSPField('Purchaser Status');
	    }
    
    }
    else if(purchaser_status=="For Purchasing")
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
		    
		    else if(vp_approval=="Approved" && ceo_approval =="" ) {
		    
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

    $("input[id='ctl00_ctl42_g_8a7dde06_7827_4a7e_91dc_b7568e928a13_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

	    }
	    


    
    }else
    {
    SPUtility.ShowSPField('Finance Status');
		    SPUtility.ShowSPField('Purchaser Status');
		    SPUtility.ShowSPField('CEO Approval');
		    SPUtility.ShowSPField('VP Approval');

    }
    
    if(ceo_approval=="Approved" && purchaser_status=="For Purchasing" )//Purchaser to Closed
    {
    SPUtility.GetSPField('CEO Approval').MakeReadOnly();
    
    if(targetUser=="lendiec" || targetUser=="danteb" || targetUser=="litoa"){
    SPUtility.GetSPField('Purchaser Status').MakeEditable();
    

    SPUtility.ShowSPField('CEO Approval');
    SPUtility.ShowSPField('Purchaser Status');

    }else{
    SPUtility.ShowSPField('CEO Approval');
    SPUtility.ShowSPField('Purchaser Status');
    }
    
    }

    else if(purchaser_status=="Closed" || ceo_approval=="Rejected" || vp_approval=="Rejected")
    {
    	SPUtility.ShowSPField('Finance Status');
		SPUtility.ShowSPField('Purchaser Status');
		SPUtility.ShowSPField('CEO Approval');
		SPUtility.ShowSPField('VP Approval');

    $("input[id='ctl00_ctl42_g_8a7dde06_7827_4a7e_91dc_b7568e928a13_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

    
    }    
    
     
  
 
}

function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl42_g_8a7dde06_7827_4a7e_91dc_b7568e928a13_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
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
//-------------------------------------


document.getElementById("Document_x0020_No_x002e__e5782e89-ded6-4312-86f1-de22d77aba8e_$TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("Document_x0020_No_x002e__e5782e89-ded6-4312-86f1-de22d77aba8e_$TextField").size = "11";

$("input[id='Document_x0020_No_x002e__e5782e89-ded6-4312-86f1-de22d77aba8e_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

$("input[id='Revision_576b25f9-ad66-4042-a4af-48b0905687a7_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

$("input[id='Cheque_x002f_Cash_x0020_Issued_x_0bf562d8-ed96-40c1-b5ca-316225979fa7_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

  
  purchase_status= $('select[id=Purchaser_x0020_Status_0779b27d-d787-454d-9eba-458f70b9dfea_$DropDownChoice]').val();

  $('select[id=Purchaser_x0020_Status_0779b27d-d787-454d-9eba-458f70b9dfea_$DropDownChoice]').change( function() {
   purchase_status= $('select[id=Purchaser_x0020_Status_0779b27d-d787-454d-9eba-458f70b9dfea_$DropDownChoice]').val();
   
  if(purchase_status=="For Purchasing" ){
  SPUtility.ShowSPField('Actual Price');
  
  }else if(purchase_status=="Closed" && ceo_temp ==""){
  SPUtility.HideSPField('Actual Price');
  
  
  }else if(purchase_status=="Closed" && ceo_temp=="Approved"){
  SPUtility.ShowSPField('Actual Price');
  
  }else if(purchase_status==""){
  SPUtility.HideSPField('Actual Price');
  
  }
  
  });
  

})

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

//SPUtility.GetSPField('Duration (Request to Closed)').MakeReadOnly();
//SPUtility.HideSPField('Duration (Request to Closed)');

  purchase_temp= $('select[id=Purchaser_x0020_Status_0779b27d-d787-454d-9eba-458f70b9dfea_$DropDownChoice]').val();
  ceo_temp= $('select[id=CEO_x0020_Approval_10933744-fed0-4344-8529-986f8351f8d5_$DropDownChoice]').val();
  vp_temp= $('select[id=VP_x0020_Approval_cf70f3f8-5ea5-4dc3-aa73-a59deeab2245_$DropDownChoice]').val();
  finance_temp= $('select[id=Finance_x0020_Status_f95efa3a-a9da-4a70-9e74-2f1240bc61d3_$DropDownChoice]').val();

  
if(purchase_temp!=""  || ceo_temp!= "" || vp_temp!= "" || finance_temp!= ""  ){
  SPUtility.ShowSPField('Actual Price');
$("input[id='Actual_x0020_Price_4014596b-417c-47f3-b1e4-0e77da977193_$CurrencyField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
  }
  
  if(purchase_temp=="For Purchasing" && ceo_temp == "" ){
 // SPUtility.ShowSPField('CEO Approval');
  
//$("select[id='Purchaser_x0020_Status_0779b27d-d787-454d-9eba-458f70b9dfea_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');
 
  }
  
if(purchase_temp=="For Purchasing" && ceo_temp == "Approved" ){
  //SPUtility.ShowSPField('CEO Approval');
  
  //$("select[id='CEO_x0020_Approval_10933744-fed0-4344-8529-986f8351f8d5_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');
 
}

if(purchase_temp=="For Purchasing" && ceo_temp == "Rejected" ){
 // SPUtility.ShowSPField('CEO Approval');
  
  //$("select[id='Purchaser_x0020_Status_0779b27d-d787-454d-9eba-458f70b9dfea_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');
  //$("select[id='CEO_x0020_Approval_10933744-fed0-4344-8529-986f8351f8d5_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');
 
}

if(purchase_temp=="Closed" && ceo_temp == "Approved" ){
 // SPUtility.ShowSPField('CEO Approval');
  
 // $("select[id='Purchaser_x0020_Status_0779b27d-d787-454d-9eba-458f70b9dfea_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');
 // $("select[id='CEO_x0020_Approval_10933744-fed0-4344-8529-986f8351f8d5_$DropDownChoice']").attr('disabled', 'disabled').css('background-color','#F6F6F6');
 
}


  
$("input[id='Requestor_x0027_s_x0020_Name_dd5a9d2b-c257-4120-a493-942b72e06a8d_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Department_x002f_Section_6a1eb13d-a297-4f9d-be58-1e58014d57d6_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

$("input[id='Item_051ad3d9-ed25-4389-9905-dddf75c2ef56FillInRadio']").attr('disabled', 'disabled');
$("input[id='Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Item_051ad3d9-ed25-4389-9905-dddf75c2ef56FillInText']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField").className = "ms-short ms-spellcheck-true";

document.getElementById("Items_x0020_Specification_65e5dbb6-acc6-4b4b-82c5-de291cdfc26c_$TextField_inplacerte").contentEditable = "false";
$("div[id='Items_x0020_Specification_65e5dbb6-acc6-4b4b-82c5-de291cdfc26c_$TextField_topDiv']").css('background-color','#F6F6F6');
$("div[id='Items_x0020_Specification_65e5dbb6-acc6-4b4b-82c5-de291cdfc26c_$TextField_inplacerte']").css('background-color','#F6F6F6');
  

})


function PreSaveAction()

{

var get_actual_price = $('input[id=Actual_x0020_Price_4014596b-417c-47f3-b1e4-0e77da977193_$CurrencyField]').val();

 if(purchase_status=="For Purchasing" && get_actual_price=="" || purchase_status=="For Review" && get_actual_price==""){
  alert("Please add Actual Price.");
  return false;
  }else
  {
  return true;
  }


}




</script>​​​​​​​​
​​​​