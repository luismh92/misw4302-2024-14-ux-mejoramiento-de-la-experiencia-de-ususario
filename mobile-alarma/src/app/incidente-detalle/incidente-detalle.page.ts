import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-incidente-detalle',
  templateUrl: './incidente-detalle.page.html',
  styleUrls: ['./incidente-detalle.page.scss'],
})
export class IncidenteDetallePage {

  constructor(private navCtrl: NavController) { }

  // Método para volver a la página de incidentes
  goBackToIncidentes() {
    this.navCtrl.navigateBack('/incidentes');
  }
}
