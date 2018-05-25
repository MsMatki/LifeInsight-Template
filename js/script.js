

 

    class VasilApp{
        constructor(scroll){
            this.scroll = $(window).scrollTop();
        }
    }

    class InitNavbar extends VasilApp{
        constructor(){
            super();
            $('.navbar-toggle').on('click', function (event) {
                $(this).toggleClass('open');
                $('#navigation').slideToggle(400);
            });
        }
    }

class InitNavitemActive extends VasilApp{
    constructor(){
        super();
        $(".navigation-menu a").each(function () {
            if (this.href == window.location.href) {
                $(this).parent().addClass("active"); // add active to li of the current link
                $(this).parent().parent().parent().addClass("active"); // add active class to an anchor
                $(this).parent().parent().parent().parent().parent().addClass("active"); // add active class to an anchor
            }
        });
    }
}

class InitPortfolioFilter extends VasilApp{
    constructor(){
        super();
        $(window).on('load', function () {
            var $container = $('.portfolioContainer');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            $('.portfolioFilter a').click(function () {
                $('.portfolioFilter .current').removeClass('current');
                $(this).addClass('current');

                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        });
    }
}

const vasilApp = new VasilApp();
const initNavbar = new InitNavbar();
const initItemActive = new InitNavitemActive();
const initPortfolioFinder = new InitPortfolioFilter();



