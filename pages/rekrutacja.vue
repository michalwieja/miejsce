<template>
  <div class="site container">
    <Title title="Rekrutacja" />
    <h2>
      W roku szkolnym 2023/2024 mamy miejsce dla 12 pierwszoklasistów.
    </h2>
    <h3>
      Rekrutacja składa się z następujących kroków:
    </h3>
    <ul>
      <li>
        udział kandydatki/a w zajęciach w Miejscu w wybranych zajęciach edukacyjnych
      </li>
      <li>
        udział w jednodniowej wyprawie
      </li>
      <li>
        spotkanie informacyjno - rekrutacyjne dla rodziców (6.02.2023)
      </li>
      <li>
        wypełnienie formularza rekrutacyjnego do Miejsca
      </li>
      <li>
        zapisanie kandydatki/a do Szkoły w Chmurze (wniosek o edukację domową)
      </li>
      <li>
        podpisanie regulaminu Miejsca i wpłata wpisowego
      </li>
    </ul>
  </div>
</template>

<script>
import Title from '../components/Title.vue'

export default {
  name: 'Rekrutacja',
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
