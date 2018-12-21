<script type="text/javascript" src="/SiteAssets/Scripts/jquery-1.12.4.min.js"></script><script type="text/javascript" src="/SiteAssets/Scripts/jquery.SPServices-2014.02.min.js"></script><script type="text/javascript" src="/_layouts/15/SP.dateTimeUtil.js"></script><script src="/SiteAssets/sputility.min.js"></script><script>


$(document).ready(function()
{ 

    //READ ONLY
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




});




    function PreSaveAction() //start of saveFunction
    {
      
      /*var AW1 = $('input[id=ctl00_ctl40_g_b092567f_4d19_4063_be60_6beb497b84d2_ff11_ctl00_ctl00_TextField]').val();
      var AW2 = $('input[id=ctl00_ctl40_g_b092567f_4d19_4063_be60_6beb497b84d2_ff51_ctl00_ctl00_TextField]').val();
      var CoCAW = $('input[id=ctl00_ctl40_g_b092567f_4d19_4063_be60_6beb497b84d2_ff101_ctl00_ctl00_TextField]').val();
      var JKW = $('input[id=ctl00_ctl40_g_b092567f_4d19_4063_be60_6beb497b84d2_ff141_ctl00_ctl00_TextField]').val();
      var WSW1 = $('input[id=ctl00_ctl40_g_b092567f_4d19_4063_be60_6beb497b84d2_ff181_ctl00_ctl00_TextField]').val();
      var WSW2 = $('input[id=ctl00_ctl40_g_b092567f_4d19_4063_be60_6beb497b84d2_ff221_ctl00_ctl00_TextField]').val();
      var WAW1 = $('input[id=ctl00_ctl40_g_b092567f_4d19_4063_be60_6beb497b84d2_ff261_ctl00_ctl00_TextField]').val();
      var WAW2 = $('input[id=ctl00_ctl40_g_b092567f_4d19_4063_be60_6beb497b84d2_ff301_ctl00_ctl00_TextField]').val();
      var WAW3 = $('input[id=ctl00_ctl40_g_b092567f_4d19_4063_be60_6beb497b84d2_ff341_ctl00_ctl00_TextField]').val();
      var IOSAW = $('input[id=ctl00_ctl40_g_b092567f_4d19_4063_be60_6beb497b84d2_ff381_ctl00_ctl00_TextField]').val();*/

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
