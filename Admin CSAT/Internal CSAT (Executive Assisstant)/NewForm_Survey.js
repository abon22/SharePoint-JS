<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>


var currentName;
ExecuteOrDelayUntilScriptLoaded(GetUserLoginName, "sp.js");

function GetUserLoginName() {
  context = new SP.ClientContext.get_current();
  web = context.get_web();
  this._currentUser = web.get_currentUser();
  context.load(this._currentUser);
  context.executeQueryAsync(Function.createDelegate(this, this.onSuccessMethod),
  Function.createDelegate(this, this.onFailureMethod));
}

function onSuccessMethod(sender, args) {


currentName = this._currentUser.get_title();

//alert(currentName);
// var admin1 = "Artem Soukhomlinov";
// //var admin1 = "Carl James Ambowang";


// if (admin1 == currentName)
// {

// }
// else
// {
// 	//hide submit button
//        $("input[id='ctl00_ctl42_g_433768f7_457e_4a7e_a0c3_774cc7d47913_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
//       $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
// }

    

}


function onFailureMethod(sender, args){
 alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());

}

$(document).ready(function()
{

//----Chage Save to Submit------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");    


})

</script>