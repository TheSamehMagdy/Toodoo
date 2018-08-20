//Check todo off on click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click X to delete todo
$("ul").on("click", "li span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(400, function(){
		$(this).remove();
	})
});

//Get input value when Enter is pressed
$("input[type=text]").on("keypress", function(event){
	if(event.which === 13) {
		var newTodo = $(this).val();
		//Clear the input
		$(this).val("");
		//Add new todo
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + newTodo + "</li>");
	};
})

//Toggle input when plus sign is clicked
$("#inputToggle").on("click", function() {
	$("input[type=text]").fadeToggle();
});

//Show help when help icon is clicked
$("#helpIcon").on("click", function() {
	$("#help").fadeToggle();
})