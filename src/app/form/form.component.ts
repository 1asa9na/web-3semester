import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  name: string = '';
  surname: string = '';
  dob: Date = new Date();
  contact: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  login: string = '';

  readonly emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  readonly passwordPattern: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  readonly contactPattern: RegExp = /^[0-9]{6,14}/;


  onSubmit() {
    console.log('Form submitted');
  }

  validator(data: string, pattern: RegExp): boolean {
    return pattern.test(data)
  }

  dobValidator(): boolean {
    let today: Date = new Date()
    return new Date(this.dob) <= new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  }
}