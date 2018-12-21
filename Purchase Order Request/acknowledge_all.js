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

 var por_ids = [];

function processItems() {
    var received=this;//received 'request' from Caller
    //console.log(this)
    received.items=[];
    var listEnumerator = received.itemCollection.getEnumerator();
    var count=0;
    while (listEnumerator.moveNext()) {
        var listitem = listEnumerator.get_current();
        received.items.push(listitem.get_id());
        por_ids.push(listitem.get_id());

        //count++;
    }

//console.log(received.listName);
por_cb_approve_test();
//console.log(por_ids);
}

function por_cb_approve_test() {
    var itemArray = [];
   
    var clientContext = SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('Purchase Order Request');//Modify this

    console.log(por_ids);
    for(var i = 0; i<= por_ids.length-1; i++){
    //console.log(por_ids[i]);  

    //var oListItem = oList.getItemById(por_ids[i]);  
    //oListItem.set_item('Acknowledgement', 'I have acknowledge that I have received the requested item.');//Modify this
    //oListItem.update();
    //itemArray[i] = oListItem;
    //clientContext.load(itemArray[i]);

    }
    //clientContext.executeQueryAsync(onQuerySucceeded, onQueryFailed);
}


function failure(sender, args){
    console.error(args.get_message());
}

function onQuerySucceeded() {
    console.log('Items Updated');
    document.location.reload(true);
}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}



$(document).ready(function() {

getItems('Purchase Order Request',"<View><Query><OrderBy><FieldRef Name='IssueID' Ascending='FALSE'/></OrderBy><Where><And><Eq><FieldRef Name='Purchasing_x0020_Status'/><Value Type='Text'>Closed</Value></Eq><IsNull><FieldRef Name='Acknowledgement'/></IsNull></And></Where></Query></View>");




})

</script>