import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage {

  constructor(private navCtrl: NavController) {}

  navigateToConfiguracion() {
    this.navCtrl.navigateBack('/configuracion'); // Asegúrate de que la ruta sea correcta
  }
}
