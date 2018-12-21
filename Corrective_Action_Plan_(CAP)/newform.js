<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var iso_title;
var temp_clause;
  $(document).ready(function()
{
$("input[id='Revision_d0c51bce-8419-409c-a1c5-5fcbe92206fd_$NumberField']").attr('readonly', 'readonly').css('background-color','#F6F6F6'); 
SPUtility.HideSPField('Acknowledgement');
SPUtility.HideSPField('Acknowledged by');
//SPUtility.HideSPField('Root Cause/s');
//SPUtility.HideSPField('Corrective Action');
//SPUtility.HideSPField('Implementation Date');
SPUtility.HideSPField('Approve');
SPUtility.HideSPField('Approved by');
SPUtility.HideSPField('Confirm');
SPUtility.HideSPField('Confirmed by');
SPUtility.HideSPField('Corrective Action no');
//$("input[id='Corrective_x0020_Action_x0020_no_1112a70c-2e56-4b93-bee2-e981720516a3_$TextField']").attr('hidden', 'hidden');

//SPUtility.ShowSPField('Date and Time Created');

$("input[id='Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
$("input[id='Corrective_x0020_Action_x0020_no_1112a70c-2e56-4b93-bee2-e981720516a3_$TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
 

//----Chage Save to Submit------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");    

$("label[for='Classification_0d2c0d81-ca44-4ccc-b430-934731d51b04_FillInButton']").html('Others, please specify.');

var div = document.getElementById('Root_x0020_Cause_x002f_s_f072a97b-768f-4eb5-a3c3-2466f10fa56e_$TextField_inplacerte');
 div.innerHTML = "<table cellspacing='0' class='ms-rteTable-default' style='width: 655px; height: 301px;'> <tbody> <tr class='ms-rteTableHeaderRow-default' style='text-align: center;'> <th class='ms-rteTableHeaderEvenCol-default' rowspan='1' colspan='6' style='width: 1%; text-align: center;'> <span style='color: #191919; text-decoration: none solid #191919;'> <strong style='text-decoration: none solid #191919;'>5 Why&#39;s Diagram​ ​ </strong> <span style='text-decoration: none solid #191919;'>​ ​</span> ​ ​</span></th> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'> <strong>​Measurements</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'> <strong>​Materials</strong></td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'> <strong>​Methods</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'> <strong>​Machines</strong></td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'> <strong>​Manpower</strong></td> <td class='ms-rteTableOddCol-default' style='width: 4%;'> <strong>​Environment</strong></td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableEvenCol-default' style='width: 4%;'>​</td> <td class='ms-rteTableOddCol-default' style='width: 4%;'>​</td> </tr> </tbody></table>";





})



</script>

