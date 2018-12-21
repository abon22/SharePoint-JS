​​​​​​​​​<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script><script type="text/javascript" src="/_layouts/15/sp.js"></script><script type="text/javascript" src="/_layouts/15/SP.UserProfiles.js"></script><script type="text/javascript">


   function OnScrollDiv (div) {
    //console.log(div.scrollTop);
      if (div.scrollTop > 100) {
         $('.actionbutton').css("opacity", "1");
      } else {
        $('.actionbutton').css("opacity", "0");
      }
  }




ExecuteOrDelayUntilScriptLoaded(expandCal, "sp.ui.applicationpages.calendar.js");
var targetUser;

function expandCal() {
  setInterval(expandCalCheck, 300);
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
  }
}



$(document).ready(function() {
$('li:contains("ORGANIZATIONAL CHART")').hide();
$('li:contains("DIGITAL TRANSFORMATION")').hide();
$('li:contains("MANCOM REPORTS")').hide();
$('li:contains("PUBLIC FOLDER")').hide();

$("#s4-workspace").scroll(function() {
    OnScrollDiv(this);
}); 



 $('.actionbutton').click(function() {
    $('#s4-workspace').animate({
      scrollTop: 0
    }, 500);
    return true;
  });

})




</script>

<style>

body {
  font-size: 13px;
}


p > img{
  width: 1000px !important;
  height: auto !important;
}

#s4-workspace{
background-image: url(https://intranet.houseofit.com.au/SiteAssets/Image/isense_img.jpg);
background-size: cover;
overflow-x: hidden;
overflow:auto;
}



.arrow:before,
.arrow:after {
  background: white;
  content: '';
  display: block;
  height: 3px;
  position: absolute;
  top: 26px;
  left: 13px;
  width: 20px;
}

.arrow:before {
  transform: rotate(45deg) translateX(95%);
  transform-origin: center;
}

.arrow:after {
  transform: rotate(135deg) translateX(100%);
  transform-origin: 86% 140%;
}


</style> 
<br/>


 <div style=" cursor:pointer;position: fixed;right: 23px;bottom: 23px;padding-top: 15px;margin-bottom: 0;z-index: 10">
<div class="actionbutton arrow" style=" border-radius: 50%;opacity:0;color: #fff;background: #1BA1E2;width: 60px;height: 60px;font-weight: 300;display: flex;justify-content: center;align-items: center;box-shadow:0 0 8px #202020;"></div>

      </div>

