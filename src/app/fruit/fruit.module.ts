import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule here

import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'fruit/home', component: HomeComponent },
      { path: 'fruit',redirectTo: 'fruit/home', pathMatch: 'full' },
      { path: 'fruit/create',component:CreateComponent },
      { path: '', redirectTo: 'fruit/home', pathMatch: 'full' } // Redirect to 'fruit' for the default route
    ])
  ]
})
export class FruitModule { }
