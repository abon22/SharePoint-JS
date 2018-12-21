
​​​​​​​​​<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script> ​​​<script src="/SiteAssets/Scripts/jquery.timeago.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script type="text/javascript">

//--------Change 'Save' to 'Submit'-----------------
(function ($, undefined)
{
    $("document").ready(function ()
    {


    });
})(jQuery);
//------------------------------------

var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;

//----------------------------------------------------------------------------------------------------------------


 $(function() {


    // $('select[id=Beneficiary_x0020_Type_1d599927-6abe-49d1-b593-01a80b01d44b_$DropDownChoice]').change( function() {
    // var Beneficiary = $('select[id=Beneficiary_x0020_Type_1d599927-6abe-49d1-b593-01a80b01d44b_$DropDownChoice]').val();
    //     if(Beneficiary == "Existing"){
    //         SPUtility.ShowSPField('Existing Beneficiary Requirement');
    //         document.getElementById("ctl00_ctl42_g_94eb6f87_4ce6_4a59_bdb5_4692b22e475b_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "block";           
    //     }   
    //     else if (Beneficiary == "New"){
    //         SPUtility.HideSPField('Existing Beneficiary Requirement');
    //         document.getElementById("ctl00_ctl42_g_94eb6f87_4ce6_4a59_bdb5_4692b22e475b_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "block";            
    //     }
    //     else if (Beneficiary == "Existing"){
    //         document.getElementById("ctl00_ctl42_g_94eb6f87_4ce6_4a59_bdb5_4692b22e475b_ctl00_toolBarTbl_RightRptControls_ctl00_ctl00_diidIOSaveItem").style.display = "none";    
    //     }
    // });

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
  
    // alert(targetUser);

     ExecuteOrDelayUntilScriptLoaded(Check_EmployeeInformation_Exists, "sp.js"); 
}

function Check_EmployeeInformation_Exists(){

    var context = new SP.ClientContext();
    var list = context.get_web().get_lists().getByTitle('Employee Information');
    var caml = new SP.CamlQuery();
    caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='Username' /><Value Type='Text'>"+targetUser+"</Value></Eq></Where></Query><RowLimit>1</RowLimit></View>");
    returnedItems = list.getItems(caml);
    context.load(returnedItems);
    context.executeQueryAsync(Check_EmployeeInformation_Exists_Succeeded, Query_Failed);

}

function Check_EmployeeInformation_Exists_Succeeded(){
    var enumerator = returnedItems.getEnumerator();
    // var Ref_ID;
    var ItemID = -1;
    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();  
        // Ref_ID = listItem.get_item('Title'); 
        ItemID = listItem.get_item("ID");
    }


    if(ItemID != -1){
        var url = "https://intranet.houseofit.com.au/Lists/Employee Information/EditForm.aspx?ID="+ItemID;
         window.open(url,"_self")
    }   
    else{
        if(targetUser != "fernandos" && targetUser != "diannag" && targetUser != "ninoc" && targetUser != "jeannem"){
            var url = "https://intranet.houseofit.com.au/Lists/Employee%20Information/NewForm.aspx?Source=https%3A%2F%2Fintranet%2Ehouseofit%2Ecom%2Eau%2FLists%2FEmployee%2520Information%2FMy%2520Information%2Easpx&RootFolder=";
             window.open(url,"_self")            
        }


    }
}
function Query_Failed(){
     alert("query failed");
}



</script>