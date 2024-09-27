import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  constructor(private navCtrl: NavController) {}

  navigateToTabs() {
    // Lógica para navegar a las pestañas
    this.navCtrl.navigateForward('/tabs');
  }

  navigateToIncidentes() {
    // Navega a la página de detalle del incidente
    this.navCtrl.navigateForward('/incidentes');
  }

  // Método para navegar a otras páginas
  goToPage(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }
}