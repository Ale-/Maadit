/**
 *  Some JS here, yep
 */

+(function($){

    // Adjust layout of landing section --only in wide layouts
    var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if(viewport_width > 740){
        // Calculate vertical adjustment
        var landing_height = $('#block-imagendenubes').height() + $('#block-textoinicial').height() + 50;
        var viewport_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var offset_y = (viewport_height - landing_height)/2 + 'px';
        // Calculate horizontal adjustment
        var x0 = $('#block-maadit-main-menu ul.menu').offset().left + $('#block-maadit-main-menu ul.menu').width();
        var x1 = $('#block-maadit-account-menu').offset().left;
        var offset_x = x0 + (x1 - x0 - 480)/2 + 'px';
        // Apply adjustments
        $('.region-landing').css({ 'padding-top' : offset_y, 'padding-left' : offset_x });
    }

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

})(jQuery);
