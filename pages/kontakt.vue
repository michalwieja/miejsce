<template>
  <div class="site container contact">
    <Title title="Kontakt" />
    <div class="contact__wrapper">
      <div class="contact__map">
        <GmapMap
          :center="markers['0']"
          :options="mapOptions"
          :zoom="17"
          style="width:100%;  height: 100%;"
        >
          <GmapMarker
            v-for="(m, index) in markers"
            :key="index"
            :clickable="true"
            :draggable="true"
            :position="getPosition(m)"
            @click="center=m.position"
          />
        </GmapMap>
      </div>
      <div class="contact__cards">
        <div class="contact__card">
          <HomeIcon height="32" />
          <div>
            <h3>Staromiejska 7</h3>
            <h3>40-013 Katowice</h3>
          </div>
        </div>
        <div class="contact__card">
          <EmailIcon height="32" />
          <a href="mailto:kontakt@liceummiejsce.pl">
            <h3>
              kontakt@liceummiejsce.pl
            </h3>
          </a>
          <a href="mailto:biuro@liceummiejsce.pl">
            <h3>
              biuro@liceummiejsce.pl
            </h3>
          </a>
        </div>
        <a class="contact__card" href="tel:662 007 220">
          <PhoneIcon height="32" />
          <h3>
            662 007 220
          </h3>
        </a>
        <a class="contact__card" href="tel:603 185 012">
          <PhoneIcon height="32" />
          <h3>
            603 185 012
          </h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import mapOptions from '../config/mapOptions.js'

import EmailIcon from '../components/icons/EmailIcon.vue'
import PhoneIcon from '../components/icons/PhoneIcon.vue'
import HomeIcon from '../components/icons/HomeIcon.vue'

export default {
  name: 'Kontakt',
  components: {
    HomeIcon,
    Title,
    PhoneIcon,
    EmailIcon
  },
  data () {
    return {
      mapOptions,
      markers: {
        0: {
          lat: 50.25858473342255,
          lng: 19.022622268498157
        }
      }
    }
  },
  methods: {
    getPosition (marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      }
    }
  }
}
</script>

<style lang="scss">
.contact {
  padding-bottom: 40px;

  &__wrapper {
    display: flex;
    gap: 16px;
    align-items: center;
    height: 400px;

    & > div {
      width: 50%;
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      height: auto;
      & > div {
        width: 100%;
      }
    }
  }

  &__map {
    background: #ddd;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;

    @media (max-width: 1200px) {
      height: 400px;
    }
  }

  &__cards {
    height: 100%;
    gap: 16px;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-auto-rows: 1fr;
    grid-auto-columns: 1fr;

    @media(max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    background: var(--primary);
    border-radius: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;

    svg {
      fill: white;
      margin-bottom: 10px;
    }
  }

  a {
    cursor: pointer;
  }
}

</style>
