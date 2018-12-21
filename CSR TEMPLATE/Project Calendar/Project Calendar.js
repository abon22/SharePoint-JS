$(document).ready(function() {
  document.getElementById("aspnetForm").style.background = "#eeeeee";
  document.getElementById("s4-titlerow").style.display = "none";
  document.getElementById("s4-titlerow").style.height = "0px";
  document.getElementById("titleAreaBox").style.display = "none";
  document.getElementById("contentRow").style.margin = "0px";
  document.getElementById("contentRow").style.padding = "0px";

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

  Get_Projects();

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

  $(".circular.ui.icon.button.ReloadListBelow").popup({
    on: "hover",
    position: "top center"
  });

  $(".prompt.SearchEntry").popup({
    on: "focus",
    position: "top center"
  });

  $("#DROPDOWN_FILTERBYTAGS").dropdown();

  $("#DROPDOWN_FILTERBYTAGS").dropdown({
    onChange: function(val, text, choice) {
      search_status = val;
      if (search_project_name == "") {
        RetrieveEntries(val, "");
      } else if (search_project_name != "") {
        RetrieveEntries(val, search_project_name);
      }
    }
  });

  $(".ui.selection.dropdown").dropdown();

  $(".ui.calendar.DATE").calendar({
    type: "date",
    onChange: function() {
      $("#" + this.firstElementChild.id).removeClass("error");
    },
    formatter: {
      date: function(date, settings) {
        if (!date) return "";
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return month + "/" + day + "/" + year;
      }
    }
  });

  $(".ui.calendar.TIME").calendar({
    type: "time",
    onChange: function(date, text, mod) {
      $("#" + this.firstElementChild.id).removeClass("error");
    }
  });

  $("#INPUT_DAYS_HOURS").change(function() {
    $("#INPUT_PROJECT_DATE").val("");
    $("#INPUT_START_DATE").val("");
    $("#INPUT_END_DATE").val("");
    $("#INPUT_START_TIME").val("");
    $("#INPUT_END_TIME").val("");

    document.getElementById("ROW_DATE").style.display = "none";
    document.getElementById("ROW_START_TIME").style.display = "none";
    document.getElementById("ROW_END_TIME").style.display = "none";
    document.getElementById("ROW_START_DATE").style.display = "none";
    document.getElementById("ROW_END_DATE").style.display = "none";

    $("#ROW_DATE").removeClass("transition visible");
    $("#ROW_START_TIME").removeClass("transition visible");
    $("#ROW_END_TIME").removeClass("transition visible");
    $("#ROW_START_DATE").removeClass("transition visible");
    $("#ROW_END_DATE").removeClass("transition visible");

    if ($("#INPUT_DAYS_HOURS").val() == "Less than a day") {
      $("#ROW_DATE").transition("slide down");
      $("#ROW_START_TIME").transition("slide down");
      $("#ROW_END_TIME").transition("slide down");
    }
    if ($("#INPUT_DAYS_HOURS").val() == "One day") {
      $("#ROW_DATE").transition("slide down");
    } else if ($("#INPUT_DAYS_HOURS").val() === "More than a day") {
      $("#ROW_START_DATE").transition("slide down");
      $("#ROW_END_DATE").transition("slide down");
    }
  });

  $("#INPUT_PROJECT_NAME").change(function() {
    if ($("#INPUT_PROJECT_NAME").val() !== "") {
      // console.log(Array_ProjectName[Array_ProjectCode.indexOf($("#INPUT_PROJECT_NAME").val())]);
      // console.log(Array_ProjectID[Array_ProjectCode.indexOf($("#INPUT_PROJECT_NAME").val())]);

      ProjectName =
        Array_ProjectName[
          Array_ProjectCode.indexOf($("#INPUT_PROJECT_NAME").val())
        ];
      ProjectCode = $("#INPUT_PROJECT_NAME").val();
    }
  });

  //  GET CURRENT USER-------------------------------
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
    var loginName = data.d.Title;
    $("#INPUT_CREATEDBY").val(loginName);
  }

  function onError(error) {
    alert("error");
  }
  //----------------------------------------------------

  //==================================================================================================================
  // CALL ON LOAD FUNCTIONS

  RetrieveEntries("Load All", "");

  //==================================================================================================================
}); //---------------------------------------END OF DOCUMENT READY FUNCTION----------------------------------------------------------

function ClosePoups() {
  $(document).popup("hide all");
}

var content = [
  { title: "Andorra" },
  { title: "United Arab Emirates" },
  { title: "Afghanistan" },
  { title: "Antigua" },
  { title: "Anguilla" },
  { title: "Albania" },
  { title: "Armenia" },
  { title: "Netherlands Antilles" },
  { title: "Angola" },
  { title: "Argentina" },
  { title: "American Samoa" },
  { title: "Austria" },
  { title: "Australia" },
  { title: "Aruba" },
  { title: "Aland Islands" },
  { title: "Azerbaijan" },
  { title: "Bosnia" },
  { title: "Barbados" },
  { title: "Bangladesh" },
  { title: "Belgium" },
  { title: "Burkina Faso" },
  { title: "Bulgaria" },
  { title: "Bahrain" },
  { title: "Burundi" }
  // etc
];

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
  }
}

function SelectRow_Employee(row) {
  Selected_Employee_Name = row.id;

  Get_Employee_Entries(Array_EmployeeID[Array_EmployeeNames.indexOf(row.id)]);
}

function Set_Calendar() {
  $("#calendar").fullCalendar("destroy");
  $("#calendar").fullCalendar({
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay"
    },
    defaultView: "month",
    events: Entries,
    eventAfterAllRender: function() {},
    eventAfterRender: function(view) {
      $("#DIV_INPUT_NEW_STATUS").dropdown();

      $("#DIV_INPUT_NEW_STATUS").dropdown({
        onChange: function(val, text, choice) {
          new_Status = val;
        }
      });

      $(".fc-content").popup({
        popup: $(".custom.popup"),
        on: "click",
        position: "bottom center",
        closable: false,
        boundary: ".ui.three.column.grid.GRID_CONTAINER",
        inline: true,
        onHidden: () => {
          // $(document).popup("hide all");
          // $("#calendar").fullCalendar("refetchEvents");
          $(".ui.selection.dropdown.fluid.NEW_STATUS").dropdown(
            "restore defaults"
          );
          document.getElementById("INPUT_NEW_STATUS").value = "";
        }
      });
    },
    eventRender: function(event, element) {
      element.find(".fc-content").append("<br/>" + event.entryDetails);
    },
    eventClick: function(calEvent) {
      // FOR DELETE
      SelectedEntry_ID = calEvent.id;

      // FOR EDIT
      v_createdBy = "";
      v_project = "";
      v_status = "";
      v_days_hours = "";
      v_description = "";
      v_date = "";
      v_startTime = "";
      v_endTime = "";
      v_startDate = "";
      v_endDate = "";
      v_description = "";
      v_duration = "";

      v_createdBy = calEvent.createdBy;
      v_project = calEvent.projectName;
      v_status = calEvent.status;
      v_days_hours = calEvent.daysHours;
      v_description = calEvent.Description;
      v_date = calEvent.projectDate;
      v_startTime = calEvent.startTime;
      v_endTime = calEvent.endTime;
      v_startDate = calEvent.startDate;
      v_endDate = calEvent.endDate;
      v_description = calEvent.description;
      v_duration = calEvent.duration;

      document.getElementById("VIEW_CREATED_BY").innerHTML = v_createdBy;
      document.getElementById("VIEW_PROJECT").innerHTML = v_project;
      document.getElementById("VIEW_STATUS").innerHTML = v_status;
      document.getElementById("VIEW_DATE_FROM").innerHTML = v_startDate;
      document.getElementById("VIEW_DATE_TO").innerHTML = v_endDate;
      document.getElementById("VIEW_TIME_FROM").innerHTML = v_startTime;
      document.getElementById("VIEW_TIME_TO").innerHTML = v_endTime;
      document.getElementById("VIEW_DURATION").innerHTML = v_duration;
      document.getElementById("VIEW_DESCRIPTION").innerHTML = v_description;
    }
  });

  var columnWidth = jQuery("#single-day-container td.last").width();
  jQuery(
    "#single-day-container .single-day .view-item-events_calendar .dayview"
  ).each(function() {
    var width = jQuery(this).width();
    width = (width / columnWidth) * 100 + "%";

    var marginLeft = jQuery(this).css("margin-left");
    var marginArray = marginLeft.split("p");
    marginLeft = (marginArray[0] / columnWidth) * 100 + "%";

    var marginRight = jQuery(this).css("margin-right");
    marginArray = marginRight.split("p");
    marginRight = (marginArray[0] / columnWidth) * 100 + "%";

    var parentItem = jQuery(this).parent();
    parentItem
      .css("width", width)
      .css("margin-left", marginLeft)
      .css("margin-right", marginRight);
    jQuery(this)
      .css("margin-left", "0")
      .css("margin-right", "0")
      .attr("style", function(i, s) {
        return s + "width: 100% !important;";
      });
  });
}

//--------------------------------------------------------------------------------------------

// ENTRY

let Entry_Function = "";
function New_Entry() {
  Entry_Function = "Add";
  Open_EntryForm();
}

function Open_EntryForm() {
  $("#FORM_CONTAINER").transition("scale");
  $("#CALENDAR_CONTAINER").transition("scale");
  document.getElementById("CALENDAR_CONTAINER").style.display = "none";
  document.getElementById("BTN_NEW_ENTRY").style.display = "none";

  // $("#calendar").fullCalendar("refetchEvents");
  $(document).popup("hide all");
}

function Close_EntryForm() {
  document.getElementById("BTN_NEW_ENTRY").style.display = "inline";
  document.getElementById("FORM_CONTAINER").style.display = "none";
  $("#FORM_CONTAINER").transition("slide down");
  $("#CALENDAR_CONTAINER").transition("slide down");

  document.getElementById("ROW_START_DATE").style.display = "none";
  document.getElementById("ROW_END_DATE").style.display = "none";
  document.getElementById("ROW_DATE").style.display = "none";
  document.getElementById("ROW_START_TIME").style.display = "none";
  document.getElementById("ROW_END_TIME").style.display = "none";

  $("#ROW_START_DATE").removeClass("transition visible");
  $("#ROW_END_DATE").removeClass("transition visible");
  $("#ROW_DATE").removeClass("transition visible");
  $("#ROW_START_TIME").removeClass("transition visible");
  $("#ROW_END_TIME").removeClass("transition visible");

  ProjectName = "";
  ProjectCode = "";
  ProjectDate = "";
  StartTime = "";
  EndTime = "";
  StartDate = "";
  EndDate = "";
  Description = "";
  Status = "";
  StatusColor = "";
  DateMonth = "";
  DateYear = "";
  Duration = "";
  DaysOrHours = "";

  document.getElementById("INPUT_PROJECT_NAME").value = "";
  document.getElementById("INPUT_STATUS").value = "";
  document.getElementById("INPUT_DAYS_HOURS").value = "";
  $(".ui.selection.dropdown.fluid").dropdown("restore defaults");
  document.getElementById("INPUT_PROJECT_DATE").value = "";
  document.getElementById("INPUT_START_TIME").value = "";
  document.getElementById("INPUT_END_TIME").value = "";
  document.getElementById("INPUT_START_DATE").value = "";
  document.getElementById("INPUT_END_DATE").value = "";
  document.getElementById("INPUT_DESCRIPTION").value = "";
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
    $("#DIV_PROJECT_FORM").transition("slide down");
  }
  document.getElementById("DIV_NEWPROJECT_BTN").style.display = "none";
  document.getElementById("INPUT_NEWPROJECT_NAME").value = "";
  document.getElementById("INPUT_NEWPROJECT_CODE").value = "";
}

function Close_ProjectForm() {
  if ($("#DIV_PROJECT_FORM").hasClass("transition visible")) {
    document.getElementById("DIV_PROJECT_FORM").style.display = "none";
    $("#DIV_PROJECT_FORM").transition("slide down");
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

  Array_ProjectCode = [];
  Array_ProjectID = [];
  Array_ProjectName = [];
  Array_ProjectType = [];

  while (listItemsCollection.moveNext()) {
    var listItem = listItemsCollection.get_current();
    ID = listItem.get_item("ID");

    $("#TABLE_PROJECTS tbody").append(
      "<tr style='display: table-row;'>" +
        "<td align='left' class=' '>" +
        listItem.get_item("Project_x0020_Code") +
        "</td>" +
        "<td align='left'  > " +
        listItem.get_item("Project_x0020_Name") +
        "</td>" +
        "<td class='RightContents'>" +
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
      "<div class='item' " +
        "data-value='" +
        listItem.get_item("Project_x0020_Code") +
        "'>" +
        listItem.get_item("Project_x0020_Name") +
        "</div>"
    );

    $("#MENU_FILTER_PROJECT_NAME").append(
      "<div class='item' " +
        "data-value='" +
        listItem.get_item("Project_x0020_Name") +
        "'>" +
        listItem.get_item("Project_x0020_Name") +
        "</div>"
    );

    Array_ProjectID.push(listItem.get_item("ID"));
    Array_ProjectName.push(listItem.get_item("Project_x0020_Name"));
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

  $("#DIV_INPUT_FILTER_PROJECT_NAME").dropdown({
    onChange: function(val) {
      search_project_name = val;
      if (search_status === "" && search_project_name !== "") {
        RetrieveEntries("", search_project_name);
      } else if (search_status !== "" && search_project_name !== "") {
        RetrieveEntries(search_status, search_project_name);
      }
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
      "<Value Type='Number'>1</Value></Geq></Where><OrderBy><FieldRef Name='ID' Ascending='true' /></OrderBy></Query></View>"
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
    swal("Oops...", "Please enter a project name");
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

//------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------

function Remove_Error_Class(element) {
  $(
    "#" +
      $(element)
        .parent()
        .attr("id")
  ).removeClass("error");
}

//------------------------------------------------------------------------------------------------------------------------------------------------

//========================================================================================================================

// ENTRY VARIABLES

// FORM VARIABLES
var ProjectName = "";
var ProjectCode = "";
var ProjectDate = "";
var StartTime = "";
var EndTime = "";
var StartDate = "";
var EndDate = "";
var Description = "";
var Status = "";
var StatusColor = "";
var DateMonth = "";
var DateYear = "";
var Duration = "";
var DaysOrHours = "";

// ENTRIES
var Entries = [];

// DELETE && EDIT
var SelectedEntry_ID = "";

// UPDATE STATUS
var new_Status = "";

// SEARCH
var search_project = "";
var search_status = "";
var search_project_name = "";

//========================================================================================================================
// CREATE ENTRY

function Add_Entry() {
  var item = {
    __metadata: { type: "SP.Data.Project_x005f_CalendarListItem" },
    LI_ProjectName: ProjectName,
    LI_ProjectCode: ProjectCode,
    LI_ProjectDate: ProjectDate,
    LI_StartTime: StartTime,
    LI_EndTime: EndTime,
    LI_StartDate: StartDate,
    LI_EndDate: EndDate,
    LI_Description: Description,
    LI_Status: Status,
    LI_StatusColor: StatusColor,
    LI_Duration: Duration,
    LI_DaysOrHours: DaysOrHours,
    LI_DateMonth: DateMonth,
    LI_DateYear: DateYear
  };
  $.ajax({
    url:
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/web/lists/getbytitle('Project_Calendar')/items",
    type: "POST",
    contentType: "application/json;odata=verbose",
    data: JSON.stringify(item),
    headers: {
      Accept: "application/json;odata=verbose",
      "X-RequestDigest": $("#__REQUESTDIGEST").val()
    },
    success: function(data) {
      swal({
        type: "success",
        title: "Entry has been added",
        showConfirmButton: false,
        timer: 900
      }).catch(swal.noop);
      Close_EntryForm();

      RetrieveEntries("Load All", "");
    },
    error: function(error) {
      alert(JSON.stringify(error));
    }
  });
}

function Edit_Entry() {
  var item = {
    __metadata: { type: "SP.Data.Project_x005f_CalendarListItem" },
    LI_ProjectName: ProjectName,
    LI_ProjectCode: ProjectCode,
    LI_ProjectDate: ProjectDate,
    LI_StartTime: StartTime,
    LI_EndTime: EndTime,
    LI_StartDate: StartDate,
    LI_EndDate: EndDate,
    LI_Description: Description,
    LI_Status: Status,
    LI_StatusColor: StatusColor,
    LI_Duration: Duration,
    LI_DaysOrHours: DaysOrHours,
    LI_DateMonth: DateMonth,
    LI_DateYear: DateYear
  };

  $.ajax({
    url:
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/web/lists/GetByTitle('Project_Calendar')/items(" +
      SelectedEntry_ID +
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
        title: "Entry has been updated",
        showConfirmButton: false,
        timer: 900
      }).catch(swal.noop);
      Close_EntryForm();

      RetrieveEntries("Load All", "");
    },
    error: function(error) {
      alert(JSON.stringify(error));
    }
  });
}

function Update_Entry_Status() {
  var new_StatusColor = "";

  switch (new_Status) {
    case "To Be Done":
      new_StatusColor = "#D01919";
      break;
    case "In Progress":
      new_StatusColor = "#F26202";
      break;
    case "Completed":
      new_StatusColor = "#16AB39";
      break;
    default:
      new_StatusColor = "";
  }

  var item = {
    __metadata: { type: "SP.Data.Project_x005f_CalendarListItem" },
    LI_Status: new_Status,
    LI_StatusColor: new_StatusColor
  };

  $.ajax({
    url:
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/web/lists/GetByTitle('Project_Calendar')/items(" +
      SelectedEntry_ID +
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
        title: "Status has been updated",
        showConfirmButton: false,
        timer: 900
      }).catch(swal.noop);

      RetrieveEntries("Load All", "");
    },
    error: function(error) {
      alert(JSON.stringify(error));
    }
  });
}

// DELETE ENTRY

function Delete_Entry() {
  swal({
    title: "Remove Entry?",
    text: "Entry will be removed from the calendar",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#1678c2",
    cancelButtonColor: "#f26202",
    confirmButtonText: "Yes, remove it!"
  }).then(result => {
    $.ajax({
      url:
        _spPageContextInfo.webAbsoluteUrl +
        "/_api/web/lists/getbytitle('Project_Calendar')/items(" +
        SelectedEntry_ID +
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
        RetrieveEntries("Load All", "");
      },
      error: () => {
        console.log("error");
      }
    });
  });
}

function RetrieveEntries(Filter, ProjectName) {
  var url = "";

  if (Filter == "Load All" && ProjectName == "") {
    url =
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/web/lists/GetByTitle('Project_Calendar')/items?$select=" +
      "ID,LI_StartDate,LI_EndDate,LI_StartTime,LI_Status,LI_DaysOrHours,LI_StatusColor,LI_EndTime,LI_ProjectName,LI_ProjectCode,LI_ProjectDate,LI_Description,LI_Duration," +
      "Author/Title,Editor/Title&$expand=Author/Title,Editor/Title";
  } else if (Filter == "To Be Done" && ProjectName == "") {
    url =
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/web/lists/GetByTitle('Project_Calendar')/items?$select=" +
      "ID,LI_StartDate,LI_EndDate,LI_StartTime,LI_Status,LI_DaysOrHours,LI_StatusColor,LI_EndTime,LI_ProjectName,LI_ProjectCode,LI_ProjectDate,LI_Description,LI_Duration," +
      "Author/Title,Editor/Title&$expand=Author/Title,Editor/Title&$filter=LI_Status eq 'To Be Done'";
  } else if (Filter == "In Progress" && ProjectName == "") {
    url =
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/web/lists/GetByTitle('Project_Calendar')/items?$select=" +
      "ID,LI_StartDate,LI_EndDate,LI_StartTime,LI_Status,LI_DaysOrHours,LI_StatusColor,LI_EndTime,LI_ProjectName,LI_ProjectCode,LI_ProjectDate,LI_Description,LI_Duration," +
      "Author/Title,Editor/Title&$expand=Author/Title,Editor/Title&$filter=LI_Status eq 'In Progress'";
  } else if (Filter == "Completed" && ProjectName == "") {
    url =
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/web/lists/GetByTitle('Project_Calendar')/items?$select=" +
      "ID,LI_StartDate,LI_EndDate,LI_StartTime,LI_Status,LI_DaysOrHours,LI_StatusColor,LI_EndTime,LI_ProjectName,LI_ProjectCode,LI_ProjectDate,LI_Description,LI_Duration," +
      "Author/Title,Editor/Title&$expand=Author/Title,Editor/Title&$filter=LI_Status eq 'Completed'";
  } else if (Filter == "To Be Done" && ProjectName != "") {
    url =
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/web/lists/GetByTitle('Project_Calendar')/items?$select=" +
      "ID,LI_StartDate,LI_EndDate,LI_StartTime,LI_Status,LI_DaysOrHours,LI_StatusColor,LI_EndTime,LI_ProjectName,LI_ProjectCode,LI_ProjectDate,LI_Description,LI_Duration," +
      "Author/Title,Editor/Title&$expand=Author/Title,Editor/Title&$filter=((LI_Status eq 'To Be Done') and (LI_ProjectName eq '" +
      search_project_name +
      "'))";
  } else if (Filter == "In Progress" && ProjectName != "") {
    url =
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/web/lists/GetByTitle('Project_Calendar')/items?$select=" +
      "ID,LI_StartDate,LI_EndDate,LI_StartTime,LI_Status,LI_DaysOrHours,LI_StatusColor,LI_EndTime,LI_ProjectName,LI_ProjectCode,LI_ProjectDate,LI_Description,LI_Duration," +
      "Author/Title,Editor/Title&$expand=Author/Title,Editor/Title&$filter=((LI_Status eq 'In Progress') and (LI_ProjectName eq '" +
      search_project_name +
      "'))";
  } else if (Filter == "Completed" && ProjectName != "") {
    url =
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/web/lists/GetByTitle('Project_Calendar')/items?$select=" +
      "ID,LI_StartDate,LI_EndDate,LI_StartTime,LI_Status,LI_DaysOrHours,LI_StatusColor,LI_EndTime,LI_ProjectName,LI_ProjectCode,LI_ProjectDate,LI_Description,LI_Duration," +
      "Author/Title,Editor/Title&$expand=Author/Title,Editor/Title&$filter=((LI_Status eq 'Completed') and (LI_ProjectName eq '" +
      search_project_name +
      "'))";
  } else if (Filter == "" && ProjectName != "") {
    url =
      _spPageContextInfo.webAbsoluteUrl +
      "/_api/web/lists/GetByTitle('Project_Calendar')/items?$select=" +
      "ID,LI_StartDate,LI_EndDate,LI_StartTime,LI_Status,LI_DaysOrHours,LI_StatusColor,LI_EndTime,LI_ProjectName,LI_ProjectCode,LI_ProjectDate,LI_Description,LI_Duration," +
      "Author/Title,Editor/Title&$expand=Author/Title,Editor/Title&$filter=LI_ProjectName eq '" +
      ProjectName +
      "'";
  }

  $.ajax({
    url: url,

    type: "GET",

    headers: {
      accept: "application/json;odata=verbose",

      "content-type": "application/json;odata=verbose"
    },

    // success: onQuerySucceeded,

    success: function(data) {
      DataResult = data.d.results;
      // console.log(DataResult);

      Entries = [];
      for (i = 0; i < DataResult.length; i++) {
        // console.log(DataResult[i].ID +" ---> "+DataResult[i].LI_ProjectName);

        var bg = "";
        if (DataResult[i].LI_Status === "To Be Done") {
          bg = "#ffebee";
        } else if (DataResult[i].LI_Status === "In Progress") {
          bg = "#fff3e0";
        } else if (DataResult[i].LI_Status === "Completed") {
          bg = "#c8e6c9";
        }

        var startTime = DataResult[i].LI_StartTime;
        var endTime = DataResult[i].LI_EndTime;
        var allday = false;

        if (
          DataResult[i].LI_DaysOrHours === "More than a day" ||
          DataResult[i].LI_DaysOrHours === "One day"
        ) {
          startTime = "12:00 AM";
          endTime = "11:00 PM";

          allday = true;
        }

        var startDate = moment(
          DataResult[i].LI_StartDate + " " + startTime
        ).format("YYYY-MM-DD hh:mm");
        var endDate = moment(DataResult[i].LI_EndDate + " " + endTime).format(
          "YYYY-MM-DD hh:mm"
        );

        if (DataResult[i].LI_DaysOrHours === "More than a day") {
          var new_endDate = new Date(DataResult[i].LI_EndDate);
          new_endDate.setDate(new_endDate.getDate() + 1);
          endDate = new_endDate;
        }

        var EntryDetails =
          "<div class='ui flowing custom popup' >" +
          "<div class='RightContents'>" +
          '<a class="ui icon red circular basic button" onclick="ClosePoups()">' +
          '<i class="close red icon"></i>' +
          " </a>" +
          "</div>" +
          '<div class="ui grid POPUP" style="width:250px !important">' +
          '<div class="column">' +
          '<p><b>Start: </b></p><p style="color:#1678C2"> ' +
          DataResult[i].LI_StartDate +
          " " +
          startTime +
          "</p><br/>" +
          '<p><b>End: </b></p><p style="color:#1678C2"> ' +
          DataResult[i].LI_EndDate +
          " " +
          endTime +
          "</p><br/>" +
          '<p><b>Created By: </b></p><p style="color:#1678C2"> ' +
          DataResult[i].Author.Title +
          "</p><br/>" +
          '<p><b>Edited By: </b></p><p style="color:#1678C2"> ' +
          DataResult[i].Editor.Title +
          "</p><br/>" +
          '<p><b>Update Status: </b></p><p style="color:#1678C2"> ' +
          '<div class="ui right fluid tiny action input col s12" >' +
          '<div class="ui selection dropdown fluid NEW_STATUS"  id="DIV_INPUT_NEW_STATUS">' +
          '<input type="hidden" id="INPUT_NEW_STATUS" >' +
          '<i class="dropdown icon"></i>' +
          '<div class="default text">Status</div>' +
          '<div class="menu">' +
          '<div class="item" data-value="To Be Done">' +
          '<div class="ui red empty circular label"></div>To Be Done' +
          " </div>" +
          '<div class="item" data-value="In Progress">' +
          '<div class="ui orange empty circular label"></div>In Progress' +
          "</div>" +
          '<div class="item" data-value="Completed">' +
          '<div class="ui green empty circular label"></div>Completed</div>' +
          "</div>" +
          "</div>" +
          '<a class="ui icon button" id="BTN_PROJECTS" onclick="Update_Status_Clicked()">' +
          '<i class="ui save blue outline icon"></i>' +
          "</a>" +
          "</div>" +
          "<br/>" +
          '<div class="ui small fluid icon buttons">' +
          '<a class="ui button" onclick="Open_View_Entry_Modal()"><i class="share square outline icon"></i>&nbsp View</a>' +
          '<a class="ui button" onclick="Edit_Entry_Clicked()"><i class="edit icon"></i>&nbsp Edit</a>' +
          '<a class="ui button" onclick="Delete_Entry()"><i class="trash alternate outline icon"></i>&nbsp Remove</a>' +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>";

        Entries.push({
          id: DataResult[i].ID,
          title: DataResult[i].LI_ProjectName,
          start: startDate,
          end: endDate,
          borderColor: DataResult[i].LI_StatusColor,
          color: "Transparent",
          textColor: "#616161",
          projectName: DataResult[i].LI_ProjectName,
          projectDate: DataResult[i].LI_ProjectDate,
          startTime: DataResult[i].LI_StartTime,
          daysHours: DataResult[i].LI_DaysOrHours,
          endTime: DataResult[i].LI_EndTime,
          startDate: DataResult[i].LI_StartDate,
          endDate: DataResult[i].LI_EndDate,
          backgroundColor: bg,
          allDay: allday,
          createdBy: DataResult[i].Author.Title,
          modifiedBy: DataResult[i].Editor.Title,
          status: DataResult[i].LI_Status,
          description: DataResult[i].LI_Description,
          duration: DataResult[i].LI_Duration,
          entryDetails: EntryDetails
        });
      }

      Set_Calendar();
    },

    error: onQueryFailed
  });
}

//========================================================================================================================

// FORM VALIDATION
function Validate_Add_Edit_Entry() {
  ProjectDate = document.getElementById("INPUT_PROJECT_DATE").value;
  StartTime = document.getElementById("INPUT_START_TIME").value;
  EndTime = document.getElementById("INPUT_END_TIME").value;
  StartDate = document.getElementById("INPUT_START_DATE").value;
  EndDate = document.getElementById("INPUT_END_DATE").value;
  Description = document.getElementById("INPUT_DESCRIPTION").value;
  Status = document.getElementById("INPUT_STATUS").value;

  switch (Status) {
    case "To Be Done":
      StatusColor = "#D01919";
      break;
    case "In Progress":
      StatusColor = "#F26202";
      break;
    case "Completed":
      StatusColor = "#16AB39";
      break;
    default:
      StatusColor = "";
  }

  DaysOrHours = document.getElementById("INPUT_DAYS_HOURS").value;

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

  if (ProjectCode === "") {
    swal("Oops...", "Please select a project", "error");
    $("#DIV_INPUT_PROJECT_NAME").addClass("error");
  } else {
    if (Status === "") {
      swal("Oops...", "Please provide the Status", "error");
      $("#DIV_INPUT_STATUS").addClass("error");
    } else {
      if (DaysOrHours === "") {
        swal("Oops...", "DAYS/HOURS Field is empty", "error");
        $("#DIV_INPUT_DAYS_HOURS").addClass("error");
      } else {
        if ($("#INPUT_DAYS_HOURS").val() == "Less than a day") {
          if (
            $("#INPUT_PROJECT_DATE").val() === "" ||
            $("#INPUT_START_TIME").val() === "" ||
            $("#INPUT_END_TIME").val() === ""
          ) {
            swal("Oops...", "Required field is empty", "error");
            switch ("") {
              case ProjectDate:
                $("#CONTAINER_PROJECT_DATE").addClass("error");
              case StartTime:
                $("#CONTAINER_START_TIME").addClass("error");
              case EndTime:
                $("#CONTAINER_END_TIME").addClass("error");
            }
          } else {
            // CREATE/UPDATE CODE

            // LESS THAN A DAY
            var Start = new Date(Date.parse("01/01/2018 " + StartTime));
            var End = new Date(Date.parse("01/01/2018 " + EndTime));
            if (End < Start) {
              swal(
                "Oops...",
                "Start Time must be lesser than the End Time",
                "error"
              );
            } else {
              var startTime = moment(
                $("#INPUT_START_TIME").val(),
                "hh:mm:ss a"
              );
              var endTime = moment($("#INPUT_END_TIME").val(), "hh:mm:ss a");

              var totalHours = endTime.diff(startTime, "hours");
              var totalMinutes = endTime.diff(startTime, "minutes");
              var clearMinutes = totalMinutes % 60;
              Duration = totalHours + " hours and " + clearMinutes + " minutes";

              StartDate = $("#INPUT_PROJECT_DATE").val();
              EndDate = $("#INPUT_PROJECT_DATE").val();

              var date = new Date(
                document.getElementById("INPUT_PROJECT_DATE").value
              );
              var ProjectMonth = date.getMonth() + 1;
              month = months[parseInt(ProjectMonth) - 1];
              year = date.getFullYear();
              DateMonth = month.toString();
              DateYear = year.toString();

              switch (Entry_Function) {
                case "Add":
                  Add_Entry();
                  break;
                case "Edit":
                  Edit_Entry();
                  break;
              }
            }
          }
        }
        if ($("#INPUT_DAYS_HOURS").val() == "One day") {
          if (ProjectDate === "") {
            swal("Oops...", "Required field is empty", "error");
            if (ProjectDate === "") {
              $("#CONTAINER_PROJECT_DATE").addClass("error");
            }
          } else {
            // CREATE/UPDATE CODE

            // ONE DAY
            Duration = "1 Day";
            StartDate = $("#INPUT_PROJECT_DATE").val();
            EndDate = $("#INPUT_PROJECT_DATE").val();

            StartTime = "8:00 AM";
            EndTime = "5:00 PM";

            var date = new Date(
              document.getElementById("INPUT_PROJECT_DATE").value
            );
            var ProjectMonth = date.getMonth() + 1;
            month = months[parseInt(ProjectMonth) - 1];
            year = date.getFullYear();
            DateMonth = month.toString();
            DateYear = year.toString();

            switch (Entry_Function) {
              case "Add":
                Add_Entry();
                break;
              case "Edit":
                Edit_Entry();
                break;
            }
          }
        } else if ($("#INPUT_DAYS_HOURS").val() === "More than a day") {
          if (
            $("#INPUT_START_DATE").val() === "" ||
            $("#INPUT_END_DATE").val() === ""
          ) {
            swal("Oops...", "Required field is empty", "error");
            switch ("") {
              case StartDate:
                $("#CONTAINER_START_DATE").addClass("error");
              case EndDate:
                $("#CONTAINER_END_DATE").addClass("error");
            }
          } else {
            // CREATE/UPDATE CODE

            // MORE THAN A DAY
            if (EndDate <= StartDate) {
              swal(
                "Oops...",
                "Start Date must be lesser/higher than the End Date",
                "error"
              );
            } else {
              dt1 = new Date($("#INPUT_START_DATE").val());
              dt2 = new Date($("#INPUT_END_DATE").val());
              total = Math.floor(
                (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
                  Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
                  (1000 * 60 * 60 * 24)
              );

              Duration = total + " Days";
              if (total === 1) {
                Duration = total + " Day";
              }

              var date = new Date(
                document.getElementById("INPUT_START_DATE").value
              );
              var ProjectMonth = date.getMonth() + 1;
              month = months[parseInt(ProjectMonth) - 1];
              year = date.getFullYear();
              DateMonth = month.toString();
              DateYear = year.toString();

              ProjectDate = $("#INPUT_START_DATE").val();
              StartTime = "8:00 AM";
              EndTime = "5:00 PM";

              switch (Entry_Function) {
                case "Add":
                  Add_Entry();
                  break;
                case "Edit":
                  Edit_Entry();
                  break;
              }
            }
          }
        }
      }
    }
  }
}

//-----------------------------------------------------------------------------------

// function DeleteEntry_Success

//------------------------------------------------------------------------------------
// EDIT ENTRY
var v_createdBy = "";
var v_project = "";
var v_status = "";
var v_days_hours = "";
var v_description = "";
var v_date = "";
var v_startTime = "";
var v_endTime = "";
var v_startDate = "";
var v_endDate = "";
var v_description = "";
var v_duration = "";

function Edit_Entry_Clicked() {
  $(".ui.dropdown").dropdown("refresh");

  $("#DIV_INPUT_PROJECT_NAME").dropdown("set selected", v_project);
  $("#DIV_INPUT_STATUS").dropdown("set selected", v_status);
  $("#DIV_INPUT_DAYS_HOURS").dropdown("set selected", v_days_hours);
  document.getElementById("INPUT_PROJECT_DATE").value = v_date;
  document.getElementById("INPUT_START_TIME").value = v_startTime;
  document.getElementById("INPUT_END_TIME").value = v_endTime;
  document.getElementById("INPUT_START_DATE").value = v_startDate;
  document.getElementById("INPUT_END_DATE").value = v_startDate;
  document.getElementById("INPUT_DESCRIPTION").value = v_description;

  Entry_Function = "Edit";
  Open_EntryForm();
  // $(document).popup("hide all");
}

function Update_Status_Clicked() {
  if (new_Status === "") {
    swal("Oops...", "Please selected a status");
  } else {
    swal({
      title: "Update Status?",
      text: "Entry Status Will Be Updated",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1678c2",
      cancelButtonColor: "#f26202",
      confirmButtonText: "Yes, update it!"
    }).then(result => {
      Update_Entry_Status();
    });
  }
}

// RELOAD ALL ENTRIES
function Reload_All_Entries() {
  $("#DIV_INPUT_FILTER_PROJECT_NAME").dropdown("restore defaults");
  $("#DROPDOWN_FILTERBYTAGS").dropdown("restore defaults");

  RetrieveEntries("Load All", "");
}

function Open_View_Entry_Modal() {
  $("#MODAL_VIEW_ENTRY")
    .modal({
      centered: false
    })
    .modal("show");

  $(document).popup("hide all");
}

var resizePopup = function() {
  $(".ui.popup").css("max-height", $(window).height());
};

$(window).resize(function(e) {
  resizePopup();
});
