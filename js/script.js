var link = document.querySelector(".dark-mode-switcher");
var dark = document.querySelector("body");

link.addEventListener("click", function(evt) {
	if (dark.classList.contains("dark")) {
		dark.classList.remove("dark");
	} else {
		dark.classList.add("dark");
	}
});