

// click on the default skill
document.getElementById("defaultSkill").click();

function openSkill(e, skillName) {
	var i, skillContent, skillButtons;

	// Get all elements with class="skillContent" and hide them
	skillContent = document.getElementsByClassName("skillContent");
	for (i=0; i < skillContent.length; i++) {
		skillContent[i].style.display = "none";
	}

	// Get all elements with class="skillButton" and remove the class "active"
	tabButtons = document.getElementsByClassName("skillButton");
	for (i = 0; i < tabButtons.length; i++) {
		tabButtons[i].className = tabButtons[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the bottom that opened the tab
	document.getElementById(skillName).style.display = "flex";
	e.currentTarget.className += " active";
}

// project slideshow
let projectSlideIndex = 1;
showProjectSlides(projectSlideIndex);

// Next/prev controls
function plusProjectSlides(n) {
	showProjectSlides(projectSlideIndex += n);
}

function showProjectSlides(n) {

	let i;
	let slides = document.getElementsByClassName("myProjects");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		projectSlideIndex = 1;
	}

	if (n < 1) {
		projectSlideIndex = slides.length;
	}
	
	for(i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	for(i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[projectSlideIndex-1].style.display = "grid";
	dots[projectSlideIndex-1].className += " active";

}
