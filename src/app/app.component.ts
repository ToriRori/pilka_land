import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  goToGithub(): void {
    window.open('https://github.com/RoyalStorm/nails-tracker');
  }
}
