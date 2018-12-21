<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/SiteAssets/Scripts/spjs-utility.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script>
<script type="text/javascript">

ExecuteOrDelayUntilScriptLoaded(get_forms,'sp.js');

var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()

var title_html = "<h1 style='text-align:center;'>Overall Budget<br></h1><h1 style='text-align:center;''>A.S. Online Consulting Inc.<br></h1><h2 style='text-align:center;'>January "+year+" to December "+year+"</h2><br>";


 function get_forms(){

  RequestStarted();

        //var curr_html = document.getElementById('current_year');
       // curr_html.innerHTML = "<h2>January "+year+" to December "+year+"</h2><br>";
       // ExpenseItemFilter5.innerHTML=title_html;



         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Forecasted Budget Plan');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
       // caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='Budget_x0020_for' /><Value Type='Text'>"+year+"</Value></Eq></Where></Query></View>");
        caml.set_viewXml("<View><Query><Where><And><Eq><FieldRef Name='Budget_x0020_for' /><Value Type='Text'>"+year+"</Value></Eq><Eq><FieldRef Name='CEO_x0020_Approval' /><Value Type='Choice'>Approved</Value></Eq></And></Where></Query></View>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback2, onFailedCallback2);

 }

var arr_fbid = [];
function onSucceededCallback2(sender, args) {
      var enumerator = returnedItems.getEnumerator();
      while (enumerator.moveNext()) {

      var listItem = enumerator.get_current();

      var id = listItem.get_item('ID');
      var dep_section = listItem.get_item('Department_x002f_Section');

      arr_fbid.push(id);

        
       
      }  //end while

     // console.log("arr_fbid: "+arr_fbid);


get_expenses();
}

 function get_expenses(){

        //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Expense Item (Budget Plan)');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<View><Query><Where><Gt><FieldRef Name='ID' /><Value Type='Counter'>0</Value></Gt></Where><OrderBy><FieldRef Name='Price' Ascending='True' /></OrderBy></Query></View>");
         //Specify the query and load the list oject
        expense_item_returnedItems = list.getItems(caml);
         context.load(expense_item_returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback_expense_item, onFailedCallback);




 }


var start_body2 = title_html+""+"<table  id='table_expense_id2' cellspacing='0' class='ms-rteTable-default' style='width: 100%;'> <tbody> <tr class='ms-rteTableEvenRow-default'> <td class='ms-vb2' style='width: 25%;' > <span>​<strong>EXPENSE DESCRIPTION</strong></span></td><td class='' style='width: 5.55556%;'> <span><strong>​Total</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>Jan​</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Feb</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​Mar</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Apr</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​May</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Jun</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​Jul</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Aug</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​Sept</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>​Oct</strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong>​Nov</strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong>Dec​</strong></span></td> </tr>";


var end_body = "</tr> </tbody></table>";


      Number.prototype.format = function(n, x) {
    var re = '(\\d)(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
  };


function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}



 function onSucceededCallback_expense_item(sender, args) {

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

  markup_comp_accessories2="";




          var temp_tr = "";
          var temp_tr2 = "";
          var temp_expense_item="";
          var temp_expense_item2="";
          var count=0;
          var arr_accounts =[];

          var temp_accounts="";

var div_html = document.getElementById('ExpenseItemFilter5');
div_html.innerHTML = ""+start_body2+""+end_body+"";

 
    for(var i=0; i<=arr_fbid.length-1;i++){

        
var enumerator2 = expense_item_returnedItems.getEnumerator();
      while (enumerator2.moveNext()) {

        var listItem2 = enumerator2.get_current();
        var fbid = listItem2.get_item('FBID');

        //console.log("fbid: "+fbid+" arr_fbid: "+arr_fbid[i]);

         

        if(arr_fbid[i]==fbid){
          
        //console.log("fbid: "+fbid+" arr_fbid: "+arr_fbid[i]);
        
        var accounts = listItem2.get_item('Price')//account title


        if(temp_accounts==""){
          temp_accounts=accounts;

        }


        if(temp_accounts!=""){

          if(temp_accounts==accounts){

            if(count==0){

                arr_accounts.push(temp_accounts);
            }
            count=count+1;
          }


          if(temp_accounts!=accounts){
            temp_accounts=accounts;
            count=0;

            if(count==0){
                arr_accounts.push(temp_accounts);
            }
            count=count+1;
            
          }

        }

        }//end if


      }//end while


      //  console.log("arr_fbid[i]: "+arr_fbid[i]+" arr_accounts:"+arr_accounts.length);


    }//end for
//console.log("arr_accounts: "+arr_accounts);


var arr_accounts = arr_accounts.filter( onlyUnique );
arr_accounts.sort();
//console.log("arr_accounts: "+arr_accounts);

itemId=15;

for(var i=0; i<=arr_fbid.length-1;i++){


}


for(var i=0; i<=arr_accounts.length-1;i++){
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


   temp_tr2="<tr class='ms-rteTableEvenRow-default'>  <td class='ms-vb2' style='width: 20%;' ><span>​<i><b>"+arr_accounts[i]+"</b></i></span></td><td class='' style='width: 5.55556%;'> <span><strong></strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong></strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong></strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong></strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong></strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong></strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong></strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong></strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong></strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong></strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong></strong></span></td> <td class='ms-vb2' style='width: 5.55556%;'> <span><strong></strong></span></td> <td class='' style='width: 5.55556%;'> <span><strong></strong></span></td></tr>";

   $("#table_expense_id2").find('tbody').append(temp_tr2);

   var enumerator2 = expense_item_returnedItems.getEnumerator();


    while (enumerator2.moveNext()) {

      var listItem2 = enumerator2.get_current();
       var get_forecasted_budget_id = listItem2.get_item('FBID');

      //  if(name in )

        //if(14==get_forecasted_budget_id || 15==get_forecasted_budget_id){//if

          if( get_forecasted_budget_id in oc(arr_fbid) ){

        var asset_desc = listItem2.get_item('Asset_x0020_Description');
        var accounts = listItem2.get_item('Price');//Accounts
        //console.log("accounts_caml: "+accounts);


        if(arr_accounts[i]==accounts){

  

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

          
         // console.log("get_forecasted_budget_id: "+get_forecasted_budget_id);


          
          var dept_sect = get_dept_sect(get_forecasted_budget_id);
       //  console.log("dept_sect: "+dept_sect);


           temp_expense_item2 = "<tr class='ms-rteTableEvenRow-default'> <td class='ms-vb2' style='width: 20%;'> <span>​"+asset_desc+" (<i>"+dept_sect+"</i>)</span></td> <td class=''> <span>​₱"+total.format()+"</span></td><td class=''> <span>​₱"+jan.format()+"</span></td> <td class='ms-vb2'> <span>​₱"+feb.format()+"</span></td> <td class=''> <span>​₱"+mar.format()+"</span></td> <td class='ms-vb2'> <span>​₱"+apr.format()+"</span></td> <td class=''> <span>​₱"+may.format()+"</span></td> <td class='ms-vb2'> <span>​₱"+jun.format()+"</span></td> <td class=''> <span>​₱"+jul.format()+"</span></td> <td class='ms-vb2'> <span>₱"+aug.format()+"</span></td> <td class=''> <span>₱"+sep.format()+"</span></td> <td class='ms-vb2'> <span>₱"+oct.format()+"</span></td> <td class=''> <span>₱"+nov.format()+"</span></td> <td class='ms-vb2'> <span>₱"+dec.format()+"</span></td> </tr>";

        $("#table_expense_id2").find('tbody').append(temp_expense_item2);


        }


      }//end if


    }//end while

total_comp_accessories2 = "<tr  class='ms-rteTableOddRow-default'  style='font-weight:bold;' > <td class='ms-vb2' style='width: 20%;'> <span>​​Total</span></td> <td class=''> <span>​₱"+total_total.format()+"</span></td> <td class='ms-vb2'> <span>​₱"+total_jan.format()+"</span></td> <td class=''> <span>​₱"+total_feb.format()+"</span></td> <td class='ms-vb2'> <span>​₱"+total_mar.format()+"</span></td> <td class=''> <span>​₱"+total_apr.format()+"</span></td> <td class='ms-vb2'> <span>​₱"+total_may.format()+"</span></td> <td class=''> <span>​₱"+total_jun.format()+"</span></td> <td class='ms-vb2'> <span>​₱"+total_jul.format()+"</span></td> <td class=''> <span>​₱"+total_aug.format()+"</span></td> <td class='ms-vb2'> <span>​₱"+total_sep.format()+"</span></td> <td class=''> <span>​₱"+total_oct.format()+"</span></td> <td class='ms-vb2'> <span>​₱"+total_nov.format()+"</span></td> <td class=''> <span>​₱"+total_dec.format()+"</span></td> </tr>";

$("#table_expense_id2").find('tbody').append(total_comp_accessories2);
var temp_empty_tr="<tr><td class='' colspan='16' height='1px' style='padding:0px 0px 0px !important;'> <span>​</span></td></tr>";
$("#table_expense_id2").find('tbody').append(temp_empty_tr);


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

}//end for loop

$("table#table_expense_id2 tbody td:nth-child(2n+2)").css("background-color", "#F9F9F9");

var grand_total = comp_acc_total;
  var grand_total_jan=comp_acc_jan;
  var grand_total_feb=comp_acc_feb;
  var grand_total_mar=comp_acc_mar;
  var grand_total_apr=comp_acc_apr;
  var grand_total_may=comp_acc_may;
  var grand_total_jun=comp_acc_jun;
  var grand_total_jul=comp_acc_jul;
  var grand_total_aug=comp_acc_aug;
  var grand_total_sep=comp_acc_sep;
  var grand_total_oct=comp_acc_oct;
  var grand_total_nov=comp_acc_nov;
  var grand_total_dec=comp_acc_dec;


  var grand_total_html2="<!--Grand Total--> <tr class='ms-rteTableOddRow-default' style='font-weight:bold' > <td class='ms-vb2' style='width: 20%;'> <span>​<strong>Grand Total</strong></span></td> <td class=''> <span>₱"+grand_total.format()+"</span></td> <td class='ms-vb2'> <span>₱"+grand_total_jan.format()+"</span></td> <td class=''> <span>₱"+grand_total_feb.format()+"</span></td> <td class='ms-vb2'> <span>₱"+grand_total_mar.format()+"</span></td> <td class=''> <span>₱"+grand_total_apr.format()+"</span></td> <td class='ms-vb2'> <span>₱"+grand_total_may.format()+"</span></td> <td class=''> <span>₱"+grand_total_jun.format()+"</span></td> <td class='ms-vb2'> <span>₱"+grand_total_jul.format()+"</span></td> <td class=''> <span>₱"+grand_total_aug.format()+"</span></td> <td class='ms-vb2'> <span>₱"+grand_total_sep.format()+"</span></td> <td class=''> <span>₱"+grand_total_oct.format()+"</span></td> <td class='ms-vb2'> <span>₱"+grand_total_nov.format()+"</span></td> <td class=''> <span>₱"+grand_total_dec.format()+"</span></td> </tr>";


  $("#table_expense_id2").find('tbody').append(grand_total_html2);



RequestEnded();

 }


function get_dept_sect(get_forecasted_budget_id){ 

  //console.log("aw");
  var thisListGuid = '{0035761B-07F8-4B12-A4EB-89272943CA0E}';
  var queryBuffer = [];
    queryBuffer.push("<Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+get_forecasted_budget_id+"</Value></Eq></Where>");
    //queryBuffer.push("<OrderBy><FieldRef Name='ID' Ascending='FALSE' /></OrderBy>");
  var res = spjs_QueryItems({listName:thisListGuid,query:queryBuffer.join(''),viewFields:['Department_x002f_Section'],rowLimit:1});
  
  if(res.count<0){
    alert("An error occurred. Most likely the parameter \"thisListGuid\" is wrong.");
  }else if(res.count>0){
    return res.items[0].Department_x002f_Section;
  }else{
    return '';
  }
}



function oc(a)
{
  var o = {};
  for(var i=0;i<a.length;i++)
  {
    o[a[i]]='';
  }
  return o;
}

 





   function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = 'The request failed:';
      markup += 'Message: ' + args.get_message();
      //Display the details
      alert(markup);
   }






    function onFailedCallback2(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: ';
      markup += 'Message: ' + args.get_message() + '';
      //Display the details
      alert(markup );

      $("input[id='ctl00_ctl42_g_c12c2521_5302_4429_8c1c_2f417fe1c205_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }




var waitDialog=null;
function RequestEnded(sender, args) {
  try {
    waitDialog.close();
    waitDialog = null;
  } catch (ex) { }
};

function RequestStarted(sender, args) {
   ExecuteOrDelayUntilScriptLoaded(ShowWaitDialog, "sp.js");
  // alert("wait");
};

function ShowWaitDialog() {
  
      if (waitDialog == null) {
       
         waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Processing...', 'Please wait while request is in progress...', 110, 420);
      }else{

      }
   
};



</script> ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

<script language="javascript" type="text/javascript">
        function printDiv(divID) {
            //Get the HTML of div
            var divElements = document.getElementById(divID).innerHTML;
            //Get the HTML of whole page
            var oldPage = document.body.innerHTML;

            //Reset the page's HTML with div's HTML only
            document.body.innerHTML =
              "<html><head><title></title></head><body>" +
              divElements + "</body>";

            //Print Page
            window.print();

            //Restore orignal HTML
            document.body.innerHTML = oldPage;


        }
</script>


<div id="current_year" align="center"></div>
<h2 style="text-align:left;"><a href="/Lists/Forecasted%20Budget%20Plan/All%20Items.aspx">Forecasted Budget Plan Link</a><br></h2><br>
<input value="Print Item" onclick="javascript:printDiv('ExpenseItemFilter5')" type="image" onmouseover="this.style.backgroundColor='#d6e1f3'" onmouseout="this.style.backgroundColor='white'" src="/SiteAssets/print-icon.png" style="color: white; background-color: white; border: white;"><br><br>
<div id="ExpenseItemFilter5">

</div>
<br>
<br>



