//Check todo off on click
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});