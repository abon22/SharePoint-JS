$(() => {
  $(".ui.selection.dropdown").dropdown();

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

  $("#context2 .menu .item").tab({
    // special keyword works same as above
    context: "parent"
  });

  // INITIALIZE UI CALENDAR
  $(".ui.calendar.DATE.INFRACTION_DATE").calendar({
    type: "date",
    onChange: function(date) {
      var months = [
        "January",
        "Feburary",
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
      if (!date) return "";
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      state.formData.INFRACTION_DATE = month + "/" + day + "/" + year;
      state.formData.INRFACTION_MONTH = months[date.getMonth()];
      state.formData.INFRACTION_YEAR = year;

      if (date) {
        $($(this).children()).removeClass("error");
      } else {
        $($(this).children()).addClass("error");
      }
    },
    popupOptions: {
      observeChanges: false
    },
    formatter: {
      date: function(date) {
        if (!date) return "";
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return month + "/" + day + "/" + year;
      }
    }
  });

  // FORM DROPDOWN FIELDS ON CHANGE

  $(".ui.selection.dropdown.fluid.FORM_FIELD").dropdown({
    onChange: function(value, text, choice) {
      if (choice) {
        // console.log(`${choice[0].getAttribute("name")} ---> ${value}`);
        $(`#INPUT_${choice[0].getAttribute("name")}`).removeClass("error");
        var propName = choice[0].getAttribute("name");
        console.log(`${propName} -- > ${value}`);
        state.formData[propName] = value;
        if (choice[0].getAttribute("name") === "INFRACTION_TYPE") {
          if (value === "Minor") {
            state.formData.INFRACTION_POINTS = "1";
          } else if (value === "Major") {
            state.formData.INFRACTION_POINTS = "2";
          }
        } else if (choice[0].getAttribute("name") === "NAME") {
          state.formData.EMAIL = choice[0].getAttribute("data-email");
          state.formData.EMPLOYEE_ID = choice[0].getAttribute(
            "data-employee_id"
          );
        }
      }
    }
  });

  $(".coupled.modal").modal({
    allowMultiple: true
  });

  // FETCH DATA FUNCTIONS
  get_ITEmplyoees();
  get_Entries();

  // LOAD CHARTS
}); // END OF DOCUMENT READY FUNCTION

// GLOBAL STATE --------------------------------------------------------------
//----------------------------------------------------------------------------
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

var CHART_MINOR;
var CHART_MAJOR, CHART_CURRENT_MONTH, CHART_YEARLY;

var state = {
  isFormOpen: false,
  isCAP_Open: false,
  submitMode: "Add",
  IT_Employees: [],
  entries: {},
  submissionErrors: [],
  selected_EntryID: "0",
  current_month: months[new Date().getMonth()],
  current_year: new Date().getFullYear(),
  formData: {
    NAME: "",
    EMPLOYEE_ID: "",
    EMAIL: "",
    TEAM: "",
    INFRACTION_TYPE: "",
    ERROR_CLASSIFICATION: "",
    INFRACTION_POINTS: "",
    TICKET_NUMBER: "",
    INFRACTION_DATE: "",
    INRFACTION_MONTH: "",
    INFRACTION_YEAR: "",
    INFRACTION_DESCRIPTION: "",
    CAP_RCA: "",
    CAP_STEPS: "",
    CAP_STATUS: ""
  }
};

// SHOW/HIDE MODALS ---------------------------------------------------------
function ShowModal_ENTRIES() {
  $(".ui.fullscreen.modal.ENTRIES")
    .modal({
      closable: false,
      allowMultiple: true,
      centered: false,
      onHide: function() {
        if (state.isFormOpen) {
          ShowHide_EntryForm();
        }
        if (state.isCAP_Open) {
          Hide_CAP();
        }
      }
    })
    .modal("show");
}

// function Show_Modal_CAP() {
//   $("#MODAL_CAP")
//     .modal({
//       closable: false,
//       centered: false
//     })
//     .modal("show");
// }

// SHOW/HIDE ENTRY FORM

function ShowHide_EntryForm() {
  if (!state.isFormOpen) {
    $("#DIV_ENTRY_FORM").transition("scale");
    $("#DIV_TABLE_ENTRIES").transition("scale");
    document.getElementById("DIV_TABLE_ENTRIES").style.display = "none";
    state.isFormOpen = true;
  } else {
    $("#DIV_ENTRY_FORM").transition("slide down");
    $("#DIV_TABLE_ENTRIES").transition("scale");
    document.getElementById("DIV_ENTRY_FORM").style.display = "none";
    state.isFormOpen = false;
    resetFormFields();
  }
}

//SHOW / HIDE CAP

function ShowHide_CAP(button) {
  console.log(button.id);

  SELECTED_ERROR_ID = button.id.split("-").pop();

  var description = document.getElementById(`DESCRIPTION-${SELECTED_ERROR_ID}`)
    .innerHTML;

  var rca = document.getElementById(`RETRIEVED_RCA-${SELECTED_ERROR_ID}`)
    .innerHTML;

  var cas = document.getElementById(`RETRIEVED_CAS-${SELECTED_ERROR_ID}`)
    .innerHTML;

  document.getElementById("ISSUE_DESCRIPTION").innerHTML = description;

  document.getElementById("CAP_RCA").innerHTML = rca;

  document.getElementById("CAP_CAS").innerHTML = cas;

  $("#DIV_CAP").transition("scale");
  $("#DIV_TABLE_ENTRIES").transition("scale");
  document.getElementById("DIV_TABLE_ENTRIES").style.display = "none";
  state.isCAP_Open = true;
}

function Hide_CAP() {
  $("#DIV_CAP").transition("slide down");
  $("#DIV_TABLE_ENTRIES").transition("scale");
  document.getElementById("DIV_CAP").style.display = "none";
  state.isCAP_Open = false;
}

// LOAD INPUT VALUES TO THE GLOBAL STATE

function handleOnChange(e) {
  state.formData[e.target.name] = e.target.value;

  if (e.target.value) {
    $(
      "#" +
        $(e.target)
          .parent()
          .attr("id")
    ).removeClass("error");
  }
}

// FETCH DATA FUNCTIONS ---------------------------------------------------

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
      if (!!IT_Employees) {
        state.IT_Employees = IT_Employees;

        IT_Employees.map(employee => {
          Array_Employees.push(employee.Title);
        });

        Get_Minor_Errors();

        var ctx2 = document.getElementById("CHART_MAJOR");
        var myChart = new Chart(ctx2, {
          type: "horizontalBar",
          data: {
            labels: Array_Employees,
            datasets: [
              {
                label: "# of Votes",
                data: [1, 2, 3, 4, 5],
                backgroundColor: "#C34A36"
              }
            ]
          },
          options: {
            legend: { display: false },
            scales: {
              xAxes: [
                {
                  ticks: {
                    stepSize: 1,
                    beginAtZero: true,
                    max: 3,
                    fontSize: 20
                  }
                }
              ]
            }
          }
        });

        return IT_Employees.map(employee => {
          $("#DROPDOWN_IT_EMPLOYEES").append(
            `<div class="item" name="NAME" data-email="${
              employee.Email
            }" data-employee_id="${employee.Employee_ID}" data-value="${
              employee.Title
            }" >${employee.Title}</div>`
          );
        });
      }
    },
    error: function(error) {
      alert(JSON.stringify(error));
    }
  });
}

function validateEntryForm() {
  let errorCount = [];

  $.each(state.formData, function(key, value) {
    if (
      key !== "CAP_RCA" &&
      key !== "CAP_STEPS" &&
      key !== "CAP_STATUS" &&
      key !== "EMAIL" &&
      key !== "EMPLOYEE_ID"
    ) {
      if (value === "") {
        $(`#INPUT_${key}`).addClass("error");
        errorCount.push(`INPUT_${key}`);
      }
    }
  });

  if (errorCount.length !== 0) {
    return false;
  } else {
    return true;
  }
}

function resetFormFields() {
  $(".ui.search.selection.dropdown").dropdown("restore defaults");
  $(".FORM_FIELD").val("");

  state.formData = {
    NAME: "",
    EMPLOYEE_ID: "",
    EMAIL: "",
    TEAM: "",
    INFRACTION_TYPE: "",
    ERROR_CLASSIFICATION: "",
    INFRACTION_POINTS: "",
    TICKET_NUMBER: "",
    INFRACTION_DATE: "",
    INRFACTION_MONTH: "",
    INFRACTION_YEAR: "",
    INFRACTION_DESCRIPTION: "",
    CAP_RCA: "",
    CAP_STEPS: "",
    CAP_STATUS: ""
  };

  $.each(state.formData, function(key, value) {
    $(`#INPUT_${key}`).removeClass("error");
  });
}

function handle_AddNewEntry_Clicked() {
  state.submitMode = "Add";
  ShowHide_EntryForm();
}

function handleSubmit() {
  console.log(state.formData);
  if (!validateEntryForm()) {
    swal({
      type: "error",
      title: "Oops...",
      text: "Please fill all the required fields"
    });
  } else {
    $("#BUTTON_SUBMIT_ENTRY").addClass("loading");
    $("#BUTTON_SUBMIT_ENTRY").addClass("disabled");
    if (state.submitMode === "Add") {
      if (state.formData.INFRACTION_TYPE === "Major") {
        state.formData.CAP_STATUS = "In Progress";
      }
      Add_Entry();
    } else if (state.submitMode === "Edit") {
      Edit_Entry();
    }
  }
}

// ENTRY OPERATIONS

function Add_Entry() {
  var item = {
    __metadata: { type: "SP.Data.IT_x0020_Infraction_x0020_TrackerListItem" },
    LI_EmployeeName: state.formData.NAME,
    LI_Email: state.formData.EMAIL,
    LI_EmployeeID: state.formData.EMPLOYEE_ID,
    LI_TicketNumber: state.formData.TICKET_NUMBER,
    LI_InfractionType: state.formData.INFRACTION_TYPE,
    LI_InfractionDate: state.formData.INFRACTION_DATE,
    LI_InfractionMonth: state.formData.INRFACTION_MONTH,
    LI_InfractionYear: String(state.formData.INFRACTION_YEAR),
    LI_InfractionDescription: state.formData.INFRACTION_DESCRIPTION,
    LI_InfractionPoints: state.formData.INFRACTION_POINTS,
    LI_Team: state.formData.TEAM,
    LI_ErrorClassification: state.formData.ERROR_CLASSIFICATION,
    LI_CAP_Status: state.formData.CAP_STATUS
  };
  $.ajax({
    url:
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/web/lists/getbytitle('IT Infraction Tracker')/items",
    type: "POST",
    contentType: "application/json;odata=verbose",
    data: JSON.stringify(item),
    headers: {
      Accept: "application/json;odata=verbose",
      "X-RequestDigest": $("#__REQUESTDIGEST").val()
    },
    success: function(data) {
      resetFormFields();
      get_Entries();
      ShowHide_EntryForm();

      // RELOAD CHARTS
      CHART_MINOR.destroy();
      Get_Minor_Errors();

      swal({
        type: "success",
        title: "Success",
        text: "Entry has been added"
      }).then(function() {
        $("#BUTTON_SUBMIT_ENTRY").removeClass("loading");
        $("#BUTTON_SUBMIT_ENTRY").removeClass("disabled");
      });
    },
    error: function(error) {
      console.log(JSON.stringify(error));
      console.log(state.formData);
      swal({
        type: "error",
        title: "Something went wrong!",
        text: "Please refresh the page and try again"
      });
    }
  });
}

function handle_EntryAction(e) {
  const retrievedID = e.target.id;
  const actionClicked = retrievedID.split("-")[0];
  const EntryID = retrievedID.split(`${actionClicked}-`).pop();

  state.selected_EntryID = EntryID;
  if (actionClicked === "EDIT_ENTRY") {
    state.submitMode = "Edit";

    state.formData.NAME = state.entries[EntryID].LI_EmployeeName;
    state.formData.EMAIL = state.entries[EntryID].LI_Email;
    state.formData.EMPLOYEE_ID = state.entries[EntryID].LI_EmployeeID;
    state.formData.TEAM = state.entries[EntryID].LI_Team;
    state.formData.INFRACTION_TYPE = state.entries[EntryID].LI_InfractionType;
    state.formData.ERROR_CLASSIFICATION =
      state.entries[EntryID].LI_ErrorClassification;
    state.formData.INFRACTION_POINTS =
      state.entries[EntryID].LI_InfractionPoints;
    state.formData.TICKET_NUMBER = state.entries[EntryID].LI_TicketNumber;
    state.formData.INFRACTION_DATE = state.entries[EntryID].LI_InfractionDate;
    state.formData.INRFACTION_MONTH = state.entries[EntryID].LI_InfractionMonth;
    state.formData.INFRACTION_YEAR = state.entries[EntryID].LI_InfractionYear;
    state.formData.INFRACTION_DESCRIPTION =
      state.entries[EntryID].LI_InfractionDescription;

    $("#INPUT_NAME").dropdown(
      "set selected",
      state.entries[EntryID].LI_EmployeeName
    );
    $("#INPUT_TEAM").dropdown("set selected", state.entries[EntryID].LI_Team);
    $("#INPUT_INFRACTION_TYPE").dropdown(
      "set selected",
      state.entries[EntryID].LI_InfractionType
    );

    $("#INPUT_ERROR_CLASSIFICATION").dropdown(
      "set selected",
      state.entries[EntryID].LI_ErrorClassification
    );

    $("#CALENDAR_DATE").calendar(
      "set date",
      state.entries[EntryID].LI_InfractionDate
    );

    document.getElementById("TXT_TICKET_NUMBER").value =
      state.entries[EntryID].LI_TicketNumber;

    document.getElementById("TXT_INFRACTION_DESCRIPTION").value =
      state.entries[EntryID].LI_InfractionDescription;

    ShowHide_EntryForm();
  } else if (actionClicked === "DELETE_ENTRY") {
    Delete_Entry();
  }
}

function Edit_Entry() {
  var item = {
    __metadata: { type: "SP.Data.IT_x0020_Infraction_x0020_TrackerListItem" },
    LI_EmployeeName: state.formData.NAME,
    LI_Email: state.formData.EMAIL,
    LI_EmployeeID: state.formData.EMPLOYEE_ID,
    LI_TicketNumber: state.formData.TICKET_NUMBER,
    LI_InfractionType: state.formData.INFRACTION_TYPE,
    LI_InfractionDate: state.formData.INFRACTION_DATE,
    LI_InfractionMonth: state.formData.INRFACTION_MONTH,
    LI_InfractionYear: String(state.formData.INFRACTION_YEAR),
    LI_InfractionDescription: state.formData.INFRACTION_DESCRIPTION,
    LI_InfractionPoints: state.formData.INFRACTION_POINTS,
    LI_Team: state.formData.TEAM,
    LI_ErrorClassification: state.formData.ERROR_CLASSIFICATION
  };
  $.ajax({
    url:
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/web/lists/GetByTitle('IT Infraction Tracker')/items(" +
      state.selected_EntryID +
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
      ShowHide_EntryForm();
      resetFormFields();
      get_Entries();

      // RELOAD CHARTS
      CHART_MINOR.destroy();
      Get_Minor_Errors();

      swal({
        type: "success",
        title: "Success",
        text: "Entry has been updated"
      }).then(function() {
        $("#BUTTON_SUBMIT_ENTRY").removeClass("loading");
        $("#BUTTON_SUBMIT_ENTRY").removeClass("disabled");
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

function Delete_Entry() {
  swal({
    title: "Remove Entry?",
    text: "Entry will be removed from the list",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#1678c2",
    cancelButtonColor: "#f26202",
    confirmButtonText: "Yes, remove it!"
  }).then(result => {
    $.ajax({
      url:
        _spPageContextInfo.webAbsoluteUrl +
        "/_api/web/lists/getbytitle('IT Infraction Tracker')/items(" +
        state.selected_EntryID +
        ")",
      type: "POST",
      contentType: "application/json;odata=verbose",
      headers: {
        Accept: "application/json;odata=verbose",
        "X-RequestDigest": $("#__REQUESTDIGEST").val(),
        "IF-MATCH": "*",
        "X-HTTP-Method": "DELETE"
      },
      success: () => {
        resetFormFields();
        get_Entries();

        // RELOAD CHARTS
        CHART_MINOR.destroy();
        Get_Minor_Errors();

        swal({
          type: "success",
          title: "Entry has been deleted",
          text: "Entry has been added"
        });
      },
      error: () => {
        console.log("error");
      }
    });
  });
}

function get_Entries() {
  $.ajax({
    url:
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/Web/Lists/getbytitle('IT Infraction Tracker')/items",
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
          state.entries[entry.ID] = entry;
          if (entry.LI_InfractionType === "Minor") {
            $("#TBODY_TABLE_MINOR").append(`
            <tr>
            <td>${entry.LI_EmployeeName}</td>
            <td>${entry.LI_Team}</td>
            <td>${entry.LI_ErrorClassification}</td>
            <td>${entry.LI_TicketNumber}</td>
            <td>${entry.LI_InfractionDescription}</td>
            <td>${entry.LI_InfractionDate}</td>
            <td>
            <div class="ui icon top right pointing dropdown blue basic button left circular">
              <i class="icon settings "></i>
              <div class="menu">
              <a class="item" id=EDIT_ENTRY-${
                entry.ID
              } onclick="handle_EntryAction(event)"><i class="edit icon"></i> Edit</a>
              <a class="item" id=DELETE_ENTRY-${
                entry.ID
              } onclick="handle_EntryAction(event)"><i class="delete icon"></i> Remove</a>
              </div>
              </div>
            </td>
            </tr>
            `);
          }
          if (entry.LI_InfractionType === "Major") {
            var CAP_STATUS_COLOR = "";

            switch (entry.LI_CAP_Status) {
              case "In Progress":
                CAP_STATUS_COLOR = "yellow";
                break;
              case "For Approval":
                CAP_STATUS_COLOR = "blue";
                break;
              case "Rejected":
                CAP_STATUS_COLOR = "red";
                break;
              case "Approved":
                CAP_STATUS_COLOR = "green";
                break;
              default:
                break;
            }

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
            <td>
            <label class="ui ${CAP_STATUS_COLOR} label">${
              entry.LI_CAP_Status
            }</label>
            </td>
            <td>
            <div class="ui icon top right pointing dropdown blue basic button left circular">
              <i class="icon settings "></i>
              <div class="menu">
              <a class="item" id="EDIT_ENTRY-${
                entry.ID
              }" onclick="handle_EntryAction(event)"><i class="edit icon"></i> Edit</a>
              <a class="item" id="DELETE_ENTRY-${
                entry.ID
              }" onclick="handle_EntryAction(event)"><i class="delete icon"></i> Remove</a>
              </div>
              </div>
            </td>
            <td id="RETRIEVED_RCA-${entry.ID}" style="display:none">
              ${entry.LI_CAP_RCA}
            </td>
            <td id="RETRIEVED_CAS-${entry.ID}"style="display:none">
              ${entry.LI_CAP_CorrectiveSteps}
            </td>
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

// GET ERRORS

function Get_Minor_Errors() {
  $.ajax({
    url:
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/Web/Lists/getbytitle('IT Infraction Tracker')/items?$filter=(LI_InfractionType eq 'Minor') and (LI_InfractionMonth eq '" +
      state.current_month +
      "') and (LI_InfractionYear eq '" +
      state.current_year +
      "')",
    method: "GET",
    headers: {
      Accept: "application/json; odata=verbose"
    },
    success: function(data) {
      let errors = [];
      errors = data.d.results;

      let error_points = {};
      let Array_Names = [];
      let Array_ErrorPoints = [];

      $.each(state.IT_Employees, function(key, value) {
        error_points[value.Employee_ID] = value.Title + "---0";
      });

      $.each(errors, function(key, value) {
        error_points[value.LI_EmployeeID] =
          value.LI_EmployeeName +
          "---" +
          String(
            parseInt(error_points[value.LI_EmployeeID].split("---").pop()) +
              parseInt(value.LI_InfractionPoints)
          );
      });

      $.each(error_points, function(key, value) {
        Array_Names.push(value.split("---")[0]);
        Array_ErrorPoints.push(value.split("---")[1]);
      });

      var bar_color = [];
      var bar_border = [];

      for (i = 0; i < Array_ErrorPoints.length; i++) {
        if (Array_ErrorPoints[i] <= 2) {
          bar_color.push("rgba(255, 159, 64, 0.2)");
          bar_border.push("rgba(255, 159, 64, 1)");
        } else if (Array_ErrorPoints[i] > 2) {
          // bar_color.push("rgba(255, 99, 132, 0.2)");
          // bar_border.push("rgba(255,99,132,1)");
          bar_color.push("rgba(255, 159, 64, 1)");
          bar_border.push("rgba(255, 159, 64, 1)");
        }
      }

      var ctx_minor = document.getElementById("CHART_MINOR");
      CHART_MINOR = new Chart(ctx_minor, {
        type: "horizontalBar",
        data: {
          labels: Array_Names,
          datasets: [
            {
              label: "# of Errors",
              data: Array_ErrorPoints,
              backgroundColor: bar_color,
              borderColor: bar_border,
              borderWidth: 1
            }
          ]
        },
        options: {
          legend: { display: false },
          scales: {
            xAxes: [
              {
                ticks: {
                  stepSize: 1,
                  beginAtZero: true,
                  fontSize: 20
                }
              }
            ]
          }
        }
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
