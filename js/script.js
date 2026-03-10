//Nav toggler
const navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("open");
});

//Swipper
  const contentSwiper = new Swiper('.content-swiper', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 450,
    allowTouchMove: false,
  });

  const avatarSwiper = new Swiper('.avatar-swiper', {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 14,
    speed: 450,
    loop: true,
    loopAdditionalSlides: 2,
    initialSlide: 0,
    breakpoints: {
      // 0–320px: only 1 avatar
      0:   { slidesPerView: 1, spaceBetween: 0  },
      // 321–758px: 3 avatars
      321: { slidesPerView: 3, spaceBetween: 10 },
      // 577–758px: 3 avatars
      577: { slidesPerView: 3, spaceBetween: 12 },
      // 759px+: full 5 avatars
      759: { slidesPerView: 5, spaceBetween: 14 },
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    on: {
      slideChange() {
        contentSwiper.slideTo(this.realIndex);
      },
    },
  });

  document.querySelectorAll('.avatar-swiper .swiper-slide').forEach((slide, i) => {
    slide.addEventListener('click', () => avatarSwiper.slideToLoop(i));
  });