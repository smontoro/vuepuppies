new Vue({
	el: '#app',
	data: {
		puppies: [
			{
				name: 'Lilly',
				gender: 'female',
				age: 0.7,
				breed: 'Italian Greyhound',
				weightKG: 7,
				image: '../img/itliangrey.jpg'
			},
			{
				name: 'Barney',
				gender: 'male',
				age: 0.9,
				breed: 'Beagle',
				weightKG: 7,
				image: '../img/beagle.jpg'
				special: 'Mute'
			},
			{
				name: 'NuoMi',
				gender: 'female',
				age: 0.4,
				breed: 'Pomeranian',
				weightKG: 4,
				image: '../img/pom.jpg'
				special: '3-legged'
			}

			]
	}, 
	
})

