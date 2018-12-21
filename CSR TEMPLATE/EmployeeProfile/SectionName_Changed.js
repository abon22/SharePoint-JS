<script src="/SiteAssets/Scripts/jquery.min.js" type="text/javascript"></script> ​​​<script src="/SiteAssets/Scripts/jquery.timeago.js" type="text/javascript"></script><script src="/SiteAssets/sputility.min.js"></script><script src="/_layouts/15/SP.dateTimeUtil.js" type="text/javascript"></script><script type="text/javascript">


var old_section ;
(function ($, undefined)
{
    $("document").ready(function ()
    {

        

        old_section = document.getElementById("Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField").value;
        console.log("old_section: "+old_section);


    });
})(jQuery);


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}




function PreSaveAction()

{

    var new_section = document.getElementById("Title_fa564e0f-0c70-4ab9-b863-0177e6ddd247_$TextField").value;

//console.log("final_department:"+final_department);


setCookie("new_section", new_section, 30);
setCookie("old_section", old_section, 30);

    /*

   var cookie_me=getCookie("department");
  console.log("cookie_me: "+cookie_me);*/


   return true;

  

}





</script>
