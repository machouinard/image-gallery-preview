( function( $ ) {
	$( function() {

		//beforeOpen: function() { $.featherlight.close() }

		//https://stackoverflow.com/a/52611202/774793
		//$.featherlightGallery($(".column"), {$currentTarget: $('the first item, maybe this in
		// your case?')});

		$( 'a.intro' ).click( function( e ) {
			e.preventDefault();
			let id = $(this).data('click');
			console.log('id', id);
			initGallery();
			let asdf = document.getElementById(id);
			console.log('asdf', asdf);
			$(asdf).click();
		} );


		$( '#link' ).click( e => {
			e.preventDefault();
			initGallery();
			//$('a.main').featherlightGallery({
			//	filter: '.gallery-item'
			//});
			//$('.gallery').featherlightGallery({
			//	previousIcon: '&#9664;',     /* Code that is used as previous icon */
			//	nextIcon: '&#9654;',         /* Code that is used as next icon */
			//	galleryFadeIn: 100,          /* fadeIn speed when slide is loaded */
			//	galleryFadeOut: 300          /* fadeOut speed before slide is loaded */
			//});
		} );

		const initGallery = () => {
			$.featherlight( '#main-gallery', {
				variant: 'onclick',
				afterOpen: function() {
					$( 'a.main' ).featherlightGallery( {
						targetAttr: 'href',
						variant: 'zzz'
					} );
				}
			} );
		}

	} );

} )( jQuery );
