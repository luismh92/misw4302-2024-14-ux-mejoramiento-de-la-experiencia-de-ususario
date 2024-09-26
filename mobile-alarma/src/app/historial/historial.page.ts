import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historial',
  templateUrl: 'historial.page.html',
  styleUrls: ['historial.page.scss'],
})
export class HistorialPage {
  incidentes = [
    { titulo: 'Robo en la tienda de la esquina' },
    { titulo: 'Accidente en la calle principal' },
    { titulo: 'Robo de bicicletas en el parque' },
    { titulo: 'Intruso en la zona residencial' },
  ];

  constructor(private navCtrl: NavController) {}

  navigateToInicio() {
    this.navCtrl.navigateBack('/inicio'); // Redirige a la página de inicio
  }
}