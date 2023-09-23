import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="home" routerLinkActive="active">Home</a> |
    <a routerLink="about" routerLinkActive="active">About</a> |
    <a routerLink="contact/a/b/c" routerLinkActive="active">Contact</a>
    <br />

    <hr />
    <router-outlet></router-outlet>
  `,
  styles:[".active{color:yellow;}"]
})
export class AppComponent {
  title = 'Routing';
}
