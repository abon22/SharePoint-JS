<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/SiteAssets/Scripts/spjs-utility.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">


var userProfileProperties;

//ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

function checkuserprofile(){
  //alert("Init running...");

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded2), Function.createDelegate(this,this.onQueryFailed2));
    

 }

  function onQuerySucceeded2() {

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;
//alert(targetUser);
//var ceo_status = $("select[id='CEO_x0020_Status_aa7b2b8f-c43e-40d6-af1b-95627ebd9631_$DropDownChoice']").val();
//var finance_status = $("select[id='Finance_x0020_Approval_c5a33b67-5038-4ac3-a8e5-a5d502b368ef_$DropDownChoice']").val();

//alert(ceo_status);





//     if(ceo_status=="In Progress")//CEO Approval
//     {

//     if(targetUser=="artems" || targetUser=="aysoukhomlinov"  ){


//    SPUtility.GetSPField('CEO Status').MakeEditable();
//     SPUtility.ShowSPField('CEO Status');

//     }else{

//   SPUtility.ShowSPField('CEO Status');

//     $("input[id='ctl00_ctl43_g_8363f22a_0e7e_4141_95bf_2ec5ad6d8cbc_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
//     $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   
//     }


//     }
//     else if(ceo_status=="Approved" && finance_status=="" )//Finance Closed
//     {

     

//     if(targetUser=="jestinel" || targetUser=="cherryy" ){

//     SPUtility.ShowSPField('CEO Status');
//     SPUtility.GetSPField('Finance Status').MakeEditable();
//     SPUtility.ShowSPField('Finance Status');


//     }else{

//        SPUtility.ShowSPField('CEO Status');
//        SPUtility.ShowSPField('Finance Status');
  

//     $("input[id='ctl00_ctl43_g_8363f22a_0e7e_4141_95bf_2ec5ad6d8cbc_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
//     $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   
//     }
    
//     }

//     else if(ceo_status=="Approved" && finance_status=="Closed")
//     {
//     //SPUtility.ShowSPField('CEO Status');
//     //SPUtility.ShowSPField('Finance Status');

//     SPUtility.ShowSPField('CEO Status');
//     SPUtility.ShowSPField('Finance Status');


//     $("input[id='ctl00_ctl43_g_8363f22a_0e7e_4141_95bf_2ec5ad6d8cbc_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
//     $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

    
//     } 
//     else if(ceo_status=="Rejected" && finance_status==""){


// SPUtility.ShowSPField('CEO Status');
//     SPUtility.ShowSPField('Finance Status');


//     $("input[id='ctl00_ctl43_g_8363f22a_0e7e_4141_95bf_2ec5ad6d8cbc_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
//     $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


//     }
    
     
  
 
}

function onRequestFail2(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl43_g_8363f22a_0e7e_4141_95bf_2ec5ad6d8cbc_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}

 



//--------Change 'Save' to 'Submit'-----------------
$(function() {

//     SPUtility.GetSPField('CEO Status').MakeReadOnly();
// SPUtility.HideSPField('CEO Status');


//   SPUtility.GetSPField('Finance Status').MakeReadOnly();
// SPUtility.HideSPField('Finance Status');

// SPUtility.HideSPField('Reference Number');
// SPUtility.HideSPField('Date and Time Created');

//SPUtility.HideSPField('Item Expenses');

//$("input[id='Grand_x0020_Total_fc260283-101c-47a0-b9fc-fdfb85cc23cc_$CurrencyField']").attr('readonly', 'readonly').css({'color':'#141414','-webkit-appearance':'none','-moz-appearance':'none','border':'none'});



var html ="<tr><td width='400px' colspan='2'><div id='ExpenseItemFilter' style='border: thin solid rgb(210, 208, 221);'></div></td> </tr>";
    $('.ms-formtable > tbody > tr').eq(5).before(html);
  



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

// var check_ceo_status = $("select[id='CEO_x0020_Status_aa7b2b8f-c43e-40d6-af1b-95627ebd9631_$DropDownChoice']").val();
// if(check_ceo_status!='')
// {

//   $("#ExpenseItemFilter").hide();
//   $("#NoteHide").hide();
//   $("#MSOZoneCell_WebPartWPQ5").hide();

//      var from_cal = document.getElementById("Date_e7b2332b-70ae-44f8-8915-c89087ca166a_$DateTimeFieldDateDatePickerImage");
//         from_cal.src = "";
//         from_cal.alt = "";
// SPUtility.ShowSPField('Item Expenses');

// SPUtility.GetSPField('Date').MakeReadOnly();
// SPUtility.ShowSPField('Date');

// SPUtility.GetSPField('Employee Name').MakeReadOnly();
// SPUtility.ShowSPField('Employee Name');

// SPUtility.GetSPField('Department/Section').MakeReadOnly();
// SPUtility.ShowSPField('Department/Section');

// SPUtility.GetSPField('Purpose').MakeReadOnly();
// SPUtility.ShowSPField('Purpose');

// SPUtility.GetSPField('Item Expenses').MakeReadOnly();
// SPUtility.ShowSPField('Item Expenses');

// $("input[id='Grand_x0020_Total_fc260283-101c-47a0-b9fc-fdfb85cc23cc_$CurrencyField']").attr('readonly', 'readonly').css({'color':'#141414','-webkit-appearance':'none','-moz-appearance':'none','border':'none'});


// }



    });

//------------------------------------

// List GUID or list display name of the current list
var thisListGuid = '{76C0C577-ECEA-438B-9718-793F6B1D5EC5}';

// This code runs only if the ID parameter is omitted
if(GetUrlKeyValue('ID')==''){

  var lastID = getLastItemID();

  if(lastID!==''){
    var newURL = location.pathname+"?ID="+lastID;
    alert(newURL);
    if(GetUrlKeyValue('IsDlg')==='1'){
      newURL+="&IsDlg=1";
    }
    location.href=newURL+"&Source=https%3A%2F%2Fintranet.houseofit.com.au%2FLists%2FExpense%2520Reimbursement%2520Form%2FMy%2520Reimbursement%2520Forms%2Easpx";

    
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

var issue_id;
var status;
var itemId;
//var expense_reimburse_id;

      

function init(){



itemId = GetUrlKeyValue("ID", false, location.href);


         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Expenses Items');
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

 var returnedItems;

// var siteUrl="https://intranet.houseofit.com.au";

   function del_expenses(temp_id) {
    var get_expense_id = temp_id;
    var r = confirm("Are you sure you want to send the item to the site Recycle Bin?");

    if (r == true) {

    this.setitemId = get_expense_id;
    var ctx = new SP.ClientContext();
    var oList = ctx.get_web().get_lists().getByTitle('Expenses Items');
    this.ListItem = oList.getItemById(setitemId);
    ListItem.deleteObject();
    ctx.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded),Function.createDelegate(this, this.onQueryFailed));


    }
   
};

function onQuerySucceeded() {
  var getlastID = GetUrlKeyValue("ID", false, location.href);
  var getURL = location.pathname+"?ID="+getlastID;
  //location.href=getURL+"&Source=https%3A%2F%2Fintranet%2Ehouseofit%2Ecom%2Eau%2FLists%2FExpense%2520Reimbursement%2520Form%2FAllItems%2Easpx";
  location.href=getURL+"&Source=https%3A%2F%2Fintranet.houseofit.com.au%2FLists%2FExpense%2520Reimbursement%2520Form%2FMy%2520Reimbursement%2520Forms%2Easpx";

}
function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() +'\n' + args.get_stackTrace());
}


   function onSucceededCallback(sender, args) {


//checkuserprofile();


    Number.prototype.format = function(n, x) {
    var re = '(\\d)(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
};


         var enumerator = returnedItems.getEnumerator();
         var table = $('#ExpenseItemFilter');

         var markuptable = "<table id='table_expense_id' cellpadding='0' cellspacing='0' class='class_table_expenses' style='width: 570px;' ><thead style='font-weight: normal; font-size: 0.89em; color: #777;' ><tr><td colspan='6' align='center' class='ms-vb2'><b>ITEMIZED EXPENSES</b> </td></tr><tr valign='top' ><th style='font-weight: bold;' align='center' class='ms-vb2'>Edit</th><th style='font-weight: bold;' align='left' class='ms-vb2'>OR Date</th><th  align='left' style='font-weight: bold;' class='ms-vb2'>OR No.</th><th  align='left' style='font-weight: bold;' class='ms-vb2'>Description</th><th  align='right' style='font-weight: bold;' class='ms-vb2'>Qty</th><th style='font-weight: bold;' align='right' class='ms-vb2'>Amount</th><th  align='right' style='font-weight: bold;' class='ms-vb2'>Total</th><th style='font-weight: bold;' align='center' class='ms-vb2'>Delete</th></tr></thead><tbody>";
         var markuptable2 = "<table id='table_expense_id' cellpadding='0' cellspacing='0' class='class_table_expenses' style='width: 570px;' ><thead style='font-weight: normal; font-size: 0.89em; color: #777;' ><tr><td colspan='6' align='center' class='ms-vb2'><b>ITEMIZED EXPENSES</b> </td></tr><tr valign='top' ><th style='font-weight: bold;' align='left' class='ms-vb2'>OR Date</th><th  align='left' style='font-weight: bold;' class='ms-vb2'>OR No.</th><th  align='left' style='font-weight: bold;' class='ms-vb2'>Description</th><th  align='right' style='font-weight: bold;' class='ms-vb2'>Qty</th><th style='font-weight: bold;' align='right' class='ms-vb2'>Amount</th><th  align='right' style='font-weight: bold;' class='ms-vb2'>Total</th></tr></thead><tbody>";

         var markuptableend ="</tbody></table><br>";


        var markupData = "";
        var markupData2 = "";

         var total=0;


  //        while (enumerator.moveNext()) {

  //       var listItem = enumerator.get_current();

  // var id = listItem.get_item('ID');
  // var get_expense_reimburse_id = listItem.get_item('ERID');
        
  //       if(itemId==get_expense_reimburse_id){//if

  //       var date= listItem.get_item('Date');
  //       var frmtDate = date.format('M/dd/yyyy');
  //       total += listItem.get_item('Total');
  //       //alert(listItem.get_item('Qty'));

  //       var edit_url = "<a href='https://intranet.houseofit.com.au/_layouts/15/listform.aspx?PageType=6&amp;ListId=%7B0A53533C%2DCC86%2D48AF%2D99DA%2D9725C32F4664%7D&amp;ID="+id+"&amp;ExpenseId="+itemId+"' onclick='EditItemWithCheckoutAlert(event, &quot;https://intranet.houseofit.com.au/_layouts/15/listform.aspx?PageType=6&amp;ListId=%7B0A53533C%2DCC86%2D48AF%2D99DA%2D9725C32F4664%7D&amp;ID="+id+"&amp;ExpenseId="+itemId+"&quot;, &quot;0&quot;, &quot;&quot;, &quot;/Lists/Expenses%20Items/"+id+"_.000&amp;ExpenseId="+itemId+"&quot;, &quot;https://intranet.houseofit.com.au&quot;, &quot;&quot;, &quot;2&quot;);return false;' target='_self'><img border='0' alt='Edit' src='/_layouts/15/images/edititem.gif?rev=23'></a>";

  //       var del_url = "<a onclick= 'del_expenses("+id+");' href='javascript:void(0)' ><img border='0' alt='Delete' src='/_layouts/15/images/delitem.gif?rev=23'></a>";

  //       markupData += "<tr><td class='ms-vb2' align='center' >"+edit_url+"</td><td class='ms-vb2'>"+frmtDate+"</td><td class='ms-vb2'>"+listItem.get_item('OR_x0020_No_x002e_')+"</td><td class='ms-vb2'>"+listItem.get_item('Description')+"</td><td align='right' class='ms-vb2'>"+listItem.get_item('Qty')+"</td><td align='right' class='ms-vb2'>₱"+listItem.get_item('Amount').format(2)+"</td><td align='right' class='ms-vb2'>₱"+listItem.get_item('Total').format(2)+"</td><td align='center' class='ms-vb2'>"+del_url+"</td></tr>";

  //       markupData2 += "<tr><td class='ms-vb2'>"+frmtDate+"</td><td class='ms-vb2'>"+listItem.get_item('OR_x0020_No_x002e_')+"</td><td class='ms-vb2'>"+listItem.get_item('Description')+"</td><td align='right' class='ms-vb2'>"+listItem.get_item('Qty')+"</td><td align='right' class='ms-vb2'>₱"+listItem.get_item('Amount').format(2)+"</td><td align='right' class='ms-vb2'>₱"+listItem.get_item('Total').format(2)+"</td></tr>";

  //       }//end if
        
        
  //     }  //end while
    
  // var new_item_html = "&nbsp &nbsp &nbsp <span style='height:10px;width:10px;position:relative;display:inline-block;overflow:hidden;' class='s4-clust'><img src='/_layouts/15/images/fgimg.png?rev=23' alt='' style='left:-0px !important;top:-32px !important;position:absolute;'/> </span> <span> </span><a class='ms-addnew' id='idHomePageNewItem' href='https://intranet.houseofit.com.au/_layouts/15/listform.aspx?PageType=8&amp;ListId=%7B0A53533C%2DCC86%2D48AF%2D99DA%2D9725C32F4664%7D&amp;RootFolder=&amp;ExpenseId="+itemId+"' data-viewctr='222' onclick='NewItem2(event, &quot;https://intranet.houseofit.com.au/_layouts/15/listform.aspx?PageType=8&amp;ListId=%7B0A53533C%2DCC86%2D48AF%2D99DA%2D9725C32F4664%7D&amp;RootFolder=&amp;ExpenseId="+itemId+"&quot;); return false;' target='_self'> Add new item</a>";
  

  var new_item_html = "<span style='height:10px;width:10px;position:relative;display:inline-block;overflow:hidden;' class='s4-clust'><img src='/_layouts/15/images/fgimg.png?rev=23' alt='' style='left:-0px !important;top:-32px !important;position:absolute;'/> </span> <span> </span><a class='ms-addnew' id='idHomePageNewItem' href='https://intranet.houseofit.com.au/_layouts/15/listform.aspx?PageType=8&amp;ListId=%7B0A53533C%2DCC86%2D48AF%2D99DA%2D9725C32F4664%7D&amp;RootFolder=&amp;' data-viewctr='222' onclick='NewItem2(event, &quot;https://intranet.houseofit.com.au/_layouts/15/listform.aspx?PageType=8&amp;ListId=%7B0A53533C%2DCC86%2D48AF%2D99DA%2D9725C32F4664%7D&amp;RootFolder=&amp;&quot;); return false;' target='_self'> Add new item</a>";


  // var new_item_html = "<span style='height:10px;width:10px;position:relative;display:inline-block;overflow:hidden;' class='s4-clust'><img src='/_layouts/15/images/fgimg.png?rev=23' alt='' style='left:-0px !important;top:-32px !important;position:absolute;'/> </span> <span> </span><a class='ms-addnew' id='idHomePageNewItem' href='https://intranet.houseofit.com.au/_layouts/15/listform.aspx?PageType=8&amp;ListId=%7B74E10000%2DACE7%2D4CD4%2D9E06%2D5D9270E2A265%7D&amp;RootFolder=&amp;' data-viewctr='222' onclick='NewItem2(event, &quot;https://intranet.houseofit.com.au/_layouts/15/listform.aspx?PageType=8&amp;ListId=%7B74E10000%2DACE7%2D4CD4%2D9E06%2D5D9270E2A265%7D&amp;RootFolder=&amp;&quot;); return false;' target='_self'> Add new item</a>";



   // var new_item_html = "<span style='height:10px;width:10px;position:relative;display:inline-block;overflow:hidden;' class='s4-clust'><img src='/_layouts/15/images/fgimg.png?rev=23' alt='' style='left:-0px !important;top:-32px !important;position:absolute;'/> </span> <span> </span><a class='ms-addnew' id='idHomePageNewItem' href='https://intranet.houseofit.com.au/_layouts/15/listform.aspx?PageType=8&amp;ListId=%7B74E10000%2DACE7%2D4CD4%2D9E06%2D5D9270E2A265%7D&amp;RootFolder=&amp;' data-viewctr='96' onclick='NewItem2(event, &quot;https://intranet.houseofit.com.au/_layouts/15/listform.aspx?PageType=8&amp;ListId=%7B74E10000%2DACE7%2D4CD4%2D9E06%2D5D9270E2A265%7D&amp;RootFolder=&amp;&quot;); return false;' target='_self'>Add new item</a>";


  //var new_item_html = "&nbsp &nbsp &nbsp <span style='height:10px;width:10px;position:relative;display:inline-block;overflow:hidden;' class='s4-clust'><img src='/_layouts/15/images/fgimg.png?rev=23' alt='' style='left:-0px !important;top:-32px !important;position:absolute;'/> </span> <span> </span><a class='ms-addnew' id='idHomePageNewItem' href='https://intranet.houseofit.com.au/_layouts/15/listform.aspx?PageType=8&amp;ListId=%7B74E10000%2DACE7%2D4CD4%2D9E06%2D5D9270E2A265%7D&amp;RootFolder=&amp;LEID="+itemId+"' data-viewctr='76' onclick='NewItem2(event, &quot;https://intranet.houseofit.com.au/_layouts/15/listform.aspx?PageType=8&amp;ListId=%7B74E10000%2DACE7%2D4CD4%2D9E06%2D5D9270E2A265%7D&amp;RootFolder=&amp;LEID="+itemId+"&quot;); return false;' target='_self'>Add new item</a>";

    

    table.prepend("<br>"+markuptable+""+markupData+""+markuptableend+""+new_item_html+"<br><br>");

     var frmt_div = document.getElementById('FrmtTable_1fe961f3-e3e7-4f39-88a8-6b9f6cee798e_$TextField_inplacerte');

  frmt_div.innerHTML = "<br>"+markuptable2+""+markupData2+""+markuptableend+"<br><br>";

    $("table#table_expense_id tbody tr:even").css("background-color", "#F2F2F2");
    document.getElementById('Grand_x0020_Total_fc260283-101c-47a0-b9fc-fdfb85cc23cc_$CurrencyField').value = total.format(2);

document.getElementById("ExpenseItemFilter").style.border = "thin solid #D2D0DD";
//document.getElementById("ExpenseItemFilter").style.width  = "570px";


   }

   //This function fires when the query fails
   function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup);
   }




function PreSaveAction()

{


// if($("input[id='Date_x0020_and_x0020_Time_x0020__f9fb9bc1-97a5-48bc-96d3-8ff5c90cb703_$TextField']").val() ==''){
// var currentdate = new Date();
// var datetime = currentdate.getFullYear() + "-"
//                 + (currentdate.getMonth()+1)  + "-" 
//                 + currentdate.getDate() + " "  
//                 + currentdate.getHours() + ":"
//                 + currentdate.getMinutes();
// document.getElementById('Date_x0020_and_x0020_Time_x0020__f9fb9bc1-97a5-48bc-96d3-8ff5c90cb703_$TextField').value = datetime;

// }


// //if($('select[id=ctl00_ctl43_g_9d719ba5_757b_45ee_9d47_c0ffa226bbdf_ff71_ctl00_DropDownChoice]').val() ==''){

//  // $('select[id=ctl00_ctl43_g_9d719ba5_757b_45ee_9d47_c0ffa226bbdf_ff71_ctl00_DropDownChoice]').val('In Progress');
//  // return true;


// //}
// var get_ceo_status_2 = $("select[id='CEO_x0020_Status_aa7b2b8f-c43e-40d6-af1b-95627ebd9631_$DropDownChoice']").val();

// if(get_ceo_status_2 =='In Progress'){

//   alert("Please change the CEO Status to Approved/Rejected.");
//   return false;


// }
// // else if($('select[id=ctl00_ctl43_g_9d719ba5_757b_45ee_9d47_c0ffa226bbdf_ff71_ctl00_DropDownChoice]').val() =='Approved' && $('select[id=ctl00_ctl43_g_9d719ba5_757b_45ee_9d47_c0ffa226bbdf_ff81_ctl00_DropDownChoice]').val() ==''){
// //   alert("Please change the Finance Status to Closed.");
// //   return false;
// // }
// else{

//   return true;

// }





}
</script> ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​<div id='NoteHide'><i>​​​​​​<b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i></div>
<script>
function openDialog(pageUrl) { 
var options = {
    url: pageUrl,
    title: 'Title of the Dialog',
    allowMaximize: false,
    showClose: true,
    width: 500,
    height: 500
};
SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);       
}

</script> 
<a href="#" onclick="openDialog('http://SharePointSite/Lists/WebEvents/NewForm.aspx');">New Form</a>




