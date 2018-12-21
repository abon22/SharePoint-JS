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
    </script> 
<input value="Print Item" onclick="javascript:printDiv(&#39;printablediv&#39;)" type="image" onmouseover="this.style.backgroundColor=&#39;#d6e1f3&#39;" onmouseout="this.style.backgroundColor=&#39;white&#39;" src="/SiteAssets/print-icon.png" style="color: white; background-color: white; border: white;"/> 
<script type="text/javascript">


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
var m=mm;
if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 
var monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

today = mm+'/'+dd+'/'+yyyy;

var today2 = monthNames[m-1]+' '+dd+', '+yyyy; 

   

        var enumerator = returnedItems.getEnumerator();  
        
        
        
         while (enumerator.moveNext()) {  
      
        var listItem = enumerator.get_current();  
       
        var id = listItem.get_item('ID') 
        
        if(itemId==id){//if


       var created= listItem.get_item('Created');
       var fmtcreated = created.format('MMMM dd, yyyy');

       var memo_no = listItem.get_item('Memo_x0020_No');

       var employee_name = listItem.get_item('Employee_x0020_Name').get_lookupValue();
       var other_employee_name = listItem.get_item('Employee_x0020_Name_x0028_Other_');

       if(listItem.get_item('Position_x0020_Title') ){
          var pos_title = listItem.get_item('Position_x0020_Title').get_lookupValue();
       }else{
          var pos_title = "(None)";
       }
       var issue_concern = listItem.get_item('Description_x0020_of_x0020_Offen');
       var code_of_conduct = listItem.get_item('Code_x0020_of_x0020_Conduct');
       var lvl_offense = listItem.get_item('Offense');
       var pos_decision = listItem.get_item('Possible_x0020_Decision');

       var decision = listItem.get_item('Decision');
       var level_of_penalty = listItem.get_item('Level_x0020__x0020_of_x0020_Pena');

       var team_head = listItem.get_item('Team_x0020_Head').get_lookupValue();

       var guilty = listItem.get_item('Guilty_x0020_of_x0020_Committing');
       var employee_explanation = listItem.get_item('Employee_x0020_Explanation');


var forname ;
if(employee_name!=""){
forname= employee_name;

}else if(other_employee_name!=""){

forname= other_employee_name;
}



avg_div.innerHTML = "<div id='printablediv'><br/><table cellspacing='0' border='0' class='ms-formtable ' id='PrintedTable' style='height: 1282px; width: 1055px;'><tbody><tr><td colspan='3' style='width: 73px; height: 104px;''><span style='font-size: 17.3333px;'>&#160;<img src='/SiteAssets/Logo/aslogo.jpg' alt='' style='margin: 0px; width: 174px; height: 63px;'/><img src='/SiteAssets/Logo/Hoit_Logo_form.png' alt='' style='margin: 5px; width: 193px; height: 52px;'/><img src='/SiteAssets/Logo/TBOS%20logo.png' alt='' style='margin: 5px; width: 196px; height: 49px;'/></span> &#160;</td><td colspan='2' style='width: 123px; height: 104px;''><span style='font-size: 17.3333px;''><span style='font-family: &quot;times new roman&quot;, times, serif;''>7F Crown 7 Bldg. Pope<br/>John Paul II, Kasambagan<br/>Cebu City, Philippines<br/>412-0602</span></span></td></tr><tr><td colspan='2' style='height: 28px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>INTER-OFFICE MEMORANDUM</span></span></td><td style='width: 290px; height: 28px;'>&#160;</td><td style='width: 203px; height: 28px;'>&#160;</td><td style='height: 28px;'>&#160;</td></tr><tr><td style='width: 173px;'>&#160;</td><td style='width: 199px;'>&#160;</td><td style='width: 290px;'>&#160;</td><td style='width: 203px;'>&#160;</td><td>&#160;</td></tr><tr><td style='width: 173px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>Date</strong></span></span></td><td style='width: 199px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>: "+today2+"</span></span></td><td style='width: 290px;'>&#160;</td><td style='width: 203px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>File no.</strong></span></span></td><td><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>: "+memo_no+"</span></span></td></tr><tr><td style='width: 173px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>For</strong></span></span></td><td style='width: 199px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>: "+forname+"</span></span></td><td style='width: 290px;'>&#160;</td><td style='width: 203px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>From</strong></span></span></td><td><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>: HR Dept</span></span></td></tr><tr><td style='width: 173px;'>&#160;</td><td style='width: 199px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>: "+pos_title+"</span></span></td><td style='width: 290px;'>&#160;</td><td style='width: 203px;'>&#160;</td><td>&#160;</td></tr><tr><td style='width: 173px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>Subject</strong></span></span></td><td style='width: 199px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>: NOTICE OF DECISION </span></span></td><td style='width: 290px;'>&#160;</td><td style='width: 203px;'>&#160;</td><td>&#160;</td></tr><tr><td colspan='5' style='width: 158px;'><hr size='3' color='black'/></td></tr><tr><td colspan='5' style='width: 158px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><br/>We hereby notify you of the management’s decision on the incident that is the subject of the notice to explain memo dated <em>"+fmtcreated+"</em> which was served upon you.</span></span></td></tr><tr><td colspan='5' style='width: 158px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><br/>After reviewing all the evidence, sufficient grounds have been established to support the charges leveled against you, and therefore, we find you guilty of committing <em>"+guilty+"</em> against the Employee’s Code of Conduct, taking into consideration the following findings.:</span></span></td></tr><tr><td colspan='5' style='width: 158px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><br/>Based on the letter submitted: </span></span></td></tr><tr><td colspan='5' style='width: 158px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><br/><em>"+employee_explanation+"</em>    </span></span></td></tr><tr><td colspan='5' style='width: 158px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><br/>For the above violation, you are therefore, penalized with <em>"+decision+"</em>. You are further warned that a repetition of the same or similar offense now or in the future shall be meted with a penalty of <em>"+level_of_penalty+"</em>.</span></span></td></tr><tr><td colspan='5' style='width: 158px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><br/>This decision is final and executory.</span></span></td></tr><tr><td style='height: 59px;'>&#160;</td></tr><tr><td style='width: 173px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>Prepared by:</strong>&#160;</span></span></td><td style='width: 199px;'>&#160;</td><td style='width: 290px;'>&#160;<strong style='font-family: &quot;times new roman&quot;, times, serif; font-size: 17.3333px;'>Noted by:</strong></td><td style='width: 203px;'><br/></td><td>&#160;</td></tr><tr><td style='width: 173px;'>&#160;</td><td style='width: 199px;'>&#160;</td><td style='width: 290px;'>&#160;</td><td style='width: 203px;'>&#160;</td><td>&#160;</td></tr><tr><td style='width: 173px; height: 34px;'>&#160;</td><td style='width: 199px; height: 34px;'>&#160;</td><td style='width: 290px; height: 34px;'>&#160;</td><td style='width: 203px; height: 34px;'>&#160;</td><td style='height: 34px;'>&#160;</td></tr><tr><td style='width: 173px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong>"+team_head+"</strong></span></span></td><td style='width: 199px;'>&#160;</td><td style='width: 290px;'><span style='font-family: &quot;times new roman&quot;, times, serif; font-size: 17.3333px;'>&#160;</span><strong style='font-family: &quot;times new roman&quot;, times, serif; font-size: 17.3333px;'>Niño Rey A. Crescencio</strong></td><td style='width: 203px;'><span style='font-size: 17.3333px;'><font face='times new roman, times, serif'><b>Mithi Juacel Sandalo</b></font></span></td><td>&#160;</td></tr><tr><td style='width: 173px;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><em>Immediate Manager</em></span></span></td><td style='width: 199px;'>&#160;</td><td style='width: 290px;'>&#160;<em style='font-family: &quot;times new roman&quot;, times, serif; font-size: 17.3333px;'>Talent Management Officer</em></td><td style='width: 203px;'><font face='times new roman, times, serif'><span style='font-size: 17.3333px;'><i>VP - Philippines</i></span></font></td><td>&#160;</td></tr><tr><td style='width: 173px; height: 19px;'>&#160;</td><td style='width: 199px; height: 19px;'>&#160;</td><td style='width: 290px; height: 19px;'>&#160;</td><td style='width: 203px; height: 19px;'>&#160;</td><td style='height: 19px;'>&#160;</td></tr><tr><td colspan='5' style='width: 125px; height: 28px;'><br/><hr size='3' color='black'/></td></tr><tr><td colspan='5' style='width: 105px; text-align: center;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'><strong><br/>HR FEEDBACK FORM</strong></span></span></td></tr><tr><td style='width: 173px;'>&#160;</td><td style='width: 199px;'>&#160;</td><td style='width: 290px;'>&#160;</td><td style='width: 203px;'>&#160;</td><td>&#160;</td></tr><tr><td colspan='5' style='width: 173px;'><span style='font-family: &quot;times new roman&quot;, times, serif; font-size: 17.3333px;'><br/> I,<span style='text-decoration: underline;'> "+forname+"</span>, promise not to violate the <em>"+guilty+"</em>. Should I be found guilty of a similar offense whilst this warning is enforced, the disciplinary action imposed will be effected by this warning. &#160; &#160; &#160; &#160;</span></td></tr><tr><td style='width: 173px;'><br/></td><td style='width: 199px;'>&#160;</td><td style='width: 290px;'>&#160;</td><td style='width: 203px;'>&#160;</td><td>&#160;</td></tr><tr><td style='width: 173px; height: 50px;'>&#160;</td><td style='width: 199px; height: 50px;'>&#160;</td><td style='width: 290px; height: 50px;'>&#160;</td><td style='width: 203px; height: 50px;'>&#160;</td><td style='height: 50px;'>&#160;</td></tr><tr style='text-align: center;'><td colspan='2' style='width: 158px; height: 19px; text-decoration: underline;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>&#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; &#160; </span></span> </td><td></td><td colspan='2' style='width: 158px; height: 19px; text-decoration: underline;'> <span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>"+today+" </span></span></td></tr><tr><td colspan='2' style='width: 158px; height: 27px; text-align: center;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>Employees Signature Over Printed Name</span></span></td><td style='width: 290px; height: 27px;'>&#160;</td><td colspan='2' style='width: 123px; height: 27px; text-align: center;'><span style='font-size: 17.3333px;'><span style='font-family: &quot;times new roman&quot;, times, serif;'>Date</span></span></td></tr></tbody></table></div>";



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