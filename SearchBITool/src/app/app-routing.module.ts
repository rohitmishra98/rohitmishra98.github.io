import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchDataComponent } from './search-data/search-data.component';
import { Search } from './search';
import { InputComponent } from './input/input.component';
import { AppComponent } from './app.component';

// import { InputComponent } from './input/input.component';

// data=Search;

const routes: Routes= [
  { 
    path: 'search/:partyname/:id/:location', 
    component: SearchDataComponent 
  },
 
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
 }
export const routingComponents = [SearchDataComponent]


