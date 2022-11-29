<template>
  <section id="about" class="about-section site">
    <div class="container">
      <SectionTitle
        subtitle="Miejsce stworzone z pasji"
        title="Kropka"
      />
      <div class="about-section__content" data-aos="fade-left" data-aos-duration="1000">
        <div>
          <div class="about-section__photo about-section__photo--1">
            <img alt="rysunek" src="/offer/pracownia.jpg">
          </div>

          <div class="about-section__photo about-section__photo--2">
            <img alt="rysunek" src="/offer/kawiarnia.jpg">
          </div>
        </div>
        <div>
          <h2>
            Pracownia artystyczna
          </h2>
          <h3 class="about-section__text">
            To kreatywna przestrzeń na mapie
            <span style="font-weight: 500">Tychów.</span>
            Miejsce, które powstało by <span style="font-weight: 500">pobudzać</span> do
            artystycznego działania małych, młodych i&nbsp;dorosłych.
          </h3>
          <h3>
            Chcemy pokazać, że obcowanie ze sztuką to zabawa, ale
            też, że zajęcia kreatywne mają wpływ na <span style="font-weight: 500">różne aspekty życia</span>
            ukazując jego
            wielowymiarowość. Kształtują wrażliwośc i&nbsp;otwierają na świat. Pobudzają do
            doświadczania, szukania rozwiązań, odkrywania nowego. Ufamy wyobraźni i&nbsp;chcemy by
            to ona
            była przewodnikiem na naszych warsztatach.
          </h3>
          <h2>
            Kawiarnia i&nbsp;kącik dla rodzica
          </h2>
          <h3>
            Kropka to też miejsce <span
              style="font-weight: 500"
            >spotkań, rozmów i&nbsp;chilloutu.</span>
            Ugościmy Was w naszej kawiarnii. Przytulna i&nbsp;kameralna przestrzeń, pyszna włoska
            kawa i&nbsp;oczywiście coś słodkiego - brzmi dobrze prawda?
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from '../../components/SectionTitle.vue'

export default {
  name: 'AboutSection',
  components: { SectionTitle }
}
</script>
