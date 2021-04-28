import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from "../interfaces/heroe.interface";

@Pipe({
    name: 'ordenar'
})
export class OrdenarPipes implements PipeTransform {

    transform(heroes: Heroe[], orderPor: string = 'sin valor'): Heroe[] {
     
        switch (orderPor){
            case 'nombre':
                return heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1)
            case 'vuela':
                return heroes.sort((a, b) => (b.vuela > a.vuela) ? 1 : -1)
            case 'color':
                return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1)
            default:
                return heroes
        }
            
       
    }

}