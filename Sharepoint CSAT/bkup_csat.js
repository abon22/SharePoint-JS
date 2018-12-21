<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript" src="/Lists/Survey%20Test/_layouts/15/sp.runtime.js"></script><script type="text/javascript" src="/Lists/Survey%20Test/_layouts/15/sp.js"></script><script type="text/javascript">


var issue_id;
var status;
 var avg_div;

 $(document).ready(function(){

         //Get the current context  
         var context = new SP.ClientContext();  
         //Get the Announcements list. Alter this code to match the name of your list  
         var list = context.get_web().get_lists().getByTitle('SharePoint Satisfaction Survey');  
         //Create a new CAML query  
         var caml = new SP.CamlQuery();  
         //Create the CAML that will return only items with the titles that begin with 'T'  
        caml.set_viewXml("<Query><OrderBy><FieldRef Name='Created' /></OrderBy></Query>");
         //Specify the query and load the list oject  
        returnedItems = list.getItems(caml); 
         context.load(returnedItems);  
         //Run the query asynchronously, passing the functions to call when a response arrives  
         context.executeQueryAsync(onSucceededCallback, onFailedCallback);  
         
         avg_div = document.getElementById('averagehere');

});

 
 var returnedItems; 
var no_of_response = 0;
var question_1 = 0;
var question_2 = 0;
var question_3 = 0;

var question_1_avg = 0;
var question_2_avg = 0;
var question_3_avg = 0;

var total_avg=0;




   function onSucceededCallback(sender, args) {  
   

        var enumerator = returnedItems.getEnumerator();  
        
        
        
         while (enumerator.moveNext()) {  
      
        var listItem = enumerator.get_current();  
        no_of_response = no_of_response+1;

        question_1 = question_1+listItem.get_item('How_x0020_would_x0020_you_x0020_');
        question_2 = question_2+listItem.get_item('How_x0020_would_x0020_you_x0020_0');
        question_3 = question_3+listItem.get_item('How_x0020_likely_x0020_are_x0020');
        




        }  

        question_1_avg = question_1/no_of_response;
        question_2_avg = question_2/no_of_response;
        question_3_avg = question_3/no_of_response;

        total_avg = (question_1_avg+question_2_avg+question_3_avg)/3;


       // alert(parseFloat(total_avg).toFixed(2));
 // avg_div.innerHTML = '<p><span class="ms-rteStyle-Accent1">No. of Respondents: <b>'+no_of_response+'</b><br>Question 1(Average): <b>'+parseFloat(question_1_avg).toFixed(2)+'</b><br>Question 2(AVG): <b>'+parseFloat(question_2_avg).toFixed(2)+'</b><br>Question 3(AVG): <b>'+parseFloat(question_3_avg).toFixed(2)+'</b><br>Total Average: <b>'+parseFloat(total_avg).toFixed(2)+'</b></span></p>';
avg_div.innerHTML = '<table class="ms-summarystandardbody" cellpadding="0" cellspacing="0" width="350px" border="0" rules="rows" xmlns:x="http://www.w3.org/2001/XMLSchema" xmlns:d="http://schemas.microsoft.com/sharepoint/dsp" xmlns:asp="http://schemas.microsoft.com/ASPNET/20" xmlns:__designer="http://schemas.microsoft.com/WebParts/v2/DataView/designer" xmlns:sharepoint="Microsoft.SharePoint.WebControls" xmlns:pcm="urn:PageContentManager" xmlns:ddwrt2="urn:frontpage:internal" style="margin: 10px;"> <tbody><tr><td class="ms-formlabel" width="190px" id="overview01">No. of Response:</td><td class="ms-formbody">'+no_of_response+'</td></tr><tr><td class="ms-formlabel" valign="top" id="overview02">Question 1(Average):</td><td class="ms-formbody">'+parseFloat(question_1_avg).toFixed(2)+'</td></tr><tr><td class="ms-formlabel" id="overview03">Question 2(Average):</td><td class="ms-formbody">'+parseFloat(question_2_avg).toFixed(2)+'</td></tr><tr><td class="ms-formlabel" id="overview04">Question 3(Average):</td><td class="ms-formbody">'+parseFloat(question_3_avg).toFixed(2)+'</td></tr><tr><td class="ms-formlabel" id="overview04">Total Average:</td><td class="ms-formbody"><b>'+parseFloat(total_avg).toFixed(2)+'</b></td></tr><tr><td><img src="/_layouts/15/images/blank.gif?rev=23" width="1" height="1" alt=""></td></tr></tbody></table>'
   
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