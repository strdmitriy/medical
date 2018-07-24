$(function() {

  $('ul.js-education-programm__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.education-program__content').removeClass('active-tab').eq($(this).index()).addClass('active-tab');
  });

})
