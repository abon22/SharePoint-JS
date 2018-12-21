
​​​​​​​​​​​<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script>
<script src="/_layouts/15/init.js" type="text/javascript"></script>
<script src="/_layouts/15/sp.runtime.js" type="text/javascript"></script>
<script src="/_layouts/15/sp.js" type="text/javascript"></script>
<script src="/_layouts/15/SP.UserProfiles.js" type="text/javascript"></script><script src="/_layouts/15/SP.UserProfiles.js" type="text/javascript"></script><script>
 
 $(document).ready(function()
{

 //-------------------------------------------------------------------------------------------------
jQuery('nobr:contains("All Day Event")').closest('tr').hide();
jQuery('nobr:contains("Recurrence")').closest('tr').hide();
$('.ms-dttimeinput').hide();
SPUtility.HideSPField('Title');

 //-------------------------------------------------------------------------------------------------


$(".ms-formlabel").css("text-align", "right");
oneSecondFunction();


//------change Save to Submit---------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");


$("input[id='ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl01_ctl00_ctl00_ctl05_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").focus(function() {
	//console.log("a");
	oneSecondFunction(1);
})

$("input[id='ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl01_ctl00_ctl00_ctl05_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").focusout(function() {
	//console.log("a");
	oneSecondFunction(1);
})

//====================================================================================================

$("input[id='ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl02_ctl00_ctl00_ctl05_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").focus(function() {
	//console.log("b");
	oneSecondFunction(2);
})

$("input[id='ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl02_ctl00_ctl00_ctl05_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").focusout(function() {
	//console.log("b");
	oneSecondFunction(2);
})




$("input[id='ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl03_ctl00_ctl00_ctl05_ctl00_ctl00']").change(function() {
document.getElementById('ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl07_ctl00_ctl00_ctl05_ctl00_ctl00_TextField').value = "1";
SPUtility.GetSPField('Total leave days').MakeEditable();
		SPUtility.GetSPField('Total leave days').MakeReadOnly();

})

$("input[id='ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl03_ctl00_ctl00_ctl05_ctl00_ctl01']").change(function() {
document.getElementById('ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl07_ctl00_ctl00_ctl05_ctl00_ctl00_TextField').value = "0.5";
SPUtility.GetSPField('Total leave days').MakeEditable();
		SPUtility.GetSPField('Total leave days').MakeReadOnly();
})

$("input[id='ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl03_ctl00_ctl00_ctl05_ctl00_ctl02']").change(function() {
document.getElementById('ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl07_ctl00_ctl00_ctl05_ctl00_ctl00_TextField').value = "0.5";
SPUtility.GetSPField('Total leave days').MakeEditable();
		SPUtility.GetSPField('Total leave days').MakeReadOnly();
})



});



var userProfileProperties;
init();


var targetUser;

function init()
{

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
   //alert(targetUser_temp);  
   
    //SP.SOD.executeOrDelayUntilScriptLoaded(getUserProperties, 'SP.UserProfiles.js');
    getUserProperties();
}

function onRequestFail(sender, args){}


function getUserProperties() {




targetUser = 'hoitcebu\\'+targetUser;
    // Replace the placeholder value with the target user's credentials.
     //alert(targetUser);
     
     

    // Get the current client context and PeopleManager instance.
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
var immediate_head_var;
// This function runs if the executeQueryAsync call succeeds.
var requestorName;
function onRequestSuccess() {
    requestorName = userProfileProperties[0];
    console.log("requestorName: "+requestorName);

}

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}


function daydiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}
var valid;

 function oneSecondFunction(choice) {

var startPeriod = document.getElementById('ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl01_ctl00_ctl00_ctl05_ctl00_ctl00_DateTimeField_DateTimeFieldDate').value;
var endPeriod = document.getElementById('ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl02_ctl00_ctl00_ctl05_ctl00_ctl00_DateTimeField_DateTimeFieldDate').value;
var days = daydiff(parseDate(startPeriod), parseDate(endPeriod))+1;

	if(days>0.5){
		//console.log(days)
		document.getElementById('ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl07_ctl00_ctl00_ctl05_ctl00_ctl00_TextField').value = days;
		SPUtility.GetSPField('Total leave days').MakeEditable();
		SPUtility.GetSPField('Total leave days').MakeReadOnly();
		valid=1;
	}else if(days<=0){
		//alert("Please enter a valid leave period.")
		

		if(choice==1){
		//document.getElementById('ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl01_ctl00_ctl00_ctl05_ctl00_ctl00_DateTimeField_DateTimeFieldDate').value = "";
		document.getElementById('ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl02_ctl00_ctl00_ctl05_ctl00_ctl00_DateTimeField_DateTimeFieldDate').value = startPeriod;
		//document.getElementById("Reason_a9254264-2c10-4e1d-9ace-9587edb11e16_$TextField").focus();
		}else if (choice==2){
		document.getElementById('ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl02_ctl00_ctl00_ctl05_ctl00_ctl00_DateTimeField_DateTimeFieldDate').value = "";
		//document.getElementById("Reason_a9254264-2c10-4e1d-9ace-9587edb11e16_$TextField").focus();
		}

		valid=0;

	}

	if(days>1){
		SPUtility.HideSPField('Duration');
		document.getElementById("ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl03_ctl00_ctl00_ctl05_ctl00_ctl00").checked = true;

	}else if(days==1){
		SPUtility.ShowSPField('Duration');
		document.getElementById("ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl03_ctl00_ctl00_ctl05_ctl00_ctl00").checked = true;

	}


}

/*

		<p>1. Plese submit you leave request by completing the form below and attaching any relevant documents.</p>
		<p>2. Once submitted, your request will be forwarded to accounts department.</p>

*/


</script>




<script language="javascript" type="text/javascript">


function PreSaveAction() {

	var reason= $("select[id='ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl00_ctl00_ctl00_ctl05_ctl00_DropDownChoice']").val();


    if(valid==0)
    {
        alert("Please enter a valid leave period.");
        return false; 
    }else if(valid==1){
    	
    	if (!jQuery('span[title="All Day Event"] > input').attr("checked"))
		{
			jQuery('span[title="All Day Event"] > input').click();
		}

		document.getElementById('ctl00_ctl43_g_6c7d9b87_41f2_4060_943a_909748225b9d_ctl00_ctl05_ctl08_ctl00_ctl00_ctl05_ctl00_ctl00_TextField').value = requestorName+" - "+reason;

		return true; //true
    }

    
} 

 

</script>