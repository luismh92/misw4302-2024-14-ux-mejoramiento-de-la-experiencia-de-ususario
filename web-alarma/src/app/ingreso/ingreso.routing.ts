import { Routes, RouterModule } from '@angular/router';
import { IngresoComponent } from './ingreso.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { 
    path: '',
    component: IngresoComponent
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngresoRoutes { }
