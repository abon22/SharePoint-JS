<link rel="stylesheet" type="text/css" href="/SiteAssets/Scripts/CEO Dashboard/statistic.css">
<link rel="stylesheet" type="text/css" href="/SiteAssets/Scripts/CEO Dashboard/statistic.min.css">
<script type="text/javascript" src="/SiteAssets/Scripts/js/jquery.min.js"></script>
<script type="text/javascript" src="_layouts/15/sp.runtime.js"></script>
<script type="text/javascript" src="_layouts/15/sp.js"></script>

<script type="text/javascript">


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

    console.log("Listname: "+received.listName+" Count: "+count);

    //var label_ofe = Number($('#val_ofe').text());


    if(received.listName == "Office Furniture & Equipment"){
    	var label_ofe = Number($('#val_ofe').text());
    	label_ofe = label_ofe + count;
    	$('#val_ofe').html(label_ofe);
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

    if(received.listName == "Reimbursement Form"){
    	var label_rbf = Number($('#val_rbf').text());
    	label_rbf = label_rbf + count;
    	$('#val_rbf').html(label_rbf);
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
//console.clear();

$(document).ready(function() {






    getItems('Office Furniture & Equipment',"<View><Query><Where><Or><And><IsNull><FieldRef Name='Executive_x0020_Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><IsNull><FieldRef Name='Executive_x0020_Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><IsNull><FieldRef Name='Executive_x0020_Status'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

    getItems('Special Requests',"<View><Query><Where><Or><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

    getItems('Special Requests',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><IsNull><FieldRef Name='Purchasing_x0020_Status'/></IsNull></And></And></Where></Query></View>");//IMM

    getItems('Payment/CA Request',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull></And></Where></Query></View>");//IMM

    getItems('Payment/CA Request',"<View><Query><Where><Or><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

    getItems('Purchase Order Request',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull></And></Where></Query></View>");//IMM

    getItems('Purchase Order Request',"<View><Query><Where><Or><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status0'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><IsNull><FieldRef Name='Status'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

    getItems('Office Supplies',"<View><Query><Where><Or><And><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

    getItems('Credit Card Purchase',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><Eq><FieldRef Name='Status0'/><Value Type='Text'>In Progress</Value></Eq></Where></Query></View>");//CEO

    getItems('IT Purchasing Request',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='CSO_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull></And></Where></Query></View>");//CEO

    getItems('Salary/Device Loan Benefits',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><And><And><And><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/><Value Type='Text'>Approve</Value></Eq><Eq><FieldRef Name='Finance_x0020_Status'/><Value Type='Text'>Approve</Value></Eq></And><Eq><FieldRef Name='HR_x0020_Status'/><Value Type='Text'>Approve</Value></Eq></And><Eq><FieldRef Name='VP_x0020_Status'/><Value Type='Text'>Approve</Value></Eq></And><IsNull><FieldRef Name='Executive_x0020_Status'/></IsNull></And></Where></Query></View>");//CEO

    getItems('Salary/Device Loan Benefits',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><And><IsNull><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/></IsNull><IsNull><FieldRef Name='Finance_x0020_Status'/></IsNull></And></And></Where></Query></View>");//IMM

    getItems('Manpower Requests',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><Eq><FieldRef Name='HR_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq></And><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull></And></Where></Query></View>");//CEO

    getItems('Liquidation Form',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><And><Eq><FieldRef Name='Immediate_x0020_Status'/><Value Type='Choice'>(None)</Value></Eq><IsNotNull><FieldRef Name='Total_x0020_Amount'/></IsNotNull></And></And></Where></Query></View>");//IMM

    getItems('Forecasted Budget Plan',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Text'>Reviewed</Value></Eq><Eq><FieldRef Name='CEO_x0020_Approval'/><Value Type='Text'>(None)</Value></Eq></And></Where></Query></View>");//CEO

    getItems('Reimbursement Form',"<View><Query><Where><Or><And><Eq><FieldRef Name='CEO_x0020_Status'/><Value Type='Text'>(None)</Value></Eq><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Choice'>Budgeted</Value></Eq></And><And><And><Eq><FieldRef Name='CEO_x0020_Status'/><Value Type='Text'>(None)</Value></Eq><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Choice'>Unbudgeted</Value></Eq></And><And><Eq><FieldRef Name='CEO_x0020_Status'/><Value Type='Text'>(None)</Value></Eq><Eq><FieldRef Name='VP_x0020_Approval'/><Value Type='Choice'>Approved</Value></Eq></And></And></Or></Where><OrderBy><FieldRef Name='ID' Ascending='False'/></OrderBy></Query></View>");//CEO

    getItems('Reimbursement Form',"<View><Query><Where><And><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Appro'/><Value Type='Text'>(None)</Value></Eq></And></Where></Query></View>");//IMM

    getItems('Travel Benefit',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><IsNull><FieldRef Name='Status_x0020__x0028_Executive_x0'/></IsNull><Eq><FieldRef Name='Status_x0020__x0028_VP_x0020_App'/><Value Type='Text'>Approved</Value></Eq></And></Where></Query></View>");//CEO

    getItems('Travel Benefit',"<View><Query><Where><And><IsNull><FieldRef Name='Status_x0020__x0028_Immediate_x0'/></IsNull><Contains><FieldRef Name='Immediate_x0020_Head'/><Value Type='User'>artem</Value></Contains></And></Where></Query></View>");//IMM

    getItems('Educational Benefit',"<View><Query><OrderBy><FieldRef Name='ID' Ascending='FALSE'/></OrderBy><Where><And><And><And><And><And><IsNull><FieldRef Name='CEO_x0020_Approval'/></IsNull><Eq><FieldRef Name='Department_x0020_Head_x0020_Appr'/><Value Type='Text'>Approved</Value></Eq></And><Eq><FieldRef Name='HR_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq></And><Eq><FieldRef Name='VP_x002d_Philippines_x0020_Appro'/><Value Type='Text'>Approved</Value></Eq></And><Eq><FieldRef Name='Finance_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq></And><Eq><FieldRef Name='Status'/><Value Type='Text'>FINANCE APPROVED</Value></Eq></And></Where></Query></View>");



 $('#val_pca').click(function() {
 	var div_scroll = $("#div_e24ecbb9-1ecc-47d2-b36d-f410d5d19426").position();
 	console.log("click");
    $('#s4-workspace').animate({
      scrollTop: div_scroll.top+150
    }, 500);
    return true;
  });




});




</script>

<div class="ui statistics" >
  <div class="red statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_ofe">0</label>
    </div>
    <div class="label">
      OFE
    </div>
  </div>

  <div class="orange statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_spr">0</label>
    </div>
    <div class="label">
      SPR
    </div>
  </div>

  <div class="yellow statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_pca">0</label>
    </div>
    <div class="label">
      PCA
    </div>
  </div>

  <div class="olive statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_por">0</label>
    </div>
    <div class="label">
      POR
    </div>
  </div>

  <div class="green statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_sts">0</label>
    </div>
    <div class="label">
      STS
    </div>
  </div>

  <div class="teal statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_ccp">0</label>
    </div>
    <div class="label">
      CCP
    </div>
  </div>

  <div class="blue statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_itpr">0</label>
    </div>
    <div class="label">
      ITPR
    </div>
  </div>

  <div class="violet statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_sdl">0</label>
    </div>
    <div class="label">
      SDL
    </div>
  </div>

  <div class="purple statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_mrf">0</label>
    </div>
    <div class="label">
      MRF
    </div>
  </div>

  <div class="pink statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_lqf">0</label>
    </div>
    <div class="label">
      LQF
    </div>
  </div>

  <div class="brown statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_fbp">0</label>
    </div>
    <div class="label">
      FBP
    </div>
  </div>

  <div class="grey statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_rbf">0</label>
    </div>
    <div class="label">
      RBF
    </div>
  </div>

  <div class="red statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_tbr">0</label>
    </div>
    <div class="label">
      TBR
    </div>
  </div>

  <div class="orange statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_ebf">0</label>
    </div>
    <div class="label">
      EBF
    </div>
  </div>


</div>