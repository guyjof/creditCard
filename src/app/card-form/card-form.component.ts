import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // Validators.maxLength(5),
      // Validators.pattern(/\s/),
      // Validators.min(1000),
      // Validators.max(2000),
      // Validators.email,
      // Validators.requiredTrue, //this is used for checkbox validiations for example
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ]),
  })

  constructor() {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.cardForm.value);

  }

  onResetClick() {
    this.cardForm.reset()
  }

}
