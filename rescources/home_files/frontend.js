//-------- QuadPay price update for variable product ------
jQuery( function() {
	jQuery( '.variations_form' ).each( function() {
		jQuery(this).on( 'found_variation', function( event, variation ) {
			current_price = variation.display_price / 4;
			jQuery('#quadPayCalculatorWidgetText span').text('$' + current_price.toFixed(2));
		});
	});
});