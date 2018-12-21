<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript" src="/Lists/Survey%20Test/_layouts/15/sp.runtime.js"></script><script type="text/javascript" src="/Lists/Survey%20Test/_layouts/15/sp.js"></script><script language="javascript" type="text/javascript">
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
    </script><input value="Print Item" onclick="javascript:printDiv(&#39;printablediv&#39;)" type="image" onmouseover="this.style.backgroundColor=&#39;#d6e1f3&#39;" onmouseout="this.style.backgroundColor=&#39;white&#39;" src="/SiteAssets/print-icon.png" style="color: white; background-color: white; border: white;"/><script type="text/javascript">


var issue_id;
var status;
 var avg_div;
  var itemId;


 $(document).ready(function(){
 itemId = GetUrlKeyValue("b3329319a58fa9ceb4549aed9792c316ba31c558", false, location.href);


         //Get the current context  
         var context = new SP.ClientContext();  
         //Get the Announcements list. Alter this code to match the name of your list  
         var list = context.get_web().get_lists().getByTitle('HR Incident Reports');  
         //Create a new CAML query  
         var caml = new SP.CamlQuery();  
         //Create the CAML that will return only items with the titles that begin with 'T'  
        caml.set_viewXml("<Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query>");
         //Specify the query and load the list oject  
        returnedItems = list.getItems(caml); 
         context.load(returnedItems);  
         //Run the query asynchronously, passing the functions to call when a response arrives  
         context.executeQueryAsync(onSucceededCallback, onFailedCallback);  
         
         avg_div = document.getElementById('averagehere');

});





   function onSucceededCallback(sender, args) {  


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;


   

        var enumerator = returnedItems.getEnumerator();  
        
        
        
         while (enumerator.moveNext()) {  
      
        var listItem = enumerator.get_current();  
       
        var id = listItem.get_item('ID') 
        
        if(itemId==id){//if

       var memo_no = listItem.get_item('Memo_x0020_No');
       var created= listItem.get_item('Created');
       var fmtcreated = created.format('MMMM dd, yyyy');

       var employee_name = listItem.get_item('Employee_x0020_Name').get_lookupValue();
       var other_employee_name = listItem.get_item('Employee_x0020_Name_x0028_Other_');
       // console.log(listItem.get_item('Position_x0020_Title'))
       if(listItem.get_item('Position_x0020_Title') ){
          var pos_title = listItem.get_item('Position_x0020_Title').get_lookupValue();
       }else{
          var pos_title = "(None)";
       }
       
       var issue_concern = listItem.get_item('Description_x0020_of_x0020_Offen');
       var code_of_conduct = listItem.get_item('Code_x0020_of_x0020_Conduct');
       var lvl_offense = listItem.get_item('Offense');
       var pos_decision = listItem.get_item('Possible_x0020_Decision');

       var team_head = listItem.get_item('Team_x0020_Head').get_lookupValue();



var forname ;
if(employee_name!=""){
forname= employee_name;

}else if(other_employee_name!=""){

forname= other_employee_name;
}




       //  var created2= listItem.get_item('Created');
        // var fmtcreated2 = created2.format('MM-dd-yyyy');

       //  var covered= listItem.get_item('Covered_x0020_Period_x0020_From');
       //  var fmtcovered = covered.format('MMM dd yyyy, hh:ss tt');

       //  var to= listItem.get_item('To');
       //  var fmto = to.format('MMM dd yyyy, hh:ss tt');

        // var action_plan_date1= listItem.get_item('Action_x0020_Plan_x002f_s_x0020_');
        // var action_plan_date = action_plan_date1.format('MMMM dd, yyyy');




       


       // alert(parseFloat(total_avg).toFixed(2));
 // avg_div.innerHTML = '<p><span class="ms-rteStyle-Accent1">No. of Respondents: <b>'+no_of_response+'</b><br>Question 1(Average): <b>'+parseFloat(question_1_avg).toFixed(2)+'</b><br>Question 2(AVG): <b>'+parseFloat(question_2_avg).toFixed(2)+'</b><br>Question 3(AVG): <b>'+parseFloat(question_3_avg).toFixed(2)+'</b><br>Total Average: <b>'+parseFloat(total_avg).toFixed(2)+'</b></span></p>';




var htmldata= "<div id='printablediv'><br/><table cellspacing='0' class='ms-formtable' border='0' id='PrintedTable' style='height: 1282px; width: 1055px; margin-top: 8px;'><tbody><tr><td colspan='3' style='width: 73px; height: 104px;''><span style='font-size: 17.3333px;''>&#160;<img src='/SiteAssets/Logo/aslogo.jpg' alt='' style='margin: 0px; width: 174px; height: 63px;'/><img src='/SiteAssets/Logo/Hoit_Logo_form.png' alt='' style='margin: 5px; width: 193px; height: 52px;'/><img src='/SiteAssets/Logo/TBOS%20logo.png' alt='' style='margin: 5px; width: 196px; height: 49px;'/></span> &#160;</td><td colspan='2' style='width: 123px; height: 104px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>7F Crown 7 Bldg. Pope<br/>John Paul II, Kasambagan<br/>Cebu City, Philippines<br/>412-0602</span></span></td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' colspan='2'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>INTER-OFFICE MEMORANDUM</span></span></td><td class='ms-rteTableOddCol-default' style='width: 290px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 203px;'>&#160;</td><td class='ms-rteTableOddCol-default'>&#160;</td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 199px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 290px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px;'>&#160;</td><td class='ms-rteTableEvenCol-default'>&#160;</td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>Date</strong></span></span></td><td class='ms-rteTableOddCol-default' style='width: 199px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>: "+fmtcreated+"</span></span></td><td class='ms-rteTableEvenCol-default' style='width: 290px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>File no.</strong></span></span></td><td class='ms-rteTableEvenCol-default'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>: "+memo_no+"</span></span></td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>For</strong></span></span></td><td class='ms-rteTableOddCol-default' style='width: 199px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>: "+forname+"</span></span></td><td class='ms-rteTableEvenCol-default' style='width: 290px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>From</strong></span></span></td><td class='ms-rteTableEvenCol-default'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>: HR Dept</span></span></td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 199px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'> : "+pos_title+" </span></span></td><td class='ms-rteTableEvenCol-default' style='width: 290px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px;'>&#160;</td><td class='ms-rteTableEvenCol-default'>&#160;</td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>Subject</strong></span></span></td><td class='ms-rteTableOddCol-default' style='width: 199px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>: NOTICE TO EXPLAIN </span></span></td><td class='ms-rteTableEvenCol-default' style='width: 290px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px;'>&#160;</td><td class='ms-rteTableEvenCol-default'>&#160;</td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' colspan='5' style='width: 158px;'><hr size='3' color='black'/></td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' colspan='5' style='width: 158px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><br/>The following incident has been brought to our attention for appropriate action:</span></span></td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' colspan='5' style='width: 158px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><br/><i> "+issue_concern+"</i></span></span></td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' colspan='5' style='width: 158px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><br/>In this connection, this may constitute to our Code of Conduct and Discipline below:</span></span></td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' colspan='5' style='width: 158px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><br/><i>"+code_of_conduct+"</i></span></span></td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' colspan='5' style='width: 158px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><br/>If proven to be true, this will be under <i>"+lvl_offense+"</i> with a penalty of <i>"+pos_decision+"</i>.</span></span></td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' colspan='5' style='width: 158px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><br/>In this regard, please explain in writing within 72 hrs from receipt of this notice why no disciplinary action should be imposed upon you for the above. Your failure to submit your written explanation within the period provided shall be construed as a waiver of your right to be heard and the Company shall decide the matter on the basis of all records and evidence available to it.</span></span></td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' colspan='5' style='width: 158px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><br/>Your compliance is strongly encouraged.</span></span></td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px; height: 89px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 199px; height: 89px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 290px; height: 89px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px; height: 89px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='height: 89px;'>&#160;</td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>Prepared by:</strong>&#160;</span></span></td><td class='ms-rteTableOddCol-default' style='width: 199px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 290px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>Noted by:</strong></span></span></td><td class='ms-rteTableEvenCol-default'>&#160;</td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 199px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 290px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px;'>&#160;</td><td class='ms-rteTableEvenCol-default'>&#160;</td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px; height: 69px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 199px; height: 69px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 290px; height: 69px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px; height: 69px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='height: 69px;'>&#160;</td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>"+team_head+"</strong></span></span></td><td class='ms-rteTableOddCol-default' style='width: 199px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 290px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px;'><span style='font-size: 17.3333px;'><font face='times new roman, times, serif'><b>Niño Rey A. Crescencio</b></font></span></td><td class='ms-rteTableEvenCol-default'>&#160;</td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><em>Immediate&#160;Superior</em></span></span></td><td class='ms-rteTableOddCol-default' style='width: 199px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 290px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><em>Talent Management Officer</em></span></span></td><td class='ms-rteTableEvenCol-default'>&#160;</td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px; height: 99px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 199px; height: 99px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 290px; height: 99px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px; height: 99px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='height: 99px;'>&#160;</td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' colspan='5' style='width: 158px; height: 28px;'><br/><hr size='3' color='black'/></td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' colspan='5' style='width: 158px; text-align: center;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong><br/>HUMAN RESOURCE DEPARTMENT COPY</strong></span></span></td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 199px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 290px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px;'>&#160;</td><td class='ms-rteTableEvenCol-default'>&#160;</td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px; height: 26px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>Received by:</strong></span></span></td><td class='ms-rteTableOddCol-default' style='width: 199px; height: 26px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 290px; height: 26px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px; height: 26px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='height: 26px;'>&#160;</td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>Date:</strong></span></span></td><td class='ms-rteTableOddCol-default' style='width: 199px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 290px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px;'>&#160;</td><td class='ms-rteTableEvenCol-default'>&#160;</td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>Employee Signature:</strong></span></span></td><td class='ms-rteTableOddCol-default' style='width: 199px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 290px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px;'>&#160;</td><td class='ms-rteTableEvenCol-default'>&#160;</td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px; height: 205px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 199px; height: 205px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 290px; height: 205px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px; height: 205px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='height: 205px;'>&#160;</td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' colspan='5' style='width: 158px; height: 891px; text-align: left; outline: solid thin;'>&#160;    </td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 173px; height: 50px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 199px; height: 50px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 290px; height: 50px;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 203px; height: 50px;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='height: 50px;'>&#160;</td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' colspan='2' style='width: 158px; height: 19px; text-align: center; text-decoration: underline;'> &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160;&#160;</td><td class='ms-rteTableOddCol-default' style='width: 290px; height: 19px;'>&#160;</td><td class='ms-rteTableEvenCol-default' colspan='2' style='width: 123px; height: 19px; text-align: center; text-decoration: underline; '><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>"+today+"</span></span></td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' colspan='2' style='width: 158px; text-align: center; font-family: &quot;times new roman&quot;, times, serif;'><span style='font-size: 17.3333px;'>";

var htmldata2 = "<span style='font-family: &quot;times new roman&quot;, times, serif;'>Employees Signature Over Printed Name</span></span></td><td class='ms-rteTableOddCol-default' style='width: 290px;'>&#160;</td><td class='ms-rteTableEvenCol-default' colspan='2' style='width: 123px; text-align: center;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>Date</span></span></td></tr></tbody></table></div>";


avg_div.innerHTML = htmldata+""+htmldata2;


   }//end if
        
       
  
        
      }  //end while

} 
    
   //This function fires when the query fails  
   function onFailedCallback(sender, args) {  
      //Formulate HTML to display details of the error  
      var markup = '<p>The request failed: <br>';  
      markup += 'Message: ' + args.get_message() + '<br>';  
      //Display the details  
      alert(markup );
   } 
</script>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 
<div id="averagehere">
</div>