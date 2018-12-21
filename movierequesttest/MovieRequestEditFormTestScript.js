​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"><span id="ms-rterangecursor-start" aria-hidden="true"></span><span id="ms-rterangecursor-end" aria-hidden="true"></span></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

//style="white-space:normal;"

  $(document).ready(function()
{
$("input[title='Immediate Head']").attr("MakeReadOnly","true");

get_query_immediate_head();
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

//SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
//SPUtility.HideSPField('Date and Time Created');
// SPUtility.GetSPField('Status').MakeReadOnly();
// SPUtility.HideSPField('Status');
//
// SPUtility.GetSPField('Approval By').MakeReadOnly();
// SPUtility.HideSPField('Approval By');
SPUtility.GetSPField('Requestor Name').MakeReadOnly();
SPUtility.GetSPField('Department').MakeReadOnly();
SPUtility.GetSPField('Movie Title').MakeReadOnly();
SPUtility.GetSPField('Description').MakeReadOnly();
SPUtility.GetSPField('Area').MakeReadOnly();
//SPUtility.GetSPField('Immediate Head Approval').MakeReadOnly();
//SPUtility.get_item('Immediate_x0020_Head').MakeReadOnly();
//SPUtility.GetSPField('Immediate He').MakeReadOnly();


var HrApproval = $("select[id='HR_x0020_Approval0_c8c27904-c468-44b7-8d18-58a134ffa1c4_$DropDownChoice']").val();
var ImmediateHeadApproval = $("select[id='HR_x0020_Approval_25a2ffb8-ef2f-44f6-a880-c888b5f46b19_$DropDownChoice']").val();

SPUtility.HideSPField("HR Approval");

//alert(ImmediateHeadApproval);
if (ImmediateHeadApproval == "Approved")
{
    //alert ("Immediate Head is now Approved");
    SPUtility.GetSPField('Immediate Head Approval').MakeReadOnly();
    SPUtility.ShowSPField("HR Approval");
    
}
else (ImmediateHeadApproval =="Rejected")
{ 
	//alert("Sorry your request is denied");
}

});


  function get_query_immediate_head(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('MovieRequestFormTest');
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
var get_immediate;

    function onSucceededCallback(sender, args) {
         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

      var id = listItem.get_item('ID')

        if(itemId==id){//if

      get_immediate= listItem.get_item('Immediate_x0020_Head').get_lookupValue();

      //ListItem.get_item.MakeReadOnly();
      //SPUtility.get_item('Immediate_x0020_Head').MakeReadOnly();

       //alert("Immediate Head Name: "+get_immediate);
       SPUtility.HideSPField("Immediate Head");
       

        }//end if

      }  //end while

    // $("div[class='ms-cui-tabContainer']").css("display","none");
    }
     function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

    //  $("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }

</script><span id="ms-rterangecursor-start" aria-hidden="true"></span><span id="ms-rterangecursor-end" aria-hidden="true"></span>