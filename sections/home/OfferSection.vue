<template>
  <div id="offer" class="offer site">
    <div class="container">
      <SectionTitle
        subtitle="Zajęcia dla maluszków i przedszkolaków"
        title="Oferta"
      />
      <div class="offer__cards">
        <div
          v-for="(card,i) in youngestOfferConfig"
          :key="card.label"
          :data-aos-delay="`${i*100}`"
          class="offer__card"
          data-aos="fade-left"
          @click="()=>handleClick(card)"
        >
          <img :src="`offer/${card.photo}`" alt="" class="top-img">
          <span class="label">
            {{ card.label }}
          </span>
        </div>
      </div>
      <SectionTitle
        subtitle="Zajęcia dla młodszych"
      />
      <div class="offer__cards">
        <div
          v-for="(card,i) in youngerOfferConfig"
          :key="card.label"
          :data-aos-delay="`${i*100}`"

          class="offer__card"
          data-aos="fade-left"
          @click="()=>handleClick(card)"
        >
          <img :src="`offer/${card.photo}`" alt="" class="top-img">
          <span class="label">
            {{ card.label }}
          </span>
        </div>
      </div>
      <SectionTitle
        subtitle="Zajęcia dla starszych"
      />
      <div class="offer__cards">
        <div
          v-for="(card,i) in olderOfferConfig"
          :key="card.label"
          :data-aos-delay="`${i*100}`"

          class="offer__card"
          data-aos="fade-left"
          @click="()=>handleClick(card)"
        >
          <img :src="`offer/${card.photo}`" alt="" class="top-img">
          <span class="label">
            {{ card.label }}
          </span>
        </div>
      </div>
      <SectionTitle
        subtitle="Zajęcia dla wszystkich"
      />
      <div class="offer__cards" data-aos="fade-left" data-aos-duration="1000">
        <div
          v-for="(card,i) in allOfferConfig"
          :key="card.label"
          :data-aos-delay="`${i*100}`"
          class="offer__card"
          data-aos="fade-left"
          @click="()=>handleClick(card)"
        >
          <img :alt="card.label" :src="`offer/${card.photo}`" class="top-img">
          <span class="label">
            {{ card.label }}
          </span>
        </div>
      </div>
      <SectionTitle
        subtitle="Muzyka"
      />
      <div class="offer__cards">
        <div
          v-for="(card,i) in musicOfferConfig"
          :key="card.label"
          :data-aos-delay="`${i*100}`"
          class="offer__card"
          data-aos="fade-left"
          @click="()=>handleClick(card)"
        >
          <img :alt="card.label" :src="`offer/${card.photo}`" class="top-img">
          <span class="label">
            {{ card.label }}
          </span>
        </div>
      </div>
      <SectionTitle
        subtitle="Pozostałe"
      />
      <div class="offer__cards">
        <div
          v-for="(card,i) in otherOfferConfig"
          :key="card.label"
          :data-aos-delay="`${i*100}`"
          class="offer__card"
          data-aos="fade-left"
          @click="()=>handleClick(card)"
        >
          <img :alt="card.label" :src="`offer/${card.photo}`" class="top-img">
          <span class="label">
            {{ card.label }}
          </span>
        </div>
      </div>

      <ModalComponent v-if="activeCard" @close-modal="activeCard=null">
        <div class="photo" style="border-radius: 20px; overflow: hidden">
          <img
            :src="`offer/${activeCard.photo}`"
            alt="tło"
            class="offer__modal-img"
          >
        </div>
        <h2>{{ activeCard.label }}</h2>
        <h3>{{ activeCard.desc }}</h3>
      </ModalComponent>
    </div>
  </div>
</template>

<script>
import SectionTitle from '../../components/SectionTitle.vue'
import ModalComponent from '../../components/ModalComponent.vue'
import {
  allOfferConfig,
  musicOfferConfig,
  olderOfferConfig,
  otherOfferConfig,
  youngerOfferConfig,
  youngestOfferConfig
} from '../../config/offer-config.js'

export default {
  name: 'OfferSection',
  components: {
    ModalComponent,
    SectionTitle
  },
  data () {
    return {
      youngestOfferConfig,
      youngerOfferConfig,
      olderOfferConfig,
      allOfferConfig,
      otherOfferConfig,
      musicOfferConfig,
      activeCard: null
    }
  },
  methods: {
    handleClick (el) {
      this.activeCard = el
    }
  }
}

</script>
