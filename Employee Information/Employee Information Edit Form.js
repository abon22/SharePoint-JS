<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var userProfileProperties;

// Ensure that the SP.UserProfiles.js file is loaded before the custom code runs.

ExecuteOrDelayUntilScriptLoaded(init,'sp.js');

  $(document).ready(function()
{

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

$("div[id='Dependents_089f56cd-e187-4cc0-a5b8-8cc8a1315356_$TextField_inplacerte']").css("width","800");
$("div[id='Dependents_089f56cd-e187-4cc0-a5b8-8cc8a1315356_$TextField_inplacerte']").css("height","195");


$("div[id='Educational_x0020_Background_28aa5939-aa02-4f4a-a001-e0cac9c21878_$TextField_inplacerte']").css("width","800");
$("div[id='Educational_x0020_Background_28aa5939-aa02-4f4a-a001-e0cac9c21878_$TextField_inplacerte']").css("height","225");


$("div[id='Work_x0020_Experienced_09f81918-7773-4ff5-8ad3-81dd8461d39b_$TextField_inplacerte']").css("width","800");
$("div[id='Work_x0020_Experienced_09f81918-7773-4ff5-8ad3-81dd8461d39b_$TextField_inplacerte']").css("height","195");



SPUtility.HideSPField('Username');

})
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


    // alert(targetUser);
    document.getElementById("Username_6e4d3263-6047-4ec7-bfde-19324280cc79_$TextField").value = targetUser;

}




</script>

<i><b class="ms-rteForeColor-2">Note:</b> In compliance of the Implementing Rules and Regulations of the Republic Act no. 10173, known as the “Data Privacy Act of 2012”. <br> We, House of I.T, are ensuring all employees, applicants, guests and visitors data shared to the company will be strictly confidential and will not be used in any other purpose than intended.
    <br><br>