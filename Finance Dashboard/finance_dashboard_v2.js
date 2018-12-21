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



    if(received.listName == "Payments/CA Request"){
        var label_pca = Number($('#val_pca2').text());
        label_pca = label_pca + count;
        $('#val_pca2').html(label_pca);
    }


    if(received.listName == "Purchase Order Requests"){
        var label_por = Number($('#val_por2').text());
        label_por = label_por + count;
        $('#val_por2').html(label_por);
    }



    if(received.listName == "Credit Card Purchase"){
        var label_ccp = Number($('#val_ccp').text());
        label_ccp = label_ccp + count;
        $('#val_ccp').html(label_ccp);
    }

    if(received.listName == "IT Purchasing Request"){
        var label_itpr = Number($('#val_itpr').text());
        label_itpr = label_itpr + count;
        $('#val_itpr').html(label_itpr);
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

    if(received.listName == "Manpower Requests"){
        var label_mrf = Number($('#val_mrf').text());
        label_mrf = label_mrf + count;
        $('#val_mrf').html(label_mrf);
    }

    if(received.listName == "Liquidation Form"){
        var label_lqf = Number($('#val_lqf').text());
        label_lqf = label_lqf + count;
        $('#val_lqf').html(label_lqf);
    }

    if(received.listName == "Forecasted Budget Plan"){
        var label_fbp = Number($('#val_fbp').text());
        label_fbp = label_fbp + count;
        $('#val_fbp').html(label_fbp);
    }


    if(received.listName == "Reimbursements Form"){
        var label_rbf = Number($('#val_rbf_2').text());
        label_rbf = label_rbf + count;
        $('#val_rbf_2').html(label_rbf);
    }


    if(received.listName == "Travel Benefit"){
        var label_tbr = Number($('#val_tbr').text());
        label_tbr = label_tbr + count;
        $('#val_tbr').html(label_tbr);
    }

    if(received.listName == "Travel Benefit Request"){
        var label_tbr_v2 = Number($('#val_tbr_v2').text());
        label_tbr_v2 = label_tbr_v2 + count;
        $('#val_tbr_v2').html(label_tbr_v2);
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

    if(received.listName == "Project Resources Purchasing Request"){
        var label_prp = Number($('#val_prp').text());
        label_prp = label_prp + count;
        $('#val_prp').html(label_prp);
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

console.log("Version 2")
  $('.BTN_EDIT_ITEM').hide();
  $('.BTN_DELETE_ITEM').hide();
  $('.CenterTextInSpan.TD_ACTION').hide();
  $('.BTN_OPEN_ITEM_FORM').hide();

    
    getItems('Payments/CA Request',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/><Value Type='Text'>Approved</Value></Eq><IsNull><FieldRef Name='Finance_x0020_Status0'/></IsNull></And></Where></Query></View>");

    getItems('Purchase Order Requests',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='Finance_x0020_Status0'/></IsNull><Eq><FieldRef Name='Purchasing_x0020_Status'/><Value Type='Text'>For Purchasing</Value></Eq></And></Where></Query></View>");

    getItems('Salary/Device Loan Benefits',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/><Value Type='Text'>Approve</Value></Eq><IsNull><FieldRef Name='Finance_x0020_Status'/></IsNull></And></Where></Query></View>");//CEO

    getItems('Salary/Device Loan Benefits',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Executive_x0020_Status'/><Value Type='Text'>Approve</Value></Eq><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Text'>Approve</Value></Eq></And></Where></Query></View>");//IMM

//------------SDL V2-------------------
    getItems('Salary or Device Loan Benefits',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><And><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/><Value Type='Text'>Approve</Value></Eq><Eq><FieldRef Name='HR_x0020_Status'/><Value Type='Text'>Approve</Value></Eq></And><IsNull><FieldRef Name='Finance_x0020_Status'/></IsNull></And></Where></Query></View>");//for approval

    getItems('Salary or Device Loan Benefits',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Executive_x0020_Status'/><Value Type='Text'>Approve</Value></Eq><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Text'>Approve</Value></Eq></And></Where></Query></View>");//for closed
//------------SDL V2-------------------

    getItems('Liquidation Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><IsNotNull><FieldRef Name='Acknowledgment'/></IsNotNull><Eq><FieldRef Name='Immediate_x0020_Status'/><Value Type='Text'>Approved</Value></Eq></And><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Text'>(None)</Value></Eq></And></Where></Query></View>");//IMM

    getItems('Forecasted Budget Plan',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Submit_x0020_to_x0020_Finance'/><Value Type='Boolean'>1</Value></Eq><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Text'>(None)</Value></Eq></And></Where></Query></View>");//CEO

    getItems('Reimbursements Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Appro'/><Value Type='Text'>Approved</Value></Eq><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Text'>(None)</Value></Eq></And></Where></Query></View>");//CEO

    getItems('Travel Benefit',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='Status_x0020__x0028_Finance_x002'/></IsNull><Eq><FieldRef Name='Status_x0020__x0028_HR_x0029_'/><Value Type='Text'>Approved</Value></Eq></And></Where></Query></View>");

//----------------TBR V2--------------------------------
    getItems('Travel Benefit Request',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='Status_x0020__x0028_Finance_x002'/></IsNull><Eq><FieldRef Name='Status_x0020__x0028_HR_x0029_'/><Value Type='Text'>Approved</Value></Eq></And></Where></Query></View>");//for approval

    getItems('Travel Benefit Request',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><Eq><FieldRef Name='Status_x0020__x0028_Finance_x002'/><Value Type='Text'>Approved</Value></Eq><IsNotNull><FieldRef Name='Name_x0020_of_x0020_the_x0020_Em'/></IsNotNull></And><Eq><FieldRef Name='Status_x0020__x0028_Executive_x0'/><Value Type='Text'>Approved</Value></Eq></And></Where></Query></View>");//for closed
//----------------TBR V2--------------------------------


    getItems('Educational Benefit',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><Eq><FieldRef Name='Status'/><Value Type='Text'>VP APPROVED</Value></Eq></Where></Query></View>");

//-----------------EBF V2-------------------------
    getItems('Educational Benefit Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='HR_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq><IsNull><FieldRef Name='Finance_x0020_Approval'/></IsNull></And></Where></Query></View>");//for approval

    getItems('Educational Benefit Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='CEO_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq></And></Where></Query></View>"); // for closed
//-----------------EBF V2-------------------------

    //getItems('Project Resources Purchasing Request',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Approval_Stage'/><Value Type='Text'>Finance Approval</Value></Eq><IsNull><FieldRef Name='Finance_x0020_Status'/></IsNull></And></Where></Query></View>");
    getItems('Project Resources Purchasing Request',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Approval_Stage'/><Value Type='Text'>Approved</Value></Eq><Neq><FieldRef Name='Finance_x0020_Status'/><Value Type='Text'>Closed</Value></Neq></And></Where></Query></View>");



 $('.actionbutton').click(function() {
    $('#s4-workspace').animate({
      scrollTop: 0
    }, 500);
    return true;
  });


 $('#val_pca2').click(function() {
    var div_scroll = $("#div_177522e9-9cb6-4553-a159-03708b694830").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });


  $('#val_por2').click(function() {
    var div_scroll = $("#div_6ad61ec8-3e0c-4c4f-abae-194cc6ef338a").position();
    
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

  $('#val_sdl_v2').click(function() {
    var div_scroll = $("#div_40e7194d-08f0-4214-a28d-9feeb9003c3b").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_lqf').click(function() {
    var div_scroll = $("#div_62cdd510-fdcc-4f99-adc5-291d2e2a0241").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_fbp').click(function() {
    var div_scroll = $("#div_608c0d93-cd18-4620-8d1d-4de1b4bd1904").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });


  $('#val_rbf_2').click(function() {
    var div_scroll = $("#div_27af3862-b6bd-4d16-a38d-6298af5c9dee").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_tbr').click(function() {
    var div_scroll = $("#div_87b6d5d3-4869-49b2-9fb4-1373ddf4fb5e").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_tbr_v2').click(function() {
    var div_scroll = $("#div_7c9fce31-0920-46f2-98d1-7ca0b3c00ba7").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_ebf').click(function() {
    var div_scroll = $("#div_b12eef7d-55c8-446d-9da2-7d8512e1ca00").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_ebf_v2').click(function() {
    var div_scroll = $("#div_6f3181b9-1e99-48b6-a6eb-08420663f53e").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

 $('#val_prp').click(function() {
    var div_scroll = $("#div_eb96400c-da3a-4e10-8001-26e8e1e479ad").position();
    
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



  
  <div class="yellow statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_pca2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      PCA V3
    </div>
  </div>

 
  <div class="olive statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_por2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      POR V3
    </div>
  </div>

  <div class="violet statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_sdl" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      SDL
    </div>
  </div>

  <div class="violet statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_sdl_v2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      SDL V2
    </div>
  </div>

  <div class="pink statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_lqf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      LQF
    </div>
  </div>

  <div class="brown statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_fbp" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      FBP
    </div>
  </div>

  <div class="grey statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_rbf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      RBF
    </div>
  </div>

  <div class="grey statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_rbf_2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      RBF V3
    </div>
  </div>

  <div class="red statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_tbr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      TBR
    </div>
  </div>

  <div class="red statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_tbr_v2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      TBR V2
    </div>
  </div>

  <div class="orange statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_ebf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      EBF
    </div>
  </div>

  <div class="orange statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_ebf_v2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      EBF V2
    </div>
  </div>

  <div class="green statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_prp" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      PRP
    </div>
  </div>


</div>

 <div style=" cursor:pointer;position: fixed;right: 23px;bottom: 23px;padding-top: 15px;margin-bottom: 0;z-index: 10">
<div class="actionbutton arrow" style=" border-radius: 50%;opacity:0;color: #fff;background: #1BA1E2;width: 60px;height: 60px;font-weight: 300;display: flex;justify-content: center;align-items: center;box-shadow:0 0 8px #202020;"></div>

      </div>
