﻿<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>
//------------------------------------------------------------------------------------------------------------------------------------

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
	 //document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff21_ctl00_ctl00_TextField").value = WeightedScore;
document.getElementById('ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff801_ctl00_ctl00_UserField_upLevelDiv').innerHTML =this._currentUser.get_title();
//change the ID here to your people picker field ID.
}

function onFaiureMethod(sender, args) {

 alert('request failed' + args.get_message() + '\n' + args.get_stackTrace());
}

//------------------------------------------------------------------------------------------------------------------------------------
$(document).ready(function()
{ 

//read only for Weighted Score
    $("input[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff21_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff61_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff111_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff151_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff191_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff231_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff271_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff311_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff351_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
    $("input[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff391_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');
 //ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
 
//start of document.ready function

  $('#tableInfo #evaluationTrace').hide();
  $('#tableInfo #datePrepared').hide();

  //RESIZING Basic Information
    //document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff571_ctl00_ctl00_TextField").style.width = "147px";
    //document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff581_ctl00_ctl00_TextField").style.width = "147px";  
    /*document.getElementById("ctl00_ctl40_g_cbe3f684_bbc2_41f2_a620_f43f9cb292bd_ff561_ctl00_ctl00_TextField").style.width = "170px";
    document.getElementById("ctl00_ctl40_g_cbe3f684_bbc2_41f2_a620_f43f9cb292bd_ff571_ctl00_ctl00_TextField").style.width = "170px";
    document.getElementById("ctl00_ctl40_g_cbe3f684_bbc2_41f2_a620_f43f9cb292bd_ff581_ctl00_ctl00_TextField").style.width = "170px";
    document.getElementById("ctl00_ctl40_g_cbe3f684_bbc2_41f2_a620_f43f9cb292bd_ff591_ctl00_ctl00_TextField").style.width = "170px";
    document.getElementById("ctl00_ctl40_g_cbe3f684_bbc2_41f2_a620_f43f9cb292bd_ff601_ctl00_ctl00_TextField").style.width = "170px";
    document.getElementById("ctl00_ctl40_g_cbe3f684_bbc2_41f2_a620_f43f9cb292bd_ff611_ctl00_ctl00_TextField").style.width = "170px";*/
    //$("input[class='ms-cui-tabContainer  ']").attr("visibility","hidden");
    //RESIZING of Performance Target
    //document.getElementById("ctl00_ctl40_g_cbe3f684_bbc2_41f2_a620_f43f9cb292bd_ff41_ctl00_ctl00_TextField").style.width = "400px";

    //document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff411_ctl00_ctl00_TextField").style.width = "150px";

 //READ ONLY
      //read only for Attendance
     $("textarea[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff31_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

     $("textarea[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff41_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      //read only for Code of Conduct Adherence
      $("textarea[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff91_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      //read only for Job Knowledge
      $("textarea[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff131_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      //read only for Work Skills
      $("textarea[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff171_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      $("textarea[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff211_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      //read only for Work Attitudes
      $("textarea[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff251_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      $("textarea[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff291_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      $("textarea[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff331_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');

      //read only for ISO Adherence
      $("textarea[id='ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff371_ctl00_ctl00_TextField']").attr('readonly', 'readonly').css('background-color','#F6F6F6');


//LOAD VALUE
    //LOAD VALUE for Attendance
    var div = document.getElementById('ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff31_ctl00_ctl00_TextField');
     div.innerHTML ="The extent to which the employee regularly reports to the office and doesn't exceed the allowable leaves allowed per month and year. "

    var div = document.getElementById('ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff41_ctl00_ctl00_TextField');
      div.innerHTML ="The extent to which the ratee adheres to the official time-in of the Company."

    //LOAD VALUE for Code of Conduct Adherence
    var div = document.getElementById('ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff91_ctl00_ctl00_TextField');
      div.innerHTML ="The extent to which the employee conducts himself/herself according to Company's Policies and Rules of Conduct."

    //LOAD VALUE for Job Knowledge
    var div = document.getElementById('ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff131_ctl00_ctl00_TextField');
      div.innerHTML ="The extent to which the employee possesses knowledge specific to job functions through the application of related procedures, principles, theories and concepts."

    //LOAD VALUE for Work Skills
    var div = document.getElementById('ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff171_ctl00_ctl00_TextField');
      div.innerHTML ="Quality of Work: Theextent to which the employees is able to meet the expected output that is free of error or with minimal corrections at least"

    var div = document.getElementById('ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff211_ctl00_ctl00_TextField');
      div.innerHTML ="Quantity of Work: The extent to which the employess is able to produce the maximum volume of output."  

    //LOAD VALUE for Work Attitudes
    var div = document.getElementById('ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff251_ctl00_ctl00_TextField');
      div.innerHTML ="Continuous Improvement: The extent to which the employee comes up with new ways of approaching tasks thereby increasing the efficiency and quality of outputs"

    var div = document.getElementById('ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff291_ctl00_ctl00_TextField');
      div.innerHTML ="Sense of Responsibility: Understands the role and value that he plays in the organization and how his performance and behaviour affect the Company's growth and development."  

    var div = document.getElementById('ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff331_ctl00_ctl00_TextField');
      div.innerHTML ="Dependability: The extent to which the employee can be relied upon to do and complete expected output on time/ can handle varied tasks as may be necessary to complete function."         

    //LOAD VALUE for ISO Adherence
    var div = document.getElementById('ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff371_ctl00_ctl00_TextField');
      div.innerHTML ="No. of NCRs received from audit or the cycle time for CAP"


});

//-------------------------------------------------------------------------------------------------

//GET Total Weighted Score

    function PreSaveAction() //start of saveFunction
    {
      var arrUserField = [];  
    $("#UserFieldCPP_TopSpan span span span[class='ms-entity-resolved']").each(function(index, elem)
    {  
            arrUserField.push($(this).text());  
    });  
    var strUserField = arrUserField.join(";");  

    $().SPServices.SPFindPeoplePicker({  
             peoplePickerDisplayName: "Сотрудник",  
             valueToSet: strUserField ,  
             checkNames: true  
    });
    
  //CALCULATION for Weighted Score

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
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff21_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = AW1 * 2;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff21_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = AW1 * 3;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff21_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = AW1 * 4;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff21_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = AW1 * 5;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff21_ctl00_ctl00_TextField").value = WeightedScore;  
          }
      //#2
      var str = $('input[name*=ff64]:checked +  label').text();

          if(str == 1){
            var WeightedScore = AW1 * 1;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff61_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = AW1 * 2;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff61_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = AW1 * 3;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff61_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = AW1 * 4;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff61_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = AW1 * 5;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff61_ctl00_ctl00_TextField").value = WeightedScore;  
          }

    //Weighted Score for Code of Conduct Adherence
      var str = $('input[name*=ff65]:checked +  label').text();

          if(str == 1){
            var WeightedScore = CoCAW * 1;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff111_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = CoCAW * 2;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff111_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = CoCAW * 3;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff111_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = CoCAW * 4;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff111_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = CoCAW * 5;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff111_ctl00_ctl00_TextField").value = WeightedScore;  
          }

    //Weighted Score for Job Knowledge (Professional and Technical)
      var str = $('input[name*=ff66]:checked +  label').text();

          if(str == 1){
            var WeightedScore = JKW * 1;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff151_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = JKW * 2;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff151_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = JKW * 3;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff151_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = JKW * 4;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff151_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = JKW * 5;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff151_ctl00_ctl00_TextField").value = WeightedScore;  
          }

    //Weighted Score for Work Skills
      //#1
      var str = $('input[name*=ff67]:checked +  label').text();

          if(str == 1){
            var WeightedScore = WSW1 * 1;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff191_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = WSW1 * 2;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff191_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = WSW1 * 3;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff191_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = WSW1 * 4;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff191_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = WSW1 * 5;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff191_ctl00_ctl00_TextField").value = WeightedScore;  
          }

      //#2
      var str = $('input[name*=ff68]:checked +  label').text();

          if(str == 1){
            var WeightedScore = WSW2 * 1;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff231_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = WSW2 * 2;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff231_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = WSW2 * 3;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff231_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = WSW2 * 4;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff231_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = WSW2 * 5;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff231_ctl00_ctl00_TextField").value = WeightedScore;  
          }

    //Weighted Score for Work Attitudes
      //#1
      var str = $('input[name*=ff69]:checked +  label').text();

          if(str == 1){
            var WeightedScore = WAW1 * 1;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff271_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = WAW1 * 2;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff271_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = WAW1 * 3;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff271_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = WAW1 * 4;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff271_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = WAW1 * 5;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff271_ctl00_ctl00_TextField").value = WeightedScore;  
          }

      //#2
      var str = $('input[name*=ff70]:checked +  label').text();

          if(str == 1){
            var WeightedScore = WAW2 * 1;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff311_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = WAW2 * 2;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff311_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = WAW2 * 3;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff311_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = WAW2 * 4;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff311_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = WAW2 * 5;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff311_ctl00_ctl00_TextField").value = WeightedScore;  
          }   

      //#3
      var str = $('input[name*=ff71]:checked +  label').text();

          if(str == 1){
            var WeightedScore = WAW3 * 1;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff351_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = WAW3 * 2;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff351_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = WAW3 * 3;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff351_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = WAW3 * 4;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff351_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = WAW3 * 5;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff351_ctl00_ctl00_TextField").value = WeightedScore;  
          }                       

    //Weighted Score for ISO Adherence
      var str = $('input[name*=ff71]:checked +  label').text();

          if(str == 1){
            var WeightedScore = IOSAW * 1;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff391_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 2){
            var WeightedScore = IOSAW * 2;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff391_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 3){
            var WeightedScore = IOSAW * 3;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff391_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 4){
            var WeightedScore = IOSAW * 4;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff391_ctl00_ctl00_TextField").value = WeightedScore;
          }else if(str == 5){
            var WeightedScore = IOSAW * 5;
            document.getElementById("ctl00_ctl43_g_0b03e246_e42a_416b_92b0_0b4237a3746a_ff391_ctl00_ctl00_TextField").value = WeightedScore;  
          }        

      return true;
    
      
    }

</script>
<p>&nbsp;</p>