import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'alert',
    loadChildren: () =>
      import('./template/template.module').then((m) => m.TemplateModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./ingreso/ingreso.module').then((m) => m.IngresoModule),
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./registro/registro.module').then((m) => m.RegistroModule),
  },
];
