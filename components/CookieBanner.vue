<template>
  <div v-if="showBanner" class="cookie-banner">
    <div class="cookie-banner__content">
      <p class="cookie-banner__text">
        Używamy cookies do poprawy doświadczenia użytkownika. Klikając "Akceptuj", zgadzasz się na zbieranie danych analitycznych.
      </p>
      <div class="cookie-banner__buttons">
        <button class="cookie-banner__btn cookie-banner__btn--reject" @click="reject">Odrzuć</button>
        <button class="cookie-banner__btn cookie-banner__btn--accept" @click="accept">Akceptuj</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieBanner',
  data () {
    return {
      showBanner: false
    }
  },
  mounted () {
    const consent = localStorage.getItem('cookie-consent')
    this.showBanner = !consent
  },
  methods: {
    accept () {
      this.setConsent(true)
    },
    reject () {
      this.setConsent(false)
    },
    setConsent (accepted) {
      localStorage.setItem('cookie-consent', JSON.stringify({
        accepted,
        timestamp: Date.now()
      }))
      this.showBanner = false
      this.$emit('consent-update', accepted)
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: accepted ? 'granted' : 'denied',
          ad_storage: accepted ? 'granted' : 'denied'
        })
        if (accepted) {
          window.dataLayer.push({ event: 'consent_granted' })
        }
      }
    }
  }
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #313131;
  color: #fff;
  padding: 24px 20px;
  z-index: 9999;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
}

.cookie-banner__content {
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.cookie-banner__text {
  margin: 0;
  flex: 1;
  line-height: 1.6;
  font-size: 14px;
}

.cookie-banner__buttons {
  display: flex;
  gap: 12px;
  white-space: nowrap;
  flex-shrink: 0;
}

.cookie-banner__btn {
  padding: 12px 28px;
  border: 2px solid #EAB213;
  border-radius: 40px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  font-family: 'League Spartan', sans-serif;
  letter-spacing: 1px;
  transition: 0.3s;
}

.cookie-banner__btn--reject {
  background: transparent;
  color: #EAB213;
  border-color: #EAB213;
}

.cookie-banner__btn--reject:hover {
  background: #EAB213;
  color: #313131;
}

.cookie-banner__btn--accept {
  background: #EAB213;
  color: #313131;
}

.cookie-banner__btn--accept:hover {
  background: transparent;
  color: #EAB213;
  border-color: #EAB213;
}

@media (max-width: 768px) {
  .cookie-banner {
    padding: 20px;
  }

  .cookie-banner__content {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .cookie-banner__buttons {
    width: 100%;
    gap: 8px;
  }

  .cookie-banner__btn {
    flex: 1;
    padding: 12px 20px;
  }
}
</style>
