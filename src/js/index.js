
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    getDirection : true,
    mobile: {
        smooth: true
    },
    tablet: {
        smooth: true
    }
});
