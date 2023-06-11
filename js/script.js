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
            scrollTop: $(target).offset().top-100
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
     $('.nav-toggoler .fa-bars').click(function(){
         $('.menu').toggleClass('show');
        $(".nav-toggoler .fa-bars").toggleClass("fa-xmark");
     });
     if ($('.menu').hasClass('show')) {
        $('.menu').removeClass('show')
     } else {
        
     }

     // search option

     $('.search , .sarch').click(function(){
        $('.search-field').toggle('slow');
     });
     //============== filter by name =======================
     $("#filter").keyup(function () {
        var filter = $(this).val(), count = 0;
        $(".col-md-3").each(function () {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).addClass("hidden");
            } else {
                    $(this).removeClass("hidden");
                    count++;
            }
        });
        
     });
     
});
    