import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevapaginaPage } from './nuevapagina.page';

const routes: Routes = [
  {
    path: '',
    component: NuevapaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevapaginaPageRoutingModule {}
