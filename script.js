const menuBurgerBtn = document.querySelector('#hamburger')
const navList = document.querySelector('.nav-list')
const navInfo = document.querySelector('.nav-info')

menuBurgerBtn.addEventListener('click', () => {
	navList.classList.toggle('nav-list-active')
	navInfo.classList.toggle('nav-info-active')
})

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,
	speed: 400,
	effect: 'slide',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullet: true,
	},
})
