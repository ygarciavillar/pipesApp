import { Component } from '@angular/core';
import { Color,  Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent{

  isUpper: boolean = true;
  ordenarPor: string = ''
 
  heroes: Heroe[] = [
    { nombre: 'Superman',vuela: true,color: Color.azul },
    {nombre: 'Batman', vuela: false,color: Color.negro },
    {nombre: 'Robin', vuela: false,color: Color.verde},
    {nombre: 'Daredevil', vuela: false, color: Color.rojo },
    {nombre: 'Linterna Verde', vuela: true, color: Color.verde }
  ]

  toogle() {
    this.isUpper = !this.isUpper
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor
  }

}
