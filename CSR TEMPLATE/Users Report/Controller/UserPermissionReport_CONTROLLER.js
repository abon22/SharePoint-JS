
$(document).ready(function() {
document.getElementById("ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sboxdiv").remove();
document.getElementById("DeltaPlaceHolderPageTitleInTitleArea").style.display = "none";

}); //---------------------------------------END OF DOCUMENT READY FUNCTION----------------------------------------------------------


var appVar = angular.module('listApp', []); 

appVar.controller("Users_Controller", function($scope){    
    GetListItems($scope, "List1");    
});    
function GetListItems($scope, listName){    
    $.ajax({    
        url: "/_api/web/SiteUsers",    
        // url: "/_api/web/SiteUsers?$filter=PrincipalType eq 1",   
        method: "GET",    
        async: false,    
        headers: { "Accept": "application/json;odata=verbose" },    
        success: function(data){    
            $scope.items = data.d.results;  
            console.log($scope.items);  
        },    
        error: function(sender,args){    
            console.log(args.get_message());    
        }    
    });    
}