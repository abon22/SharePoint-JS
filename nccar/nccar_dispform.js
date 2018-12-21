<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">

ExecuteOrDelayUntilScriptLoaded(init,'sp.js');

var issue_id;
var status;
 var itemId;

function init(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Non-Conformance Corrective Action Report');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback, onFailedCallback);

 }

 var returnedItems;


   function onSucceededCallback(sender, args) {


         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

  var id = listItem.get_item('ID') 
        
        if(itemId==id){//if
        

        var department= listItem.get_item('Department').get_lookupValue();
document.getElementById('department').innerHTML=department;

var auditor= listItem.get_item('Auditor').get_lookupValue();
document.getElementById('auditor').innerHTML=auditor;

var auditee= listItem.get_item('Auditee').get_lookupValue();
document.getElementById('auditee').innerHTML=auditee;


var auditorreports= listItem.get_item('Auditor_x0027_s_x0020_Report');
document.getElementById('auditorreports').innerHTML=auditorreports;

        
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