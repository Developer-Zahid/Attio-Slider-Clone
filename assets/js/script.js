// /* Utlity Function */
// function activeSlideTextRevealAnimation(selector, startDelay = 1000) {
//     anime({
//         targets: selector,
//         opacity: [0, 1],
//         translateY: ['100%', '0%'],
//         delay: anime.stagger(100, { start: (startDelay + (startDelay / 3)) }), // Stagger 100ms after startDelay delay
//         duration: 500,
//         easing: 'easeOutCubic',
//     });
// }

// /* Paragraph Text Split Function */
// new SplitType('[data-target="SplitText"]', {
//     tagName: "span",
//     types: "line, words",
// });

/* Swiper Slider Function */
new Swiper('[data-swiper="testimonial-slider"]', {
    speed: 1000,
    virtualTranslate: true,
    slideToClickedSlide: true,
    lazy: true,
    rewind: true,
    // grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    // autoplay: {
    //     delay: 100,
    //     disableOnInteraction: false,
    // },
    on: {
        beforeInit: function (swiper) {
            swiper.el.style.setProperty("--_slider-size", `${swiper.el.scrollWidth}px`);
            swiper.el.style.setProperty("--_total-slides", swiper.el.querySelectorAll('.swiper-slide').length);
            swiper.params.speed = swiper.el.dataset.speed * 1 || swiper.params.speed;
            swiper.params.autoplay.delay = swiper.el.dataset.autoplayDelay * 1 || swiper.params.autoplay.delay;
        },
        resize: function (swiper) {
            swiper.el.style.setProperty("--_slider-size", `${swiper.width}px`);
        },
        // init: function (swiper) {
        //     activeSlideTextRevealAnimation(swiper.slides[swiper.realIndex].querySelectorAll('.word'), swiper.params.speed);
        // },
        // slideChangeTransitionStart: function(swiper) {
        //     activeSlideTextRevealAnimation(swiper.slides[swiper.realIndex].querySelectorAll('.word'), swiper.params.speed);
        // }
    }
});
