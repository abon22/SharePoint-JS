<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script> ​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">

ExecuteOrDelayUntilScriptLoaded(init,'sp.js');

var issue_id;
var status;
 var returnedItems;
 var itemId;

function init(){

	SPUtility.HideSPField('Acknowledgement');

	var get_acknowledge_qmr = SPUtility.GetSPField('QMR Acknowledgement').GetValue();
	var get_acknowledge_cso = SPUtility.GetSPField('CSO Acknowledgement').GetValue();
	var get_acknowledge_ceo = SPUtility.GetSPField('CEO Acknowledgement').GetValue();

	if(get_acknowledge_qmr!="" && get_acknowledge_cso!="" && get_acknowledge_ceo!="" ){
$('#print_id').show();
	}else{

		$('#print_id').hide();
	}


itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Management Review Form');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback, onFailedCallback);
//alert(itemId);

 }




   function onSucceededCallback(sender, args) {


         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {  //while


        var listItem = enumerator.get_current();

        var id = listItem.get_item('ID')

        if(itemId==id){//if




         var created= listItem.get_item('Created');
         var fmtcreated = created.format('MMMM dd, yyyy');

         var date_meeting= listItem.get_item('Date_x0020_and_x0020_Time_x0020_');
         var fmtdate_meeting = date_meeting.format('MMMM dd, yyyy');

         var nxt_meeting= listItem.get_item('Next_x0020_Meeting');
         var fmtnxt_meeting = nxt_meeting.format('MMMM dd, yyyy');

         var start_meeting= listItem.get_item('Date_x0020_and_x0020_Time_x0020_');
         var fmtstart_meeting = start_meeting.format('hh:ss tt');

         var end_meeting= listItem.get_item('Date_x0020_and_x0020_Time_x0020_0');
         var fmtend_meeting = end_meeting.format('hh:ss tt');

         var lookupVals = listItem.get_item('Attendees');
         var lookuptext='';
         for(var i = 0;i < lookupVals.length;i++) {
         //console.log(lookupVals[i].get_lookupValue()); //print Value
        //console.log(lookupVals[i].get_lookupId());
         lookuptext+=""+lookupVals[i].get_lookupValue()+", ";
       }

    //  alert(listItem.get_item('Title'));


          var table = $('table.ms-formtable');
          var tablemarkup = "<tr><td class='ms-formlabel'><h3 class='ms-standardheader'></h3></td>" +
                "<td class='ms-formbody'><div id='printablediv'><br><table cellspacing='0' border ='1' class='ms-rteTable-default' style='width: 1115px;'><tbody><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' colspan='2' style='width: 33.3333%;'><div style='text-align: center;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>Management Review Meeting Minutes</strong></span></div><div style='text-align: center;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'>v"+listItem.get_item('_UIVersionString')+"&#160; "+fmtcreated +" </span></div></td><td class='ms-rteTableOddCol-default' rowspan='3' style='width: 12%;'><p style='text-align: center;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><img src='/SiteAssets/Logo/Hoit_Logo_signature.png' alt='' style='margin: 5px; width: 320px; height: 85px; vertical-align: middle;'/>&#160;</span></p></td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>SUBJECT</strong></span></td><td class='ms-rteTableOddCol-default'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'>"+listItem.get_item('Title')+"</span></td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>ACKNOWLEDGED BY</strong></span></td><td class='ms-rteTableOddCol-default'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'> QMR, CSO, CEO </span></td></tr></tbody></table><p style='text-align: center;'>&#160;</p><table cellspacing='0' width='100%' ><tbody><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 13%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>Date</strong><strong>&#160; </strong><strong>of Meeting</strong></span></td><td class='ms-rteTableOddCol-default' style='width: 1%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>:</strong></span></td><td class='ms-rteTableEvenCol-default' style='width: 22%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'>"+fmtdate_meeting +"</span></td><td class='ms-rteTableOddCol-default' style='width: 16.6667%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>Next Meeting</strong><strong>&#160; </strong></span></td><td class='ms-rteTableEvenCol-default' style='width: 1%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>:</strong></span></td><td class='ms-rteTableOddCol-default' style='width: 22%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'>&#160; "+fmtnxt_meeting+"</span></td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' style='width: 11%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>Time</strong><strong>&#160; </strong><strong>Started </strong></span></td><td class='ms-rteTableOddCol-default' style='width: 1%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>:</strong></span></td><td class='ms-rteTableEvenCol-default' style='width: 22%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'>&#160;"+fmtstart_meeting+"</span></td><td class='ms-rteTableOddCol-default'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>Attendees</strong></span></td><td class='ms-rteTableEvenCol-default' style='width: 1%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>:</strong></span></td><td class='ms-rteTableOddCol-default' style='width: 53%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'>";




            var tablemarkup2 = "</span></td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 11%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>Time</strong><strong>&#160; </strong><strong>Ended</strong></span></td><td class='ms-rteTableOddCol-default' style='width: 1%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>:</strong></span></td><td class='ms-rteTableEvenCol-default' style='width: 22%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'>&#160;"+fmtend_meeting +"</span></td><td class='ms-rteTableOddCol-default'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 1%;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 22%;'>&#160;</td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' style='width: 11%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>Venue</strong></span></td><td class='ms-rteTableOddCol-default' style='width: 1%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>:</strong></span></td><td class='ms-rteTableEvenCol-default' style='width: 22%;'><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'>&#160;"+listItem.get_item('Venue')+"</span></td><td class='ms-rteTableOddCol-default'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 1%;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 22%;'>&#160;</td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='width: 11%;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 1%;'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 22%;'>&#160;</td><td class='ms-rteTableOddCol-default'>&#160;</td><td class='ms-rteTableEvenCol-default' style='width: 1%;'>&#160;</td><td class='ms-rteTableOddCol-default' style='width: 22%;'>&#160;</td></tr></tbody></table><p style='text-align: center;'>&#160;</p><p><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>Meeting Objective:<br/></strong></span></p><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'>"+listItem.get_item('Meeting_x0020_Objective')+" </span><p>&#160;</p><p><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>Review Agenda:<br/></strong></span></p><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'>"+listItem.get_item('Review_x0020_Agenda')+" </span><p>&#160;</p><p><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'><strong>Minutes:</strong></span></p><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'>"+listItem.get_item('Minutes')+" </span><p>&#160;</p><p>&#160;</p><span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'></span><br style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 14.6667px;'/></div></td></tr>";



  table.prepend(tablemarkup+''+lookuptext+''+tablemarkup2);

        $('#printablediv').hide();

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

         // #printablediv{ display:none; }
        }
    </script>

    <input value='Print Item' id='print_id' onclick='javascript:printDiv(&#39;printablediv&#39;)' type='image' onmouseover='this.style.backgroundColor=&#39;#d6e1f3&#39;' onmouseout='this.style.backgroundColor=&#39;white&#39;' src='/SiteAssets/print-icon.png' style='color: white; background-color: white; border: white; display: none;'/>
