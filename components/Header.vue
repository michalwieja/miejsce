<template>
  <header :class="{'active' : scrollPos > 0}" class="header">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
      </div>
      <nav class="nav">
        <div
          :class="{'nav-active':navActive}"
          class="nav__links"
        >
          <div
            v-for="link in menuLinks"
            :key="link.name"
            @click="navActive=false"
          >
            <NuxtLink :to="link.path" class="nav__link" @click="navActive=false">
              {{ link.name }}
            </NuxtLink>
          </div>
          <CustomButton label="Rekrutacja `23" />
        </div>
        <div :class="{toggle:navActive}" class="burger" @click="handleBurgerClick">
          <div class="burger__line" />
          <div class="burger__line" />
          <div class="burger__line" />
        </div>
      </nav>
    </div>
  </header>
</template>
<script>

import menuLinks from '../config/menu.js'

export default {
  name: 'Header',
  props: {
    transparent: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      menuLinks,
      scrollPos: 0,
      navActive: false
    }
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleBurgerClick () {
      this.navActive = !this.navActive
    },
    handleScroll () {
      this.scrollPos = window.scrollY
    }
  }
}
</script>
