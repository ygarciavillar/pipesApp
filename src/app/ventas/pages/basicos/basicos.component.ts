import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'hola';
  nombreUpper: string = 'Hola';
  nombreCompleto: string = 'hola Mundo';

  fecha: Date = new Date()

}
