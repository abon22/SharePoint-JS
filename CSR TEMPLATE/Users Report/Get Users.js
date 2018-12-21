 
var hostweburl;  
var appweburl;  
// Get the URLs for the app web the host web URL from the query string.  
$(document).ready(function()   
{  
    console.log("test");
    //Get the URI decoded URLs.  
    hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));  
    appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));  
    // Resources are in URLs in the form:  
    // web_url/_layouts/15/resource  
    // Load the js file and continue to load the page with information about the folders.  
    // SP.RequestExecutor.js to make cross-domain requests  
    $.getScript(hostweburl + "/_layouts/15/SP.RequestExecutor.js", getuser);  
});  
function getuser()   
{  
    var executor;  
    var userEmail = "gowthamdev@Gauti.onmicrosoft.com";  
    // Initialize the RequestExecutor with the app web URL.  
    executor = new SP.RequestExecutor(appweburl);  
    executor.executeAsync({  
        url: appweburl + "/_api/SP.AppContextSite(@target)/web/sitegroups(6)/users?@target='" + hostweburl + "'",  
        method: "GET",  
        headers: {  
            "Accept": "application/json; odata=verbose"  
        },  
        success: getUsersFromGroupSuccess,  
        error: getUsersFromGroupError  
    });  
}  
//Populate the selectUsers control after retrieving all of the users from group.  
function getUsersFromGroupSuccess(data)   
{  
    var jsonObject = JSON.parse(data.body);  
    var RetriveUsers = document.getElementById("RetriveUsers");  
    if (RetriveUsers.hasChildNodes())   
    {  
        while (RetriveUsers.childNodes.length >= 1)  
        {  
            RetriveUsers.removeChild(RetriveUsers.firstChild);  
        }  
    }  
    var results = jsonObject.d.results;  
    for (var i = 0; i < results.length; i++)   
    {  
        var selectOption = document.createElement("option");  
        selectOption.value = results[i].LoginName;  
        selectOption.innerText = results[i].LoginName;  
        RetriveUsers.appendChild(selectOption);  
    }  
}  
function getUsersFromGroupError(data, errorCode, errorMessage)   
{  
    alert("Could not get users from group: " + errorMessage);  
}  
//Utilities  
// Retrieve a query string value.  
// For production purposes you may want to use a library to handle the query string.  
function getQueryStringParameter(paramToRetrieve)   
{  
    var params = document.URL.split("?")[1].split("&");  
    for (var i = 0; i < params.length; i = i + 1)   
    {  
        var singleParam = params[i].split("=");  
        if (singleParam[0] == paramToRetrieve) return singleParam[1];  
    }  
}  