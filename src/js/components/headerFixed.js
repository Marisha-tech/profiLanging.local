document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const header = document.querySelector('.header');

    const headerFixed = () => {
        let scrollTop = window.scrollY;//число прокрутки
        let heroCenter = hero.offsetHeight / 2;//середина блока hero

        if (scrollTop >= heroCenter) {
            header.classList.add('fixed')
            hero.style.marginTop = `${header.offsetHeight}px`;//чтобы не было прыжка при скролле
        } else {
            header.classList.remove('fixed')
            hero.style.marginTop = `0px`;
        }
    };

    headerFixed();
    window.addEventListener('scroll', () => {
        headerFixed();
    })
});
