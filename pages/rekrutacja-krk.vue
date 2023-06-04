<template>
  <div class="site container">
    <Title title="Rekrutacja Kraków" />
    <h3>
      Liceum Miejsce to przestrzeń edukacyjna dla młodych ludzi, którzy nad
      sprawdziany, testy i oceny, przedkładają możliwość wyboru przedmiotów, którym
      chcą poświęcić więcej uwagi. Poszukujemy osób, które cenią naukę w swoim
      tempie, rozwój pasji i zainteresowań i dla których ważne jest budowanie
      bezpiecznych i jakościowych relacji ze swoimi rówieśnikami.
    </h3>
    <div class="column" :style="{gap:'10px'}">
      <p>
        Ruszamy od września z grupą 12-16 młodych osób, które chcą rozpocząć naukę w
        1. lub 2. klasie LO, w systemie edukacji domowej. Wszyscy nasi uczniowie są
        bowiem uczniami Szkoły w Chmurze, gdzie realizują obowiązek szkolny.
      </p>
      <p>
        Krakowskie Miejsce działa od poniedziałku do czwartku, w godzinach 9.00-14.30 i
        oferuje zajęcia przedmiotowe: matematyka, lekturownik (język polski), język
        angielski, zajęcia historyczno-społeczne i zajęcia przyrodnicze oraz zajęcia
        autorskie, w tym zajęcia artystyczne.
      </p>
      <p>
        Raz w miesiącu uczniowie wyruszają na wyprawy w ramach projektu: „Kilka kroków
        dalej”. Są to wyprawy małe i duże organizowane przez samych zainteresowanych.
      </p>
      <p>
        Nasi uczniowie są objęci tutoringiem rozwojowym w pierwszym roku, a w drugim
        także tutoringiem naukowym (opcjonalnie).
      </p>
    </div>
    <NuxtLink
      class="no-border"
      to="#szkola"
    >
      <p class="link">
        Chcesz poznać szczegóły? Sprawdź, jak działamy
      </p>
    </NuxtLink>
    <h3 class="link">
      <a href="https://forms.gle/ycE8SdW8ZwfAQKgX9" target="_blank">
        Formularz rekrutacyjny
      </a>
    </h3>
  </div>
</template>

<script>
import Title from '../components/Title.vue'

export default {
  name: 'RekrutacjaKrk',
  components: { Title }
}
</script>

<style lang="scss">
h2 {
  margin-bottom: 10px;
}

h3 {
  margin-bottom: 10px;
}

li {
  list-style: square inside;
  padding: 5px;
}

::marker {
  color: var(--primary)
}

</style>
