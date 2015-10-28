;(function($) {

  // DOM Ready
  $(function() {
    // bPopup
    $('.footer_lock').bind('click', function(e) {

      // Prevents the default action to be triggered.
      e.preventDefault();

      // Triggering bPopup when click event is fired
      $('.login').bPopup({
        modalClose: true,
        onClose: function() {
          $('.error').removeClass('error');
          $('input, textarea').val('');
          $('.qtip').qtip('destroy');
        }
      });

    });

    // VALIDATE-TOOLTIP
    $('#login-form').validate({
      rules: {
        login: 'required',
        password: 'required'
      },
      messages: {
        login: 'введите логин',
        password: 'введите пароль'
      },
      success: function(error) {
        setTimeout(function() {
          $('#login-form').find('.valid').qtip('destroy');
        }, 1);
      },
      submitHandler: function(form) {
        // my ajax
        return false;
      },
      errorPlacement: function(error, element) {
        $(element).filter(':not(.valid)').qtip({ // Apply the tooltip only if it isn't valid
          content: error,
          position: {
            my: 'right center', // tooltip positipon
            at: 'left center', //target position
            target: element
          },
          show: {
            ready: true
          },
          hide: {
            event: 'keydown hideTooltip'
          },
          style: {
            classes: 'qtip-rounded my-qtip-class',
            tip: {
              corner: true,
              height: 9,
              width: 10
            }
          }
        }).trigger('show').qtip('option', 'content.text', error);
      } // closes errorPlacement
    }); // closes validate()
  });

  jQuery('input[placeholder], textarea[placeholder]').placeholder();
})(jQuery);