import { Pipe, PipeTransform } from '@angular/core';
import { Asignatura } from '../models/asignatura';

@Pipe({
  name: 'filtroAsignatura'
})
export class FiltroAsignaturaPipe implements PipeTransform {

  transform(asignaturas: Asignatura[], searchText: string) {
    if (searchText == null) return asignaturas;
    return asignaturas.filter(asignatura =>
      asignatura.programa.nombrePro.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
  }

}





