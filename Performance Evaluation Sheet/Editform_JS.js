​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><<script type="text/javascript">



var userProfileProperties;

// ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

function checkuserprofile()
{
  //alert("Init running...");


    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);
    this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.onQuerySucceeded2), Function.createDelegate(this,this.onQueryFailed2));

}
var get_preferredname;
  function onQuerySucceeded2()
  {

var account = targetUser.get_loginName();
targetUser_temp = account.substring(account.indexOf("|") + 10);
targetUser = targetUser_temp;

SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');


alert(targetUser_temp);

  }

function getUserProperties() {
// targetUser = 'hoitcebu\\'+targetUser;

var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
    // Specify the properties to retrieve and target user for the
    // UserProfilePropertiesForUser object.
    var profilePropertyNames = ["PreferredName"];
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
function onRequestSuccess() {
    get_preferredname = userProfileProperties[0];
  //alert("Login user: "+get_preferredname);


}
  function onRequestFail(sender, args) {
    alert("Error Occurred! Please contact administrator, " + args.get_message());

}


    function onSucceededCallback(sender, args) {
         var enumerator = returnedItems.getEnumerator();
         while (enumerator.moveNext()) {

        var listItem = enumerator.get_current();

      var id = listItem.get_item('ID')

        if(itemId==id){//if

      get_immediate= listItem.get_item('Immediate_x0020_Head').get_lookupValue();
     // alert("From DB: "+get_immediate);



        }//end if

      }  //end while
    }


     function onFailedCallback(sender, args) {
      //Formulate HTML to display details of the error
      var markup = '<p>The request failed: <br>';
      markup += 'Message: ' + args.get_message() + '<br>';
      //Display the details
      alert(markup );

    //  $("input[id='ctl00_ctl43_g_2e3cf327_2b55_4afc_bccd_218f04d010f4_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
    // $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
   }

$(function() {
  checkuserprofile();
});


//get the name of the current user
// var context = null;
// var web = null;
// var currentUser = null;
// ExecuteOrDelayUntilScriptLoaded(GetUserLoginName, "sp.js");

// function GetUserLoginName() {
//   context = new SP.ClientContext.get_current();
//   web = context.get_web();
//   this._currentUser = web.get_currentUser();
//   context.load(this._currentUser);
//   context.executeQueryAsync(Function.createDelegate(this, this.onSuccessMethod),
//   Function.createDelegate(this, this.onFailureMethod));
// }

// function onSuccessMethod(sender, args) {
//    //document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff21_ctl00_ctl00_TextField").value = WeightedScore;
// document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff801_ctl00_ctl00_UserField_upLevelDiv').innerHTML =this._currentUser.get_title();
// //change the ID here to your people picker field ID.
// }

// function onFaiureMethod(sender, args) {

//  alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());
// }


</script>
