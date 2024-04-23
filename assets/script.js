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

// Déiflement de l'Index à l'infini
currentSlideIndex = 0
console.log(click.length)

// Arrow Left : sélection 👈 dans HTML et ajout "click" 
let arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", clickLeft)

// Fonction défilement click Left 
function clickLeft() {
	currentSlideIndex = (currentSlideIndex - 1 + clicks.length) % clicks.length
	console.log("click arrow Left")
	updateClick(currentSlideIndex -1)
}

// Arrow Right : sélection 👉 dans HTML et ajout "click"
let arrowRight = document.querySelector(".arrow_right")
arrowRight.addEventListener("click", clickRight)

// Fonction défilement click Right
function clickRight() {
	currentSlideIndex = (currentSlideIndex + 1) % click.length
	console.log("click arrow Right")
	updateClick(currentSlideIndex + 1)
}