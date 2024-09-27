import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  goToLogin() {
    this.navCtrl.navigateBack('/login'); 
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
     
      this.goToLogin(); 
    }
  }
}
