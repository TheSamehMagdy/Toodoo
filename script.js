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
