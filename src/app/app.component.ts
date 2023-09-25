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
    <br>
    <button (click)="go()">Url değiştir. HTML5 yöntemi</button>

  `,
  styles:[".active{color:yellow;}"]
})
export class AppComponent {
  constructor(){
   
  }


  go(){
    history.pushState({message:"merhaba"},"title","a/b")
  }
  title = 'Routing';
}
