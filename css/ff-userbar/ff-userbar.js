$(document).ready(function() {
	
	$(document).click(function() {
		$('.ff-userbar .ff-ub-has-children').removeClass('ff-ub-show-children');
	});
	
	$('.ff-userbar .ff-ub-has-children > a').click(function(e) {
		e.stopPropagation();
		$(this).parent().toggleClass('ff-ub-show-children');
		return false;
	});
});