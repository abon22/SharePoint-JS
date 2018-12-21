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


    if(received.listName == "Office Furniture & Equipment"){
        var label_ofe = Number($('#val_ofe').text());
        label_ofe = label_ofe + count;
        $('#val_ofe').html(label_ofe);
    }

    if(received.listName == "Purchase Order Request"){
        var label_por = Number($('#val_por').text());
        label_por = label_por + count;
        $('#val_por').html(label_por);
    }

    if(received.listName == "Office Supplies"){
        var label_sts = Number($('#val_sts').text());
        label_sts = label_sts + count;
        $('#val_sts').html(label_sts);
    }

    if(received.listName == "Special Requests"){
        var label_sts = Number($('#val_sts').text());
        label_sts = label_sts + count;
        $('#val_sts').html(label_sts);
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

    getItems('Office Furniture & Equipment',"<View><Query><Where><Or><And><IsNull><FieldRef Name='Executive_x0020_Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><IsNull><FieldRef Name='Executive_x0020_Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><IsNull><FieldRef Name='Executive_x0020_Status'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

    getItems('Office Supplies',"<View><Query><Where><Or><And><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO
   
    getItems('Purchase Order Request',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull></And></Where></Query></View>");//IMM

    getItems('Purchase Order Request',"<View><Query><Where><Or><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO


    getItems('Special Requests',"<View><Query><Where><Or><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

    getItems('Special Requests',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><IsNull><FieldRef Name='Purchasing_x0020_Status'/></IsNull></And></And></Where></Query></View>");//IMM



 $('.actionbutton').click(function() {
    $('#s4-workspace').animate({
      scrollTop: 0
    }, 500);
    return true;
  });

 $('#val_ofe').click(function() {
    var div_scroll = $("#div_15026f04-d707-492a-8935-6bac9a8f2447").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_sts').click(function() {
    var div_scroll = $("#div_db56ce5f-5314-4cb6-981f-64a08a18c54c").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_por').click(function() {
    var div_scroll = $("#div_ea2b4892-3fff-47fd-acdb-071cdb8b6050").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_spr').click(function() {
    var div_scroll = $("#div_79947c11-c14f-4351-bdd9-f292becd7c3b").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });



});

//----------------STATISTICS UI------------------------------------------------------------------------------------



});//end document ready

</script>

<div class="ui statistics" >
  <div class="red statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_ofe" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      OFE
    </div>
  </div>

  <div class="green statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_sts" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      STS
    </div>
  </div>

<div class="olive statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_por" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      POR
    </div>
  </div>


  <div class="orange statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_spr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      SPR
    </div>
  </div>


</div>

  <div style=" cursor:pointer;position: fixed;right: 23px;bottom: 23px;padding-top: 15px;margin-bottom: 0;z-index: 10">
<div class="actionbutton" style="opacity:0;color: #fff;background: #1BA1E2;width: 50px;height: 50px;font-weight: 300;display: flex;justify-content: center;align-items: center;box-shadow:0 0 8px #202020;"><p style="font-size:23px;margin: 0px 0px 0px 0px!important;">Top</p></div>

      </div>
