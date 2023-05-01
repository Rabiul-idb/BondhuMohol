$(document).ready(function (){
    // for navbar active class
    $('.menu-bar .menu ul li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.menu').removeClass('show');
        $(".nav-toggoler i").removeClass("fa-xmark");
      });

     // smooth scrolling
     $('.menu-bar a[href^="#"]').click(function(e){
        e.preventDefault();

        var target = this.hash;
        $('html,body').animate({
            scrollTop: $(target).offset().top-70
        },2000);
     });

     // stiky navbar
     $(window).scroll(function(){
        var ourwindow = $(window).scrollTop();
        if(ourwindow > 150){
            $('body').addClass('stiky');
        }else{
            $('body').removeClass('stiky');
        }
     });

     // navbar toggoler show hide drawer
     $('.nav-toggoler').click(function(){
         $('.menu').toggleClass('show');
        $(".nav-toggoler i").toggleClass("fa-xmark");
     });
     if ($('.menu').hasClass('show')) {
        $('.menu').removeClass('show')
     } else {
        
     }
     
});