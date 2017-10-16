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
        { pattern: /\/(es|en)\/user\/[0-9]+\/edit/, link: 6},
        { pattern: /\/(es|en)\/user\/[0-9]+/, link: 5},
        //{ pattern: /\/(es|en)\/user\/[0-9]+\/customer/, link: 6},
        //{ pattern: /\/(es|en)?\/profile\/[0-9]+\/edit/, link: 6},
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

    // Show or hide tax_number filed and vat_number field depending on
    // the country and the client type (company or personal account)
    $('select[name=field_client_type]').change(function() {
      var euCountries = ["DE","AT","BE","BG","CY","HR","DK","SK","SI","EE","FI","FR","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","GB","CZ","RO","SE"];
      var clientCountry = $('select[data-drupal-selector=edit-address-0-address-country-code]').val();
      //if(jQuery.inArray( clientCountry, euCountries )){
      //  $('.form-item-tmp-tax-number-0-value').show();
      //}
      console.log('country' + clientCountry);
      $('.form-item-field-vat-number-0-value').show();
      var client_type = $(this).val(); 
      if (client_type==2){
        $('.form-item-tmp-tax-number-0-value').hide();
      }
      if (client_type==1 && euCountries.indexOf(clientCountry)>=0){
        console.log('in array');
        $('.form-item-tmp-tax-number-0-value').show();
      }
    });
})(jQuery);
