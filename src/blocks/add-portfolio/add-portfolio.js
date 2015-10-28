;(function($) {

  // DOM Ready
  $(function() {
    $('.add-portfolio_button').bind('click', function(e) {

      // Prevents the default action to be triggered.
      e.preventDefault();

      // Triggering bPopup when click event is fired
      $('.add-portfolio_form').bPopup({
        modalClose: true,
        onClose: function() {
          $('.error').removeClass('error');
          $('input[type=text], input[type=url], textarea').val('');
          $('.qtip').qtip('destroy');
        }
      });
    });

    // VALIDATE-TOOLTIP
    $('#add-portfolio').validate({
      rules: {
        name: 'required',
        upload: 'required',
        caption: 'required',
        url: 'required'
      },
      messages: {
        name: 'введите название',
        upload: 'выберете файл',
        caption: 'введите описание',
        url: 'введите url'
      },
      success: function(error) {
        setTimeout(function() {
          $('#add-portfolio').find('.valid').qtip('destroy');
        }, 1);
      },
      submitHandler: function(form) {
        // my ajax
        return false;
      },
      errorPlacement: function(error, element) {
        $(element).filter(':not(.valid)').qtip({ // Apply the tooltip only if it isn't valid
          overwrite: false,
          content: error,
          position: {
            my: 'right center', // tooltip positipon
            at: 'left center', //target position
            target: element,
            adjust: {
              mouse: false
            }
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
})(jQuery);

// FILE UPLOAD (input)
function getName(str) {
  if (str.lastIndexOf('\\')) {
    var i = str.lastIndexOf('\\') + 1;
  } else {
    var i = str.lastIndexOf('/') + 1;
  }
  var filename = str.slice(i);
  var uploaded = document.getElementById('fileformlabel');
  uploaded.innerHTML = filename;
}

jQuery('input[placeholder], textarea[placeholder]').placeholder();
