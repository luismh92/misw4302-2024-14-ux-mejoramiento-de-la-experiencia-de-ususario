import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-incidentes',
  templateUrl: './incidentes.page.html',
  styleUrls: ['./incidentes.page.scss'],
})
export class IncidentesPage {

  constructor(private navCtrl: NavController) {}

  // Función para navegar a la pantalla de Inicio
  navigateToInicio() {
    this.navCtrl.navigateBack('/inicio');
  }
}
