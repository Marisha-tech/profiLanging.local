// Открытие мобального меню по нажатию на бургер
$(document).on('click', '#mobileMenuTarget', () => {
    $('.menu-mobile').fadeIn(400);
    $('.menu-mobile__close').fadeIn(400);
});
// Закрыте мобильного меню по нажатию на крестик
$(document).on('click', '.menu-mobile__close', () => {
    $('.menu-mobile').fadeOut(400);
    $('.menu-mobile__close').fadeOut(400);
});
// Закрыте мобильного меню по нажатию мимо области
$(document).mouseup(function (e) {
    if ($(window).width() <= '991') {
        var container = $(".menu-mobile");
        if (container.has(e.target).length === 0) {
            $('.menu-mobile').fadeOut(400);
            $('.menu-mobile__close').fadeOut(400);
        }
    }
});
