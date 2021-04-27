import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevapaginaPageRoutingModule } from './nuevapagina-routing.module';

import { NuevapaginaPage } from './nuevapagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevapaginaPageRoutingModule
  ],
  declarations: [NuevapaginaPage]
})
export class NuevapaginaPageModule {}
