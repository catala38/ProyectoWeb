import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPrograma'
})
export class FiltroProgramaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
