import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  template: `
<section class="section is-hero">
<h1 class="has-text-left is-size-1">
      Hjelpsomme linker
    </h1>
</section>
<!--- Psykisk og fysisk helse --->
<section class="section ">
  <div class="container">
    <h3 class="title has-text-centered is-size-4">      
      Psykisk og fysisk helse
    </h3>
    <div class="columns mt-5 is-10 is-variable is-centered">
    <div class="column is-4-tablet is-3-desktop">
      <div class="card">
        <div class="card-image has-text-centered px-6">
          <img src="../assets/img/flyktninghjelpen.jpeg" alt="">
        </div>
        <div class="card-content">
          <p class="title is-6">
          Ressursportalen om asylsøkere og flyktninger
          </p>
          <p>
          Asylsøkere og flyktninger lever under spesielle livsbetingelser
           Kunnskap om dette er avgjørende for å gi god hjelp
          </p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <a href="https://flyktning.net/" class="href">flyktning.net</a>
          </p>
        </footer>
      </div>
    </div>
    <div class="column is-4-tablet is-3-desktop">
      <div class="card">
        <div class="card-image has-text-centered px-6">
          <img src="../assets/img/flyktninghjelpen.jpeg" alt="">
        </div>
        <div class="card-content">
          <p class="title is-6">
            flyktninghjelpen
          </p>
          <p>
          Flyktninghjelpen bistår mennesker på flukt over hele verden. Vi er raskt på plass der mennesker på flukt trenger oss mest. 
          </p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <a href="https://www.flyktninghjelpen.no/" class="href">www.flyktninghjelpen.no</a>
          </p>
        </footer>
      </div>
    </div>    
    <div class="column is-4-tablet is-3-desktop">
      <div class="card">
        <div class="card-image has-text-centered px-6">
          <img src="../assets/img/flyktninghjelpen.jpeg" alt="">
        </div>
        <div class="card-content">
          <p class="title is-6">
            Helsebiblioteket
          </p>
          <p>
          Helsebiblioteket gir gratis tilgang oppslagsverk, retningslinjer, databaser og andre kunnskapsressurser for helsepersonell i Norge. Helsebiblioteket driftes i Folkehelseinstituttet og finansieres over statsbudsjettet.
          </p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <a href="https://www.helsebiblioteket.no/" class="href">www.helsebiblioteket.no</a>
          </p>
        </footer>
      </div>
    </div>    
    <div class="column is-4-tablet is-3-desktop">
      <div class="card">
        <div class="card-image has-text-centered px-6">
          <img src="../assets/img/flyktninghjelpen.jpeg" alt="">
        </div>
        <div class="card-content">
          <p class="title is-6">
            Papillon 
          </p>
          <p>
          Papillon er en organisasjon som styrker unge krysskulturell unge mennesker til å stå i egne valg gjennom å blant annet tilby en møteplass, nettverksbygging og veiledning. Vi skal videre fungere som brobygger i samfunnet og bidra til sosial inkludering som i sin tur bidrar til opplevelse av fellesskap og tilhørighet.
          </p>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <a href="https://papillonbergen.no/" class="href">www.papillonbergen.no</a>
          </p>
        </footer>
      </div>
    </div>
    </div>
  </div>
</section>
<!--- Rettshjelp for utlendinger og flyktninger --->
<h3 class="title has-text-centered is-size-4">      
      Rettshjelp for utlendinger og flyktninger
</h3>
<!--- Skeive organisasjoner --->
<h3 class="title has-text-centered is-size-4">      
      Psykisk og fysisk helse
</h3>
<!--- Organisasjoner for utlendinger og flyktninger --->
<h3 class="title has-text-centered is-size-4">      
      Organisasjoner for utlendinger og flyktninger
</h3>
<!--- Antirasisme --->
<h3 class="title has-text-centered is-size-4">      
      Antirasisme
</h3>
<!--- Diverse --->
<h3 class="title has-text-centered is-size-4">      
      Diverse
</h3>
  `,
  styles: [
  ]
})
export class CommunityComponent {

}
