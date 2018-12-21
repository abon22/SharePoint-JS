<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="/_layouts/sp.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>


//get the name of the current user
var context = null;
var web = null;
var currentUser = null;
var immediate_head;
var person_involved;
var checked_acknowledge = 0;

ExecuteOrDelayUntilScriptLoaded(GetUserLoginName, "sp.js");

function GetUserLoginName() {
  context = new SP.ClientContext.get_current();
  web = context.get_web();
  this._currentUser = web.get_currentUser();
  context.load(this._currentUser);
  context.executeQueryAsync(Function.createDelegate(this, this.onSuccessMethod),
  Function.createDelegate(this, this.onFailureMethod));
}

function onSuccessMethod(sender, args) {

// document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff831_ctl00_ctl00_TextField').value =this._currentUser.get_title();
//change the ID here to your people picker field ID.
var person_involved;
var currentName = this._currentUser.get_title();

//checking for current logged in user

	if(document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff91_ctl00_ctl00").checked == true){
		
		// $('#erroreport #TR_Acknowledgement').hide();
		
	}
	else if(document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff91_ctl00_ctl00").checked == false){
		
	document.getElementById('ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff101_ctl00_ctl00_TextField').value =this._currentUser.get_title();
		
	}
    
    //alert(this._currentUser.get_title());


    //-------------------------------------------------------------------------------------------------------------------
getvalues();

 function getvalues(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Non-Conformity Logs');
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

function onSucceededCallback(sender, args) {

         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();
  		var id = listItem.get_item('ID')

        if(itemId==id){//if

			immediate_head = listItem.get_item('Immediate_x0020_Head').get_lookupValue();
			person_involved = listItem.get_item('Person_x0020_Involved').get_lookupValue();

			// if(currentName != person_involved){
			// 	$('#erroreport #TR_Acknowledgement').hide();				
			// }
		if (currentName != person_involved) {
			document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_savebutton2_ctl00_diidIOSaveItem").disabled=true;
		}


		//correctiveActionNumber = listItem.get_item('Corrective_x0020_Action_x0020_no').get_lookupValue();
     	//correctiveActionNumber = listItem.get_item('classification').get_lookupValue();
     
     	//alert(correctiveActionNumber);
		//alert(person_involved);

        }//end if


      }  //end while
//alert(person_involved + " "+ currentName)

//------------- i acknowledge the above statement ------------------------
$("input[type='checkbox'][id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff91_ctl00_ctl00']").change(function()
{
	if(person_involved==currentName)
	{


			if(document.getElementById('ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff91_ctl00_ctl00').checked)

		  {
		  	
		    checked_acknowledge=1;
		    //alert("Success")
		   
		    //show button submit
		   $("input[id='ctl00$ctl42$g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489$savebutton2$ctl00$diidIOSaveItem']").removeAttr('hidden');
		   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
		  }
		  else
		  {
		    checked_acknowledge=0;


		    //hide button submit
		    $("input[id='ctl00$ctl42$g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489$savebutton2$ctl00$diidIOSaveItem']").attr('hidden', 'hidden');
		    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
		  }
	}




})

// if(person_involved == currentName)
// {
// 	alert("Success");
// }
// else
// {
// 	alert("Failed")
// }
	
  }

function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

      $("input[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }

var checked_acknowledge = 0;
    //-------------------------------------------------------------------------------------------------------------------



   }


function onFaiureMethod(sender, args){
 alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());
}




//------------------------------------------------------------------------------------------------------

 $(document).ready(function()
{
// var current = document.getElementById('ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff101_ctl00_ctl00_TextField');
// var involved = document.getElementById('personinvolved2');

 // alert(person_involved)
//----Chage Save to Submit------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");    


 $('#erroreport #classification2').hide();
 $('#erroreport #department2').hide();
 $('#erroreport #team2').hide();
 $('#erroreport #personinvolved2').hide();
 $('#erroreport #immediatehead2').hide();



   //readonly error log no.
   $("input[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
   document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff11_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
   document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff11_ctl00_ctl00_TextField").size = "25";

   //readonly revision
   $("input[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff131_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
   document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff131_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
   document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff131_ctl00_ctl00_TextField").size = "25";

 

  //readonly employee id
   $("input[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff111_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
   document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff111_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
   document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff111_ctl00_ctl00_TextField").size = "25";

 //readOnly classification dropDown
 document.getElementById("classification1").style.display = 'None';
    classification = $("select[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff51_ctl00_DropDownChoice']").val();
  document.getElementById('classification2').innerHTML="<input type='text' value='"+classification+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
  $('#erroreport #classification2').show();

//id="majorminor2"
   //readOnly classification dropDown (minor major)
 document.getElementById("majorminor1").style.display = 'None';
    classification = $("select[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff121_ctl00_DropDownChoice']").val();
  document.getElementById('majorminor2').innerHTML="<input type='text' value='"+classification+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
  $('#erroreport #majorminor2').show();

//readOnly department dropDown lookUp source
  var deprtmnt = document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff31_ctl00_Lookup");
  var selectedText = deprtmnt.options[deprtmnt.selectedIndex].text;
  document.getElementById("department1").style.display = 'None';
  document.getElementById('department2').innerHTML="<input type='text' value='"+selectedText+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
  $('#erroreport #department2').show();

  //readOnly team dropDown lookUp source
  var team = document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff41_ctl00_Lookup");
  var selectedText = team.options[team.selectedIndex].text;
  document.getElementById("team1").style.display = 'None';
  document.getElementById('team2').innerHTML="<input type='text' value='"+selectedText+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
  $('#erroreport #team2').show();

  //readonly date filed
  $("input[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "25";
      var from_cal2 = document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
      from_cal2.src = "";
      from_cal2.alt = "";

 //readOnly person involved
  $("div[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff61_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
  $( "a[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff61_ctl00_ctl00_UserField_checkNames']" ).empty();
  $( "a[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff61_ctl00_ctl00_UserField_browse']" ).empty();

   //readOnly department head
  $("div[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff71_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
  $( "a[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff71_ctl00_ctl00_UserField_checkNames']" ).empty();
  $( "a[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff71_ctl00_ctl00_UserField_browse']" ).empty();


   //readonly acknowedge by
   $("input[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff101_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
   document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff101_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
   document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff101_ctl00_ctl00_TextField").size = "40";

  //readOnly details
    $("div[id='ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff81_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');


$('#ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff91_ctl00_ctl00').change(function () {
     //alert('changed');
     
     	$('#erroreport #acknowledgedby2').hide();
   	 

   	 if(document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff91_ctl00_ctl00").checked==false)
    	{
    		checked_acknowledge=1;
       		//document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_savebutton2_ctl00_diidIOSaveItem").disabled = false;
       		document.getElementById('ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_savebutton2_ctl00_diidIOSaveItem').style.visibility = 'hidden';
    	}
    	else if(document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff91_ctl00_ctl00").checked==true)
    	{
    		checked_acknowledge=0;

      	document.getElementById('ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_savebutton2_ctl00_diidIOSaveItem').style.visibility = 'visible';
      }

 });



	if(document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff91_ctl00_ctl00").checked == true){
		
		$('#erroreport #TR_Acknowledgement').hide();
		
	}
	else if(document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff91_ctl00_ctl00").checked == false)
	{
		document.getElementById('ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_savebutton2_ctl00_diidIOSaveItem').style.visibility = 'hidden';
	}

//hide acknowledge by
  if(document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff91_ctl00_ctl00").checked == false){
      $('#erroreport #ack3').hide();
    }

// if (person_involved == currentName) {
// 	$('#buttons #btnSave').show(); 
// } else {
// 	$('#buttons #btnSave').hide();
// }

	// if(document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff101_ctl00_ctl00_TextField").value == 'ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff61_ctl00_ctl00_UserField_upLevelDiv'){

	// 	document.getElementById('ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_savebutton2_ctl00_diidIOSaveItem').style.visibility = 'visible';
	// } else if (document.getElementById("ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff101_ctl00_ctl00_TextField").value != 'ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_ff61_ctl00_ctl00_UserField_upLevelDiv') {
	// 	document.getElementById('ctl00_ctl43_g_e8f7f79a_ad46_4a25_bbb2_0b1a59a66489_savebutton2_ctl00_diidIOSaveItem').style.visibility = 'hidden';
	// }



});






</script>