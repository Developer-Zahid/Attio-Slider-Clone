// /* Utlity Function */
function activeSlideTextRevealAnimation(activeSlideElement, startDelay = 500) {
    const currentSlideWords = activeSlideElement.querySelectorAll('.word');
    const currentSlideAuthor = activeSlideElement.querySelector('.tf-card_content_author');
    const currentSlideFooter = activeSlideElement.querySelector('.tf-card_content_footer');
    const revealAnimationTimeline = anime.timeline();
    revealAnimationTimeline
        .add({
            targets: currentSlideWords,
            opacity: [0, 1],
            translateY: ['100%', '0%'],
            delay: anime.stagger(20, { start: startDelay }),
            duration: 400,
            easing: 'easeOutCubic',
        })
        .add({
            targets: currentSlideAuthor,
            opacity: [0, 1],
        })
        .add({
            targets: currentSlideFooter,
            opacity: [0, 1],
        }, '-=800')
}

/* Paragraph Text Split Function */
const splitTextInstance = new SplitType('[data-target="SplitText"]', {
    tagName: "span",
    types: "line, words",
});

/* Swiper Slider Function */
new Swiper('[data-swiper="testimonial-slider"]', {
    speed: 400,
    virtualTranslate: true,
    slideToClickedSlide: true,
    rewind: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
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
        init: function (swiper) {
            splitTextInstance.split();
            activeSlideTextRevealAnimation(swiper.slides[swiper.realIndex], swiper.params.speed);
        },
        slideChangeTransitionStart: function(swiper) {
            splitTextInstance.split();
            activeSlideTextRevealAnimation(swiper.slides[swiper.realIndex], swiper.params.speed);
        }
    }
});