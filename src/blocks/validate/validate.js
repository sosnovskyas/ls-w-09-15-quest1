function validateThis(form) {
  var textType = form.find('[data-validation=\'text\']');
  var mailType = form.find('[data-validation=\'mail\']');
  var loginType = form.find('[data-validation=\'login\']');
  var passwordType = form.find('[data-validation=\'password\']');

  loginType.each(function() {
    var $this = $(this);
    var notEmptyField = !!$this.val();

    if (notEmptyField) {
      $this.removeClass('error');
    } else {
      $this.addClass('error');
      $this.qtip(
        {
          content: {
            text: 'введите логин'
          },
          style: {classes: 'error'},
          show: {
            target: $('.error')
          }
        });
    }
  });
  passwordType.each(function() {
    var $this = $(this);
    var notEmptyField = !!$this.val();

    if (notEmptyField) {
      $this.removeClass('error');
    } else {
      $this.addClass('error');
      $this.qtip(
        {
          content: 'введите парроль',
          style: {tip: 'Left'}
        });
    }
  });

  textType.each(function() {
    var $this = $(this);
    var notEmptyField = !!$this.val();

    if (notEmptyField) {
      $this.removeClass('error');
    } else {
      $this.addClass('error');
    }
  });

  mailType.each(function() {
    var $this = $(this);
    var regExp = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    var isMail = regExp.test($this.val());
    if (isMail) {
      $this.removeClass('error');
    } else {
      $this.addClass('error');
      $this.qtip({
        content: 'введите валидную почту',
        position: 'bottom'
      });

    }
  });

  return !(form.find('.error').length);
}
//
//// очистка ошибки при вводе
//$('.input, .textarea').on('keyup', function(e) {
//  $(this).removeClass('error');
//});
