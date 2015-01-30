$(function() {
  var topoffset = 115;

  var isTouch = 'ontouchstart' in document.documentElement;

  //window height
  var wheight = $(window).height(); //get height of the window

  $('.fullheight').css('height', wheight);

  $(window).resize(function() {
    var wheight = $(window).height(); //get height of the window
    $('.fullheight').css('height', wheight);
  }) //on resize


// Animated Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      } // target.length
    } //location hostname
  }); //on click

  //highlight navigation
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop() + topoffset;
    $('ul.nav li a').removeClass('active');

    if (windowpos > $('#about-us').offset().top) {
      $('ul.nav li a').removeClass('active');
      $('a[href$="#about-us"]').addClass('active');
    } //windowpos

    if (windowpos > $('#features').offset().top) {
      $('ul.nav li a').removeClass('active');
      $('a[href$="#features"]').addClass('active');
    } //windowpos

    if (windowpos > $('#get-started').offset().top) {
      $('ul.nav li a').removeClass('active');
      $('a[href$="#get-started"]').addClass('active');
    } //windowpos

    if (windowpos > $('#uses').offset().top) {
      $('ul.nav li a').removeClass('active');
      $('a[href$="#uses"]').addClass('active');
    } //windowpos

    if (windowpos > $('#why').offset().top) {
      $('ul.nav li a').removeClass('active');
      $('a[href$="#why"]').addClass('active');
    } //windowpos

  }); //window scroll




  //set up ScrollMagic
  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onLeave"
    }
  });

  //pin the navigation
  var pin = new ScrollScene({
    triggerElement: 'hgroup',
   }).setPin('hgroup').addTo(controller);


  if(!isTouch) {
    //room animations
    var roomOrigin = {
      bottom: -700,
      opacity: 0,
      scale: 0
    }

    var roomDest = {
      repeat: 1,
      yoyo: true,
      bottom: 0,
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    }

    var roomtween = TweenMax.staggerFromTo(
      "#westminster .content",
      1, roomOrigin, roomDest);

    var pin = new ScrollScene({
      triggerElement: '#westminster',
      offset: -topoffset,
      duration: 500
    }).setPin('#westminster')
      .setTween(roomtween)
      .addTo(controller)


    var roomtween = TweenMax.staggerFromTo(
      "#oxford .content",
      1, roomOrigin, roomDest);

    var pin = new ScrollScene({
      triggerElement: '#oxford',
      offset: -topoffset,
      duration: 500
    }).setPin('#oxford')
      .setTween(roomtween)
      .addTo(controller)

    var roomtween = TweenMax.staggerFromTo(
      "#victoria .content",
      1, roomOrigin, roomDest);

    var pin = new ScrollScene({
      triggerElement: '#victoria',
      offset: -topoffset,
      duration: 500
    }).setPin('#victoria')
      .setTween(roomtween)
      .addTo(controller)

    var roomtween = TweenMax.staggerFromTo(
      "#manchester .content",
      1, roomOrigin, roomDest);

    var pin = new ScrollScene({
      triggerElement: '#manchester',
      offset: -topoffset,
      duration: 500
    }).setPin('#manchester')
      .setTween(roomtween)
      .addTo(controller)

    var roomtween = TweenMax.staggerFromTo(
      "#piccadilly .content",
      1, roomOrigin, roomDest);

    var pin = new ScrollScene({
      triggerElement: '#piccadilly',
      offset: -topoffset,
      duration: 500
    }).setPin('#piccadilly')
      .setTween(roomtween)
      .addTo(controller)


    var roomtween = TweenMax.staggerFromTo(
      "#cambridge .content",
      1, roomOrigin, roomDest);

    var pin = new ScrollScene({
      triggerElement: '#cambridge',
      offset: -topoffset,
      duration: 500
    }).setPin('#cambridge')
      .setTween(roomtween)
      .addTo(controller)

  } //not a touch device


  //atractions animation
  var attractionstween = TweenMax.staggerFromTo('.facebook-shop', 1, { bottom: -1000, opacity: 0, scale: 0 },
      {delay: 1, bottom: 0, opacity: 1, scale: 1,
        ease: Back.easeOut});


  var scene = new ScrollScene({
    triggerElement: '#attractions',
    offset: -topoffset
  }).setTween(attractionstween)
    .addTo(controller);
}); //on load