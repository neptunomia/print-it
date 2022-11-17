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

// add a loop to create each bullet point with the 'dot' class
for (let i = 0; i < slides.length; i++) { 
	const bulletPoint = document.createElement('div')
	const dots = document.querySelector('div.dots')
	dots.append(bulletPoint)
	bulletPoint.classList.add('dot')
}

// add the class 'dot_selected' on the active bullet point
const currentBulletPoint = document.querySelector('.dot:first-child')
currentBulletPoint.classList.add('dot_selected')