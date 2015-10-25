/*
 $(document).ready(function() {
 $('#form').on('submit', function(e) {
 e.preventDefault();
 $('.form__label-input_name').tooltip({

 });
 });
 });
*/

$.fn.tooltip = function(options) {
  // перебераем все поступившие на вход
  this.each(function() {
    var markup;

    var $this = $(this);
    var body = $('body');
    function _positionIt(elem, tooltip, position) {
      // зимеряем элемент
      var elemWidth = elem.outerWidth(true);
      var elemHeight = elem.outerHeight(true);
      var topEdge = elem.offset().top;
      var bottomEdge = topEdge + elemHeight;
      var leftEdge = elem.offset().left;
      var rightEdge = leftEdge + elemWidth;

      // измеряем тултип
      var tooltipHeight = tooltip.outerHeight(true);
      var tooltipWidth = tooltip.outerWidth(true);
      var leftCentered = (elemWidth / 2) - (tooltipWidth / 2);
      var topCentered = (elemHeight / 2) - (tooltipHeight / 2);

      //var positions = {};

      switch (position) {
        case 'right':
          position = {
            left: rightEdge,
            top: topEdge + topCentered
          };
          break;
        case 'top':
          position = {
            left: leftEdge + leftCentered,
            top: topEdge - tooltipHeight
          };
          break;
        case 'bottom':
          position = {
            left: leftEdge + leftCentered,
            top: bottomEdge
          };
          break;
        case 'left':
          position = {
            left: leftEdge - tooltipWidth,
            top: topEdge + topCentered
          };
          break;
      }

      tooltip
        .offset(position);
    }

    $this
      .addClass('tooltipstered')
      .attr('data-tooltip-position', options.position);

    options = {
      position: options.position || 'right',
      content: options.content || 'i am tooltip'
    };

    markup = '<div class="tooltip tooltip_' +
      options.position +
      '"><div class="tooltip__inner">' +
      options.content +
      '</div></div>';

    // рисуем
    body.append(markup);

    // позиционируем
    _positionIt($this, body.find('.tooltip').last(), options.position);

    // при клике по любому месту документа убираем тултипы
    $(document).on('click', function() {
      $('.toolitp').remove();
    });

    $(window).resize(function() {
      var tooltip = $('.tooltip');
      var tooltipsArray = [];

      tooltip.each(function() {
        tooltipsArray.push($(this));
      });

      $('.tooltipstered').each(function(index) {
        var position = $(this).data('tooltip-position');
        _positionIt($(this), tooltipsArray[index], position);
      });
    });
  });
};
