const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Index current slide
let currentSlideIndex = 0

// Arrow Left : sélection 👈 in HTML & add "click" 
let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", clickLeft);

// Left click scroll function ∞
function clickLeft() {
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	console.log("click arrow Left");
	
}

// Arrow Right : sélection 👉 in HTML & add "click"
let arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", clickRight);

// Right click scroll function ∞
function clickRight() {
	currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	console.log("click arrow Right");
	
}

// Bullet
const dotsContainer = document.querySelector(".dots")

// Add bullet Slide
slides.forEach((slide, index) => {
	const dot = document.createElement("div")
	dot.classList.add("dot")
	
	// Add class="dot_selected" to first slide
	if (index === 0) {
		dot.classList.add("dot_selected")
	}
	dot.addEventListener("click", function() {
		// Update slide index click bullet
		currentSlideIndex = index
		updateSlide(currentSlideIndex)
		console.log("click bullet" + (index + 1))
	})
	dotsContainer.appendChild(dot)
})

// Define Slide : Start at 0
function updateSlide(index) {
	// Selection of the bannerImg class to store it in the bannerImg variable
	const bannerImg = document.querySelector(".banner-img")
	// Selection of the tagLine class to store it in the tagLine variable
	const tagLine = document.querySelector(".tagline")

	currentSlideIndex = index
	// Define path banner img in Slides table for current Index
	bannerImg.src = "./assets/images/slideshow/" + slides[currentSlideIndex].image
	// Modify HTML of tagLine element for description specified in Slides table for current Index
	tagLine.innerHTML = slides[currentSlideIndex].tagLine
	
	// Update bullet to current Slide
	const dots = document.querySelectorAll(".dot")
	dots.forEach((dot, index) => {
		if (index === currentSlideIndex) {
			dot.classList.add("dot_selected")
		} else {
			dot.classList.remove("dot_selected")
		}
	})
}