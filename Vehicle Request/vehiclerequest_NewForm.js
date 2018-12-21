​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var userProfileProperties;

ExecuteOrDelayUntilScriptLoaded(init,'sp.js');

$(document).ready(function()
{   
    alert("The Date of Request Must be 3 Days before the Use of Vehicle.");
    $('#ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDate').prop('readonly', true);
    $('#ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage').remove();
    document.getElementById("ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff251_ctl00_ctl00_TextField_inplacerte").style.width = "800px";

    var div = document.getElementById('ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff251_ctl00_ctl00_TextField_inplacerte');
        div.innerHTML = "<div> <strong> <br/></strong></div><div> <strong>Employee Use of Other than Company Owned Vehicles-For Business Use</strong></div><div> <span style='white-space: pre;'></span>&#160; &#160; &#160; The company does not assume any liability for bodily injuries or property damage the employee</div><div>may become personally obligated to pay arising out of an incident occurring in connection with</div><div>&#160;operation of other than company owned vehicles.&#160;</div><div> <br/></div><div> <span style='white-space: pre;'></span></div><div> <span style='white-space: pre;'></span>&#160; &#160; &#160;&#160;As a driver of a company vehicle or my own vehicle on the company&#39;s behalf, I</div><div>understand that It is my sole responsibility to operate the vehicle in a safe manner and to drive defensively to prevent injuries and property damage. Drivers must have a valid driver&#39;s license for the type of vehicle to be operated and keep the licenses(s) with them at all times while driving. All drivers must comply with all applicable regulations.</div><div> <br/></div><div> <span style='white-space: pre;'></span>&#160; &#160; &#160; I also understand that my employer will periodically review my Motor Vehicle Record to determine continued eligibility to drive a company vehicle or operate my own vehicle on the company&#39;s behalf.</div><div> <br/></div><div> <span style='white-space: pre;'></span>&#160; &#160; &#160;&#160;I acknowledge the receipt of the above disclosure and authorize my employer or its designated agent to obtain a Motor Vehicle Record Report. This authorization is valid as long as I am an employee or employee candidate and may only be rescinded in writing.<br/></div><div>&#160; &#160; &#160;<br/></div><div>&#160; &#160; &#160;&#160;I also&#160; acknowledge that any&#160; damages to the&#160; company vehicle&#160; that are not related to any Third Party like damages on the&#160; vehicle during&#160; driving or parking shall be&#160; at my own&#160; responsibility.<br/></div><div> <br/> <strong>Traffic Violations</strong><br/></div><div> <span style='white-space: pre;'></span>&#160; &#160; &#160; &#160;Fines for parking or moving violations, towing storage or impoundment are the personal</div><div>responsibility of the assigned operator. The company will not condone nor excuse ignorance of</div><div>any motor vehicle violations that result in court summons being directed to itself as owner of the</div><div>vehicle.<br/></div><div> <br/></div><div>&#160; &#160; &#160; Each driver is required to report all moving violations to PAS Officer&#160;within 24</div><div>hours. This requirement applies to violations involving the use of any vehicle for business related while on company business. Failure to report violations will result in appropriate&#160;disciplinary action, including revoking of driver privileges and possible termination of</div><div>employment.<br/></div>";  	

        $("div[id='ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff251_ctl00_ctl00_TextField_inplacerte']").attr('contenteditable', 'false').css('background-color','#FFFFFF');
        document.getElementById("ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff251_ctl00_ctl00_TextField_inplacerte").style.border = "none";

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
	 // document.getElementById("ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff31_ctl00_DropDownChoice").remove();
	
    document.getElementById("ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff131_ctl00_ctl00_TextField").style.width = "100px";
    // $('#ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff31_ctl00_DropDownChoice').remove();


	//$('#ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff131_ctl00_ctl00_TextField').css('width', '327px');
	// $('#ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff141_ctl00_ctl00_UserField_upLevelDiv').css('width', '331px');
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
		$('#ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff191_ctl00_ctl00_TextField').prop('readonly', true);
		$('#ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff11_ctl00_ctl00_TextField').prop('readonly', true);

		//resize Reference #
  	document.getElementById("ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff191_ctl00_ctl00_TextField").style.width = "140px";


    // alert(document.getElementById("ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff21_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value);

	
});
function onSuccess(data, request){
    var loginName = data.d.Title;
    $('#ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff11_ctl00_ctl00_TextField').val(loginName);

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

    // $("input[id=ctl00_ctl43_g_55ac898b_b994_41a0_9b2b_b0ad936b1be7_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly');

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
    //alert(console.log(clientContext.executeQueryAsync(onRequestSuccess, onRequestFail)));
}
var immediate_head_var;
// This function runs if the executeQueryAsync call succeeds.
function onRequestSuccess() {
    var requestorName = userProfileProperties[0];
    var department =  userProfileProperties[1];
    var manager =  userProfileProperties[2];
    //document.getElementById('ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff11_ctl00_ctl00_TextField').value = requestorName;
	
	
}

// This function runs if the executeQueryAsync call fails.
function onRequestFail(sender, args) {
  alert( "Error: " + args.get_message());
}


function Date_Today(){
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!

      var yyyy = today.getFullYear();
      // if(dd<10){
      //     dd='0'+dd;
      // } 
      // if(mm<10){
      //     mm='0'+mm;
      // } 

      var today = mm+'/'+dd+'/'+yyyy;  

      return today;
}

function PreSaveAction(){
  
    var departmentName = $("Select[Title='Department Name:']").val();
    var nameDriver = $('textarea[id=ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff41_ctl00_ctl00_TextField]').val();
    var destination = $('textarea[id=ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff111_ctl00_ctl00_TextField]').val();
    var purposeTrip = $('textarea[id=ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff121_ctl00_ctl00_TextField]').val();
    var noOfPassenger = $('textarea[id=ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff131_ctl00_ctl00_TextField]').val();
    var pickUpDT = $('textarea[id=ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff91_ctl00_ctl00_DateTimeField_DateTimeFieldDate]').val();
    var returnDT = $('textarea[id=ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff101_ctl00_ctl00_DateTimeField_DateTimeFieldDate]').val();

        if(departmentName == "0" || nameDriver == "" || destination == "" || purposeTrip == "" || noOfPassenger == "" || pickUpDT == "" || returnDT == "")
        {
            alert("Please provide the needed information.");
            return false;
        }

  // Create new Date instance
    var date = new Date()

    // Add a day
    date.setDate(date.getDate() + 3);

    var Date_Allowed = (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
    var pickupdate = new Date(document.getElementById("ctl00_ctl43_g_e531d380_bd97_44a4_95f6_751573c02395_ff91_ctl00_ctl00_DateTimeField_DateTimeFieldDate").value);
    var date_allowed = new Date(Date_Allowed);

    console.log("pickupdate: "+pickupdate);
    console.log("Date_Allowed: "+date_allowed);



    if(pickupdate.getTime() == date_allowed.getTime() || pickupdate.getTime() >= date_allowed.getTime()){
        //alert("PWD");
        return true;

    }
    else{
      alert("DILI PWD");
       // alert("The Date of Request Must be on or 3 Days before the Use of Vehicle.");
        return false;
       
    }



    //     var DateToday = Date_Today().split("/");
      
    //   var Date_Today_Pisti = new Date(DateToday[2], DateToday[0] - 1, DateToday[1]);

    // // alert(Date_Today_Pisti.setDate(Date_Today_Pisti.getDate() + 3));

    // var date = new Date()
    // alert(Date_Today_Pisti +"\n" + date);




}

</script> 
