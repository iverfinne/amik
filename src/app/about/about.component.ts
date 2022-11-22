import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
<!--- Product info --->
<section class="section is-fullwidth">
  <div class="container is-left">
    <div class="columns">
      <div class="column is-4 is-card">
        <div class="card-image px-0.5">
          <img src="../assets/img/amika.jpg" alt="">
        <h2 class="is-size-3 title">Amika Mer’i-Fendi (f. 1993)</h2>
        <h4 class="is-size-2 subtitle">medgrunder</h4>
        <p> Amika har ufattelig mange ulike interesser og involverer seg aktivt i kultur, politikk og klima, i tillegg til etc. Han rømte fra Syria i 2013 og ankom Oslo i 2015 etter å ha tilbakelagt over 400 mil på egen hånd. Han er skeiv på skeive måter og skriver stort sett gode tekster. Amika er besatt av russisk post-punk, Clarice Lispector og felis concolor. Hans venner omtaler han som en blanding mellom blekksprut og apekatt oppi en flaske med Cola og Mentos. </p>
      </div>
    </div>
    <div class="column is-4 is-card">
        <div class="card-image px-0.5">
          <img src="../assets/img/nader.jpg" alt="">
      <h2 class="is-size-3 title">Nader Turkmani (f. 1989)</h2>
      <h4 class="is-size-2 subtitle">medgrunder</h4>
      <p>Nader har lenge vært en aktivist for skeives rettigheter i både Midtøsten og Norge. Til jul ønsker Nader seg en verden som er trygg for alle. Men siden han oppdaget at julenissen ikke finnes i år 2022, må han nå legge ned dedikert innsats til dette formålet. Derfor ble han sosial entreprenør. Og nettopp derfor har han jobbet 15 timer i døgnet de senere månedene for å kickstarte SSamIIm, hans “hjertets lille hjerte”. </p>
      </div>
      </div>
      <div class="column is-3">
        <h3>About us and our project</h3>
        <p>Både Amika og Nader er drevne og kjærlighets-orienterte flyktninger. De har tidligere gått på Yallah University. Der lærte de en god del life hacks som de vil dele med resten av verden. Sammen vil de nå skape et åpent og flerkulturelt forum hvor impulser får høy puls og mye kroppsvarme.</p>
        </div>
    </div>
  </div>
</section>

  `,
  styles: [
  ]
})
export class AboutComponent {

}
