import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    // Inicializamos el formulario de login con validaciones
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Método que se llama cuando se envía el formulario
  onLogin() {
    if (this.loginForm.valid) {
      console.log('Formulario válido. Procesando login...');
      // Aquí implementas la lógica de autenticación
    } else {
      console.error('Formulario no válido');
    }
  }

  // Método para redirigir a la página de registro
  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  // Método para recuperar contraseña
  recoverPassword() {
    console.log('Recuperar contraseña activado');
    // Implementa lógica para recuperación de contraseña aquí
  }
}