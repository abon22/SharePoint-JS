﻿
<script type="text/javascript" src="/SiteAssets/Scripts/js/jquery.min.js"></script>
<script src="/SiteAssets/Scripts/spjs-utility.js"></script>
<script  type="text/javascript">

//SiteAssets/Scripts/New Hire Setup/new_hire_setup.js



//------------------------------------

// List GUID or list display name of the current list
var thisListGuid = '{255B2631-D0A6-4356-9DF9-D7C8A3C438E9}';


/********************************************
  Do not modify anything below this line
*********************************************/
function getLastItemID(){ 
  var queryBuffer = [];
    queryBuffer.push("<Where><Eq><FieldRef Name='Author' LookupId='TRUE' /><Value Type='User'>"+_spPageContextInfo.userId+"</Value></Eq></Where>");
    // queryBuffer.push("<Where><Eq><FieldRef Name='Immediate_x0020_Head' LookupId='TRUE' /><Value Type='User'>"+_spPageContextInfo.userId+"</Value></Eq></Where>");
    queryBuffer.push("<OrderBy><FieldRef Name='ID' Ascending='FALSE' /></OrderBy>");
  var res = spjs_QueryItems({listName:thisListGuid,query:queryBuffer.join(''),viewFields:['ID'],rowLimit:1});
  
  if(res.count<0){
    alert("An error occurred. Most likely the parameter \"thisListGuid\" is wrong.");
  }else if(res.count>0){
    return res.items[0].ID;
  }else{
    return '';
  }
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return ;
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function are_cookies_enabled()
{
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled)
    { 
        document.cookie="testcookie";
        cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
    }
    return (cookieEnabled);
}


function sendEmail(from, to, cc, body, subject) {
    //Get the relative url of the site
    //_spPageContextInfo.webAbsoluteUrl
    var siteurl = _spPageContextInfo.webAbsoluteUrl;

    //var appweburl = decodeURIComponent(getQueryStringParameter('SPAppWebUrl'));
    var urlTemplate = siteurl + "/_api/SP.Utilities.Utility.SendEmail";
    $.ajax({
        contentType: 'application/json',
        url: urlTemplate,
        type: "POST",
        data: JSON.stringify({
            'properties': {
                '__metadata': {
                    'type': 'SP.Utilities.EmailProperties'
                },
                'From': from,
                'To': {
                    'results': to
                },
                'CC': { 
                    'results': cc 
                },
                'Body': body,
                'Subject': subject
            }
        }),
        headers: {
            "Accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "X-RequestDigest": jQuery("#__REQUESTDIGEST").val()
        },
        success: function(data) {
          console.log("succesfully send")
            setCookie("it_request_send_to_support", "done", 30)

            // document.getElementById("message_success_id").innerHTML = "<div class='ui positive compact message'><div class='header'><i class='check circle icon'></i>Email Successfully Sent! </div><p>Email has been sent to <b>support@houseofit.com.au.</b></p></div>"
            // setTimeout(function(){ 
            //     $('.message')
            //       .closest('.message')
            //       .transition('fade')
            //     ;
            //  }, 3000);
            $('#loader_show_hide').hide();

        },
        error: function(err) {
            console.log(JSON.stringify(err));
            alert(JSON.stringify(err));
        }
    });
}


function getItems(lastID) {


  if(lastID==""){
      lastID=0;
  }else{
      lastID = lastID;
  }


  console.log("lastID:"+lastID);

var urlForAllItems = "/_api/Web/Lists/GetByTitle('IT Request (Hardware/Software/Issue Report)')/Items?$select=Requestor_x0027_s_x0020_Name, Department, Request_x0020_Type, Reporting_x0020_Own_x0020_Issue_, Issue_x0020_Description, Department_x0020_Head_x0020_Appr, Author/EMail, Author/Name, Author/Title, Immediate_x0020_Head/Title, Date_x0020_Needed, Software_x0020_Description, Hardware_x0020_Description, Purpose, Specific_x0020_Employee/Title &$expand=Author,Immediate_x0020_Head,Specific_x0020_Employee &$OrderBy=ID asc&$filter=ID eq "+lastID+"&$top=1";

    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + urlForAllItems,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {

        dataRes = data.d.results;
        console.log(dataRes);

        if(dataRes.length >0){

          for (a=0; a< dataRes.length; a++) {
          //var db_year = moment(dataRes[a].Date).format("YYYY");
          //var employee_name = dataRes[a].Department_x002f_Section;
          //console.log(employee_name);

          var created_by_email = dataRes[a].Author.EMail;
          var created_by_title = dataRes[a].Author.Title;
          var dept_head_title = dataRes[a].Immediate_x0020_Head.Title;
          var Requestor_x0027_s_x0020_Name = dataRes[a].Requestor_x0027_s_x0020_Name;
          var Department = dataRes[a].Department;
          var Request_x0020_Type = dataRes[a].Request_x0020_Type;
          var Reporting_x0020_Own_x0020_Issue_ = dataRes[a].Reporting_x0020_Own_x0020_Issue_;
          var Issue_x0020_Description = dataRes[a].Issue_x0020_Description;
          var Department_x0020_Head_x0020_Appr = dataRes[a].Department_x0020_Head_x0020_Appr;
          
          var Software_x0020_Description = dataRes[a].Software_x0020_Description;
          var Hardware_x0020_Description = dataRes[a].Hardware_x0020_Description;
          var Purpose = dataRes[a].Purpose;
          var Specific_x0020_Employee = dataRes[a].Specific_x0020_Employee.Title;


          var Date_x0020_Needed_temp = new Date(dataRes[a].Date_x0020_Needed);
          var Date_x0020_Needed = Date_x0020_Needed_temp.toDateString();




          
          //console.log(name_of_new_hire);

       /*   var to = ["support@houseofit.com.au", "aivelj@houseofit.com.au", "angelinej@houseofit.com.au", "CindyO@houseofit.com.au", "elizabethd@houseofit.com.au", "geraldc@houseofit.com.au", "gweny@houseofit.com.au", "jaharal@houseofit.com.au", "joshm@houseofit.com.au", "judya@houseofit.com.au", "JulietoA@houseofit.com.au", "kristinaa@houseofit.com.au", "leahm@houseofit.com.au", "maria.v@houseofit.com.au", "maryjoya@houseofit.com.au", "maryrosem@houseofit.com.au", "mattm@houseofit.com.au", "michael.lao@houseofit.com.au", "rachelleq@houseofit.com.au", "scotto@houseofit.com.au"]; // real email*/

           //var to = ["support@houseofit.com.au"]; // real email

          var to = ["support@houseofit.com.au"]; // real email support
          var cc = ["litoa@houseofit.com.au"]; // real email

          var from = created_by_email;
          var subject="";
          var body="";

          // var subject = ``;
          // var body = `<html><body>
          //           <p>Hi IT Technicians,</p>
          //           <p>Good day.</p>
          //           <p>A new Issue Report has been submitted</p>
          //           <p>Please see request details below:</p>
          //           <p><b>Employee:</b> </p>
          //           <p>In behalf of,</p>
          //           <p><b>Sharepoint Team</b></p>
          //           </body></html>`;


          if(Request_x0020_Type == "Software" && Department_x0020_Head_x0020_Appr == "Approved"){
            subject = `Software Request (${created_by_title})`;
            body = `<html><body>
                    <p>Hi IT Technicians,</p>
                    <p>Good day.</p>
                    <p>A Software Request has been submitted in SharePoint</p>
                    <p>Please see request details below:</p>
                    <p><b>Requestor:</b> ${created_by_title} </p>
                    <p><b>Date Needed:</b> ${Date_x0020_Needed} </p>
                    <p><b>Software Description:</b> ${Software_x0020_Description} </p>
                    <p><b>Purpose:</b> ${Purpose} </p>
                    <p><b>Approved By:</b> ${dept_head_title} </p>
                    <p>In behalf of,</p>
                    <p><b>Sharepoint Team</b></p>
                    </body></html>`;

                    sendEmail(from, to, cc, body, subject);

          }else if(Request_x0020_Type == "Hardware"  && Department_x0020_Head_x0020_Appr == "Approved"){
            subject = `Hardware Request (${created_by_title})`;
            body = `<html><body>
                    <p>Hi IT Technicians,</p>
                    <p>Good day.</p>
                    <p>A Hardware Request has been submitted in SharePoint</p>
                    <p>Please see request details below:</p>
                    <p><b>Requestor:</b> ${created_by_title} </p>
                    <p><b>Date Needed:</b> ${Date_x0020_Needed} </p>
                    <p><b>Hardware Description:</b> ${Hardware_x0020_Description} </p>
                    <p><b>Purpose:</b> ${Purpose} </p>
                    <p><b>Approved By:</b> ${dept_head_title} </p>
                    <p>In behalf of,</p>
                    <p><b>Sharepoint Team</b></p>
                    </body></html>`;
                    sendEmail(from, to, cc, body, subject);

          }else if(Request_x0020_Type == "Issue Report"){
            subject = `Issue Report (${Issue_x0020_Description})`;

            if(Reporting_x0020_Own_x0020_Issue_ == "Own Issue"){
              body = `<html><body>
                    <p>Hi IT Technicians,</p>
                    <p>Good day.</p>
                    <p>A new Issue Report has been submitted</p>
                    <p>Please see request details below:</p>
                    <p><b>Employee:</b> ${created_by_title}</p>
                    <p><b>Issue Description:</b> ${Issue_x0020_Description} </p>
                    <p>In behalf of,</p>
                    <p><b>Sharepoint Team</b></p>
                    </body></html>`;
                    sendEmail(from, to, cc, body, subject);

            }else if(Reporting_x0020_Own_x0020_Issue_ == "For Another Employee"){
              body = `<html><body>
                    <p>Hi IT Technicians,</p>
                    <p>Good day.</p>
                    <p>A new Issue Report has been submitted</p>
                    <p>Please see request details below:</p>
                    <p><b>Employee:</b> ${Specific_x0020_Employee}</p>
                    <p><b>Issue Description:</b> ${Issue_x0020_Description} </p>
                    <p>In behalf of,</p>
                    <p><b>Sharepoint Team</b></p>
                    </body></html>`;
                    sendEmail(from, to, cc, body, subject);

            }

          }else{
            $('#loader_show_hide').hide();

          }



          

        }

        }else{
           $('#loader_show_hide').hide();
        }

        
        

        },//end sucesss
        error: function (error) {
            
            alert(JSON.stringify(error));

            RequestEnded();
        }
    });//end ajax request
}//end function



$(document).ready(function () {
/*var to = ["support@houseofit.com.au"];
var from = "sptest@houseofit.com.au";

  sendEmail(from, to, "body", "subject");*/
$('#loader_show_hide').show();

    var cookie_enabled = are_cookies_enabled();
    if(cookie_enabled!=true){
        alert("Please enable cookie in the browsers setting or contact administrator.")
    }

var send_to_supoort_cookie=getCookie("it_request_send_to_support");
var it_request_id=getCookie("it_request_id");

console.log("cookie_me: "+send_to_supoort_cookie);
     var lastID = 0;

    if(send_to_supoort_cookie == ""){
        if (it_request_id>=1){
            lastID = it_request_id;;
        }else{
            lastID = getLastItemID();
        }
      
       

        getItems(lastID);
        console.log("sending email");
        
    }else if(typeof send_to_supoort_cookie === 'undefined'){
      console.log("undefined");
      $('#loader_show_hide').hide();
    }else{
      //var lastID = getLastItemID();
      //getItems(18);
        console.log("done sending email");
        $('#loader_show_hide').hide();
        //setCookie("query_id", "", 30);
    }  


});


</script>

<style>

.loading {
  max-width: 50%;
  line-height: 1.4;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.loading__author {
  font-weight: normal;
  font-size: 0.9rem;
  color: #bdbdbd;
  margin: 0.6rem 0 2rem 0;
  display: block;
}

.loading__anim {
  width: 35px;
  height: 35px;
  display: inline-block;
  border: 5px solid rgba(189, 189, 189, 0.25);
  border-left-color: #039be5;
  border-top-color: #039be5;
  border-radius: 50%;
  animation: rotate 600ms infinite linear;
}

@keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}
</style>

    <div id="loader_show_hide" style="display:none">
      <div id="loader" style="display:table; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 10000; background: #fff; opacity: 0.8;"><div style="display:table-cell; vertical-align:middle; text-align: center;">
<span class="loading__anim"></span><br><h2>Loading</h2></div></div></div>
