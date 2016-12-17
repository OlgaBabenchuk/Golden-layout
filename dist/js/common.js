$(document).ready(function() {

	/*   toggle sidebar menu   */

	$(".toggle-menu").on("click", function() {
		$(".navigation-sidebar").css({'transform': 'translateX(0%)'});
		return false;
	});

	$(".navigation-sidebar__close").on("click", function() {
		$(".navigation-sidebar").css({'transform': 'translateX(-100%)'});
		return false;
	});
	
});