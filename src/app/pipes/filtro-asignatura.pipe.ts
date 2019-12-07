import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroAsignatura'
})
export class FiltroAsignaturaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
