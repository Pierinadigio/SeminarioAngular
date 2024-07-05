import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatitaAboutComponent } from './patita-about/patita-about.component';
import { PatitaHomeComponent } from './patita-home/patita-home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full' 
  },
  {
    path: 'productos', 
    component: PatitaHomeComponent
  },
  {
    path: 'about', 
    component: PatitaAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
