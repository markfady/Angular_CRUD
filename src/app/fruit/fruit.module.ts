import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule here

import { FruitRoutingModule } from './fruit-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FruitRoutingModule,
    RouterModule.forRoot([
      { path: 'fruit/index', component: HomeComponent },
      { path: 'fruit',redirectTo: 'fruit', pathMatch: 'full' },
      { path: '', redirectTo: 'fruit', pathMatch: 'full' } // Redirect to 'fruit' for the default route
    ])
  ]
})
export class FruitModule { }
