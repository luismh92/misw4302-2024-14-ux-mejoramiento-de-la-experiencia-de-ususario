import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage {

  constructor(private navCtrl: NavController) {}

  navigateToContactos() {
    this.navCtrl.navigateForward('/contactos'); // Asegúrate de que la ruta sea correcta
  }

  navigateToInicio() {
    this.navCtrl.navigateBack('/inicio'); // Redirige a la página de inicio
  }
}
