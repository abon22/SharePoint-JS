
$(document).ready(function() {

$('input').keypress(function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
    }
});

    // setTimeout('window.location.reload();', 120000);

  $('select').material_select();
  $('.collapsible').collapsible();
  $('.tooltipped').tooltip({delay: 30});
  $('.modal').modal();
  $('.tabs').tabs();
  // $(".button-collapse").sideNav();

 $('.timepicker').pickatime({
    default: 'now', // Set default time
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: true, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: true, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });

   $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 100, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: true,
    format: 'mm/dd/yyyy',
  });

  $('.button-collapse').sideNav({
      menuWidth: 600, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true// Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );


  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'right', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );


$('.ui.dropdown')
  .dropdown()
;

$('.ui.modal.fullscreen.TURNOVERDOCUMENT')
  .modal()
;

document.getElementById("ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sboxdiv").remove();
document.getElementById("DeltaPlaceHolderPageTitleInTitleArea").style.display = "none";
// ExecuteOrDelayUntilScriptLoaded(checkuserprofile,'sp.js');




// retrieveAllListProperties();


}); //---------------------------------------END OF DOCUMENT READY FUNCTION----------------------------------------------------------

var months = [ "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December" ];



function retrieveAllListProperties() {

    var clientContext = new SP.ClientContext('https://intranet.houseofit.com.au/');
    var oWebsite = clientContext.get_web();
    this.collList = oWebsite.get_lists();

    clientContext.load(collList);

    clientContext.executeQueryAsync(
      Function.createDelegate(this, this.onQuerySucceeded),
      Function.createDelegate(this, this.onQueryFailed));
}

function onQuerySucceeded() {

    var listInfo = '';

    var listEnumerator = collList.getEnumerator();

    while (listEnumerator.moveNext()) {
        var oList = listEnumerator.get_current();
        // console.log(oList.get_roleAssignments());
        listAllRoleAssignments(oList.get_title(),oList.get_id().toString());
    }


}

function onQueryFailed(sender, args) {
    alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}


//-----------------------------------------------------------------------------------------------------------------

//Get List Permission


//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
function Open_Group_Members_Modal(){
    $('#MODAL_GROUP_MEMBERS')
      .modal({
        closable  : false,
        centered: false
      })
      .modal('show');
}
function Close_Group_Members_Modal(){
    $('#MODAL_GROUP_MEMBERS')
      .modal({
        closable  : false,
        centered: false
      })
      .modal('hide');
}

function View_Members(element){
    // alert(element.id);
    // ExecuteOrDelayUntilScriptLoaded(function () { Get_User_Info_From_A_Group(element.id) }, "sp.js");

    Open_Group_Members_Modal();
    Get_User_Info_From_A_Group(element.id);

}


var Percentage = 0;

function listAllRoleAssignments(List_Title,List_ID){


    var clientContext = new SP.ClientContext('https://intranet.houseofit.com.au/');
    var webLists = clientContext.get_web().get_lists();
    var list = webLists.getByTitle(List_Title);
    clientContext.load(list);
    var assignments = list.get_roleAssignments();
    clientContext.load(assignments, 'Include(Member,RoleDefinitionBindings)');
    clientContext.executeQueryAsync(onSuccess, onFail);
    function onSuccess(){

        var assignmentsEnumerator =  assignments.getEnumerator();

        while (assignmentsEnumerator.moveNext()) {

            var assignment = assignmentsEnumerator.get_current();
            var roleDefinitionBindings = assignment.get_roleDefinitionBindings();
            var roleDefinition = getRoleDefinition(roleDefinitionBindings);

          if(roleDefinition != "Limited Access"){

            // console.log(assignment.get_member().get_title() +  " -- " + getPrincipalTypeName(assignment.get_member().get_principalType()) + " -- " + roleDefinition);

            // console.log(assignment.get_member().get_title() +  " -- " + getPrincipalTypeName(assignment.get_member().get_principalType()) + " -- " + roleDefinition);

            // console.log(assignment.get_member().get_id());

            // LISTS OF LIST PER USER/GROUP ---------------------------
            var USER_GROUP_HEADER = "";
            if(getPrincipalTypeName(assignment.get_member().get_principalType()) == "User"){
                USER_GROUP_HEADER = "<h4 class='ui header blue-text'>"+ assignment.get_member().get_title()+"</h4>";
            }
            else{
                USER_GROUP_HEADER = "<a class='ui left basic labeled icon button blue' id='"+assignment.get_member().get_title()+"' onclick='View_Members(this)'><i class='external alternate icon'></i>"+assignment.get_member().get_title()+"</a><div class='row'/>";
            }

              if($('#TABLE_'+assignment.get_member().get_id()).length){
                    $("#TABLE_"+assignment.get_member().get_id()).append(
                    "<tr>"+
                    "<td>"+List_Title+"</td>"+
                    "<td>"+roleDefinition+"</td>"+
                    "<tr>");
              }
              else{
                    $("#DIV_CONTAINER").append(
                        "<div class='ui vertical segment'>"+
                            USER_GROUP_HEADER+
                            "<table class='ui celled fixed table' id='TABLE_"+assignment.get_member().get_id()+"'>"+
                                "<thead>"+
                                    "<th>List Name</th>"+
                                    "<th>User/Group Permission</th>"+
                                "</thead>"+
                                "<tbody>"+
                                "<tr>"+
                                    "<td>"+List_Title+"</td>"+
                                    "<td>"+roleDefinition+"</td>"+
                                "<tr>"+
                                "</tbody>"+
                            "</table>"+
                        "</div>");
              }

          }


        }
    }
    function onFail(o, args){
        console.log("error: " + args.get_message());
    }

}
function getPrincipalTypeName(principalType){
    switch(principalType){
        case 0:
            return "None";
        case 1:
            return "User";
        case 2:
            return "Distribution List";
        case 4:
            return "Security Group";
        case 8:
            return "SharePoint Group";
        default:
            return "All"
    }
}
function getRoleDefinition(roleDefinitionBindings){
    var strRoleDefinition = "";
    for(i=0; i<roleDefinitionBindings.get_count(); i++){
        strRoleDefinition += roleDefinitionBindings.getItemAtIndex(i).get_name() + ", ";
    }
    return strRoleDefinition.substring(0, strRoleDefinition.length - 2);
}


//-----------------------------------------------------------------------------------------------------------------


function Get_User_Info_From_A_Group(LIST_TITLE) {
    var context  = new SP.ClientContext('https://intranet.houseofit.com.au/');
    var collGroup = context .get_web().get_siteGroups();
    var oGroup = collGroup.getByName(LIST_TITLE);
    this.collUser = oGroup.get_users();
    context .load(collUser, 'Include(Title, LoginName, Email)');


    context .executeQueryAsync(Function.createDelegate(this, this.Get_User_Info_onQuerySucceeded), Function.createDelegate(this, this.onQueryFailed));
}

function Get_User_Info_onQuerySucceeded() {

var Array_User_Title = [];
var Array_User_Email = [];

  var userEnumerator = collUser.getEnumerator();
  while (userEnumerator.moveNext()) {
      var oUser = userEnumerator.get_current();

          Array_User_Title.push(oUser.get_title());
          Array_User_Email.push(oUser.get_email());
  }
  $("#TABLE_GROUP_MEMBERS tbody").empty();
  for(var i = 0; i<=Array_User_Title.length-1;i++){
      // console.log(Array_User_Title[i]);
      $("#TABLE_GROUP_MEMBERS tbody").append("<tr>" +
       "<td align='left' class='CenterTextInSpan'>"+Array_User_Title[i]+"</td>" +
       "</tr>");
  }

}

function onQueryFailed(sender, args) {

  alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
}







//-----------------------------------------------------------------------------------------------------------------





