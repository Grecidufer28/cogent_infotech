import { Component } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-angular-app';
  model:Login
  constructor() {
    this.model = new Login('abc@gmail.com', 'password@123', true)
  }

  onSubmit(loginform: any) {
    console.log(loginform.value)
    alert(`Email: ${loginform.value.email}, Password: ${loginform.value.password}`)
  }
}
