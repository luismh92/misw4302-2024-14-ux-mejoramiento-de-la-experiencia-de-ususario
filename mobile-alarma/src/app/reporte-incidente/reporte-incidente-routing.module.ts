import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteIncidentePage } from './reporte-incidente.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteIncidentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteIncidentePageRoutingModule {}
