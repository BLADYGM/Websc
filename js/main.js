$(document).ready(main);
 
function main () {	
	$('.nav_items').click(function(){
		$(this).children('.submenu').slideToggle();
	});	
};
