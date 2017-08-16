/**
 *  Some JS here, yep
 */

+(function($){

    // Adjust layout of landing section
    // Calculate vertical adjustment
    var landing_height = $('#block-imagendenubes').height() + $('#block-textoinicial').height() + 50;
    var viewport_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var offset_y = (viewport_height - landing_height)/2 + 'px';
    // Calculate horizontal adjustment
    var x0 = $('#block-maadit-main-menu ul.menu').offset().left + $('#block-maadit-main-menu ul.menu').width();
    var x1 = $('#block-maadit-account-menu').offset().left;
    console.log(x0 + "---" + x1);
    var offset_x = x0 + (x1 - x0 - 480)/2 + 'px';
    // Apply adjustments
    $('.region-landing').css({ 'padding-top' : offset_y, 'padding-left' : offset_x });


    // Responsive navigation
    $('#menu-trigger').click( function(){
        $('.region-navigation').toggleClass('region-navigation--open');
    });

})(jQuery);
