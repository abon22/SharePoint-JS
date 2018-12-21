$.fn.pageMe = function(opts){
    var $this = this,
        defaults = {
            activeColor: 'blue',
            perPage: 10,
            showPrevNext: false,
            nextText: '',
            prevText: '',
            hidePageNumbers: false
        },
        settings = $.extend(defaults, opts);

    var listElement = $this;
    var perPage = settings.perPage;
    var children = listElement.children();
    var pager = $('.pager');

   // var pager = $('#myPager');
    $('#myPager').html("");

    if (typeof settings.childSelector!="undefined") {
        children = listElement.find(settings.childSelector);
    }

    if (typeof settings.pagerSelector!="undefined") {
        pager = $(settings.pagerSelector);
    }

    var numItems = children.size();
    var numPages = Math.ceil(numItems/perPage);

    //console.log(perPage);
    
    $("#total_reg").html("<b>"+numItems+" Entries</b> In Total <br><label><i><label style='color:red;'>*</label>Business Days (8am - 5pm)</i></label><br><label><i><label style='color:red;'>*</label>Unit of measurement: hr/s</i></label>");

    pager.data("curr",0);

    if (settings.showPrevNext){
        $('<a href="#" class="prev_link icon item" title="'+settings.prevText+'"><i class="left chevron icon"></i></a>').appendTo(pager);
    }

    var curr = 0;
    while(numPages > curr && (settings.hidePageNumbers==false)){

        $('<a href="#" class="page_link item">'+(curr+1)+'</a>').appendTo(pager);
        curr++;
    }

    if (settings.showPrevNext){
        $('<a href="#" class="next_link icon item"  title="'+settings.nextText+'"> <i class="right chevron icon"></i></a>').appendTo(pager);
    }

    pager.find('.page_link:first').addClass('active');
    pager.find('.prev_link').hide();
    if (numPages<=1) {
        pager.find('.next_link').hide();
    }
  	pager.children().eq(1).addClass("active "+settings.activeColor);

    children.hide();
   // console.log(children);
    children.slice(0, perPage).show();
    //console.log(children.slice(0, perPage));

    pager.find('.page_link').click(function(){
        var clickedPage = $(this).html().valueOf()-1;
        goTo(clickedPage,perPage);
        return false;
    });
    pager.find('.prev_link').click(function(){
        previous();
        return false;
    });
    pager.find('.next_link').click(function(){
        next();
        return false;
    });

    function previous(){
        var goToPage = parseInt(pager.data("curr")) - 1;
        goTo(goToPage);
    }

    function next(){
        goToPage = parseInt(pager.data("curr")) + 1;
        goTo(goToPage);
    }

    function goTo(page){
        var startAt = page * perPage,
            endOn = startAt + perPage;

            


        children.css('display','none').slice(startAt, endOn).show();

        if (page>=1) {
            pager.find('.prev_link').show();
        }
        else {
            pager.find('.prev_link').hide();
        }

        if (page<(numPages-1)) {
            pager.find('.next_link').show();
        }
        else {
            pager.find('.next_link').hide();
        }

        pager.data("curr",page);
      	pager.children().removeClass("active "+settings.activeColor);
        pager.children().eq(page+1).addClass("active "+settings.activeColor);

    }
};
