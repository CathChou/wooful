//scrollfix
var ww = $(window).width();
$(document).ready(function() {
    if (ww < 1024) {
        var secondaryNav = $('.logopic'),
        navHeight = secondaryNav.offset().top+200;
    }
    else {
        var secondaryNav = $('.logopic'),
        navHeight = secondaryNav.offset().top+1200;
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
    $('#bt-speed, #bt2-speed, #bt3-speed').click(function(){
        $('body,html').animate({scrollTop:$('#speed-content').offset().top-150}, 800);
    });
    $('#bt-fashion, #bt2-fashion, #bt3-fashion').click(function(){
        $('body,html').animate({scrollTop:$('#fashion-content').offset().top-150}, 800);
    });
    $('#bt-business, #bt2-business, #bt3-business').click(function(){
        $('body,html').animate({scrollTop:$('#business-content').offset().top-150}, 800);
    });
    $('#bt-music, #bt2-music, #bt3-music').click(function(){
        $('body,html').animate({scrollTop:$('#music-content').offset().top-150}, 800);
    });
    $('#bt-game, #bt2-game, #bt3-game').click(function(){
        $('body,html').animate({scrollTop:$('#game-content').offset().top-150}, 800);
    });
    $('#bt-dts, #bt2-dts, #bt3-dts').click(function(){
        $('body,html').animate({scrollTop:$('#dts-content').offset().top-150}, 800);
    });
    $('#bt-voice, #bt2-voice, #bt3-voice').click(function(){
        $('body,html').animate({scrollTop:$('#voice-content').offset().top-150}, 800);
    });
    $('#bt-remote, #bt2-remote, #bt3-remote').click(function(){
        $('body,html').animate({scrollTop:$('#remote-content').offset().top-150}, 800);
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








