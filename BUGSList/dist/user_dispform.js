      // var userProfileProperties;
      // ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
      // var targetUser;

      //       function init(){

      //           this.clientContext2 = new SP.ClientContext.get_current();
      //           this.oWeb = clientContext2.get_web();
      //           targetUser = this.oWeb.get_currentUser();
      //           this.clientContext2.load(targetUser);
      //           this.clientContext2.executeQueryAsync(Function.createDelegate(this,this.retrf), Function.createDelegate(this,this.onQueryFailed));
                
      //        }

            // function onQuerySucceeded(message) {

            //     /*.hidden{
            //       visibility:hidden;
            //     }*/

            //     var account = targetUser.get_loginName();
            //     targetUser_temp = account.substring(account.indexOf("|") + 10);
            //     targetUser = targetUser_temp;

            //          if(targetUser == "asdf" || targetUser == "litoa"){ 

            //             comm = $('#co').val(data.d.Comments);  
            //             issue = $('#iss').val(data.d.Issue_x0020_Status);
            //             assign = $('#ass').val(data.d.Assigned_x0020_To);  

            //           // SPUtility.ShowSPField('Comments');
            //           // SPUtility.ShowSPField('Issue Status');
            //           // SPUtility.ShowSPField('Assigned To');

            //           } else {

            //             comm = $('#co').val(data.d.Comments);  
            //             issue = $('#iss').val(data.d.Issue_x0020_Status);
            //             assign = $('#ass').val(data.d.Assigned_x0020_To);  
            //         //   SPUtility.HideSPField('Comments');
            //         //   SPUtility.HideSPField('Issue Status');
            //      	  // SPUtility.HideSPField('Assigned To');
                    
            //          }
            //       }

function View1(value){


        $.ajax({  
  
        async: true,  
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('BUGSList')/GetItemByID(" + value + ")",  
        method: "GET",  
  
        headers: {  
            "accept": "application/json;odata=verbose",  
            "content-type": "application/json;odata=verbose"  
  
        },  
        success: function(data) {  

            $('#viewId').val(data.d.ID);  
 
            $('#refer').val(data.d.Title);   
            $('#request').val(data.d.Requester_x0020_Name);  
            $('#dep').val(data.d.Department);  
            $('#ti').val(data.d.Title0);  
            $('#pri').val(data.d.Priority); 
            $('#des').val(data.d.Description);  
            $('#co').val(data.d.Comments);  
            $('#iss').val(data.d.Issue_x0020_Status);
            $('#ass').val(data.d.Assigned_x0020_To); 
            getAttachment(data.d.AttachmentFiles.__deferred.uri);                      
        },  

        error: function(error) {  
            console.log(JSON.stringify(error));    
        }   
    })  
}

function getAttachment(Attachmenturl) {
var files ="";
           $.ajax({
               url: Attachmenturl,
               type: "GET",
               headers: { "ACCEPT": "application/json;odata=verbose" },
               success: function (data) {
                
                    $.each(data.d.results, function (i, item){
                          var title = item.Title;
                          var id = item.ID;                              
                    files += "<a href='https://intranet.houseofit.com.au/"+item.ServerRelativeUrl+"'>"+item.FileName+"</a><br>"
                   })
                    $('#attach_id').html(files);                    
               },
               error: function () {
                   alert("Error");
               }
           });

}