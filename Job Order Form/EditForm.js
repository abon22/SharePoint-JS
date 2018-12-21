<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>



//get the name of the current user
var context = null;
var web = null;
var currentUser = null;
var currentName;



var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();


if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;


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

 //document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff831_ctl00_ctl00_TextField').value =this._currentUser.get_title();
//change the ID here to your people picker field ID.

currentName = this._currentUser.get_title();

var admin1 = "Charmane Labatos";
//alert(currentName + admin1);
var status = $('select[id=ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff71_ctl00_DropDownChoice]').val();

    if (currentName == admin1) 
    {
       // document.getElementById('ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff71_ctl00_DropDownChoice').style.visibility = 'hidden';
        $('#joborder #stat3').show();
    } else if (currentName != admin1)
    {
        //$('#joborder #stat3').hide();
        //hide I approve
        //$('#joborder #approve3').show();
         //readOnly status dropDown
        document.getElementById("stat1").style.display = 'None';
        stat1 = $("select[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff71_ctl00_DropDownChoice']").val();
        document.getElementById('stat2').innerHTML="<input type='text' value='"+stat1+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
        $('#joborder #stat2').show();
        document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff81_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage").style.visibility = 'hidden';
    } 

    if (status == "Complete") 
    {
      if (currentName != admin1) 
      {
       //readOnly status dropDown
        document.getElementById("stat1").style.display = 'None';
        status = $("select[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff71_ctl00_DropDownChoice']").val();
        document.getElementById('stat2').innerHTML="<input type='text' value='"+status+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
        $('#joborder #stat3').show();
        //disable submit button
        document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_savebutton2_ctl00_diidIOSaveItem").disabled=true; //---nowmar
      } else if (currentName == admin1) 
        {
        //disable submit button
        document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_savebutton2_ctl00_diidIOSaveItem").disabled=true; //---nowmar
        }
    }

    if (document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff91_ctl00_ctl00").checked == true) 
    {
      //alert("lol")
      //document.getElementById('ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff101_ctl00_ctl00_TextField').value = this._currentUser.get_title();
    }
    else if(document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff91_ctl00_ctl00").checked == false)
    {
      if (currentName != admin1) 
      {
         var dateApproveNow = document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff111_ctl00_ctl00_TextField");

          if (dateApproveNow == "[object HTMLInputElement]") 
          {
            //alert("Show date")
            document.getElementById('ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff111_ctl00_ctl00_TextField').value = today;

          }
          else if (dateApproveNow != "[object HTMLInputElement]")
          {
              //alert("hide date" + " "+dateApproveNow)
               document.getElementById('ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff111_ctl00_ctl00_TextField');
          }

        // document.getElementById('ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff101_ctl00_ctl00_TextField').value = this._currentUser.get_title();
      }

      if (currentName != admin1) 
      {
        document.getElementById('ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff101_ctl00_ctl00_TextField').value = this._currentUser.get_title();
      }
    }

    if (status == "For Your Approval") 
    {
    	//alert(this._currentUser.get_title());
      if (currentName == admin1) 
      {
        $('#joborder #approve3').hide();
      }
      
    }

    if(currentName != admin1)
    {
      // $("input[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
      //       $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden"); //--nowmar
     
      
      
    } 
    else if(currentName == admin1)
    {
        $("input[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_savebutton2_ctl00_diidIOSaveItem']").attr('visible', 'visible');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","visible");//---nowmar
    }

    if (status == "Cancelled") 
    {
         //readOnly status dropDown
        document.getElementById("stat1").style.display = 'None';
        status = $("select[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff71_ctl00_DropDownChoice']").val();
        document.getElementById('stat2').innerHTML="<input type='text' value='"+status+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
        $('#joborder #stat2').show();
        document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_savebutton2_ctl00_diidIOSaveItem").disabled=true;
    }

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





 $('#joborder #nameofreq2').hide();
 $('#joborder #dept2').hide();
 $('#joborder #team2').hide();
 $('#joborder #desc2').hide();
 $('#joborder #date2').hide();
 $('#joborder #stat2').hide();
 $('#joborder #estimate2').hide();
 $('#joborder #approve2').hide();
 $('#joborder #approveby2').hide();
 $('#joborder #datecomp2').hide();


//readonly job order no.
$("input[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff11_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff11_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff11_ctl00_ctl00_TextField").size = "25";

//readOnly name of requestor
$("div[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff21_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
$( "a[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff21_ctl00_ctl00_UserField_checkNames']" ).empty();
$( "a[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff21_ctl00_ctl00_UserField_browse']" ).empty();


//readOnly department dropDown lookUp source
var department = document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff31_ctl00_Lookup");
var selectedText = department.options[department.selectedIndex].text;
document.getElementById("dept1").style.display = 'None';
document.getElementById('dept2').innerHTML="<input type='text' value='"+selectedText+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
$('#joborder #dept2').show();


//readOnly team dropDown lookUp source
var team = document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff41_ctl00_Lookup");
var selectedText = team.options[team.selectedIndex].text;
document.getElementById("team1").style.display = 'None';
document.getElementById('team2').innerHTML="<input type='text' value='"+selectedText+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
$('#joborder #team2').show();

//readonly approve by
$("input[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff101_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff101_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff101_ctl00_ctl00_TextField").size = "25";

//readonly date approve
$("input[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff111_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff111_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff111_ctl00_ctl00_TextField").size = "25";

//readonly request date
$("input[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff61_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff61_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "25";
var from_cal2 = document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff61_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
    from_cal2.src = "";
    from_cal2.alt = "";

      
      if (document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff91_ctl00_ctl00").checked == false) 
        {
          //hide approve by
          $('#joborder #approveby3').hide();
          //hide date approve
          $('#joborder #datecomp3').hide();
        }


    $('#ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff91_ctl00_ctl00').change(function () {
    
          //hide approveby
          $('#joborder #approveby3').show();
          //hide date complete
          $('#joborder #datecomp3').show();
        

     if(document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff91_ctl00_ctl00").checked==false)
      {
          //hide approve by
          $('#joborder #approveby3').hide();
          //hide date approve
          $('#joborder #datecomp3').hide();
      }else if(document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff91_ctl00_ctl00").checked==true)
      {
         //hide approveby
          $('#joborder #approveby3').show();
          //hide date complete
          $('#joborder #datecomp3').show();
        
      }

      


  })


$('select[id=ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff71_ctl00_DropDownChoice]').change(function()
{
	//alert("NGanung gamay kag tingog?");
	var admin1 = "Charmane Labatos"; //--nowmar
  var admin2 = "Lito Abon Jr.";
  if (currentName != admin1) 
  {
      if (document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff91_ctl00_ctl00").checked == true)
      {
      $("input[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_savebutton2_ctl00_diidIOSaveItem']").attr('visible', 'visible');
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","visible");
      }
  }

      var status = $('select[id=ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff71_ctl00_DropDownChoice]').val();

        if (status == "Complete") 
        {
          //alert("Complete")
          if (document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff91_ctl00_ctl00").checked==false) 
          {
            // document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_savebutton2_ctl00_diidIOSaveItem").style.visibility = 'hidden';
//hide submit button
            // $("input[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_savebutton2_ctl00_diidIOSaveItem']").attr('hidden', 'hidden');
            document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_savebutton2_ctl00_diidIOSaveItem").disabled=true;
            $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
          }
          else if (document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff91_ctl00_ctl00").checked==true) 
          {
            document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_savebutton2_ctl00_diidIOSaveItem").disabled=false;
          }

       
        }
        else if (status == "Cancelled")
        {
          //alert("Cancelledl")
          status = "Cancelled";

          document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_savebutton2_ctl00_diidIOSaveItem").disabled=false;
        }
        else
        {
          document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_savebutton2_ctl00_diidIOSaveItem").disabled=false;
        }
        // alert("lol")

})






//estimated date
var estimateDate = document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff81_ctl00_ctl00_DateTimeField_DateTimeFieldDate");
var estimateDate2 = document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff81_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");

if (estimateDate != "" && estimateDate2 != "") 
{
  $("input[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff81_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff81_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "25";
  // var from_cal2 = document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff81_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
  //   from_cal2.src = "";
  //   from_cal2.alt = "";

}


//if status complete
var status = $('select[id=ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff71_ctl00_DropDownChoice]').val();


if (status == "Complete") 
{
  //alert("lol")

 //readOnly status dropDown
 document.getElementById("stat1").style.display = 'None';
    status = $("select[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff71_ctl00_DropDownChoice']").val();
  document.getElementById('stat2').innerHTML="<input type='text' value='"+status+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
  $('#joborder #stat2').show();

//readOnly description
$("textarea[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff51_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff51_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff51_ctl00_ctl00_TextField").style.width = "400px";




}




var description = document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff51_ctl00_ctl00_TextField");

if(description != "")
{
  //readOnly description

$("textarea[id='ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff51_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff51_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff51_ctl00_ctl00_TextField").style.width = "400px";
}


if (status != "For Your Approval") 
{

      // document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField').style.visibility = 'hidden';
      $('#joborder #approve3').hide();
}else if (status == "For Your Approval") 
{
    $('#joborder #approve3').show();
}

if(document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_ff91_ctl00_ctl00").checked==true)
      {
        $('#joborder #approve3').hide();
      }


if (status == "Complete"){

    document.getElementById("ctl00_ctl43_g_4cd8b1f6_d938_4920_982c_f295c3ff628d_savebutton2_ctl00_diidIOSaveItem").disabled=true;
}


})






</script>