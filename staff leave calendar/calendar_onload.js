<script src="/SiteAssets/Scripts/jquery-1.12.4.min.js" type="text/javascript"></script>

<script type="text/javascript">


/*$(document).ready(function(){
      $("div.ms-acal-mdiv:contains(Lito)").css("background-color", "yellow !important");
});*/
//]
//document.getElementById("myDiv").style.backgroundColor = "lightblue";
//_spBodyOnLoadFunctionNames.push("runAfterEverythingElse");


function runAfterEverythingElse(){
 //  $("div.ms-acal-mdiv:contains(Lito)").css("background-color", "yellow !important"); 

    
 //  alert("asd");
}



$(document).ready(function(){
      //$("div.ms-acal-mdiv:contains(Lito)").css("background-color", "yellow !important");
      //ocument.getElementsByClassName("ms-acal-mdiv").style.backgroundColor = "red";
     
});
var myVar ;
function expandCal() {
	//$("div[title='3/12/2018 - 3/16/2018 Lito Abon Jr. - Vacation Leave']").css("backgroundColor", "red");
	//$("div[title='ctl00_ctl42_g_bb509acb_8012_4dfb_992c_d9ea6ea4c553_ctl01_ctl00_ctl00']").css('background-color', 'red');
	//$("div:contains(Lito)").css("background-color", "yellow");

  myVar = setInterval(function(){ expandCalCheck() },  900);
}


function expandCalCheck() {

  var a=$("a.ms-cal-nav", $("div.ms-acal-rootdiv:last>div")).get(0);
  if (a) {
    for (var r=0; r<6; r++) {
      var a=$("a.ms-cal-nav", $("div.ms-acal-rootdiv:last>div").get(r)).get(0);
      if (a)
        if (a.innerText.indexOf("more") >= 0)
          a.click();
    }
      clearInterval(myVar);
  }
 // document.querySelector(".ms-acal-mdiv").style.backgroundColor = "red";


/*for (var i=0; i<10; i++) {
    console.log( random_rgba() ) 
}    */
/*#5D8AA8
#E32636	
#E52B50
#FFBF00
#A4C639
#4B5320
#B2BEB5
#3B444B
#87A96B
#FF9966
#6D351A
#007FFF
#89CFF0
#A1CAF1
#848482
#BF94E4
#C32148
#08E8DE
#D19FE8
#CD7F32
#DEB887
#800020
#0F4D92
#008080
#CF71AF
#704214
#082567
#FF8C69
#E0115F
#FF7518*/

  var name="Lito Abon Jr.";
  var array_name = ["Lito","Fernando"];

  //var array =["#FFBF00","#5D8AA8","#E52B50","#E52B50","#7FFFD4","#3B444B","#B2BEB5"]
  for(i=0;i<=array_name.length-1;i++){
  	console.log("array_name[i]"+array_name[i]);

  	//$("div.ms-acal-mdiv:contains("+array_name[i]+")").css("background-color", ""+random_rgba()+"");

  }
  

  //$("div.ms-acal-mdiv:contains("+name2+")").css("background-color", ""+random_rgba()+"");

}

 function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


ExecuteOrDelayUntilScriptLoaded(expandCal, "sp.ui.applicationpages.calendar.js");

</script>