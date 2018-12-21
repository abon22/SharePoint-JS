
Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}
var dataRes;

var temp_scroll=0;

 function OnScrollDiv (div) {
           //console.log(div.scrollTop);
           temp_scroll=div.scrollTop;
        }



 var loginPreferedName
function GetCurrentUser() {
var userid = _spPageContextInfo.userId;
//console.log(userid);
var requestUri = _spPageContextInfo.webAbsoluteUrl + "/_api/web/getuserbyid(" + userid + ")";

$.ajax({
  url : requestUri,
  contentType : "application/json;odata=verbose",
  headers : { 
    "accept" : "application/json;odata=verbose" 
  },
  success : function (data, request){
  //var loginName = data.d.LoginName.split('|')[1];
  loginPreferedName = data.d.Title;
  //console.log(loginPreferedName);
  getItems("/_api/Web/Lists/GetByTitle('Man Hour Loss')/Items?$select=Man_x0020_hour_x0020_loss_x0020_,Hours,Date,ID,Name/Title,Name&$filter=Name/Title eq '"+loginPreferedName+"'&$expand=Name/Title&$OrderBy=Date asc");
  },
  error : function (data) {  
            alert("An error occurred. Please try again.");  
        }  


});
}



//var urlForAllItems = "/_api/Web/Lists/GetByTitle('Man Hour Loss')/Items?$select=Man_x0020_hour_x0020_loss_x0020_,Hours,Date,ID,Name/Title,Name&$filter=Name/Title eq '"+loginPreferedName+"'&$expand=Name/Title&$OrderBy=Date asc";


function getItems(url) {
    $.ajax({
        url: _spPageContextInfo.webAbsoluteUrl + url,
        type: "GET",
        headers: {
            "accept": "application/json;odata=verbose",
        },
        success: function (data) {

          dataRes = data.d.results;
          calendar.fetchEvents();

        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}


  var calendar = {
//------------------------------------------------------------------
  events: {
    leave: {
      events: [],
      className: ['event', 'leave'],
      allDayDefault: true
    },
    holiday: {
      events: [],
      className: ['event', 'holiday'],
      allDayDefault: true
    },
    attendance: {
      absent: {
        events: [],
        className: ['event', 'attendance', 'absent'],
        allDayDefault: true
      },
      late: {
        events: [],
        className: ['event', 'attendance', 'late'],
        allDayDefault: true
      },
      ontime: {
        events: [],
        className: ['event', 'attendance', 'ontime'],
        allDayDefault: true
      },
      undertime: {
        events: [],
        className: ['event', 'attendance', 'undertime'],
        allDayDefault: true
      }
    },
    birthday: {
      events: [],
      className: ['event', 'birthday'],
      allDayDefault: true
      // rendering: 'background'
    }
  },

//------------------------------------------------------------------

  eventsOnView : [],
  fetching: false,
  getAttendanceEvents: function() {
    // FETCH DATA [[TO BE REPLACED BY AJAX REQUEST AND MODIFY BASED ON RESPONSE STRUCTURE]]
    // **note: AJAX SHOULD NOT BE ASYNC

    // TEST DATA TO BE REPLACED BY AJAX REQUEST

//console.log("*****************LATE********************");

var late_arr_a = [], late_arr_b = [], prev;

var lateData = [];
var count_late=0;

for (a=0; a< dataRes.length; a++) {

    var get_db_eventType = dataRes[a].Man_x0020_hour_x0020_loss_x0020_;

      if(get_db_eventType == "Late"){
        
    var get_db_id = dataRes[a].ID;
    var get_db_name = dataRes[a].Name.Title;
    //console.log( dataRes[a].Name.ID)
    var get_db_date = moment(dataRes[a].Date).format("YYYY/MM/DD");

    
        var obj = {};
        obj.entries =[];


        if (get_db_date !== prev ) {
            late_arr_a.push(get_db_date);
            late_arr_b.push(1);
        } else {
            late_arr_b[late_arr_b.length-1]++;
  
        }

        prev = get_db_date;

      }

}

//console.log(late_arr_a);
//console.log(late_arr_b);

for (a=0; a< late_arr_a.length; a++) {

  var obj = {};
  obj.eventType="late";
  obj.start=late_arr_a[a];
  obj.title="Late: "+late_arr_b[a];
  obj.entries =[];

    for (b=0; b< dataRes.length; b++) {
  
      var get_db_eventType = dataRes[b].Man_x0020_hour_x0020_loss_x0020_;

      if(get_db_eventType == "Late"){

        var get_db_id = dataRes[b].ID;
        var get_db_name = dataRes[b].Name.Title;
        var get_db_status = dataRes[b].Hours;
        //console.log(dataRes[b].Name)

        var get_db_date = moment(dataRes[b].Date).format("YYYY/MM/DD");

        if(late_arr_a[a]==get_db_date){
          obj.entries.push({id: get_db_id,name: get_db_name,status: Number(get_db_status).toFixed(2)});
        }


      }
    }

    lateData.push(obj);
}

//console.log(lateData);

    //console.log(lateData);
    calendar.events.attendance.late.events = lateData;
//console.log("*****************LATE********************");


//console.log("*****************ABSENT********************");

var absent_arr_a = [], absent_arr_b = [], prev;

var absentData = [];
var count_absent=0;

for (a=0; a< dataRes.length; a++) {

    var get_db_eventType = dataRes[a].Man_x0020_hour_x0020_loss_x0020_;

      if(get_db_eventType == "Absent"){
        
    var get_db_id = dataRes[a].ID;
    var get_db_name = dataRes[a].Name.Title;
    var get_db_date = moment(dataRes[a].Date).format("YYYY/MM/DD");

    
        var obj = {};
        obj.entries =[];


        if (get_db_date !== prev ) {
            absent_arr_a.push(get_db_date);
            absent_arr_b.push(1);
        } else {
            absent_arr_b[absent_arr_b.length-1]++;
  
        }

        prev = get_db_date;

      }

}

//console.log(absent_arr_a);
//console.log(absent_arr_b);

for (a=0; a< absent_arr_a.length; a++) {

  var obj = {};
  obj.eventType="absent";
  obj.start=absent_arr_a[a];
  obj.title="Absent: "+absent_arr_b[a];
  obj.entries =[];

    for (b=0; b< dataRes.length; b++) {
  
      var get_db_eventType = dataRes[b].Man_x0020_hour_x0020_loss_x0020_;

      if(get_db_eventType == "Absent"){

        var get_db_id = dataRes[b].ID;
        var get_db_name = dataRes[b].Name.Title;
        var get_db_status = dataRes[b].Hours;
        var get_db_date = moment(dataRes[b].Date).format("YYYY/MM/DD");

        if(absent_arr_a[a]==get_db_date){
          obj.status = dataRes[b].Hours
          obj.entries.push({id: get_db_id,name: get_db_name,status: Number(get_db_status).toFixed(2)});
        }


      }
    }

    absentData.push(obj);
}

//console.log(absentData);
calendar.events.attendance.absent.events = absentData;

//console.log("*****************ABSENT********************");





//console.log("*****************UNDERTIME********************");

var undertime_arr_a = [], undertime_arr_b = [], prev;

var undertimeData = [];
var count_absent=0;

for (a=0; a< dataRes.length; a++) {

    var get_db_eventType = dataRes[a].Man_x0020_hour_x0020_loss_x0020_;

      if(get_db_eventType == "Undertime"){
        
    var get_db_id = dataRes[a].ID;
    var get_db_name = dataRes[a].Name.Title;
    var get_db_date = moment(dataRes[a].Date).format("YYYY/MM/DD");

    
        var obj = {};
        obj.entries =[];


        if (get_db_date !== prev ) {
            undertime_arr_a.push(get_db_date);
            undertime_arr_b.push(1);
        } else {
            undertime_arr_b[undertime_arr_b.length-1]++;
  
        }

        prev = get_db_date;

      }

}

//console.log(undertime_arr_a);
//console.log(undertime_arr_b);

for (a=0; a< undertime_arr_a.length; a++) {

  var obj = {};
  obj.eventType="undertime";
  obj.start=undertime_arr_a[a];
  obj.title="Undertime: "+undertime_arr_b[a];
  obj.entries =[];

    for (b=0; b< dataRes.length; b++) {
  
      var get_db_eventType = dataRes[b].Man_x0020_hour_x0020_loss_x0020_;

      if(get_db_eventType == "Undertime"){

        var get_db_id = dataRes[b].ID;
        var get_db_name = dataRes[b].Name.Title;
        var get_db_status = dataRes[b].Hours
        var get_db_date = moment(dataRes[b].Date).format("YYYY/MM/DD");

        if(undertime_arr_a[a]==get_db_date){
          
          obj.entries.push({id: get_db_id,name: get_db_name,status: Number(get_db_status).toFixed(2)});
        }


      }
    }

    undertimeData.push(obj);
}

//console.log(undertimeData);
calendar.events.attendance.undertime.events = undertimeData;


//console.log("*****************UNDERTIME********************");






 },
  closeCard: function(){
    $('.card').css({'opacity': 0, 'transform': 'scale(0.8) rotateY(0deg)'});
    setTimeout(function(){
      $('.card-wrapper').css({'display': 'none'});
      $('.back-panel .event-loader').show();
      $('.back-panel .event-detail').hide();
    }, 300);
  },
  fetchEvents: function(){
    calendar.eventsOnView = [];
    // CHECK FILTERS
    var includeLeave = $('#filter-leave').prop('checked'),
      includeAttendance = $('#filter-attendance').prop('checked'),
      includeHoliday = $('#filter-holiday').prop('checked'),
      includeBirthday = $('#filter-birthday').prop('checked');

    // [[TODO]] ADD QUERY FOR EMPLOYEE/DEPARTMENT SEARCH



    if (includeAttendance) {
      calendar.getAttendanceEvents();
      calendar.eventsOnView.push(calendar.events.attendance.absent);
      calendar.eventsOnView.push(calendar.events.attendance.late);
      calendar.eventsOnView.push(calendar.events.attendance.ontime);
      calendar.eventsOnView.push(calendar.events.attendance.undertime);
    };

    calendar.render();
  },
  listEvents: function(type, entries, date) {
    if (!calendar.fetching) {   
      calendar.fetching = true;

      $('.front-panel .event-loader').show();
      $('.front-panel .entries').html('');
      //  FOR NOW PLACED INSIDE setTimeout to simulate ajax fetching. SHOULD be replaced by actual fetching of data.
      setTimeout(function(){
        for (var i = 0; i < entries.length; i++) {
          var avatar = entries[i].avatar || '/SiteAssets/Scripts/Man Hour Loss/img/placeholder.png';
          var entryTemplate = 
          '<div class="entry" data-type="'+ type +'" data-id="'+ entries[i].id +'" data-date="'+ date +'" data-name="'+entries[i].name+'" data-status="'+entries[i].status+'" >' +
            '<img src="' + avatar + '" class="entry-image img-circle" />' +
            '<div class="entry-details">' +
              '<p class="entry-name">' + entries[i].name + '</p>' +
              '<p class="entry-status"> Hours: ' + entries[i].status + ' hrs</p>' +
            '</div>' +
          '</div>';

         // console.log("entries[i].name: "+entries[i].name +" i:"+i);


          $('.front-panel .entries').append(entryTemplate);
        };
        $('.front-panel .event-loader').hide();
        calendar.fetching = false;
      }, 1200);
    };
  },


  showDetail: function(type, date, id, name, status) {
    $('.back-panel .event-detail').hide();
    $('.back-panel .event-loader').show();

    $('.event-detail').attr('data-type', type);

    //console.log("name: "+name);
     var avatar = '/SiteAssets/Scripts/Man Hour Loss/img/placeholder.png';
    $('.back-panel .emp-name').html("ATTENDANCE");
    $('.back-panel .emp-display').html('<div>' +
            '<img src="' + avatar + '" class="entry-image img-circle" />' +
            '<div class="entry-details">' +
              '<p class="entry-name"> '+name+' </p>' +
              '<p class="entry-status"> Hours: '+status+' hrs</p>' +
            '</div>' +
          '</div>');
    $('.back-panel .event-date').html(date);

    setTimeout(function(){
      $('.back-panel .event-loader').hide();
      $('.back-panel .event-detail').show();// shows the events details.
    }, 1200);
  },



  render: function() {
    $('#calendar').fullCalendar( 'destroy' );
    $('#calendar').fullCalendar({
      eventClick: function(calEvent, jsEvent, view) {
        //console.log("aw");
        var target = $(jsEvent.currentTarget);
        var parent = $(jsEvent.currentTarget).parent();
        //console.log("target: "+target);
        //console.log("parent: "+parent);
        //console.log("eventClick:");
      //  console.log("temp_scroll: "+temp_scroll);

        $('.card-wrapper').css({
          top: ((parent.offset().top + 2 )-63)+temp_scroll,
          left: target.offset().left + parent.width() + 4,
          display: 'block'
          //'display': 'block','z-index':'10'
        });
        // IF MULTIPLE ENTRIES
        if (calEvent.entries.length > 1) {
          // GENERATE CARD TITLE
          var eventTitle = '';
          switch (calEvent.eventType) {
            case 'leave':
              eventTitle = '<span class="leave">LEAVE</span>';
              break;
            case 'ontime':
              eventTitle = '<span class="ontime">ATTENDANCE</span>';
              break;
            case 'late':
              eventTitle = '<span class="late">ATTENDANCE</span>';
              break;
            case 'undertime':
              eventTitle = '<span class="undertime">ATTENDANCE</span>';
              break;
            case 'absent':
              eventTitle = '<span class="absent">ATTENDANCE</span>';
              break;
            case 'holiday':
              eventTitle = '<span class="holiday">HOLIDAY</span>';
              break;
            case 'birthday':
              eventTitle = '<span class="birthday">BIRTHDAY</span>';
              break;
          }
          // Update Card Titles
          var eventDate = calEvent.start._i;
          $('.front-panel .event-title').html(eventTitle);
          $('.front-panel .event-date').html(moment(eventDate).format("dddd, MMMM Do YYYY"));
          // Generate Event List
          calendar.listEvents(calEvent.eventType, calEvent.entries, eventDate);
          $('.card').css({'opacity': 1, 'transform': 'scale(1) rotateY(0deg)'});
        }

        else

        {
          //console.log("calEvent.eventType: "+calEvent.eventType);
          //console.log("calEvent.entries: "+calEvent.entries[0].id);
          // IF SINGLE ENTRY
          //console.log("calEvent.entries[0].status: "+calEvent.entries[0].status);
          calendar.showDetail(calEvent.eventType, moment(calEvent.start._i).format("dddd, MMMM Do YYYY"), calEvent.entries[0].id, calEvent.entries[0].name,calEvent.entries[0].status);
          $('.card').css({'opacity': 1, 'transform': 'scale(1) rotateY(180deg)'});
          //console.log("a");
          // $('.card').css({'transform': ''});
        };

        //console.log("eventTitle");
      },
      eventLimit: 5,
      header: {
        left: 'title',
        center: '',
        right: 'prev, today, next'
      },
      eventSources: calendar.eventsOnView
    });
  }
}


$(document).ready(function() {






GetCurrentUser();


$("#s4-workspace").scroll(function() {
    OnScrollDiv(this);
}); 







  // INITIALIZE SIDEBAR FILTER FOR CALENDAR
  $(".sidebar.left").sidebar();

  // GENERATE CALENDAR EVENTS


  // BIND EVENTS
  $('#sidebar-toggle').on('click', function(){
    $(".sidebar.left").trigger("sidebar:toggle").toggleClass('filter-shadow');
  });

  $('.sidebar label > input').on('change', function(){
    calendar.closeCard();
    calendar.fetchEvents();
   
  });

  $('#calendar').on('click', function(event) {
    if (!$(event.target).closest(".event").length) {
      calendar.closeCard();
    }
  });

  $('.entries').on('click', '.entry', function(){
    
    $('.card').css({'transform': 'rotateY(180deg)'});
    var type = $(this).attr('data-type'),
      date = $(this).attr('data-date'),
      id = $(this).attr('data-id');
      name = $(this).attr("data-name");
      status = $(this).attr("data-status");

      

      //console.log("date: "+status);
    calendar.showDetail(type, moment(date).format("dddd, MMMM Do YYYY"), id, name, status);
    //console.log("b");
  });
});
