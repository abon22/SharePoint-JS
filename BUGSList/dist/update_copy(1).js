var userProfileProperties;
ExecuteOrDelayUntilScriptLoaded(init,'sp.js');
var targetUser;


function Edit(value){

    this.clientContext2 = new SP.ClientContext.get_current();
    this.oWeb = clientContext2.get_web();
    targetUser = this.oWeb.get_currentUser();
    this.clientContext2.load(targetUser);

    var account = targetUser.get_loginName();
    targetUser_temp = account.substring(account.indexOf("|") + 10);
    targetUser = targetUser_temp;

    $.ajax({   
        async: true,  
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('BUGSList')/GetItemByID(" + value + ")",  
        method: "GET",  
        
        headers: {  
            "accept": "application/json;odata=verbose",  
            "content-type": "application/json;odata=verbose"                
        }, 

        success: function(data) {

            console.log(data.d.Attachments);  
            reference = $('#ref').val(data.d.Title);  
            $('#uuid').val(data.d.ID);  
            requester = $('#user').val(data.d.Requester_x0020_Name);  
            dept = $('#depart').val(data.d.Department);  
            tit = $('#titl').val(data.d.Title0);  
            prio = $('#prior').val(data.d.Priority); 
            desc = $('#descrip').val(data.d.Description);
            comm = $('#commen').val(data.d.Comments);  
            issue = $('#issuestat').val(data.d.Issue_x0020_Status);
            assign = $('#assigned').val(data.d.Assigned_x0020_To);

            getAttachment_to_delete(data.d.AttachmentFiles.__deferred.uri, data.d.ID);     
        },  

        error: function(error) {  
            console.log(JSON.stringify(error));    
        }    
    })    
    uId = value;  
}

var getFileBuffer = function (file) {
    var deferred = $.Deferred();
    var reader = new FileReader();
    reader.onload = function (e) {
        deferred.resolve(e.target.result);
    }
    reader.onerror = function (e) {
        deferred.reject(e.target.error);
    }
    reader.readAsArrayBuffer(file);
    return deferred.promise();
};

function Update(buffer) {  
 
    var UId = $('#uuid').val();  
    var reference = $('#ref').val();
    var requester = $('#user').val();  
    var dept = $('#depart').val();  
    var tit = $('#titl').val();  
    var prio = $('#prior').val();  
    var desc = $('#descrip').val();  
    var comm = $('#commen').val();  
    var issue = $('#issuestat').val();  
    var assign = $('#assigned').val();  
    var inputfile_edit = $('#input_edit').html();

    if ($("#input_edit")[0].files.length > 0) {
        var file = $("#input_edit")[0].files[0];
        getFileBuffer(file).then(function (buffer) {
            

            $.ajax({
             
                url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('BUGSList')/items(" + UId + ")/AttachmentFiles/add(FileName='" + file.name + "')",
                method: "POST",                   
                data: JSON.stringify({  
                    '__metadata': {  
                        'type': 'SP.Data.BUGSListListItem'
                    },  
                    'Title': reference,
                    'Requester_x0020_Name': requester,  
                    'Department': dept,
                    'Title0': tit, 
                    'Priority': prio,   
                    'Description': desc,  
                    'Comments': comm,  
                    'Issue_x0020_Status': issue,  
                    'Assigned_x0020_To': assign,
                    'Attachments': inputfile_edit
                }),
                headers: {  
                    "accept": "application/json;odata=verbose",  
                    "content-type": "application/json;odata=verbose", 
                    "X-RequestDigest": $("#__REQUESTDIGEST").val(),  
                    "IF-MATCH": "*",  
                    "X-HTTP-Method": "MERGE"  
                },  
                success: function(data) {

                    oLoader = SP.UI.ModalDialog.showWaitScreenWithNoClose("Working on it", "Updating your SharePoint Issue Report...");   
            // swal("Item Updated successfully", "success");  
             // var evtAjax = {
             //    currentCtx: ctx,
             //    csrAjaxRefresh: true
             //  };
             //  // Initiate Ajax Refresh on the list
             //  AJAXRefreshView(evtAjax, SP.UI.DialogResult.OK);
             window.location.assign('https://intranet.houseofit.com.au/Lists/BUGSList/AllItems.aspx');
            //     $('#TABLE_ITEMS').destroy();  

            // $('#TABLE_ITEMS tbody').empty();                   
        },  
        error: function(error) {  
            console.log(JSON.stringify(error));    
        }
    });   
        }); 
    }
}

//     function edit_attachment() {

//          var UId = $('#uuid').val();  

//                 if ($("#input_edit")[0].files.length > 0) {
//                 var file = $("#input_edit")[0].files[0];
//                 getFileBuffer(file).then(function (buffer) {

//                 $.ajax({
 
//                 url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('BUGSList')/items(" + UId + ")/AttachmentFiles/add(FileName='" + file.name + "')",  
//                 method: "POST",                   
//                 data: buffer,
//                 headers: {  
//                     "accept": "application/json;odata=verbose",  
//                     "content-type": "application/json;odata=verbose", 
//                     "X-RequestDigest": $("#__REQUESTDIGEST").val(),
//                     "IF-MATCH": "*",  
//                     "X-HTTP-Method": "MERGE"  
//                 },  
//                 success: function(data) {
//             }
//         });
//     });
// }
// }

function DeleteItemAttachment(item) {   

    $(item).parent().remove(); 
    var Dfd = $.Deferred();  
    var temp_item_id = $(item).attr('data-id')
    var temp_file_title = $(item).attr('data-title')
    var Url = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/GetByTitle('BUGSList')/GetItemById("+temp_item_id+")/AttachmentFiles/getByFileName('"+temp_file_title+"')";  

    $.ajax({  
        url: Url,  
        type: 'DELETE',  
        contentType: 'application/json;odata=verbose',  
        headers: {  
            'X-RequestDigest': $('#__REQUESTDIGEST').val(),  
            'X-HTTP-Method': 'DELETE',  
            'Accept': 'application/json;odata=verbose'  
        },  
        success: function (data) {  
            Dfd.resolve(data);  
        },  
        error: function (error) {  
            Dfd.reject(JSON.stringify(error));  
        }  
    });  
    return Dfd.promise();  
}  

function getAttachment_to_delete(Attachmenturl,dataID) {

 var files ="";

 $.ajax({
     url: Attachmenturl,
     type: "GET",
     headers: { "ACCEPT": "application/json;odata=verbose"},

     success: function (data) {
        
        $.each(data.d.results, function (i, item){
            var title = item.FileName;                           
            files += "<p><a href='#' onClick='DeleteItemAttachment(this)' data-id='"+dataID+"' data-title='"+title+"' class='remove' style='color: red;'> x </a><a href='https://intranet.houseofit.com.au/"+item.ServerRelativeUrl+"'>"+item.FileName+"</a><br></p>"
            
            $('#attach_id_delete').html(files);
            
        })
    },
    error: function () {
     alert("Error getting the Marketplace Items");
 }
});
}

