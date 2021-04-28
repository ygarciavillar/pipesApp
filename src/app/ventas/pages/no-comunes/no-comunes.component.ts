import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  isMale: boolean = false
  nombre: string = 'Usuaria';
  genero: string = 'femenino';
  invitacionMap = {
    'femenino': 'invitarla', 
    'masculino': 'invitarlo'
  }

  //i18nPlural
  clientes: string[] = ['Jose', 'Pedro', 'Maria', 'Gloria']
  clientesMap = {
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }

  cambiarPersona(){
    this.nombre === 'Usuaria' ? this.nombre = 'Usuario' : this.nombre = 'Usuaria'
    this.genero === 'femenino' ? this.genero = 'masculino' : this.genero = 'femenino'
     
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //keyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 30,
    direccion: 'Ave 33 st'
  }

  heroes= [
    {nombre: 'Superman', vuela: true },
    {nombre: 'Spiderman', vuela: false},
    {nombre: 'Aquaman', vuela: true}
]

//Async Pipe
 miObservable = interval(1000)

 valorPromesa = new Promise((resolve) => {
    setTimeout( ()=>{
        resolve("tenemos data de promesa")
    }, 3500)
 })
}
