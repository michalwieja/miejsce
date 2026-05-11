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

    <SectionTitle
      title="Zobacz, czy to jest Twoje miejsce."
      subtitle="Wracamy z odpowiedzią w 24h"
    />
    <form id="contact-form" class="contact__form" @submit.prevent="submit">
      <div class="contact__form-row">
        <div class="contact__form-field">
          <label for="contact-name">Imię i nazwisko</label>
          <input
            id="contact-name"
            v-model="form.name"
            type="text"
            required
            placeholder="Jan Kowalski"
          >
        </div>
        <div class="contact__form-field">
          <label for="contact-email">Adres e-mail</label>
          <input
            id="contact-email"
            v-model="form.email"
            type="email"
            required
            placeholder="jan@example.com"
          >
        </div>
      </div>
      <div class="contact__form-field">
        <label for="contact-message">Wiadomość</label>
        <textarea
          id="contact-message"
          v-model="form.message"
          required
          rows="5"
          placeholder="Napisz do nas…"
        />
      </div>
      <div class="contact__form-footer">
        <button type="submit" class="button" :disabled="status === 'sending'">
          {{ status === 'sending' ? 'Wysyłanie…' : 'Wyślij wiadomość' }}
        </button>
        <p v-if="status === 'success'" class="contact__form-msg contact__form-msg--success">
          Wiadomość wysłana! Odpiszemy najszybciej jak to możliwe.
        </p>
        <p v-if="status === 'error'" class="contact__form-msg contact__form-msg--error">
          Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na biuro@liceummiejsce.pl
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import Title from '../components/Title.vue'
import SectionTitle from '../components/SectionTitle.vue'
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
    EmailIcon,
    SectionTitle
  },
  data () {
    return {
      mapOptions,
      markers: {
        0: {
          lat: 50.25858473342255,
          lng: 19.022622268498157
        }
      },
      form: { name: '', email: '', message: '' },
      status: null
    }
  },
  methods: {
    getPosition (marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      }
    },
    async submit () {
      this.status = 'sending'
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: process.env.WEB3FORMS_KEY,
            name: this.form.name,
            email: this.form.email,
            message: this.form.message
          })
        })
        const data = await res.json()
        if (data.success) {
          this.status = 'success'
          this.form = { name: '', email: '', message: '' }
        } else {
          this.status = 'error'
        }
      } catch {
        this.status = 'error'
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

  &__form {
    margin: 32px auto 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 700px;

    @media (max-width: 600px) {
      max-width: 100%;
    }
  }

  &__form-row {
    display: flex;
    gap: 16px;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  &__form-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;

    label {
      font-weight: bold;
      font-size: 14px;
    }

    input,
    textarea {
      border: 2px solid #e0e0e0;
      border-radius: 12px;
      padding: 12px 16px;
      font-size: 16px;
      font-family: inherit;
      outline: none;
      transition: border-color 0.2s;
      resize: vertical;

      &:focus {
        border-color: var(--primary);
      }
    }
  }

  &__form-footer {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  &__form-msg {
    font-size: 14px;

    &--success {
      color: #2d7a4f;
    }

    &--error {
      color: #c0392b;
    }
  }
}

</style>
