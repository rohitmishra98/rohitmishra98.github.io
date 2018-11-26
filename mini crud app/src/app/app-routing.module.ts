import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';






const routes: Route[] = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path:'main',
    component:HomeComponent,
  },
  {
    path:'main/add',
    component:AddComponent,
  },
  {
    path:'main/:id',
    component:AddComponent,
  },
  {
    path:'main/**',
    redirectTo: 'main',
    pathMatch: 'full',
  },

  {
    path:'**',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  declarations: [],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
