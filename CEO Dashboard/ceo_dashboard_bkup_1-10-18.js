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

   var clientContext = newSP.ClientContext();
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

//===============================================================================================================================================================================================

function onQuerySucceeded() {

   // alert('Item updated!');
}

function onQueryFailed(sender, args) {

    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}

</script> 
<h3>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​</h3>