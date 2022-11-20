import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
    <div class="navbar is-dark">
      <!--- Logo --->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="../assets/img/logo_5.png">
        </a>
        <a class="navbar-burger" id=burger>
          <span></span>
          <span></span>
          <span></span>
        </a>

      </div>
      <!--- menu --->
      <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item"routerLink="/" >Home</a>
        <a class="navbar-item"routerLink="/stories" >Stories</a>
        <a class="navbar-item"routerLink="/community" >Useful Links</a>
        <a class="navbar-item"routerLink="/collections" >Collections</a>
        <a class="navbar-item"routerLink="/contact" >Get in Touch</a> 
        <a class="navbar-item"routerLink="/about" >About Us</a>
      </div>
      </div>
  `,
  styles: [`

  `
  ]
})
export class HeaderComponent {


}
 