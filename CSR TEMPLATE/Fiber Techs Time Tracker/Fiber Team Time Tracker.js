$(document).ready(function() {
  // swal({
  //   type: "success",
  //   title: "Fiber Calendar",
  //   showConfirmButton: false,
  //   timer: 900
  // }).catch(swal.noop);

  document.getElementById("RibbonContainer").style.display = "none";
  document.getElementById("s4-ribbonrow").style.display = "none";
  document
    .getElementById(
      "ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sboxdiv"
    )
    .remove();
  document.getElementById(
    "DeltaPlaceHolderPageTitleInTitleArea"
  ).style.display = "none";

  $("input").keypress(function(event) {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });

  $("#INPUT_FILTER_DATE").pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 100, // Creates a dropdown of 15 years to control year,
    today: "Today",
    clear: "Clear",
    close: "Ok",
    closeOnSelect: true,
    format: "yyyy-mm-dd"
  });

  // $(".timepicker").pickatime({
  //   default: "now", // Set default time
  //   fromnow: 0, // set default time to * milliseconds from now (using with default = 'now')
  //   twelvehour: true, // Use AM/PM or 24-hour format
  //   donetext: "OK", // text for done-button
  //   cleartext: "Clear", // text for clear-button
  //   canceltext: "Cancel", // Text for cancel-button
  //   autoclose: true, // automatic close timepicker
  //   ampmclickable: true, // make AM PM clickable
  //   onClose: function() {
  //     $(".timepicker").blur();
  //   }
  // });

  $(".timepicker").pickatime({
    default: "now",
    twelvehour: true, // change to 12 hour AM/PM clock from 24 hour
    donetext: "OK",
    autoclose: false,
    vibrate: true // vibrate the device when dragging clock hand
  });

  Get_FiberTeamMembers();
  Set_Calendar();
  Get_Projects();
  Retrieve_All_Entries();

  // INTIALIZE HTML TABLE FILTER
  document.addEventListener("readystatechange", function() {
    if (document.readyState === "complete") {
      Filter_Members.init();
    }
  });

  document.addEventListener("readystatechange", function() {
    if (document.readyState === "complete") {
      Filter_Entries.init();
    }
  });

  $("#INPUT_FILTER_DATE").change(function() {
    if ($("#INPUT_FILTER_DATE").val() != "") {
      Retrieve_Entries_By_Date($("#INPUT_FILTER_DATE").val());
    } else {
      Retrieve_All_Entries();
    }
  });
}); //---------------------------------------END OF DOCUMENT READY FUNCTION----------------------------------------------------------

function onSuccess(data, request) {
  loginName = data.d.Title;
  email = data.d.Email;

  // console.log(data.d);
}

function onError(error) {
  alert("error");
}

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
//-----------------------------------------------------------------------------------------------------------------------------
// MODALS

// ENTRY FORM
function Open_Modal_EntryForm() {
  $("#MODAL_ENTRY_FORM")
    .modal({
      closable: false,
      centered: false
    })
    .modal("show");
}
function Close_Modal_EntryForm() {
  $("#MODAL_ENTRY_FORM")
    .modal({
      closable: false,
      centered: false
    })
    .modal("hide");

  Retrieve_All_Entries();

  if (Entry_Function == "Edit") {
    Open_Modal_Entries();
  }
}

// ENTRIES
function Open_Modal_Entries() {
  $("#MODAL_ENTRIES")
    .modal({
      closable: false,
      centered: false
    })
    .modal("show");
}
function Close_Modal_Entries() {
  $("#MODAL_ENTRIES")
    .modal({
      closable: false,
      centered: false
    })
    .modal("hide");
}

//-----------------------------------------------------------------------------------------------------------------------------
// GLOBAL FUNCTION ON QUERY FAILED
function onQueryFailed(sender, args) {
  alert("Request failed. " + args.get_message() + "\n" + args.get_stackTrace());
}
//-----------------------------------------------------------------------------------------------------------------------------
// GLOBAL VARIABLES

var Array_EmployeeNames = [];
var Array_EmployeeID = [];
var Array_EmployeeType = [];

var Selected_Employee_Name = "";

//-----------------------------------------------------------------------------------------------------------------------------
var Employees_Items;

function Get_FiberTeamMembers() {
  var siteUrl = "https://intranet.houseofit.com.au/it/";
  var clientContext = new SP.ClientContext(siteUrl);

  // Department
  var Employees = clientContext
    .get_web()
    .get_lists()
    .getByTitle("IT Members");
  var camlQuery_Department = new SP.CamlQuery();
  camlQuery_Department.set_viewXml(
    "<View>" +
      "<Query>" +
      "<Where>" +
      "<And>" +
      "<Eq>" +
      "<FieldRef Name='Status'/>" +
      "<Value Type='Text'>" +
      "Active" +
      "</Value>" +
      "</Eq>" +
      "<Or>" +
      "<Eq>" +
      "<FieldRef Name='Employee_Type'/>" +
      "<Value Type='Text'>" +
      "BST" +
      "</Value>" +
      "</Eq>" +
      "<Or>" +
      "<Eq>" +
      "<FieldRef Name='Employee_Type'/>" +
      "<Value Type='Text'>" +
      "Fiber Optic" +
      "</Value>" +
      "</Eq>" +
      "<Eq>" +
      "<FieldRef Name='Employee_Type'/>" +
      "<Value Type='Text'>" +
      "Fiber Tech Trainee" +
      "</Value>" +
      "</Eq>" +
      "</Or>" +
      "</Or>" +
      "</And>" +
      "</Where>" +
      "</Query>" +
      "<RowLimit></RowLimit>" +
      "</View>"
  );
  this.Employees_Items = Employees.getItems(camlQuery_Department);

  clientContext.load(Employees_Items);
  clientContext.executeQueryAsync(
    Get_FiberTeamMembers_Succeeded,
    onQueryFailed
  );
}

function Get_FiberTeamMembers_Succeeded(sender, args) {
  var listItemsCollection = Employees_Items.getEnumerator();
  Array_EmployeeNames = [];
  Array_EmployeeID = [];
  Array_EmployeeType = [];
  while (listItemsCollection.moveNext()) {
    var listItem = listItemsCollection.get_current();
    // console.log(listItem.get_item('Title'));

    Array_EmployeeNames.push(listItem.get_item("Title"));
    Array_EmployeeID.push(listItem.get_item("Employee_ID"));
    Array_EmployeeType.push(listItem.get_item("Employee_Type"));

    $("#TABLE_FIBER_MEMBERS tbody").append(
      "<tr style='display: table-row;' id='" +
        listItem.get_item("Title") +
        "' onclick='SelectRow_Employee(this)'>" +
        "<td style='cursor:pointer' align='left' class=''> " +
        listItem.get_item("Title") +
        "</td>" +
        "<td style='cursor:pointer' align='left' class=''> " +
        listItem.get_item("Employee_ID") +
        "</td>" +
        "<td style='cursor:pointer' align='left' class=''>" +
        listItem.get_item("Employee_Type") +
        "</td>" +
        "</tr>"
    );

    // $("#LIST_FIBER_MEMBERS").append(
    //   '<div class="div" style="margin:15px !important">' +
    //     '<div class="content">' +
    //     '<a class="ui fluid raised card" id="' +
    //     listItem.get_item("Title") +
    //     '" onclick="SelectRow_Employee(this)">' +
    //     '<div class="content">' +
    //     '<div class="header grey-text text-darken-1">' +
    //     listItem.get_item("Title") +
    //     "</div>" +
    //     "<span>" +
    //     listItem.get_item("Employee_ID") +
    //     "</span>" +
    //     '<div class="meta">' +
    //     "<span>" +
    //     listItem.get_item("Employee_Type") +
    //     "</span>" +
    //     "</div>" +
    //     "</div>" +
    //     "</a>" +
    //     "</div>"
    // );
  }
}

function SelectRow_Employee(row) {
  // console.log(row.id);
  // console.log(Array_EmployeeID[Array_EmployeeNames.indexOf(row.id)]);
  // console.log(Array_EmployeeType[Array_EmployeeNames.indexOf(row.id)]);

  Selected_Employee_Name = row.id;

  if (Selected_Employee_Name != "") {
    $("#Calendar_Container").dimmer("hide");
  }

  // document.getElementById("HEADER_SELECTED_NAME").innerHTML = row.id;

  Get_Employee_Entries(Array_EmployeeID[Array_EmployeeNames.indexOf(row.id)]);
}

function Set_Calendar() {
  if (Selected_Employee_Name == "") {
    $("#Calendar_Container")
      .dimmer({ closable: false })
      .dimmer("show");
  }

  $("#calendar").fullCalendar("destroy");
  $("#calendar").fullCalendar({
    defaultView: "month",
    header: {
      left: "title",
      center: "",
      right: "today prevYear,prev,next,nextYear",
      TotalHours: "long description"
    },
    eventAfterAllRender: function() {
      // console.log("calendar loaded");
    },
    eventRender: function(event, element) {
      element.find(".fc-title").append("<br/>" + event.TotalHours);
    },
    dayClick: function(date, jsEvent, view, resourceObj) {
      // alert('Clicked on: ' + date.format());

      Entry_Function = "Add";

      document.getElementById(
        "INPUT_HEADER_SELECTED_DATE"
      ).innerHTML = date.format();
      document.getElementById(
        "INPUT_HEADER_SELECTED_EMPLOYEE"
      ).innerHTML = Selected_Employee_Name;
      if (Selected_Employee_Name != "") {
        Open_Modal_EntryForm();
      } else {
        swal("Oops...", "Please select an employee", "error");
      }

      // change the day's background color just for fun
      // $(this).css('background-color', 'red');
    }
  });
}

//--------------------------------------------------------------------------------------------

// MANAGE PROJECTS

function Open_Modal_Projects() {
  $("#MODAL_MANAGE_PROJECTS")
    .modal({
      closable: false,
      centered: false
    })
    .modal("show");
}
function Close_Modal_Projects() {
  $("#MODAL_MANAGE_PROJECTS")
    .modal({
      closable: false,
      centered: false
    })
    .modal("hide");
}

function Open_ProjectForm() {
  if ($("#DIV_PROJECT_FORM").hasClass("hidden")) {
    $("#DIV_PROJECT_FORM").transition("drop");
  }
  document.getElementById("DIV_NEWPROJECT_BTN").style.display = "none";
  document.getElementById("INPUT_NEWPROJECT_NAME").value = "";
  document.getElementById("INPUT_NEWPROJECT_CODE").value = "";
}

function Close_ProjectForm() {
  if ($("#DIV_PROJECT_FORM").hasClass("transition visible")) {
    document.getElementById("DIV_PROJECT_FORM").style.display = "none";
    $("#DIV_PROJECT_FORM").transition();
  }
  document.getElementById("DIV_NEWPROJECT_BTN").style.display = "block";
}

function New_Project() {
  Project_Function = "ADD";
  Retrieve_LastProjectCode();
  Open_ProjectForm();
}

// GET PROJECTS
var collListItem;
function Get_Projects() {
  var clientContext = new SP.ClientContext(
    "https://intranet.houseofit.com.au/"
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("HOIT Projects");
  var camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml(
    "<View>" +
      "<Query>" +
      "<Where>" +
      "<Geq>" +
      "<FieldRef Name='ID'/>" +
      "<Value Type='Number'>0</Value>" +
      "</Geq>" +
      "</Where>" +
      "<OrderBy>" +
      "<FieldRef Name='Title' Ascending='false' />" +
      "</OrderBy>" +
      "</Query>" +
      "<RowLimit>" +
      "</RowLimit>" +
      "</View>"
  );
  this.collListItem = oList.getItems(camlQuery);
  clientContext.load(collListItem);
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.Get_Projects_Succeeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}
function Get_Projects_Succeeded() {
  var listItemsCollection = collListItem.getEnumerator();

  $("#TBODY_PROJECTS").empty();
  document.getElementById("MENU_PROJECT_NAME").innerHTML = "";

  Array_ProjectCode = [];
  Array_ProjectID = [];
  Array_ProjectName = [];
  Array_ProjectType = [];

  while (listItemsCollection.moveNext()) {
    var listItem = listItemsCollection.get_current();
    ID = listItem.get_item("ID");

    $("#TABLE_PROJECTS tbody").append(
      "<tr style='display: table-row;'>" +
        "<td align='left'  > " +
        listItem.get_item("Project_x0020_Name") +
        "</td>" +
        "<td align='left' class=' '>" +
        listItem.get_item("Project_x0020_Code") +
        "</td>" +
        "<td class='CenterTextInSpan'>" +
        '<div class="ui icon top right pointing dropdown blue basic button left circular">' +
        '<i class="icon settings "></i>' +
        '<div class="menu">' +
        "<a class='item' id='Edit-" +
        ID +
        "' onclick='Get_Project_TO_Edit(this)'><i class='edit icon'></i> Edit</a>" +
        "<a class='item' id='Delete-" +
        ID +
        "' onclick='Delete_Project_Clicked(this)'><i class='delete icon'></i> Remove</a>" +
        "</div>" +
        "</td>" +
        "</tr>"
    );

    $("#MENU_PROJECT_NAME").append(
      "<div class='item' data-value='" +
        listItem.get_item("Project_x0020_Name") +
        "'>" +
        listItem.get_item("Project_x0020_Name") +
        "</div>"
    );

    Array_ProjectID.push(listItem.get_item("ID"));
    Array_ProjectName.push();
    Array_ProjectType.push(listItem.get_item("Project_x0020_Type"));
    Array_ProjectCode.push(listItem.get_item("Project_x0020_Code"));
  }

  $("#MENU_PROJECT_NAME").dropdown("refresh");

  $("#DIV_INPUT_PROJECT_NAME").dropdown({
    onChange: function(val) {
      $("#INPUT_PROJECT_CODE").val(
        Array_ProjectCode[Array_ProjectName.indexOf(val)]
      );

      $("#INPUT_PROJECT_TYPE").val(
        Array_ProjectType[Array_ProjectName.indexOf(val)]
      );

      Selected_ProjectCode = Array_ProjectCode[Array_ProjectName.indexOf(val)];
      Selected_ProjectType = Array_ProjectType[Array_ProjectName.indexOf(val)];
      Selected_ProjectID = Array_ProjectID[Array_ProjectName.indexOf(val)];

      Selected_ProjectName = val;

      // alert(Array_ProjectCode[Array_ProjectName.indexOf(val)]);
      // alert(Selected_ProjectID);
    }
  });

  $(
    ".ui.icon.top.right.pointing.dropdown.blue.basic.button.left.circular"
  ).dropdown({
    action: "hide"
  });
}

//------------------------------------------------------------------------
// GET LAST PROJECT CODE

var targetListItem;
function Retrieve_LastProjectCode() {
  var clientContext = new SP.ClientContext(
    "https://intranet.houseofit.com.au/"
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("HOIT Projects");
  var camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml(
    "<View><Query><Where><Geq><FieldRef Name='ID'/>" +
      "<Value Type='Number'>1</Value></Geq></Where><OrderBy><FieldRef Name='Project_x0020_Code' Ascending='false' /></OrderBy></Query><RowLimit>1</RowLimit></View>"
  );
  this.targetListItem = oList.getItems(camlQuery);
  clientContext.load(targetListItem);
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.Retrieve_LastProjectCode_Succeeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}
function Retrieve_LastProjectCode_Succeeded() {
  var Last_Proj_Code = "";
  var Item_ID = "";
  var listItemsCollection = targetListItem.getEnumerator();

  while (listItemsCollection.moveNext()) {
    var listItem = listItemsCollection.get_current();
    Item_ID = listItem.get_item("ID");
    Last_Proj_Code = listItem.get_item("Project_x0020_Code");
  }

  if (Last_Proj_Code == "") {
    document.getElementById("INPUT_NEWPROJECT_CODE").value = "PROJ-1";
  } else {
    var LastProjCodeNumber = parseInt(Last_Proj_Code.split("PROJ-").pop());
    var NewProjCodeNumber = parseInt(LastProjCodeNumber) + 1;
    document.getElementById("INPUT_NEWPROJECT_CODE").value =
      "PROJ-" + NewProjCodeNumber;
  }
}

//------------------------------------------------------------------------

// ADD PROJECT
var oListItem_AddProject;
function Add_Project(ProjectName, ProjectType, ProjectCode) {
  var siteUrl = "https://intranet.houseofit.com.au/";
  var clientContext = new SP.ClientContext(siteUrl);
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("HOIT Projects");

  var itemCreateInfo = new SP.ListItemCreationInformation();
  this.oListItem_AddProject = oList.addItem(itemCreateInfo);

  oListItem_AddProject.set_item("Project_x0020_Name", ProjectName);
  oListItem_AddProject.set_item("Project_x0020_Type", ProjectType);
  oListItem_AddProject.set_item("Project_x0020_Code", ProjectCode);

  oListItem_AddProject.update();
  clientContext.load(oListItem_AddProject);
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.Add_Project_Succeeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}
function Add_Project_Succeeded() {
  swal({
    type: "success",
    title: "Project has been added",
    showConfirmButton: false,
    timer: 500
  }).catch(swal.noop);

  Get_Projects();
  document.getElementById("INPUT_NEWPROJECT_NAME").value = "";
  document.getElementById("INPUT_NEWPROJECT_CODE").value = "";
  Close_ProjectForm();
}

function Validate_Add_Edit_ProjectForm() {
  var ProjectName = document.getElementById("INPUT_NEWPROJECT_NAME").value;
  // var ProjectType = document.getElementById("INPUT_NEWPROJECT_TYPE").value;
  var ProjectType = "";
  var ProjectCode = document.getElementById("INPUT_NEWPROJECT_CODE").value;

  if (ProjectName == "" || ProjectCode == "") {
    swal("Oops...", "Please enter a project name or code", "error");
  } else {
    if (Project_Function == "ADD") {
      Add_Project(ProjectName, ProjectType, ProjectCode);
    } else if (Project_Function == "EDIT") {
      Edit_Project(ProjectName, ProjectType, ProjectCode);
    }
  }
}

// GET PROJECT TO EDIT -------------------------------------
var Project_ID;
var Get_Training_Items;
function Get_Project_TO_Edit(item) {
  Project_ID = item.id.split("Edit-").pop();

  Project_Function = "EDIT";

  var clientContext = new SP.ClientContext(
    "https://intranet.houseofit.com.au/"
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("HOIT Projects");
  var camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml(
    "<View><Query><Where><Geq><FieldRef Name='ID'/>" +
      "<Value Type='Number'>" +
      Project_ID +
      "</Value></Geq></Where></Query><RowLimit>1</RowLimit></View>"
  );
  this.Get_Training_Items = oList.getItems(camlQuery);
  clientContext.load(Get_Training_Items);
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.Get_Project_TO_Edit_Suceeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}
function Get_Project_TO_Edit_Suceeded() {
  var listItemsCollection = Get_Training_Items.getEnumerator();

  Open_ProjectForm();

  while (listItemsCollection.moveNext()) {
    var listItem = listItemsCollection.get_current();
    document.getElementById("INPUT_NEWPROJECT_NAME").value = listItem.get_item(
      "Project_x0020_Name"
    );

    $(".ui.selection.dropdown.col.s12.INPUT_NEWPROJECT_TYPE").dropdown(
      "set selected",
      listItem.get_item("Project_x0020_Type")
    );

    document.getElementById("INPUT_NEWPROJECT_CODE").value = listItem.get_item(
      "Project_x0020_Code"
    );
  }
  document.getElementById("MODAL_MANAGE_PROJECTS").scrollTop = 0;
}

// EDIT PROJECT ---------------------------------------------------------------------

function Edit_Project(ProjectName, ProjectType, ProjectCode) {
  var siteUrl = "https://intranet.houseofit.com.au/";
  var clientContext = new SP.ClientContext(siteUrl);
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("HOIT Projects");

  this.oListItem_UpdateTraining = oList.getItemById(Project_ID);

  oListItem_UpdateTraining.set_item("Project_x0020_Name", ProjectName);
  // oListItem_UpdateTraining.set_item("Project_x0020_Type", ProjectType);
  oListItem_UpdateTraining.set_item("Project_x0020_Code", ProjectCode);

  oListItem_UpdateTraining.update();
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.Edit_Project_Succeeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}

function Edit_Project_Succeeded() {
  swal({
    type: "success",
    title: "Project Has Been Updated",
    showConfirmButton: false,
    timer: 700
  }).catch(swal.noop);

  Get_Projects();
  document.getElementById("INPUT_NEWPROJECT_NAME").value = "";
  document.getElementById("INPUT_NEWPROJECT_CODE").value = "";
  Close_ProjectForm();
}

// DELETE PROJECT ------------------------------------------------------------------

function Delete_Project_Clicked(item) {
  swal({
    title: "Remove Project?",
    text: "You won't be able to revert this!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#1678c2",
    cancelButtonColor: "#f26202",
    confirmButtonText: "Yes, remove it!"
  }).then(result => {
    var siteUrl = "https://intranet.houseofit.com.au/";
    var clientContext = new SP.ClientContext(siteUrl);
    var oList = clientContext
      .get_web()
      .get_lists()
      .getByTitle("HOIT Projects");
    this.oListItem_Points = oList.getItemById(item.id.split("Delete-").pop());
    oListItem_Points.deleteObject();
    clientContext.executeQueryAsync(
      Function.createDelegate(this, this.Delete_Project_Succeeded),
      Function.createDelegate(this, this.onQueryFailed)
    );
  });
}

function Delete_Project_Succeeded() {
  swal({
    type: "success",
    title: "Project Has Been Removed",
    showConfirmButton: false,
    timer: 700
  });
  Get_Projects();
}

//----------------------------------------------------------------------------------------------------------------
// ENTRIES


function timeStringToFloat(time) {
  var hoursMinutes = time.split(/[.:]/);
  var hours = parseInt(hoursMinutes[0], 10);
  var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
  return (hours + minutes / 60).toFixed(2);
}


// VALIDATE ENTRY FORM
function Validate_Entry_Form() {
  var V_Name = document.getElementById("INPUT_HEADER_SELECTED_EMPLOYEE")
    .innerHTML;
  var V_ID =
    Array_EmployeeID[
      Array_EmployeeNames.indexOf(
        document.getElementById("INPUT_HEADER_SELECTED_EMPLOYEE").innerHTML
      )
    ];
  var V_Project = $("#DIV_INPUT_PROJECT_NAME").dropdown("get value");
  var V_EntryDate = document.getElementById("INPUT_HEADER_SELECTED_DATE")
    .innerHTML;
  var V_TimeFrom = document.getElementById("INPUT_TIME_FROM").value;
  var V_TimeTo = document.getElementById("INPUT_TIME_TO").value;
  var V_Description = document.getElementById("INPUT_ENTRY_DESCRIPTION").value;

  var V_StartTime = document.getElementById("INPUT_TIME_FROM").value;
  var V_EndTime = document.getElementById("INPUT_TIME_TO").value;

  V_StartTime = V_StartTime.slice(0, 5) + ":00" + " " + V_StartTime.slice(5, 7);
  V_EndTime = V_EndTime.slice(0, 5) + ":00" + " " + V_EndTime.slice(5, 7);

  var startTime = moment(V_StartTime, "HH:mm:ss a");
  var endTime = moment(V_EndTime, "HH:mm:ss a");
  var duration = moment.duration(endTime.diff(startTime));
  var hours = parseInt(duration.asHours());
  var minutes = parseInt(duration.asMinutes()) - hours * 60;

  endTime.diff(startTime, "minutes") + " Mns";

  var V_TotalHours = timeStringToFloat(hours+":"+minutes);

  if (hours < 0) {
    swal("Invalid Time Entry", "Must be non negative", "error");
  } else {
    if (
      V_Name == "" ||
      V_ID == "" ||
      V_Project == "" ||
      V_EntryDate == "" ||
      V_TimeFrom == "" ||
      V_TimeTo == ""
    ) {
      swal("Oops...", "Please fill the required fields", "error");
    } else {
      if (Entry_Function == "Add") {
        Add_Entry(
          V_Name,
          V_ID,
          V_Project,
          V_EntryDate,
          V_TimeFrom,
          V_TimeTo,
          V_Description,
          V_TotalHours
        );
      } else if (Entry_Function == "Edit") {
        Edit_Entry(
          V_Name,
          V_ID,
          V_Project,
          V_EntryDate,
          V_TimeFrom,
          V_TimeTo,
          V_Description,
          V_TotalHours
        );
      }
    }
  }
}

var Entry_Function = "";

// ADD ENTRY
var oListItem_AddEntry;
function Add_Entry(
  Name,
  ID,
  Project,
  EntryDate,
  TimeFrom,
  TimeTo,
  Description,
  TotalHours
) {
  console.log();

  var siteUrl = "https://intranet.houseofit.com.au/";
  var clientContext = new SP.ClientContext(siteUrl);
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("Fiber Team Time Tracker");

  var itemCreateInfo = new SP.ListItemCreationInformation();
  this.oListItem_AddEntry = oList.addItem(itemCreateInfo);

  oListItem_AddEntry.set_item("LI_Name", Name);
  oListItem_AddEntry.set_item("LI_EmployeeID", ID);
  oListItem_AddEntry.set_item("LI_Project", Project);
  oListItem_AddEntry.set_item("LI_Time_From", TimeFrom);
  oListItem_AddEntry.set_item("LI_Entry_Date", EntryDate);
  oListItem_AddEntry.set_item("LI_Time_To", TimeTo);
  oListItem_AddEntry.set_item("LI_Description", Description);
  oListItem_AddEntry.set_item("LI_TotalHours", TotalHours);

  oListItem_AddEntry.update();
  clientContext.load(oListItem_AddEntry);
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.Add_Entry_Succeeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}
function Add_Entry_Succeeded() {
  swal({
    type: "success",
    title: "Entry has been added",
    showConfirmButton: false,
    timer: 800
  }).catch(swal.noop);
  Close_Modal_EntryForm();

  Get_Employee_Entries(
    Array_EmployeeID[Array_EmployeeNames.indexOf(Selected_Employee_Name)]
  );
}

// RETRIEVE ENTRIES

var Get_Entries_Item;
function Get_Employee_Entries(EmployeeID) {
  swal({
    type: "success",
    title: Selected_Employee_Name,
    showConfirmButton: false,
    timer: 600
  }).catch(swal.noop);

  var clientContext = new SP.ClientContext(
    "https://intranet.houseofit.com.au/"
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("Fiber Team Time Tracker");
  var camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml(
    "<View><Query><Where><Eq><FieldRef Name='LI_EmployeeID'/>" +
      "<Value Type='Text'>" +
      EmployeeID +
      "</Value></Eq></Where>" +
      "<OrderBy>" +
      "<FieldRef Name='LI_Entry_Date' Ascending='true' />" +
      "</OrderBy>" +
      "</Query></View>"
  );
  this.Get_Entries_Item = oList.getItems(camlQuery);
  clientContext.load(Get_Entries_Item);
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.Get_Employee_Entries_Suceeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}
function Get_Employee_Entries_Suceeded() {
  var listItemsCollection = Get_Entries_Item.getEnumerator();

  var EmployeeEntries = [];
  $("#calendar").fullCalendar("destroy");

  var dates = [];

  var duplicate_date = [];
  var duplicate_date_entry = [];

  var Entry_TotalHours = 0;


  var multiple_totalhours = [];

  var prev_date = "";
  var prevTotalHours = 0;
  var newTotalHours = 0;

  while (listItemsCollection.moveNext()) {
    var listItem = listItemsCollection.get_current();

    prev_date = listItem.get_item("LI_Entry_Date");

    var entry = "";

    if (dates.indexOf(listItem.get_item("LI_Entry_Date")) == -1) {

      prevTotalHours = listItem.get_item("LI_TotalHours");

      dates.push(listItem.get_item("LI_Entry_Date"));
      
      entry =
        "<div class='ui labeled icon button popup-button2' id='"+listItem.get_item("LI_Entry_Date")+"' onclick='TotalHours_Clicked(this)'><i class='icon hourglass half'></i><span id='SPAN_ENTRY_"+listItem.get_item("LI_Entry_Date")+"'>"+listItem.get_item("LI_TotalHours")+" Hours"+"</span></div>" +
        "<div class='ui flowing custom popup'>" +
        '<h5 class="ui center aligned icon header light-blue-text"><i class="ui clock outline icon"></i>Time Entry</h5>' +
        '<div class="ui aligned divided list" id="LIST_ENTRY_' +
        listItem.get_item("LI_Entry_Date") +
        '">' +
        '<div class="item light-blue-text">' +
        '<i class="icon hourglass half"></i>' +
        '<div class="content">' +
        '<span class="header">' +
        listItem.get_item("LI_Time_From") +
        " - " +
        listItem.get_item("LI_Time_To") +
        "</span>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";

      EmployeeEntries.push({
        id: listItem.get_item("ID"),
        title: listItem.get_item("LI_Name"),
        start: listItem.get_item("LI_Entry_Date"),
        end: listItem.get_item("LI_Entry_Date"),
        TotalHours: entry
      });

    } else {

      if(listItem.get_item("LI_Entry_Date") == prev_date){
          newTotalHours += parseFloat(prevTotalHours) + parseFloat(listItem.get_item("LI_TotalHours"));

        // document.getElementById("SPAN_ENTRY_"+listItem.get_item("LI_Entry_Date")).innerHTML = newTotalHours.toFixed(2);
        console.log(listItem.get_item("LI_Entry_Date")+" --> "+ newTotalHours.toFixed(2));

        multiple_totalhours.push(newTotalHours.toFixed(2));
      }


      // Entry_TotalHours += listItem.get_item("LI_TotalHours");

      var time_entry =
        listItem.get_item("LI_Time_From") +
        " - " +
        listItem.get_item("LI_Time_To");
      duplicate_date_entry.push(time_entry);
      duplicate_date.push(listItem.get_item("LI_Entry_Date"));
    }

  }

  $("#calendar").fullCalendar({
    defaultView: "month",
    header: {
      left: "title",
      center: "",
      right: "today prevYear,prev,next,nextYear"
    },
    eventAfterAllRender: function() {
      // console.log("calendar loaded");
      $(".popup-button2").popup({
        popup: $(".custom.popup"),
        on: "hover",
        position: "top left",
        variation: "inverted"
      });
    },
    // eventMouseover:function() {
    //   console.log("event hovered");
    // },
    events: EmployeeEntries,
    eventRender: function(event, element) {
      element.find(".fc-title").append("<br/>" + event.TotalHours);
    },
    dayClick: function(date, jsEvent, view, resourceObj) {
      // alert('Clicked on: ' + date.format());

      Entry_Function = "Add";

      document.getElementById(
        "INPUT_HEADER_SELECTED_DATE"
      ).innerHTML = date.format();
      document.getElementById(
        "INPUT_HEADER_SELECTED_EMPLOYEE"
      ).innerHTML = Selected_Employee_Name;
      if (Selected_Employee_Name != "") {
        Open_Modal_EntryForm();
      } else {
        swal("Oops...", "Please select an employee", "error");
      }

      // change the day's background color just for fun
      // $(this).css('background-color', 'red');
    }
  });

  for (var i = 0; i < duplicate_date.length; i++) {
    $("#LIST_ENTRY_" + duplicate_date[i]).append(
      '<div class="item light-blue-text">' +
        '<i class="icon hourglass half"></i>' +
        '<div class="content">' +
        '<span class="header">' +
        duplicate_date_entry[i] +
        "</span>" +
        "</div>" +
        "</div>"
    );

    document.getElementById("SPAN_ENTRY_"+duplicate_date[i]).innerHTML = multiple_totalhours[i] + " Hours";

  }

}

// RETRIEVE ALL TIME ENTRIES

var Get_All_Entries_Item;
function Retrieve_All_Entries() {
  var clientContext = new SP.ClientContext(
    "https://intranet.houseofit.com.au/"
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("Fiber Team Time Tracker");
  var camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml(
    "<View><Query><Where><Geq><FieldRef Name='ID'/>" +
      "<Value Type='Number'>1</Value></Geq></Where>" +
      "<OrderBy>" +
      "<FieldRef Name='LI_Entry_Date' Ascending='false' />" +
      "</OrderBy>" +
      "</Query></View>"
  );
  this.Get_All_Entries_Item = oList.getItems(camlQuery);
  clientContext.load(Get_All_Entries_Item);
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.Retrieve_All_Entries_Suceeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}

function Retrieve_Entries_By_Date(Entry_Date) {
  var clientContext = new SP.ClientContext(
    "https://intranet.houseofit.com.au/"
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("Fiber Team Time Tracker");
  var camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml(
    "<View><Query><Where><Eq><FieldRef Name='LI_Entry_Date'/>" +
      "<Value Type='Text'>" +
      Entry_Date +
      "</Value></Eq></Where>" +
      "<OrderBy>" +
      "<FieldRef Name='LI_Entry_Date' Ascending='false' />" +
      "</OrderBy>" +
      "</Query></View>"
  );
  this.Get_All_Entries_Item = oList.getItems(camlQuery);
  clientContext.load(Get_All_Entries_Item);
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.Retrieve_All_Entries_Suceeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}

function TotalHours_Clicked(EntryDate){
  Retrieve_Entries_By_Date(EntryDate.id);
  Open_Modal_Entries();
}


function Retrieve_All_Entries_Suceeded() {
  var listItemsCollection = Get_All_Entries_Item.getEnumerator();

  $("#TBODY_TABLE_ENTRIES").empty();
  while (listItemsCollection.moveNext()) {
    var listItem = listItemsCollection.get_current();
    // console.log(listItem.get_item("LI_Entry_Date"));

    $("#TABLE_ENTRIES tbody").append(
      "<tr style='display: table-row;'>" +
        "<td align='left'  > " +
        listItem.get_item("LI_Name") +
        "</td>" +
        "<td class=' '>" +
        listItem.get_item("LI_EmployeeID") +
        "</td>" +
        "<td class=' '>" +
        listItem.get_item("LI_Project") +
        "</td>" +
        "<td class=' '>" +
        listItem.get_item("LI_Entry_Date") +
        "</td>" +
        "<td class=' '>" +
        listItem.get_item("LI_Time_From") +
        "</td>" +
        "<td class=' '>" +
        listItem.get_item("LI_Time_To") +
        "</td>" +
        "<td class=' '>" +
        listItem.get_item("LI_Description") +
        "</td>" +
        "<td class='CenterTextInSpan'>" +
        '<div class="ui icon top right pointing dropdown blue basic button left circular">' +
        '<i class="icon settings "></i>' +
        '<div class="menu">' +
        "<a class='item' id='Edit_Entry-" +
        listItem.get_item("ID") +
        "' onclick='Get_Entry_To_Edit(this)'><i class='edit icon'></i> Edit</a>" +
        "<a class='item' id='Delete_Entry-" +
        listItem.get_item("ID") +
        "' onclick='Delete_Entry(this)'><i class='delete icon'></i> Remove</a>" +
        "</div>" +
        "</td>" +
        "</tr>"
    );
  }

  $(
    ".ui.icon.top.right.pointing.dropdown.blue.basic.button.left.circular"
  ).dropdown();
}

var Entry_To_Edit_ID;
var Edit_Entry_Item;
function Get_Entry_To_Edit(Item) {
  Entry_To_Edit_ID = Item.id.split("Edit_Entry-").pop();
  var id = Item.id.split("Edit_Entry-").pop();

  var clientContext = new SP.ClientContext(
    "https://intranet.houseofit.com.au/"
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("Fiber Team Time Tracker");
  var camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml(
    "<View><Query><Where><Geq><FieldRef Name='ID'/>" +
      "<Value Type='Number'>" +
      id +
      "</Value></Geq></Where></Query><RowLimit>1</RowLimit></View>"
  );
  this.Edit_Entry_Item = oList.getItems(camlQuery);
  clientContext.load(Edit_Entry_Item);
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.Get_Entry_To_Edit_Suceeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}

function Get_Entry_To_Edit_Suceeded() {
  var listItemsCollection = Edit_Entry_Item.getEnumerator();

  while (listItemsCollection.moveNext()) {
    var listItem = listItemsCollection.get_current();

    document.getElementById(
      "INPUT_HEADER_SELECTED_DATE"
    ).innerHTML = listItem.get_item("LI_Entry_Date");
    document.getElementById(
      "INPUT_HEADER_SELECTED_EMPLOYEE"
    ).innerHTML = listItem.get_item("LI_Name");
    $(".ui.selection.dropdown.col.s12.PROJECT_NAME").dropdown(
      "set selected",
      listItem.get_item("LI_Project")
    );

    document.getElementById("INPUT_TIME_FROM").value = listItem.get_item(
      "LI_Time_From"
    );
    document.getElementById("INPUT_TIME_TO").value = listItem.get_item(
      "LI_Time_To"
    );
    document.getElementById(
      "INPUT_ENTRY_DESCRIPTION"
    ).value = listItem.get_item("LI_Description");
  }
  Entry_Function = "Edit";
  Open_Modal_EntryForm();
}

// EDIT ENTRY
var oListItem_EditEntry;
function Edit_Entry(
  Name,
  ID,
  Project,
  EntryDate,
  TimeFrom,
  TimeTo,
  Description,
  TotalHours
) {
  var siteUrl = "https://intranet.houseofit.com.au/";
  var clientContext = new SP.ClientContext(siteUrl);
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("Fiber Team Time Tracker");

  this.oListItem_EditEntry = oList.getItemById(Entry_To_Edit_ID);

  oListItem_EditEntry.set_item("LI_Name", Name);
  oListItem_EditEntry.set_item("LI_EmployeeID", ID);
  oListItem_EditEntry.set_item("LI_Project", Project);
  oListItem_EditEntry.set_item("LI_Time_From", TimeFrom);
  oListItem_EditEntry.set_item("LI_Entry_Date", EntryDate);
  oListItem_EditEntry.set_item("LI_Time_To", TimeTo);
  oListItem_EditEntry.set_item("LI_Description", Description);
  oListItem_EditEntry.set_item("LI_TotalHours", TotalHours);

  oListItem_EditEntry.update();
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.Edit_Entry_Succeeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}
function Edit_Entry_Succeeded() {
  swal({
    type: "success",
    title: "Entry has been Updated",
    showConfirmButton: false,
    timer: 800
  }).catch(swal.noop);
  Close_Modal_EntryForm();
  Retrieve_All_Entries();
  Open_Modal_Entries();
}

// DELETE ENTRY
function Delete_Entry(Item) {
  swal({
    title: "Remove Entry?",
    text: "Entry will be removed from the list",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#1678c2",
    cancelButtonColor: "#f26202",
    confirmButtonText: "Yes, remove it!"
  }).then(result => {
    var siteUrl = "https://intranet.houseofit.com.au/";
    var clientContext = new SP.ClientContext(siteUrl);
    var oList = clientContext
      .get_web()
      .get_lists()
      .getByTitle("Fiber Team Time Tracker");
    this.oListItem_Points = oList.getItemById(
      Item.id.split("Delete_Entry-").pop()
    );
    oListItem_Points.deleteObject();
    clientContext.executeQueryAsync(
      Function.createDelegate(this, this.Delete_Entry_Succeeded),
      Function.createDelegate(this, this.onQueryFailed)
    );
  });
}

function Delete_Entry_Succeeded() {
  swal({
    type: "success",
    title: "Entry Has Been Removed",
    showConfirmButton: false,
    timer: 800
  });
  Retrieve_All_Entries();
}

// RETRIEVE PROJECTS FOR THE FILTER IN ENTRIES MODAL BECAUSE SHIT AIN'T WORKING WITH THE FUNCTION ABOVE, FUCK !!!

// GET PROJECTS
var collListItem_ProjectsFilter;
function Get_Effin_Projects() {
  var clientContext = new SP.ClientContext(
    "https://intranet.houseofit.com.au/"
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("HOIT Projects");
  var camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml(
    "<View>" +
      "<Query>" +
      "<Where>" +
      "<Geq>" +
      "<FieldRef Name='ID'/>" +
      "<Value Type='Number'>0</Value>" +
      "</Geq>" +
      "</Where>" +
      "</Query>" +
      "</View>"
  );
  this.collListItem_ProjectsFilter = oList.getItems(camlQuery);
  clientContext.load(collListItem_ProjectsFilter);
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.Get_Effin_Projects_Succeeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}
function Get_Effin_Projects_Succeeded() {
  var listItemsCollection = collListItem_ProjectsFilter.getEnumerator();

  document.getElementById("MENU_PROJECT_FILTER").innerHTML = "";

  while (listItemsCollection.moveNext()) {
    var listItem = listItemsCollection.get_current();

    console.log(listItem.get_item("Project_x0020_Name"));
  }
}

// FILTER MEMBERS
var Filter_Members = (function(Arr) {
  var _input;

  function _onInputEvent(e) {
    _input = e.target;
    var tables = document.getElementsByClassName(
      _input.getAttribute("data-table")
    );
    Arr.forEach.call(tables, function(table) {
      Arr.forEach.call(table.tBodies, function(tbody) {
        Arr.forEach.call(tbody.rows, _filter);
      });
    });
  }

  function _filter(row) {
    var text = row.textContent.toLowerCase(),
      val = _input.value.toLowerCase();
    row.style.display = text.indexOf(val) === -1 ? "none" : "table-row";
  }

  return {
    init: function() {
      var inputs = document.getElementsByClassName("members-table-filter");
      Arr.forEach.call(inputs, function(input) {
        input.oninput = _onInputEvent;
      });
    }
  };
})(Array.prototype);

// FILTER ENTRIES
var Filter_Entries = (function(Arr) {
  var _input;

  function _onInputEvent(e) {
    _input = e.target;
    var tables = document.getElementsByClassName(
      _input.getAttribute("data-table")
    );
    Arr.forEach.call(tables, function(table) {
      Arr.forEach.call(table.tBodies, function(tbody) {
        Arr.forEach.call(tbody.rows, _filter);
      });
    });
  }

  function _filter(row) {
    var text = row.textContent.toLowerCase(),
      val = _input.value.toLowerCase();
    row.style.display = text.indexOf(val) === -1 ? "none" : "table-row";
  }

  return {
    init: function() {
      var inputs = document.getElementsByClassName("entries-table-filter");
      Arr.forEach.call(inputs, function(input) {
        input.oninput = _onInputEvent;
      });
    }
  };
})(Array.prototype);
