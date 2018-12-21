 <link rel="stylesheet" type="text/css" href="/SiteAssets/Scripts/CEO Dashboard/statistic.css">
 <link rel="stylesheet" type="text/css" href="/SiteAssets/Scripts/CEO Dashboard/statistic.min.css">

<script type="text/javascript" src="/SiteAssets/Scripts/js/jquery.min.js"></script>
<script type="text/javascript" src="_layouts/15/sp.runtime.js"></script>
<script type="text/javascript" src="_layouts/15/sp.js"></script>


<script type="text/javascript">


//-----------------STATISTICS------------------------------------------------------------------------------

   function OnScrollDiv (div) {
   // console.log(div.scrollTop);
      if (div.scrollTop > 267) {
         $('.actionbutton').css("opacity", "1");
      } else {
        $('.actionbutton').css("opacity", "0");
      }
  }

function getItems(listName,listQuery){
    var request={};
    request.listName=listName;
    var ctx = new SP.ClientContext();
    var list = ctx.get_web().get_lists().getByTitle(request.listName);
    request.query=new SP.CamlQuery();
    request.query.set_viewXml(listQuery);
    request.itemCollection=list.getItems(request.query);
    ctx.load(request.itemCollection);
    ctx.executeQueryAsync(  processItems.bind(request)  ,failure);
}

var count_list_array = [];
function processItems() {
    var received=this;//received 'request' from Caller
    //console.log(this)
    received.items=[];
    var listEnumerator = received.itemCollection.getEnumerator();
    var count=0;
    while (listEnumerator.moveNext()) {
        var listitem = listEnumerator.get_current();
        received.items.push(listitem.get_id());
        count++;
    }
    //console.info(received.listName,'has',received.items.length,'items IDs:',received.items);

   // console.log("Listname: "+received.listName+" Count: "+count);

    //var label_ofe = Number($('#val_ofe').text());


    if(received.listName == "HR Incident Reports"){
        var label_hrir = Number($('#val_hrir').text());
        label_hrir = label_hrir + count;
        $('#val_hrir').html(label_hrir);
    }

    if(received.listName == "Salary/Device Loan Benefits"){
        var label_sdl = Number($('#val_sdl').text());
        label_sdl = label_sdl + count;
        $('#val_sdl').html(label_sdl);
    }

    if(received.listName == "Movie Requests"){
        var label_nov = Number($('#val_mov').text());
        label_nov = label_nov + count;
        $('#val_mov').html(label_nov);
    }

    if(received.listName == "Manpower Requests"){
        var label_mrf = Number($('#val_mrf').text());
        label_mrf = label_mrf + count;
        $('#val_mrf').html(label_mrf);
    }

    if(received.listName == "Travel Benefit"){
        var label_tbr = Number($('#val_tbr').text());
        label_tbr = label_tbr + count;
        $('#val_tbr').html(label_tbr);
    }

    if(received.listName == "Educational Benefit"){
        var label_ebf = Number($('#val_ebf').text());
        label_ebf = label_ebf + count;
        $('#val_ebf').html(label_ebf);
    }
}
function failure(sender, args){
    console.error(args.get_message());
}
//-----------------STATISTICS------------------------------------------------------------------------------




function onQuerySucceeded() {
    console.log('Items Updated');
    document.location.reload(true);
    }
function onQueryFailed(sender, args) {alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());}




$(document).ready(function() {

$("#s4-workspace").scroll(function() {
    OnScrollDiv(this);
}); 



//----------------STATISTICS UI------------------------------------------------------------------------------------

$(document).ready(function() {

    getItems('HR Incident Reports',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><Eq><FieldRef Name='Status0'/><Value Type='Text'>Forwarded</Value></Eq></Where></Query></View>");

    getItems('HR Incident Reports',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><Eq><FieldRef Name='Status0'/><Value Type='Text'>In Progress</Value></Eq></Where></Query></View>");

    getItems('HR Incident Reports',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><Eq><FieldRef Name='Status0'/><Value Type='Text'>Issue NTE</Value></Eq></Where></Query></View>");

    getItems('HR Incident Reports',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><Eq><FieldRef Name='Status0'/><Value Type='Text'>Issued Notice of Decision</Value></Eq></Where></Query></View>");

    getItems('Salary/Device Loan Benefits',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><And><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/><Value Type='Text'>Approve</Value></Eq><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Text'>Approve</Value></Eq></And><IsNull><FieldRef Name='HR_x0020_Status'/></IsNull></And></Where></Query></View>");//IMM

    getItems('Movie Requests',"<View><Query><OrderBy><FieldRef Name='Created' Ascending='FALSE'/></OrderBy><Where><Eq><FieldRef Name='Status'/><Value Type='Text'>In Progress</Value></Eq></Where></Query></View>");

    getItems('Manpower Requests',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><IsNull><FieldRef Name='HR_x0020_Approval'/></IsNull></Where></Query></View>");//CEO

    getItems('Travel Benefit',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='Status_x0020__x0028_HR_x0029_'/></IsNull><Eq><FieldRef Name='Status_x0020__x0028_Immediate_x0'/><Value Type='Text'>Approved</Value></Eq></And></Where></Query></View>");//CEO

    getItems('Educational Benefit',"<View><Query><Where><Eq><FieldRef Name='Status'/><Value Type='Text'>DEPARTMENT HEAD APPROVED</Value></Eq></Where></Query></View>");



 $('.actionbutton').click(function() {
    $('#s4-workspace').animate({
      scrollTop: 0
    }, 500);
    return true;
  });

 $('#val_hrir').click(function() {
    var div_scroll = $("#div_10f2111b-7911-4009-954c-79ddcc3c0da1").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_sdl').click(function() {
    var div_scroll = $("#div_6bfd58a9-3efe-4c54-aa37-46b4dc458975").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_mov').click(function() {
    var div_scroll = $("#div_05e1b584-2ec6-45dc-8823-89c536afffba").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_mrf').click(function() {
    var div_scroll = $("#div_330cc550-2a0d-4106-b3f4-f514c21eb8a7").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_tbr').click(function() {
    var div_scroll = $("#div_1d176559-944b-4b2b-bd1d-72964c9e4fe6").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_ebf').click(function() {
    var div_scroll = $("#div_09e7c78e-d5dd-42ad-8424-a64874a66229").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });



});

//----------------STATISTICS UI------------------------------------------------------------------------------------



});//end document ready

</script>

<style>

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

<div class="ui statistics" >

  <div class="red statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_hrir" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      Incident Reports
    </div>
  </div>

  <div class="orange statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_sdl" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      SDL
    </div>
  </div>

  <div class="yellow statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_mov" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      Movie Requests
    </div>
  </div>


  <div class="olive statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_mrf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      MRF
    </div>
  </div>

  <div class="green statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_tbr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      TBR
    </div>
  </div>

  <div class="teal statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_ebf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      EBF
    </div>
  </div>


</div>

 <div style=" cursor:pointer;position: fixed;right: 23px;bottom: 23px;padding-top: 15px;margin-bottom: 0;z-index: 10">
<div class="actionbutton arrow" style=" border-radius: 50%;opacity:0;color: #fff;background: #1BA1E2;width: 60px;height: 60px;font-weight: 300;display: flex;justify-content: center;align-items: center;box-shadow:0 0 8px #202020;"></div>

      </div>

