import {Component, Input, Output, EventEmitter} from '@angular/core';
declare const Email: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  infoMode = true;
  navbarCollapsed = true;
  name;
  text;
  email;
  @Output() btnClick = new EventEmitter();
  goToGithub(): void {
    window.open('https://github.com/RoyalStorm/nails-tracker');
  }

  switchToForm() {
    this.infoMode = true;
    this.btnClick.emit();
  }

  switchToInfo() {
    this.infoMode = false;
    this.btnClick.emit();
  }

  onSubmit() {
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!regexp.test(this.email)) {
      alert('Email is not valid!');
      return;
    }
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'torirorik@gmail.com',
      Password : '4B8FC21B1409EB32DF90A9FF5F8213A01BDD',
      To : 'torirorik@gmail.com',
      From : 'torirorik@gmail.com',
      Subject : this.name + " " + this.email,
      Body : this.text
    }).then( message => {
      if (message != 'OK') {
        alert('There was a mistake, try again later.');
      } else {
        alert('The message is sent!')
      }} );
  }
}
