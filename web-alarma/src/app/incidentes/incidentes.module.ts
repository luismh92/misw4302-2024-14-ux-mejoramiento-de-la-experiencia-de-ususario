import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentesComponent } from './incidentes.component';
import { IncidentesRoutes } from './incidentes.routing';

@NgModule({
  imports: [
    CommonModule,
    IncidentesRoutes
  ],
  declarations: [IncidentesComponent]
})
export class IncidentesModule { }
