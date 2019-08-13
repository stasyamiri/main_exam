
jQuery(document).ready(function () {
    jQuery('.slider-container').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        /*autoplay: true,
        autoplaySpeed: 4000,*/
        dots: true,
        responsive: [
            {
                breakpoint: 1125,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.scroll-about').click(function (e) {
        e.preventDefault();
        var element = document.querySelector("#about");
        element.scrollIntoView({behavior: "smooth"});
    });
    $('.scroll-process').click(function (e) {
        e.preventDefault();
        var element = document.querySelector("#process");
        element.scrollIntoView({behavior: "smooth"});
    });
    $('.scroll-station').click(function (e) {
        e.preventDefault();
        var element = document.querySelector("#station");
        element.scrollIntoView({behavior: "smooth"});
    });
    $('.scroll-book').click(function (e) {
        e.preventDefault();
        var element = document.querySelector("#contact");
        element.scrollIntoView({behavior: "smooth"});
    });
});

/*scroll to contact*/
function bottomFunction() {
    var element = document.querySelector("#contact");
    element.scrollIntoView({behavior: "smooth"});
}

/*pop-up*/
$(document).ready(function () {
    var boxWidth = 80;
    function centerBox() {


        var scrollPos = $(window).scrollTop();
        var disHeight = scrollPos + 60;

        $('.modal-body').css({'width': boxWidth + '%', 'left': 10 + '%', 'top': disHeight + 'px'});

    }

    $(window).resize(centerBox);
    $(window).scroll(centerBox);
    centerBox();

    $('.show-modal').click(function () {
        $('.modal-overlay').addClass('active');
        $(document.body).addClass('modal-opened');
        $('.back_to_top ').css('display', 'none')
    });

    $('[data-close]').click(':not(.modal-body)', function () {
        $('.modal-overlay').removeClass('active');
        $(document.body).removeClass('modal-opened');
        $('.back_to_top ').css('display', 'block')
    });
    $('.modal-body').click(function (e) {
        e.stopPropagation();
    });
});



/*stepper*/
$('#bar li').on('click', function (e) {
    e.preventDefault();


    $(this).addClass('active');
    $(this).prevAll().addClass('active');
    $(this).nextAll().removeClass('active');
    $('.card').eq($(this).index()).css('visibility', 'visible');
    $('.card').eq($(this).index()).prevAll().css('visibility', 'hidden');
    $('.card').eq($(this).index()).nextAll().css('visibility', 'hidden');
});


/*back to top scroll*/
(function() {
    'use strict';

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var scrollPoint = document.documentElement.clientHeight;

        if (scrolled > scrollPoint) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < scrollPoint) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    var goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();
