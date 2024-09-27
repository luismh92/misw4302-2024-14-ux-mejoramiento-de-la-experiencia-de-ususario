import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialComponent } from './historial.component';
import { RouterModule } from '@angular/router';
import { HistorialRoutes } from './historial.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HistorialRoutes
  ],
  declarations: [HistorialComponent]
})
export class HistorialModule { }
