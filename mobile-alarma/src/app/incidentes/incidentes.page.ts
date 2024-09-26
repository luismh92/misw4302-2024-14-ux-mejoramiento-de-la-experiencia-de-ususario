import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-incidentes',
  templateUrl: './incidentes.page.html',
  styleUrls: ['./incidentes.page.scss'],
})
export class IncidentesPage {

  constructor(private navCtrl: NavController) {}

  // Método para ir a la página de detalles del incidente
  goToIncidenteDetalle() {
    this.navCtrl.navigateForward('/incidente-detalle');
  }

  // Método para volver a la página de inicio
  navigateToInicio() {
    this.navCtrl.navigateBack('/inicio');
  }
}
