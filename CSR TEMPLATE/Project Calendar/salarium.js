        var calendar = {
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
            eventsOnView : [],
            fetching: false,
            getLeaveEvents: function() {
                // FETCH DATA [[TO BE REPLACED BY AJAX REQUEST AND MODIFY BASED ON RESPONSE STRUCTURE]]
                // **note: AJAX SHOULD NOT BE ASYNC
        
                // TEST DATA TO BE REPLACED BY AJAX REQUEST
                var leaveData  = [
                    {
                        eventType: 'leave',
                        title: 'On Leave: 2',
                        start: moment().add(13, 'days'),
                        entries: [
                            {
                                id: '001',
                                name: 'John Doe',
                                status: 'Approved'
                            },
                            {
                                id: '002',
                                name: 'Jane Does',
                                status: 'Approved'
                            }
                        ]
                    },
                    {
                        eventType: 'leave',
                        title: 'Employee Name',
                        start: moment(),
                        entries: [
                            {
                                id: '001',
                                name: 'John Doe',
                                status: 'Approved'
                            }
                        ]
                    },
                    {
                        eventType: 'leave',
                        title: 'Employee Name',
                        start: moment().add(1, 'days'),
                        entries: [
                            {
                                id: '002',
                                name: 'Jane Does',
                                status: 'Approved'
                            }
                        ]
                    },
                    {
                        eventType: 'leave',
                        title: 'On Leave: 3 *',
                        start: moment().add(7, 'days'),
                        entries: [
                            {
                                id: '001',
                                name: 'John Doe',
                                status: 'Approved'
                            },
                            {
                                id: '002',
                                name: 'Jane Does',
                                status: 'Pending'
                            },
                            {
                                id: '003',
                                name: 'Jack Did',
                                status: 'Approved'
                            }
                        ]
                    },
                    {
                        eventType: 'leave',
                        title: 'On Leave: 2 *',
                        start: moment().add(2, 'days'),
                        entries: [
                            {
                                id: '001',
                                name: 'John Doe',
                                status: 'Approved'
                            },
                            {
                                id: '002',
                                name: 'Jane Does',
                                status: 'Pending'
                            }
                        ]
                    },
                    {
                        eventType: 'leave',
                        title: 'Employee Name',
                        start: moment().add(5, 'days'),
                        entries: [
                            {
                                id: '002',
                                name: 'Jane Does',
                                status: 'Approved'
                            }
                        ]
                    }
                ];
        
                calendar.events.leave.events = leaveData;
            },
            getBirthdayEvents: function() {
                // FETCH DATA [[TO BE REPLACED BY AJAX REQUEST AND MODIFY BASED ON RESPONSE STRUCTURE]]
                // **note: AJAX SHOULD NOT BE ASYNC
        
                // TEST DATA TO BE REPLACED BY AJAX REQUEST
                var birthdayData  = [
                    {
                        eventType: 'birthday',
                        title: 'Birthdays: 3',
                        start: moment().add(16, 'days'),
                        entries: [
                            {
                                id: '001',
                                name: 'Jane Does',
                                status: 'Celebrant'
                            },
                            {
                                id: '002',
                                name: 'John Doe',
                                status: 'Celebrant'
                            },
                            {
                                id: '003',
                                name: 'Jack Did',
                                status: 'Celebrant'
                            }
                        ]
                    },
                    {
                        eventType: 'birthday',
                        title: 'Celebrant',
                        start: moment().add(3, 'days'),
                        entries: [
                            {
                                id: '001',
                                name: 'Jane Does',
                                status: 'Celebrant'
                            }
                        ]
                    },
                    {
                        eventType: 'birthday',
                        title: 'Birthdays: 2',
                        start: moment().add(12, 'days'),
                        entries: [
                            {
                                id: '001',
                                name: 'Jane Does',
                                status: 'Celebrant'
                            },
                            {
                                id: '003',
                                name: 'Jack Did',
                                status: 'Celebrant'
                            }
                        ]
                    },
                    {
                        eventType: 'birthday',
                        title: 'Celebrant',
                        start: moment().add(8, 'days'),
                        entries: [
                            {
                                id: '003',
                                name: 'Jack Did',
                                status: 'Celebrant'
                            }
                        ]
                    }
                ];
        
                calendar.events.birthday.events = birthdayData;
            },
            getHolidayEvents: function() {
                // FETCH DATA [[TO BE REPLACED BY AJAX REQUEST AND MODIFY BASED ON RESPONSE STRUCTURE]]
                // **note: AJAX SHOULD NOT BE ASYNC
        
                // TEST DATA TO BE REPLACED BY AJAX REQUEST
                var holidayData  = [
                    {
                        eventType: 'holiday',
                        title: 'Awesome Day',
                        start: moment().add(1, 'days'),
                        entries: [
                            {
                                id: '101',
                                name: 'Awesome Day',
                                status: 'Non-Working'
                            }
                        ]
                    },
                    {
                        eventType: 'holiday',
                        title: 'Holiday Today',
                        start: moment(),
                        entries: [
                            {
                                id: '101',
                                name: 'Holiday Today',
                                status: 'Special'
                            }
                        ]
                    },
                    {
                        eventType: 'holiday',
                        title: 'Holiday Name',
                        start: moment().add(10, 'days'),
                        entries: [
                            {
                                id: '101',
                                name: 'Super Holiday',
                                status: 'Non-Working'
                            }
                        ]
                    },
                    {
                        eventType: 'holiday',
                        title: 'Holiday Name',
                        start: moment().add(12, 'days'),
                        entries: [
                            {
                                id: '101',
                                name: 'Everyday Holiday',
                                status: 'Special'
                            }
                        ]
                    }
                ];
        
                calendar.events.holiday.events = holidayData;
            },
            getAttendanceEvents: function() {
                // FETCH DATA [[TO BE REPLACED BY AJAX REQUEST AND MODIFY BASED ON RESPONSE STRUCTURE]]
                // **note: AJAX SHOULD NOT BE ASYNC
        
                // TEST DATA TO BE REPLACED BY AJAX REQUEST
                var lateData  = [
                    {
                        eventType: 'late',
                        title: 'Late: 2',
                        start: '2016/09/02',
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
                        title: 'Employee Name',
                        start: '2016/09/05',
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
                        title: 'Late: 3',
                        start: '2016/09/08',
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
                            }
                        ]
                    },
                    {
                        eventType: 'late',
                        title: 'Late: 2',
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
                            }
                        ]
                    },
                    {
                        eventType: 'late',
                        title: 'Employee Name',
                        start: '2016/09/07',
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
                        title: 'Late: 4',
                        start: '2016/09/06',
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
        
                calendar.events.attendance.late.events = lateData;
        
                var absentData  = [
                    {
                        eventType: 'absent',
                        title: 'Employee Name',
                        start: '2016/09/07',
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
                        title: 'Employee Name',
                        start: '2016/09/08',
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
                        start: '2016/09/06',
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
                        title: 'Employee Name',
                        start: '2016/09/02',
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
        
                calendar.events.attendance.absent.events = absentData;
        
                var undertimeData  = [
                    {
                        eventType: 'undertime',
                        title: 'Undertime: 2',
                        start: '2016/09/08',
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
                        title: 'Employee Name',
                        start: '2016/09/07',
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
                        title: 'Employee Name',
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
        
                var ontimeData = [
                    {
                        eventType: 'ontime',
                        title: 'On time: 6',
                        start: '2016/09/08',
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
                    },
                    {
                        eventType: 'ontime',
                        title: 'On Time: 11',
                        start: '2016/09/07',
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
                            },
                            {
                                id: '101',
                                name: 'Last Name',
                                status: 'First Name'
                            }
                        ]
                    },
                    {
                        eventType: 'ontime',
                        title: 'On time: 8',
                        start: '2016/09/06',
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
                            },
                            {
                                id: '101',
                                name: 'Last Name',
                                status: 'First Name'
                            }
                        ]
                    },
                    {
                        eventType: 'ontime',
                        title: 'On time: 11',
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
                    },
                    {
                        eventType: 'ontime',
                        title: 'On Time: 10',
                        start: '2016/09/02',
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
                    },
                    {
                        eventType: 'ontime',
                        title: 'On time: 8',
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
                            },
                            {
                                id: '101',
                                name: 'Last Name',
                                status: 'First Name'
                            }
                        ]
                    }
                ];
        
                calendar.events.attendance.ontime.events = ontimeData;
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
        
                if (includeLeave) {
                    calendar.getLeaveEvents();
                    calendar.eventsOnView.push(calendar.events.leave);
                };
        
                if (includeAttendance) {
                    calendar.getAttendanceEvents();
                    calendar.eventsOnView.push(calendar.events.attendance.absent);
                    calendar.eventsOnView.push(calendar.events.attendance.late);
                    calendar.eventsOnView.push(calendar.events.attendance.ontime);
                    calendar.eventsOnView.push(calendar.events.attendance.undertime);
                };
        
                if (includeHoliday) {
                    calendar.getHolidayEvents();
                    calendar.eventsOnView.push(calendar.events.holiday);
                };
        
                if (includeBirthday) {
                    calendar.getBirthdayEvents();
                    calendar.eventsOnView.push(calendar.events.birthday);
                };
                calendar.render();
            },
            listEvents: function(type, entries, date) {
                if (!calendar.fetching) {		
                    calendar.fetching = true;
        
                    $('.front-panel .event-loader').show();
                    $('.front-panel .entries').html('');
                    // 	FOR NOW PLACED INSIDE setTimeout to simulate ajax fetching. SHOULD be replaced by actual fetching of data.
                    setTimeout(function(){
                        for (var i = 0; i < entries.length; i++) {
                            var avatar = entries[i].avatar || 'https://app-a.salarium.com/assets/img/placeholder.png';
                            var entryTemplate = 
                            '<div class="entry" data-type="'+ type +'" data-id="'+ entries[i].id +'" data-date="'+ date +'">' +
                                '<img src="' + avatar + '" class="entry-image img-circle" />' +
                                '<div class="entry-details">' +
                                    '<p class="entry-name">' + entries[i].name + '</p>' +
                                    '<p class="entry-status">' + entries[i].status + '</p>' +
                                '</div>' +
                            '</div>';
        
                            $('.front-panel .entries').append(entryTemplate);
                        };
                        $('.front-panel .event-loader').hide();
                        calendar.fetching = false;
                    }, 1200);
                };
            },
            showDetail: function(type, date, id) {
                $('.back-panel .event-detail').hide();
                $('.back-panel .event-loader').show();
        
                $('.event-detail').attr('data-type', type);
                
                $('.back-panel .emp-name').html('Entry Title');
                $('.back-panel .event-date').html(date);
        
                setTimeout(function(){
                    $('.back-panel .event-loader').hide();
                    $('.back-panel .event-detail').show();
                }, 1200);
            },
            render: function() {
                $('#calendar').fullCalendar( 'destroy' );
                $('#calendar').fullCalendar({
                    eventClick: function(calEvent, jsEvent, view) {
                        var target = $(jsEvent.currentTarget);
                        var parent = $(jsEvent.currentTarget).parent();
                        $('.card-wrapper').css({
                            top: parent.offset().top + 2,
                            left: target.offset().left + parent.width() + 4,
                            display: 'block'
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
                        } else {
                            // IF SINGLE ENTRY
                            calendar.showDetail(calEvent.eventType, moment(calEvent.start._i).format("dddd, MMMM Do YYYY"), calEvent.entries[0].id);
                            $('.card').css({'opacity': 1, 'transform': 'scale(1) rotateY(180deg)'});
                            // $('.card').css({'transform': ''});
                        };
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
            // INITIALIZE SIDEBAR FILTER FOR CALENDAR
            $(".sidebar.left").sidebar();
        
            // GENERATE CALENDAR EVENTS
            calendar.fetchEvents();
        
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
                calendar.showDetail(type, moment(date).format("dddd, MMMM Do YYYY"), id);
            });
        });
        
        (function () {
            var burger1;
            burger1 = document.querySelector('.burger1');
            burger1.addEventListener('click', function () {
                return burger1.classList.toggle('on');
            });
        }.call(this));