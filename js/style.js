/**
 *  Some JS here, yep
 */

+(function($){

    // Adjust layout of landing section --only in wide layouts
    //var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    //if(viewport_width > 740){
        // Calculate vertical adjustment
        //var landing_height = $('#block-imagendenubes').height() + $('#block-textoinicial').height();
        //var viewport_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        //var offset_y = (viewport_height - landing_height)/2 - 50 + 'px';
        // Calculate horizontal adjustment
        //var x0 = $('#block-maadit-main-menu ul.menu').offset().left + $('#block-maadit-main-menu ul.menu').width();
        //var x1 = $('#block-maadit-account-menu').offset().left;
        //var offset_x = x0 + (x1 - x0 - 480)/2 + 'px';
        // Apply adjustments
        //console.log(offset_y);
        //$('.region-landing').css({ 'padding-top' : offset_y  /*, 'padding-left' : offset_x*/ });
    //}

    // Responsive navigation
    $('#menu-trigger').click( function(){
        $('.region-navigation').toggleClass('region-navigation--open');
    });


    // Shopping cart enhancements
    var n = $('.cart-block--summary__count').text().split(" ");
    if(n[0] !== '0'){
        $('#block-maadit-cart').show();
        $('.cart-block--summary__count').text("(" + n[0] + ")");
    }

    // Active trails in user profile
    var url = window.location.pathname;
    var profile_urls_re = [
        { pattern: /\/(es|en)\/user\/[0-9]+\/ordered-items/, link: 1},
        { pattern: /\/(es|en)\/user\/[0-9]+\/orders/, link: 2},
        { pattern: /\/(es|en)\/user\/[0-9]+\/tickets/, link: 3},
        { pattern: /\/(es|en)\/ticket\/[0-9]+/, link: 3},
        { pattern: /\/node\/add\/ticket/, link: 4},
        { pattern: /\/(es|en)\/user\/[0-9]+\/edit/, link: 5},
        { pattern: /\/(es|en)\/user\/[0-9]+\/customer/, link: 6},
        { pattern: /\/(es|en)?\/profile\/[0-9]+\/edit/, link: 6},
    ];
    for(var i = 0, l = profile_urls_re.length; i < l; i++){
        var section = profile_urls_re[i];
        console.log(section);
        if( section.pattern.test(url) ){
            $('.nav-tabs li:nth-child(' + section.link + ')').addClass('active');
            break;
        }
    }

    $('.comment-form__title').click( function(){
        $('.comment-form').slideToggle();
    });

})(jQuery);
