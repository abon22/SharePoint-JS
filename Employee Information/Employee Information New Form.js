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

var dependents = document.getElementById("Dependents_089f56cd-e187-4cc0-a5b8-8cc8a1315356_$TextField_inplacerte");
dependents.innerHTML = "<table cellspacing='0' width='100%' class='ms-rteTable-default'> <tbody> <tr style='text-align: center;'> <td class='ms-rteTable-default' style='width: 33.3333%;'> <strong>​Name of Dependent</strong><br/></td> <td class='ms-rteTable-default' style='width: 33.3333%;'> <strong>​Relationship</strong><br/></td> <td class='ms-rteTable-default' style='width: 33.3333%;'> <strong>​Date of Birth</strong><br/></td> </tr> <tr> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​<br/></td> <td class='ms-rteTable-default'>​<br/></td> </tr> <tr> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​<br/></td> </tr> </tbody></table>";


$("div[id='Educational_x0020_Background_28aa5939-aa02-4f4a-a001-e0cac9c21878_$TextField_inplacerte']").css("width","800");
$("div[id='Educational_x0020_Background_28aa5939-aa02-4f4a-a001-e0cac9c21878_$TextField_inplacerte']").css("height","225");

var educational = document.getElementById("Educational_x0020_Background_28aa5939-aa02-4f4a-a001-e0cac9c21878_$TextField_inplacerte");
educational.innerHTML = "<table cellspacing='0' width='100%' class='ms-rteTable-default'> <tbody> <tr style='text-align: center;'> <td class='ms-rteTable-default' style='width: 25%;'> <strong>​Level</strong><br/></td> <td class='ms-rteTable-default' style='width: 25%;'> <strong>​Name of School</strong><br/></td> <td class='ms-rteTable-default' style='width: 25%;'> <strong>​Year Attended</strong><br/></td> <td class='ms-rteTable-default' style='width: 25%;'> <strong>​Highest Level</strong><br/></td> </tr> <tr> <td class='ms-rteTable-default'>​<br/></td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​<br/></td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​<br/></td> </tr> <tr> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> </tr> <tr> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> <td class='ms-rteTable-default'>​</td> </tr> </tbody></table>";

$("div[id='Work_x0020_Experienced_09f81918-7773-4ff5-8ad3-81dd8461d39b_$TextField_inplacerte']").css("width","800");
$("div[id='Work_x0020_Experienced_09f81918-7773-4ff5-8ad3-81dd8461d39b_$TextField_inplacerte']").css("height","195");

var workexperience = document.getElementById("Work_x0020_Experienced_09f81918-7773-4ff5-8ad3-81dd8461d39b_$TextField_inplacerte");
workexperience.innerHTML = "<table cellspacing='0' width='100%' class='ms-rteTable-default'> <tbody> <tr style='text-align: center;'> <td class='ms-rteTable-default' style='width: 200px;'> <strong>​From</strong><br/></td> <td class='ms-rteTable-default' style='width: 12%;'> <strong>​To</strong><br/></td> <td class='ms-rteTable-default' style='width: 29%;'> <strong>​Position</strong><br/></td> <td class='ms-rteTable-default' style='width: 47%;'> <strong>​Company/Address</strong><br/></td> </tr> <tr> <td class='ms-rteTable-default' style='width: 200px;'>​<br/></td> <td class='ms-rteTable-default' style='width: 12%;'>​<br/></td> <td class='ms-rteTable-default' style='width: 29%;'>​</td> <td class='ms-rteTable-default' style='width: 47%;'>​</td> </tr> <tr> <td class='ms-rteTable-default' style='width: 200px;'>​</td> <td class='ms-rteTable-default' style='width: 12%;'>​</td> <td class='ms-rteTable-default' style='width: 29%;'>​</td> <td class='ms-rteTable-default' style='width: 47%;'>​</td> </tr> <tr> <td class='ms-rteTable-default' style='width: 200px;'>​</td> <td class='ms-rteTable-default' style='width: 12%;'>​</td> <td class='ms-rteTable-default' style='width: 29%;'>​</td> <td class='ms-rteTable-default' style='width: 47%;'>​<br/></td> </tr> <tr> <td class='ms-rteTable-default' style='width: 200px;'>​</td> <td class='ms-rteTable-default' style='width: 12%;'>​</td> <td class='ms-rteTable-default' style='width: 29%;'>​</td> <td class='ms-rteTable-default' style='width: 47%;'>​</td> </tr> <tr> <td class='ms-rteTable-default' style='width: 200px;'>​</td> <td class='ms-rteTable-default' style='width: 12%;'>​</td> <td class='ms-rteTable-default' style='width: 29%;'>​</td> <td class='ms-rteTable-default' style='width: 47%;'>​</td> </tr> </tbody></table>";


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


