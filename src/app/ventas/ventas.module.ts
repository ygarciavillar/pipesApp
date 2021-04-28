import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

import { BooleanPipes } from './pipes/boolean.pipe';
import { MayusculasPipes } from './pipes/mayusculas.pipe';
import { OrdenarPipes } from './pipes/ordenar.pipe';




@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    BooleanPipes,
    MayusculasPipes,
    OrdenarPipes
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ]
})
export class VentasModule { }
