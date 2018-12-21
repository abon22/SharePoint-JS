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

    if(received.listName == "Purchase Order Requests"){
        var label_por = Number($('#val_por2').text());
        label_por = label_por + count;
        $('#val_por2').html(label_por);
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



function purchaseaction(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Special Requests');

    this.oListItem = oList.getItemById(thisid);
    
    oListItem.set_item('Purchasing_x0020_Status', 'For Purchasing');
    
    var price = prompt("Please enter Actual Price");
    
    if (price != null) {
       // alert(price);
        
        oListItem.set_item('Actual_x0020_Price', price);
        
        oListItem.update();
        clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
    }

    

    
}

function closedaction(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Special Requests');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Purchasing_x0020_Status', 'Closed');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

 //==========================================================================================================================================================================================================================================================

function purchaseactionsupplies(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Office Supplies');

    this.oListItem = oList.getItemById(thisid);
    
    oListItem.set_item('Purchaser_x0020_Status', 'For Purchasing');
    
    var price = prompt("Please enter Actual Price");
    
    if (price != null) {
       // alert(price);
        
        oListItem.set_item('Actual_x0020_Price', price);
        
        oListItem.update();
        clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
    }

   }
   
 
function closedactionsupplies(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Office Supplies');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Purchaser_x0020_Status', 'Closed');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}
 //==========================================================================================================================================================================================================================================================
function purchaseactionfurniture(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Office Furniture & Equipment');

    this.oListItem = oList.getItemById(thisid);
    
    oListItem.set_item('Status', 'For Purchasing');
    
    var price = prompt("Please enter Actual Price");
    
    if (price != null) {
       // alert(price);
        
        oListItem.set_item('Actual_x0020_Price', price);
        
        oListItem.update();
        clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
    }

   }
   
 
function closedactionfurniture(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Office Furniture & Equipment');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Closed');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}
 //==========================================================================================================================================================================================================================================================

function purchasermaintenanceinprog(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Maintenance &  Repair Services');

    this.oListItem = oList.getItemById(thisid);
    
    oListItem.set_item('Status', 'In Progress');
    
    oListItem.update();
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
    
   }
   
 
function purchasermaintenanceclosed(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Maintenance &  Repair Services');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Case Closed');

    var action_taken = prompt("Please add Action Taken");
    
    if (action_taken != null) {
       // alert(price);
        
        oListItem.set_item('Action_x0020_Taken', action_taken);
        
        oListItem.update();
        clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
    }
}
 //==========================================================================================================================================================================================================================================================


function purchasermaintenanceinprog(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Maintenance &  Repair Services');

    this.oListItem = oList.getItemById(thisid);
    
    oListItem.set_item('Status', 'In Progress');
    
    oListItem.update();
    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
    
   }
   
 
function purchasermaintenanceclosed(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Maintenance &  Repair Services');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Case Closed');

    var action_taken = prompt("Please add Action Taken");
    
    if (action_taken != null) {
       // alert(price);
        
        oListItem.set_item('Action_x0020_Taken', action_taken);
        
        oListItem.update();
        clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
    }
}
 //==========================================================================================================================================================================================================================================================
function purchase_order(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');

    this.oListItem = oList.getItemById(thisid);
    
    var price = prompt("Please enter Actual Price");
    
    if (price != null) {
       // alert(price);
        
        oListItem.set_item('Actual_x0020_Price', price);
        oListItem.set_item('Purchasing_x0020_Status', 'For Purchasing');
        
        oListItem.update();
        clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
    }

}

function closed_order(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Purchasing_x0020_Status', 'Closed');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

 //==========================================================================================================================================================================================================================================================

function purchase_order_v3(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');

    this.oListItem = oList.getItemById(thisid);
    
    var price = prompt("Please enter Actual Price");
    
    if (price != null) {
       // alert(price);
        
        oListItem.set_item('Actual_x0020_Price', price);
        oListItem.set_item('Purchasing_x0020_Status', 'For Purchasing');
        
        oListItem.update();
        clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
    }

}

function closed_order_v3(thisid) {
         
    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Requests');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Purchasing_x0020_Status', 'Closed');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}
 //==========================================================================================================================================================================================================================================================


function onQuerySucceeded() {

   // alert('Item updated!');
}

function onQueryFailed(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

$(document).ready(function() {

$("#s4-workspace").scroll(function() {
    OnScrollDiv(this);
}); 



//----------------STATISTICS UI------------------------------------------------------------------------------------

$(document).ready(function() {

    getItems('Office Furniture & Equipment',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><Eq><FieldRef Name='Status'/><Value Type='Text'>Forwarded</Value></Eq></Where></Query></View>");

    getItems('Office Furniture & Equipment',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Status'/><Value Type='Text'>For Purchasing</Value></Eq><Eq><FieldRef Name='Executive_x0020_Status'/><Value Type='Text'>Approve</Value></Eq></And></Where></Query></View>");

    getItems('Office Supplies',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><IsNull><FieldRef Name='Purchaser_x0020_Status'/></IsNull></Where></Query></View>");

    getItems('Office Supplies',"<View><Query><OrderBy><FieldRef Name='ID'/></OrderBy><Where><And><Eq><FieldRef Name='CEO_x0020_Approval'/><Value Type='Text'>Approved</Value></Eq><Eq><FieldRef Name='Purchaser_x0020_Status'/><Value Type='Text'>For Purchasing</Value></Eq></And></Where></Query></View>");
   
    getItems('Purchase Order Request',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/><Value Type='Text'>Approved</Value></Eq><IsNull><FieldRef Name='Purchasing_x0020_Status'/></IsNull></And></Where></Query></View>");//IMM
    
    getItems('Purchase Order Requests',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/><Value Type='Text'>Approved</Value></Eq><IsNull><FieldRef Name='Purchasing_x0020_Status'/></IsNull></And></Where></Query></View>");//IMM

    getItems('Purchase Order Request',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Purchasing_x0020_Status'/><Value Type='Text'>For Purchasing</Value></Eq><Eq><FieldRef Name='Status'/><Value Type='Text'>Approved</Value></Eq></And></Where></Query></View>");//CEO
    
    getItems('Purchase Order Requests',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Purchasing_x0020_Status'/><Value Type='Text'>For Purchasing</Value></Eq><Eq><FieldRef Name='Status'/><Value Type='Text'>Approved</Value></Eq></And></Where></Query></View>");//CEO


    getItems('Special Requests',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Immediate_x0020_Head_x0020_Statu'/><Value Type='Text'>Approved</Value></Eq><IsNull><FieldRef Name='Purchasing_x0020_Status'/></IsNull></And></Where></Query></View>");//CEO

    getItems('Special Requests',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Purchasing_x0020_Status'/><Value Type='Text'>For Purchasing</Value></Eq><Eq><FieldRef Name='Status'/><Value Type='Text'>Approved</Value></Eq></And></Where></Query></View>");//IMM



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
  $('#val_por2').click(function() {
    var div_scroll = $("#div_ca23b4f3-f8d1-4a8d-aeb4-0f74b14e41ea").position();
    
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

  <div class="olive statistic" style="min-width:7%;margin: 0 0 2em;">
    <div class="value">
    <label id="val_por2" style="cursor: pointer;">0</label>
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
<div class="actionbutton arrow" style=" border-radius: 50%;opacity:0;color: #fff;background: #1BA1E2;width: 60px;height: 60px;font-weight: 300;display: flex;justify-content: center;align-items: center;box-shadow:0 0 8px #202020;"></div>

      </div>