
​​​​​​​​​<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script> ​​​<script src="/SiteAssets/Scripts/jquery.timeago.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script type="text/javascript">

//--------Change 'Save' to 'Submit'-----------------

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



(function ($, undefined)
{
    $("document").ready(function ()
    {
        var inputcontrols = document.getElementsByTagName("input");
        for(i = 0; i<inputcontrols.length; i++)
        {
            if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
                inputcontrols[i].value = "Submit";
        }
        var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
        ribbonSave.text("Submit");

        // document.getElementById("Requestor_x0027_s_x0020_Name_830abf27-3b1b-40e4-b667-9c03c1e96781_$TextField").style.border = "none";
        // document.getElementById("Requestor_x0027_s_x0020_Name_830abf27-3b1b-40e4-b667-9c03c1e96781_$TextField").readOnly  = true;
        // document.getElementById("Requestor_x0027_s_x0020_Name_830abf27-3b1b-40e4-b667-9c03c1e96781_$TextField"). style.color = 'blue';

        // document.getElementById("Department_8ce26bfb-1875-42a5-b44d-bacc6b77fd1b_$TextField").style.border = "none";
        // document.getElementById("Department_8ce26bfb-1875-42a5-b44d-bacc6b77fd1b_$TextField").readOnly  = true;
        // document.getElementById("Department_8ce26bfb-1875-42a5-b44d-bacc6b77fd1b_$TextField"). style.color = 'blue';

        // document.getElementById("Immediate_x0020_Head_e3e66f07-d796-4860-bbdb-b1059bebdc4e_$ClientPeoplePicker").style.border = "none";
        // document.getElementById("Immediate_x0020_Head_e3e66f07-d796-4860-bbdb-b1059bebdc4e_$ClientPeoplePicker").readOnly  = true;

        SPUtility.HideSPField('Name of New Hire');
        SPUtility.HideSPField("New Hire's Department");
        SPUtility.HideSPField('Department Head');
        SPUtility.HideSPField("New Hire's Department Head");        
        SPUtility.HideSPField('Software Description');
        SPUtility.HideSPField("Hardware Description");
        SPUtility.HideSPField('Purpose');

        // SPUtility.HideSPField('Department Head Approval');

        SPUtility.HideSPField('Reporting Purpose');
        SPUtility.HideSPField('Specific Employee');
        SPUtility.HideSPField('Issue Description');
        SPUtility.HideSPField('Date Needed');
        SPUtility.HideSPField('Notes');


        // document.getElementById("onetIDListForm").style.borderBottom = "thin solid black";

        document.getElementById("RequestorSeparator").style.display = "none";
        document.getElementById("RequestorSeparator_9eae759a-702f-4f34-9ff1-c05bc8675772_$TextField").style.height = "1px";
        document.getElementById("RequestorSeparator_9eae759a-702f-4f34-9ff1-c05bc8675772_$TextField").style.overflow = "hidden";
        document.getElementById("RequestorSeparator_9eae759a-702f-4f34-9ff1-c05bc8675772_$TextField").readOnly = true;
        document.getElementById("RequestorSeparator_9eae759a-702f-4f34-9ff1-c05bc8675772_$TextField").style.border = "none";  
        document.getElementById("RequestorSeparator_9eae759a-702f-4f34-9ff1-c05bc8675772_$TextField").style.borderBottom = "thin solid black";
        document.getElementById("RequestorSeparator_9eae759a-702f-4f34-9ff1-c05bc8675772_$TextField").style.resize = "none";    

        SPUtility.HideSPField('Default Access');

        SPUtility.HideSPField('Back Office Applications');

        SPUtility.HideSPField('Default Applications');

        SPUtility.HideSPField('Workstation Setup');

        SPUtility.HideSPField('IT Applications');

        SPUtility.HideSPField('DMCS Applications');

        SPUtility.GetSPField("Requestor's Name").MakeReadOnly();
        SPUtility.GetSPField("Department").MakeReadOnly();
        SPUtility.GetSPField("Date Needed").MakeReadOnly();
        SPUtility.GetSPField("Request Type").MakeReadOnly();

        document.getElementById("Immediate_x0020_Head_e3e66f07-d796-4860-bbdb-b1059bebdc4e_$ClientPeoplePicker_EditorInput").readOnly = true;

        if(document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").value == "Software"){
            SPUtility.ShowSPField('Software Description');
            SPUtility.ShowSPField("Purpose");
            SPUtility.ShowSPField('Date Needed')
            // SPUtility.ShowSPField('Department Head Approval');   
            
            document.getElementById("Software_x0020_Description_dad53b21-4ea5-4215-b4ef-98a233596c23_$TextField").readOnly  = true;
            document.getElementById("Software_x0020_Description_dad53b21-4ea5-4215-b4ef-98a233596c23_$TextField").style.border = "none";
            document.getElementById("Software_x0020_Description_dad53b21-4ea5-4215-b4ef-98a233596c23_$TextField").style.borderBottom = "thin solid black";
            document.getElementById("Software_x0020_Description_dad53b21-4ea5-4215-b4ef-98a233596c23_$TextField").style.resize = "none"; 

            document.getElementById("Purpose_701ea941-81a8-41fe-be07-7f0153c78ffb_$TextField").readOnly  = true;       
            document.getElementById("Purpose_701ea941-81a8-41fe-be07-7f0153c78ffb_$TextField").style.border = "none";
            document.getElementById("Purpose_701ea941-81a8-41fe-be07-7f0153c78ffb_$TextField").style.borderBottom = "thin solid black"; 
            document.getElementById("Purpose_701ea941-81a8-41fe-be07-7f0153c78ffb_$TextField").style.resize = "none";

        }
        else if(document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").value == "Hardware"){
            SPUtility.ShowSPField('Hardware Description');
            SPUtility.ShowSPField("Purpose");
            SPUtility.ShowSPField('Date Needed')
            // SPUtility.ShowSPField('Department Head Approval');   
            
            document.getElementById("Hardware_x0020_Description_6e9cb74b-0230-436c-bc87-78754a6cf8be_$TextField").readOnly  = true;
            document.getElementById("Hardware_x0020_Description_6e9cb74b-0230-436c-bc87-78754a6cf8be_$TextField").style.border = "none";
            document.getElementById("Hardware_x0020_Description_6e9cb74b-0230-436c-bc87-78754a6cf8be_$TextField").style.borderBottom = "thin solid black";
            document.getElementById("Hardware_x0020_Description_6e9cb74b-0230-436c-bc87-78754a6cf8be_$TextField").style.resize = "none"; 

            document.getElementById("Purpose_701ea941-81a8-41fe-be07-7f0153c78ffb_$TextField").readOnly  = true;       
            document.getElementById("Purpose_701ea941-81a8-41fe-be07-7f0153c78ffb_$TextField").style.border = "none";
            document.getElementById("Purpose_701ea941-81a8-41fe-be07-7f0153c78ffb_$TextField").style.borderBottom = "thin solid black"; 
            document.getElementById("Purpose_701ea941-81a8-41fe-be07-7f0153c78ffb_$TextField").style.resize = "none";

        }

      
    });
})(jQuery);
//------------------------------------

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

//----------------------------------------------------------------------------------------------------------------


 $(function() {


})
  


function init(){

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

function onRequestFail(sender, args) {
    document.getElementById('Requestor_x0027_s_x0020_Name_830abf27-3b1b-40e4-b667-9c03c1e96781_$TextField').value = "Error: " + args.get_message();
    document.getElementById('Department_8ce26bfb-1875-42a5-b44d-bacc6b77fd1b_$TextField').value = "Error: " + args.get_message();
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
//alert(userProfileProperties );
    // Load the UserProfilePropertiesForUser object and send the request.
    clientContext.load(userProfilePropertiesForUser);
    clientContext.executeQueryAsync(onRequestSuccess, onRequestFail);
}

var immediate_head_var;
// This function runs if the executeQueryAsync call succeeds.
var Requestor;
function onRequestSuccess() {
    var requestorName = userProfileProperties[0];
    var department =  userProfileProperties[1];
    var manager =  userProfileProperties[2];

    Requestor = userProfileProperties[0];
    //alert(manager);
    // document.getElementById('Requestor_x0027_s_x0020_Name_830abf27-3b1b-40e4-b667-9c03c1e96781_$TextField').value = requestorName;
    // document.getElementById('Department_8ce26bfb-1875-42a5-b44d-bacc6b77fd1b_$TextField').value = department;

    // SPUtility.GetSPField("Requestor's Name").MakeReadOnly();
    // SPUtility.GetSPField('Department').MakeReadOnly();

   immediate_head_var = manager;



    ExecuteOrDelayUntilScriptLoaded(Get_ImmediateHead,'sp.js');

}


//---------------------------------------------------------------------------------------------------------------

var immediate_head;

function Get_ImmediateHead(){
    var itemId = GetUrlKeyValue("ID", false, location.href);

    var context = new SP.ClientContext();
    var list = context.get_web().get_lists().getByTitle('IT Request (Hardware/Software/Issue Report)');
    var caml = new SP.CamlQuery();
    caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='ID' /><Value Type='Counter'>"+itemId+"</Value></Eq></Where></Query></View>");
    returnedItems = list.getItems(caml);
    context.load(returnedItems);
    context.executeQueryAsync(Get_ImmediateHead_Succeeded, Get_ImmediateHead_Failed);

}
function Get_ImmediateHead_Succeeded(){
    var enumerator = returnedItems.getEnumerator();
    var DeptHead;
    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();  
        DeptHead = listItem.get_item('Immediate_x0020_Head').get_lookupValue(); 
    }
    
console.log("Requestor: "+Requestor+" || DeptHead: "+DeptHead);
    if(document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").value == "Software" ||
        document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").value == "Hardware"){
            if(Requestor != DeptHead){
                SPUtility.HideSPField('Department Head Approval');
                document.getElementById("ctl00_ctl43_g_1d06df10_9340_474a_87be_04acae1193bf_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "none";
                 console.log("a");
              }
        			else{
        				// SPUtility.HideSPField('Department Head Approval');
                        console.log("b");
                    if(document.getElementById("Department_x0020_Head_x0020_Appr_30de2fc0-b58f-4e86-b716-31be7a520692_$DropDownChoice").value != ""){
                      SPUtility.GetSPField("Department Head Approval").MakeReadOnly();
                     }                
        			}
    }    

}
function Get_ImmediateHead_Failed(){
    alert("query failed");
}

//---------------------------------------------------------------------------------------------------------------

function PreSaveAction()

{
var currentdate = new Date();
var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();
                
setCookie("it_request_id", "", 30);
var itemId = GetUrlKeyValue("ID", false, location.href);


// document.getElementById('Date_x0020_and_x0020_Time_x0020__68803519-b1f5-46f2-9827-2631b86655bc_$TextField').value = datetime;

    issue_purpose= $('select[id=Reporting_x0020_Own_x0020_Issue__3585143b-e450-4d3f-9f5d-7718ac4ba18b_$DropDownChoice]').val();
    if(issue_purpose=="For Another Employee"){
        if (document.getElementById("Specific_x0020_Employee_b53f1dea-4ec8-4540-b7ed-7b85a70fde82_$ClientPeoplePicker_HiddenInput").value == []) {
            alert("Please Specifiy the Employee");
            return false;
        }
    }     

    if(document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").value == "New Hire Setup"){
        if(document.getElementById("Name_x0020_of_x0020_New_x0020_Hi_267c8a4d-deba-4af8-ba27-3dff6636fa65_$TextField").value == ""){
            alert("Please provide the Name");
            return false;            
        }        
        if(document.getElementById("New_x0020_Hire_x0027_s_x0020_Dep_3a3f4b8e-b4f5-4025-9232-dfef9fe9d98e_$LookupField").value == 0){
            alert("Please select a Department");
            return false;            
        }        
        if (document.getElementById("Department_x0020_Head_49c7af27-85ae-4393-8fda-9ff078839faa_$ClientPeoplePicker_HiddenInput").value == []) {
            alert("Please provide the Department Head");
            return false;
        }
    }
    
    if(document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").value == "Software" || 
        document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").value == "Hardware" ||
        document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").value == "Issue Report"){

        document.getElementById("Default_x0020_Access_afe4b330-8544-402e-a18e-a7efe39d6936_$TextField").value = "";
        document.getElementById("Back_x0020_Office_x0020_Applicat_8f4ec276-3868-4c25-bb3f-61a5ff397275_$TextField").value = "";
        document.getElementById("Default_x0020_Applications_9ff272bd-7a24-4a34-8855-2efccbde1d7d_$TextField").value = "";
        document.getElementById("Workstation_x0020_Setup_2afb8f4f-fd67-4ec9-9555-aa4c307a3a0b_$TextField").value = "";
        document.getElementById("IT_x0020_Applications_bb391a19-560e-4b7d-96d4-053eab60932d_$TextField").value = "";
        document.getElementById("DMCS_x0020_Applications_0cc5c541-e4e3-4eeb-aa5e-fffcefc8a2c6_$TextField").value = "";
    }

    if(document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").value == "Software"){

        if(document.getElementById("Date_x0020_Needed_7213a4c9-64f9-49a3-a1ca-98f30d6fc883_$DateTimeFieldDate").value == "" ||
            document.getElementById("Software_x0020_Description_dad53b21-4ea5-4215-b4ef-98a233596c23_$TextField").value == "" ||
            document.getElementById("Purpose_701ea941-81a8-41fe-be07-7f0153c78ffb_$TextField").value == ""){
            alert("Please fill all the fields");
            return false;   
        }
    }

    if(document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").value == "Hardware"){
    	
        if(document.getElementById("Date_x0020_Needed_7213a4c9-64f9-49a3-a1ca-98f30d6fc883_$DateTimeFieldDate").value == "" ||
            document.getElementById("Hardware_x0020_Description_6e9cb74b-0230-436c-bc87-78754a6cf8be_$TextField").value == "" ||
            document.getElementById("Purpose_701ea941-81a8-41fe-be07-7f0153c78ffb_$TextField").value == ""){
            alert("Please fill all the fields");
            return false;   
        }
    }

    if(document.getElementById("Request_x0020_Type_c9d4367f-aee2-4391-ab79-c0f7ee90f69c_$DropDownChoice").value == "Issue Report"){
        if(document.getElementById("Reporting_x0020_Own_x0020_Issue__3585143b-e450-4d3f-9f5d-7718ac4ba18b_$DropDownChoice").value == "" ||
            document.getElementById("Issue_x0020_Description_4489ab5d-d95f-4750-87e2-b3e99514292d_$TextField").value == "" ){
            alert("Please fill all the fields");
            return false; 
        }
    }

setCookie("it_request_send_to_support", "", 30);
setCookie("it_request_id", itemId, 30);
return true;

}
</script>