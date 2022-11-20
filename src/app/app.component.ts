import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--header-->
<app-header></app-header>
    <!--- routes --->
<router-outlet></router-outlet>
    <!---footers --->
<app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'akima-web';
}
