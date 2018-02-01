$(document).ready(function () {
	$('.book').on('click', function() {
		$('#modal').addClass('show');
	})
	$('.modal1__overlay').on('click', function() {
		$('#modal').removeClass('show');
	})
});
