// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
	//check for clicks on li that may or not be in the ul
	//if li is gray
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
	$(this) //remove the parent which is the li
		.parent()
		.fadeOut(500, function() {
			$(this).remove(); //refers to the li not the span
		});
	event.stopPropagation(); //stops bubbling up other elements
});

$("input[type='text']").keypress(function(keyEvent) {
	if (keyEvent.which === 13) {
		var inputValue = $(this).val(); //grabbing new todo text from input

		$(this).val(""); //reset the input
		$("ul").append(
			"<li><span><i class='fa fa-trash'></i></span> " + inputValue + "</li>"
		); //create a new li and add it to ul
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});
