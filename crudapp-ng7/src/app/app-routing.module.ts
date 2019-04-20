import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route,RouterModule} from '@angular/router';
import { TableListComponent } from 'src/app/table-list/table-list.component';
import { AddEmployeeComponent } from 'src/app/add-employee/add-employee.component';


const routes: Route[] = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path:'list',
    component:TableListComponent,
  },
  {
    path:'list/add',
    component:AddEmployeeComponent,
  },
  {
    path:'list/:id',
    component:AddEmployeeComponent,
  },
  {
    path:'list/**',
    redirectTo: 'list',
    pathMatch: 'full',
  },

  {
    path:'**',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
