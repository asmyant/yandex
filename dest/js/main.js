function Marquee(selector, speed) {
    const parentSelector = document.querySelectorAll(selector);

    parentSelector.forEach((marquee) => {
        const clone = marquee.innerHTML;
        const firstElement = marquee.children[0];
        let i = 0;

        marquee.insertAdjacentHTML('beforeend', clone);

        marquee.insertAdjacentHTML('beforeend', clone);

        setInterval(function () {
            firstElement.style.marginLeft = `-${i}px`;
            if (i > firstElement.clientWidth) {
                i = 0;
            }
            i = i + speed;
        }, 0);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    let headerFigureQueen = document.querySelector('.js-header-queen');
    let headerFigureKing = document.querySelector('.js-header-king');
    let headerFigureHorse = document.querySelector('.js-header-horse');
    let headerFigurePawn = document.querySelector('.js-header-pawn');

    setTimeout(() => {
        headerFigureQueen.classList.add('site-header-layer__queen--is-show');
        headerFigureHorse.classList.add('site-header-layer__horse--is-show')
    }, 500);

    setTimeout(() => {
        headerFigureKing.classList.add('site-header-layer__king--is-show');
        headerFigurePawn.classList.add('site-header-layer__pawn--is-show');
    }, 1000);

    new Swiper('.js-partners-slider', {
        spaceBetween: 20,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: '.js-partners-slider__next',
            prevEl: '.js-partners-slider__prev',
        },
        pagination: {
            el: '.js-partners-slider__pagination',
            type: "fraction",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 3,
            },
        },
    });

    if (window.innerWidth < 991) {
        new Swiper('.js-steps-slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.js-steps-slider__next',
                prevEl: '.js-steps-slider__prev',
            },
            pagination: {
                el: '.js-steps-slider__pagination',
            },
        });
    }

    Marquee('.running-line', 0.2)
});
