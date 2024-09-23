import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './configuracion.component';
import { RouterModule } from '@angular/router';
import { ConfiguracionRoutes } from './configuracion.routing';
import { ToggleComponent } from '../../components/toggle/toggle.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ConfiguracionRoutes
  ],
  declarations: [ConfiguracionComponent, ToggleComponent],
  exports: [ConfiguracionComponent]
})
export class ConfiguracionModule { }
