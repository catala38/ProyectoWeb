import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Asignatura } from '../models/asignatura';
import { HandleErrorService } from './handle-error.service';
import { ItemPlanDesarrollo } from '../models/item-plan-desarrollo';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PlanDesarrolloService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,private handleErrorService: HandleErrorService) { }

  addItemPlanDesarrollo(itemPlanDesarrollo: ItemPlanDesarrollo): Observable<ItemPlanDesarrollo> {
    return this.http.post<ItemPlanDesarrollo>(this.baseUrl + 'api/itemPlanDesarrollo', itemPlanDesarrollo, httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<ItemPlanDesarrollo>('Registrar PlanDesarrollo', null))
    );
  }

  getAll(): Observable<ItemPlanDesarrollo[]> {
    return this.http.get<ItemPlanDesarrollo[]>(this.baseUrl + 'api/itemPlanDesarrollo').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<ItemPlanDesarrollo[]>('getAll', []))
    );
  }

  get(id: number): Observable<ItemPlanDesarrollo> {
    const url = `${this.baseUrl + 'api/ItemPlanDesarrollo'}/${id}`;
    return this.http.get<ItemPlanDesarrollo>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<ItemPlanDesarrollo>('Cuenta Service', null))
    );
  }

  update(itemPlanDesarrollo: ItemPlanDesarrollo): Observable<any> {
    const url = `${this.baseUrl + 'api/ItemPlanDesarrollo'}/${itemPlanDesarrollo.idPlan}`;
    return this.http.put(url, itemPlanDesarrollo, httpOptions).pipe(
      tap(_ => this.log(`se modificó el plan desarrollo con id=${itemPlanDesarrollo.idPlan}`)),
      catchError(this.handleError<any>('cliente'))
    );
  }


  delete(itemPlanDesarrollo: ItemPlanDesarrollo | number): Observable<ItemPlanDesarrollo> {
    const id = typeof itemPlanDesarrollo === 'number' ? itemPlanDesarrollo : itemPlanDesarrollo.idPlan;
    const url = `${this.baseUrl + 'api/ItemPlanDesarrollo'}/${id}`;

    return this.http.delete<ItemPlanDesarrollo>(url, httpOptions).pipe(
      tap(_ => this.log(`se eleminó la asignatura con id=${id}`)),
      catchError(this.handleError<ItemPlanDesarrollo>('delete'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {

    alert(message);
  }


}
