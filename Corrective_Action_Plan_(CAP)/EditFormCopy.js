<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="/_layouts/sp.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var userProfileProperties;
var targetUser;
var adminJames = "Carl James Ambowang";
var adminVictor = "Victor Surita";

function init(){
  //alert("Init running...");

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));
 }

var get_preferredname;
  function onQuerySucceeded() {

    var account = targetUser.get_loginName();
//alert(account);
    targetUser_temp = account.substring(account.indexOf("|") +10);
    targetUser = targetUser_temp;
    //alert(targetUser);

SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');
  }

function getUserProperties() {
targetUser = 'hoitcebu\\'+targetUser;
//alert(targetUser);
var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);


    var profilePropertyNames = ["PreferredName"];
       var userProfilePropertiesForUser =
        new SP.UserProfiles.UserProfilePropertiesForUser(
            clientContext,
            targetUser,
            profilePropertyNames);

    userProfileProperties = peopleManager.getUserProfilePropertiesFor(
        userProfilePropertiesForUser);

    // Load the UserProfilePropertiesForUser object and send the request.
    clientContext.load(userProfilePropertiesForUser);
    clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
}

function onRequestSuccess() {
    get_preferredname = userProfileProperties[0];
  // alert(targetUser);
  get_cap();
}


  function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    //hide
    $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}
var itemId;
 function get_cap(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Corrective Action Plan');
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

var department_head;
var person_involved;
var correctiveActionNumber
var ca_remarks_status="";

var concatUsername = "hoitcebu\\"+"victors";
var concatUsername3 = "hoitcebu\\"+"carla";

    function onSucceededCallback(sender, args) {
         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();
  		var id = listItem.get_item('ID')

        if(itemId==id){//if

			department_head = listItem.get_item('Department_x0020_Head').get_lookupValue();
			person_involved = listItem.get_item('Person_x0020_Involved').get_lookupValue();
		  //correctiveActionNumber = listItem.get_item('Corrective_x0020_Action_x0020_no').get_lookupValue();
     //correctiveActionNumber = listItem.get_item('classification').get_lookupValue();
     
     // alert(correctiveActionNumber);
		//alert(person_involved);

        }//end if


      }  //end while
//-----------------------------------------------------------------------------------------------------------------------------------

//------------- i acknowledge the above statement ------------------------
$("input[type='checkbox'][id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff131_ctl00_ctl00']").change(function()
{
	if(get_preferredname==person_involved||concatUsername3==concatUsername3){

			if(document.getElementById('ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff131_ctl00_ctl00').checked)
		  {
		    checked_acknowledge=1;
		    document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff141_ctl00_ctl00_TextField").value = get_preferredname;

		    //show button submit
		   $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_savebutton2_ctl00_diidIOSaveItem']").removeAttr('hidden');
		   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
		  }
		  else
		  {
		    checked_acknowledge=0;


		    //hide button submit
		    $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
		    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
		  }
	}
})

// -------------------------------------- Approve -------------------
$("input[type='checkbox'][id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff151_ctl00_ctl00']").change(function()
{


if(get_preferredname==department_head||get_preferredname==adminJames)
  {
     if(document.getElementById('ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff151_ctl00_ctl00').checked)
      {


        checked_approve=1;

        document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff161_ctl00_ctl00_TextField").value = get_preferredname;

        //show button submit
       $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_savebutton2_ctl00_diidIOSaveItem']").removeAttr('hidden');
       $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
      }
      else
      {


        checked_approve=0;

        //hide button submit
        $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
        $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
      }
  }
})

// -------------------------------------- Confirm -------------------
$("input[type='checkbox'][id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff171_ctl00_ctl00']").change(function()
{

if(get_preferredname==adminVictor||get_preferredname==adminJames)
  {
     if(document.getElementById('ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff171_ctl00_ctl00').checked)
      {

        checked_confirm=1;
         document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff181_ctl00_ctl00_TextField").value = get_preferredname;
        //show button submit
       $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_savebutton2_ctl00_diidIOSaveItem']").removeAttr('hidden');
       $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
      }
      else
      {
        checked_confirm=0;

        //hide button submit
       $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
       $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
       
      }

}


 //endchange
})

}//-------------------------END-----------------------------

function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

      $("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }

var checked_acknowledge = 0;
var checked_approve = 0;
var checked_confirm = 0;

  $(document).ready(function()
{
	 ExecuteOrDelayUntilScriptLoaded(init,'sp.js');


   //readonly document no
   $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff191_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
   document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff191_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
   document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff191_ctl00_ctl00_TextField").size = "25";


  //readonly problem
  // $("textarea[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff111_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');//NOWMAR
  document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff111_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
  document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff111_ctl00_ctl00_TextField").style.width = "1265px";
  document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff111_ctl00_ctl00_TextField").style.height = "300px";

  //readonly correctiveAction
  // $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff111_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');//NOWMAR
  document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff111_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
  document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff111_ctl00_ctl00_TextField").style.width = "1265px";
  document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff111_ctl00_ctl00_TextField").style.height = "300px";

  //readOnly classification majorminor
  document.getElementById("majorminor1").style.display = 'None';
    classifications = $("select[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff201_ctl00_DropDownChoice']").val();
  document.getElementById('majorminor2').innerHTML="<input type='text' value='"+classifications+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
  $('#cap_table #majorminor2').show();

  //readOnly classification dropDown
  document.getElementById("classification1").style.display = 'None';
    classification = $("select[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff41_ctl00_DropDownChoice']").val();
  document.getElementById('classification2').innerHTML="<input type='text' value='"+classification+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
  $('#cap_table #classification2').show();

    //readOnly department dropDown lookUp source
  var deprtmnt = document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff51_ctl00_Lookup");
  var selectedText = deprtmnt.options[deprtmnt.selectedIndex].text;
  document.getElementById("dept1").style.display = 'None';
  document.getElementById('dept2').innerHTML="<input type='text' value='"+selectedText+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
  $('#cap_table #dept2').show();

  //readOnly team dropDown lookUp source
  var deprtmnt = document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff61_ctl00_Lookup");
  var selectedText = deprtmnt.options[deprtmnt.selectedIndex].text;
  document.getElementById("team1").style.display = 'None';
  document.getElementById('team2').innerHTML="<input type='text' value='"+selectedText+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
  $('#cap_table #team2').show();

  //readOnly person involved
  $("div[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff71_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
  $( "a[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff71_ctl00_ctl00_UserField_checkNames']" ).empty();
  $( "a[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff71_ctl00_ctl00_UserField_browse']" ).empty();

  //readOnly departmenthead
  $("div[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff81_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
  $( "a[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff81_ctl00_ctl00_UserField_checkNames']" ).empty();
  $( "a[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff81_ctl00_ctl00_UserField_browse']" ).empty();

  //readonly date filed
  $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "25";
      var from_cal2 = document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff31_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
      from_cal2.src = "";
      from_cal2.alt = "";

   $('#cap_table #acknowledgedby1').hide();
   $('#cap_table #acknowledgedby2').hide();

   $('#cap_table #approve1').hide();
   $('#cap_table #approve2').hide();
   $('#cap_table #approvedby1').hide();
   $('#cap_table #approvedby2').hide();

   $('#cap_table #confirm1').hide();
   $('#cap_table #confirm2').hide();
   $('#cap_table #confirmedby1').hide();
   $('#cap_table #confirmedby2').hide();


//------------------------------------------------ C H E C K  C H E C K B O X E S ---------------------------------------

//check value of acknowledge
  if(document.getElementById('ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff131_ctl00_ctl00').checked)
  {

    //if naay sulod
    checked_acknowledge=1;

  $('#cap_table #acknowledgement1').hide();
   $('#cap_table #acknowledgement2').hide();
   $('#cap_table #acknowledgedby1').show();
   $('#cap_table #acknowledgedby2').show();
    $('#cap_table #approve1').show();
   $('#cap_table #approve2').show();

     //readonly acknowedge by
   $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff141_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
   document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff141_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
   document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff141_ctl00_ctl00_TextField").size = "40";

     //hide button submit
    $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");


    //check value approve
    if(document.getElementById('ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff151_ctl00_ctl00').checked)
    {
        checked_approve=1;
      $('#cap_table #approve1').hide();
      $('#cap_table #approve2').hide();
      $('#cap_table #approvedby1').show();
      $('#cap_table #approvedby2').show();

      $('#cap_table #confirm1').show();
      $('#cap_table #confirm2').show();


        //readonly approved by
   // $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
   document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff161_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
   document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff161_ctl00_ctl00_TextField").size = "40";

    //this1
    $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
    
        //show button submit
      $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_savebutton2_ctl00_diidIOSaveItem']").removeAttr('hidden');
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");

       if(document.getElementById('ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff171_ctl00_ctl00').checked)
        {
          checked_confirm=1;
           $('#cap_table #confirm1').hide();
           $('#cap_table #confirm2').hide();
           $('#cap_table #confirmedby1').show();
           $('#cap_table #confirmedby2').show();

           //readOnly RootCause
           $("div[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff101_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
            //readonly problem
           $("textarea[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff111_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
            //readonly date closed
          $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff121_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff121_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "40";
      var from_cal2 = document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff121_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
      from_cal2.src = "";
      from_cal2.alt = "";


        //readonly approved by
   $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff181_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
   document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff181_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
   document.getElementById("ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_ff181_ctl00_ctl00_TextField").size = "40";

    $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

       }
       else
       {
            checked_confirm=0;

         //hide button submit
        $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
       $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
     }


    }
    else
    {
        checked_approve=0;
        //hide button submit
    $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
    }

  }
  else
  {
    checked_acknowledge=0;

       //hide button submit thisthis
   $("input[id='ctl00_ctl43_g_6cfcda71_1aaf_4835_8161_ec58e7948adb_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
  }



//----Chage Save to Submit------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");

//------------------------------------------------ E N D  C H E C K B O X E S -------------------------------------------

})

</script>