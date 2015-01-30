jQuery(document).ready(function($){

  $('.menu').click(function(){
    
    if ( $('.nav-wrap').css('display') == 'none' ) {

      $('.nav-wrap').addClass('show');
      // $('.navicon').removeClass('closed').addClass('open');
      // $('.navicon').children('.fa').removeClass('fa-navicon').addClass('fa-close');

    } else {

      $('.nav-wrap').removeClass('show');
      // $('.navicon').removeClass('open').addClass('closed');
      // $('.navicon').children('.fa').removeClass('fa-close').addClass('fa-navicon');

    }

  });
  
  $('ul.nav li a').click(function(){
    $('.menu').removeClass('open');
    $('.nav-wrap').removeClass('show');
  });

  // Responsive iframes
  function responsiveIframe() {
    $('iframe').each(function(){
      var iw = $(this).width();
      var ih = $(this).height();
      var ip = $(this).parent().width();
      var ipw = ip/iw;
      var ipwh = Math.round(ih*ipw);
      $(this).css({
        'width': ip,
        'height' : ipwh,
      });
    });
  }

  responsiveIframe();

  // Trigger video resize if browser is resized
  $(window).resize(function(){
    responsiveIframe();
  });

  // Watch body height to see if font size settings are changed
  var watch_el = $('body');
  var el_height = watch_el.innerHeight();

  window.setInterval(function(){
    var new_height = watch_el.innerHeight();
    if ( new_height != el_height ) {
      el_height = new_height;
      responsiveIframe();
    }
  }, 200);

});