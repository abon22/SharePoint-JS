<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script><script src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js" type="text/javascript"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script style="text-align: left;">

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

//-------------------



//SPUtility.GetSPField('Date and Time Created').MakeReadOnly();
SPUtility.HideSPField('Employee Feedback');
SPUtility.HideSPField('Acknowledgement');
//SPUtility.HideSPField('Name');

var now = new Date();

var first_mm = now.getMonth()+1;
var first_dd = now.getDate();
var first_yyyy = now.getFullYear();

if (now.getMonth() == 11) {
    var current = new Date(now.getFullYear() + 1, 0, 1);
    var current2 = new Date(now.getFullYear() + 1, 0, 1);

} else {
    var current = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
    var current2 = new Date(now.getFullYear(), now.getMonth() + 2, now.getDate());
}

var second_mm = current.getMonth()+1;
var second_dd = current.getDate();
var second_yyyy = current.getFullYear();

var third_mm = current2.getMonth()+1;
var third_dd = current2.getDate();
var third_yyyy = current2.getFullYear();

today1 = first_mm+'/'+first_dd+'/'+first_yyyy;
today2 = second_mm+'/'+second_dd+'/'+second_yyyy;
today3 = third_mm+'/'+third_dd+'/'+third_yyyy;

//alert(today1+" "+today2+" "+today3);

 var waiver_div = document.getElementById('Action_x0020_Planning_f6dd63ee-d42b-4768-864e-7563735484b7_$TextField_inplacerte');
  waiver_div.innerHTML = "<table class='ms-rteTable-default' cellspacing='0' border='1' style='width: 1750px; height: 359px;'> <tbody> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' rowspan='2' style='width: 10%; text-align: center;'> <strong>Performance Improvement Areas </strong></td> <td class='ms-rteTableOddCol-default' colspan='2' style='width: 16.6667%; text-align: center;'> <strong>Performance Objectives </strong></td> <td class='ms-rteTableEvenCol-default' colspan='2' style='width: 16.6667%; text-align: center;'> <strong>Timeline </strong></td> <td class='ms-rteTableOddCol-default' rowspan='2' style='width: 10%; text-align: center;'> <strong>Success Indicators </strong></td> <td class='ms-rteTableEvenCol-default' colspan='3' style='width: 20%; text-align: center;'> <strong>Assessment/Remarks/Sign-Off  </strong></td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='text-align: center; width: 12%;'> <strong>Details/Description</strong></td> <td class='ms-rteTableOddCol-default' style='text-align: center; width: 12%;'> <strong>Action Plan</strong></td> <td class='ms-rteTableEvenCol-default' style='text-align: center; width: 3%;'> <strong>Start</strong></td> <td class='ms-rteTableOddCol-default' style='text-align: center; width: 3%;'> <strong>End</strong></td> <td class='ms-rteTableEvenCol-default' style='text-align: center; width: 15%;'> <strong>First Month-(<label style='text-decoration: underline;'>"+ today1 +"</label>)</strong></td> <td class='ms-rteTableOddCol-default' style='text-align: center; width: 15%;'> <strong>Second Month-(<label style='text-decoration: underline;'>"+ today2 +"</label>)</strong></td> <td class='ms-rteTableEvenCol-default' style='text-align: center; width: 15%;'> <strong>Third Month-(<label style='text-decoration: underline;'>"+ today3 +"</label>)</strong></td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='text-align: center; width: 10%; height: 60px;'>&#160; </td> <td class='ms-rteTableOddCol-default' style='width: 12%; height: 60px;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 12%; height: 60px;'> </td> <td class='ms-rteTableOddCol-default' style='width: 3%; height: 60px; text-align: center;'>"+ today1 +"</td> <td class='ms-rteTableEvenCol-default' style='width: 3%; height: 60px; text-align: center;'>"+ today1 +"</td> <td class='ms-rteTableOddCol-default' style='height: 60px; width: 10%;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 15%; height: 75px;'> </td> <td class='ms-rteTableOddCol-default' style='width: 15%; height: 75px;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 15%; height: 75px;'> </td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='text-align: center; width: 10%; height: 60px;'>&#160; </td> <td class='ms-rteTableOddCol-default' style='width: 12%; height: 60px;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 12%; height: 60px;'> </td> <td class='ms-rteTableOddCol-default' style='width: 3%; height: 60px; text-align: center;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 3%; height: 60px; text-align: center;'> </td> <td class='ms-rteTableOddCol-default' style='height: 60px; width: 10%;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 15%; height: 75px;'> </td> <td class='ms-rteTableOddCol-default' style='width: 15%; height: 75px;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 15%; height: 75px;'> </td> </tr> <tr class='ms-rteTableEvenRow-default'> <td class='ms-rteTableEvenCol-default' style='text-align: center; width: 10%; height: 60px;'>&#160; </td> <td class='ms-rteTableOddCol-default' style='width: 12%; height: 60px;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 12%; height: 60px;'> </td> <td class='ms-rteTableOddCol-default' style='width: 3%; height: 60px; text-align: center;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 3%; height: 60px; text-align: center;'> <br/> </td> <td class='ms-rteTableOddCol-default' style='height: 60px; width: 10%;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 15%; height: 75px;'> </td> <td class='ms-rteTableOddCol-default' style='width: 15%; height: 75px;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 15%; height: 75px;'> </td> </tr> <tr class='ms-rteTableOddRow-default'> <td class='ms-rteTableEvenCol-default' style='text-align: center; width: 10%; height: 60px;'>&#160; </td> <td class='ms-rteTableOddCol-default' style='width: 12%; height: 60px;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 12%; height: 60px;'> </td> <td class='ms-rteTableOddCol-default' style='width: 3%; height: 60px; text-align: center;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 3%; height: 60px; text-align: center;'> </td> <td class='ms-rteTableOddCol-default' style='height: 60px; width: 10%;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 15%; height: 75px;'> </td> <td class='ms-rteTableOddCol-default' style='width: 15%; height: 75px;'> </td> <td class='ms-rteTableEvenCol-default' style='width: 15%; height: 75px;'> </td> </tr> </tbody> </table>";
  
  
//----------------------------------------------------------------------------------------------------------- 

  // var waiver_div = document.getElementById('Assessment_eff4ac4d-8d61-472b-8eda-a94bc204c614_$TextField_inplacerte');
  //waiver_div.innerHTML = "<table border='1' cellspacing='0' width='100%' class='ms-rteTable-default'><tbody><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' rowspan='2' style='width: 10%; text-align: center;'><span style='color: #444444;'><strong>Performance </strong><strong>Improvement Areas </strong></span></td><td class='ms-rteTableOddCol-default' rowspan='2' style='width: 23%; text-align: center;'><strong>Details/Description </strong></td><td class='ms-rteTableEvenCol-default' colspan='3' style='width: 20%; text-align: center;'><strong>Assessment/Remarks/Sign-Off  </strong></td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' style='text-align: center; width: 23%;'><strong>First Month-( <label style ='text-decoration: underline'>"+today1+"</label> )</strong></td><td class='ms-rteTableOddCol-default' style='text-align: center; width: 23%;'><strong>Second Month-( <label style ='text-decoration: underline'>"+today2+"</label> )</strong></td><td class='ms-rteTableEvenCol-default' style='text-align: center; width: 23%;'><strong>Third Month-( <label style ='text-decoration: underline'>"+today3+"</label> )</strong></td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='text-align: center; width: 14%; height: 75px;'>&nbsp </td><td class='ms-rteTableOddCol-default' style='width: 23%; height: 75px;'></td><td class='ms-rteTableEvenCol-default' style='width: 23%; height: 75px;'></td><td class='ms-rteTableOddCol-default' style='width: 23%; height: 75px;'></td><td class='ms-rteTableEvenCol-default' style='width: 23%; height: 75px;'></td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' style='text-align: center; width: 14%; height: 75px;'>&nbsp</td><td class='ms-rteTableOddCol-default' style='width: 23%; height: 75px;'></td><td class='ms-rteTableEvenCol-default' style='width: 23%; height: 75px;'></td><td class='ms-rteTableOddCol-default' style='width: 23%; height: 75px;'></td><td class='ms-rteTableEvenCol-default' style='width: 23%; height: 75px;'></td></tr><tr class='ms-rteTableEvenRow-default'><td class='ms-rteTableEvenCol-default' style='text-align: center; width: 14%; height: 75px;'>&nbsp</td><td class='ms-rteTableOddCol-default' style='width: 23%; height: 75px;'></td><td class='ms-rteTableEvenCol-default' style='width: 23%; height: 75px;'></td><td class='ms-rteTableOddCol-default' style='width: 23%; height: 75px;'></td><td class='ms-rteTableEvenCol-default' style='width: 23%; height: 75px;'></td></tr><tr class='ms-rteTableOddRow-default'><td class='ms-rteTableEvenCol-default' rowspan='1' style='text-align: center; width: 14%; height: 75px;'>&nbsp</td><td class='ms-rteTableOddCol-default' rowspan='1' style='width: 23%; height: 75px;'></td><td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 23%; height: 75px;'></td><td class='ms-rteTableOddCol-default' rowspan='1' style='width: 23%; height: 75px;'></td><td class='ms-rteTableEvenCol-default' rowspan='1' style='width: 23%; height: 75px;'></td></tr></tbody></table>";  
  
  
});

</script> 
<div style="text-align: left;"> 
   <strong class="ms-rteFontSize-4">​​​​Performance Action Plan</strong> </div> 
<div style="text-align: left;"> 
   <strong class="ms-rteFontSize-4">
      <br/></strong> </div>
<div> 
   <table cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse;"> 
      <tbody> 
         <tr height="81" style="height: 60.75pt;">
            <td class="xl73" colspan="10" height="81" style="height: 60.75pt;"> This section will establish a performance action plan for the individual, including those associated with goals or special assignments that the employee and the team leader/manager agree, that<br/>need to be further developed for you to be successful on your job. Achieving these objectives should enhance the individual’s knowledge, skills, experience, and professional capability in a way 
               <br/>that improves job performance, now and in the future. However, we would also like to make you understand that consistent non-performance will not be an option in the company; after the 
               <br/>&#160;intervension(s) have been deployed and further necessary corrective actions will be expected at the end of this performance action process, nevertheless, possible termination of employment 
               <br/>will be implemented after due notice.</td> 
         </tr> 
      </tbody> 
   </table> 
   <strong class="ms-rteFontSize-4">
      <br/></strong></div> 
<div> 
   <span style="font-size: 10pt;">Using the space provided, list and briefly describe:&#160;<br/></span></div> 
<div> 
   <ul> 
      <li>Employee&#39;s improvement areas<br/></li> 
      <li>Performance objectives and targets for the period specified<br/></li> 
      <li>Spec<span style="font-size: 10pt;">ific areas of performance, including those associated with goals or special assignments</span><br/></li> 
   </ul> 
</div>