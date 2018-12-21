<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/SiteAssets/Scripts/spjs-utility.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script>

<script type="text/javascript">

//function to open pages in a dialog
function openInDialog(dlgWidth, dlgHeight, dlgAllowMaximize,dlgShowClose,needCallbackFunction, pageUrl) 
{    
    var options = { url: pageUrl, width: dlgWidth, height: dlgHeight, allowMaximize: dlgAllowMaximize,
        showClose: dlgShowClose   
    };
    
  if(needCallbackFunction)
  {
    options.dialogReturnValueCallback = Function.createDelegate(null, CloseDialogCallback);
  }
    SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
}

function CloseDialogCallback(dialogResult, returnValue)
{
  //if user click on OK or Save
     if(dialogResult == SP.UI.DialogResult.OK)
     {  // refresh parent page
    //SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.RefreshPage', SP.UI.DialogResult.OK); 
//document.getElementById('ExpenseItemFilter5').empty();   
ExecuteOrDelayUntilScriptLoaded(checkuserprofile,'sp.js');
ExecuteOrDelayUntilScriptLoaded(budget_expense_item,'sp.js');
     }
     // if user click on Close or Cancel
     else if(dialogResult == SP.UI.DialogResult.cancel)
     {  // Do Nothing or add any logic you want 
     }
     else
     {//alert("else " + dialogResult);
     }
}


</script>


<script type="text/javascript">


var userProfileProperties;

var targetUser;




function checkuserprofile(){

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded2), Function.createDelegate(this,this.onQueryFailed2));



 }


 function get_forms(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Sales Forecast Form');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query></View>");
        // caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query></View>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback2, onFailedCallback2);

 }

 var created_by;
 var immediate_head;

var fin_approval_load ="";

function onSucceededCallback2(sender, args) {
      var enumerator = returnedItems.getEnumerator();
      while (enumerator.moveNext()) {

      var listItem = enumerator.get_current();

      var id = listItem.get_item('ID') 
        
        if(itemId==id){

          created_by= listItem.get_item('Author').get_lookupValue();
        
        }//end if
      }  //end while


	//var fin_approval = $("select[id='ctl00_ctl43_g_963cb4ad_b560_43ba_a1aa_b0fcc0bfde03_ff61_ctl00_DropDownChoice']").val();
	//fin_approval_load=fin_approval;
	

	//var ceo_approval = $("select[id='ctl00_ctl43_g_963cb4ad_b560_43ba_a1aa_b0fcc0bfde03_ff71_ctl00_DropDownChoice']").val();


//console.log("fin_approval: "+fin_approval);

  if(document.getElementById('ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_ff81_ctl00_ctl00_BooleanField').checked) {
    $("#ctl00_ctl43_g_963cb4ad_b560_43ba_a1aa_b0fcc0bfde03_ff91_ctl00_ctl00_TextField").hide();
    $("#fin_approval_id").hide();
    $("div[id='ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_ff51_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false');
    $(".ms-propertysheet").css("visibility","hidden")
    $("input[id='ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
 


  }else{

    

    $("input[id='ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
  }


//display_assets();
}




    function onFailedCallback2(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: ';
      markup += 'Message: ' + args.get_message() + '';
      //Display the details
      alert(markup );

      $("input[id='ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }





 //var fin_status;
 //var immediate_status;

  function onQuerySucceeded2() {

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;

SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');







}

var targetUser2;
function getUserProperties() {
targetUser2 = 'hoitcebu\\'+targetUser;

var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
  

    var profilePropertyNames = ["PreferredName"];
       var userProfilePropertiesForUser = 
        new SP.UserProfiles.UserProfilePropertiesForUser(
            clientContext,
            targetUser2,
            profilePropertyNames);

    userProfileProperties = peopleManager.getUserProfilePropertiesFor(
        userProfilePropertiesForUser);

    // Load the UserProfilePropertiesForUser object and send the request.
    clientContext.load(userProfilePropertiesForUser);
    clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);

   

}

var get_preferredname;
function onRequestSuccess() {
    get_preferredname = userProfileProperties[0];
   get_forms();
    
}



  function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}


function onRequestFail2(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}


$(document).ready(function() {


  // $(".ms-cui-tabContainer").find('ul').append("<li id ='add_new_ribbon_id'class='ms-cui-group' id='Ribbon.ListForm.Edit.SpellCheck' unselectable='on'><span class='ms-cui-groupContainer' unselectable='on'><span class='ms-cui-groupBody' unselectable='on'><span class='ms-cui-layout' id='Ribbon.ListForm.Edit.SpellCheck-LargeMedium' unselectable='on'><span class='ms-cui-section' id='Ribbon.ListForm.Edit.SpellCheck-LargeMedium-0' unselectable='on'><span class='ms-cui-row-onerow' id='Ribbon.ListForm.Edit.SpellCheck-LargeMedium-0-0' unselectable='on'><span class='ms-cui-ctl-large ' id='Ribbon.ListForm.Edit.SpellCheck.SpellCheck-Large' mscui:controltype='SplitButton' unselectable='on'><a onclick='return false;' href='javascript:;' unselectable='on' class='ms-cui-ctl-a1 ' role='button'><span class='ms-cui-ctl-a1Internal' unselectable='on'><span unselectable='on' class=' ms-cui-img-32by32 ms-cui-img-cont-float ms-cui-imageDisabled'><img onclick='openInDialog(1480,360,true,true,true,&#39;https://intranet.houseofit.com.au/Lists/Sales%20Item%20Sales%20Forecast/NewFormCopy.aspx?RootFolder=&amp;IsDlg=1&SFID="+itemId+"&#39;);' class='' style='top: -341px;left: -103px;' unselectable='on' alt='Spelling' src='/_layouts/15/1033/images/formatmap32x32.png?rev=23'></span></span></a><a onclick='return false;' href='javascript:;' unselectable='on' class='ms-cui-ctl-a2 ' aria-haspopup='true' role='button'><span class='ms-cui-ctl-largelabel' unselectable='on'>Add Sales</span></a></span></span></span></span></span><span class='ms-cui-groupTitle' unselectable='on'>Add</span></span><span class='ms-cui-groupSeparator' unselectable='on'></span></li>");  

var business_type = $("select[id='ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_ff101_ctl00_DropDownChoice']").val();
console.log("business_type:"+business_type);
 $("div[id='add_sales_btn']").html("<span class='ms-cui-ctl-large' style='border: #1BA1E2;border-style: solid;border-width: 0.14em;' id='Ribbon.ListForm.Edit.SpellCheck.SpellCheck-Large' mscui:controltype='SplitButton' unselectable='on'><a onclick='openInDialog(1480,360,true,true,true,&#39;https://intranet.houseofit.com.au/Lists/Sales%20Item%20Sales%20Forecast/NewFormCopy.aspx?RootFolder=&amp;IsDlg=1&SFID="+itemId+"&UNIT_TYPE="+business_type+"&#39;);' style='float:left;' href='javascript:;' unselectable='on' class='ms-cui-ctl-a1 ' role='button'><span class='ms-cui-ctl-a1Internal' unselectable='on'  style='display: inline;vertical-align: -webkit-baseline-middle;'><span unselectable='on' class=' ms-cui-img-32by32 ms-cui-img-cont-float ms-cui-imageDisabled'><img  class='' style='top: -341px;left: -103px;' unselectable='on' alt='Spelling' src='/_layouts/15/1033/images/formatmap32x32.png?rev=23'></span></span><span class='ms-cui-ctl-largelabel' style='display: inline;vertical-align: super;' unselectable='on'>Add Sales</span></a></span>");

  // $("div[id='append_add_entry']").html("<a onclick='openInDialog(1480,360,true,true,true,&#39;https://intranet.houseofit.com.au/Lists/Sales%20Item%20Sales%20Forecast/NewFormCopy.aspx?RootFolder=&amp;IsDlg=1&SFID="+itemId+"&#39;);' style='float:left;' href='javascript:;' unselectable='on' class='ms-cui-ctl-a1 ' role='button'><span unselectable='on' class=' ms-cui-img-32by32 ms-cui-img-cont-float ms-cui-imageDisabled'><img class='' style='top: -341px;left: -103px;' unselectable='on' alt='Spelling' src='/_layouts/15/1033/images/formatmap32x32.png?rev=23'></span>asdd</a>");
/*
  "<span class="ms-cui-ctl-large " style="border: #1BA1E2;border-style: solid;border-width: 0.14em;" id="Ribbon.ListForm.Edit.SpellCheck.SpellCheck-Large" mscui:controltype="SplitButton" unselectable="on"><a onclick="return false;" style="float:left;" href="javascript:;" unselectable="on" class="ms-cui-ctl-a1 " role="button"><span class="ms-cui-ctl-a1Internal" unselectable="on"><span unselectable="on" class=" ms-cui-img-32by32 ms-cui-img-cont-float ms-cui-imageDisabled"><img onclick="openInDialog(1480,360,true,true,true,'https://intranet.houseofit.com.au/Lists/Sales%20Item%20Sales%20Forecast/NewFormCopy.aspx?RootFolder=&amp;IsDlg=1&amp;SFID=27');" class="" style="top: -341px;left: -103px;" unselectable="on" alt="Spelling" src="/_layouts/15/1033/images/formatmap32x32.png?rev=23"></span></span></a><a style="float:right;"  onclick="openInDialog(1480,360,true,true,true,'https://intranet.houseofit.com.au/Lists/Sales%20Item%20Sales%20Forecast/NewFormCopy.aspx?RootFolder=&amp;IsDlg=1&amp;SFID=27');" href="javascript:;" unselectable="on" class="ms-cui-ctl-a2 " aria-haspopup="true" role="button"><span class="ms-cui-ctl-largelabel" style="padding-top: 12px!important;" unselectable="on">Add Expenses</span></a></span>"

*/

	//$("#tr_budget_plan_id").hide();



	$('#ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_ff81_ctl00_ctl00_BooleanField').change(function() {
     if(this.checked) {
	 //console.log("created_by: "+created_by);
	//  console.log("get_preferredname: "+get_preferredname);

          if(created_by == get_preferredname){
          $("input[id='ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_savebutton2_ctl00_diidIOSaveItem']").removeAttr('disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
          }else{

          }
          
        }else{
          $("input[id='ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
          $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
        }
});



});


  
//--------Change 'Save' to 'Submit'-----------------
$(function() {

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();

    }
}

//var html ="<tr><td width='400px' colspan='2'><div id='ExpenseItemFilter' style='border: thin solid rgb(210, 208, 221);'></div></td> </tr>";
	//$('.ms-formtable > tbody > tr').eq(5).before(html);
	$("#tr_budget_plan_id").hide(); 

	$("#fin_approval_id").hide();
	$("#ceo_approval_id").hide();


	$("input[title='Department Head Name Required Field']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
  $("input[title='Department/Section Required Field']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
  $("input[title='Sales for Year: Required Field']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

	$("select[title='Business Unit Type Required Field']").attr('disabled', 'disabled').css('background-color','#F6F6F6');


	if(document.getElementById('ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_ff81_ctl00_ctl00_BooleanField').checked) {
	$("#NoteHide").hide();
	$("#MSOZoneCell_WebPartWPQ4").hide();


	$("input[id='ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_ff81_ctl00_ctl00_BooleanField']").attr('disabled', 'disabled')
	$("#fin_approval_id").show();
	$("#item_buget_tr_load").hide(); 
	$("#tr_budget_plan_id").show(); 


    $("input[id='ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_savebutton2_ctl00_diidIOSaveItem']").attr('disabled', 'disabled');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");




	}//end checked

  
        var inputcontrols = document.getElementsByTagName("input");
        for(i = 0; i<inputcontrols.length; i++)
        {
            if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
                inputcontrols[i].value = "Submit";
        }
        var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
        ribbonSave.text("Submit");


 });

//------------------------------------

// List GUID or list display name of the current list
var thisListGuid = '{8B75E2E6-1451-4372-B42E-8AD67810E95A}';

// This code runs only if the ID parameter is omitted
if(GetUrlKeyValue('ID')==''){

  var lastID = getLastItemID();

  if(lastID!==''){
    var newURL = location.pathname+"?ID="+lastID;
    //alert(newURL);
    if(GetUrlKeyValue('IsDlg')==='1'){
      newURL+="&IsDlg=1";
    }
    location.href=newURL+"&Source=https://intranet.houseofit.com.au/Lists/Sales%20Forecast%20Form/My%20Sales%20Forecast.aspx";

    
  }
}

/********************************************
  Do not modify anything below this line
*********************************************/
function getLastItemID(){ 

	//console.log("aw");
  var queryBuffer = [];
    queryBuffer.push("<Where><Eq><FieldRef Name='Author' LookupId='TRUE' /><Value Type='User'>"+_spPageContextInfo.userId+"</Value></Eq></Where>");
    queryBuffer.push("<OrderBy><FieldRef Name='ID' Ascending='FALSE' /></OrderBy>");
  var res = spjs_QueryItems({listName:thisListGuid,query:queryBuffer.join(''),viewFields:['ID'],rowLimit:1});
  
  if(res.count<0){
    alert("An error occurred. Most likely the parameter \"thisListGuid\" is wrong.");
  }else if(res.count>0){
    return res.items[0].ID;
  }else{
    return '';
  }
}




var start_body = "<table  id='table_expense_id' cellspacing='0' class='ms-rteTable-default' style='width: 1320px;'> <tbody> <tr class='ms-rteTableEvenRow-default'> <td class=''  style='width: 63px;'> <strong>Edit</strong>​</td> <td class='ms-vb2' style='width: 20%;' > <span>​<strong>Client</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>Jan​</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Feb</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​Mar</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Apr</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​May</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Jun</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​Jul</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Aug</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​Sept</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Oct</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​Nov</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>Dec​</strong></span></td><td class='' style='width: 5.55556%;'> <span><strong>​Total</strong></span></td><td class='ms-vb2'> <span>​<strong>Delete</strong>​</span></td> </tr>";

         var start_body2 = "<table  id='table_expense_id2' cellspacing='0' class='ms-rteTable-default' style='width: 1320px;'> <tbody> <tr class='ms-rteTableEvenRow-default'> <td class='ms-vb2' style='width: 20%;' > <span>​<strong>Client</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>Jan​</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Feb</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​Mar</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Apr</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​May</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Jun</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​Jul</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Aug</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​Sept</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Oct</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​Nov</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>Dec​</strong></span></td><td class='' style='width: 5.55556%;'> <span><strong>​Total</strong></span></td></tr>";

         
         var end_body = "</tr> </tbody></table>";



ExecuteOrDelayUntilScriptLoaded(checkuserprofile,'sp.js');
ExecuteOrDelayUntilScriptLoaded(budget_expense_item,'sp.js');

var issue_id;
var status;
var itemId;
//var expense_reimburse_id;


var expense_item_returnedItems;
function budget_expense_item(){


itemId = GetUrlKeyValue("ID", false, location.href);


         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Sales Item (Sales Forecast)');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='SFID' /><Value Type='Number'>"+itemId+"</Value></Eq></Where><OrderBy><FieldRef Name='Price' Ascending='True' /></OrderBy></Query></View>");
         //Specify the query and load the list oject
        expense_item_returnedItems = list.getItems(caml);
         context.load(expense_item_returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback_sales_item, onFailedCallback);

 }

//------------------------------------------------------------------------------------------

// var siteUrl="https://intranet.houseofit.com.au";

   function del_comp_accessories(temp_id) {
    var get_expense_id = temp_id;
    var r = confirm("Are you sure you want to send the item to the site Recycle Bin?");

    if (r == true) {

    this.setitemId = get_expense_id;
    var ctx = new SP.ClientContext();
    var oList = ctx.get_web().get_lists().getByTitle('Sales Item (Sales Forecast)');
    this.ListItem = oList.getItemById(setitemId);
    ListItem.deleteObject();
    ctx.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded),Function.createDelegate(this, this.onQueryFailed));


    }


};


function onQuerySucceeded() {
  var getlastID = GetUrlKeyValue("ID", false, location.href);
  var getURL = location.pathname+"?ID="+getlastID;
  //location.href=getURL+"&Source=https%3A%2F%2Fintranet%2Ehouseofit%2Ecom%2Eau%2FLists%2FExpense%2520Reimbursement%2520Form%2FAllItems%2Easpx";
  //location.href=getURL+"&Source=https://intranet.houseofit.com.au/Lists/Forecasted%20Budget%20Plan/My%20Forecasted%20Budget%20Plan.aspx";

ExecuteOrDelayUntilScriptLoaded(checkuserprofile,'sp.js');
ExecuteOrDelayUntilScriptLoaded(budget_expense_item,'sp.js');


}
function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() +'\n' + args.get_stackTrace());
}


  var markup_comp_accessories="";
  var markup_comp_accessories2="";
  var total_comp_accessories="";
  var total_comp_accessories2="";
  var add_item_comp_accessories_html="";
  var is_have_comp_acc=0;




function onSucceededCallback_sales_item(sender, args) {

  var comp_acc_total=0;
  var comp_acc_jan=0;
  var comp_acc_feb=0;
  var comp_acc_mar=0;
  var comp_acc_apr=0;
  var comp_acc_may=0;
  var comp_acc_jun=0;
  var comp_acc_jul=0;
  var comp_acc_aug=0;
  var comp_acc_sep=0;
  var comp_acc_oct=0;
  var comp_acc_nov=0;
  var comp_acc_dec=0;


markup_comp_accessories="";
markup_comp_accessories2=""

  //checkuserprofile();

    Number.prototype.format = function(n, x) {
    var re = '(\\d)(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
  };


         var enumerator = expense_item_returnedItems.getEnumerator();
         var table = $('#ExpenseItemFilter');





        var temp_accounts="";

        var div_html = document.getElementById('ExpenseItemFilter5');
        var frmt_div = document.getElementById('ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_ff51_ctl00_ctl00_TextField_inplacerte');
        div_html.innerHTML = ""+start_body+""+end_body+"";
        frmt_div.innerHTML = ""+start_body2+""+end_body+"";

          var temp_tr = "";
          var temp_tr2 = "";
          var temp_expense_item="";
          var temp_expense_item2="";
          var count=0;
          var arr_accounts =[];

           var total=0;
        var total_jan=0;
        var total_feb=0;
        var total_mar=0;
        var total_apr=0;
        var total_may=0;
        var total_jun=0;
        var total_jul=0;
        var total_aug=0;
        var total_sep=0;
        var total_oct=0;
        var total_nov=0;
        var total_dec=0;
        var total_total=0;


        while (enumerator.moveNext()) {



            var listItem2 = enumerator.get_current();
            var id = listItem2.get_item('ID');
            var get_sale_forcast_id = listItem2.get_item('SFID');
            var unit_type = listItem2.get_item('Business_x0020_Unit_x0020_Type');
            var unit_type = listItem2.get_item('Business_x0020_Unit_x0020_Type');
            var asset_desc = listItem2.get_item('Asset_x0020_Description');

            var edit_url_comp_accessories = "<a href='#' onclick='openInDialog(1480,360,true,true,true,&#39;https://intranet.houseofit.com.au/Lists/Sales%20Item%20Sales%20Forecast/EditFormCopy.aspx?RootFolder=&amp;IsDlg=1&ID="+id+"&amp;SFID="+itemId+"&#39;);'><img border='0' alt='edit' src='/_layouts/15/images/edititem.gif?rev=23'></a>";

            var del_url_comp_accessories = "<a onclick= 'del_comp_accessories("+id+");' href='javascript:void(0)' ><img border='0' alt='Delete' src='/_layouts/15/images/delitem.gif?rev=23'></a>";


        var jan = listItem2.get_item('Jan')||0;
        var feb = listItem2.get_item('Feb')||0;
        var mar = listItem2.get_item('Mar')||0;
        var apr = listItem2.get_item('Apr')||0;
        var may = listItem2.get_item('May')||0;
        var jun = listItem2.get_item('Jun')||0;
        var jul = listItem2.get_item('Jul')||0;
        var aug = listItem2.get_item('Aug')||0;
        var sep = listItem2.get_item('Sep')||0;
        var oct = listItem2.get_item('Oct')||0;
        var nov = listItem2.get_item('Nov')||0;
        var dec = listItem2.get_item('Dec')||0;
        var total = jan+feb+mar+apr+may+jun+jul+aug+sep+oct+nov+dec;


        
        total_jan+=jan;
        total_feb+=feb;
        total_mar+=mar;
        total_apr+=apr;
        total_may+=may;
        total_jun+=jun;
        total_jul+=jul;
        total_aug+=aug;
        total_sep+=sep;
        total_oct+=oct;
        total_nov+=nov;
        total_dec+=dec;
        total_total+=total;


           temp_expense_item = "<tr class='ms-rteTableEvenRow-default'> <td class='' colspan='1' style='width: 63px;' align='center'> <span>​"+edit_url_comp_accessories+"</span></td> <td class='ms-vb2' style='width: 20%;'> <span>​"+asset_desc+"</span></td> <td class=''> <span>​₱"+jan.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+feb.format(2)+"</span></td> <td class=''> <span>​₱"+mar.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+apr.format(2)+"</span></td> <td class=''> <span>​₱"+may.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+jun.format(2)+"</span></td> <td class=''> <span>​₱"+jul.format(2)+"</span></td> <td class='ms-vb2'> <span>₱"+aug.format(2)+"</span></td> <td class=''> <span>₱"+sep.format(2)+"</span></td> <td class='ms-vb2'> <span>₱"+oct.format(2)+"</span></td> <td class=''> <span>₱"+nov.format(2)+"</span></td> <td class='ms-vb2'> <span>₱"+dec.format(2)+"</span></td><td class=''> <span>​₱"+total.format(2)+"</span></td><td class='ms-vb2' align='center'> <span>"+del_url_comp_accessories+"</span></td> </tr>";

           temp_expense_item2 = "<tr class='ms-rteTableEvenRow-default'> <td class='ms-vb2' style='width: 20%;'> <span>​"+asset_desc+"</span></td> <td class=''> <span>​₱"+jan.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+feb.format(2)+"</span></td> <td class=''> <span>​₱"+mar.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+apr.format(2)+"</span></td> <td class=''> <span>​₱"+may.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+jun.format(2)+"</span></td> <td class=''> <span>​₱"+jul.format(2)+"</span></td> <td class='ms-vb2'> <span>₱"+aug.format(2)+"</span></td> <td class=''> <span>₱"+sep.format(2)+"</span></td> <td class='ms-vb2'> <span>₱"+oct.format(2)+"</span></td> <td class=''> <span>₱"+nov.format(2)+"</span></td> <td class='ms-vb2'> <span>₱"+dec.format(2)+"</span></td><td class=''> <span>​₱"+total.format(2)+"</span></td> </tr>";

        $("#table_expense_id").find('tbody').append(temp_expense_item);
        $("#table_expense_id2").find('tbody').append(temp_expense_item2);


        }//end while

        total_comp_accessories = "<tr  class='ms-rteTableOddRow-default'  style='font-weight:bold;' > <td class='' colspan='1' style='width: 63px;'> <span> &#160; </span></td> <td class='ms-vb2' style='width: 20%;'> <span>​​Total</span></td>  <td class='ms-vb2'> <span>​₱"+total_jan.format(2)+"</span></td> <td class=''> <span>​₱"+total_feb.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+total_mar.format(2)+"</span></td> <td class=''> <span>​₱"+total_apr.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+total_may.format(2)+"</span></td> <td class=''> <span>​₱"+total_jun.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+total_jul.format(2)+"</span></td> <td class=''> <span>​₱"+total_aug.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+total_sep.format(2)+"</span></td> <td class=''> <span>​₱"+total_oct.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+total_nov.format(2)+"</span></td> <td class=''> <span>​₱"+total_dec.format(2)+"</span></td><td class=''> <span>​₱"+total_total.format(2)+"</span></td> <td class='ms-vb2'>&#160;​</td> </tr>";

      total_comp_accessories2 = "<tr  class='ms-rteTableOddRow-default'  style='font-weight:bold;' > <td class='ms-vb2' style='width: 20%;'> <span>​​Total</span></td>  <td class='ms-vb2'> <span>​₱"+total_jan.format(2)+"</span></td> <td class=''> <span>​₱"+total_feb.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+total_mar.format(2)+"</span></td> <td class=''> <span>​₱"+total_apr.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+total_may.format(2)+"</span></td> <td class=''> <span>​₱"+total_jun.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+total_jul.format(2)+"</span></td> <td class=''> <span>​₱"+total_aug.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+total_sep.format(2)+"</span></td> <td class=''> <span>​₱"+total_oct.format(2)+"</span></td> <td class='ms-vb2'> <span>​₱"+total_nov.format(2)+"</span></td> <td class=''> <span>​₱"+total_dec.format(2)+"</span></td><td class=''> <span>​₱"+total_total.format(2)+"</span></td> </tr>";

      $("#table_expense_id").find('tbody').append(total_comp_accessories);
      $("#table_expense_id2").find('tbody').append(total_comp_accessories2);



      comp_acc_total+=total_total;
      comp_acc_jan+=total_jan;
      comp_acc_feb+=total_feb;
      comp_acc_mar+=total_mar;
      comp_acc_apr+=total_apr;
      comp_acc_may+=total_may;
      comp_acc_jun+=total_jun;
      comp_acc_jul+=total_jul;
      comp_acc_aug+=total_aug;
      comp_acc_sep+=total_sep;
      comp_acc_oct+=total_oct;
      comp_acc_nov+=total_nov;
      comp_acc_dec+=total_dec;




$("table#table_expense_id tbody td:nth-child(2n+1)").css("background-color", "#F9F9F9");
$("table#table_expense_id2 tbody td:nth-child(2n+1)").css("background-color", "#F9F9F9");





 


add_item_comp_accessories_html ="<tr class='ms-rteTableEvenRow-default'> <td colspan ='2' class='ms-vb2' style='width: 20%;'><span style='height:10px;width:10px;position:relative;display:inline-block;overflow:hidden;' class='s4-clust'><img src='/_layouts/15/images/fgimg.png?rev=23' alt='' style='left:-0px !important;top:-32px !important;position:absolute;'></span>&nbsp; <a class='ms-addnew' id='idHomePageNewItem' href='#' onclick='openInDialog(1480,360,true,true,true,&#39;https://intranet.houseofit.com.au/Lists/Sales%20Item%20Sales%20Forecast/NewFormCopy.aspx?RootFolder=&amp;IsDlg=1&SFID="+itemId+"&#39;);'>Add New Expenses</a></td></tr>"


     
   

}


   //This function fires when the query fails
   function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = 'The request failed:';
      markup += 'Message: ' + args.get_message();
      //Display the details
      alert(markup);
   }

//
//$("select[id='ctl00_ctl43_g_963cb4ad_b560_43ba_a1aa_b0fcc0bfde03_ff61_ctl00_DropDownChoice']")


function PreSaveAction()

	{
	console.log(fin_approval_load);


	if(document.getElementById('ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_savebutton2_ctl00_diidIOSaveItem').checked) {

  if($("select[id='ctl00_ctl43_g_963cb4ad_b560_43ba_a1aa_b0fcc0bfde03_ff61_ctl00_DropDownChoice']").val()=="Reviewed"){
    $("input[id='ctl00_ctl43_g_aa7753e5_232e_493c_ba36_46eac24a68a8_savebutton2_ctl00_diidIOSaveItem']").removeAttr('disabled');
    //alert("asd");
  }


   if(fin_approval_load=="Rejected"){
         // $("select[id='ctl00_ctl43_g_963cb4ad_b560_43ba_a1aa_b0fcc0bfde03_ff61_ctl00_DropDownChoice']").attr('disabled', 'disabled')
          document.getElementById("ctl00_ctl43_g_963cb4ad_b560_43ba_a1aa_b0fcc0bfde03_ff61_ctl00_DropDownChoice").value = "(None)";
console.log("in");

   }

  if($("select[id='ctl00_ctl43_g_963cb4ad_b560_43ba_a1aa_b0fcc0bfde03_ff71_ctl00_DropDownChoice']").val()!="" ){

    $("select[id='ctl00_ctl43_g_963cb4ad_b560_43ba_a1aa_b0fcc0bfde03_ff61_ctl00_DropDownChoice']").removeAttr('disabled');

  }




	}


	return true;

	 }

</script> ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​<div id='NoteHide'><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i></div>


