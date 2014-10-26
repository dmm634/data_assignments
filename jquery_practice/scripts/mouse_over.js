$(document).ready(function() {
	console.log("this worked"); 
	$(".medicine").hover(
		function() { // This is what happens when you hover
			console.log("mouse-on"); 
			$(this).find("img").addClass("invisible");
		},
		function() { // This is what happens when you take the mouse off
			console.log("mouse-off");
			$(this).find("img").removeClass("invisible");
		}
	);
})