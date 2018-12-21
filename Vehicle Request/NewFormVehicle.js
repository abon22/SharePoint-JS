​​​​​<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script> ​​​<script src="/SiteAssets/Scripts/jquery.timeago.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script type="text/javascript">

//style="white-space:normal;"
var userProfileProperties;

ExecuteOrDelayUntilScriptLoaded(init,'sp.js');

$(document).ready(function(){
	//------change Save to Submit---------
	var inputcontrols = document.getElementsByTagName("input");
	for(i = 0; i<inputcontrols.length; i++)
	{
		if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
			inputcontrols[i].value = "Submit";
	}

	// document.getElementById('Requestor_x0020_Name_84d1347c-86d5-4a71-90e4-0b37ca78c2bc_$TextField').readOnly  = true;

	// $("input[id='Requestor_x0020_Name_84d1347c-86d5-4a71-90e4-0b37ca78c2bc_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	// $("input[id='Requestor_x0020_Name_84d1347c-86d5-4a71-90e4-0b37ca78c2bc_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	 /*removing approval select*/
	 // document.getElementById("ctl00_ctl42_g_e531d380_bd97_44a4_95f6_751573c02395_ff31_ctl00_DropDownChoice").remove();
	
    document.getElementById("ctl00_ctl42_g_e531d380_bd97_44a4_95f6_751573c02395_ff131_ctl00_ctl00_TextField").style.width = "100px";
    // $('#ctl00_ctl42_g_e531d380_bd97_44a4_95f6_751573c02395_ff31_ctl00_DropDownChoice').remove();


	//$('#ctl00_ctl42_g_e531d380_bd97_44a4_95f6_751573c02395_ff131_ctl00_ctl00_TextField').css('width', '327px');
	// $('#ctl00_ctl42_g_e531d380_bd97_44a4_95f6_751573c02395_ff141_ctl00_ctl00_UserField_upLevelDiv').css('width', '331px');
	 var userid= _spPageContextInfo.userId;
	  var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";
	  var requestHeaders = { "accept" : "application/json;odata=verbose" };
	  $.ajax({
		url : requestUri,
		contentType : "application/json;odata=verbose",
		headers : requestHeaders,
		success : onSuccess,
		error : onError
	  });
	  
	  
	  /*customize styles*/
	  
	  /*customize remove approval*/
		var refNumber = 3;
		// $('table tr td').css('float', 'left');
		$('#ctl00_ctl42_g_e531d380_bd97_44a4_95f6_751573c02395_ff191_ctl00_ctl00_TextField').prop('readonly', true);
		$('#ctl00_ctl42_g_e531d380_bd97_44a4_95f6_751573c02395_ff11_ctl00_ctl00_TextField').prop('readonly', true);

		//resize Reference #
  	document.getElementById("ctl00_ctl42_g_e531d380_bd97_44a4_95f6_751573c02395_ff191_ctl00_ctl00_TextField").style.width = "140px";
		
	
});
function onSuccess(data, request){
    var loginName = data.d.Title;
    $('#ctl00_ctl42_g_e531d380_bd97_44a4_95f6_751573c02395_ff11_ctl00_ctl00_TextField').val(loginName);

  }
  function onError(error) {
    alert("error");
  }

var targetUser;

 function init(){
//SPUtility.GetSPField('Temp').MakeReadOnly();
//SPUtility.HideSPField('Temp');
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

    // $("input[id=ctl00_ctl42_g_55ac898b_b994_41a0_9b2b_b0ad936b1be7_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly');

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
    alert(console.log(clientContext.executeQueryAsync(onRequestSuccess, onRequestFail)));
}
var immediate_head_var;
// This function runs if the executeQueryAsync call succeeds.
function onRequestSuccess() {
    var requestorName = userProfileProperties[0];
    var department =  userProfileProperties[1];
    var manager =  userProfileProperties[2];
    //document.getElementById('ctl00_ctl42_g_e531d380_bd97_44a4_95f6_751573c02395_ff11_ctl00_ctl00_TextField').value = requestorName;
	
	
}

// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
  alert( "Error: " + args.get_message());
}
</script>
