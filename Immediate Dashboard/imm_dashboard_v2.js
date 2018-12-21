 <link rel="stylesheet" type="text/css" href="/SiteAssets/Scripts/CEO Dashboard/statistic.css">
 <link rel="stylesheet" type="text/css" href="/SiteAssets/Scripts/CEO Dashboard/statistic.min.css">

<script type="text/javascript" src="/SiteAssets/Scripts/js/jquery.min.js"></script>
<script type="text/javascript" src="_layouts/15/sp.runtime.js"></script>
<script type="text/javascript" src="_layouts/15/sp.js"></script>


<script type="text/javascript">


//-----------------STATISTICS------------------------------------------------------------------------------

   function OnScrollDiv (div) {
    //console.log(div.scrollTop);
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


    if(received.listName == "Payments/CA Request"){
        var label_pca = Number($('#val_pca_2').text());
        label_pca = label_pca + count;
        $('#val_pca_2').html(label_pca);
    }

    if(received.listName == "Purchase Order Requests"){
        var label_por = Number($('#val_por').text());
        label_por = label_por + count;
        $('#val_por2').html(label_por);
    }

    if(received.listName == "Salary/Device Loan Benefits"){
        var label_sdl = Number($('#val_sdl').text());
        label_sdl = label_sdl + count;
        $('#val_sdl').html(label_sdl);
    }

    if(received.listName == "Salary or Device Loan Benefits"){
        var label_sdl_v2 = Number($('#val_sdl_v2').text());
        label_sdl_v2 = label_sdl_v2 + count;
        $('#val_sdl_v2').html(label_sdl_v2);
    }

    if(received.listName == "Liquidation Form"){
      console.log("lqf")
        var label_lqf = Number($('#val_lqf').text());
        label_lqf = label_lqf + count;
        $('#val_lqf').html(label_lqf);
    }


    if(received.listName == "Reimbursements Form"){
        var label_rbf = Number($('#val_rbf_2').text());
        label_rbf = label_rbf + count;
        $('#val_rbf_2').html(label_rbf);
    }


    if(received.listName == "Travel Benefit"){
        var label_tbr = Number($('#val_tbr').text());
        label_tbr = label_tbr + count;
       // console.log(label_tbr);
        $('#val_tbr').html(label_tbr);
    }

    if(received.listName == "Travel Benefit Request"){
        var label_tbr_v2 = Number($('#val_tbr_v2').text());
        label_tbr_v2 = label_tbr_v2 + count;
       // console.log(label_tbr);
        $('#val_tbr_v2').html(label_tbr_v2);
    }

    if(received.listName == "Employee Performance Evaluation Form"){
        var label_epe = Number($('#val_epe').text());
        label_epe = label_epe + count;
        //console.log(label_epe);
        $('#val_epe').html(label_epe);
    }


    if(received.listName == "Educational Benefit"){
        var label_ebf = Number($('#val_ebf').text());
        label_ebf = label_ebf + count;
        $('#val_ebf').html(label_ebf);
    }

    if(received.listName == "Educational Benefit Form"){
        var label_ebf_v2 = Number($('#val_ebf_v2').text());
        label_ebf_v2 = label_ebf_v2 + count;
        $('#val_ebf_v2').html(label_ebf_v2);
    }

    if(received.listName == "IT Request (Hardware/Software/Issue Report)"){
      console.log("in")
        var label_itr = Number($('#val_itr').text());
        label_itr = label_itr + count;
        $('#val_itr').html(label_itr);
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

  getItems('Special Requests',"<View><Query><GroupBy Collapse='TRUE' GroupLimit='30'><FieldRef Name='Immediate_x0020_Head'/></GroupBy><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><And><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And><IsNull><FieldRef Name='Purchasing_x0020_Status'/></IsNull></And><IsNull><FieldRef Name='Status'/></IsNull></And></Where></Query></View>");

  getItems('Payments/CA Request',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");

  getItems('Purchase Order Requests',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><IsNull><FieldRef Name='Purchasing_x0020_Status'/></IsNull></And><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");

  getItems('Salary/Device Loan Benefits',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");

  getItems('Salary or Device Loan Benefits',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>"); //V2

  getItems('Liquidation Form',"<View><Query><GroupBy Collapse='TRUE' GroupLimit='30'><FieldRef Name='Immediate_x0020_Head'/></GroupBy><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><IsNotNull><FieldRef Name='Acknowledgment'/></IsNotNull><Eq><FieldRef Name='Immediate_x0020_Status'/><Value Type='Text'>(None)</Value></Eq></And><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");

  getItems('Reimbursements Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><IsNotNull><FieldRef Name='Submit'/></IsNotNull><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Appro'/><Value Type='Text'>(None)</Value></Eq></And><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");

  getItems('Travel Benefit Request',"<View><Query><Where><And><IsNull><FieldRef Name='Status_x0020__x0028_Immediate_x0'/></IsNull><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");

  getItems('Travel Benefit',"<View><Query><Where><And><IsNull><FieldRef Name='Status_x0020__x0028_Immediate_x0'/></IsNull><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");//V2

  getItems('Educational Benefit',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Status'/><Value Type='Text'>For Department Head Approval</Value></Eq><Eq><FieldRef Name='Department_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");

  getItems('Educational Benefit Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='Department_x0020_Head_x0020_Appr'/></IsNull><Eq><FieldRef Name='Department_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");//V2

  getItems('IT Request (Hardware/Software/Issue Report)',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><Or><And><And><Eq><FieldRef Name='Request_x0020_Type'/><Value Type='Text'>Software</Value></Eq><IsNull><FieldRef Name='Department_x0020_Head_x0020_Appr'/></IsNull></And><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And><Eq><FieldRef Name='Request_x0020_Type'/><Value Type='Text'>Hardware</Value></Eq></Or><IsNull><FieldRef Name='Department_x0020_Head_x0020_Appr'/></IsNull></And><Eq><FieldRef Name='Immediate_x0020_Head'/><Value Type='Integer'><UserID Type='Integer'/></Value></Eq></And></Where></Query></View>");


 $('.actionbutton').click(function() {
    $('#s4-workspace').animate({
      scrollTop: 0
    }, 500);
    return true;
  });



  $('#val_pca_2').click(function() {
    var div_scroll = $("#div_e72c34fc-a4f6-4b42-bbc7-06d4a0a16bb4").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });


   $('#val_por2').click(function() {
    var div_scroll = $("#div_697b6d10-aba8-4b4c-bffe-cff305ef256d").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_sdl').click(function() {
    var div_scroll = $("#div_f3b95e15-32fa-48b2-938d-a4782471a9a8").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_sdl_v2').click(function() {
    var div_scroll = $("#div_ae1b902f-25d4-43ba-ba35-9de63ece2446").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_lqf').click(function() {
    var div_scroll = $("#div_5870607b-dfae-403e-b477-cb458fa395df").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });


  $('#val_rbf_2').click(function() {
    var div_scroll = $("#div_6146e74a-0901-4eef-9330-4c9800ab44c3").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_tbr').click(function() {
    var div_scroll = $("#div_1d03a853-f076-4c92-9646-8d2a406f26fb").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_tbr_v2').click(function() {
    var div_scroll = $("#div_036315c2-2edc-4479-bbec-489d6e60d803").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_epe').click(function() {
    var div_scroll = $("#div_8fec9e7d-136b-41a9-9249-1f548ae3e158").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_ebf').click(function() {
    var div_scroll = $("#div_fe5abea6-e94b-424e-9651-49c07d75319d").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_ebf_v2').click(function() {
    var div_scroll = $("#div_0ea68811-2210-42e0-9ae2-4e3b79181795").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

   $('#val_itr').click(function() {
    var div_scroll = $("#div_61976b65-2b44-45c5-aa23-181852d17a39").position();
    
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

 

  <div class="orange statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_pca_2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      PCA V3
    </div>
  </div>

  <div class="yellow statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_por2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      POR V3
    </div>
  </div>

  <div class="green statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_sdl" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      SDL
    </div>
  </div>

  <div class="green statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_sdl_v2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      SDL V2
    </div>
  </div>

  <div class="blue statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_lqf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      LQF
    </div>
  </div>


  <div class="violet statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_rbf_2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      RBF V3
    </div>
  </div>

  <div class="purple statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_tbr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      TBR
    </div>
  </div>

  <div class="purple statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_tbr_v2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      TBR V2
    </div>
  </div>

  <div class="pink statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_ebf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      EBF
    </div>
  </div>

  <div class="pink statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_ebf_v2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      EBF V2
    </div>
  </div>

  <div class="brown statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_itr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      ITR
    </div>
  </div>


</div>


 <div style=" cursor:pointer;position: fixed;right: 23px;bottom: 23px;padding-top: 15px;margin-bottom: 0;z-index: 10">
<div class="actionbutton arrow" style=" border-radius: 50%;opacity:0;color: #fff;background: #1BA1E2;width: 60px;height: 60px;font-weight: 300;display: flex;justify-content: center;align-items: center;box-shadow:0 0 8px #202020;"></div>

      </div>
