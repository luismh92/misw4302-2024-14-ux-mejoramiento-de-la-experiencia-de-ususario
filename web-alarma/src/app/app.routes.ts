import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [{
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then(m => m.ConfiguracionModule),
},
{
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then(m => m.HistorialModule),
}];
