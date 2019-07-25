$(document).ready(() => {
  $('.slider').slick({
    arrows: false,
    swipe: true,
    autoplay: true
  });
  const sidebar = $('aside');
  const menu = $('.menu');
  menu.on('click', () => {
    sidebar.toggleClass('hide');
    if (!sidebar.hasClass('hide')) {
      menu.text('X');
    } else {
      menu.html('&#9776;');
      $('.slider').slick('refresh');
    }
  });
});
