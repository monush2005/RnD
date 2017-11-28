// Grid-List View
$(document).ready(function(){

$('.grid_list_btns span').on('click',function(e) {
    if ($(this).hasClass('list_view_icon')) {
        $('ul.grid_view').addClass('list_view');
		$('span').removeClass('list_view_icon').addClass('grid_view_icon');			
		
    }
    else if($(this).hasClass('grid_view_icon')) {
        $('ul.grid_view').removeClass('list_view');
		$('span').addClass('list_view_icon').removeClass('grid_view_icon');	
    }
});


});


// Left Sidebar
function injectAsidebar(jQuery) {
  jQuery.fn.asidebar = function asidebar(status) {
    switch (status) {
      case "open":
        var that = this;
        // fade in backdrop
        if ($(".aside-backdrop").length === 0) {
          $("body").append("<div class='aside-backdrop'></div>");
        }
        $(".aside-backdrop").addClass("in");


        function close() {
          $(that).asidebar.apply(that, ["close"]);
        }

        // slide in asidebar
        $(this).addClass("in");
        $(this).find("[data-dismiss=aside], [data-dismiss=asidebar]").on('click', close);
        $(".aside-backdrop").on('click', close);
        break;
      case "close":
        // fade in backdrop
        if ($(".aside-backdrop.in").length > 0) {
          $(".aside-backdrop").removeClass("in");
        }

        // slide in asidebar
        $(this).removeClass("in");
        break;
      case "toggle":
        if($(this).attr("class").split(' ').indexOf('in') > -1) {
          $(this).asidebar("close");
        } else {
          $(this).asidebar("open");
        }
        break;
    }
  }
}

// support browser and node
if (typeof jQuery !== "undefined") {
  injectAsidebar(jQuery);
} else if (typeof module !== "undefined" && module.exports) {
  module.exports = injectAsidebar;
}



// Expending Searchbar
 $(document).ready(function(){
            var submitIcon = $('.searchbox-icon');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen == false){
                    searchBox.addClass('searchbox-open');
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');
                    inputBox.focusout();
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            $(document).mouseup(function(){
                    if(isOpen == true){
                        $('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
                });
        });
            function buttonUp(){
                var inputVal = $('.searchbox-input').val();
                inputVal = $.trim(inputVal).length;
                if( inputVal !== 0){
                    $('.searchbox-icon').css('display','block');
                } else {
                    $('.searchbox-input').val('');
                    $('.searchbox-icon').css('display','block');
                }
            }
			
			
// Hide Address-Bar
if (navigator.userAgent.indexOf('iPhone') != -1)
{
addEventListener("load", function()
{
setTimeout(hideURLbar, 0);
}, false);
}

function hideURLbar()
{
window.scrollTo(0, 1);
}

