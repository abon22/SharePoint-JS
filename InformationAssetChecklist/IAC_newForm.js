<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var context = null;
var web = null;
var currentUser = null;
ExecuteOrDelayUntilScriptLoaded(GetUserLoginName, "sp.js");


//----------- set people picker name ------------------
function GetUserLoginName() {
  context = new SP.ClientContext.get_current();
  web = context.get_web();
  this._currentUser = web.get_currentUser();
  context.load(this._currentUser);
  context.executeQueryAsync(Function.createDelegate(this, this.onSuccessMethod),
  Function.createDelegate(this, this.onFailureMethod));
}

function onSuccessMethod(sender, args) {

 //var today = new Date();

//document.getElementById('Auditor_fbb6e3ec-5bb8-4b7c-846a-9a5697683dfd_$TextField').value=this._currentUser.get_title(); //newform
document.getElementById('ctl00_ctl42_g_01c24798_432d_418a_b43a_d4861957b649_ff51_ctl00_ctl00_TextField').value=this._currentUser.get_title(); //newformcopy
//change the ID here to your people picker field ID. Get the id for this field with the help of IE developer tool.
}

function onFaiureMethod(sender, args) {

 alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());

 }



$(document).ready(function()
{
		//SPUtility.HideSPField('TQM Approval');
		//SPUtility.HideSPField('Final Submission'); //newform
    
    $('#IAC #finalsubmissionbox').hide();

    //NewFormCopy
	  //$("for[id='Final_x0020_Submission_ed141347-fa11-4724-a127-ca176d4e3ad7_MultiChoiceOption_0']").attr('hidden', 'hidden');
	 
    //$("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");

//alert(currentUser);

//newForm
/*$("input[id='Auditor_fbb6e3ec-5bb8-4b7c-846a-9a5697683dfd_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Document_x0020_no_a37ac997-fb58-46c6-94c3-2ce940005543_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');*/

//newFormCopy
//$("input[id='Auditor_fbb6e3ec-5bb8-4b7c-846a-9a5697683dfd_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='ctl00_ctl42_g_01c24798_432d_418a_b43a_d4861957b649_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='ctl00_ctl42_g_01c24798_432d_418a_b43a_d4861957b649_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

var div = document.getElementById('ctl00_ctl42_g_01c24798_432d_418a_b43a_d4861957b649_ff71_ctl00_ctl00_TextField_inplacerte');
 div.innerHTML = "<table cellspacing='0' class='ms-rteTable-default' style='width: 1500px; height: 94px;'> <tbody> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 3%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 8%;'>​Asset</td> <td class='ms-rteTableEvenCol-default' style='width: 10%;'>​Control Requirements</td> <td class='ms-rteTableOddCol-default' colspan='3' style='width: 19%;'>​Consequence ​ ​</td> <td class='ms-rteTableEvenCol-default' colspan='2' style='width: 14%;'>​<span style='white-space: pre;'></span>Document review ​</td> <td class='ms-rteTableOddCol-default' style='width: 7%;'>​Actual Observation/ Interview</td> <td class='ms-rteTableEvenCol-default' style='width: 7%;'>​<br/>Evidence<br/></td> <td class='ms-rteTableOddCol-default' colspan='1' style='width: 6%;'> <span style='white-space: pre;'></span>NCR​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 3%; height: 31px;'>​Item No.</td> <td class='ms-rteTableOddCol-default' style='width: 8%; height: 31px;'>​Information Asset Found<br/>(media, data, data, application, software)</td> <td class='ms-rteTableEvenCol-default' style='height: 31px;'>​Consequence of Information Confidentiality, Integrity and/or Availability is Breached</td> <td class='ms-rteTableOddCol-default' style='width: 56px; height: 31px;'>​Based on consequence, is information protection required?&#160;<br/>YesNo</td> <td class='ms-rteTableEvenCol-default' style='width: 46px; height: 31px;'>​What is HOIT control for the protection of the information asset?</td> <td class='ms-rteTableOddCol-default' style='width: 45px; height: 31px;'>​Information Protection does exists <div>(Yes/No)<span style='white-space: pre;'></span></div> </td> <td class='ms-rteTableEvenCol-default' style='height: 31px;'>Information protection is approved <div>(Yes/No)</div> </td> <td class='ms-rteTableOddCol-default' style='height: 31px;'> <div>Information protection is implemented&#160;</div> <div>(Yes/No)</div>​</td> <td class='ms-rteTableEvenCol-default' style='height: 31px; width: 7%;'>​Information Protection is followed&#160; <div>(Yes/No)</div> </td> <td class='ms-rteTableOddCol-default' style='height: 31px; width: 7%;'>​Describe finding (Give evidence of the &quot;No&quot;)</td> <td class='ms-rteTableEvenCol-default' colspan='1' style='height: 31px; width: 6%;'>​Non-conformance report no. issued to, date.</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 3%;'>​1</td> <td class='ms-rteTableOddCol-default' style='width: 8%;'>​</td> <td class='ms-rteTableEvenCol-default'>​</td> <td class='ms-rteTableOddCol-default' style='width: 56px;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 46px;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 45px;'>​</td> <td class='ms-rteTableEvenCol-default'>​</td> <td class='ms-rteTableOddCol-default'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 7%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 7%;'>​</td> <td class='ms-rteTableEvenCol-default' colspan='1' style='width: 6%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 3%;'>​2</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 8%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 56px;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 46px;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 45px;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 7%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 7%;'>​</td> <td class='ms-rteTableEvenCol-default' colspan='1' rowspan='1' style='width: 6%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 3%;'>​3</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 8%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 56px;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 46px;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 45px;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 7%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 7%;'>​</td> <td class='ms-rteTableEvenCol-default' colspan='1' rowspan='1' style='width: 6%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 3%;'>​4</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 8%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 56px;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 46px;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 45px;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 7%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 7%;'>​</td> <td class='ms-rteTableEvenCol-default' colspan='1' rowspan='1' style='width: 6%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 3%;'>​5</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 8%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 56px;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 46px;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 45px;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 7%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 7%;'>​</td> <td class='ms-rteTableEvenCol-default' colspan='1' rowspan='1' style='width: 6%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 3%;'>​6</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 8%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 56px;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 46px;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 45px;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 7%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 7%;'>​</td> <td class='ms-rteTableEvenCol-default' colspan='1' rowspan='1' style='width: 6%;'>​</td> </tr> <tr class='ms-rteTableFooterRow-default'> <td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 3%;'>7​</td> <td class='ms-rteTableFooterOddCol-default' rowspan='1' style='width: 8%;'>​</td> <td class='ms-rteTableFooterEvenCol-default' rowspan='1'>​</td> <td class='ms-rteTableFooterOddCol-default' rowspan='1' style='width: 56px;'>​</td> <td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 46px;'>​</td> <td class='ms-rteTableFooterOddCol-default' rowspan='1' style='width: 45px;'>​</td> <td class='ms-rteTableFooterEvenCol-default' rowspan='1'>​</td> <td class='ms-rteTableFooterOddCol-default' rowspan='1'>​</td> <td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 7%;'>​</td> <td class='ms-rteTableFooterOddCol-default' rowspan='1' style='width: 7%;'>​</td> <td class='ms-rteTableFooterEvenCol-default' colspan='1' rowspan='1' style='width: 6%;'>​</td> </tr> </tbody></table>";

//------change Save to Submit---------
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