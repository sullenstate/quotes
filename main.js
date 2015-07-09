$(function() {

	$('.add').on('click', function(){

		var quoteWrapper 	=	$('<div class="quote"></div>');
		var	quoteText		= 	$('<h1 class="quote-text">&ldquo;This will be a relatively long quote&rdquo;</h1>');
		var	quoteAuthor		= 	$('<h3 class="quote-author">- Thomas Jefferson</h3>');

		quoteWrapper.append(quoteText, quoteAuthor);
		$(quoteWrapper).css('opacity', 0).prependTo('.container').hide().slideDown(1000).animate(
			{ opacity: 1 },
			{ queue: false, duration: 2000});
	});

	$('.home').on('click', function(){
		
		var formWrapper		= 	$('<div class="add-form"></div>');
		var quoteEntry		=	$('<textarea placeholder="Please enter your inspirational quotation here..."></textarea>');
		var authorEntry		=	$('<input type="text" placeholder="Who is the author of this quotation?">');
		var submitYes		=	$('<div class="button buttonYes">Accept Changes</div>');
		var submitNo		=	$('<div class="button buttonNo">Cancel</div>');

		$('.quote').animate(
			{ opacity: .2 }, 1000);

		formWrapper.append(quoteEntry, authorEntry, submitYes, submitNo);
		$(formWrapper).prependTo('.container').hide().fadeIn(1000);
	});

	$('.rand').on('click', function(){
		
	});

	$('.container').on('click', '.buttonNo', function(){
		
		$('.add-form').fadeOut(1000);
		$('.quote').animate(
			{ opacity: 1 }, 1000);

		setTimeout(function(){
			$('.add-form').remove();
		}, 1500);

	});

});