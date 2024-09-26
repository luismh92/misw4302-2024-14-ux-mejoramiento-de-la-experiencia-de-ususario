import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reporte-incidente',
  templateUrl: './reporte-incidente.page.html',
  styleUrls: ['./reporte-incidente.page.scss'],
})
export class ReporteIncidentePage {
  nombreIncidente: string = '';
  descripcionIncidente: string = '';

  constructor(private navCtrl: NavController) {}

  navigateToInicio() {
    this.navCtrl.navigateBack('/inicio');
  }

  adjuntar() {
    // Lógica para adjuntar archivos o realizar alguna acción
    console.log('Adjuntar clicado');
  }

  crearReporte() {
    // Aquí puedes manejar la lógica para crear el reporte
    console.log('Reporte creado:', this.nombreIncidente, this.descripcionIncidente);
    this.navigateToInicio(); // Regresar a la página de inicio
  }
}
