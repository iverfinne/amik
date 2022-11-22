import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) {}
}
