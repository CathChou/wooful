//reload
//var windowWidth = $(window).width();
    //$(window).resize(function() {
    //if(windowWidth != $(window).width()){
    //location.reload();
    //return;
    //}
//});

//scrollfix
var ww = $(window).width();
$(document).ready(function() {
    if (ww < 1024) {
        var secondaryNav = $('#navigation-menu, .menu-m'),
        navHeight = secondaryNav.offset().top+200;
    }
    else {
        var secondaryNav = $('#navigation-menu'),
        navHeight = secondaryNav.offset().top+400;
    }

    $(window).on('scroll', function() {
    
         if ($(window).scrollTop() > navHeight) {
             $('.scroll').addClass("fixed");
         }
         else {
             $('.scroll').removeClass("fixed");
         }
    });
});

//手機板選單收合
var ww = $(window).width();
$(document).ready(function() {
    $(".toggle-nav").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("");
        $(".menu-m ul").toggle();
    });
    adjustMenu();
})
$(window).bind('resize orientationchange', function() {
    ww = document.body.clientWidth;
    adjustMenu();
});
var adjustMenu = function() {
    if (ww < 1024) {
    $(".menu-m ul li").unbind('mouseenter mouseleave');
    $(".menu-m ul li .button").click(function(){
            $(".menu-m ul").hide();
    }); 
    }
}    

//選單下滑動態
$(function(){
    $('#bt-classic, #bt2-classic, #bt3-classic, #bt4-classic').click(function(){
        $('body,html').animate({scrollTop:$('#s-classic').offset().top-70}, 800);
    });
    $('#bt-ig, #bt2-ig, #bt3-ig, #bt4-ig').click(function(){
        $('body,html').animate({scrollTop:$('#s-ig').offset().top-200}, 800);
    });
    $('#bt-food, #bt2-food, #bt3-food, #bt4-food').click(function(){
        $('body,html').animate({scrollTop:$('#s-food').offset().top-70}, 800);
    });
    $('#bt-spot, #bt2-spot, #bt3-spot, #bt4-spot').click(function(){
        $('body,html').animate({scrollTop:$('#s-spot').offset().top-200}, 800);
    });
    $('#bt-go, #bt2-go, #bt3-go, #bt4-go').click(function(){
        $('body,html').animate({scrollTop:$('#s-go').offset().top-70}, 800);
    });
});

//backtotop
$(document).ready(function(){
    $("#back-top").hide();
    $(function () {
    $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
    $('#back-top').fadeIn();
    } else {
    $('#back-top').fadeOut();
    }
});
    $('#back-top a').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 800);
        return false;
        });
    });
});








