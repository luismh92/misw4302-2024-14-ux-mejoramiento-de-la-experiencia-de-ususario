import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncidenteDetallePageRoutingModule } from './incidente-detalle-routing.module';

import { IncidenteDetallePage } from './incidente-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncidenteDetallePageRoutingModule
  ],
  declarations: [IncidenteDetallePage]
})
export class IncidenteDetallePageModule {}
