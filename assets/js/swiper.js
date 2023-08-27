// import Swiper JS
// import Swiper from 'swiper';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';


const swiper = new Swiper(".mySwiper", {
    //能呈現幾個.swiper-slide
    slidesPerView: "auto",
    //避免使用者移動到
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      //避免點擊造成跑馬燈失效，視情況增加
      disableOnInteraction: false
    },
    loop: true,
    speed: 5000
  });
  