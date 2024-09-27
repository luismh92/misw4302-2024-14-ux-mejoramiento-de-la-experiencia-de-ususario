import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistroComponent } from './registro.component';

const routes: Routes = [
  { 
    path: '',
    component: RegistroComponent,
   },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutes { }
