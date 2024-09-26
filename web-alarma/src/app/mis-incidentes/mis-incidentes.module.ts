import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisIncidentesComponent } from './mis-incidentes.component';
import { MisIncidentesRoutes } from './mis-incidentes.routing';

@NgModule({
  imports: [
    CommonModule,
    MisIncidentesRoutes
  ],
  declarations: [MisIncidentesComponent]
})
export class MisIncidentesModule { }
