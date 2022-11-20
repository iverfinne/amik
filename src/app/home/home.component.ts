import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  


<section class="hero is-primary is-bold is-fullheight">
  
<div class="container is-max-desktop mt-5">
  <figure class="image is-590x164px">
  <img src="../assets/img/logo_1.png">
</figure>  
</div>
<div class="container is-vertical"> 
<div dlass="content is-large">
<p class="title is-1 is-family-secondary mt-6"> Merhaba mine venner!<p>
</div>
</div>
  <div class="hero-body">
  
  <div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <p class="title">Vertical...</p>
          <p class="subtitle">Top tile</p>
        </article>
        <article class="tile is-child notification is-warning">
          <p class="title">...tiles</p>
          <p class="subtitle">Bottom tile</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <p class="title">Middle tile</p>
          <p class="subtitle">With an image</p>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png">
          </figure>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">Wide tile</p>
        <p class="subtitle">Aligned with the right tile</p>
        <div class="content">
          <!-- Content -->
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title">Rules of Conduct</p>
        <p class="subtitle has-text-weight-regular">1. From el Sham by el Shamiyyeen
<br>2. High quality, medium price, low footprint
<br>3. Life-based: Each item of clothing is an organism, a part of you.
<br>4. Shareable: Share your clothes (yourself) with loved ones and let them share back
<br>5. Sustainable & responsible
<br>6. Genders-embracing: We believe that gender is a social construct. Further, we believe that since it’s a construct, that we can deconstruct it. Let’s work together for a genderless society. We don’t decide which gender you present as. You do.
<br>a. The fashion industry doesn’t decide which sex you have, but they dictate genders.
<br>b. The fashion industry gives us 2 genders + an extra lazy one that they sexualise (unisex). “I’m not going back to uni, either, bitch!”
<br>7. Recycled from our sources, upcycled by us
</p>
        <div class="content">
          <!-- Content -->
        </div>
      </div>
    </article>
  </div>
</div>
  </div>
</section>

  `,
  styles: [


  ]
})
export class HomeComponent {

}
