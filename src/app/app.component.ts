import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config = [
    {
      id: 'name-field',
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validators: [Validators.required]
    },
    {
      id: 'food-select',
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: [
      {
        name: 'Pizza',
        value: 'fav-food-1'
      },
      {
        name: 'Pasta',
        value: 'fav-food-2'
      },
      {
        name: 'Chicken',
        value: 'fav-food-3'
      },
      ],
      placeholder: 'Select an option',
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
    },
  ];

  constructor() {}

  submitDynamicForm(formValue): void {
    console.log(formValue);
  }
}
