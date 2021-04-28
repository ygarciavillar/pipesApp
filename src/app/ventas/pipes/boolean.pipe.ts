import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'boolean'
})
export class BooleanPipes implements PipeTransform {

    transform(value: boolean): string {
        return (value) ? 'vuela' : 'no vuela'
    }

}