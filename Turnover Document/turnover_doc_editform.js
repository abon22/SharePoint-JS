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
    ExecuteOrDelayUntilScriptLoaded(init,'sp.js');     

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

//ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
// var targetUser;

// function checkuserprofile(){
//   //alert("Init running...");

//     this.clientContext2 = new SP.ClientContext.get_current();
//     this.oWeb = clientContext2.get_web();
//     targetUser = this.oWeb.get_currentUser();
//     this.clientContext2.load(targetUser);
//     this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded2), Function.createDelegate(this,this.onQueryFailed2));
    

//  }

 function get_TurnoverDocument(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Turnover Document');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback2, onFailedCallback2);

 }

 var created_by;
 var immediate_head;

 function onSucceededCallback2(sender, args){

    var enumerator = returnedItems.getEnumerator();
         
      while (enumerator.moveNext()) 
      {

        var listItem = enumerator.get_current();
        var id = listItem.get_item('ID') 
        
          if(itemId==id)
          {
            created_by= listItem.get_item('Author').get_lookupValue();
            //immediate_head = listItem.get_item('Immediate_x0020_Head').get_lookupValue();                 
          }//end if
  
        
      }  //end while

}




 function onFailedCallback2(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

      //$("input[id='ctl00_ctl42_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    //$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }



//  var fin_status;
//  var immediate_status;

//   function onQuerySucceeded2() {

//     var account = targetUser.get_loginName();
//     targetUser_temp = account.substring(account.indexOf("|") + 10);
//     targetUser = targetUser_temp;

//   SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');


// }

// var targetUser2;
// function getUserProperties() {
// targetUser2 = 'hoitcebu\\'+targetUser;

//   var clientContext = new SP.ClientContext.get_current();
//   var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
//   var profilePropertyNames = ["PreferredName"];
//   var userProfilePropertiesForUser = 
//         new SP.UserProfiles.UserProfilePropertiesForUser(
//             clientContext,
//             targetUser2,
//             profilePropertyNames);

//     userProfileProperties = peopleManager.getUserProfilePropertiesFor(
//         userProfilePropertiesForUser);

//     // Load the UserProfilePropertiesForUser object and send the request.
//     clientContext.load(userProfilePropertiesForUser);
//     clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);

   

// }

 var get_preferredname;
function onRequestSuccess() {
    //get_preferredname = userProfileProperties[0];
   get_TurnoverDocument();
    
    }

function onRequestFail(sender, args) {

  alert("Error Occurred! Please contact administrator, " + args.get_message());

 }


function onRequestFail2(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());

   }


$(document).ready(function() {

      //$("#turnoverDocumentForm #listDuties").hide();
      //$("#turnoverDocumentForm #keyLocation").hide();
      $("#turnoverDocumentForm #acknowledgement").hide();

});
  

$(function() {

  var html ="<tr><td width='400px' colspan='2'><div id='listofDuties' style='border: thin solid rgb(210, 208, 221);'></div></td> </tr>";
  $('.ms-formtable > tbody > tr').eq(5).before(html);

  var html ="<tr><td width='400px' colspan='2'><div id='keyDocuments_Location' style='border: thin solid rgb(210, 208, 221);'></div></td> </tr>";
  $('.ms-formtable > tbody > tr').eq(5).before(html);

  //--------Change 'Save' to 'Submit'-----------------
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
var thisListGuid = '{41C64721-0D09-4DCB-BC61-01C60816BA54}';

// This code runs only if the ID parameter is omitted
if(GetUrlKeyValue('ID')==''){

  var lastID = getLastItemID();

  if(lastID!==''){
    var newURL = location.pathname+"?ID="+lastID;
    //alert(newURL);
    if(GetUrlKeyValue('IsDlg')==='1'){
      newURL+="&IsDlg=1";
    }
    location.href=newURL+"&Source=https://intranet.houseofit.com.au/Lists/Turnover%20Document/AllItems.aspx";

    
  }
}

/********************************************
  Do not modify anything below this line
*********************************************/
function getLastItemID(){ 
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
 


ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
ExecuteOrDelayUntilScriptLoaded(init_KEyDocument_Location,'sp.js');

var issue_id;
var status;
var itemId22;
var returnedItems22;


      

function init_KEyDocument_Location(){

  itemId22 = GetUrlKeyValue("ID", false, location.href);

    //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Key documents & location');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<Query><OrderBy><FieldRef Name='ID' Ascending='True' /></OrderBy></Query>");
         //Specify the query and load the list oject
        returnedItems22 = list.getItems(caml);
         context.load(returnedItems22);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback22, onFailedCallback22);
 }


// var siteUrl="https://intranet.houseofit.com.au";

function del_KeyLocation(temp_id){
    var get_expense_id = temp_id;
    var r = confirm("Are you sure you want to send the item to the site Recycle Bin?");

    if (r == true) {

    this.setitemId = get_expense_id;
    var ctx = new SP.ClientContext();
    var oList = ctx.get_web().get_lists().getByTitle('Key documents & location');
    this.ListItem = oList.getItemById(setitemId);
    ListItem.deleteObject();
    ctx.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded),Function.createDelegate(this, this.onQueryFailed));
    }
   
};

function onQuerySucceeded(){
    //var getlastID = GetUrlKeyValue("ID", false, location.href);
    //var getURL = location.pathname+"?ID="+getlastID;
    //location.href=getURL+"&Source=https%3A%2F%2Fintranet%2Ehouseofit%2Ecom%2Eau%2FLists%2FExpense%2520Reimbursement%2520Form%2FAllItems%2Easpx";
    //location.href=getURL+"&Source=https://intranet.houseofit.com.au/Lists/Liquidation%20Form%20V2/My%20Liquidation%20Forms.aspx";
    //ExecuteOrDelayUntilScriptLoaded(init,'sp.js'); 
    ExecuteOrDelayUntilScriptLoaded(init_KEyDocument_Location,'sp.js');
}

function onQueryFailed(sender, args){
    alert('Request failed. ' + args.get_message() +'\n' + args.get_stackTrace());
}


function onSucceededCallback22(sender, args){

  //checkuserprofile();

    Number.prototype.format = function(n, x) {
    var re = '(\\d)(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
    };


         var enumerator22 = returnedItems22.getEnumerator();
         //var table = $('#ExpenseItemFilter');
         var table = document.getElementById('keyDocuments_Location');

         var markuptable = "<table id='keyDocuments_Location' cellpadding='0' cellspacing='0' class='class_table_expenses' style='width: 570px;' ><thead style='font-weight: normal; font-size: 0.89em; color: #777;' ><tr><td colspan='6' align='center' class='ms-vb2'><b>Key Documents & Location</b> </td></tr><tr valign='top' ><th style='font-weight: bold;' align='center' class='ms-vb2'>Edit</th><th style='font-weight: bold;' align='left' class='ms-vb2'>Document Name</th><th  align='left' style='font-weight: bold;' class='ms-vb2'>Path/Location</th><th style='font-weight: bold;' align='center' class='ms-vb2'>Delete</th></tr></thead><tbody>";

         var markuptable2 = "<table id='keyDocuments_Location' cellpadding='0' cellspacing='0' class='class_table_expenses' style='width: 570px;' ><thead style='font-weight: normal; font-size: 0.89em; color: #777;' ><tr><td colspan='4' align='center' class='ms-vb2'><b>Key Documents & Location</b> </td></tr><tr valign='top' ><th style='font-weight: bold;' align='left' class='ms-vb2'>Document Name</th><th  align='left' style='font-weight: bold;' class='ms-vb2'>Path/Location</th></tr></thead><tbody>";

         var markuptableend ="</tbody></table><br>";


        var markupData = "";
        var markupData2 = "";

         var total=0;


         while (enumerator22.moveNext()) {

        var listItem = enumerator22.get_current();

        var id = listItem.get_item('ID');
        var get_expense_reimburse_id = listItem.get_item('TODID');
        
        if(itemId22==get_expense_reimburse_id){//if

        //var date= listItem.get_item('Date_x0020_of_x0020_Turnover');
        //var frmtDate = date.format('M/dd/yyyy');

        //total += listItem.get_item('Amount');
        //alert(listItem.get_item('Qty'));

        var edit_url = "<a href='#' onclick='openInDialog(610,410,true,true,true,&#39;https://intranet.houseofit.com.au/Lists/Key%20documents%20%20location/EditForm.aspx?RootFolder=&amp;IsDlg=1&ID="+id+"&amp;TODID="+itemId22+"&#39;);'><img border='0' alt='edit' src='/_layouts/15/images/edititem.gif?rev=23'></a>";

        var del_url = "<a onclick= 'del_KeyLocation("+id+");' href='javascript:void(0)' ><img border='0' alt='Delete' src='/_layouts/15/images/delitem.gif?rev=23'></a>";

        markupData += "<tr><td class='ms-vb2' align='center' >"+edit_url+"</td><td class='ms-vb2'>"+listItem.get_item('Document_x0020_Name')+"</td><td class='ms-vb2'>"+listItem.get_item('Path_x005c_Location')+"</td><td align='center' class='ms-vb2'>"+del_url+"</td></tr>";

        markupData2 += "<tr><td class='ms-vb2'>"+listItem.get_item('Document_x0020_Name')+"</td><td class='ms-vb2'>"+listItem.get_item('Path_x005c_Location')+"</td></tr>";

        }//end if
        
        
      }  //end while


     // console.log(total);
     var new_item_html = "&nbsp &nbsp &nbsp<span style='height:10px;width:10px;position:relative;display:inline-block;overflow:hidden;' class='s4-clust'><img src='/_layouts/15/images/fgimg.png?rev=23' alt='' style='left:-0px !important;top:-32px !important;position:absolute;'></span>&nbsp; <a class='ms-addnew' id='idHomePageNewItem' href='#' onclick='openInDialog(610,410,true,true,true,&#39;https://intranet.houseofit.com.au/Lists/Key%20documents%20%20location/NewForm.aspx?RootFolder=&amp;IsDlg=1&TODID="+itemId22+"&#39;);'>Add new document</a>";



    table.innerHTML ="<br>"+new_item_html+""+markuptable+""+markupData+""+markuptableend+"<br><br>";

     var frmt_div = document.getElementById('ctl00_ctl42_g_5d6bdaa6_e0bf_47a2_b77f_2dab944acf1c_ff91_ctl00_ctl00_TextField_inplacerte');

    frmt_div.innerHTML = "<br>"+markuptable2+""+markupData2+""+markuptableend+"<br><br>";

    $("table#keyDocuments_Location tbody tr:even").css("background-color", "#F2F2F2");
   

    document.getElementById("keyDocuments_Location").style.border = "thin solid #D2D0DD";

}



//This function fires when the query fails
function onFailedCallback22(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup);
}


var issue_id;
var status;
var itemId;
 var returnedItems;
//var expense_reimburse_id;

      

function init(){

  itemId = GetUrlKeyValue("ID", false, location.href);

    //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('List of Duties');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<Query><OrderBy><FieldRef Name='ID' Ascending='True' /></OrderBy></Query>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback, onFailedCallback);
 }

var issue_id;
var status;
var itemId;
 var returnedItems1;



// var siteUrl="https://intranet.houseofit.com.au";

function del_expenses(temp_id){
    var get_expense_id = temp_id;
    var r = confirm("Are you sure you want to send the item to the site Recycle Bin?");

    if (r == true) {

    this.setitemId = get_expense_id;
    var ctx = new SP.ClientContext();
    var oList = ctx.get_web().get_lists().getByTitle('List of Duties');
    this.ListItem = oList.getItemById(setitemId);
    ListItem.deleteObject();
    ctx.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded),Function.createDelegate(this, this.onQueryFailed));
    }
   
};

function onQuerySucceeded(){
    //var getlastID = GetUrlKeyValue("ID", false, location.href);
    //var getURL = location.pathname+"?ID="+getlastID;
    //location.href=getURL+"&Source=https%3A%2F%2Fintranet%2Ehouseofit%2Ecom%2Eau%2FLists%2FExpense%2520Reimbursement%2520Form%2FAllItems%2Easpx";
    //location.href=getURL+"&Source=https://intranet.houseofit.com.au/Lists/Liquidation%20Form%20V2/My%20Liquidation%20Forms.aspx";
    ExecuteOrDelayUntilScriptLoaded(init,'sp.js'); 

}

function onQueryFailed(sender, args){
    alert('Request failed. ' + args.get_message() +'\n' + args.get_stackTrace());
}


function onSucceededCallback(sender, args){

  //checkuserprofile();

    Number.prototype.format = function(n, x) {
    var re = '(\\d)(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
    };


         var enumerator = returnedItems.getEnumerator();
         //var table = $('#ExpenseItemFilter');
         var table = document.getElementById('listofDuties');

         var markuptable = "<table id='table_expense_id' cellpadding='0' cellspacing='0' class='class_table_expenses' style='width: 570px;' ><thead style='font-weight: normal; font-size: 0.89em; color: #777;' ><tr><td colspan='6' align='center' class='ms-vb2'><b>LIST OF DUTIES</b> </td></tr><tr valign='top' ><th style='font-weight: bold;' align='center' class='ms-vb2'>Edit</th><th style='font-weight: bold;' align='left' class='ms-vb2'>Brief Description of Duties</th><th  align='left' style='font-weight: bold;' class='ms-vb2'>Date of Turnover</th><th style='font-weight: bold;' align='center' class='ms-vb2'>Status</th><th style='font-weight: bold;' align='center' class='ms-vb2'>Delete</th></tr></thead><tbody>";

         var markuptable2 = "<table id='table_expense_id' cellpadding='0' cellspacing='0' class='class_table_expenses' style='width: 570px;' ><thead style='font-weight: normal; font-size: 0.89em; color: #777;' ><tr><td colspan='4' align='center' class='ms-vb2'><b>ITEMIZED EXPENSES</b> </td></tr><tr valign='top' ><th style='font-weight: bold;' align='left' class='ms-vb2'>Brief Description of Duties</th><th  align='left' style='font-weight: bold;' class='ms-vb2'>Date of Turnover</th><th style='font-weight: bold;' align='left' class='ms-vb2'>Status</th></tr></thead><tbody>";

         var markuptableend ="</tbody></table><br>";


        var markupData = "";
        var markupData2 = "";

         var total=0;


         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

        var id = listItem.get_item('ID');
        var get_expense_reimburse_id = listItem.get_item('TODID');
        
        if(itemId==get_expense_reimburse_id){//if

        var date= listItem.get_item('Date_x0020_of_x0020_Turnover');
        var frmtDate = date.format('M/dd/yyyy');

        //total += listItem.get_item('Amount');
        //alert(listItem.get_item('Qty'));

        var edit_url = "<a href='#' onclick='openInDialog(610,410,true,true,true,&#39;https://intranet.houseofit.com.au/Lists/List%20of%20Duties/EditForm.aspx?RootFolder=&amp;IsDlg=1&ID="+id+"&amp;TODID="+itemId+"&#39;);'><img border='0' alt='edit' src='/_layouts/15/images/edititem.gif?rev=23'></a>";

        var del_url = "<a onclick= 'del_expenses("+id+");' href='javascript:void(0)' ><img border='0' alt='Delete' src='/_layouts/15/images/delitem.gif?rev=23'></a>";

        markupData += "<tr><td class='ms-vb2' align='center' >"+edit_url+"</td><td class='ms-vb2'>"+listItem.get_item('Brief_x0020_Description_x0020_of')+"</td><td class='ms-vb2'>"+frmtDate+"</td><td align='right' class='ms-vb2'>"+listItem.get_item('Status')+"</td><td align='center' class='ms-vb2'>"+del_url+"</td></tr>";

        markupData2 += "<tr><td class='ms-vb2'>"+listItem.get_item('Brief_x0020_Description_x0020_of')+"</td><td class='ms-vb2'>"+frmtDate+"</td><td class='ms-vb2'>"+listItem.get_item('Status')+"</td></tr>";

        }//end if
        
        
      }  //end while


     // console.log(total);
     var new_item_html = "&nbsp &nbsp &nbsp<span style='height:10px;width:10px;position:relative;display:inline-block;overflow:hidden;' class='s4-clust'><img src='/_layouts/15/images/fgimg.png?rev=23' alt='' style='left:-0px !important;top:-32px !important;position:absolute;'></span>&nbsp; <a class='ms-addnew' id='idHomePageNewItem' href='#' onclick='openInDialog(610,410,true,true,true,&#39;https://intranet.houseofit.com.au/Lists/List%20of%20Duties/NewForm.aspx?RootFolder=&amp;IsDlg=1&TODID="+itemId+"&#39;);'>Add new duty</a>";



    table.innerHTML ="<br>"+new_item_html+""+markuptable+""+markupData+""+markuptableend+"<br><br>";

     var frmt_div = document.getElementById('ctl00_ctl42_g_5d6bdaa6_e0bf_47a2_b77f_2dab944acf1c_ff81_ctl00_ctl00_TextField_inplacerte');

    frmt_div.innerHTML = "<br>"+markuptable2+""+markupData2+""+markuptableend+"<br><br>";

    $("table#table_expense_id tbody tr:even").css("background-color", "#F2F2F2");
   

    document.getElementById("listofDuties").style.border = "thin solid #D2D0DD";

}

//This function fires when the query fails
function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup);
}

</script> ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​<div id='NoteHide'><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i></div>
