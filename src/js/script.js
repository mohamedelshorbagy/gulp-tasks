$(document).ready(function() {


    // Tabs Section

    // Active Links
    $("#tabs .col").click(function () {
        $(this).addClass('active-tab').siblings().removeClass('active-tab');

    });


    // Coding Tabs Section
  $('#tabs .col').click(function() {
    
    var tab = $(this).attr('id');

    $('.platform .container .row .col-6.tabs_content div').hide();


    $('.' + tab + '-content').fadeIn(500);

  });




/* Active Links in Navbar */ 
$(window).scroll(function() {

      for(var i = 0 ;i < $('.nav-link').length ; i++) {
        if($('.nav-link').eq(i).hasClass('active')) {
          $('.nav-link').eq(i).siblings().css('opacity','1');
          $('.nav-link').not($('.nav-link').eq(i)).removeClass('active').siblings().css('opacity','0');
        } else {
          console.log('Not Found' , i);
        }
      }

})    
/* End */
/* Check if User Hovers in any Link */ 
  $('.nav-link').mouseenter(function() {
    $(this).find('div.overlay-navbar').css('opacity' , '1 !important');
  })

  $('.nav-link').mouseleave(function() {
    $(this).find('div.overlay-navbar').css('opacity' , '0 !important');
  })


/* End */








/* Scroll To Section */
    $("ul.navbar-nav li.nav-item a.nav-link").click(function () {
            
        $("html , body").animate({
        
            scrollTop: $('#' + $(this).data('value')).offset().top
        
        }, 1000);
    
    
    });

    $("ul.navbar-nav li.nav-item div.overlay-navbar").click(function () {
            
        $("html , body").animate({
        
            scrollTop: $('#' + $(this).data('value')).offset().top
        
        }, 1000);
    
    
    });

/* End */

/* Scroll TO Bottom */

  $('.scroll-down').click(function() {

    $('html , body').animate({
      scrollTop: $('#' + $(this).data('value')).offset().top

    }, 1000)
  })


/* End */
/* Button Request Demo */

$('.btn-gradient').click(function() {

    $('html , body').animate({
      scrollTop: $('#contact').offset().top

    }, 1000)
  })





/* End */




})