// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

var myApp = new Framework7();

// 1 Slide Per View, 50px Between
var mySwiper1 = myApp.swiper('.swiper-1', {
  pagination:'.swiper-1 .swiper-pagination',
  spaceBetween: 50
});

// 2 Slides Per View, 20px Between
var mySwiper2 = myApp.swiper('.swiper-2', {
  pagination:'.swiper-2 .swiper-pagination',
  spaceBetween: 20,
  slidesPerView: 2
});

// 3 Slides Per View, 10px Between
var mySwiper3 = myApp.swiper('.swiper-3', {
  pagination:'.swiper-3 .swiper-pagination',
  spaceBetween: 10,
  slidesPerView: 3
});

// Vertical, 0px Between
var mySwiperVertical = myApp.swiper('.swiper-vertical', {
  pagination:'.swiper-vertical .swiper-pagination',
  direction: 'vertical'
});

// Slow speed
var mySwiperSlow = myApp.swiper('.swiper-slow', {
  pagination:'.swiper-slow .swiper-pagination',
  speed: 600
});  
