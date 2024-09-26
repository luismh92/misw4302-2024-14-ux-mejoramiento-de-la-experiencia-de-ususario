import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { RegistroRoutes } from './registro.routing';

@NgModule({
  imports: [
    CommonModule,
    RegistroRoutes
  ],
  declarations: [RegistroComponent]
})
export class RegistroModule { }
