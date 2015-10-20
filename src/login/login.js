;(function($) {

  // DOM Ready
  $(function() {

    // Binding a click event
    // From jQuery v.1.7.0 use .on() instead of .bind()
    $('.footer_lock').bind('click', function(e) {

      // Prevents the default action to be triggered.
      e.preventDefault();

      // Triggering bPopup when click event is fired
      $('.login').bPopup();

    });

  });

})(jQuery);
jQuery('input[placeholder], textarea[placeholder]').placeholder();
