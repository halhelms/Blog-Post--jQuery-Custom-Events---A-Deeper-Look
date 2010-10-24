// Cart Listener	
$( 'body' ).bind(
	'item_added_to_cart',
	function( event, eventObject ){ 
		$( '<li>' + eventObject.quantity + 
		' ea. ' + eventObject.title + 
		'</li>').appendTo( $( '#cart_items' ) );
	}
);