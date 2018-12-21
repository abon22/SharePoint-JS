var siteUrl = 'https://intranet.houseofit.com.au/';

function Delete(id) {
   oLoader = SP.UI.ModalDialog.showWaitScreenWithNoClose("Working on it", "Deleting SharePoint BUGSList Report..."); 

    this.itemId = id;

    var clientContext = new SP.ClientContext(siteUrl);
    var oList = clientContext.get_web().get_lists().getByTitle('BUGSList');

    this.oListItem = oList.getItemById(itemId);

    oListItem.deleteObject();

    clientContext.executeQueryAsync(Function.createDelegate(this, this.successHandler), Function.createDelegate(this, this.errorHandler));
}


        function successHandler() {
             window.location.assign('https://intranet.houseofit.com.au/Lists/BUGSList/AllItems.aspx');   
        }

        function errorHandler() {
            console.log("Request failed: " + arguments[1].get_message());
        }


//---------------------------------------------------------------------------------

// var item = document.getElementById('ID').value;
// // // var reque=document.getElementById("Requester_x0020_Name").value;
// // // var dept=document.getElementById("Department").value;
// // // var tit=document.getElementById("Title0").value;
// // // var prio=document.getElementById("Priority").value;
// // // var desc=document.getElementById("Description").value;
// // // var issue=document.getElementById("Issue_x0020_Status").value;
// // // var assign=document.getElementById("Assigned_x0020_To").value;
// // // var attach=document.getElementById("Attachments").value;

// var clientContext = new SP.ClientContext.get_current();
// var oList = clientContext.get_web().get_lists().getByTitle('BUGSList');
// this.oListItem = oList.getItemById(item);
// // // this.oListItem = oList.getItemById(reque);
// // // this.oListItem = oList.getItemById(dept);
// // // this.oListItem = oList.getItemById(tit);
// // // this.oListItem = oList.getItemById(prio);
// // // this.oListItem = oList.getItemById(desc);
// // // this.oListItem = oList.getItemById(issue);
// // // this.oListItem = oList.getItemById(assign);
// // // this.oListItem = oList.getItemById(attach);

// oListItem.deleteObject();
// clientContext.executeQueryAsync(Function.createDelegate(this, this.QuerySucceeded), Function.createDelegate(this, this.QueryFailed));
// }
  
// function QuerySucceeded()
// {
// alert("Record Deleted");
// }
// function QueryFailed(sender, args)
// {
// alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
// }