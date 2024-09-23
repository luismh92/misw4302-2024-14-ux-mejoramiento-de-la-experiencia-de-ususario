import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './configuracion.component';
import { RouterModule } from '@angular/router';
import { ConfiguracionRoutes } from './configuracion.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ConfiguracionRoutes
  ],
  declarations: [ConfiguracionComponent],
  exports: [ConfiguracionComponent]
})
export class ConfiguracionModule { }
