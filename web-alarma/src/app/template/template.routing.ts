import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TemplateComponent } from './template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'configuracion',
        loadChildren: () =>
          import('../configuracion/configuracion.module').then(
            (m) => m.ConfiguracionModule
          ),
      },
      {
        path: 'mis-incidentes',
        loadChildren: () =>
          import('../mis-incidentes/mis-incidentes.module').then((m) => m.MisIncidentesModule),
      },
      {
        path: 'historial',
        loadChildren: () =>
          import('../historial/historial.module').then((m) => m.HistorialModule),
      },
      {
        path: 'incidentes',
        loadChildren: () =>
          import('../incidentes/incidentes.module').then((m) => m.IncidentesModule),
      },
      {
        path: 'incidente',
        loadChildren: () =>
          import('../incidente/incidente.module').then((m) => m.IncidenteModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateRoutes {}
