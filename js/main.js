!function(e){"use strict";function s(){var s=e("#header").height();e(".header-height").css("height",s+"px")}e(window).on("load",(function(){e("body").addClass("loaded")})),e(document).ready((function(){e("input#filtersearch").bind("keyup change",(function(){0!==e(this).val().trim().length?e("#search-text .search-text-result").show().hide().each((function(){e(this).is(":icontains("+e("input#filtersearch").val()+")")&&(e(".ripple").addClass("d-flex").delay(1e3).queue((function(s){e(this).removeClass("d-flex"),s()})),e(this).show(500))})):e("#search-text .search-text-result").show().hide().each((function(){e(this).show()}))})),e.expr[":"].icontains=function(e,s,t,a){return(e.textContent||e.innerText||jQuery(e).text()||"").toLowerCase().indexOf(t[3].toLowerCase())>=0}})),e(document).ready((function(){e("input#filtersearch1").bind("keyup change",(function(){0!==e(this).val().trim().length?e("#search-text .search-text-result1").show().hide().each((function(){e(this).is(":icontains("+e("input#filtersearch1").val()+")")&&(e(".ripple").addClass("d-flex").delay(1e3).queue((function(s){e(this).removeClass("d-flex"),s()})),e(this).show(500))})):e("#search-text .search-text-result1").show().hide().each((function(){e(this).show()}))})),e.expr[":"].icontains=function(e,s,t,a){return(e.textContent||e.innerText||jQuery(e).text()||"").toLowerCase().indexOf(t[3].toLowerCase())>=0}})),e((function(){var t=e("#header");s(),e(window).resize(s),e(window).on("scroll",(function(){e(window).scrollTop()>=80?(t.addClass("navbar-fixed-top animated slideInDown"),e(".slicknav_nav").css("display","none")):t.removeClass("navbar-fixed-top animated slideInDown")}))})),e(".menu-wrap ul.nav").slicknav({prependTo:".header-section .navbar",label:"",allowParentLinks:!0,closeOnClick:!0}),e(".default-btn, .anim-btn").on("mouseenter",(function(s){var t=e(this).offset(),a=s.pageX-t.left,i=s.pageY-t.top;e(this).find("span").css({top:i,left:a})})).on("mouseout",(function(s){var t=e(this).offset(),a=s.pageX-t.left,i=s.pageY-t.top;e(this).find("span").css({top:i,left:a})})),e("#screenshot-carousel").owlCarousel({loop:!0,margin:15,autoplay:!0,smartSpeed:500,nav:!0,navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],dots:!1,responsive:{0:{items:1},580:{items:2},768:{items:2},992:{items:3}}}),e("#testimonial-carousel").owlCarousel({loop:!0,margin:15,autoplay:!1,smartSpeed:500,nav:!0,navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],dots:!1,responsive:{0:{items:1},580:{items:1},768:{items:2},992:{items:3}}}),e("#testimonial-carousel-2").owlCarousel({loop:!0,margin:10,center:!1,autoplay:!0,smartSpeed:500,nav:!0,navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],dots:!1,responsive:{0:{items:1},480:{items:1},768:{items:1},992:{items:1}}}),e("#sponsor-carousel").owlCarousel({loop:!0,margin:15,center:!1,autoplay:!0,smartSpeed:500,nav:!1,navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],dots:!1,responsive:{0:{items:2},480:{items:3},768:{items:3},992:{items:6}}}),e(".odometer").waypoint((function(){e(".odometer").each((function(){var s=e(this).attr("data-count");e(this).html(s)}))}),{offset:"80%",triggerOnce:!0}),e(".collapse").on("shown.bs.collapse",(function(){e(".collapse.show").parent().addClass("active-acc")})),e(".collapse").on("hidden.bs.collapse",(function(){e(".collapse").parent().removeClass("active-acc")})),e(".acc-item h5 a").click((function(s){e(this).closest(".acc-item").siblings().removeClass("active-acc"),e(this).closest(".acc-item").toggleClass("active-acc"),e(this).animate({scrollTop:e(this).offset().top},200)})),smoothScroll.init({offset:60}),e(window).on("scroll",(function(){e(this).scrollTop()>100?e("#scroll-to-top").fadeIn():e("#scroll-to-top").fadeOut()})),e(".lightbox").venobox({numeratio:!0,infinigall:!0,share:["facebook","twitter","pinterest"]}),(new WOW).init(),e(".subscribe_form").length>0&&e(".subscribe_form").ajaxChimp({language:"es",callback:function(s){"success"===s.result?(e("#subscribe-result").addClass("subs-result"),e(".subscription-success").text(s.msg).fadeIn(),e(".subscription-error").fadeOut()):"error"===s.result&&(e("#subscribe-result").addClass("subs-result"),e(".subscription-error").text(s.msg).fadeIn())},url:"//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369"});var t=(new Date).getFullYear();e("#currentYear").append(t)}(jQuery);