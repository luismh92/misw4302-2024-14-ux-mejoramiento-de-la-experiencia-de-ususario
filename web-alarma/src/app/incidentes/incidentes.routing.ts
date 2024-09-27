import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IncidentesComponent } from './incidentes.component';

const routes: Routes = [
  { 
    path: '',
    component: IncidentesComponent,
   },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentesRoutes { }
