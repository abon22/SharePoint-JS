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

    if(received.listName == "Office Supplies"){
        var label_sts = Number($('#val_sts').text());
        label_sts = label_sts + count;
        $('#val_sts').html(label_sts);
    }

    if(received.listName == "Special Requests"){
        var label_spr = Number($('#val_spr').text());
        label_spr = label_spr + count;
        $('#val_spr').html(label_spr);
    }

    if(received.listName == "Payment/CA Request"){
        var label_pca = Number($('#val_pca').text());
        label_pca = label_pca + count;
        $('#val_pca').html(label_pca);
    }

    if(received.listName == "Payments/CA Request"){
        var label_pca = Number($('#val_pca2').text());
        label_pca = label_pca + count;
        $('#val_pca2').html(label_pca);
    }

    if(received.listName == "Purchase Order Request"){
        var label_por = Number($('#val_por').text());
        label_por = label_por + count;
        $('#val_por').html(label_por);
    }

    if(received.listName == "Salary/Device Loan Benefits"){
        var label_sdl = Number($('#val_sdl').text());
        label_sdl = label_sdl + count;
        $('#val_sdl').html(label_sdl);
    }

    if(received.listName == "Manpower Requests"){
        var label_mrf = Number($('#val_mrf').text());
        label_mrf = label_mrf + count;
        $('#val_mrf').html(label_mrf);
    }

    if(received.listName == "Reimbursement Form"){
        var label_rbf = Number($('#val_rbf').text());
        label_rbf = label_rbf + count;
        $('#val_rbf').html(label_rbf);
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

    if(received.listName == "Educational Benefit"){
        var label_ebf = Number($('#val_ebf').text());
        label_ebf = label_ebf + count;
        $('#val_ebf').html(label_ebf);
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

    getItems('Office Furniture & Equipment',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><And><Eq><FieldRef Name='Status'/><Value Type='Text'>For Purchasing</Value></Eq><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Text'>Unbudgeted</Value></Eq></And><IsNull><FieldRef Name='VP_x0020_Approval'/></IsNull></And></Where></Query></View>");//CEO

    getItems('Office Supplies',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><And><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Text'>Unbudgeted</Value></Eq><Eq><FieldRef Name='Purchaser_x0020_Status'/><Value Type='Text'>For Purchasing</Value></Eq></And><IsNull><FieldRef Name='VP_x0020_Approval'/></IsNull></And></Where></Query></View>");//CEO

    getItems('Special Requests',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><And><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Text'>Unbudgeted</Value></Eq><Eq><FieldRef Name='Purchasing_x0020_Status'/><Value Type='Text'>For Purchasing</Value></Eq></And><IsNull><FieldRef Name='VP_x0020_Approval'/></IsNull></And></Where></Query></View>");//CEO

    getItems('Salary/Device Loan Benefits',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><And><And><And><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/><Value Type='Text'>Approve</Value></Eq><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Text'>Approve</Value></Eq></And><Eq><FieldRef Name='HR_x0020_Status'/><Value Type='Text'>Approve</Value></Eq></And><IsNull><FieldRef Name='VP_x0020_Status'/></IsNull></And><IsNull><FieldRef Name='Executive_x0020_Status'/></IsNull></And></Where></Query></View>");//CEO

    getItems('Payment/CA Request',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Text'>Unbudgeted</Value></Eq><IsNull><FieldRef Name='VP_x0020_Approval'/></IsNull></And></Where></Query></View>");//IMM
    
    getItems('Payments/CA Request',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Text'>For VP</Value></Eq><IsNull><FieldRef Name='VP_x0020_Approval'/></IsNull></And></Where></Query></View>");//IMM

    getItems('Purchase Order Request',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><And><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Text'>Unbudgeted</Value></Eq><Eq><FieldRef Name='Purchasing_x0020_Status'/><Value Type='Text'>For Purchasing</Value></Eq></And><IsNull><FieldRef Name='VP_x0020_Approval'/></IsNull></And></Where></Query></View>");//IMM

    getItems('Manpower Requests',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='HR_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq><IsNull><FieldRef Name='VP_x0020_Approval'/></IsNull></And></Where></Query></View>");//CEO
  
    getItems('Reimbursement Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Text'>Unbudgeted</Value></Eq><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Text'>(None)</Value></Eq></And></Where></Query></View>");//CEO

    getItems('Reimbursements Form',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Text'>For VP</Value></Eq><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Text'>(None)</Value></Eq></And></Where></Query></View>");//CEO

    getItems('Travel Benefit',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='Status_x0020__x0028_VP_x0020_App'/></IsNull><Eq><FieldRef Name='Status_x0020__x0028_Finance_x002'/><Value Type='Text'>Approved</Value></Eq></And></Where></Query></View>");//CEO

    getItems('Educational Benefit',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><Eq><FieldRef Name='Status'/><Value Type='Text'>HR APPROVED</Value></Eq></Where></Query></View>");



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

  $('#val_spr').click(function() {
    var div_scroll = $("#div_79947c11-c14f-4351-bdd9-f292becd7c3b").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });


  $('#val_sdl').click(function() {
    var div_scroll = $("#div_4472655e-49d7-48f3-b43e-32de6650c7b6").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });


 $('#val_pca').click(function() {
    var div_scroll = $("#div_6b40f913-4c08-4fe2-b90f-15a0a643e53e").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

 $('#val_pca2').click(function() {
    var div_scroll = $("#div_3561548b-fec7-4c91-98a6-d6b645fb6b74").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_por').click(function() {
    var div_scroll = $("#div_7f074a45-ccd4-47af-b87e-faee8aeb10b3").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });


  $('#val_mrf').click(function() {
    var div_scroll = $("#div_e6207d58-6696-44c4-8542-7747390f64fe").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_lqf').click(function() {
    var div_scroll = $("#div_d42773b2-cb1f-42dd-a62c-fe1a6ca7a553").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_rbf').click(function() {
    var div_scroll = $("#div_5ac6f8ae-51db-4a56-aa5d-e5340c831f42").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_rbf_2').click(function() {
    var div_scroll = $("#div_392cd078-6f53-47f2-9167-5858567aff0c").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_tbr').click(function() {
    var div_scroll = $("#div_e24a8d9e-36da-41c5-af94-3f8fefcfc9ac").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_ebf').click(function() {
    var div_scroll = $("#div_84bb8d44-72ed-4d98-b1cb-ee3804239ab4").position();
    
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top-9
    }, 500);
    return true;
  });

  $('#val_prp').click(function() {
    var div_scroll = $("#div_05ee0883-75e3-47c6-bb02-3acb70a3beff").position();
    
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

  <div class="orange statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_spr" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      SPR
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

  <div class="yellow statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_pca" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      PCA
    </div>
  </div>

  <div class="yellow statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_pca2" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      PCA
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
  
  <div class="purple statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_mrf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      MRF
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
      RBF
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

  <div class="orange statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_ebf" style="cursor: pointer;">0</label>
    </div>
    <div class="label">
      EBF
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
<div class="actionbutton" style="opacity:0;color: #fff;background: #1BA1E2;width: 50px;height: 50px;font-weight: 300;display: flex;justify-content: center;align-items: center;box-shadow:0 0 8px #202020;"><p style="font-size:23px;margin: 0px 0px 0px 0px!important;">Top</p></div>

      </div>
