<script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
<script type="text/javascript" src="/_layouts/15/sp.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script>
<script src="/SiteAssets/sputility.min.js"></script>
<script src="/SiteAssets/Scripts/spjs-utility.js"></script>
<script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script>
<script src="/SiteAssets/Scripts/jquery.maskedinput.js"></script>
<script src="/SiteAssets/Scripts/jquery.maskedinput.min.js"></script>
<script type="text/javascript">

var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.


ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var thisListGuid = '{15EA8C05-930B-45E1-A14D-F86032A0F981}';


function getLastItemID(){ 
  var queryBuffer = [];
    queryBuffer.push("<Where><Eq><FieldRef Name='Author' LookupId='TRUE' /><Value Type='User'>"+_spPageContextInfo.userId+"</Value></Eq></Where>");
    queryBuffer.push("<OrderBy><FieldRef Name='ID' Ascending='FALSE' /></OrderBy>");
  var res = spjs_QueryItems({listName:thisListGuid,query:queryBuffer.join(''),viewFields:['ID'],rowLimit:1});
  
  if(res.count<0){
    alert("An error occurred. Most likely the parameter \"thisListGuid\" is wrong.");
  }else if(res.count>0){
    return res.items[0].ID;
  }else{
    return '';
  }
}

function getLastItemID2(get_ref_ccr_id){ 
  var queryBuffer = [];
    queryBuffer.push("<Where><Eq><FieldRef Name='ID' LookupId='TRUE' /><Value Type='Counter'>"+get_ref_ccr_id+"</Value></Eq></Where>");
    //queryBuffer.push("<OrderBy><FieldRef Name='ID' Ascending='FALSE' /></OrderBy>");
  var res = spjs_QueryItems({listName:thisListGuid,query:queryBuffer.join(''),viewFields:['ID'],rowLimit:1});
  
  if(res.count<0){
    alert("An error occurred. Most likely the parameter \"thisListGuid\" is wrong.");
  }else if(res.count>0){
    return res.items[0].ID;
  }else{
    return '';
  }
}



function RequestEnded(sender, args) {
  try {
    waitDialog.close();
    waitDialog = null;
  } catch (ex) { }
};

function RequestStarted(sender, args) {
   ExecuteOrDelayUntilScriptLoaded(ShowWaitDialog, "sp.js");
};
var waitDialog;
function ShowWaitDialog() {
   try {
      if (waitDialog == null) {
         waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose('Processing...', 'Please wait while request is in progress...', 100, 390);
      }
   } catch (ex) { }
};

var lastID;

  $(document).ready(function()
{

  //for display:none edit ribbon
setInterval(function(){ $("li[id='Ribbon.EditingTools.CPInsert-title']").hide(); }, 1000);

//alert("document.ready");//second to load


// jQuery(function($){
//    // $("#product").mask("99/99/9999",{placeholder:" "});
  // $("#ctl00_ctl43_g_16ac8981_9fef_489c_8338_4ee26a3650af_ff141_ctl00_ctl00_TextField").mask("CRF-9999-?9999",{placeholder:" "});
// });




 // $("input[id='ctl00_ctl43_g_16ac8981_9fef_489c_8338_4ee26a3650af_ff141_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6')

document.getElementById("ctl00_ctl43_g_16ac8981_9fef_489c_8338_4ee26a3650af_ff41_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_16ac8981_9fef_489c_8338_4ee26a3650af_ff41_ctl00_ctl00_TextField").size = "25";


document.getElementById("ctl00_ctl43_g_16ac8981_9fef_489c_8338_4ee26a3650af_ff51_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_16ac8981_9fef_489c_8338_4ee26a3650af_ff51_ctl00_ctl00_TextField").size = "25";

// document.getElementById("ctl00_ctl43_g_16ac8981_9fef_489c_8338_4ee26a3650af_ff141_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
// document.getElementById("ctl00_ctl43_g_16ac8981_9fef_489c_8338_4ee26a3650af_ff141_ctl00_ctl00_TextField").size = "25";

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




//------------------------------------

// List GUID or list display name of the current list

// This code runs only if the ID parameter is omitted
if(GetUrlKeyValue('1d4cbe84a46f9b05a6d8007edf5a1d53')=='true'){
RequestStarted();
    lastID = getLastItemID();
   // alert(lastID);
   //console.log("Last ID for CCR: "+lastID);
    get_ccr(lastID);



  //if(lastID!==''){
    //var newURL = location.pathname+"?ID="+lastID;
    //alert(newURL);
    //if(GetUrlKeyValue('IsDlg')==='1'){
      //newURL+="&IsDlg=1";
    //}
    //location.href=newURL+"&Source=https%3A%2F%2Fintranet.houseofit.com.au%2FLists%2FExpense%2520Reimbursement%2520Form%2FMy%2520Reimbursement%2520Forms%2Easpx";

    
  //}
}else{
  
	// $("input[id='ctl00_ctl43_g_16ac8981_9fef_489c_8338_4ee26a3650af_ff141_ctl00_ctl00_TextField']").removeAttr('readonly').css('background-color','')
}



openDialog();

});



var itemId;
var reference_no;
   function get_ccr(set_id){
 itemId = set_id;

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Change Request Form');
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

			reference_no= listItem.get_item('Title');
        
        }//end if
  
        
      }  //end while

      //console.log(reference_no);
      console.log("Auto Populate CCR Field.");


	// document.getElementById("ctl00_ctl43_g_16ac8981_9fef_489c_8338_4ee26a3650af_ff141_ctl00_ctl00_TextField").value = reference_no;
      //alert("calling myfunction");
      //myFunction();

    

  }



var myVar;
var loop=0;
function myFunction() {
    myVar = setTimeout(function(){
    var get_ccr_reference_no = $('input[id=ctl00_ctl43_g_16ac8981_9fef_489c_8338_4ee26a3650af_ff141_ctl00_ctl00_TextField]').val();

    if(reference_no=="" || typeof(reference_no) =="undefined" || get_ccr_reference_no==""){
      console.log("running timer");
        if(loop<=5)
      {
        console.log(loop);
        get_ccr(lastID);
        

      }else{
        alert("Cannot retrieve CCR Reference No. Click Ok to reload this page. ")
        myStopFunction();
        location.reload();


      }
        
    }else{
        console.log("stoped timer");
        myStopFunction();
    }



   }, 1000);
    loop=loop+1;
}

function myStopFunction() {
  //alert("stoped timer");
    clearTimeout(myVar);
    RequestEnded();
}


     function onFailedCallback(sender, args) {
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      alert(markup );

   }



 var targetUser;

 function init(){
//SPUtility.GetSPField('Temp').MakeReadOnly();
//SPUtility.HideSPField('Temp');

//alert("first to load");
        //------------------------


    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));
    

 }




function onQuerySucceeded() {

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;
  
  
    SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');
}


function getUserProperties() {



targetUser = 'hoitcebu\\'+targetUser;
    // Replace the placeholder value with the target user's credentials.
     //alert(targetUser);
     
     

    // Get the current client context and PeopleManager instance.
    var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
  

    // Specify the properties to retrieve and target user for the 
    // UserProfilePropertiesForUser object.
    var profilePropertyNames = ["PreferredName", "Department", "Manager"];
    var userProfilePropertiesForUser = 
        new SP.UserProfiles.UserProfilePropertiesForUser(
            clientContext,
            targetUser,
            profilePropertyNames);

    // Get user profile properties for the target user.
    // To get the value for only one user profile property, use the
    // getUserProfilePropertyFor method.
    userProfileProperties = peopleManager.getUserProfilePropertiesFor(
        userProfilePropertiesForUser);

    // Load the UserProfilePropertiesForUser object and send the request.
    clientContext.load(userProfilePropertiesForUser);
    clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
}
var immediate_head_var;
// This function runs if the executeQueryAsync call succeeds.
function onRequestSuccess() {
    var requestorName = userProfileProperties[0];
    var department =  userProfileProperties[1];
    var manager =  userProfileProperties[2];
    document.getElementById('ctl00_ctl43_g_16ac8981_9fef_489c_8338_4ee26a3650af_ff41_ctl00_ctl00_TextField').value = requestorName;
    document.getElementById('ctl00_ctl43_g_16ac8981_9fef_489c_8338_4ee26a3650af_ff51_ctl00_ctl00_TextField').value = department;
    //document.getElementById('Comment_6df9bd52-550e-4a30-bc31-a4366832a87f_$TextField').value = manager;
  
    
}



// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
    alert("Error: " + args.get_message());
}


function openDialog() {
   var e = document.getElementById('d10');
   var options = {
    title: "Reminder",
    width: 625,
    height: 150,
    html: e
   };
   SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
}


 function PreSaveAction()

{


// var ccr_reference_no2 = $('input[id=ctl00_ctl43_g_16ac8981_9fef_489c_8338_4ee26a3650af_ff141_ctl00_ctl00_TextField]').val();
// //alert(ccr_reference_no);
// if(ccr_reference_no2!=""){
//     var substring_id2= ccr_reference_no2.substring(9);
//     //alert(ccr_reference_no2);
//     var lastID2 = getLastItemID2(substring_id2);
//    	//alert(lastID2);

// }
	// if(lastID2==""){
	// alert("Reference no. doesn't exist. Please enter correct reference no.")
	// return false;

	// }else{

	// return true;	
	// }


return true;
 }

</script><i><b class="ms-rteForeColor-2">Note:</b> Make sure you receive an email once you save the request from sharepoint@houseofit.com.au indicating &quot;<span class="ms-rteThemeForeColor-5-0">Thank you for Submitting</span>&quot;.<br/> If you haven&#39;t receive any email upon submittin​​g the request , Please send an email to 
      <a href="mailto:sharepoint2@houseofit.com.au?Subject=There%20was%20a%20problem%20while%20processing%20the%20request.">SharePoint Support</a>​​​ or click the link.​​​​​​​​​​</i><br><br>

      <div style="display:none">
   <div id="d10">
       <h3 class="ms-core-pageTitle"> Document Change Request Form <img width="35px" align="center" src="https://intranet.houseofit.com.au/SiteAssets/info%20icon.png"/></h3> <br>
       <div class="ms-textLarge">Please be reminded that a <a id="ms-PersonalSiteChangePhotoLink"  href="https://intranet.houseofit.com.au/Lists/Document%20Change%20Request%20Form/NewFormCopy.aspx">document change request form</a> only applies for changes impacting your documented information such as work instructions, forms or manuals.<br>Which includes new and additional documents. If it's process changes only, then a <a id="ms-PersonalSiteChangePhotoLink"  href="https://intranet.houseofit.com.au/Lists/Change%20Control%20Request%20Form/NewFormCopy.aspx">process change request </a> is more appropriate.</div>

   </div>
</div>

