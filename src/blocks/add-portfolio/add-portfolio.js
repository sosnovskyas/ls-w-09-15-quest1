;(function($) {

  // DOM Ready
  $(function() {

    // Binding a click event
    // From jQuery v.1.7.0 use .on() instead of .bind()
    $('.add-portfolio_button').bind('click', function(e) {

      // Prevents the default action to be triggered.
      e.preventDefault();

      // Triggering bPopup when click event is fired
      $('.add-portfolio_form').bPopup();
    });

    // ВАЛИДАЦИЯ
    $('#add-portfolio').on('submit', function(e) {
      e.preventDefault();
      validateThis($(this));
    });
  });
})(jQuery);

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
