var hostweburl;  
var appweburl;  
  

$(document).ready(function () {   

document.getElementById("ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sboxdiv").remove();
document.getElementById("DeltaPlaceHolderPageTitleInTitleArea").style.display = "none";

//getAllLists();

    GetUsers();
    
    
    
});  
  

var DataResult;
function getAllLists() {

    var fullUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists";

    // var fullUrl = _spPageContextInfo.webAbsoluteUrl + "/_api/Web/RoleAssignments";
    
    $.ajax({

        url: fullUrl,

        type: "GET",

        headers: {

            "accept": "application/json;odata=verbose",

            "content-type": "application/json;odata=verbose",

        },

//        success: onQuerySucceeded,
        
        success: function (data){
            DataResult = data.d.results;
            for (i = 0;i<DataResult.length;i++){
//                console.log(DataResult[i].Title);
                console.log(DataResult[i]);
            }
        },
        error: onQueryFailed
    });
}


function onQueryFailed() {

    alert('Error!');

}



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function GetUsers(){
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/SiteUsers",
        type: "GET",
        headers: { "accept": "application/json;odata=verbose" },
        
        success: (function (data, textStatus, jqXHR) {
//            console.log(data.d.Title + " : " + data.d.Created);
            var listItemInfo = "";
            $.each(data.d.results, function (key, value) {
                listItemInfo += "<strong>Title: </strong>" + value.Title + " <strong>Description: </strong>" + value.Email + "<br />";
                console.log(value.Title);
            });
//            console.log(listItemInfo);
            
            
//            console.log(data.d.results);

        }),
        error: (function (xhr, ajaxOptions, thrownError) {
            alert('Request failed: ' + xhr.status + '\n' + thrownError + '\n' + xhr.responseText);
        })
    });
}