import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoComponent } from './ingreso.component';
import { IngresoRoutes } from './ingreso.routing';

@NgModule({
  imports: [
    CommonModule,
    IngresoRoutes
  ],
  declarations: [IngresoComponent]
})
export class IngresoModule { }
