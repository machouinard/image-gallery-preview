( function( $ ) {
	$( function() {

		//beforeOpen: function() { $.featherlight.close() }

		//https://stackoverflow.com/a/52611202/774793
		//$.featherlightGallery($(".column"), {$currentTarget: $('the first item, maybe this in
		// your case?')});

		$( 'a.intro' ).click( function( e ) {
			e.preventDefault();
			initGallery();
			// get ID from data-att of initial thumbnail
			let id = $(this).data('click');

			// Get same thumb in gallery and trigger a click
			let thumb = document.getElementById(id);
			$(thumb).click();
		} );


		$( '#link, .link' ).click( e => {
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
						variant: 'single',
						beforeOpen: function() {
							$.featherlight.close();
						},
						afterOpen: function() {
							const link = $('<span class="single-gallery-link"><a class="link" href="#main-gallery-container">Gallery</a></span>');
							$('.featherlight.single .featherlight-content').prepend(link);
						}
					} );
				}
			} );
		}

	} );

} )( jQuery );
