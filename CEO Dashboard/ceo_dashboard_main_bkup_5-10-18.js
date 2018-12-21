
  <script type="text/javascript" src="/SiteAssets/Scripts/js/jquery.min.js"></script>
  <script type="text/javascript" src="_layouts/15/sp.runtime.js"></script>
<script type="text/javascript" src="_layouts/15/sp.js"></script>
<script type="text/javascript">

function ceoactionsalarydevice(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Executive_x0020_Status', 'Approve');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoactionsalarydevice2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Executive_x0020_Status', 'Reject');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediateheadsalarydevice(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approve');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


function immediateheadsalarydevice2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Reject');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//========================================================================================================================================================================================

function ceoaction_travel_benefit(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoaction_travel_benefit2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediatehead_travel_benefit(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


function immediatehead_travel_benefit2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


//========================================================================================================================================================================================


function ceoaction_liquidation(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Liquidation Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Status', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoaction_liquidation2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Liquidation Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Status', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


//========================================================================================================================================================================================

function ceoaction(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Special Requests');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoaction2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Special Requests');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//----------------------------------------------------------------------------------------------------------------------

function ceoaction_budget_plan(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Forecasted Budget Plan');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Approval', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


//-----------------------------------------------------------------------------------------------------------------

function immediateaction(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Special Requests');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediateaction2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Special Requests');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//========================================================================================================================================================================================

function immediate_pca_action(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediate_pca_action2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//========================================================================================================================================================================================

function immediate_purchase_order(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediate_purchase_order2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


//========================================================================================================================================================================================


function ceo_purchase_order(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceo_purchase_order2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}



//========================================================================================================================================================================================

function ceo_pca_action(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceo_pca_action2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//========================================================================================================================================================================================



function ceoactionofficesupplies(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Office Supplies');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Approval', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoactionofficesupplies2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Office Supplies');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Approval', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//========================================================================================================================================================================================

function ceoactionofficefurniture(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Office Furniture & Equipment');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Executive_x0020_Status', 'Approve');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoactionofficefurniture2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Office Furniture & Equipment');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Executive_x0020_Status', 'Reject');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//===============================================================================================================================================================================================

function ceoactioncreditcard(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Credit Card Purchase');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status0', 'Approve');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoactioncreditcard2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Credit Card Purchase');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Status0', 'Reject');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//===============================================================================================================================================================================================

function ceoitpurchase(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('IT Purchasing Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Approval', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceoitpurchase2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('IT Purchasing Request');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Approval', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//===============================================================================================================================================================================================

function ceoactionmanpower(thisid) {

   var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Manpower Requests');

    this.oListItem = oList.getItemById(thisid);

     oListItem.set_item('CEO_x0020_Approval', 'Approved');

     oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this,this.onQueryFailed));
}

function ceoactionmanpower2(thisid) {

   var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Manpower Requests');

     this.oListItem = oList.getItemById( thisid);

    oListItem.set_item('CEO_x0020_Approval', 'Rejected');

     oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


//========================================================================================================================================================================================

function ceo_rbf_action(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Status', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function ceo_rbf_action2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('CEO_x0020_Status', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

//========================================================================================================================================================================================

function immediate_rbf_action(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Approved');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function immediate_rbf_action2(thisid) {

    var clientContext = new SP.ClientContext();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');

    this.oListItem = oList.getItemById(thisid);

    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Rejected');

    oListItem.update();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}


//===============================================================================================================================================================================================


//--------------OFFICE FURNITURE & EQUIPTMENT--------------------------------------------------------------------------------------------------------------------------
var html_ofe_approve_btn="<a onclick='ofe_cb_approve()' id='ofe_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected OFE)</a>";

var html_ofe_approve_btn2="<input type='checkbox' id='ofe_select_all' name='Select All'  title='Select All' '/> <label for='ofe_select_all' style='margin-right: 15px;'>Select All </label> <a onclick='ofe_cb_approve_test()'  id='ofe_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected OFE)</a>"+
    "<a onclick='ofe_cb_reject_test()' id='ofe_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected OFE)</a>";


var ofe_ids=[];
function ofe_check_item(check_item){


var elem = document.getElementById("ofe_action_button");
var elem2 = document.getElementById("ofe_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = ofe_ids.indexOf(needle);
    if(isInArray== -1){
        ofe_ids.push(document.getElementById(check_item.id).value);
    }

    if(ofe_ids.length==0){
    elem.innerHTML = "Approve (Selected OFE)";
    elem2.innerHTML = "Reject (Selected OFE)";
    }else{
    elem.innerHTML = "Approve (Selected OFE: "+ofe_ids.length+")";
    elem2.innerHTML = "Reject (Selected OFE: "+ofe_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = ofe_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {ofe_ids.splice(i, 1);}
    if(ofe_ids.length==0){
    elem.innerHTML = "Approve (Selected OFE)";
    elem2.innerHTML = "Reject (Selected OFE)";
    }else{
    elem.innerHTML = "Approve (Selected OFE: "+ofe_ids.length+")";
    elem2.innerHTML = "Reject (Selected OFE: "+ofe_ids.length+")";
    }
  }
  console.log(ofe_ids);


}
function ofe_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Office Furniture & Equipment');//Modify this
    for(var i = 0; i<= ofe_ids.length-1; i++){ 
    console.log(ofe_ids[i]);  
    var oListItem = oList.getItemById(ofe_ids[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function ofe_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Office Furniture & Equipment');//Modify this
    for(var i = 0; i<= ofe_ids.length-1; i++){ 
    //console.log(ofe_ids[i]);  
    var oListItem = oList.getItemById(ofe_ids[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function ofe_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Office Furniture & Equipment');//Modify this
    for(var i = 0; i<= ofe_ids.length-1; i++){ 
    //console.log(ofe_ids[i]);  
    var oListItem = oList.getItemById(ofe_ids[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Reject');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}


//--------------OFFICE FURNITURE & EQUIPTMENT--------------------------------------------------------------------------------------------------------------------------


//--------------SPECIAL REQUEST(CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_spr_approve_btn="<a onclick='spr_cb_approve()' id='spr_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected SPR)</a>";

var html_spr_approve_btn2="<input type='checkbox' id='spr_select_all_ceo' name='Select All'  title='Select All' '/> <label for='spr_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='spr_cb_approve_test()'  id='spr_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected SPR)</a>"+
    "<a onclick='spr_cb_reject_test()' id='spr_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected SPR)</a>";


var spr_ids=[];
function spr_check_item(check_item){
var elem = document.getElementById("spr_action_button");
var elem2 = document.getElementById("spr_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = spr_ids.indexOf(needle);
    if(isInArray== -1){
    spr_ids.push(document.getElementById(check_item.id).value);
    }
    if(spr_ids.length==0){
    elem.innerHTML = "Approve (Selected SPR)";
    elem2.innerHTML = "Reject (Selected SPR)";
    }else{
    elem.innerHTML = "Approve (Selected SPR: "+spr_ids.length+")";
    elem2.innerHTML = "Reject (Selected SPR: "+spr_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = spr_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {spr_ids.splice(i, 1);}
    if(spr_ids.length==0){
    elem.innerHTML = "Approve (Selected SPR)";
    elem2.innerHTML = "Reject (Selected SPR)";
    }else{
    elem.innerHTML = "Approve (Selected SPR: "+spr_ids.length+")";
    elem2.innerHTML = "Reject (Selected SPR: "+spr_ids.length+")";
    }
  }
  console.log(spr_ids);
}
function spr_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Special Requests');//Modify this
    for(var i = 0; i<= spr_ids.length-1; i++){ 
    console.log(spr_ids[i]);  
    var oListItem = oList.getItemById(spr_ids[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}


function spr_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Special Requests');//Modify this
    for(var i = 0; i<= spr_ids.length-1; i++){ 
    console.log(spr_ids[i]);  
    var oListItem = oList.getItemById(spr_ids[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}

function spr_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Special Requests');//Modify this
    for(var i = 0; i<= spr_ids.length-1; i++){ 
    console.log(spr_ids[i]);  
    var oListItem = oList.getItemById(spr_ids[i]);  
    oListItem.set_item('Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------SPECIAL REQUEST(CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------SPECIAL REQUEST(CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_spr_immediate_approve_btn="<a onclick='spr_immediate_cb_approve()' id='spr_immediate_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected SPR)</a>";

var html_spr_immediate_approve_btn2="<input type='checkbox' id='spr_select_all_imm' name='Select All'  title='Select All' '/> <label for='spr_select_all_imm' style='margin-right: 15px;'>Select All </label> <a onclick='spr_immediate_cb_approve_test()'  id='spr_immediate_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected SPR)</a>"+
    "<a onclick='spr_immediate_cb_reject_test()' id='spr_immediate_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected SPR)</a>";


var spr_immediate_ids=[];
function spr_immediate_check_item(check_item){
var elem = document.getElementById("spr_immediate_action_button");
var elem2 = document.getElementById("spr_immediate_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = spr_immediate_ids.indexOf(needle);
    if(isInArray== -1){
    spr_immediate_ids.push(document.getElementById(check_item.id).value);
    }
    if(spr_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected SPR)";
    elem2.innerHTML = "Reject (Selected SPR)";
    }else{
    elem.innerHTML = "Approve (Selected SPR: "+spr_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected SPR: "+spr_immediate_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = spr_immediate_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {spr_immediate_ids.splice(i, 1);}
    if(spr_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected SPR)";
    elem2.innerHTML = "Reject (Selected SPR)";
    }else{
    elem.innerHTML = "Approve (Selected SPR: "+spr_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected SPR: "+spr_immediate_ids.length+")";
    }
  }
  console.log(spr_immediate_ids);
}
function spr_immediate_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Special Requests');//Modify this
    for(var i = 0; i<= spr_immediate_ids.length-1; i++){ 
    console.log(spr_immediate_ids[i]);  
    var oListItem = oList.getItemById(spr_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function spr_immediate_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Special Requests');//Modify this
    for(var i = 0; i<= spr_immediate_ids.length-1; i++){ 
    console.log(spr_immediate_ids[i]);  
    var oListItem = oList.getItemById(spr_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}

function spr_immediate_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Special Requests');//Modify this
    for(var i = 0; i<= spr_immediate_ids.length-1; i++){ 
    console.log(spr_immediate_ids[i]);  
    var oListItem = oList.getItemById(spr_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------SPECIAL REQUEST(CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------PAYMENT/CA REQUEST(CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_pca_immediate_approve_btn="<a onclick='pca_immediate_cb_approve()' id='pca_immediate_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected PCA)</a>";

var html_pca_immediate_approve_btn2="<input type='checkbox' id='pca_select_all_imm' name='Select All'  title='Select All' '/> <label for='pca_select_all_imm' style='margin-right: 15px;'>Select All </label> <a onclick='pca_immediate_cb_approve_test()'  id='pca_immediate_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected PCA)</a>"+
    "<a onclick='pca_immediate_cb_reject_test()' id='pca_immediate_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected PCA)</a>";

var pca_immediate_ids=[];
function pca_immediate_check_item(check_item){
    
var elem = document.getElementById("pca_immediate_action_button");
var elem2 = document.getElementById("pca_immediate_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = pca_immediate_ids.indexOf(needle);
    if(isInArray== -1){
    pca_immediate_ids.push(document.getElementById(check_item.id).value);
    }
    if(pca_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected PCA)";
    elem2.innerHTML = "Reject (Selected PCA)";
    }else{
    elem.innerHTML = "Approve (Selected PCA: "+pca_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected PCA: "+pca_immediate_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = pca_immediate_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {pca_immediate_ids.splice(i, 1);}
    if(pca_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected PCA)";
    elem2.innerHTML = "Reject (Selected PCA)";
    }else{
    elem.innerHTML = "Approve (Selected PCA: "+pca_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected PCA: "+pca_immediate_ids.length+")";
    }
  }
  console.log(pca_immediate_ids);
}
function pca_immediate_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_immediate_ids.length-1; i++){ 
    console.log(pca_immediate_ids[i]);  
    var oListItem = oList.getItemById(pca_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function pca_immediate_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_immediate_ids.length-1; i++){ 
    console.log(pca_immediate_ids[i]);  
    var oListItem = oList.getItemById(pca_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function pca_immediate_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_immediate_ids.length-1; i++){ 
    console.log(pca_immediate_ids[i]);  
    var oListItem = oList.getItemById(pca_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------PAYMENT/CA REQUEST(CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------PAYMENT/CA REQUEST(CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_pca_approve_btn="<a onclick='pca_cb_approve()' id='pca_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected PCA)</a>";

var html_pca_approve_btn2="<input type='checkbox' id='pca_select_all_ceo' name='Select All'  title='Select All' '/> <label for='pca_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='pca_cb_approve_test()'  id='pca_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected PCA)</a>"+
    "<a onclick='pca_cb_reject_test()' id='pca_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected PCA)</a>";

var pca_ids=[];
function pca_check_item(check_item){
var elem = document.getElementById("pca_action_button");
var elem2 = document.getElementById("pca_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = pca_ids.indexOf(needle);
    if(isInArray== -1){
    pca_ids.push(document.getElementById(check_item.id).value);
    }
    if(pca_ids.length==0){
    elem.innerHTML = "Approve (Selected PCA)";
    elem2.innerHTML = "Reject (Selected PCA)";
    }else{
    elem.innerHTML = "Approve (Selected PCA: "+pca_ids.length+")";
    elem2.innerHTML = "Reject (Selected PCA: "+pca_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = pca_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {pca_ids.splice(i, 1);}
    if(pca_ids.length==0){
    elem.innerHTML = "Approve (Selected PCA)";
    elem2.innerHTML = "Reject (Selected PCA)";
    }else{
    elem.innerHTML = "Approve (Selected PCA: "+pca_ids.length+")";
    elem2.innerHTML = "Reject (Selected PCA: "+pca_ids.length+")";
    }
  }
  console.log(pca_ids);
}
function pca_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_ids.length-1; i++){ 
    console.log(pca_ids[i]);  
    var oListItem = oList.getItemById(pca_ids[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}

function pca_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_ids.length-1; i++){ 
    console.log(pca_ids[i]);  
    var oListItem = oList.getItemById(pca_ids[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}

function pca_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Payment/CA Request');//Modify this
    for(var i = 0; i<= pca_ids.length-1; i++){ 
    console.log(pca_ids[i]);  
    var oListItem = oList.getItemById(pca_ids[i]);  
    oListItem.set_item('Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------PAYMENT/CA REQUEST(CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//--------------PURCHASE ORDER REQUEST (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_por_immediate_approve_btn="<a onclick='por_immediate_cb_approve()' id='por_immediate_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected POR)</a>";

var html_por_immediate_approve_btn2="<input type='checkbox' id='por_select_all_imm' name='Select All'  title='Select All' '/> <label for='por_select_all_imm' style='margin-right: 15px;'>Select All </label> <a onclick='por_immediate_cb_approve_test()'  id='por_immediate_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected POR)</a>"+
    "<a onclick='por_immediate_cb_reject_test()' id='por_immediate_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected POR)</a>";

var por_immediate_ids=[];
function por_immediate_check_item(check_item){
var elem = document.getElementById("por_immediate_action_button");
var elem2 = document.getElementById("por_immediate_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = por_immediate_ids.indexOf(needle);
    if(isInArray== -1){
    por_immediate_ids.push(document.getElementById(check_item.id).value);
    }
    if(por_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected POR)";
    elem2.innerHTML = "Reject (Selected POR)";
    }else{
    elem.innerHTML = "Approve (Selected POR: "+por_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected POR: "+por_immediate_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = por_immediate_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {por_immediate_ids.splice(i, 1);}
    if(por_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected POR)";
    elem.innerHTML = "Reject (Selected POR)";
    }else{
    elem.innerHTML = "Approve (Selected POR: "+por_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected POR: "+por_immediate_ids.length+")";
    }
  }
  console.log(por_immediate_ids);
}
function por_immediate_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_immediate_ids.length-1; i++){ 
    console.log(por_immediate_ids[i]);  
    var oListItem = oList.getItemById(por_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function por_immediate_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_immediate_ids.length-1; i++){ 
    console.log(por_immediate_ids[i]);  
    var oListItem = oList.getItemById(por_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function por_immediate_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_immediate_ids.length-1; i++){ 
    console.log(por_immediate_ids[i]);  
    var oListItem = oList.getItemById(por_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------PURCHASE ORDER REQUEST (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//--------------PURCHASE ORDER REQUEST (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------

var html_por_approve_btn="<a onclick='por_cb_approve()' id='por_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected por)</a>";

var html_por_approve_btn2="<input type='checkbox' id='por_select_all_ceo' name='Select All'  title='Select All' '/> <label for='por_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='por_cb_approve_test()'  id='por_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected POR)</a>"+
    "<a onclick='por_cb_reject_test()' id='por_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected POR)</a>";


var por_ids_2=[];
function por_check_item(check_item){
var elem = document.getElementById("por_action_button");
var elem2 = document.getElementById("por_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = por_ids_2.indexOf(needle);
    if(isInArray== -1){
    por_ids_2.push(document.getElementById(check_item.id).value);
    }
    if(por_ids_2.length==0){
    elem.innerHTML = "Approve (Selected POR)";
    elem2.innerHTML = "Reject (Selected POR)";
    }else{
    elem.innerHTML = "Approve (Selected POR: "+por_ids_2.length+")";
    elem2.innerHTML = "Reject (Selected POR: "+por_ids_2.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = por_ids_2.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {por_ids_2.splice(i, 1);}
    if(por_ids_2.length==0){
    elem.innerHTML = "Approve (Selected POR)";
    elem2.innerHTML = "Reject (Selected POR)";
    }else{
    elem.innerHTML = "Approve (Selected POR: "+por_ids_2.length+")";
    elem2.innerHTML = "Reject (Selected POR: "+por_ids_2.length+")";
    }
  }
  console.log(por_ids_2);
}
function por_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_ids_2.length-1; i++){ 
    var oListItem = oList.getItemById(por_ids_2[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);

}
function por_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_ids_2.length-1; i++){ 
    var oListItem = oList.getItemById(por_ids_2[i]);  
    oListItem.set_item('Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);

}
function por_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this
    for(var i = 0; i<= por_ids_2.length-1; i++){ 
    var oListItem = oList.getItemById(por_ids_2[i]);  
    oListItem.set_item('Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);

}
//--------------PURCHASE ORDER REQUEST (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------




//--------------OFFICE SUPPLIES (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_sts_approve_btn="<a onclick='sts_cb_approve()' id='sts_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected STS)</a>";

var html_sts_approve_btn2="<input type='checkbox' id='sts_select_all_ceo' name='Select All'  title='Select All' '/> <label for='sts_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='sts_cb_approve_test()'  id='sts_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected STS)</a>"+
    "<a onclick='sts_cb_reject_test()' id='sts_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected STS)</a>";

var sts_ids=[];
function sts_check_item(check_item){
var elem = document.getElementById("sts_action_button");
var elem2 = document.getElementById("sts_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = sts_ids.indexOf(needle);
    if(isInArray== -1){
    sts_ids.push(document.getElementById(check_item.id).value);
    }
    if(sts_ids.length==0){
    elem.innerHTML = "Approve (Selected STS)";
    elem2.innerHTML = "Reject (Selected STS)";
    }else{
    elem.innerHTML = "Approve (Selected STS: "+sts_ids.length+")";
    elem2.innerHTML = "Reject (Selected STS: "+sts_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = sts_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {sts_ids.splice(i, 1);}
    if(sts_ids.length==0){
    elem.innerHTML = "Approve (Selected STS)";
    elem2.innerHTML = "Reject (Selected STS)";
    }else{
    elem.innerHTML = "Approve (Selected STS: "+sts_ids.length+")";
    elem2.innerHTML = "Reject (Selected STS: "+sts_ids.length+")";
    }
  }
  console.log(sts_ids);
}
function sts_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Office Supplies');//Modify this
    for(var i = 0; i<= sts_ids.length-1; i++){ 
    var oListItem = oList.getItemById(sts_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function sts_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Office Supplies');//Modify this
    for(var i = 0; i<= sts_ids.length-1; i++){ 
    var oListItem = oList.getItemById(sts_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function sts_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Office Supplies');//Modify this
    for(var i = 0; i<= sts_ids.length-1; i++){ 
    var oListItem = oList.getItemById(sts_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//-------------OFFICE SUPPLIES (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------CREDIT CARD PURCHASE (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_ccp_approve_btn="<a onclick='ccp_cb_approve()' id='ccp_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected CCP)</a>";

var html_ccp_approve_btn2="<input type='checkbox' id='ccp_select_all_ceo' name='Select All'  title='Select All' '/> <label for='ccp_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='ccp_cb_approve_test()'  id='ccp_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected CCP)</a>"+
    "<a onclick='ccp_cb_reject_test()' id='ccp_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected CCP)</a>";


var ccp_ids=[];
function ccp_check_item(check_item){
var elem = document.getElementById("ccp_action_button");
var elem2 = document.getElementById("ccp_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = ccp_ids.indexOf(needle);
    if(isInArray== -1){
    ccp_ids.push(document.getElementById(check_item.id).value);
    }
    if(ccp_ids.length==0){
    elem.innerHTML = "Approve (Selected CCP)";
    elem2.innerHTML = "Reject (Selected CCP)";
    }else{
    elem.innerHTML = "Approve (Selected CCP: "+ccp_ids.length+")";
    elem2.innerHTML = "Reject (Selected CCP: "+ccp_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = ccp_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {ccp_ids.splice(i, 1);}
    if(ccp_ids.length==0){
    elem.innerHTML = "Approve (Selected CCP)";
    elem2.innerHTML = "Reject (Selected CCP)";
    }else{
    elem.innerHTML = "Approve (Selected CCP: "+ccp_ids.length+")";
    elem2.innerHTML = "Reject (Selected CCP: "+ccp_ids.length+")";
    }
  }
  console.log(ccp_ids);
}
function ccp_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Credit Card Purchase');//Modify this
    for(var i = 0; i<= ccp_ids.length-1; i++){ 
    var oListItem = oList.getItemById(ccp_ids[i]);  
    oListItem.set_item('Status0', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function ccp_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Credit Card Purchase');//Modify this
    for(var i = 0; i<= ccp_ids.length-1; i++){ 
    var oListItem = oList.getItemById(ccp_ids[i]);  
    oListItem.set_item('Status0', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function ccp_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Credit Card Purchase');//Modify this
    for(var i = 0; i<= ccp_ids.length-1; i++){ 
    var oListItem = oList.getItemById(ccp_ids[i]);  
    oListItem.set_item('Status0', 'Reject');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//-------------CREDIT CARD PURCHASE (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------IT PURCHASING REQUEST (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_itpr_approve_btn="<a onclick='itpr_cb_approve()' id='itpr_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected ITPR)</a>";

var html_itpr_approve_btn2="<input type='checkbox' id='itpr_select_all_ceo' name='Select All'  title='Select All' '/> <label for='itpr_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='itpr_cb_approve_test()'  id='itpr_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected ITPR)</a>"+
    "<a onclick='itpr_cb_reject_test()' id='itpr_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected ITPR)</a>";

var itpr_ids=[];
function itpr_check_item(check_item){
var elem = document.getElementById("itpr_action_button");
var elem2 = document.getElementById("itpr_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = itpr_ids.indexOf(needle);
    //console.log(isInArray);
    if(isInArray== -1){
    itpr_ids.push(document.getElementById(check_item.id).value);
    }
    if(itpr_ids.length==0){
    elem.innerHTML = "Approve (Selected ITPR)";
    elem2.innerHTML = "Reject (Selected ITPR)";
    }else{
    elem.innerHTML = "Approve (Selected ITPR: "+itpr_ids.length+")";
    elem2.innerHTML = "Reject (Selected ITPR: "+itpr_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = itpr_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {itpr_ids.splice(i, 1);}
    if(itpr_ids.length==0){
    elem.innerHTML = "Approve (Selected ITPR)";
    elem2.innerHTML = "Reject (Selected ITPR)";
    }else{
    elem.innerHTML = "Approve (Selected ITPR: "+itpr_ids.length+")";
    elem2.innerHTML = "Reject (Selected ITPR: "+itpr_ids.length+")";
    }
  }
  console.log(itpr_ids);
}
function itpr_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('IT Purchasing Request');//Modify this
    for(var i = 0; i<= itpr_ids.length-1; i++){ 
    var oListItem = oList.getItemById(itpr_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function itpr_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('IT Purchasing Request');//Modify this
    for(var i = 0; i<= itpr_ids.length-1; i++){ 
    var oListItem = oList.getItemById(itpr_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function itpr_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('IT Purchasing Request');//Modify this
    for(var i = 0; i<= itpr_ids.length-1; i++){ 
    var oListItem = oList.getItemById(itpr_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//-------------IT PURCHASING REQUEST (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------SALARY / DEVICE LOAN (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_sdl_immediate_approve_btn="<a onclick='sdl_immediate_cb_approve()' id='sdl_immediate_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected SDL)</a>";

var html_sdl_immediate_approve_btn2="<input type='checkbox' id='sdl_select_all_imm' name='Select All'  title='Select All' '/> <label for='sdl_select_all_imm' style='margin-right: 15px;'>Select All </label> <a onclick='sdl_immediate_cb_approve_test()'  id='sdl_immediate_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected SDL)</a>"+
    "<a onclick='sdl_immediate_cb_reject_test()' id='sdl_immediate_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected SDL)</a>";

var sdl_immediate_ids=[];
function sdl_immediate_check_item(check_item){
var elem = document.getElementById("sdl_immediate_action_button");
var elem2 = document.getElementById("sdl_immediate_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = sdl_immediate_ids.indexOf(needle);
    if(isInArray== -1){
    sdl_immediate_ids.push(document.getElementById(check_item.id).value);
    }
    if(sdl_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected SDL)";
    elem2.innerHTML = "Reject (Selected SDL)";
    }else{
    elem.innerHTML = "Approve (Selected SDL: "+sdl_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected SDL: "+sdl_immediate_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = sdl_immediate_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {sdl_immediate_ids.splice(i, 1);}
    if(sdl_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected SDL)";
    elem2.innerHTML = "Reject (Selected SDL)";
    }else{
    elem.innerHTML = "Approve (Selected SDL: "+sdl_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected SDL: "+sdl_immediate_ids.length+")";
    }
  }
  console.log(sdl_immediate_ids);
}
function sdl_immediate_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_immediate_ids.length-1; i++){ 
    console.log(sdl_immediate_ids[i]);  
    var oListItem = oList.getItemById(sdl_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function sdl_immediate_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_immediate_ids.length-1; i++){ 
    console.log(sdl_immediate_ids[i]);  
    var oListItem = oList.getItemById(sdl_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function sdl_immediate_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_immediate_ids.length-1; i++){ 
    console.log(sdl_immediate_ids[i]);  
    var oListItem = oList.getItemById(sdl_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Statu', 'Reject');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------SALARY / DEVICE LOAN (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------SALARY / DEVICE LOAN (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_sdl_approve_btn="<a onclick='sdl_cb_approve()' id='sdl_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected SDL)</a>";

var html_sdl_approve_btn2="<input type='checkbox' id='sdl_select_all_ceo' name='Select All'  title='Select All' '/> <label for='sdl_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='sdl_cb_approve_test()'  id='sdl_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected SDL)</a>"+
    "<a onclick='sdl_cb_reject_test()' id='sdl_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected SDL)</a>";

var sdl_ids=[];
function sdl_check_item(check_item){
var elem = document.getElementById("sdl_action_button");
var elem2 = document.getElementById("sdl_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = sdl_ids.indexOf(needle);
    if(isInArray== -1){
    sdl_ids.push(document.getElementById(check_item.id).value);
    }
    if(sdl_ids.length==0){
    elem.innerHTML = "Approve (Selected SDL)";
    elem2.innerHTML = "Reject (Selected SDL)";
    }else{
    elem.innerHTML = "Approve (Selected SDL: "+sdl_ids.length+")";
    elem2.innerHTML = "Reject (Selected SDL: "+sdl_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = sdl_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {sdl_ids.splice(i, 1);}
    if(sdl_ids.length==0){
    elem.innerHTML = "Approve (Selected SDL)";
    elem2.innerHTML = "Reject (Selected SDL)";
    }else{
    elem.innerHTML = "Approve (Selected SDL: "+sdl_ids.length+")";
    elem2.innerHTML = "Reject (Selected SDL: "+sdl_ids.length+")";
    }
  }
  console.log(sdl_ids);
}
function sdl_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_ids.length-1; i++){ 
    //console.log(sdl_ids[i]);  
    var oListItem = oList.getItemById(sdl_ids[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function sdl_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_ids.length-1; i++){ 
    //console.log(sdl_ids[i]);  
    var oListItem = oList.getItemById(sdl_ids[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Approve');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function sdl_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Salary/Device Loan Benefits');//Modify this
    for(var i = 0; i<= sdl_ids.length-1; i++){ 
    //console.log(sdl_ids[i]);  
    var oListItem = oList.getItemById(sdl_ids[i]);  
    oListItem.set_item('Executive_x0020_Status', 'Reject');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------SALARY / DEVICE LOAN (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------MANPOWER REQUEST (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_mrf_approve_btn="<a onclick='mrf_cb_approve()' id='mrf_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected MRF)</a>";

var html_mrf_approve_btn2="<input type='checkbox' id='mrf_select_all_ceo' name='Select All'  title='Select All' '/> <label for='mrf_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='mrf_cb_approve_test()'  id='mrf_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected MRF)</a>"+
    "<a onclick='mrf_cb_reject_test()' id='mrf_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected MRF)</a>";

var mrf_ids=[];
function mrf_check_item(check_item){
var elem = document.getElementById("mrf_action_button");
var elem2 = document.getElementById("mrf_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = mrf_ids.indexOf(needle);
    if(isInArray== -1){
    mrf_ids.push(document.getElementById(check_item.id).value);
    }
    if(mrf_ids.length==0){
    elem.innerHTML = "Approve (Selected MRF)";
    elem2.innerHTML = "Reject (Selected MRF)";
    }else{
    elem.innerHTML = "Approve (Selected MRF: "+mrf_ids.length+")";
    elem2.innerHTML = "Reject (Selected MRF: "+mrf_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = mrf_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {mrf_ids.splice(i, 1);}
    if(mrf_ids.length==0){
    elem.innerHTML = "Approve (Selected MRF)";
    elem2.innerHTML = "Reject (Selected MRF)";
    }else{
    elem.innerHTML = "Approve (Selected MRF: "+mrf_ids.length+")";
    elem2.innerHTML = "Reject (Selected MRF: "+mrf_ids.length+")";
    }
  }
  console.log(mrf_ids);
}
function mrf_cb_approve() {
    var itemArray = [];
    //var clientContext = SP.ClientContext.get_current();
    //var oList = clientContext.get_web().get_lists().getByTitle('Manpower Requests');//Modify this
    for(var i = 0; i<= mrf_ids.length-1; i++){ 
    console.log(mrf_ids[i]);  
    //var oListItem = oList.getItemById(mrf_ids[i]);  
   // oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    //oListItem.update();
   // itemArray[i] = oListItem;
    //clientContext.load(itemArray[i]);
    }
   // clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function mrf_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Manpower Requests');//Modify this
    for(var i = 0; i<= mrf_ids.length-1; i++){ 
    //console.log(mrf_ids[i]);  
    var oListItem = oList.getItemById(mrf_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function mrf_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Manpower Requests');//Modify this
    for(var i = 0; i<= mrf_ids.length-1; i++){ 
    //console.log(mrf_ids[i]);  
    var oListItem = oList.getItemById(mrf_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------MANPOWER REQUEST(CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//-------------LIQUIDATION FORM (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_lqf_immediate_approve_btn="<a onclick='lqf_immediate_cb_approve()' id='lqf_immediate_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected LQF)</a>";

var html_lqf_immediate_approve_btn2="<input type='checkbox' id='lqf_select_all_imm' name='Select All'  title='Select All' '/> <label for='lqf_select_all_imm' style='margin-right: 15px;'>Select All </label> <a onclick='lqf_immediate_cb_approve_test()'  id='lqf_immediate_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected LQF)</a>"+
    "<a onclick='lqf_immediate_cb_reject_test()' id='lqf_immediate_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected LQF)</a>";

var lqf_immediate_ids=[];
function lqf_immediate_check_item(check_item){
var elem = document.getElementById("lqf_immediate_action_button");
var elem2 = document.getElementById("lqf_immediate_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = lqf_immediate_ids.indexOf(needle);
    if(isInArray== -1){
    lqf_immediate_ids.push(document.getElementById(check_item.id).value);
    }
    if(lqf_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected LQF)";
    elem.innerHTML = "Reject (Selected LQF)";
    }else{
    elem.innerHTML = "Approve (Selected LQF: "+lqf_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected LQF: "+lqf_immediate_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = lqf_immediate_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {lqf_immediate_ids.splice(i, 1);}
    if(lqf_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected LQF)";
    elem2.innerHTML = "Reject (Selected LQF)";
    }else{
    elem.innerHTML = "Approve (Selected LQF: "+lqf_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected LQF: "+lqf_immediate_ids.length+")";
    }
  }
  console.log(lqf_immediate_ids);
}
function lqf_immediate_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Liquidation Form');//Modify this
    for(var i = 0; i<= lqf_immediate_ids.length-1; i++){ 
    console.log(lqf_immediate_ids[i]);  
    var oListItem = oList.getItemById(lqf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function lqf_immediate_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Liquidation Form');//Modify this
    for(var i = 0; i<= lqf_immediate_ids.length-1; i++){ 
    console.log(lqf_immediate_ids[i]);  
    var oListItem = oList.getItemById(lqf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function lqf_immediate_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Liquidation Form');//Modify this
    for(var i = 0; i<= lqf_immediate_ids.length-1; i++){ 
    console.log(lqf_immediate_ids[i]);  
    var oListItem = oList.getItemById(lqf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------LIQUIDATION FORM (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//-------------FORECASTED (CEO APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_fbp_approve_btn="<a onclick='fbp_cb_approve()' id='fbp_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected FBP)</a>";
/*
var html_fbp_approve_btn2="<input type='checkbox' id='fbp_select_all_ceo' name='Select All'  title='Select All' '/> <label for='fbp_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='fbp_cb_approve_test()'  id='fbp_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected FBP)</a>"+
    "<a onclick='fbp_cb_reject_test()' id='fbp_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected FBP)</a>";*/

    var html_fbp_approve_btn2="<input type='checkbox' id='fbp_select_all_ceo' name='Select All'  title='Select All' '/> <label for='fbp_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='fbp_cb_approve_test()'  id='fbp_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected FBP)</a>";



var fbp_ids=[];
function fbp_check_item(check_item){
var elem = document.getElementById("fbp_action_button");
var elem2 = document.getElementById("fbp_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = fbp_ids.indexOf(needle);
    if(isInArray== -1){
    fbp_ids.push(document.getElementById(check_item.id).value);
    }
    if(fbp_ids.length==0){
    elem.innerHTML = "Approve (Selected FBP)";
    elem2.innerHTML = "Reject (Selected FBP)";
    }else{
    elem.innerHTML = "Approve (Selected FBP: "+fbp_ids.length+")";
    elem2.innerHTML = "Reject (Selected FBP: "+fbp_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = fbp_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {fbp_ids.splice(i, 1);}
    if(fbp_ids.length==0){
    elem.innerHTML = "Approve (Selected FBP)";
    elem2.innerHTML = "Reject (Selected FBP)";
    }else{
    elem.innerHTML = "Approve (Selected FBP: "+fbp_ids.length+")";
    elem2.innerHTML = "Reject (Selected FBP: "+fbp_ids.length+")";
    }
  }
  console.log(fbp_ids);
}
function fbp_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Forecasted Budget Plan');//Modify this
    for(var i = 0; i<= fbp_ids.length-1; i++){ 
    console.log(fbp_ids[i]);  
    var oListItem = oList.getItemById(fbp_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function fbp_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Forecasted Budget Plan');//Modify this
    for(var i = 0; i<= fbp_ids.length-1; i++){ 
    console.log(fbp_ids[i]);  
    var oListItem = oList.getItemById(fbp_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function fbp_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Forecasted Budget Plan');//Modify this
    for(var i = 0; i<= fbp_ids.length-1; i++){ 
    console.log(fbp_ids[i]);  
    var oListItem = oList.getItemById(fbp_ids[i]);  
    oListItem.set_item('CEO_x0020_Approval', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------FORECASTED(CEO APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------Reimbursement Form (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_rbf_immediate_approve_btn="<a onclick='rbf_immediate_cb_approve()' id='rbf_immediate_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected RBF)</a>";

var html_rbf_immediate_approve_btn2="<input type='checkbox' id='rbf_select_all_imm' name='Select All'  title='Select All' '/> <label for='rbf_select_all_imm' style='margin-right: 15px;'>Select All </label> <a onclick='rbf_immediate_cb_approve_test()'  id='rbf_immediate_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected RBF)</a>"+
    "<a onclick='rbf_immediate_cb_reject_test()' id='rbf_immediate_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected RBF)</a>";

var rbf_immediate_ids=[];
function rbf_immediate_check_item(check_item){
var elem = document.getElementById("rbf_immediate_action_button");
var elem2 = document.getElementById("rbf_immediate_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = rbf_immediate_ids.indexOf(needle);
    if(isInArray== -1){
    rbf_immediate_ids.push(document.getElementById(check_item.id).value);
    }
    if(rbf_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected RBF)";
    elem2.innerHTML = "Reject (Selected RBF)";
    }else{
    elem.innerHTML = "Approve (Selected RBF: "+rbf_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected RBF: "+rbf_immediate_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = rbf_immediate_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {rbf_immediate_ids.splice(i, 1);}
    if(rbf_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected RBF)";
    elem2.innerHTML = "Reject (Selected RBF)";
    }else{
    elem.innerHTML = "Approve (Selected RBF: "+rbf_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected RBF: "+rbf_immediate_ids.length+")";
    }
  }
  console.log(rbf_immediate_ids);
}
function rbf_immediate_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_immediate_ids.length-1; i++){ 
    console.log(rbf_immediate_ids[i]);  
    var oListItem = oList.getItemById(rbf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function rbf_immediate_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_immediate_ids.length-1; i++){ 
    console.log(rbf_immediate_ids[i]);  
    var oListItem = oList.getItemById(rbf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function rbf_immediate_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_immediate_ids.length-1; i++){ 
    console.log(rbf_immediate_ids[i]);  
    var oListItem = oList.getItemById(rbf_immediate_ids[i]);  
    oListItem.set_item('Immediate_x0020_Head_x0020_Appro', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------Reimbursement Form (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------Reimbursement Form (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_rbf_approve_btn="<a onclick='rbf_cb_approve()' id='rbf_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected RBF)</a>";

var html_rbf_approve_btn2="<input type='checkbox' id='rbf_select_all_ceo' name='Select All'  title='Select All' '/> <label for='rbf_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='rbf_cb_approve_test()'  id='rbf_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected RBF)</a>"+
    "<a onclick='rbf_cb_reject_test()' id='rbf_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected RBF)</a>";

var rbf_ids=[];
function rbf_check_item(check_item){
var elem = document.getElementById("rbf_action_button");
var elem2 = document.getElementById("rbf_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = rbf_ids.indexOf(needle);
    if(isInArray== -1){
    rbf_ids.push(document.getElementById(check_item.id).value);
    }
    if(rbf_ids.length==0){
    elem.innerHTML = "Approve (Selected RBF)";
    elem2.innerHTML = "Reject (Selected RBF)";
    }else{
    elem.innerHTML = "Approve (Selected RBF: "+rbf_ids.length+")";
    elem2.innerHTML = "Reject (Selected RBF: "+rbf_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = rbf_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {rbf_ids.splice(i, 1);}
    if(rbf_ids.length==0){
    elem.innerHTML = "Approve (Selected RBF)";
    elem2.innerHTML = "Reject (Selected RBF)";
    }else{
    elem.innerHTML = "Approve (Selected RBF: "+rbf_ids.length+")";
    elem2.innerHTML = "Reject (Selected RBF: "+rbf_ids.length+")";
    }
  }
  console.log(rbf_ids);
}
function rbf_cb_approve() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_ids.length-1; i++){ 
    //console.log(rbf_ids[i]);  
    var oListItem = oList.getItemById(rbf_ids[i]);  
    oListItem.set_item('CEO_x0020_Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function rbf_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_ids.length-1; i++){ 
    //console.log(rbf_ids[i]);  
    var oListItem = oList.getItemById(rbf_ids[i]);  
    oListItem.set_item('CEO_x0020_Status', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function rbf_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Reimbursement Form');//Modify this
    for(var i = 0; i<= rbf_ids.length-1; i++){ 
    //console.log(rbf_ids[i]);  
    var oListItem = oList.getItemById(rbf_ids[i]);  
    oListItem.set_item('CEO_x0020_Status', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------Reimbursement Form (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------


//--------------TRAVEL BENEFIT (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_tbr_immediate_approve_btn="<a onclick='tbr_immediate_cb_approve()' id='tbr_immediate_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected TBR)</a>";

var html_tbr_immediate_approve_btn2="<input type='checkbox' id='tbr_select_all_imm' name='Select All'  title='Select All' '/> <label for='tbr_select_all_imm' style='margin-right: 15px;'>Select All </label> <a onclick='tbr_immediate_cb_approve_test()'  id='tbr_immediate_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected TBR)</a>"+
    "<a onclick='tbr_immediate_cb_reject_test()' id='tbr_immediate_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected TBR)</a>";

var tbr_immediate_ids=[];
function tbr_immediate_check_item(check_item){
var elem = document.getElementById("tbr_immediate_action_button");
var elem2 = document.getElementById("tbr_immediate_action_button2");
  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = tbr_immediate_ids.indexOf(needle);
    if(isInArray== -1){
    tbr_immediate_ids.push(document.getElementById(check_item.id).value);
    }
    if(tbr_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected TBR)";
    elem2.innerHTML = "Reject (Selected TBR)";
    }else{
    elem.innerHTML = "Approve (Selected TBR: "+tbr_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected TBR: "+tbr_immediate_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = tbr_immediate_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {tbr_immediate_ids.splice(i, 1);}
    if(tbr_immediate_ids.length==0){
    elem.innerHTML = "Approve (Selected TBR)";
    elem2.innerHTML = "Reject (Selected TBR)";
    }else{
    elem.innerHTML = "Approve (Selected TBR: "+tbr_immediate_ids.length+")";
    elem2.innerHTML = "Reject (Selected TBR: "+tbr_immediate_ids.length+")";
    }
  }
  console.log(tbr_immediate_ids);
}
function tbr_immediate_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');//Modify this
    for(var i = 0; i<= tbr_immediate_ids.length-1; i++){ 
    console.log(tbr_immediate_ids[i]);  
    var oListItem = oList.getItemById(tbr_immediate_ids[i]);  
    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function tbr_immediate_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');//Modify this
    for(var i = 0; i<= tbr_immediate_ids.length-1; i++){ 
    console.log(tbr_immediate_ids[i]);  
    var oListItem = oList.getItemById(tbr_immediate_ids[i]);  
    oListItem.set_item('Status_x0020__x0028_Immediate_x0', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------TRAVEL BENEFIT (CEO IMMEDIATE HEAD APPROVAL)--------------------------------------------------------------------------------------------------------------------------

//--------------TRAVEL BENEFIT (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------
var html_tbr_approve_btn="<a onclick='tbr_cb_approve()' id='tbr_action_button'   style='text-decoration: none;display: block;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;'>Approve (Selected TBR)</a>";

var html_tbr_approve_btn2="<input type='checkbox' id='tbr_select_all_ceo' name='Select All'  title='Select All' '/> <label for='tbr_select_all_ceo' style='margin-right: 15px;'>Select All </label> <a onclick='tbr_cb_approve_test()'  id='tbr_action_button'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(48, 179, 135); border: white;cursor: pointer;font-size: 13px;margin-right: 15px;'>Approve (Selected TBR)</a>"+
    "<a onclick='tbr_cb_reject_test()' id='tbr_action_button2'   style='text-decoration: none;display: inline;width: 160px;height: 20px;background: #4E9CAF;padding: 5px;text-align: center;color: white; background-color: rgb(242, 93, 73); border: white;cursor: pointer;font-size: 13px;'>Reject (Selected TBR)</a>";

var tbr_ids=[];
function tbr_check_item(check_item){
var elem = document.getElementById("tbr_action_button");
var elem2 = document.getElementById("tbr_action_button2");

  if(document.getElementById(check_item.id).checked == true){
    var needle = document.getElementById(check_item.id).value;
    var isInArray = tbr_ids.indexOf(needle);
    if(isInArray== -1){
    tbr_ids.push(document.getElementById(check_item.id).value);
    }
    if(tbr_ids.length==0){
    elem.innerHTML = "Approve (Selected TBR)";
    elem2.innerHTML = "Reject (Selected TBR)";
    }else{
    elem.innerHTML = "Approve (Selected TBR: "+tbr_ids.length+")";
    elem2.innerHTML = "Reject (Selected TBR: "+tbr_ids.length+")";
    }
  }
  else if(document.getElementById(check_item.id).checked == false){
    var i = tbr_ids.indexOf(document.getElementById(check_item.id).value);
    if(i != -1) {tbr_ids.splice(i, 1);}
    if(tbr_ids.length==0){
    elem.innerHTML = "Approve (Selected TBR)";
    elem2.innerHTML = "Reject (Selected TBR)";
    }else{
    elem.innerHTML = "Approve (Selected TBR: "+tbr_ids.length+")";
    elem2.innerHTML = "Reject (Selected TBR: "+tbr_ids.length+")";
    }
  }
  console.log(tbr_ids);
}

function tbr_cb_approve_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');//Modify this
    for(var i = 0; i<= tbr_ids.length-1; i++){ 
    //console.log(tbr_ids[i]);  
    var oListItem = oList.getItemById(tbr_ids[i]);  
    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Approved');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
function tbr_cb_reject_test() {
    var itemArray = [];
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Travel Benefit');//Modify this
    for(var i = 0; i<= tbr_ids.length-1; i++){ 
    //console.log(tbr_ids[i]);  
    var oListItem = oList.getItemById(tbr_ids[i]);  
    oListItem.set_item('Status_x0020__x0028_Executive_x0', 'Rejected');//Modify this
    oListItem.update();
    itemArray[i] = oListItem;
    clientContext.load(itemArray[i]);
    }
    clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}
//--------------TRAVEL BENEFIT (CEO PENDING APPROVAL)--------------------------------------------------------------------------------------------------------------------------




function onQuerySucceeded() {
    console.log('Items Updated');
    document.location.reload(true);
    }
function onQueryFailed(sender, args) {alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());}




$(document).ready(function() {






$("#div_581da31d-ad36-4773-8f68-80bfdab658dd").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_ce48f642-e945-4f87-b6ee-3f785e948cc4").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_9e3dc821-c04f-4612-9a2e-626f81bfdbc6").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_e24ecbb9-1ecc-47d2-b36d-f410d5d19426").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_d95abbfb-3bb9-42ae-8b76-2f7a59a59e17").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_f45e16c2-551f-4a22-a15f-d4ab455a3cb4").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_c0a5ffc4-28a2-4c2b-aa88-9bc0b22c5b42").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_9466972c-1067-4b8a-a8e5-c303059c4972").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_bc03c099-68b2-4cd0-b5ac-3f08063a5468").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_d1604bee-d3ff-4047-afd6-070bdb4877e5").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_3653d32f-1f3b-49fa-a3ff-281ee7d27114").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_7c1f9f3f-302c-4016-a26b-cd1c2d5889f4").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_413aeb1b-4151-4121-a309-53ea0c7f6512").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_d42773b2-cb1f-42dd-a62c-fe1a6ca7a553").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_c73a5a60-3337-40f2-a7d3-1204628e20a5").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_c524c19f-499b-49da-b87f-3cca4679265e").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_f36f05e0-d5c4-413a-95ee-0cb70ff2557d").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_52189284-f929-4a25-b136-d6c55267c9f8").css("box-shadow", "3px 3px 5px 6px #ccc");
$("#div_ac9634eb-3250-4090-882a-601a7743cc25").css("box-shadow", "3px 3px 5px 6px #ccc");


//$('#WebPartTitleWPQ3').append(html_ofe_approve_btn);//ofe_ceo --done test

$('#WebPartTitleWPQ3').append("<br>"+html_ofe_approve_btn2);//ofe_ceo

//$('#WebPartTitleWPQ4').append(html_spr_approve_btn);//spr_ceo --Done Test
//$('#WebPartTitleWPQ5').append(html_spr_immediate_approve_btn);//spr_immediate --Done Test

$('#WebPartTitleWPQ4').append("<br>"+html_spr_approve_btn2);//spr_ceo 
$('#WebPartTitleWPQ5').append("<br>"+html_spr_immediate_approve_btn2);//spr_immediate 

//$('#WebPartTitleWPQ6').append(html_pca_immediate_approve_btn);//pca_immediate --Done Test
//$('#WebPartTitleWPQ7').append(html_pca_approve_btn);//pca_ceo -- Done Test


//$('#pcaTest').append("<br>"+html_pca_immediate_approve_btn2);//pca_immediate
$('#WebPartTitleWPQ6').append("<br>"+html_pca_immediate_approve_btn2);//pca_immediate
$('#WebPartTitleWPQ7').append("<br>"+html_pca_approve_btn2);//pca_ceo


//$('#WebPartTitleWPQ8').append(html_por_immediate_approve_btn);//por_immediate --done test
//$('#WebPartTitleWPQ9').append(html_por_approve_btn);//por_ceo --done test

$('#WebPartTitleWPQ8').append("<br>"+html_por_immediate_approve_btn2);
$('#WebPartTitleWPQ9').append("<br>"+html_por_approve_btn2);

//$('#WebPartTitleWPQ10').append(html_sts_approve_btn);//sts_ceo --Done Test

$('#WebPartTitleWPQ10').append("<br>"+html_sts_approve_btn2);//sts_ceo


//$('#WebPartTitleWPQ11').append(html_ccp_approve_btn);//ccp_ceo --Done Test

$('#WebPartTitleWPQ11').append("<br>"+html_ccp_approve_btn2);//ccp_ceo


//$('#WebPartTitleWPQ12').append(html_itpr_approve_btn);//itpr_ceo -- Done Test

$('#WebPartTitleWPQ12').append("<br>"+html_itpr_approve_btn2);//itpr_ceo


//$('#WebPartTitleWPQ13').append(html_sdl_approve_btn);//sdl_ceo --Done Test
//$('#WebPartTitleWPQ14').append(html_sdl_immediate_approve_btn);//sdl_immediate --Done Test

$('#WebPartTitleWPQ13').append("<br>"+html_sdl_approve_btn2);//sdl_ceo --Done Test
$('#WebPartTitleWPQ14').append("<br>"+html_sdl_immediate_approve_btn2);//sdl_ceo


//$('#WebPartTitleWPQ21').append(html_mrf_approve_btn);//mrf_ceo --Done Test

$('#WebPartTitleWPQ21').append("<br>"+html_mrf_approve_btn2);//mrf_ceo

//$('#WebPartTitleWPQ15').append(html_lqf_immediate_approve_btn);//lqf_immediate --Done Test

$('#WebPartTitleWPQ15').append("<br>"+html_lqf_immediate_approve_btn2);//lqf_immediate

//$('#WebPartTitleWPQ16').append(html_fbp_approve_btn);//fbp_ceo --Done Test


$('#WebPartTitleWPQ16').append("<br>"+html_fbp_approve_btn2);//fbp_ceo 

//$('#WebPartTitleWPQ17').append(html_rbf_approve_btn);//rbf_ceo --Done Test
//$('#WebPartTitleWPQ18').append(html_rbf_immediate_approve_btn);//rbf_immediate --Done Test

$('#WebPartTitleWPQ17').append("<br>"+html_rbf_approve_btn2);//sdl_ceo
$('#WebPartTitleWPQ18').append("<br>"+html_rbf_immediate_approve_btn2);//rbf_immediate

$('#WebPartTitleWPQ22').append("<br>"+html_tbr_approve_btn2);//sdl_ceo --Done Test
$('#WebPartTitleWPQ23').append("<br>"+html_tbr_immediate_approve_btn2);//sdl_ceo


//----------------OFE-----------------------------------------------
// One checkbox to check them all
            $('#ofe_select_all').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='ofe_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='ofe_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------OFE-----------------------------------------------

//----------------SPR CEO-----------------------------------------------
// One checkbox to check them all
            $('#spr_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='spr_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='spr_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------SPR CEO-----------------------------------------------

//----------------SPR IMM-----------------------------------------------
// One checkbox to check them all
            $('#spr_select_all_imm').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='spr_checkbox_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='spr_checkbox_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------SPR IMM-----------------------------------------------

//----------------PCA IMM-----------------------------------------------
// One checkbox to check them all
            $('#pca_select_all_imm').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='pca_checkbox_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='pca_checkbox_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------PCA IMM-----------------------------------------------

//----------------PCA CEO-----------------------------------------------
// One checkbox to check them all
            $('#pca_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='pca_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='pca_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------PCA CEO-----------------------------------------------

//----------------POR IMM-----------------------------------------------
// One checkbox to check them all
            $('#por_select_all_imm').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='por_checkbox_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='por_checkbox_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------POR IMM-----------------------------------------------

//----------------POR CEO-----------------------------------------------
// One checkbox to check them all
            $('#por_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='por_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='por_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------POR CEO-----------------------------------------------

//----------------STS CEO-----------------------------------------------
// One checkbox to check them all
            $('#sts_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='sts_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='sts_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------STS CEO-----------------------------------------------

//----------------CCP CEO-----------------------------------------------
// One checkbox to check them all
            $('#ccp_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='ccp_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='ccp_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------CCP CEO-----------------------------------------------

//----------------ITPR CEO-----------------------------------------------
// One checkbox to check them all
            $('#itpr_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='itpr_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='itpr_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------ITPR CEO-----------------------------------------------


//----------------SDL CEO-----------------------------------------------
// One checkbox to check them all
            $('#sdl_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='sdl_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='sdl_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------SDL CEO-----------------------------------------------

//----------------SDL IMM-----------------------------------------------
// One checkbox to check them all
            $('#sdl_select_all_imm').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='sdl_checkbox_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='sdl_checkbox_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------SDL IMM-----------------------------------------------

//----------------ITPR CEO-----------------------------------------------
// One checkbox to check them all
            $('#mrf_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='mrf_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='mrf_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------ITPR CEO-----------------------------------------------

//----------------LQF IMM-----------------------------------------------
// One checkbox to check them all
            $('#lqf_select_all_imm').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='lqf_checkbox_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='lqf_checkbox_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------LQF IMM-----------------------------------------------

//----------------FBP CEO-----------------------------------------------
// One checkbox to check them all
            $('#fbp_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='fbp_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='fbp_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------FBP CEO-----------------------------------------------

//----------------LQF IMM-----------------------------------------------
// One checkbox to check them all
            $('#rbf_select_all_imm').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='rbf_checkbox_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='rbf_checkbox_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------LQF IMM-----------------------------------------------

//----------------FBP CEO-----------------------------------------------
// One checkbox to check them all
            $('#rbf_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='rbf_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='rbf_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------FBP CEO-----------------------------------------------

//----------------TBR CEO-----------------------------------------------
// One checkbox to check them all
            $('#tbr_select_all_ceo').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='tbr_checkbox_ceo']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='tbr_checkbox_ceo']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------TBR CEO-----------------------------------------------

//----------------TBR IMM-----------------------------------------------
// One checkbox to check them all
            $('#tbr_select_all_imm').on('change', function () {
                if ($(this).prop('checked')) {
                    $("input[name='tbr_checkbox_imm']").each(function () {
                        $(this).prop('checked', true).trigger('change');
                    });
                } else {
                    $("input[name='tbr_checkbox_imm']").each(function () {
                        $(this).prop('checked', false).trigger('change');
                    });
                }
            });
//----------------TBR IMM-----------------------------------------------





});//end document ready

</script> 








