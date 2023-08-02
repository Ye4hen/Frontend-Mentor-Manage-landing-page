const burger = document.querySelector('#menu-btn');
const nav = document.querySelector('.menu-adapt');
const body = document.body;

if (burger) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		nav.classList.toggle('_active-menu');
		body.classList.toggle('_lock');
		console.log("Lola1");
	});
}

// -------------------AOS-------------------
AOS.init();