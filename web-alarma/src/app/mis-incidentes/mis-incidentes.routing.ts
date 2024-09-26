import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MisIncidentesComponent } from './mis-incidentes.component';

const routes: Routes = [
  { 
    path: '',
    component: MisIncidentesComponent,
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisIncidentesRoutes { }
