<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div v-for="(sponsor, i) in data" :key="i" :class="`slide--${i+1}`" class="swiper-slide">
        <div class="slider-content">
          Sponsor {{ sponsor.label }}
        </div>
      </div>
    </div>
    <!-- If pagination is needed -->
    <div class="swiper-pagination" />

    <!-- If navigation buttons are needed -->
    <div class="swiper-button-prev" />
    <div class="swiper-button-next" />
  </div>
</template>

<script>
// import Swiper JS
// add or remove unused modules
import { Autoplay, Navigation, Pagination, Swiper } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  props: ['data'],
  mounted () {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // add or remove unused modules
    Swiper.use([Navigation, Pagination, Autoplay])

    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        600: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
      },
      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      loop: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, Autoplay],
      // Pagination if needed
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      // Autoplay if needed
      autoplay: {
        delay: 3000
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
      // Configure other options. Not tested
    })
  }
}
</script>

<style>
.swiper {
  height: 300px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
}

.slider-content {
  color: #000;
}

.slide--1 {
  background-color: #f1c40f;
}

.slide--2 {
  background-color: #e67e22;
}

.slide--3 {
  background-color: #e74c3c;
}

.slide--4 {
  background-color: #9b59b6;
}

.slide--5 {
  background-color: #3498db;
}

.slide--6 {
  background-color: #2ecc71;
}

/*custom swiper style*/
.swiper-pagination .swiper-pagination-bullet {
  /*opacity: 1;*/
  /*background-color: white;*/
}

.swiper-pagination .swiper-pagination-bullet-active {
  background-color: var(--primary);
}

.swiper-button-next, .swiper-button-prev {
  color: #EAB213;
}
</style>
