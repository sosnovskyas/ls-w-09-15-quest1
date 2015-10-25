function validateThis(form) {
  var textType = form.find('[data-validation=\'text\']');
  var mailType = form.find('[data-validation=\'mail\']');
  textType.each(function() {
    var $this = $(this);
    var notEmptyField = !!$this.val();

    if (notEmptyField) {
      $this.removeClass('error');
    } else {
      $this.addClass('error');
      $this.tooltip({
        content: 'заполните поле',
        position: 'top'
      });
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
      $this.tooltip({
        content: 'введите валидную почту',
        position: 'bottom'
      });

    }
  });

  return !(form.find('.error').length);
}