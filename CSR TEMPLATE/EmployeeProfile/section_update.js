
​​​​​​​​​<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script> ​​​<script src="/SiteAssets/Scripts/jquery.timeago.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script type="text/javascript">

//--------Change 'Save' to 'Submit'-----------------
(function ($, undefined)
{
    $("document").ready(function ()
    {

        

        ExecuteOrDelayUntilScriptLoaded(Get_EmployeeProfile_ItemID, "sp.js");


    });
})(jQuery);
//------------------------------------

//----------------------------------------------------------------------------------------------------------------

 var new_department



function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



 $(function() {
 

})
  
var EmployeeProfile_ItemID = [];

var sucess = "";

function Get_EmployeeProfile_ItemID(){

    old_section=getCookie("old_section");
        console.log("old_section: "+old_section);

   

    var context = new SP.ClientContext();
    var list = context.get_web().get_lists().getByTitle('Employee Profile');
    var caml = new SP.CamlQuery();
    caml.set_viewXml("<view><Query><Where><Eq><FieldRef Name='LI_Section' /><Value Type='Text'>"+old_section+"</Value></Eq></Where></Query></view>");
    returnedItems = list.getItems(caml);
    context.load(returnedItems);
    context.executeQueryAsync(Get_EmployeeProfile_ItemID_Succeeded, Query_Failed);

}
var dept_val="";
function Get_EmployeeProfile_ItemID_Succeeded(){
    var enumerator = returnedItems.getEnumerator();

    while (enumerator.moveNext()) {
        var listItem = enumerator.get_current();  
        EmployeeProfile_ItemID.push(listItem.get_item('ID'));
    }

    // alert(EmployeeProfile_ItemID.length);

    // if(EmployeeProfile_ItemID.length >= 1){
    //     for (var i = 0; i<=EmployeeProfile_ItemID.length-1; i++){
    //       Update_EmployeeProfile_Departments(EmployeeProfile_ItemID[i]);
    //       // alert(EmployeeProfile_ItemID[i]);
    //       // if(i == EmployeeProfile_ItemID.length-1){
    //       //   break;

    //       // }
    //     }        
    // }

     //dept_val = GetUrlKeyValue("DEPT", false, location.href);

     if(old_section!=''){

       if(EmployeeProfile_ItemID.length >= 1){
        for (var i = 0; i<=EmployeeProfile_ItemID.length-1; i++){
          Update_EmployeeProfile_Departments(EmployeeProfile_ItemID[i]);
          //console.log("PRESAVE :"+ EmployeeProfile_ItemID[i]);

        } 

        setCookie("old_section", "", 30);     
      }
    }

    


}
function Query_Failed(){
    alert("query failed");
}


function Update_EmployeeProfile_Departments(ID){
    //final_department = document.getElementById("Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField").value;
    
    new_section=getCookie("new_section");

    var clientContext = new SP.ClientContext('https://intranet.houseofit.com.au/');
    var oList = clientContext.get_web().get_lists().getByTitle('Employee Profile');
    oListItem = oList.getItemById(ID);
    oListItem.set_item('LI_Section', new_section);
    oListItem.update();
    clientContext.executeQueryAsync();

    console.log("UPDATE :"+ ID);
}

//---------------------------------------------------------------------------------------------------------------



</script>
