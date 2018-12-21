<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="/_layouts/sp.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var userProfileProperties;
var targetUser;


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
    $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

//show
/*   $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('hidden');
   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");*/
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
var ca_remarks_status="";

var concatUsername = "hoitcebu\\"+"victors";
var concatUsername2 = "hoitcebu\\"+"paulm";
var concatUsername3 = "hoitcebu\\"+"carla";

    function onSucceededCallback(sender, args) {
         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

  		var id = listItem.get_item('ID')

        if(itemId==id){//if

			department_head= listItem.get_item('Department_x0020_Head').get_lookupValue();
			person_involved= listItem.get_item('Person_x0020_Involved').get_lookupValue();

        }//end if


      }  //end while
//----------


//------------- i acknowledge the above statement ------------------------
$("input[type='checkbox'][id='I_x0020_acknowledged_616616af-a453-46ef-b668-3730e226e243_MultiChoiceOption_0']").change(function()
{
	if(get_preferredname==person_involved||concatUsername3==concatUsername3){

			if(document.getElementById('I_x0020_acknowledged_616616af-a453-46ef-b668-3730e226e243_MultiChoiceOption_0').checked)
		  {
		    checked_acknowledge=1;
		    //SPUtility.ShowSPField('Correction');

	    	/*SPUtility.ShowSPField('Root Cause/s');
		    SPUtility.ShowSPField('Corrective Action');
		    SPUtility.ShowSPField('Implementation Date');*/

		   // SPUtility.GetSPField('Corrective Action Steps').MakeReadOnly();
		    //$("textarea[id='Root_x0020_Cause_x002f_s_f072a97b-768f-4eb5-a3c3-2466f10fa56e_$TextField_topDiv']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
		   //$("textarea[id='Corrective_x0020_Action_2d7b9a79-45e3-458a-860d-ac17f5198a3c_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


		    document.getElementById("I_x0020_acknowledge_53830d96-1a5c-4821-8778-52d9badd9072_$TextField").value = get_preferredname;

		    //show button submit
		   $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('hidden');
		   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
		  }
		  else
		  {
		    checked_acknowledge=0;
		    //SPUtility.HideSPField('Correction');
		    /*SPUtility.HideSPField('Root Cause/s');
		    SPUtility.HideSPField('Corrective Action');
		    SPUtility.HideSPField('Implementation Date');*/

		    //hide button submit
		    $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
		    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
		  }
	}



})

 // alert("prefered_name: "+get_preferredname);
 // alert("prefered_name: "+get_preferredname);

  // -------------------------------------- Approve -------------------
$("input[type='checkbox'][id='I_x0020_Approve_8afa9665-d237-40d4-813d-f09dc3d8eb68_MultiChoiceOption_0']").change(function()
{

if(get_preferredname==department_head)
  {
     if(document.getElementById('I_x0020_Approve_8afa9665-d237-40d4-813d-f09dc3d8eb68_MultiChoiceOption_0').checked)
      {


        checked_approve=1;

        document.getElementById("Approved_x0020_by_f241c084-6fb2-4aaf-b146-c0b79c6ec5a3_$TextField").value = get_preferredname;

        //show button submit
       $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('hidden');
       $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
      }
      else
      {


        checked_approve=0;

        //hide button submit
        $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
        $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
      }
  }
})

  if(targetUser==concatUsername || targetUser==concatUsername2||targetUser==concatUsername3)
  {

    if(checked_acknowledge=1 && checked_approve==1)
    {
      SPUtility.ShowSPField('Confirm');
    }

if(document.getElementById('I_x0020_Confirm_340e2717-1c8f-41d6-851e-9ea1b0b49d4c_MultiChoiceOption_0').checked)
        {

          checked_confirm=1;
          SPUtility.HideSPField('Confirm');
          SPUtility.ShowSPField('Confirmed by');
          $("input[Title='Confirmed by']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
          }

// -------------------------------------- Confirm -------------------
$("input[type='checkbox'][id='I_x0020_Confirm_340e2717-1c8f-41d6-851e-9ea1b0b49d4c_MultiChoiceOption_0']").change(function()
{


	 if(document.getElementById('I_x0020_Confirm_340e2717-1c8f-41d6-851e-9ea1b0b49d4c_MultiChoiceOption_0').checked)
	  {

	    checked_confirm=1;
	     document.getElementById("Confirmed_x0020_by_7d9de776-f047-4de7-acb2-8351b8938ee3_$TextField").value = get_preferredname;
	    //show button submit
	   $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('hidden');
	   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");
	  }
	  else
	  {
	    checked_confirm=0;

	    //hide button submit
	   $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
	   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
	   
	  }




 //endchange
})
}



//========================================================================================================

}
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
var temp_clause;


  $(document).ready(function()
{
			 SPUtility.ShowSPField('Root Cause/s');
		   SPUtility.ShowSPField('Corrective Action Steps');
		   SPUtility.ShowSPField('Implementation Date');

 ExecuteOrDelayUntilScriptLoaded(init,'sp.js');


$("input[id='Revision_d0c51bce-8419-409c-a1c5-5fcbe92206fd_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
// SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function(){
//  init();
// });


$("input[Title='Document no.']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

/*$("input[id='Date_8b274685-7416-4250-adaa-c3123a06e8f2_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
var from_cal = document.getElementById("Date_8b274685-7416-4250-adaa-c3123a06e8f2_$DateTimeFieldDateDatePickerImage");
from_cal.src = "";
from_cal.alt = "";*/

//thisthis
SPUtility.HideSPField('Person Involved');
SPUtility.HideSPField('Department Head');
SPUtility.GetSPField('Classification').MakeReadOnly();
SPUtility.GetSPField('Department').MakeReadOnly();
SPUtility.GetSPField('Team').MakeReadOnly();
$("textarea[id='Describe_x0020_the_x0020_Existin_b532c64e-c365-49ea-8ab1-b5e5d481e55a_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

//SPUtility.HideSPField('Correction');
/*SPUtility.HideSPField('Root Cause/s');
SPUtility.HideSPField('Corrective Action');
SPUtility.HideSPField('Implementation Date');*/

SPUtility.HideSPField('Approve');
SPUtility.HideSPField('Approved by');
SPUtility.HideSPField('Confirm');
SPUtility.HideSPField('Confirmed by');
SPUtility.HideSPField('Acknowledged by');

   //hide button submit
   // $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
   // $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

$("input[id='Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Corrective_x0020_Action_x0020_no_1112a70c-2e56-4b93-bee2-e981720516a3_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


  //check value of acknowledge
  if(document.getElementById('I_x0020_acknowledged_616616af-a453-46ef-b668-3730e226e243_MultiChoiceOption_0').checked)
  {

    //if naay sulod
    checked_acknowledge=1;

    //thisthis
    SPUtility.HideSPField('Acknowledgement');
    //SPUtility.ShowSPField('Correction');

    SPUtility.ShowSPField('Root Cause/s');
    SPUtility.ShowSPField('Corrective Action Steps');
    SPUtility.ShowSPField('Implementation Date');
    SPUtility.ShowSPField('Acknowledged by');

    $("input[Title='Acknowledged by']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

    	$("input[id='Implementation_x0020_Date_b0cbeed1-d2b3-4138-9f7d-8d506b547eac_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
/*	$("div[id='Root_x0020_Cause_x002f_s_f072a97b-768f-4eb5-a3c3-2466f10fa56e_$TextField_topDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
$("textarea[id='Corrective_x0020_Action_2d7b9a79-45e3-458a-860d-ac17f5198a3c_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
*/


    //$("textarea[Title='Correction']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[Title='Implementation Date']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    var from_cal = document.getElementById("Implementation_x0020_Date_b0cbeed1-d2b3-4138-9f7d-8d506b547eac_$DateTimeFieldDateDatePickerImage");
    from_cal.src = "";
    from_cal.alt = "";

    SPUtility.ShowSPField('Approve');

     //hide button submit

    $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
    //SPUtility.ShowSPField('Approved by');

    if(document.getElementById('I_x0020_Approve_8afa9665-d237-40d4-813d-f09dc3d8eb68_MultiChoiceOption_0').checked)
    {
        checked_approve=1;
        SPUtility.HideSPField('Approve');
        SPUtility.ShowSPField('Approved by');
        $("input[Title='Approved by']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
//this1
$("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
        //SPUtility.ShowSPField('Confirm');
         //SPUtility.ShowSPField('Confirmed by');

//cannot be edited --------- 7/31/2017
    /*    $("textarea[Title='Corrective Action Steps']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        $("div[id='Root_x0020_Cause_x002f_s_f072a97b-768f-4eb5-a3c3-2466f10fa56e_$TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
        $("input[id='Date_8b274685-7416-4250-adaa-c3123a06e8f2_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        var from_cal = document.getElementById("Date_8b274685-7416-4250-adaa-c3123a06e8f2_$DateTimeFieldDateDatePickerImage");
        from_cal.src = "";
        from_cal.alt = "";*/
          //alert("sample");

        //show button submit
      $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('hidden');
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");

       if(document.getElementById('I_x0020_Confirm_340e2717-1c8f-41d6-851e-9ea1b0b49d4c_MultiChoiceOption_0').checked)
        {
          checked_confirm=1;
          SPUtility.HideSPField('Confirm');
          SPUtility.ShowSPField('Confirmed by');
          $("input[Title='Confirmed by']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

            //cannot be edited --------- 7/31/2017
        $("textarea[Title='Corrective Action Steps']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        $("div[id='Root_x0020_Cause_x002f_s_f072a97b-768f-4eb5-a3c3-2466f10fa56e_$TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
        $("input[id='Date_8b274685-7416-4250-adaa-c3123a06e8f2_$DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
        var from_cal = document.getElementById("Date_8b274685-7416-4250-adaa-c3123a06e8f2_$DateTimeFieldDateDatePickerImage");
        from_cal.src = "";
        from_cal.alt = "";

         // SPUtility.HideSPField('Confirm');
          //SPUtility.ShowSPField('Confirmed by');

           //hide button submit
    $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

       }
       else
       {
            checked_confirm=0;
         //hide button submit

    $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

/*$("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('hidden');
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");*/

     }


    }
    else
    {
        checked_approve=0;
        //hide button submit
    $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

/* $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").removeAttr('hidden');
      $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","");*/

    }

  }
  else
  {
    checked_acknowledge=0;

       //hide button submit thisthis
   $("input[id='ctl00_ctl43_g_3db79831_bec4_43e3_8a91_b92cd3366c6c_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
   $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

    //SPUtility.HideSPField('Correction');
  /*  SPUtility.HideSPField('Root Cause/s');
    SPUtility.HideSPField('Corrective Action');
    SPUtility.HideSPField('Implementation Date');*/
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




})

function PreSaveAction()
{



var acknowledged_by = $("textarea[id='I_x0020_acknowledge_53830d96-1a5c-4821-8778-52d9badd9072_$TextField']").val();
var approves_by = $("textarea[id='Approved_x0020_by_f241c084-6fb2-4aaf-b146-c0b79c6ec5a3_$TextField']").val();
var confirm_by = $("textarea[id='Confirmed_x0020_by_7d9de776-f047-4de7-acb2-8351b8938ee3_$TextField']").val();

//var correction = $("textarea[id='Correction_98cb3039-fc2b-4a93-be2b-1fed6bcf3c2e_$TextField']").val();
var root_cause = $("textarea[id='Root_x0020_Cause_x002f_s_f072a97b-768f-4eb5-a3c3-2466f10fa56e_$TextField']").val();
var corrective_action = $("textarea[id='Corrective_x0020_Action_2d7b9a79-45e3-458a-860d-ac17f5198a3c_$TextField']").val();
var implementation_date = $("input[id='Implementation_x0020_Date_b0cbeed1-d2b3-4138-9f7d-8d506b547eac_$DateTimeFieldDate']").val();

/*if (correction =="" && checked_acknowledge==1)
{
  alert("Information, Correction needs a value. Please enter a value.");
  return false;
}*/


// <br><h1><span style="color: #ff0000; text-decoration: none solid #ff0000;"><span style="text-decoration: none solid #ff0000;">Maintenance is ongoing! Will be back soon. </span></span></h1>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

if (root_cause =="" && checked_acknowledge==1)
{
  alert("Information, Root Cause/s needs a value. Please enter a value.");
  return false;
}

else if (corrective_action =="" && checked_acknowledge==1)
{
  alert("Information, Corrective Action needs a value. Please enter a value.");
  return false;
}

else if (implementation_date =="" && checked_acknowledge==1)
{
  alert("Information, Implementation Date needs a value. Please enter a value.");
  return false;
}

else
{
return true;
}
}
</script>
