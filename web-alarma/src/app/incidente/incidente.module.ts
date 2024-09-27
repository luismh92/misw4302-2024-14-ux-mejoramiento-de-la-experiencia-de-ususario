import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidenteComponent } from './incidente.component';
import { IncidenteRoutes } from './incidente.routing';

@NgModule({
  imports: [
    CommonModule,
    IncidenteRoutes
  ],
  declarations: [IncidenteComponent]
})
export class IncidenteModule { }
