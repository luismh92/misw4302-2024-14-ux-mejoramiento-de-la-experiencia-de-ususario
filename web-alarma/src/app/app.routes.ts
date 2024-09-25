import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./template/template.module').then(m => m.TemplateModule),
    },
{
    path: 'ingreso',
    loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule),
},
{
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule),
}];
