var swiper = new Swiper(".banner .mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".banner .swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".use .right .mySwiper", {
    slidesPerView: 1.3,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".use .right .swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        970: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".only .content.mySwiper", {
    slidesPerView: 1.3,
    spaceBetween: 15,
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        970: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 'auto',
        },
    },
});

var swiper = new Swiper(".story .mySwiper", {
    slidesPerView: 1.3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        550: {
            slidesPerView: 2.3,
        },
        740: {
            slidesPerView: 3,
        },
        970: {
            slidesPerView: 2,
        },
        1140: {
            slidesPerView: 'auto',
        },
    },
    navigation: {
        nextEl: ".story  .swiper-button-next",
        prevEl: ".story  .swiper-button-prev",
    },
});

AOS.init();

$('.side_bar .content .wrap .left').click(function () {

    const $parentThis = $(this).closest('.item');
    const $thisSub = $(this).parent('.wrap').siblings('.sub_list');
    const $thisImg = $(this).siblings('.right');

    const itemH = $parentThis.height();
    const subLen = $(this).parent('.wrap').siblings('.sub_list').children('li').length;

    const subH = itemH * subLen;

    if ($thisSub.hasClass('on')) {
        $thisSub.removeClass('on');
        sideImgOff()
        $thisSub.css('height', 0);
    } else {
        $thisSub.addClass('on');
        sideImgOn()
        $thisSub.css('height', subH);
    }

    function sideImgOn() {
        $thisImg.css('transform', 'rotate(180deg)');
    }
    function sideImgOff() {
        $thisImg.css('transform', 'rotate(0deg)');
    }
})

$("input:radio[name='chk']").click(function () {

    const radioName = $(this).val();

    $(`.use .swiper`).css('display', 'none');
    $(`.use .swiper.${radioName}`).css('display', 'block');
})

$('.nav .top_item .right').click(function () {
    $('.nav .side_bar').addClass('on');
})

$('.side_bar .close').click(function () {
    $('.nav .side_bar').removeClass('on');
})


