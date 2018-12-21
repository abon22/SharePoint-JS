​​​​​​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.min.js"></script>​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery.timeago.js"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script type="text/javascript">


var var_acknowledge='';
var issue_id;
var var_onload_ack='';

$(function() {

document.getElementById("Document_x0020_No_7b2cdb39-a426-4a4b-99b2-224e8ab4e839_$TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("Document_x0020_No_7b2cdb39-a426-4a4b-99b2-224e8ab4e839_$TextField").size = "11";
$("input[id='Document_x0020_No_7b2cdb39-a426-4a4b-99b2-224e8ab4e839_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

document.getElementById("Revision_f7fba72b-6fd8-4c65-aa19-c6119e22c73a_$NumberField").className = "ms-input ms-spellcheck-true ";
document.getElementById("Revision_f7fba72b-6fd8-4c65-aa19-c6119e22c73a_$NumberField").size = "11";
$("input[id='Revision_f7fba72b-6fd8-4c65-aa19-c6119e22c73a_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

SPUtility.HideSPField('Equipment Condition');
SPUtility.HideSPField('Verified By');

$("input[id='Verified_x0020_By_fd1d0bc8-7c27-4678-ba3b-37619dbe6b32_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 



get_user();

// $("input[id='ctl00_ctl40_g_163a3b3e_9362_462f_9088_bcc59f3ed0b2_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
// $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

$("input[id='Form_x0020_No_x002e__5806110a-3093-4f33-8991-18bd05fe7cec_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

  // Get the ID from the query string
  var id = getQueryString()["ID"];
 issue_id= parseInt(id);

SPUtility.HideSPField('Name');
SPUtility.ShowSPField('Staff Name');
       

 var d = new Date();
       

if(document.getElementById('Used_x0020_for_949b9577-5c86-430b-abe6-76461befbb99_$RadioButtonChoiceField0').checked) {

$("input[id='Used_x0020_for_949b9577-5c86-430b-abe6-76461befbb99_$RadioButtonChoiceField1']").attr('disabled', 'disabled');

}else if(document.getElementById('Used_x0020_for_949b9577-5c86-430b-abe6-76461befbb99_$RadioButtonChoiceField1').checked) {

$("input[id='Used_x0020_for_949b9577-5c86-430b-abe6-76461befbb99_$RadioButtonChoiceField0']").attr('disabled', 'disabled');

}


if(document.getElementById('Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField0').checked) {

var_acknowledge="Yes";

}else if(document.getElementById('Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField1').checked) {

var_acknowledge="No";
var_onload_ack=1;

}

$("input[id='Staff_x0020_Name_8fa87840-cb92-448e-8ea3-ce9b643ae030_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 

// $("table.ms-formtable").find("tbody tr:nth-child(2)").first().children("td:nth-child(2)").text("Header One");

$("select[id='Department_6f2462d2-5d2a-4cd0-8746-1843119f7a2b_$LookupField']").attr('disabled', 'disabled');       
$("select[id='Position_4055437d-e159-46b4-a497-eaf8aa1f74d1_$LookupField']").attr('disabled', 'disabled'); 

$("div[id='Computer_x0020_Units_fb2770a7-69d3-4873-9592-35864cd4b5ec_$TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#F6F6F6'); ;
 



$('input[type=radio][name=Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField]').change(function() {
      
if(document.getElementById('Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField0').checked) {

var_acknowledge="Yes";

}else if(document.getElementById('Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField1').checked) {

var_acknowledge="No";

}
    });






})


function getQueryString() {
  var assoc = new Array();
  var queryString = unescape(location.search.substring(1));
  var keyValues = queryString.split('&');
  for (var i in keyValues) {
    var key = keyValues[i].split('=');
    assoc[key[0]] = key[1];
    }
  return assoc;
}



var userProfileProperties;
//ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;
function get_user(){
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
   get_accountability();
    
}



  function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());
    
    $("input[id='ctl00_ctl43_g_96d7e27a_7f3d_43b9_b67b_718caa889108_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
}

var itemId;
 function get_accountability(){
 itemId = GetUrlKeyValue("ID", false, location.href);

         //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('IT Accountability Form');
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

var name;
var author;

    function onSucceededCallback(sender, args) {
         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

      var id = listItem.get_item('ID') 
        
        if(itemId==id){//if

      name= listItem.get_item('Name').get_lookupValue();
      author= listItem.get_item('Author').get_lookupValue();
        
        }//end if
  
        
      }  //end while


// alert("Login User:"+get_preferredname);
// alert("Query Name:"+name);
// alert(var_acknowledge);
  if(var_acknowledge==""){

      if(get_preferredname==name){

      }else{


        $("input[id='ctl00_ctl43_g_96d7e27a_7f3d_43b9_b67b_718caa889108_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
        $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
      }


  }

  else if(var_acknowledge=="No"){

    if(get_preferredname==author){
     //alert("aw");
          if(document.getElementById('Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField0').checked) {

$("input[id='Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField1']").attr('disabled', 'disabled');

}else if(document.getElementById('Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField1').checked) {

$("input[id='Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField0']").attr('disabled', 'disabled');

}



      $("div[id='Computer_x0020_Units_fb2770a7-69d3-4873-9592-35864cd4b5ec_$TextField_inplacerte']").attr('contenteditable', 'true').css('background-color','');
    //  SPUtility.HideSPField("Acknowledgement");
    }else{

          if(document.getElementById('Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField0').checked) {

$("input[id='Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField1']").attr('disabled', 'disabled');

}else if(document.getElementById('Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField1').checked) {

$("input[id='Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField0']").attr('disabled', 'disabled');

}
      $("input[id='ctl00_ctl43_g_96d7e27a_7f3d_43b9_b67b_718caa889108_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
    }
    

  }else{
    //SPUtility.HideSPField("Acknowledgement")

 SPUtility.ShowSPField('Equipment Condition');
 SPUtility.ShowSPField('Verified By');


    if(document.getElementById('Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField0').checked) {

$("input[id='Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField1']").attr('disabled', 'disabled');

}else if(document.getElementById('Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField1').checked) {

$("input[id='Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField0']").attr('disabled', 'disabled');

}
    

      if(get_preferredname==author){

        var equip_condition = $('select[id=Equipment_x0020_Condition_06a346cc-4dcc-4e08-a880-1f874a65f061_$DropDownChoice]').val();
        var verify_by = $('input[id=Verified_x0020_By_fd1d0bc8-7c27-4678-ba3b-37619dbe6b32_$TextField]').val();

        if(equip_condition!="" && verify_by!=""){

          $("select[id='Equipment_x0020_Condition_06a346cc-4dcc-4e08-a880-1f874a65f061_$DropDownChoice']").attr('disabled', 'disabled');  
          $("input[id='ctl00_ctl43_g_96d7e27a_7f3d_43b9_b67b_718caa889108_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

        }


      }else{


    
        $("select[id='Equipment_x0020_Condition_06a346cc-4dcc-4e08-a880-1f874a65f061_$DropDownChoice']").attr('disabled', 'disabled');  
        $("input[id='ctl00_ctl43_g_96d7e27a_7f3d_43b9_b67b_718caa889108_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
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

      $("input[id='ctl00_ctl43_g_96d7e27a_7f3d_43b9_b67b_718caa889108_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }

   function PreSaveAction()

{

var equip_condition = $('select[id=Equipment_x0020_Condition_06a346cc-4dcc-4e08-a880-1f874a65f061_$DropDownChoice]').val();

  var comments = $('textarea[id=V3Comments_6df9bd52-550e-4a30-bc31-a4366832a87e_$TextField]').val();
    if(var_onload_ack=="1"){
    document.getElementById('Acknowledgment_7e9b6e76-e0ab-444a-9137-47356f9bd89e_$RadioButtonChoiceField1').checked = false;
  }
  

  //alert("ack: "+var_acknowledge);
  if(var_acknowledge==""){
    alert("Please select if you want to acknowledge or not.");
    return false;
  }else if(var_acknowledge=="No" && comments=="" && var_onload_ack==""){
    alert("Please enter comments upon rejection.");
    return false;
  }else{

    if(equip_condition!="")
    {      //alert(author);
      document.getElementById("Verified_x0020_By_fd1d0bc8-7c27-4678-ba3b-37619dbe6b32_$TextField").value=author;
    }

    return true;
   // return false;//true
  }


}



</script>​​​