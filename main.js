$(function() {

	var previousCount;

	// >>>>>>>> Animation Functions <<<<<<<<
	var quoteDim = function(){
		$('.quote').animate(
			{ opacity: .2 }, 500)
	};

	var closePopup = function(){
		$('.popup').fadeOut(500);
		$('.quote').animate({ opacity: 1 }, 1000, function(){
			$('.popup, .shade').remove();
		});
	};

	// >>>>>>>> NAV Event Handlers <<<<<<<<
	$('.add').on('click', function(){

		// Build and load quotation entry popup
		var windowShade		=	$('<div class="shade"></div>');
		var formWrapper		= 	$('<div class="popup"></div>');
		var quoteEntry		=	$('<textarea placeholder="Please enter your inspirational quotation here..." autofocus></textarea>');
		var authorEntry		=	$('<input type="text" placeholder="Who is the author of this quotation?">');
		var submitYes		=	$('<div class="button buttonYes">Add Quote?</div>');
		var submitNo		=	$('<div class="button buttonNo">Cancel</div>');

		quoteDim();

		formWrapper.append(quoteEntry, authorEntry, submitYes, submitNo);
		$(formWrapper).prependTo('.container').hide().fadeIn(500);
		$(windowShade).prependTo('.container');
		// ---------------------------------
	});

	$('.home').on('click', function(){
		
	});

	$('.rand').on('click', function(){

		// Build and load random quote popup
		var count 			= 	Math.floor(Math.random() * $('.quote').length) + 1;
		var windowShade		=	$('<div class="shade"></div>');
		var randomWrapper	=	$('<div class="popup"></div>');
		var quoteText 		=	$('<h1 class="quote-text"></h1>');
		var quoteAuthor 	=	$('<h3 class="quote-author"></h3>');
		var submitYes		=	$('<div class="button buttonAnother">Another?</div>');
		var submitNo		=	$('<div class="button buttonNo">Exit</div>');

		quoteDim();

		previousCount = count;
		
		randomWrapper.append(quoteText, quoteAuthor, submitYes, submitNo);

		quoteText.text($('.container .quote:nth-child(' + count + ')').children('h1').text());
		quoteAuthor.text($('.container .quote:nth-child(' + count + ')').children('h3').text());

		$(windowShade).appendTo('.container');
		$(randomWrapper).appendTo('.container').hide().fadeIn(500);
		// ----------------------------------
	});

	// >>>>>>>> Delegated Event Handlers <<<<<<<<
	$('.container').on('click', '.button', function(){

		// Create and animate the addition of a new quote
		if ($(this).hasClass('buttonYes')) {
		
			closePopup();

			var quoteWrapper 	=	$('<div class="quote"></div>');
			var	quoteText		= 	$('<h1 class="quote-text">This will be a relatively long quote.</h1>');
			var	quoteAuthor		= 	$('<h3 class="quote-author">- Thomas Jefferson</h3>');
			var removeButton	=	$('<div class="button buttonDelete" display="none">Delete this quote?</div>');


			quoteWrapper.append(removeButton, quoteText, quoteAuthor);
			
			if ($('textarea').val() === '' && $('input').val() === '') {
				quoteText.text("“I love to talk about nothing. It's the only thing I know anything about.”");
				quoteAuthor.text('- Oscar Wilde');
			}
			else if ($('textarea').val() !== '' && $('input').val() === '') {
				quoteText.text( '“' + $('textarea').val() + '”');
				quoteAuthor.text('- Unknown');
			}
			else {
				quoteText.text( '“' + $('textarea').val() + '”');
				quoteAuthor.text( '- ' + $('input').val());
			}

			$(quoteWrapper).css('opacity', 0)
				.prependTo('.container')
				.hide()
				.slideDown(1000)
				.animate(
					{ opacity: 1 },
					{ queue: false, duration: 1200}
				);
		}
		// Geneerate additional random quotes from the Random Popup
		else if ($(this).hasClass('buttonAnother')) {

			// Generate a random number between 1 & the number of quotes.
			// Generate a new number if the result is the same as the last number.
			var count = Math.floor(Math.random() * $('.quote').length + 1);
			while (count === previousCount) {
				count = Math.floor(Math.random() * $('.quote').length + 1);
			}
			previousCount = count;

			$('.popup h1').text($('.container .quote:nth-child(' + count + ')').children('h1').text());
			$('.popup h3').text($('.container .quote:nth-child(' + count + ')').children('h3').text());
		
		}

		else {

			closePopup();

		}
	});
	
	$('.container').on('click', '.buttonDelete', function(){
		$(this).closest('.quote').slideUp(1000, function(){
			$(this).remove();
			$('.nav').prepend("<li><a class='restore' href='javascript:void(0)'>Restore</a></li>");
		});	
	});

	$('.container').on('mouseenter', '.quote', function(){
		$(this).children('.buttonDelete').fadeIn();
	});

	$('.container').on('mouseleave', '.quote', function(){
		$(this).children('.buttonDelete').fadeOut();
	});
});