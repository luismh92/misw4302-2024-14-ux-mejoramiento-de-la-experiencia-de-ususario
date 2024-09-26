import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteIncidentePageRoutingModule } from './reporte-incidente-routing.module';

import { ReporteIncidentePage } from './reporte-incidente.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteIncidentePageRoutingModule
  ],
  declarations: [ReporteIncidentePage]
})
export class ReporteIncidentePageModule {}
