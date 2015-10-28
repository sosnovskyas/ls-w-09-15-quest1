;(function($) {
  // DOM Ready
  $(function() {
    $('[type=reset]').on('click', function() {
      $('.error').removeClass('error');
      $('input[type=text], textarea').val('');
      $('.qtip').qtip('destroy');
    });

    // VALIDATE-TOOLTIP
    $('.feedback').validate({
      rules: {
        name: 'required',
        caption: 'required',
        captcha: 'required',
        mail: 'required'
      },
      messages: {
        name: 'введите имя',
        caption: 'введите отписание',
        captcha: 'введите captcha',
        mail: 'введите email'
      },
      success: function() {
        setTimeout(function() {
          $('.feedback').find('.valid').qtip('destroy');
        }, 1);
      },
      submitHandler: function() {
        // my ajax
        return false;
      },
      errorPlacement: function(error, element) {
        var elem = $(element);
        var corners = ['left center', 'right center'];
        var flipIt = elem.parents('.qtip-right').length > 0;

        $(element).filter(':not(.valid)').qtip({ // Apply the tooltip only if it isn't valid
          content: error,
          position: {
            my: corners[flipIt ? 0 : 1],
            at: corners[flipIt ? 1 : 0],
            viewport: $(window)
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
        }).qtip('option', 'content.text', error);
      } // closes errorPlacement
    }); // closes validate()
  });

  jQuery('input[placeholder], textarea[placeholder]').placeholder();
})(jQuery);
