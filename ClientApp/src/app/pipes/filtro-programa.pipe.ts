import { Pipe, PipeTransform } from '@angular/core';
import {Programa} from '../models/programa';

@Pipe({
  name: 'filtroPrograma'
})
export class FiltroProgramaPipe implements PipeTransform {

  transform(programas: Programa[], searchText: string) {
    if (searchText == null) return programas;
    return programas.filter(programa =>
        programa.facultad.nombre.toString().indexOf(searchText) !== -1
    );
}

}
