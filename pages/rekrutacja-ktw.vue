<template>
  <div class="site container">
    <Title title="Rekrutacja Katowice" />
    <h2>
      W roku szkolnym 2024/2025 mamy miejsce dla 12 pierwszoklasistów.
    </h2>
    <h3>
      Rekrutacja składa się z następujących kroków:
    </h3>
    <ul>
      <li>
        udział kandydatki/a w wybranych zajęciach edukacyjnych w Miejscu,
      </li>
      <li>
        spotkanie informacyjno - rekrutacyjne dla rodziców,
      </li>
      <li>
        wypełnienie formularza rekrutacyjnego do Miejsca,
      </li>
      <li>
        zapisanie kandydatki/a do Szkoły w Chmurze (wniosek o edukację domową),
      </li>
      <li>
        podpisanie regulaminu Miejsca i wpłata wpisowego
      </li>
    </ul>
    <h3 class="link">
      <a href="https://forms.gle/pMBCem7vXszARwmv6" target="_blank">
        Formularz rekrutacyjny
      </a>
    </h3>
  </div>
</template>

<script>
import Title from '../components/Title.vue'

export default {
  name: 'RekrutacjaKtw',
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
