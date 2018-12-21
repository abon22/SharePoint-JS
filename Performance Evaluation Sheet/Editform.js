<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>

var chk1 = 0;
var chk2 = 0;
var chk3 = 0;
var chk4 = 0;
var chk5 = 0;

var radioB1 = 0;
var radioB2 = 0;
var radioB3 = 0;
var radioB4 = 0;
var radioB5 = 0;

//get the name of the current user
var context = null;
var web = null;
var currentUser = null;


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

var Name = $("div[title='Name Required Field']").text().trim();
var trimmedName = Name.replace(/[|&;$%@"<>()+,]/g, "");
var evaluatorName = $("div[title='Name of Evaluator']").text().trim();
var trimmedevaluatorName = evaluatorName.replace(/[|&;$%@"<>()+,]/g, "");
var currentName = this._currentUser.get_title();

//checking for current logged in user
  if(trimmedName == currentName){
    document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff831_ctl00_ctl00_TextField').value =this._currentUser.get_title();
    //alert(this._currentUser.get_title());
    if (chk1==1 && chk2==1 && chk3==1 && chk4==1 && chk5==1){
      $('#buttons #btnSave').hide();
    }else{ $('#buttons #btnSave').show();  }	

  	$('#tbl_status').hide();

    $('#checkboxes #chk1').show();
  	$('#checkboxes2 #chk2').show();
  	$('#checkboxes3 #chk3').show();
  	$('#checkboxes4 #chk4').show();
  	$('#checkboxes5 #chk5').show();

  }else if(currentName == 'Jeanne Mamalo'.trim()){
    $('#buttons #btnSave').show();

    $('#tbl_status').show();

    $('#checkboxes #chk1').show();
    $('#checkboxes2 #chk2').show();
    $('#checkboxes3 #chk3').show();
    $('#checkboxes4 #chk4').show();
    $('#checkboxes5 #chk5').show();

    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff731_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff741_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff751_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff761_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff771_ctl00_ctl00").disabled=true;

    $('#tbl_status #Signature1').show();
    $('#tbl_status #Signature2').show();
    $('#tbl_status #Signature3').show();

  }else if(trimmedevaluatorName == currentName){
    if(chk1==0 || chk2==0 || chk3==0 || chk4==0 || chk5==0){
          $('#buttons #btnSave').hide();

          $('#tbl_status').hide();

          $('#checkboxes #chk1').hide();
          $('#checkboxes2 #chk2').hide();
          $('#checkboxes3 #chk3').hide();
          $('#checkboxes4 #chk4').hide();
          $('#checkboxes5 #chk5').hide();

          document.getElementById("stat2").style.display = 'None';
          classification = $("select[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff791_ctl00_DropDownChoice']").val();
          document.getElementById('stat3').innerHTML="<input type='text' value='"+classification+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
        }else{
          $('#tbl_status').show();

          $('#checkboxes #chk1').show();
          $('#checkboxes2 #chk2').show();
          $('#checkboxes3 #chk3').show();
          $('#checkboxes4 #chk4').show();
          $('#checkboxes5 #chk5').show();

          document.getElementById("stat2").style.display = 'None';
          classification = $("select[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff791_ctl00_DropDownChoice']").val();
          document.getElementById('stat3').innerHTML="<input type='text' value='"+classification+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
        }
  }  else{
    $('#buttons #btnSave').hide();

  	$('#checkboxes #chk1').hide();
    $('#checkboxes2 #chk2').hide();
    $('#checkboxes3 #chk3').hide();
    $('#checkboxes4 #chk4').hide();
    $('#checkboxes5 #chk5').hide();
    	//$("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff411_ctl00_ctl00_TextField']").attr('hidden', 'hidden');
  }

}
function onFaiureMethod(sender, args){
 alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());
}


$(document).ready(function(){

 
//hide save ribbon button  
  $('#tbl_status #Signature1').hide();
  $('#tbl_status #Signature2').hide();
  $('#tbl_status #Signature3').hide();

  
//read only date time
  $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff611_ctl00_ctl00_DateTimeField_DateTimeFieldDate']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


//hide save ribbon button
  $("a[id='Ribbon.ListForm.Edit.Commit.Publish-Large']").css("visibility","hidden");
  
  $('input[title="Date Prepared: Required Field"]').parent().next().hide();


  //document.getElementById("datePrepared2").style.display = 'None';

//RESIZING the fields
	document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff841_ctl00_ctl00_TextField").style.width = "147px";
  	document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff831_ctl00_ctl00_TextField").style.width = "197px";

//READ ONLY
    $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff841_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff571_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    
          classification = $("select[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff881_ctl00_DropDownChoice']").val();
          document.getElementById('purposeEval2').innerHTML="<input type='text' value='"+classification+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";

    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff631_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff631_ctl00_ctl01").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff631_ctl00_ctl02").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff631_ctl00_ctl03").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff631_ctl00_ctl04").disabled=true;

    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff641_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff641_ctl00_ctl01").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff641_ctl00_ctl02").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff641_ctl00_ctl03").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff641_ctl00_ctl04").disabled=true;

    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff651_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff651_ctl00_ctl01").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff651_ctl00_ctl02").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff651_ctl00_ctl03").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff651_ctl00_ctl04").disabled=true;

    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff661_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff661_ctl00_ctl01").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff661_ctl00_ctl02").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff661_ctl00_ctl03").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff661_ctl00_ctl04").disabled=true;

    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff671_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff671_ctl00_ctl01").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff671_ctl00_ctl02").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff671_ctl00_ctl03").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff671_ctl00_ctl04").disabled=true;

    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff681_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff681_ctl00_ctl01").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff681_ctl00_ctl02").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff681_ctl00_ctl03").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff681_ctl00_ctl04").disabled=true;

    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff691_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff691_ctl00_ctl01").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff691_ctl00_ctl02").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff691_ctl00_ctl03").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff691_ctl00_ctl04").disabled=true;

    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff701_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff701_ctl00_ctl01").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff701_ctl00_ctl02").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff701_ctl00_ctl03").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff701_ctl00_ctl04").disabled=true;

    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff711_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff711_ctl00_ctl01").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff711_ctl00_ctl02").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff711_ctl00_ctl03").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff711_ctl00_ctl04").disabled=true;

    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff721_ctl00_ctl00").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff721_ctl00_ctl01").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff721_ctl00_ctl02").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff721_ctl00_ctl03").disabled=true;
    document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff721_ctl00_ctl04").disabled=true;        

    //read only for Weighted Score
    $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff61_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff111_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff151_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff191_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff231_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff271_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff271_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff351_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff391_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

    //read only for multiline text
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff71_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff81_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff201_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff241_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff281_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff321_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff361_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff401_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff441_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff451_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff461_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff481_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff491_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff501_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff521_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff531_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff541_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
      
      //read only for Attendance
     $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff31_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

     $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff41_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      //read only for Code of Conduct Adherence
      $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      //read only for Job Knowledge
      $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff131_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      //read only for Work Skills
      $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff171_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff211_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      //read only for Work Attitudes
      $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff251_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff291_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff331_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      //read only for ISO Adherence
      $("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff371_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      //readOnly name of evaluator
      $("div[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff801_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
      $( "a[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff801_ctl00_ctl00_UserField_checkNames']" ).empty();
      $( "a[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff801_ctl00_ctl00_UserField_browse']" ).empty();

//readOnly department dropDown lookUp source
  var deprtmnt = document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff811_ctl00_Lookup");
  var selectedText = deprtmnt.options[deprtmnt.selectedIndex].text;
  document.getElementById("department1").style.display = 'None';
  document.getElementById('department2').innerHTML="<input type='text' value='"+selectedText+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
  $('#tableInfo #department2').show();

//readOnly name of employee
  $("div[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff821_ctl00_ctl00_UserField_upLevelDiv']").attr('contenteditable', 'false').css('background-color','#F6F6F6');
  $( "a[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff821_ctl00_ctl00_UserField_checkNames']" ).empty();
  $( "a[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff821_ctl00_ctl00_UserField_browse']" ).empty();

//readOnly position
  document.getElementById("position1").style.display = 'None';
    classification = $("select[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff561_ctl00_DropDownChoice']").val();
  document.getElementById('position2').innerHTML="<input type='text' value='"+classification+"' maxlength='255' class='ms-short ms-spellcheck-true' readonly='readonly' style='background-color: rgb(246, 246, 246);'>";
  $('#tableInfo #position2').show();

//hide acknowledged
  $('#tbl_status #acknowledged_label').hide();
  $('#tbl_status #acknowledged_field').hide();
  $('#tbl_status #statuslabel').hide();
  $('#tbl_status #stat2').hide();

//.change function checkboxes
  $("input[type='checkbox'][name='ctl00$ctl42$g_1b46f425_00b8_47a1_9523_ac4ac918759d$ff731$ctl00$ctl00']").change(function()
    {
      //alert(chk1);
      if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff731_ctl00_ctl00').checked){
        chk1=1;
        //alert(chk1);
      }

    });
	$("input[type='checkbox'][name='ctl00$ctl42$g_1b46f425_00b8_47a1_9523_ac4ac918759d$ff741$ctl00$ctl00']").change(function()
	  {
	    //alert(chk1);
	    if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff741_ctl00_ctl00').checked){
	      chk2=1;
	      //alert(chk1);
	    }

	  });
	$("input[type='checkbox'][name='ctl00$ctl42$g_1b46f425_00b8_47a1_9523_ac4ac918759d$ff751$ctl00$ctl00']").change(function()
	  {
	    //alert(chk1);
	    if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff751_ctl00_ctl00').checked){
	      chk3=1;
	      //alert(chk1);
	    }

	  });
	$("input[type='checkbox'][name='ctl00$ctl42$g_1b46f425_00b8_47a1_9523_ac4ac918759d$ff761$ctl00$ctl00']").change(function()
    {
	    //alert(chk1);
	    if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff761_ctl00_ctl00').checked){
	      chk4=1;
	      //alert(chk1);
	    }

	  });
	$("input[type='checkbox'][name='ctl00$ctl42$g_1b46f425_00b8_47a1_9523_ac4ac918759d$ff771$ctl00$ctl00']").change(function()
    {
	    //alert(chk1);
	    if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff771_ctl00_ctl00').checked){
	      chk5=1;
	      //alert(chk1);
	    }

	  });

  if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff731_ctl00_ctl00').checked){
      chk1=1;
      //alert(chk1);
    }if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff741_ctl00_ctl00').checked){
      chk2=1;
      //alert(chk1);
    }if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff751_ctl00_ctl00').checked){
      chk3=1;
      //alert(chk1);
    }if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff761_ctl00_ctl00').checked)
    {
      chk4=1;
      //alert(chk1);
    }if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff771_ctl00_ctl00').checked){
      chk5=1;
      //alert(chk1);
    }

//.change function radiobutton
	// $("td[id='radiobutton1'] input:radio[name*='ff63']").change(function(){
	//      // if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff631_ctl00_ctl00').checked || document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff631_ctl00_ctl01').checked || document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff631_ctl00_ctl02').checked || document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff631_ctl00_ctl03').checked || document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff631_ctl00_ctl04').checked){
	//      //    radioB1=1;
	//      //    alert(radioB1);
	//      //  }
	//      //  else
	//         alert("SUCCESSFUL");
	// });

//check if naay value all checkboxes
	if (chk1==1 && chk2==1 && chk3==1 && chk4==1 && chk5==1){

	// $('#checkboxes #chk1').hide();
	// $('#checkboxes2 #chk2').hide();
	// $('#checkboxes3 #chk3').hide();
	// $('#checkboxes4 #chk4').hide();
	// $('#checkboxes5 #chk5').hide();

//read only for acknowledgements checkboxes
  document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff731_ctl00_ctl00").disabled=true;
  document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff741_ctl00_ctl00").disabled=true;
  document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff751_ctl00_ctl00").disabled=true;
  document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff761_ctl00_ctl00").disabled=true;
  document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff771_ctl00_ctl00").disabled=true;

  $('#buttons #btnSave').hide();

	$('#tbl_status #acknowledged_label').show();
	$('#tbl_status #acknowledged_field').show();
	$('#tbl_status #statuslabel').show();
	$('#tbl_status #stat2').show();

//read only
	$("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff831_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


	$("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff61_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff111_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff151_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff191_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff231_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff271_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff311_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	// $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff351_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	// $("input[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff391_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff71_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff81_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff121_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff161_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff201_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff241_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff281_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff321_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff361_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff401_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff441_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff451_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff461_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff481_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff491_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff501_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff521_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff531_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	$("textarea[id='ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff541_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
	}

//----------------Chage Save to Submit-------------
  var inputcontrols = document.getElementsByTagName("input");
  for(i = 0; i<inputcontrols.length; i++)
  {
      if(inputcontrols[i].type == "button" && inputcontrols[i].value == "Save")
        inputcontrols[i].value = "Submit";
  }
  var ribbonSave = $("span.ms-cui-ctl-largelabel:contains('Save')");
  ribbonSave.text("Submit");

});

//start of saveFunction
function PreSaveAction(){



//check the checkBoxes
    if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff731_ctl00_ctl00').checked){
      chk1=1;
      //alert(chk1);
    }if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff741_ctl00_ctl00').checked){
      chk2=1;
      //alert(chk1);
    }if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff751_ctl00_ctl00').checked){
      chk3=1;
      //alert(chk1);
    }if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff761_ctl00_ctl00').checked)
    {
      chk4=1;
      //alert(chk1);
    }if(document.getElementById('ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff771_ctl00_ctl00').checked){
      chk5=1;
      //alert(chk1);
    }

//check the checkboxes
    if(chk1==0 || chk2==0 || chk3==0 || chk4==0 || chk5==0){
      alert("Please check all the acknowledgement to submit");
      return false;      
    }else if (chk1==1 && chk2==1 && chk3==1 && chk4==1 && chk5==1){
      return true;
    }

//GET Total Weighted Score

    var AW1 = 0.03;
    var AW2 = 0.03;
    var CoCAW = 0.03;
    var JKW = 0.2;
    var WSW1 = 0.15;
    var WSW2 = 0.15;
    var WAW1 = 0.12;
    var WAW2 = 0.12;
    var WAW3 = 0.12;
    var IOSAW = 0.05;

    //Weighted Score for ATTENDANCE
      //#1
      var str = $('input[name*=ff63]:checked +  label').text();

          if(str == 1){
            var WeightedScore = AW1 * 1;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff21_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = AW1 * 2;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff21_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = AW1 * 3;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff21_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = AW1 * 4;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff21_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = AW1 * 5;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff21_ctl00_ctl00_TextField").value = WeightedScore;  
          }
      //#2
      var str = $('input[name*=ff64]:checked +  label').text();

          if(str == 1){
            var WeightedScore = AW1 * 1;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff61_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = AW1 * 2;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff61_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = AW1 * 3;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff61_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = AW1 * 4;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff61_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = AW1 * 5;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff61_ctl00_ctl00_TextField").value = WeightedScore;  
          }

    //Weighted Score for Code of Conduct Adherence
      var str = $('input[name*=ff65]:checked +  label').text();

          if(str == 1){
            var WeightedScore = CoCAW * 1;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff111_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = CoCAW * 2;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff111_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = CoCAW * 3;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff111_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = CoCAW * 4;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff111_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = CoCAW * 5;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff111_ctl00_ctl00_TextField").value = WeightedScore;  
          }

    //Weighted Score for Job Knowledge (Professional and Technical)
      var str = $('input[name*=ff66]:checked +  label').text();

          if(str == 1){
            var WeightedScore = JKW * 1;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff151_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = JKW * 2;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff151_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = JKW * 3;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff151_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = JKW * 4;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff151_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = JKW * 5;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff151_ctl00_ctl00_TextField").value = WeightedScore;  
          }

    //Weighted Score for Work Skills
      //#1
      var str = $('input[name*=ff67]:checked +  label').text();

          if(str == 1){
            var WeightedScore = WSW1 * 1;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff191_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = WSW1 * 2;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff191_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = WSW1 * 3;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff191_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = WSW1 * 4;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff191_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = WSW1 * 5;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff191_ctl00_ctl00_TextField").value = WeightedScore;  
          }

      //#2
      var str = $('input[name*=ff68]:checked +  label').text();

          if(str == 1){
            var WeightedScore = WSW2 * 1;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff231_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = WSW2 * 2;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff231_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = WSW2 * 3;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff231_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = WSW2 * 4;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff231_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = WSW2 * 5;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff231_ctl00_ctl00_TextField").value = WeightedScore;  
          }

    //Weighted Score for Work Attitudes
      //#1
      var str = $('input[name*=ff69]:checked +  label').text();

          if(str == 1){
            var WeightedScore = WAW1 * 1;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff271_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = WAW1 * 2;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff271_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = WAW1 * 3;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff271_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = WAW1 * 4;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff271_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = WAW1 * 5;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff271_ctl00_ctl00_TextField").value = WeightedScore;  
          }

      //#2
      var str = $('input[name*=ff70]:checked +  label').text();

          if(str == 1){
            var WeightedScore = WAW2 * 1;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff311_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = WAW2 * 2;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff311_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = WAW2 * 3;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff311_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = WAW2 * 4;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff311_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = WAW2 * 5;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff311_ctl00_ctl00_TextField").value = WeightedScore;  
          }   

      //#3
      var str = $('input[name*=ff71]:checked +  label').text();

          if(str == 1){
            var WeightedScore = WAW3 * 1;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff351_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = WAW3 * 2;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff351_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = WAW3 * 3;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff351_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = WAW3 * 4;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff351_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = WAW3 * 5;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff351_ctl00_ctl00_TextField").value = WeightedScore;  
          }                       

    //Weighted Score for ISO Adherence
      var str = $('input[name*=ff71]:checked +  label').text();

          if(str == 1){
            var WeightedScore = IOSAW * 1;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff391_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = IOSAW * 2;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff391_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = IOSAW * 3;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff391_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = IOSAW * 4;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff391_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = IOSAW * 5;
            document.getElementById("ctl00_ctl43_g_1b46f425_00b8_47a1_9523_ac4ac918759d_ff391_ctl00_ctl00_TextField").value = WeightedScore;  
          }        

    //Total Weighted Score      
      /*var AR1  = $('input[id=ctl00_ctl40_g_81eb5c44_cb77_4254_ae4f_18e920897241_ff21_ctl00_ctl00_TextField]').val();
      var AR2 = $('input[id=ctl00_ctl40_g_81eb5c44_cb77_4254_ae4f_18e920897241_ff61_ctl00_ctl00_TextField]').val();
      var CoCR = $('input[id=ctl00_ctl40_g_81eb5c44_cb77_4254_ae4f_18e920897241_ff111_ctl00_ctl00_TextField]').val();
      var JKR = $('input[id=ctl00_ctl40_g_81eb5c44_cb77_4254_ae4f_18e920897241_ff151_ctl00_ctl00_TextField]').val();
      var WSR1 = $('input[id=ctl00_ctl40_g_81eb5c44_cb77_4254_ae4f_18e920897241_ff191_ctl00_ctl00_TextField]').val();
      var WSR2 = $('input[id=ctl00_ctl40_g_81eb5c44_cb77_4254_ae4f_18e920897241_ff231_ctl00_ctl00_TextField]').val();
      var WAR1 = $('input[id=ctl00_ctl40_g_81eb5c44_cb77_4254_ae4f_18e920897241_ff271_ctl00_ctl00_TextField]').val();
      var WAR2 = $('input[id=ctl00_ctl40_g_81eb5c44_cb77_4254_ae4f_18e920897241_ff311_ctl00_ctl00_TextField]').val();
      var WAR3 = $('input[id=ctl00_ctl40_g_81eb5c44_cb77_4254_ae4f_18e920897241_ff351_ctl00_ctl00_TextField]').val();
      var IOSR = $('input[id=ctl00_ctl40_g_81eb5c44_cb77_4254_ae4f_18e920897241_ff391_ctl00_ctl00_TextField]').val();      


      var qweqwe = $('input[id=ctl00_ctl40_g_81eb5c44_cb77_4254_ae4f_18e920897241_ff391_ctl00_ctl00_TextField]').val();
      var qas= 50;

      var TotalWeightedScore = qweqwe + parseInt(qas);

      alert(TotalWeightedScore);*/
      //document.getElementById("ctl00_ctl40_g_81eb5c44_cb77_4254_ae4f_18e920897241_ff411_ctl00_ctl00_TextField").value = TotalWeightedScore;




      return true;
    }

</script>
<p>&nbsp;</p>
