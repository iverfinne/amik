import { Component } from '@angular/core';

@Component({
  selector: 'app-community',
  template: `
<section class="section">
  <div class="container">
    <h3 class="title" has-text-centered is-size-4>
      Flyktninghjelpen
    </h3>
    <div class="columns is-4-tablet-is-3-desktop">
      <div class="card">
        <div class="card image has-text-centered px-6">
          <img src="../assets/img/flykninghjelpen.jpeg" alt="">
        </div>
        <div class="card-content">
          <p class="title is-6">
            NAMENAME
          </p>
        </div>
        <footer class="card footer">
          <p class="card-footer-item">
            <a href="" class="has-text-grey"> view</a>
          </p>
        </footer>
      </div>
    </div>
  </div>
</section>
  `,
  styles: [
  ]
})
export class CommunityComponent {

}
