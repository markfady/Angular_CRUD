import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div> {{pageTitle}}</div>`,
})
export class AppComponent {
  pageTitle: string = 'Angular Getting Started';
}