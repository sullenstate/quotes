$(function() {

	var quoteDim = function(){
		$('.quote').animate(
			{ opacity: .2 }, 500)
	};

	var closeForm = function(){
		$('.popup').fadeOut(500);
		$('.quote').animate({ opacity: 1 }, 1000);
		
		setTimeout(function(){
			$('.popup').remove();
		}, 1000);
	};
	
	$('.add').on('click', function(){

		var formWrapper		= 	$('<div class="popup"></div>');
		var quoteEntry		=	$('<textarea placeholder="Please enter your inspirational quotation here..."></textarea>');
		var authorEntry		=	$('<input type="text" placeholder="Who is the author of this quotation?">');
		var submitYes		=	$('<div class="button buttonYes">Accept Changes</div>');
		var submitNo		=	$('<div class="button buttonNo">Cancel</div>');

		quoteDim();

		formWrapper.append(quoteEntry, authorEntry, submitYes, submitNo);
		$(formWrapper).prependTo('.container').hide().fadeIn(500);
	});

	$('.home').on('click', function(){
		
	});

	$('.rand').on('click', function(){
		var count 			= 	Math.floor(Math.random() * $('.quote').length) + 1;
		var randomWrapper	=	$('<div class="popup"></div>');
		var quoteText 		=	$('.container .quote:nth-child(' + count + ')').children('h1').text();
		var quoteAuthor 	=	$('.container .quote:nth-child(' + count + ')').children('h3').text();
		var submitYes		=	$('<div class="button buttonYes">Another?</div>');
		var submitNo		=	$('<div class="button buttonNo">Exit</div>');

		quoteDim();

		randomWrapper.append(quoteText, quoteAuthor, submitYes, submitNo);
		$(randomWrapper).prependTo('.container').hide().fadeIn(500);

	});


	$('.container').on('click', '.button', function(){

		closeForm();

		if ($(this).hasClass('buttonYes')) {
		
		var quoteWrapper 	=	$('<div class="quote"></div>');
		var	quoteText		= 	$('<h1 class="quote-text">This will be a relatively long quote.</h1>');
		var	quoteAuthor		= 	$('<h3 class="quote-author">- Thomas Jefferson</h3>');

		quoteWrapper.append(quoteText, quoteAuthor);

		quoteText.html( '&ldquo;' + $('textarea').val() + '&rdquo;');
		quoteAuthor.text( '- ' + $('input').val());

		$(quoteWrapper).css('opacity', 0)
			.prependTo('.container')
			.hide()
			.slideDown(1000)
			.animate(
				{ opacity: 1 },
				{ queue: false, duration: 1200}
			);
		}
	});

});