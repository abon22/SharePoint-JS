​​​​​<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

//style="white-space:normal;"

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

// SPUtility.HideSPField('Acknowledgement');


//SAVE BUTTON
// $("input[id='ctl00_ctl43_g_59ae99ca_0495_4ed6_94e4_d87a9316cc80_savebutton2_ctl00_diidIOSaveItem']").css("visibility","hidden");

$("label[for='ctl00_ctl43_g_59ae99ca_0495_4ed6_94e4_d87a9316cc80_ff51_ctl00_FillInButton']").text("If others, please specify");

var tblReviewAgenda = document.getElementById('ctl00_ctl43_g_59ae99ca_0495_4ed6_94e4_d87a9316cc80_ff101_ctl00_ctl00_TextField_inplacerte');
var tblMinutes = document.getElementById('ctl00_ctl43_g_59ae99ca_0495_4ed6_94e4_d87a9316cc80_ff111_ctl00_ctl00_TextField_inplacerte');

$("textarea[id='ctl00_ctl43_g_59ae99ca_0495_4ed6_94e4_d87a9316cc80_ff91_ctl00_ctl00_TextField']").css("width","1140px");

tblReviewAgenda.innerHTML = "<table border='1' cellspacing='0' class='ms-rteTable-default' style='width: 1140px;'> <tbody> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 1%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'> <strong>​No.</strong></span></td> <td class='ms-rteTableOddCol-default' colspan='4' style='width: 25%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'> <strong>​ Title​ ​</strong> ​</span></td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 1%;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'>​&#160;<br/></span></td> <td class='ms-rteTableOddCol-default' colspan='4' rowspan='1' style='width: 25%;'>​&#160;</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 1%;'>​&#160;</td> <td class='ms-rteTableOddCol-default' colspan='4' rowspan='1' style='width: 25%;'>​&#160;</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 1%;'>​&#160;</td> <td class='ms-rteTableOddCol-default' colspan='4' rowspan='1' style='width: 25%;'>​&#160;</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 1%;'>​&#160;</td> <td class='ms-rteTableOddCol-default' colspan='4' rowspan='1' style='width: 25%;'>​&#160;</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 1%;'>​&#160;</td> <td class='ms-rteTableOddCol-default' colspan='4' rowspan='1' style='width: 25%;'>​&#160;</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' colspan='5' style='width: 674px; text-align: center;'> </tbody></table>";

$("div[id='Roles_fd15011e-2aba-4eca-bcc7-234f5241213a_$TextField_topDiv']").css("height","70px");
$("div[id='Roles_fd15011e-2aba-4eca-bcc7-234f5241213a_$TextField_inplacerte']").css("height","70px");
$("div[id='Roles_fd15011e-2aba-4eca-bcc7-234f5241213a_$TextField_inplacerte']").css("min-height","70px");

$("textarea[id='ctl00_ctl43_g_59ae99ca_0495_4ed6_94e4_d87a9316cc80_ff91_ctl00_ctl00_TextField']").css("width","1140px");

tblMinutes.innerHTML = "<table border='1' cellspacing='0' class='ms-rteTable-default' style='width: 1140px;'> <tbody> <tr class='ms-rteTableEvenRow-default' style='text-align: center;'> <td class='ms-rteTableEvenCol-default' style='width: 20%; height: 33px;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'> <strong>​AGENDA ITEM</strong></span></td> <td class='ms-rteTableOddCol-default' style='width: 42%; height: 33px;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'> <strong>​ACTIONS TO BE TAKEN</strong></span></td> <td class='ms-rteTableEvenCol-default' style='width: 24%; height: 33px;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'> <strong>​ RESPONSIBLE</strong></span></td> <td class='ms-rteTableOddCol-default' style='width: 39%; height: 33px;'> <span style='font-family: &quot;segoe ui&quot;, tahoma; font-size: 10pt;'> <strong>​TIME TABLE</strong></span></td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='width: 20%; height: 66px;'>​&#160;</td> <td class='ms-rteTableOddCol-default' style='width: 42%; height: 66px;'>​&#160;</td> <td class='ms-rteTableEvenCol-default' style='width: 24%; height: 66px;'>​&#160;</td> <td class='ms-rteTableOddCol-default' style='width: 39%; height: 66px;'>​&#160;</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 20%; height: 66px;'>​&#160;</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 42%; height: 66px;'>​&#160;</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 24%; height: 66px;'>​&#160;</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 39%; height: 66px;'>​&#160;</td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 20%; height: 66px;'>​&#160;</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 42%; height: 66px;'>​&#160;</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 24%; height: 66px;'>​&#160;</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 39%; height: 66px;'>​&#160;</td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 20%; height: 66px;'>​&#160;</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 42%; height: 66px;'>​ &#160;</td> <td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 24%; height: 66px;'>​&#160;</td> <td class='ms-rteTableOddCol-default' rowspan='1' style='width: 39%; height: 66px;'>​ &#160;</td> </tr> <tr class='ms-rteTableFooterRow-default'> <td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 20%; height: 66px;'>​&#160;</td> <td class='ms-rteTableFooterOddCol-default' rowspan='1' style='width: 42%; height: 66px;'>​&#160;</td> <td class='ms-rteTableFooterEvenCol-default' rowspan='1' style='width: 24%; height: 66px;'>​&#160;</td> <td class='ms-rteTableFooterOddCol-default' rowspan='1' style='width: 39%; height: 66px;'>​&#160;</td> </tr> </tbody></table>";

});

// <HTML>
// <h1 style="color:red;">UNDER MAINTENANCE</h1>
// </HTML>

</script>
