import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faPlus = faPlus;
}
