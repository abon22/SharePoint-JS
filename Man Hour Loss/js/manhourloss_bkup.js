
Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}
var dataRes;

var urlForAllItems = "/_api/Web/Lists/GetByTitle('Man Hour Loss')/Items?$select=Man_x0020_hour_x0020_loss_x0020_,Date,ID,Name/Title&$expand=Name/Title&$OrderBy=Date asc";

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

console.log("*****************LATE********************");

var late_arr_b = [], late_arr_b = [], late_prev;

var lateData = [];
var count_late=0;

for (a=0; a< dataRes.length; a++) {

    var get_db_eventType = dataRes[a].Man_x0020_hour_x0020_loss_x0020_;

      if(get_db_eventType == "Late"){
        
    var get_db_id = dataRes[a].ID;
    var get_db_name = dataRes[a].Name.Title;
    var get_db_date = moment(dataRes[a].Date).format("YYYY/MM/DD");

    
        var obj = {};
        obj.entries =[];


        if (get_db_date !== late_prev ) {
            late_arr_b.push(get_db_date);
            late_arr_b.push(1);
        } else {
            late_arr_b[late_arr_b.length-1]++;
  
        }

        late_prev = get_db_date;

      }

}

console.log(late_arr_b);
console.log(late_arr_b);

for (a=0; a< late_arr_b.length; a++) {

  var obj = {};
  obj.eventType="late";
  obj.start=late_arr_b[a];
  obj.title="Late: "+late_arr_b[a];
  obj.entries =[];

    for (b=0; b< dataRes.length; b++) {
  
      var get_db_eventType = dataRes[b].Man_x0020_hour_x0020_loss_x0020_;

      if(get_db_eventType == "Late"){

        var get_db_id = dataRes[b].ID;
        var get_db_name = dataRes[b].Name.Title;
        var get_db_date = moment(dataRes[b].Date).format("YYYY/MM/DD");

        if(late_arr_b[a]==get_db_date){

          obj.entries.push({id: get_db_id,name: get_db_name});

        }


      }
    }

    lateData.push(obj);
}

console.log(lateData);

/*

    var lateData  = [
      {
        eventType: 'late',
        title: 'Late: 2',
        start: '2018/03/02',
        entries: [
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          },
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          }
        ]
      },
      {
        eventType: 'late',
        title: 'Late: 1',
        start: '2018/03/08',
        entries: [
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          }
        ]
      },
      {
        eventType: 'late',
        title: 'Late: 2',
        start: '2018/03/01',
        entries: [
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          },
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          }
        ]
      },
      {
        eventType: 'late',
        title: 'Late: 4',
        start: '2018/03/01',
        entries: [
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          },
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          },
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          },
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          }
        ]
      }
    ];

*/
    //console.log(lateData);
    calendar.events.attendance.late.events = lateData;
console.log("*****************LATE********************");




console.log("*****************ABSENT********************");

var absent_arr_a = [], absent_arr_b = [], prev;

var absentData = [];
var count_late=0;

for (a=0; a< dataRes.length; a++) {

    var get_db_eventType = dataRes[a].Man_x0020_hour_x0020_loss_x0020_;

      if(get_db_eventType == "Late"){
        
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

console.log(absent_arr_a);
console.log(absent_arr_a);

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
        var get_db_date = moment(dataRes[b].Date).format("YYYY/MM/DD");

        if(absent_arr_a[a]==get_db_date){

          obj.entries.push({id: get_db_id,name: get_db_name});

        }


      }
    }

    lateData.push(obj);
}


console.log(absentData);


/*
    var absentData  = [
      {
        eventType: 'absent',
        title: 'Employee Name6',
        start: '2018/03/07',
        entries: [
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          }
        ]
      },
      {
        eventType: 'absent',
        title: 'Employee Name7',
        start: '2018/03/02',
        entries: [
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          }
        ]
      },
      {
        eventType: 'absent',
        title: 'Absent: 2',
        start: '2018/03/01',
        entries: [
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          },
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          }
        ]
      },
      {
        eventType: 'absent',
        title: 'Employee Name8',
        start: '2018/03/01',
        entries: [
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          }
        ]
      },
      {
        eventType: 'absent',
        title: 'Absent: 4',
        start: '2016/09/01',
        entries: [
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          },
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          },
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          },
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          }
        ]
      }
    ];
*/
    calendar.events.attendance.absent.events = absentData;

console.log("*****************ABSENT********************");
/*
    var undertimeData  = [
      {
        eventType: 'undertime',
        title: 'Undertime: 2',
        start: '2018/03/25',
        entries: [
          {
            id: '175',
            name: 'Lito Abon Jr.',
            status: 'Status '
          },
          {
            id: '268',
            name: 'Fernando Singson Jr.',
            status: 'Status'
          }
        ]
      },
      {
        eventType: 'undertime',
        title: 'Employee Name9',
        start: '2018/03/07',
        entries: [
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          }
        ]
      },
      {
        eventType: 'undertime',
        title: 'Undertime: 2',
        start: '2016/09/05',
        entries: [
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          },
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          }
        ]
      },
      {
        eventType: 'undertime',
        title: 'Employee Name10',
        start: '2016/09/02',
        entries: [
          {
            id: '101',
            name: 'Last Name',
            status: 'First Name'
          }
        ]
      }
    ];

    calendar.events.attendance.undertime.events = undertimeData;

*/  },
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
          var avatar = entries[i].avatar || 'https://app-a.salarium.com/assets/img/placeholder.png';
          var entryTemplate = 
          '<div class="entry" data-type="'+ type +'" data-id="'+ entries[i].id +'" data-date="'+ date +'" data-name="'+entries[i].name+'" >' +
            '<img src="' + avatar + '" class="entry-image img-circle" />' +
            '<div class="entry-details">' +
              '<p class="entry-name">' + entries[i].name + '</p>' +
              '<p class="entry-status">' + entries[i].status + '</p>' +
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


  showDetail: function(type, date, id, name) {
    $('.back-panel .event-detail').hide();
    $('.back-panel .event-loader').show();

    $('.event-detail').attr('data-type', type);

    //console.log("name: "+name);
    
    $('.back-panel .emp-name').html(name);
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
        var target = $(jsEvent.currentTarget);
        var parent = $(jsEvent.currentTarget).parent();
        //console.log("target: "+target);
        //console.log("parent: "+parent);
        //console.log("eventClick:");

        $('.card-wrapper').css({
         // top: parent.offset().top + 2,
         // left: target.offset().left + parent.width() + 4,

          'display': 'block','z-index':'1'
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
          calendar.showDetail(calEvent.eventType, moment(calEvent.start._i).format("dddd, MMMM Do YYYY"), calEvent.entries[0].id, calEvent.entries[0].name);
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

getItems(urlForAllItems);


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

      

     // console.log("date: "+date);
    calendar.showDetail(type, moment(date).format("dddd, MMMM Do YYYY"), id, name);
    //console.log("b");
  });
});
