    // Import Angular core modules and necessary dependencies
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { CommonModule } from '@angular/common';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import if you use template-driven forms
    import { HttpClientModule } from '@angular/common/http'; // Import if you use HTTP services
    // Import your main app component
    import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

    // Define the NgModule decorator to set up the module
    @NgModule({
    declarations: [
        AppComponent, // Declare the main component and any other components used
    ],
    imports: [
        
        RouterModule,
        BrowserModule, // Needed for any web-based app
        FormsModule,   // Needed if you use template-driven forms
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule, // Needed if you use HTTP services
      
    ],
    exports: [RouterModule],
    providers: [ ],// Register services here, e.g. { provide: 'SomeService', useClass: SomeService }
    bootstrap: [
        AppComponent // The root component to bootstrap when the app starts
    ]
    })
    export class AppModule { }
