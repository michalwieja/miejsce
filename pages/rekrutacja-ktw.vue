<template>
  <div class="site container">
    <Title title="Rekrutacja" />
    <h2>
      Rekrutacja na nowy rok szkolny 2025/2026 rozpoczęta!
    </h2>
    <p>
      Droga Kandydatko, Kandydacie i Rodzicu,
      Bardzo cieszymy się z Twojego zainteresowania Liceum Miejsce.
      Jesteśmy szkołą, która łączy w sobie jakościową edukację i dobre relacje.
      Ważne jest dla nas spotkanie i rozmowa, która opiera się na realnym kontakcie i jasności zasad. Rekrutacja to proces, w którym poznajemy się wzajemnie i wspólnie sprawdzamy czy to, co wszyscy wnosimy (szkoła-młody człowiek-rodzice) pozwala nam poczuć się ze sobą dobrze i przejść wspólnie kawałek drogi. Zatem - zapraszamy do rozmowy! Sprawdźmy, co jest możliwe.
    </p>
    <p>
      W zakładce <a href="#szkola"><u>szkoła</u></a> znajdziesz kilka kluczowych informacji na temat Liceum Miejsce.
      Zachęcamy do zapoznania się z nimi i wzięcie udziału w dniu otwartym, spotkaniu dla rodziców i spotkaniu indywidualnym.
    </p>
    <h3>
      Jak wygląda proces rekrutacji?
    </h3>
    <ul>
      <li>
        <b>Dzień otwarty dla młodych.</b> Raz w miesiącu zapraszamy zainteresowanych młodych do wzięcia udziału w dniu otwartym.
        W czasie tego spotkania masz okazję dowiedzieć się więcej o naszej szkole. Oprowadzimy Cię po naszej przytulnej przestrzeni, opowiemy jak działa Miejsce oraz odpowiemy na wszystkie pytania. Razem z naszymi uczniami i uczennicami będziesz uczestniczył/a  w regularnych zajęciach, jakie odbywają się w Miejscu. Dzięki temu masz okazję poczuć prawdziwy klimat panujący w naszej szkole i przegadać wszystkie nurtujące Cię kwestie z osobami, które już uczęszczają do szkoły.
        Przyjdź i sprawdź, czy u nas będziesz na Swoim Miejscu. Czy nasze wartości są Ci bliskie, a struktura dnia i tygodnia spełnia Twoje potrzeby bezpieczeństwa i rozwoju. Oraz czy masz gotowość wziąć odpowiedzialność za edukację.
      </li>
      <li>
        <b>Spotkanie dla rodziców.</b> Tego samego dnia wieczorem zapraszamy rodziców na spotkanie informacyjne.
        O czym będziemy rozmawiać na spotkaniu? Będziemy mówić o wizji szkoły i wizji edukacji, którą oferujemy. Omówimy strukturę roku, tygodnia i dnia. Opowiemy o formalnościach, sposobie realizacji obowiązku szkolnego, sesjach egzaminacyjnych i przygotowaniu do matury oraz o ludziach, którzy tworzą szkołę. Oczywiście odpowiemy na Wasze wszystkie pytania.
      </li>
      <li>
        <b>Indywidualne spotkanie.</b> Spotykamy się z Tobą i Twoimi rodzicami, aby lepiej się poznać. Na to spotkanie przynosicie (jeśli takie posiadasz) orzeczenie, opinię i/lub wszystkie istotne dokumenty, które opisują twoje funkcjonowanie. Z jednej strony chcemy porozmawiać o twoich potrzebach, uzdolnieniach i możliwościach. I sprawdzić czy możemy na nie odpowiedzieć.  Z drugiej strony to także czas na zadanie wszystkich pytań i podzielenie się wątpliwościami, które pojawiły się u Ciebie i twoich rodziców w czasie procesu rekrutacji. Po spotkaniu podejmujemy decyzje o przyjęciu Cię do Liceum Miejsce.
      </li>
      <li>
        <b>Podpisanie umowy i wpłata wpisowego.</b> Po otrzymaniu decyzji o przyjęciu do naszej szkoły, Twoi rodzice otrzymają umowy do podpisu, które prosimy o dostarczenie z powrotem w ciągu 7 dni. Następnym krokiem jest wpłata wpisowego na podane w umowie dane szkoły.
      </li>
      <li>
        <b>Dostarczenie dokumentów.</b> Po dostarczeniu (w lipcu, po ukończeniu szkoły podstawowej) oryginału świadectwa ukończenia ósmej klasy oraz wyników z egzaminu ósmoklasisty, oficjalnie wpiszemy Cię na listę naszych uczniów i uczniów Liceum Navigo (szkoła partnerska).
      </li>
    </ul>
    <p />
    <p>
      Potrzebujesz więcej informacji? Nie znalazłaś/-eś odpowiedzi na swoje pytania? <a href="#kontakt"><u>Skontaktuj się
        z nami!</u></a>
    </p>
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
