$(document).ready(function() {
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

  // setTimeout('window.location.reload();', 120000);

  $("select").material_select();
  $(".collapsible").collapsible();
  $(".tooltipped").tooltip({ delay: 30 });
  $(".modal").modal();
  $(".tabs").tabs();
  // $(".button-collapse").sideNav();

  $(".timepicker").pickatime({
    default: "now", // Set default time
    fromnow: 0, // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: true, // Use AM/PM or 24-hour format
    donetext: "OK", // text for done-button
    cleartext: "Clear", // text for clear-button
    canceltext: "Cancel", // Text for cancel-button
    autoclose: true, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function() {} //Function for after opening timepicker
  });

  $(".datepicker").pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 100, // Creates a dropdown of 15 years to control year,
    today: "Today",
    clear: "Clear",
    close: "Ok",
    closeOnSelect: true,
    format: "mm/dd/yyyy"
  });

  $(".button-collapse").sideNav({
    menuWidth: 600, // Default is 240
    edge: "right", // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });

  $(".dropdown-button").dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: false, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: "right", // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  });

  $(".ui.dropdown").dropdown();

  $(".ui.modal.fullscreen.TURNOVERDOCUMENT").modal();

  Get_Projects();

  $("#INPUT_ITEM_QUANTITY").keyup(function() {
    if (
      $("#INPUT_ITEM_QUANTITY").val() != "" &&
      $("#INPUT_ITEM_PRICE").val() != ""
    ) {
      var price = $("#INPUT_ITEM_PRICE").val();
      var quantity = $("#INPUT_ITEM_QUANTITY").val();
      $("#INPUT_ITEM_TOTAL").val(parseFloat(price) * parseInt(quantity));
    } else {
      $("#INPUT_ITEM_TOTAL").val("");
    }
  });

  $("#INPUT_ITEM_PRICE").keyup(function() {
    if ($("#INPUT_ITEM_PRICE").val() != "" && $("#INPUT_ITEM_QUANTITY").val()) {
      var price = $("#INPUT_ITEM_PRICE").val();
      var quantity = $("#INPUT_ITEM_QUANTITY").val();
      $("#INPUT_ITEM_TOTAL").val(parseFloat(price) * parseInt(quantity));
    } else {
      $("#INPUT_ITEM_TOTAL").val("");
    }
  });

  //---------------------------------------------------------------------------------------------------
}); //---------------------------------------END OF DOCUMENT READY FUNCTION----------------------------------------------------------

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

//-----------------------------------------------------------------------------------------------------------------
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

function Open_Modal_Items() {
  $("#MODAL_ITEMS")
    .modal({
      closable: false,
      centered: false
    })
    .modal("show");
}
function Close_Modal_Items() {
  $("#MODAL_ITEMS")
    .modal({
      closable: false,
      centered: false
    })
    .modal("hide");

  document.getElementById("INPUT_ITEM").value = "";
  document.getElementById("INPUT_ITEM_QUANTITY").value = "";
  document.getElementById("INPUT_ITEM_UNIT").value = "";
  document.getElementById("INPUT_ITEM_PRICE").value = "";
  document.getElementById("INPUT_ITEM_TOTAL").value = "";

  TotalPrice();
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

// GLOBAL VARIABLES ----------------------------------------------------------------------------

var loginName;
var email;

var userProfileProperties;
var targetUser;

var LastID;
var Project_Function;
var Array_ProjectName = [];
var Array_ProjectCode = [];
var Array_ProjectID = [];

var Selected_ProjectID = "";
var Selected_ProjectName = "";
var Selected_ProjectType = "";
var Selected_ProjectCode = "";

var current_user = "";
var Requestor = "";
var Approval_Stage = "";
var Set_Approver = "";
var Approval = "";
var Finance_Status = "";
var Request_Status = "";

//--------------------------------------------------------------------------------------------
// GLOBAL FUNCTIONS
function isNumberKey(txt, evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode == 46) {
    //Check if the text already contains the . character
    if (txt.value.indexOf(".") === -1) {
      return true;
    } else {
      return false;
    }
  } else {
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  }
  return true;
}

function onQueryFailed(sender, args) {
  alert("Request failed. " + args.get_message() + "\n" + args.get_stackTrace());
}

function onQueryFailed(sender, args) {
  alert("Request failed. " + args.get_message() + "\n" + args.get_stackTrace());
}
//-------------------------------------------------------------------------------------------
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
        // "<td align='left' class=' '>" +
        // listItem.get_item("Project_x0020_Type") +
        // "</td>" +
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

    Array_ProjectID.push(listItem.get_item("ID"));
    Array_ProjectName.push(listItem.get_item("Project_x0020_Name"));
    // Array_ProjectType.push(listItem.get_item("Project_x0020_Type"));
    Array_ProjectCode.push(listItem.get_item("Project_x0020_Code"));
  }

  for (var i = 0; i <= Array_ProjectName.length - 1; i++) {
    $("#MENU_PROJECT_NAME").append(
      "<div class='item' data-value='" +
        Array_ProjectName[i] +
        "'>" +
        Array_ProjectName[i] +
        "</div>"
    );
  }

  $("#DIV_INPUT_PROJECT_NAME").dropdown({
    onChange: function(val) {
      $("#INPUT_PROJECT_CODE").val(
        Array_ProjectCode[Array_ProjectName.indexOf(val)]
      );

      // $("#INPUT_PROJECT_TYPE").val(
      //   Array_ProjectType[Array_ProjectName.indexOf(val)]
      // );

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

  Get_PurchaseRequest_TO_Edit();
  // ExecuteOrDelayUntilScriptLoaded(Get_PurchaseRequest_TO_Edit,'sp.js');
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
  // oListItem_AddProject.set_item("Project_x0020_Type", ProjectType);
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
var oListItem_Update_Project;
function Edit_Project(ProjectName, ProjectType, ProjectCode) {
  var siteUrl = "https://intranet.houseofit.com.au/";
  var clientContext = new SP.ClientContext(siteUrl);
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("HOIT Projects");

  this.oListItem_Update_Project = oList.getItemById(Project_ID);

  oListItem_Update_Project.set_item("Project_x0020_Name", ProjectName);
  // oListItem_Update_Project.set_item("Project_x0020_Type", ProjectType);
  oListItem_Update_Project.set_item("Project_x0020_Code", ProjectCode);

  oListItem_Update_Project.update();
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
// ADD PROJECT RESOURCES PURCHASE REQUEST -------------------------------------------------------------------------------------------------

var oListItem_PurchaseRequest;

function Edit_PurchaseRequest() {
  JSRequest.EnsureSetup();
  var itemId = JSRequest.QueryString["ID"];

  var siteUrl = "https://intranet.houseofit.com.au/";
  var clientContext = new SP.ClientContext(siteUrl);
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("Project Resources Purchasing Request");

  this.oListItem_PurchaseRequest = oList.getItemById(itemId);

  oListItem_PurchaseRequest.set_item(
    "Requestor_x0027_s_x0020_Name",
    document.getElementById("INPUT_REQUESTOR").value
  );
  oListItem_PurchaseRequest.set_item(
    "Department",
    document.getElementById("INPUT_DEPARTMENT").value
  );
  oListItem_PurchaseRequest.set_item(
    "Description",
    document.getElementById("INPUT_DESCRIPTION").innerHTML
  );
  oListItem_PurchaseRequest.set_item(
    "Estimated_x0020_Price",
    document.getElementById("INPUT_TOTAL_PRICE").value
  );
  oListItem_PurchaseRequest.set_item(
    "Purpose",
    document.getElementById("INPUT_PURPOSE").value
  );
  oListItem_PurchaseRequest.set_item(
    "Date_x0020_Needed",
    document.getElementById("INPUT_DATE_DEEDED").value
  );
  oListItem_PurchaseRequest.set_item(
    "Check_x002f_Cash_x0020_Issued_x0",
    document.getElementById("INPUT_ISSUED_TO").value
  );
  oListItem_PurchaseRequest.set_item(
    "Project_x0020_Name",
    Selected_ProjectName
  );
  oListItem_PurchaseRequest.set_item(
    "Project_x0020_Code",
    Selected_ProjectCode
  );
  oListItem_PurchaseRequest.set_item(
    "Project_x0020_Type",
    document.getElementById("INPUT_PROJECT_TYPE").value
  );
  oListItem_PurchaseRequest.set_item(
    "Approval",
    document.getElementById("INPUT_APPROVAL").value
  );
  oListItem_PurchaseRequest.set_item(
    "Finance_x0020_Status",
    document.getElementById("INPUT_FINANCE_STATUS").value
  );
  // oListItem_PurchaseRequest.set_item(
  //   "Request_x0020_Status",
  //   document.getElementById("INPUT_REQUEST_STATUS").value
  // );

  oListItem_PurchaseRequest.set_item("Project_x0020_ID", Selected_ProjectID);

  if (
    Approval_Stage === "Approval_Stage" &&
    document.getElementById("INPUT_APPROVAL").value === "Approved"
  ) {
    oListItem_PurchaseRequest.set_item("Approval_Stage", "Approved");
  } else if (
    Approval_Stage === "Approval_Stage" &&
    document.getElementById("INPUT_APPROVAL").value === "Rejected"
  ) {
    oListItem_PurchaseRequest.set_item("Approval_Stage", "Rejected");
  } else if (
    Approval_Stage === "Approved" &&
    document.getElementById("INPUT_FINANCE_STATUS").value === "Closed"
  ) {
    oListItem_PurchaseRequest.set_item("Approval_Stage", "Finance_Closed");
  } else if (
    Approval_Stage === "Finance_Closed" &&
    document.getElementById("INPUT_FINANCE_STATUS").value === "Closed"
  ) {
    oListItem_PurchaseRequest.set_item("Approval_Stage", "Finance_Closed");
  }

  oListItem_PurchaseRequest.update();
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.Edit_PurchaseRequest_Succeeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}
function Edit_PurchaseRequest_Succeeded() {
  swal({
    type: "success",
    title: "Purchase Request has been Updated",
    showConfirmButton: false,
    timer: 60000
  }).catch(swal.noop);
  setInterval(function() {
    window.location.href =
      "https://intranet.houseofit.com.au/Lists/Project%20Resources%20Purchasing%20Request/My%20Requests.aspx";
  }, 300);
}

//---------------------------------------------------------------------------------

function Validate_Inputs() {
  if (
    Selected_ProjectName == "" ||
    document.getElementById("INPUT_PROJECT_TYPE").value == "" ||
    document.getElementById("INPUT_DESCRIPTION").value == "" ||
    document.getElementById("INPUT_TOTAL_PRICE").value == "" ||
    document.getElementById("INPUT_PURPOSE").value == "" ||
    document.getElementById("INPUT_DATE_DEEDED").value == "" ||
    document.getElementById("INPUT_ISSUED_TO").value == ""
  ) {
    swal("Oops...", "Please Fill all the fields", "error");
  } else {
    if (
      Approval_Stage === "Approval_Stage" &&
      document.getElementById("INPUT_APPROVAL").value !== "" &&
      document.getElementById("INPUT_FINANCE_STATUS").value === ""
    ) {
      Edit_PurchaseRequest();
    } else if (
      Approval_Stage === "Approval_Stage" &&
      document.getElementById("INPUT_APPROVAL").value === ""
    ) {
      swal("Oops...", "Please select from the approval field", "error");
    } else if (
      Approval_Stage === "Approved" &&
      document.getElementById("INPUT_APPROVAL").value === "Approved" &&
      document.getElementById("INPUT_FINANCE_STATUS").value !== ""
    ) {
      Edit_PurchaseRequest();
    } else if (
      Approval_Stage === "Approved" &&
      document.getElementById("INPUT_APPROVAL").value === "Approved" &&
      document.getElementById("INPUT_FINANCE_STATUS").value === ""
    ) {
      swal("Oops...", "Please select from the finance status field", "error");
    }
  }
}

// RETRIEVE LIST ITEM ----------------------------------------------------------------------------------

var Item_To_Edit;
function Get_PurchaseRequest_TO_Edit(item) {
  JSRequest.EnsureSetup();
  var itemId = JSRequest.QueryString["ID"];

  var clientContext = new SP.ClientContext(
    "https://intranet.houseofit.com.au/"
  );
  var oList = clientContext
    .get_web()
    .get_lists()
    .getByTitle("Project Resources Purchasing Request");
  var camlQuery = new SP.CamlQuery();
  camlQuery.set_viewXml(
    "<View><Query><Where><Geq><FieldRef Name='ID'/>" +
      "<Value Type='Number'>" +
      itemId +
      "</Value></Geq></Where></Query><RowLimit>1</RowLimit></View>"
  );
  this.Get_Training_Items = oList.getItems(camlQuery);
  clientContext.load(Get_Training_Items);
  clientContext.executeQueryAsync(
    Function.createDelegate(this, this.Get_PurchaseRequest_TO_Edit_Suceeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}
function Get_PurchaseRequest_TO_Edit_Suceeded() {
  var listItemsCollection = Get_Training_Items.getEnumerator();
  var projname;
  while (listItemsCollection.moveNext()) {
    var listItem = listItemsCollection.get_current();
    $(".ui.selection.dropdown.item_status.col.s12.PROJECT_NAME").dropdown(
      "set selected",
      listItem.get_item("Project_x0020_Name")
    );

    $("#DIV_INPUT_PROJECT_TYPE").dropdown(
      "set selected",
      listItem.get_item("Project_x0020_Type")
    );

    Selected_ProjectName = listItem.get_item("Project_x0020_Name");

    $("#INPUT_PROJECT_CODE").val(listItem.get_item("Project_x0020_Code"));
    $("#INPUT_REQUESTOR").val(
      listItem.get_item("Requestor_x0027_s_x0020_Name")
    );
    $("#INPUT_DEPARTMENT").val(listItem.get_item("Department"));
    document.getElementById("INPUT_DESCRIPTION").innerHTML = listItem.get_item(
      "Description"
    );
    $("#INPUT_TOTAL_PRICE").val(listItem.get_item("Estimated_x0020_Price"));
    $("#INPUT_PURPOSE").val(listItem.get_item("Purpose"));
    $("#INPUT_DATE_DEEDED").val(listItem.get_item("Date_x0020_Needed"));
    $("#INPUT_ISSUED_TO").val(
      listItem.get_item("Check_x002f_Cash_x0020_Issued_x0")
    );

    $("#DIV_SET_APPROVER_DROPDOWN").dropdown(
      "set selected",
      listItem.get_item("Set_x0020_Approver")
    );

    $("#DIV_APPROVAL_DROPDOWN").dropdown(
      "set selected",
      listItem.get_item("Approval")
    );

    $("#DIV_FINANCE_STATUS_DROPDOWN").dropdown(
      "set selected",
      listItem.get_item("Finance_x0020_Status")
    );

    $("#DIV_REQUEST_STATUS_DROPDOWN").dropdown(
      "set selected",
      listItem.get_item("Request_x0020_Status")
    );

    current_user = listItem.get_item("Requestor_x0027_s_x0020_Name");

    Selected_ProjectName = listItem.get_item("Project_x0020_Name");
    $(".ui.selection.dropdown.item_status.col.s12.PROJECT_NAME").dropdown(
      "set selected",
      Selected_ProjectName
    );

    Requestor = listItem.get_item("Requestor_x0027_s_x0020_Name");
    Approval_Stage = listItem.get_item("Approval_Stage");
    Set_Approver = listItem.get_item("Set_x0020_Approver");
    Approval = listItem.get_item("Approval");
    Finance_Status = listItem.get_item("Finance_x0020_Status");
    Request_Status = listItem.get_item("Request_x0020_Status");

    console.log({
      Approval_Stage,
      Set_Approver,
      Approval,
      Finance_Status,
      Request_Status
    });
  }

  $(".ui.dropdown").dropdown();

  $("#BTN_OPEN_ITEM_FORM").click(function() {
    Item_Function = "Add";
    Open_Modal_Items();
  });

  $("a.BTN_DELETE_ITEM").click(function() {
    Delete_Item(document.getElementById(this.id));
    // alert(this.id);
  });

  $("a.BTN_EDIT_ITEM").click(function() {
    Edit_Item(document.getElementById(this.id));
  });

  swal({
    type: "success",
    title: "Request has been loaded",
    showConfirmButton: false,
    timer: 700
  }).catch(swal.noop);

  Get_User();
}

//GET CURRENT USER INFORMATION ----------------------------------------------------------------------------------------

function Get_User() {
  this.clientContext2 = new SP.ClientContext.get_current();
  this.oWeb = clientContext2.get_web();
  targetUser = this.oWeb.get_currentUser();
  this.clientContext2.load(targetUser);

  this.clientContext2.executeQueryAsync(
    Function.createDelegate(this, this.onQuerySucceeded),
    Function.createDelegate(this, this.onQueryFailed)
  );
}

function onQuerySucceeded() {
  var account = targetUser.get_loginName();
  targetUser_temp = account.substring(account.indexOf("|") + 10);
  targetUser = targetUser_temp;

  SP.SOD.executeOrDelayUntilScriptLoaded(
    getUserProperties,
    "SP.UserProfiles.js"
  );
}

function getUserProperties() {
  targetUser = "hoitcebu\\" + targetUser;
  // Replace the placeholder value with the target user's credentials.
  //alert(targetUser);

  // Get the current client context and PeopleManager instance.
  var clientContext = new SP.ClientContext.get_current();
  var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);

  // Specify the properties to retrieve and target user for the
  // UserProfilePropertiesForUser object.
  var profilePropertyNames = ["PreferredName", "Department", "Manager"];
  var userProfilePropertiesForUser = new SP.UserProfiles.UserProfilePropertiesForUser(
    clientContext,
    targetUser,
    profilePropertyNames
  );

  // Get user profile properties for the target user.
  // To get the value for only one user profile property, use the
  // getUserProfilePropertyFor method.
  userProfileProperties = peopleManager.getUserProfilePropertiesFor(
    userProfilePropertiesForUser
  );
  //alert(userProfileProperties );
  // Load the UserProfilePropertiesForUser object and send the request.
  clientContext.load(userProfilePropertiesForUser);
  clientContext.executeQueryAsync(onRequestSuccess, onQueryFailed);
}

// This function runs if the executeQueryAsync call succeeds.
function onRequestSuccess() {
  var CurrentUser = userProfileProperties[0];
  var department = userProfileProperties[1];
  var manager = userProfileProperties[2];

  if (
    CurrentUser != "Alin Florea" &&
    CurrentUser != "Artem Soukhomlinov" &&
    CurrentUser != "Artem Soukhomlinov | OffshoringTBOS.com" &&
    CurrentUser != "Fernando Durano Singson Jr." &&
    CurrentUser != "Ross Handley"
  ) {
    document.getElementById("BTN_PROJECTS").style.display = "none";
  }

  //--------------------------------------------------------------------
  //SHOW APPROVAL TAG

  console.log({ Requestor, CurrentUser });
  // APPROVAL STAGE
  if (Approval_Stage === "Approval_Stage" && Approval === null) {
    if (Set_Approver === "CEO") {
      if (
        CurrentUser !== "Artem Soukhomlinov" &&
        CurrentUser !== "Artem Soukhomlinov | OffshoringTBOS.com"
      ) {
        document.getElementById("TR_APPROVAL").style.display = "none";
        if (
          CurrentUser !== Requestor &&
          CurrentUser !== "Artem Soukhomlinov" &&
          CurrentUser !== "Artem Soukhomlinov | OffshoringTBOS.com"
        ) {
          document.getElementById("BTN_SAVE").style.display = "none";
        } else {
        }
      }
    } else if (Set_Approver === "AVP-SALES") {
      if (CurrentUser !== "Alin Florea") {
        document.getElementById("TR_APPROVAL").style.display = "none";

        if (CurrentUser !== Requestor && CurrentUser !== "Alin Florea") {
          document.getElementById("BTN_SAVE").style.display = "none";
        }
      }
    }

    document.getElementById("TR_FINANCE_STATUS").style.display = "none";
    // document.getElementById("TR_REQUEST_STATUS").style.display = "none";
  }
  // IF THE REQUEST WAS REJECTED BY THE SET APPROVER
  else if (Approval_Stage === "Approval_Stage" && Approval === "Rejected") {
    document.getElementById("BTN_SAVE").style.display = "none";
    document.getElementById("SPAN_REJECTED").style.display = "block";
    document.getElementById("DIV_APPROVAL").style.display = "none";
    document.getElementById("TR_FINANCE_STATUS").style.display = "none";
    // document.getElementById("TR_REQUEST_STATUS").style.display = "none";
  }
  // FINANCE STAGE
  else if (Approval_Stage === "Approved" && Approval === "Approved") {
    if (
      CurrentUser !== "Cherry Yurag" &&
      CurrentUser !== "Jestine Ann Lopezbaños" &&
      CurrentUser !== "Sarah Torrejos" &&
      CurrentUser !== "Ricelle Literatus"
    ) {
      document.getElementById("TR_FINANCE_STATUS").style.display = "none";
      document.getElementById("BTN_SAVE").style.display = "none";
    }

    document.getElementById("DIV_APPROVAL").style.display = "none";
    document.getElementById("SPAN_APPROVED").style.display = "block";
  } else if (Approval_Stage === "Finance_Closed" && Approval === "Approved") {
    document.getElementById("BTN_SAVE").style.display = "none";

    document.getElementById("DIV_APPROVAL").style.display = "none";
    document.getElementById("SPAN_APPROVED").style.display = "block";

    document.getElementById("DIV_FINANCE_STATUS").style.display = "none";
    document.getElementById("SPAN_FINANCE_CLOSED").style.display = "block";
  }

  //--------------------------------------------------------------------
}
//-----------------------------------------------------------------------------------------------------------------
// VALIDATE ADD ITEM

function Validate_Add_Edit_Item() {}

function Append_To_Table_Items() {
  if (
    document.getElementById("INPUT_ITEM").value == "" ||
    document.getElementById("INPUT_ITEM_QUANTITY").value == "" ||
    document.getElementById("INPUT_ITEM_UNIT").value == "" ||
    document.getElementById("INPUT_ITEM_PRICE").value == "" ||
    document.getElementById("INPUT_ITEM_TOTAL").value == ""
  ) {
    swal("Oops...", "Please fill all the fields!", "error");
  } else {
    if (Item_Function == "Add") {
      var trs = document.getElementsByTagName("tr");
      var RowID = 0;
      while (RowID < trs.length) {
        trs[RowID].id = "item-" + RowID;
        RowID++;
      }

      $("#TABLE_ITEMS tbody").append(
        "<tr id='item-" +
          RowID +
          "'>" +
          "<td class='i_item ' > " +
          document.getElementById("INPUT_ITEM").value +
          "</td>" +
          "<td class='i_quantity ' > " +
          document.getElementById("INPUT_ITEM_QUANTITY").value +
          "</td>" +
          "<td class='i_unit ' > " +
          document.getElementById("INPUT_ITEM_UNIT").value +
          "</td>" +
          "<td class='i_price ' > " +
          document.getElementById("INPUT_ITEM_PRICE").value +
          "</td>" +
          "<td class='i_total ' > " +
          document.getElementById("INPUT_ITEM_TOTAL").value +
          "</td>" +
          "<td class='CenterTextInSpan TD_ACTION'>" +
          '<div class="ui circular icon dropdown button">' +
          '<i class="icon settings "></i>' +
          '<div class="menu">' +
          '<a class="item BTN_EDIT_ITEM" name="A_EDIT_ITEM" onclick="Edit_Item(this)"><i class="edit icon"></i> Edit</a>' +
          '<a class="item BTN_DELETE_ITEM" name="B_DELETE_ITEM" onclick="Delete_Item(this)"><i class="delete icon"></i> Remove</a>' +
          "</div>" +
          "</td>" +
          "</tr>"
      );

      $(".ui.circular.icon.dropdown.button").dropdown({
        action: "hide"
      });
    } else if (Item_Function == "Edit") {
      var trs = document.getElementsByTagName("tr");
      var RowID = 0;
      while (RowID < trs.length) {
        trs[RowID].id = "item-" + RowID;
        RowID++;
      }

      var Row =
        "<tr id='item-" +
        RowID +
        "'>" +
        "<td class='i_item ' > " +
        document.getElementById("INPUT_ITEM").value +
        "</td>" +
        "<td class='i_quantity ' > " +
        document.getElementById("INPUT_ITEM_QUANTITY").value +
        "</td>" +
        "<td class='i_unit ' > " +
        document.getElementById("INPUT_ITEM_UNIT").value +
        "</td>" +
        "<td class='i_price ' > " +
        document.getElementById("INPUT_ITEM_PRICE").value +
        "</td>" +
        "<td class='i_total ' > " +
        document.getElementById("INPUT_ITEM_TOTAL").value +
        "</td>" +
        "<td class='CenterTextInSpan TD_ACTION'>" +
        '<div class="ui circular icon dropdown button">' +
        '<i class="icon settings "></i>' +
        '<div class="menu">' +
        '<a class="item BTN_EDIT_ITEM name="A_EDIT_ITEM" onclick="Edit_Item(this)"><i class="edit icon"></i>Edit</a>' +
        '<a class="item BTN_DELETE_ITEM" name="B_DELETE_ITEM" onclick="Delete_Item(this)"><i class="delete icon"></i>Remove</a>' +
        "</div>" +
        "</td>" +
        "</tr>";

      $(
        "tr#" + Item_Ojbect.parentNode.parentNode.parentNode.parentNode.id
      ).replaceWith(Row);

      $(".ui.circular.icon.dropdown.button").dropdown({
        action: "hide"
      });
    }
    Close_Modal_Items();
  }
}

var Item_Function = "";
var Item_Ojbect;

function Add_Item() {
  Item_Function = "Add";
  Open_Modal_Items();
}

function Delete_Item(obj) {
  var row = obj.parentNode.parentNode.parentNode.parentNode;
  row.parentNode.removeChild(row);

  TotalPrice();
}

function Edit_Item(obj) {
  var RowID = obj.parentNode.parentNode.parentNode.parentNode.id;

  console.log(obj.parentNode.parentNode.parentNode.parentNode.id);

  Item_Function = "Edit";
  Item_Ojbect = obj;

  var currentTR = $(obj).closest("tr");
  var i_item = currentTR.find("td.i_item").text();
  var i_quantity = currentTR.find("td.i_quantity").text();
  var i_unit = currentTR.find("td.i_unit").text();
  var i_price = currentTR.find("td.i_price").text();
  var i_total = currentTR.find("td.i_total").text();

  document.getElementById("INPUT_ITEM").value = i_item;
  document.getElementById("INPUT_ITEM_QUANTITY").value = i_quantity;
  document.getElementById("INPUT_ITEM_UNIT").value = i_unit;
  document.getElementById("INPUT_ITEM_PRICE").value = i_price;
  document.getElementById("INPUT_ITEM_TOTAL").value = i_total;

  Open_Modal_Items();
}
//---------------------------------------------------------------------------------------------------------------------

function getColumn(table_id, col) {
  var tab = document.getElementById(table_id);
  var n = tab.rows.length;
  var i, tr, td;
  var s = "";

  // First check that col is not less then 0
  if (col < 0) {
    return null;
  }

  for (i = 1; i < n; i++) {
    tr = tab.rows[i];
    if (tr.cells.length > col) {
      // Check that cell exists before you try
      td = tr.cells[col]; // to access it.
      if (s != "") {
        s += ";" + td.innerText;
      } else {
        s = td.innerText;
      }
    } // Here you could say else { return null; } if you want it to fail
    // when requested column is out of bounds. It depends.
  }
  return s;
}

//---------------------------------------------------------------------------------------------------------------------
// GET TOTAL PRICE
function get_TotalPrice() {
  var col_prices = getColumn("TABLE_ITEMS", 4);
  var Array_Prices = [];
  Array_Prices = col_prices.split(";");
  return Array_Prices;
}
function TotalPrice() {
  var tbody = $("#TABLE_ITEMS tbody");
  if (tbody.children().length != 0) {
    var Array_Prices = get_TotalPrice();
    var Total = 0;
    for (var i = 0; i < Array_Prices.length; i++) {
      Total = parseFloat(Total) + parseFloat(Array_Prices[i]);
    }
    document.getElementById("INPUT_TOTAL_PRICE").value = Total.toFixed(2);
  } else {
    document.getElementById("INPUT_TOTAL_PRICE").value = "00.00";
  }
}

function cancel() {
  if (current_user === Requestor) {
    window.location.href =
      "https://intranet.houseofit.com.au/Lists/Project%20Resources%20Purchasing%20Request/My%20Requests.aspx";
  } else if (
    CurrentUser !== "Cherry Yurag" &&
    CurrentUser !== "Jestine Ann Lopezbaños" &&
    CurrentUser !== "Sarah Torrejos"&&
    CurrentUser !== "Ricelle Literatus"
  ) {
    window.location.href =
      "https://intranet.houseofit.com.au/Lists/Project%20Resources%20Purchasing%20Request/Finance.aspx";
  } else if (
    CurrentUser === "Artem Soukhomlinov" &&
    CurrentUser === "Artem Soukhomlinov | OffshoringTBOS.com"
  ) {
    if (Approval_Stage === "Approval_Stage") {
      window.location.href =
        "https://intranet.houseofit.com.au/Lists/Project%20Resources%20Purchasing%20Request/Approval%20Stage.aspx";
    }
  } else if (CurrentUser === "Alin Florea") {
    if (Approval_Stage === "Approval_Stage") {
      window.location.href =
        "https://intranet.houseofit.com.au/Lists/Project%20Resources%20Purchasing%20Request/Approval%20Stage%20AVPSALES.aspx";
    }
  }
}
