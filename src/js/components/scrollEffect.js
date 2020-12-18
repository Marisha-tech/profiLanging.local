/*document.addEventListener('DOMContentLoaded', () => {
    const scrollItems = document.querySelectorAll('.scroll-item');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY; //центр окна при скролле
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 4);//расстояние от блока до начала сайта

            if (windowCenter >= scrollOffset){
                el.classList.add('animation-class');
            } else{
                if ( !el.classList.contains('animation-no')){
                    el.classList.remove('animation-class');
                }
            }
        });

    };
    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    })
});*/

let animItems = document.querySelectorAll('.scroll-item');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('animation-class');
            } else {
                if (!animItem.classList.contains('animation-no')) {//чтобы не происходила повторная анимация при скролле
                    animItem.classList.remove('animation-class');
                }
            }
        }

    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }

    animOnScroll();
}
