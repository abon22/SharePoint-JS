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

// document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff831_ctl00_ctl00_TextField').value =this._currentUser.get_title();
//change the ID here to your people picker field ID.

currentName = this._currentUser.get_title();
var admin1 = "Victor Surita";
var admin2 = "Carl James Ambowang";
var admin3 = "Henry Ybalez";


	//alert(this._currentUser.get_title());
//checking for current logged in user

	if(document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff111_ctl00_ctl00").checked == true)
  	{	

    		// if(currentName == admin1 || currentName == admin2 || currentName == admin3)
    		// {
     	 
      // 			document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField').value = this._currentUser.get_title();

  				// document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_savebutton2_ctl00_diidIOSaveItem").disabled=false;

    		// }
	
  		// }
  		// else
  		// {

  		// }

	}	
	else if(document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff111_ctl00_ctl00").checked == false)
  	{

      

		
    	if(currentName == admin1 || currentName == admin2 || currentName == admin3)
    	{

         var dateApproveNow = document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff121_ctl00_ctl00_TextField");

          if (dateApproveNow == "[object HTMLInputElement]") 
          {
            //alert("Show date")
            document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff121_ctl00_ctl00_TextField').value = today;
          }
          else if (dateApproveNow != "[object HTMLInputElement]")
          {
              alert("hide date" + " "+dateApproveNow)
          }
     	 //document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff121_ctl00_ctl00_TextField').value = today;

      document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField').value = this._currentUser.get_title();


  		document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_savebutton2_ctl00_diidIOSaveItem").disabled=false;

    	}
      else
      {                                                                                                                                                                                                                                                                  
        document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_savebutton2_ctl00_diidIOSaveItem").disabled=true;
      }


  
		
	}

    
    //alert(this._currentUser.get_title());


    //-------------------------------------------------------------------------------------------------------------------

}

function onFailureMethod(sender, args){
 alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());
}


$(document).ready(function()
{


//notes
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff81_ctl00_ctl00_TextField").style.width = "1252px";

  //alert(currentName)

	//----Chage Save to Submit------
var inputcontrols = document.getElementsByTagName("input");
for(i = 0; i<inputcontrols.length; i++)
{
    if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
}
var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
ribbonSave.text("Submit");    




 $('#qachecklist #refno2').hide();
 $('#qachecklist #department2').hide();
 $('#qachecklist #formtitle2').hide();
 $('#qachecklist #formlink2').hide();
 $('#qachecklist #nameofreq2').hide();
 $('#qachecklist #notes_label').hide();
 $('#qachecklist #notes_field').hide();


//readonly reference no
$("input[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff21_ctl00_ctl00_TextField").className = "ms-long ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff21_ctl00_ctl00_TextField").size = "25";


//readonly document no
$("input[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff41_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff41_ctl00_ctl00_TextField").className = "ms-long ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff41_ctl00_ctl00_TextField").size = "25";


 
//readonly reference no.
$("input[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff21_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff21_ctl00_ctl00_TextField").size = "25";


//readonly form title
$("input[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff131_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff131_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff131_ctl00_ctl00_TextField").size = "30";


//readOnly name of requestor
$("div[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff31_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
$( "a[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff31_ctl00_ctl00_UserField_checkNames']" ).empty();
$( "a[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff31_ctl00_ctl00_UserField_browse']" ).empty();



//readOnly review by
$("div[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff91_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
$( "a[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff91_ctl00_ctl00_UserField_checkNames']" ).empty();
$( "a[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff91_ctl00_ctl00_UserField_browse']" ).empty();



//readonly date review
$("input[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff101_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff101_ctl00_ctl00_DateTimeField_DateTimeFieldDate").size = "25";
var from_cal2 = document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff101_ctl00_ctl00_DateTimeField_DateTimeFieldDateDatePickerImage");
    from_cal2.src = "";
    from_cal2.alt = "";


//readonly approve by
$("input[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField").size = "25";


//readonly date approve
$("input[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff121_ctl00_ctl00_TextField").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff121_ctl00_ctl00_TextField").size = "25";

//readonly url field
$("input[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff51_ctl00_ctl00_UrlFieldUrl']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff51_ctl00_ctl00_UrlFieldUrl").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff51_ctl00_ctl00_UrlFieldUrl").size = "30";



//readonly url field description
$("input[id='ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff51_ctl00_ctl00_UrlFieldDescription']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff51_ctl00_ctl00_UrlFieldDescription").className = "ms-input ms-spellcheck-true ";
document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff51_ctl00_ctl00_UrlFieldDescription").size = "30";


//readOnly department dropDown lookUp source
var department = document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff61_ctl00_Lookup");
var selectedText = department.options[department.selectedIndex].text;
document.getElementById("department1").style.display = 'None';
document.getElementById('department2').innerHTML="<input type='text' value='"+selectedText+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
$('#qachecklist #department2').show();








$('#ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff111_ctl00_ctl00').change(function () {
    
     	
    
if (currentName != admin1 || currentName != admin2 || currentName != admin3) 
{

    if(document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff111_ctl00_ctl00").checked == true)
    {

      document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField').style.visibility = 'hidden';
          $('#qachecklist #approveby3').hide(); 
          
     document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff121_ctl00_ctl00_TextField').style.visibility = 'hidden';
        $('#qachecklist #dateapprove2').hide();    


    }
    
}




     	
   	 if(document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff111_ctl00_ctl00").checked==true)
    	{

//alert(today);

    		//show approve by
       		//document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField").disabled = true;
       		document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField').style.visibility = 'visible';
       		$('#qachecklist #approveby3').show();

       		//show date approval

       		document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff121_ctl00_ctl00_TextField').style.visibility = 'visible';
         //	document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff121_ctl00_ctl00_TextField').value = today;
          $('#qachecklist #dateapprove2').show();     		
       		
    	}
    	else if(document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff111_ctl00_ctl00").checked==false)
    	{
      		//hide approve by
       		document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField').style.visibility = 'hidden';

      		//hide date approval
       		document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff121_ctl00_ctl00_TextField').style.visibility = 'hidden';
			//document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff121_ctl00_ctl00_TextField").disabled=true;
      	}



 });

//alert(today);

	 if(document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff111_ctl00_ctl00").checked==true)
    	{
        document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff81_ctl00_ctl00_TextField').style.visibility = 'hidden';
        document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff81_ctl00_ctl00_TextField').style.height = "15px";
       
        $('#qachecklist #notes_label').show();
        $('#qachecklist #notes_field').show();

    		$('#qachecklist #approve3').hide();
    		document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_savebutton2_ctl00_diidIOSaveItem").disabled = true;
         $('#qachecklist #approveby3').show();
         $('#qachecklist #dateapprove2').show();
    	} else if(document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField").checked == false){
      $('#qachecklist #approveby3').hide();
      //document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField").style.visibility = 'hidden';
      //alert(today)

    }




//I approve
if (document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff111_ctl00_ctl00").checked==true) 
	{
		       		//document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField").disabled = true;
       		document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField').style.visibility = 'visible';
       		$('#qachecklist #approveby3').show();


       		//show date approval
       		document.getElementById('ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff121_ctl00_ctl00_TextField').style.visibility = 'visible';
          $('#qachecklist #dateapprove1').show();
         

         	

         	
         
	}




// //hide approve by
//   if(document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField").checked == false){
//       $('#qachecklist #approveby3').hide();
//       document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField").hide();
//     }

//hide date approval

 // if(document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField").checked == false){
 //      $('#qachecklist #dateapprove2').hide();
 //      document.getElementById("ctl00_ctl43_g_7e155061_1c28_47b7_b3d5_6b8105d43a86_ff141_ctl00_ctl00_TextField").hide();
 //    }
});


</script>