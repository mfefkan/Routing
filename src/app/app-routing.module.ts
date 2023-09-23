import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"}, //Default rout ayarımız. pathMatch ile ilgili iki parametre var full ve prefix. full tam eşleşme ister fakat prefix tam eşleşmese de çalışır.
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact/a/b/c", component:ContactComponent},
  {path:"**",component:ErrorComponent} //bu path en alta tanımlanmalıdır aksi taktirde kendisinden sonra gelen pathleri görmeyip bütün pathleri error componentine yönlendirir.
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
