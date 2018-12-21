​​​​​​​​​<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script><script type="text/javascript" src="/_layouts/15/sp.js"></script><script type="text/javascript" src="/_layouts/15/SP.UserProfiles.js"></script><script type="text/javascript">

function openDialog() {
   var e = document.getElementById('d10');
   var options = {
    title: "Staff Meal Choices",
    width: 435,
    height: 95,
    html: e
   };
   SP.SOD.execute('sp.ui.dialog.js', 'SP.UI.ModalDialog.showModalDialog', options);
}


var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;


function init(){



        //------------------------
    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));

    //-------------------------------------




 }

 //=====================================================================================================================================

 var returnedItems;
var get_author;
var temp_fname_lname;
var check_user_for_choices="no";


var returnedItems2;

var get_deadline;




   function onSucceededCallback(sender, args) {

    //Get the current context
         var context2 = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list2 = context2.get_web().get_lists().getByTitle('Lunch Menu');
         //Create a new CAML query
         var caml2 = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml2.set_viewXml("<Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>1</Value></Eq></Where></Query>");
         //Specify the query and load the list oject
        returnedItems2 = list2.getItems(caml2);
         context2.load(returnedItems2);
         //Run the query asynchronously, passing the functions to call when a response arrives
         //context2.executeQueryAsync(onSucceededCallback2, onFailedCallback2);

            context2.executeQueryAsync(
        Function.createDelegate(this,
function (sender, args) { 
         var enumerator2 = returnedItems2.getEnumerator();
         while (enumerator2.moveNext()) {

        var listItem2 = enumerator2.get_current();
        var id2 = listItem2.get_item('ID') 

         if(id2==1){//if

        var deadline2= listItem2.get_item('Deadline');
        var deadline_temp2 = deadline2.format('MM/dd/yyyy hh:ss tt');
        get_deadline = deadline_temp2;
        //alert("Menu Choices Deadline: "+get_deadline);
         
        }

    }

    var formated_today_date = new Date();
var formated_get_deadline = new Date(get_deadline);
//alert("Date Today: "+formated_today_date);
//alert("Formated Date Deadline: "+formated_get_deadline);

if(formated_today_date>formated_get_deadline){


}
    else{

    var enumerator = returnedItems.getEnumerator();
    while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();
        var get_author = listItem.get_item('Author').get_lookupValue();


//alert(get_author);
         if(get_author==temp_fname_lname){//if
        //alert(get_author);
        //alert(temp_fname_lname);
        check_user_for_choices="yes";
        }else if(temp_fname_lname=="Artem Soukhomlinov"){//if
        //alert(get_author);
      //  alert(temp_fname_lname);
        check_user_for_choices="yes";
        }



    }//end while

       if(check_user_for_choices=="no")
    {
        openDialog();

    }


}

    //alert(check_user_for_choices);

 

}),
Function.createDelegate(this,
function (sender, args) { 

      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

})

        );






}
   //This function fires when the query fails
   function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );
   }


//======================================================================================================================
function onQuerySucceeded() {

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;
    
    SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');

    Employee_Username = targetUser_temp;
    // alert(Employee_Username);
    if(Employee_Username != "artems" && 
      Employee_Username != "mithis" && 
      Employee_Username != "scotto" && 
      Employee_Username != "jeannem" && 
      Employee_Username != "ninoc" && 
      Employee_Username != "diannag" && 
      Employee_Username != "aysoukhomlinov"){
      ExecuteOrDelayUntilScriptLoaded(get_username_from_EmployeeProfile, "sp.js");
    }
    
}

// FERN CODE -----------------------------------------------------------<><><><><><><><><><><><><><><>

var emp_targetListItem;
var EmployeeInformation_ItemID = -1;
// var Employee_Username;
function get_username_from_EmployeeProfile(){
      // alert(Employee_Username);
      var clientContext = new SP.ClientContext('https://intranet.houseofit.com.au/');
      var oList = clientContext.get_web().get_lists().getByTitle('Employee Profile');
      var camlQuery = new SP.CamlQuery();
      camlQuery.set_viewXml('<View><Query><Where><Eq><FieldRef Name=\'LI_Username\'/>' + 
        '<Value Type=\'Text\'>'+Employee_Username+'</Value></Eq></Where></Query><RowLimit>1</RowLimit></View>');
        this.emp_targetListItem = oList.getItems(camlQuery);
      clientContext.load(emp_targetListItem);
      clientContext.executeQueryAsync(Function.createDelegate(this, this.get_username_from_EmployeeProfile_Succeeded), Function.createDelegate(this, this.onQueryFailed));
}
function get_username_from_EmployeeProfile_Succeeded(){
    var enumerator = emp_targetListItem.getEnumerator();
    // var Ref_ID;
    var fillup_status;
    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();  
        // Ref_ID = listItem.get_item('Title'); 
        EmployeeInformation_ItemID = listItem.get_item("ID");
        fillup_status = listItem.get_item("LI_FilledUpStatus");
    }
    if(EmployeeInformation_ItemID != -1){
      // alert(EmployeeInformation_ItemID);
      // alert("EmployeeInformation_ItemID = "+EmployeeInformation_ItemID + "\n"+fillup_status);
      // alert(Employee_Username);
      if(fillup_status == "HR Initial Fillup"){
        window.open("https://intranet.houseofit.com.au/SitePages/Employee%20Information%20Employee%20Form.aspx","_self")
      }
    }
    // else{
    //   // alert(targetUser);
    //   alert("targetUser = "+Employee_Username);
    // } 

}
function onQueryFailed(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

// FERN CODE ------------------------------------------------------------<><><><><><><><><><><><><><>

function getUserProperties() {



targetUser = 'hoitcebu\\'+targetUser;
    // Replace the placeholder value with the target user's credentials.
     //alert(targetUser);
     
     

    // Get the current client context and PeopleManager instance.
    var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
  

    // Specify the properties to retrieve and target user for the 
    // UserProfilePropertiesForUser object.
    var profilePropertyNames = ["FirstName", "LastName"];
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
    var firstname = userProfileProperties[0];
    var lastname =  userProfileProperties[1];

    temp_fname_lname = firstname+" "+lastname;
    
    //document.getElementById('ctl00_ctl42_g_80eeda80_d153_4c5d_8adc_cb5ef5bdee7f_ff71_ctl00_ctl00_TextField').value = lastname+", "+firstname;

    //Get the current context
         var context = new SP.ClientContext();
         //Get the Announcements list. Alter this code to match the name of your list
         var list = context.get_web().get_lists().getByTitle('Staff Meal Choice');
         //Create a new CAML query
         var caml = new SP.CamlQuery();
         //Create the CAML that will return only items with the titles that begin with 'T'
        caml.set_viewXml("<Query><OrderBy><FieldRef Name='ID' Ascending='True' /></OrderBy></Query>");
         //Specify the query and load the list oject
        returnedItems = list.getItems(caml);
         context.load(returnedItems);
         //Run the query asynchronously, passing the functions to call when a response arrives
         context.executeQueryAsync(onSucceededCallback, onFailedCallback);

  
    
}

// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup);

}







</script>

<style>

body {
  font-size: 13px;
}

#s4-workspace{
background-image: url(https://intranet.houseofit.com.au/SiteAssets/Image/contact-us_3_1.jpg);
background-size: cover;
overflow-x: hidden;}
</style> 
<br/>

<div style="display:none">
   <div id="d10">
       <h1 class="ms-core-pageTitle">Lunch Menu is now available.</h1><br>
       <div class="ms-textLarge">You can now select your preferred <a id="ms-PersonalSiteChangePhotoLink"  href="https://intranet.houseofit.com.au/Lists/Staff%20Meal%20Choice/NewFormCopy.aspx">meal choices</a>.</div>

   </div>
</div>