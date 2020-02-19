$(document).ready(function() {

	
var swiperBlocks = new Swiper('.swiper-container', {
    speed: 2000,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    // breakpoints: {
    // 	320: {
    // 		slidesPerView: 1
    // 	},
    // 	720: {
    // 		slidesPerView: 2
    // 	}
    // }
});

// var swiperProjects = new Swiper('.swiper-container', {
//     speed: 2000,
//     spaceBetween: 100,
//     pagination: {
//       el: '.swiper-pagination__two',
//     },
//     navigation: {
//       nextEl: '.swiper-button-next__two',
//       prevEl: '.swiper-button-prev__two',
//     },
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     }
// });
	
});