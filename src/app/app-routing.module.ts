import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { ProjectsComponent } from './Components/projects/projects.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'p',component:ProjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
