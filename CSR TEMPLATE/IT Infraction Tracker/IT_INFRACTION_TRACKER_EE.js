$(() => {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var ctxt_Minor = document.getElementById("CHART_MINOR");
  var char_Minor = new Chart(ctxt_Minor, {
    type: "bar",
    data: {
      labels: months,
      datasets: [
        {
          data: [1, 2, 1, 1, 2, 3],
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      legend: { display: false },
      scales: {
        yAxes: [
          {
            ticks: {
              stepSize: 1,
              beginAtZero: true
            }
          }
        ]
      }
    }
  });

  var ctxt_Major = document.getElementById("CHART_MAJOR");
  var chart_Major = new Chart(ctxt_Major, {
    type: "bar",
    data: {
      labels: months,
      datasets: [
        {
          data: [0, 1, 2, 5, 3, 1, 4, 5],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      legend: { display: false },
      scales: {
        yAxes: [
          {
            ticks: {
              stepSize: 1,
              beginAtZero: true
            }
          }
        ]
      }
    }
  });

  var ctxt_OverAll = document.getElementById("CHART_OVERALL");
  var chart_OverAll = new Chart(ctxt_OverAll, {
    type: "bar",
    data: {
      labels: months,
      datasets: [
        {
          data: [0, 1, 2, 1, 3, 1, 2, 3],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      legend: { display: false },
      scales: {
        yAxes: [
          {
            ticks: {
              stepSize: 1,
              beginAtZero: true
            }
          }
        ]
      }
    }
  });

  document.getElementById("INPUT_RCA").innerHTML = `
  <table cellspacing="0" class="ms-rteTable-default" style="width: 100%; height: 301px;" id="TABLE_RCA"> 
   <tbody> 
      <tr class="ms-rteTableHeaderRow-default" style="text-align: center;"> 
         <th class="ms-rteTableHeaderEvenCol-default" rowspan="1" colspan="6" style="width: 1%; text-align: center;"> 
            <span style="color: #191919; text-decoration: none solid #191919;"> 
               <strong style="text-decoration: none solid #191919;">5 Why&#39;s Diagram​ ​ </strong> 
               <span style="text-decoration: none solid #191919;">​ ​</span> ​ ​</span></th> 
      </tr> 
      <tr class="ms-rteTableOddRow-default"> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%; text-align: center;"> 
            <strong>​Measurements</strong></td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%; text-align: center;"> 
            <strong>​Materials</strong></td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%; text-align: center;"> 
            <strong>​Methods</strong></td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%; text-align: center;"> 
            <strong>​Machines</strong></td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%; text-align: center;"> 
            <strong>​Manpower</strong></td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%; text-align: center;"> 
            <strong>​Environment</strong></td> 
      </tr> 
      <tr class="ms-rteTableEvenRow-default"> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​<br/></td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​<br/></td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​<br/></td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​<br/></td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​<br/></td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​<br/></td> 
      </tr> 
      <tr class="ms-rteTableOddRow-default"> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​<br/></td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​<br/></td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
      </tr> 
      <tr class="ms-rteTableEvenRow-default"> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​<br/></td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
      </tr> 
      <tr class="ms-rteTableOddRow-default"> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
      </tr> 
      <tr class="ms-rteTableEvenRow-default"> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​<br/></td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
      </tr> 
      <tr class="ms-rteTableOddRow-default"> 
         <td class="ms-rteTableEvenCol-default" rowspan="1" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" rowspan="1" style="width: 4%;">​<br/></td> 
         <td class="ms-rteTableEvenCol-default" rowspan="1" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" rowspan="1" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" rowspan="1" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" rowspan="1" style="width: 4%;">​</td> 
      </tr> 
      <tr class="ms-rteTableEvenRow-default"> 
         <td class="ms-rteTableEvenCol-default" rowspan="1" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" rowspan="1" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" rowspan="1" style="width: 4%;">​<br/></td> 
         <td class="ms-rteTableOddCol-default" rowspan="1" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" rowspan="1" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" rowspan="1" style="width: 4%;">​</td> 
      </tr> 
      <tr class="ms-rteTableOddRow-default"> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
      </tr> 
      <tr class="ms-rteTableEvenRow-default"> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
      </tr> 
      <tr class="ms-rteTableOddRow-default"> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableEvenCol-default" style="width: 4%;">​</td> 
         <td class="ms-rteTableOddCol-default" style="width: 4%;">​</td> 
      </tr> 
   </tbody>
  </table>
  `;

  get_RCA_TABLE();

  $("#context2 .menu .item").tab({
    // special keyword works same as above
    context: "parent"
  });

  Get_CurrentUser();
  // get_ITEmplyoees();
}); // END OF DOCUMENT READY FUNCTION

// GLOBAL VARIABLES -----------------------------------------
var current_year = new Date().getFullYear();
var SELECTED_ERROR_ID = "";

let CAP_RCA_TABLE_TEMPLATE = "";

function get_RCA_TABLE() {
  CAP_RCA_TABLE_TEMPLATE = document.getElementById("INPUT_RCA").innerHTML;
}

//-----------------------------------------------------------

function ShowModal_Erros() {
  $("#MODAL_ENTRIES")
    .modal({
      closable: false,
      centered: false
    })
    .modal("show");
}

//SHOW / HIDE CAP ---------------------------------------

function ShowHide_CAP(button) {
  SELECTED_ERROR_ID = button.id.split("-").pop();

  var description = document.getElementById(`DESCRIPTION-${SELECTED_ERROR_ID}`)
    .innerHTML;
  document.getElementById("ISSUE_DESCRIPTION").innerHTML = description;

  $("#DIV_CAP").transition("scale");
  $("#DIV_TABLE_ENTRIES").transition("scale");
  document.getElementById("DIV_TABLE_ENTRIES").style.display = "none";
}

function Hide_CAP() {
  $("#DIV_CAP").transition("slide down");
  $("#DIV_TABLE_ENTRIES").transition("scale");
  document.getElementById("DIV_CAP").style.display = "none";
}

// GET CURRENT USER

function Get_CurrentUser() {
  var userid = _spPageContextInfo.userId;
  var requestUri =
    _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";
  var requestHeaders = { accept: "application/json;odata=verbose" };
  $.ajax({
    url: requestUri,
    contentType: "application/json;odata=verbose",
    headers: requestHeaders,
    success: onSuccess,
    error: onError
  });

  function onSuccess(data, request) {
    console.log(data.d.Email);

    Get_All_Errors(data.d.Email);
  }

  function onError(error) {
    alert("error");
  }
}

// GET IT EMPLOYEE FROM IT MEMBERS

function get_ITEmplyoees() {
  $.ajax({
    url:
      _spPageContextInfo.webAbsoluteUrl +
      "/it/_api/Web/Lists/getbytitle('IT Members')/items?$filter=Status eq 'Active'",
    method: "GET",
    headers: {
      Accept: "application/json; odata=verbose"
    },
    success: function(data) {
      const IT_Employees = data.d.results;
      let Array_Employees = [];
      if (IT_Employees) {
        console.log(IT_Employees);
      }
    },
    error: function(error) {
      alert(JSON.stringify(error));
    }
  });
}

function Get_All_Errors(Employee_Email) {
  $.ajax({
    url:
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/Web/Lists/getbytitle('IT Infraction Tracker')/items?$filter=(LI_Email eq '" +
      Employee_Email +
      "')",
    method: "GET",
    headers: {
      Accept: "application/json; odata=verbose"
    },
    success: function(data) {
      let entries = [];
      entries = data.d.results;
      $("#TBODY_TABLE_MINOR").empty();
      $("#TBODY_TABLE_MAJOR").empty();
      if (entries) {
        return entries.map(entry => {
          if (entry.LI_InfractionType === "Minor") {
            $("#TBODY_TABLE_MINOR").append(`
            <tr>
            <td>${entry.LI_EmployeeName}</td>
            <td>${entry.LI_Team}</td>
            <td>${entry.LI_ErrorClassification}</td>
            <td>${entry.LI_TicketNumber}</td>
            <td>${entry.LI_InfractionDescription}</td>
            <td>${entry.LI_InfractionDate}</td>

            </tr>
            `);
          }
          if (entry.LI_InfractionType === "Major") {
            $("#TBODY_TABLE_MAJOR").append(`
            <tr>
            <td>${entry.LI_EmployeeName}</td>
            <td>${entry.LI_Team}</td>
            <td>${entry.LI_TicketNumber}</td>
            <td id="DESCRIPTION-${entry.ID}">${
              entry.LI_InfractionDescription
            }</td>
            <td>${entry.LI_InfractionDate}</td>
            <td >
              <button class="ui basic button" id="CAP-${
                entry.ID
              }" onclick="ShowHide_CAP(this)">
                <i class="icon file alternate outline"></i>
                CAP
              </button>
            </td>
            <td></td> 

            </tr>
            `);
          }
          $(
            ".ui.icon.top.right.pointing.dropdown.blue.basic.button.left.circular"
          ).dropdown({
            action: "hide"
          });
        });
      }
    },
    error: function(error) {
      console.log(JSON.stringify(error));
      swal({
        type: "error",
        title: "Something went wrong!",
        text: "Please contact SharePoint Admin"
      });
    }
  });
}

function handle_Submit_CAP() {
  let CAS = "";
  let RCA = ``;

  RCA = document.getElementById("INPUT_RCA").innerHTML;

  CAS = document.getElementById("INPUT_CORRECTIVE_STEPS").value;

  console.log({ RCA, CAP_RCA_TABLE_TEMPLATE });

  if (RCA == CAP_RCA_TABLE_TEMPLATE) {
    swal({
      type: "error",
      title: "Oops...",
      text: "Root Cause Aanlysis is required!"
    });
  } else if (CAS == "") {
    swal({
      type: "error",
      title: "Oops...",
      text: "Corrective Action Steps is required!"
    });
  } else {
    $("#BUTTON_SUBMIT_CAP").addClass("loading");
    $("#BUTTON_SUBMIT_CAP").addClass("disabled");

    var item = {
      __metadata: { type: "SP.Data.IT_x0020_Infraction_x0020_TrackerListItem" },
      LI_CAP_RCA: RCA,
      LI_CAP_CorrectiveSteps: CAS,
      LI_CAP_Status: "For Approval"
    };
    $.ajax({
      url:
        _spPageContextInfo.webAbsoluteUrl +
        "/_api/web/lists/GetByTitle('IT Infraction Tracker')/items(" +
        SELECTED_ERROR_ID +
        ")",
      method: "POST",
      data: JSON.stringify(item),
      headers: {
        accept: "application/json;odata=verbose",
        "content-type": "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
        "IF-MATCH": "*",
        "X-HTTP-Method": "MERGE"
      },
      success: function(data) {
        swal({
          type: "success",
          title: "Success",
          text: "CAP has been submitted"
        }).then(function() {
          $("#BUTTON_SUBMIT_CAP").removeClass("loading");
          $("#BUTTON_SUBMIT_CAP").removeClass("disabled");
        });
      },
      error: function(error) {
        console.log(JSON.stringify(error));
        swal({
          type: "error",
          title: "Something went wrong!",
          text: "Please contact SharePoint Admin"
        });
      }
    });
  }
}
