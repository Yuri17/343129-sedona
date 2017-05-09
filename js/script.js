var link = document.querySelector(".search-block-title");
var searchForm = document.querySelector(".search-form-content");

searchForm.classList.add("search-form-show");
link.addEventListener("click", function(event) {
	event.preventDefault();
	searchForm.classList.toggle("search-form-show");
});