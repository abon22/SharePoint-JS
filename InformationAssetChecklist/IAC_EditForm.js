<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var sent=0;

var userProfileProperties;
var targetUser;
var auditor;
var auditee;
var approved;

function init(){
 // alert("Init running...");

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
    $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

//showButton
/*   $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_savebutton2_ctl00_diidIOSaveItem']").removeAttr('hidden');
   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");*/
}
var itemId;
 function get_cap(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Information Asset Checklist');
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

var concatUsername = "hoitcebu\\"+"victors";
var concatUsername2 = "hoitcebu\\"+"paulm";
var concatUsername3 = "hoitcebu\\"+"carla";

    function onSucceededCallback(sender, args) {
         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

      var id = listItem.get_item('ID')

        if(itemId==id){//if

      auditor= listItem.get_item('Author').get_lookupValue();
      auditee= listItem.get_item('Auditee').get_lookupValue();

        }//end if
      }  //end while

//-------condition---------
if (targetUser==concatUsername3)
{
  // alert("sample");


	approved = $('select[id=ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff91_ctl00_DropDownChoice]').val();

if(approved=="Approve"){
	

 $('#iac_table #ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff101_ctl00_ctl00_TextField').hide();

 $('#iac_table #approveRejectHide').show();
document.getElementById("approval").style.display = 'None';
    approval = $("select[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff91_ctl00_DropDownChoice']").val();
    //document.getElementById('audit_section2').innerHTML=audit_section;
    
    document.getElementById('approval2').innerHTML="<input type='text' value='"+approval+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";

 $('#iac_table #approval2').show();

    $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}else if(approved=="Reject")
{

}
  

}
else if(auditor == get_preferredname)
{
	approved = $('select[id=ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff91_ctl00_DropDownChoice]').val();

  
if(approved=="Approve"){
	

 $('#iac_table #ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff101_ctl00_ctl00_TextField').hide();

 $('#iac_table #approveRejectHide').show();
document.getElementById("approval").style.display = 'None';
    approval = $("select[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff91_ctl00_DropDownChoice']").val();
    //document.getElementById('audit_section2').innerHTML=audit_section;
    
    document.getElementById('approval2').innerHTML="<input type='text' value='"+approval+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";

 $('#iac_table #approval2').show();

    $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}

else if(approved=="Reject")
{

	   $('#iac_table #sentTQM1').show();
	   $('#iac_table #sentTQM2').hide();

	   //enable read only calendar
	    $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").removeAttr('readonly').css('background-color','');
      var from_cal3 = document.getElementById("ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
      from_cal3.src = "/_layouts/15/images/calendar_25.gif";
      from_cal3.alt = "Select a date from the calendar.";



$("div[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff51_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'true').css('background-color','');
// $( "a[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff51_ctl00_ctl00_UserField_checkNames']" ).innerHTML+="puta";
document.getElementById('ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff51_ctl00_ctl00_UserField_checkNames').innerHTML="<img title='Check Names' src='/_layouts/15/images/checknames.png' alt='Check Names'>";
document.getElementById('ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff51_ctl00_ctl00_UserField_browse').innerHTML="<img title='Browse' src='/_layouts/15/images/addressbook.gif' alt='Browse'>";
//$( "a[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff51_ctl00_ctl00_UserField_browse']" ).innerHTML="<img title='Check Names' src='_layouts/15/images/checknames.png' alt='Check Names'/>";
// alert("t");
//$("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00']").attr('disabled', 'disabled');
    //SPUtility.GetSPField('Auditee').MakeReadOnly();
$("label[for='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00']").html('Sent to TQM');

/* $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");*/

 $('#iac_table #audit_section2').hide();
 $('#iac_table #audit_section').show();

$("div[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff61_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'true').css('background-color','');
$('#iac_table #ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff101_ctl00_ctl00_TextField').hide();

 $('#iac_table #approveRejectHide').show();
document.getElementById("approval").style.display = 'None';
    approval = $("select[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff91_ctl00_DropDownChoice']").val();
    //document.getElementById('audit_section2').innerHTML=audit_section;
    
    document.getElementById('approval2').innerHTML="<input type='text' value='"+approval+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";

 $('#iac_table #approval2').show();
 $('#iac_table #ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff101_ctl00_ctl00_TextField').show();



}
else
{


	 $('#iac_table #ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff101_ctl00_ctl00_TextField').hide();

 $('#iac_table #approveRejectHide').show();
document.getElementById("approval").style.display = 'None';
    approval = $("select[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff91_ctl00_DropDownChoice']").val();
    //document.getElementById('audit_section2').innerHTML=audit_section;
    
    document.getElementById('approval2').innerHTML="<input type='text' value='"+approval+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";

 $('#iac_table #approval2').show();

    $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

   $("input[type='checkbox'][id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00']").change(function()
  {
    if(document.getElementById('ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00').checked)
    {

    		$("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_savebutton2_ctl00_diidIOSaveItem']").removeAttr('hidden');
   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
    }
    else
    {
    	 $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

    }
  });




}



  //$('#iac_table #comment_section').hide();
}

else if (targetUser!=concatUsername3||auditor !=get_preferredname)
{

 

if(approved=="Approve")
  {
    //alert("LOL");
    document.getElementById("approval").style.display = 'None';
    approval = $("select[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff91_ctl00_DropDownChoice']").val();
    //document.getElementById('audit_section2').innerHTML=audit_section;
    
    document.getElementById('approval2').innerHTML="<input type='text' value='"+approval+"' maxlength='255' class='ms-long ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";

   // $('#iac_table #ff10{$Pos}').hide();

   $("textarea[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff101_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

   $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

  }

  /*else
  {
    alert("why");
    $('#iac_table #approval2').show();
  }*/

 else
 {
   $('#iac_table #approveRejectHide').hide();
   $('#iac_table #comment_section').hide();
   $('#iac_table #auditor_submit_approval').hide();
   //readonly calendar
    $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
      var from_cal3 = document.getElementById("ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
      from_cal3.src = "";
      from_cal3.alt = "";

  //readonly audited section/area
   $('#iac_table #audit_section2').show();
  document.getElementById("audit_section").style.display = 'None';
    audit_section = $("select[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff31_ctl00_DropDownChoice']").val();
 document.getElementById('audit_section2').innerHTML="<input type='text' value='"+audit_section+"' maxlength='255' class='ms-long ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";

  //readonly checklist
  $("div[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff61_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

  //readonly auditee
  $("div[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff51_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
  $( "a[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff51_ctl00_ctl00_UserField_checkNames']" ).empty();
  $( "a[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff51_ctl00_ctl00_UserField_browse']" ).empty();

    //hide submit button
    $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
  }

}


}

  function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

      $("input[id='ctl00_ctl42_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }


  $(document).ready(function()
{
approved = $('select[id=ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff91_ctl00_DropDownChoice]').val();
  if(document.getElementById('ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00').checked)
    {
      sent=1;
     //alert("1");
    }
    else
    {
      sent=0;
     //alert("0");
    }


//alert(auditor);
  init();



$("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff71_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff41_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
//alert(auditor+" = "+auditee);

$('#iac_table #audit_section2').hide();

$("input[type='checkbox'][id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00']").change(function()
  {
    if(document.getElementById('ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00').checked)
    {
      sent=1;
     //alert("1");
    }
    else
    {
      sent=0;
     //alert("0");
    }
    
  });

//check if current user is the auditor

//approve checkbox

// if(approved=="Approve")
//   {
//     document.getElementById("approval").style.display = 'None';
//     approval = $("select[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff91_ctl00_DropDownChoice']").val();
//     //document.getElementById('audit_section2').innerHTML=audit_section;
    
//     document.getElementById('approval2').innerHTML="<input type='text' value='"+approval+"' maxlength='255' class='ms-long ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";

//    // $('#iac_table #ff10{$Pos}').hide();

//    $("textarea[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff101_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

//    $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
//    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

//   }

//------------------ Approve or Reject --------------------
/* $("select[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff91_ctl00_DropDownChoice']").change(function() {
  var aprv_rject = $('select[id=ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff91_ctl00_DropDownChoice]').val();
if(aprv_rject=="Approve" && sent==1)
{
   $('#iac_table #approval2').show();
  document.getElementById("approval").style.display = 'None';
    approval = $("select[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff31_ctl00_DropDownChoice']").val();
    //document.getElementById('audit_section2').innerHTML=audit_section;
    
    document.getElementById('approval2').innerHTML="<input type='text' value='"+approval+"' maxlength='255' class='ms-long ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
}
});*/


//------------------------------------sent for approval------------------------------
if(document.getElementById('ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00').checked)
{   //alert("approved");

      $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
      var from_cal3 = document.getElementById("ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
      from_cal3.src = "";
      from_cal3.alt = "";

$("div[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff61_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');

$("div[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff51_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
$( "a[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff51_ctl00_ctl00_UserField_checkNames']" ).empty();
$( "a[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff51_ctl00_ctl00_UserField_browse']" ).empty();
// alert("t");
//$("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00']").attr('disabled', 'disabled');
    //SPUtility.GetSPField('Auditee').MakeReadOnly();
$("label[for='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00']").html('Sent to TQM');

/* $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");*/

 $('#iac_table #audit_section2').show();
  document.getElementById("audit_section").style.display = 'None';
    audit_section = $("select[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff31_ctl00_DropDownChoice']").val();
 document.getElementById('audit_section2').innerHTML="<input type='text' value='"+audit_section+"' maxlength='255' class='ms-long ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
// $("input[id='Date_x0020_of_x0020_Audit_c083f87a-7372-47f8-bc83-e7b52a34d49b_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
// document.getElementById("Date_x0020_of_x0020_Audit_c083f87a-7372-47f8-bc83-e7b52a34d49b_$DateTimeFieldDateDatePickerImage").style.width = "0px";

//hide show checklist approval
 $('#iac_table #sentTQM2').show();

  document.getElementById("sentTQM1").style.display = 'None';//show

  //checklist = $("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00']").val();
  //document.getElementById('audit_section2').innerHTML=audit_section;
    
  document.getElementById('sentTQM2').innerHTML="<span class='ms-RadioText' title='Check this for approval'><input id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00' disabled type='checkbox' name='ctl00$ctl42$g_4c113bd6_38aa_40a9_b193_495cacd004ce$ff81$ctl00$ctl00' checked='checked'><label for='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00'>Sent to TQM</label></span>";
}

// else if(document.getElementById('ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00').checked && approved=="Reject")
// {
//   alert("rejected")
//  // $('#iac_table #approveRejectHide').show();
//   document.getElementById("approval").style.display = 'None';
//     approval = $("select[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff91_ctl00_DropDownChoice']").val();
//     //document.getElementById('audit_section2').innerHTML=audit_section;
//     document.getElementById('approval2').innerHTML="<input type='text' value='"+approval+"' maxlength='255' class='ms-long ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
// }

//------change Save to Submit---------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");    

});

function PreSaveAction()
{

if (approved=="Reject")
{
//	$("input[id='ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff81_ctl00_ctl00']").removeAttr('checked');
document.getElementById('ctl00_ctl42_g_4c113bd6_38aa_40a9_b193_495cacd004ce_ff91_ctl00_DropDownChoice').selectedIndex=0;

}
  
   return true;
}
// }

// print PAGE
</script>

<script language="javascript" type="text/javascript">
        function printDiv(divID) {
          $('#internal_audit_checklist #hide_submission').hide();
            //Get the HTML of div
            var divElements = document.getElementById(divID).innerHTML;
            //Get the HTML of whole page 


            var oldPage = document.body.innerHTML;
            var concat_table = "<b>"+"Prepared by:  "+"</b>"+"<U>"+auditor+"</U>"+" - Auditor";
            var concat_table2 = "<b>"+"Approved by:  "+"</b>"+"<U>"+"Paul Maningo III"+"</U>"+" - QMR";
 //alert(divElements);

            //Reset the page's HTML with div's HTML only
            document.body.innerHTML =
              "<html><head><title></title></head><body>" +
              divElements +"<br><br><br><div align='center'><span align='left'><label class='ms-standardheader'>"+concat_table+"</label></span>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <span align='right'><label class='ms-standardheader'>"+concat_table2+"</label></span></div><br></body>";

            //Print Page
            window.print();
           

            //Restore orignal HTML
            document.body.innerHTML = oldPage;


        }
    </script>
<input value="Print Item" onclick="javascript:printDiv(&#39;printable_div&#39;)" type="image" onmouseover="this.style.backgroundColor=&#39;#d6e1f3&#39;" onmouseout="this.style.backgroundColor=&#39;white&#39;" src="/SiteAssets/print-icon.png" style="color: white; background-color: white; border: white;"/>
