<template>
  <div class="site container contact">
    <Title title="Kontakt" />
    <div class="contact__wrapper">
      <div class="contact__map">
        <GmapMap
          :center="{
            lat: 50.13107051042874,
            lng: 18.978761442401552
          }"
          :options="mapOptions"
          :zoom="15"
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
            <h3>Nowaka 123</h3>
            <h3>40-000 Katowice</h3>
          </div>
        </div>
        <div class="contact__card">
          <EmailIcon height="32" />
          <h3>
            <a href="mailto:kontakt@kropka.art">
              kontakt@kropka.art
            </a>
          </h3>
        </div>
        <div class="contact__card">
          <PhoneIcon height="32" />
          <h3>
            <a href="tel:690 368 863">690 398 893</a>
          </h3>
        </div>
        <div class="contact__card">
          <PhoneIcon height="32" />
          <h3>
            <a href="https://m.me/profile.php?id=100083269505886" target="_blank">Messanegr</a>
          </h3>
        </div>
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
          lat: 50.13107051042874,
          lng: 18.978761442401552
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

  &__wrapper {
    padding-top: 50px;
    display: flex;
    gap: 16px;
    align-items: center;
    height: 400px;

    & > div {
      width: 50%;
    }
  }

  &__map {
    background: #ddd;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
  }

  &__cards {
    height: 100%;
    gap: 16px;
    display: flex;
    flex-wrap: wrap;
  }

  &__card {
    background: var(--primary);
    border-radius: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 48px;

    svg {
      fill: white;
    }
  }
}

</style>
