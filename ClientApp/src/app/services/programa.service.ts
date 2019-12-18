import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Programa} from '../models/programa';
import { HandleErrorService } from './handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProgramaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,private handleErrorService: HandleErrorService) { }

  addCliente(programa: Programa): Observable<Programa> {
    return this.http.post<Programa>(this.baseUrl + 'api/programa', programa, httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Programa>('Registrar Programa', null))
    );
  }

  getAll(): Observable<Programa[]> {
    return this.http.get<Programa[]>(this.baseUrl + 'api/programa').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Programa[]>('getAll', []))
    );
  }
  
  getFac(id: number): Observable<Programa[]> {
    const url = `${this.baseUrl + 'api/programa'}/${id}`;
    return this.http.get<Programa[]>(url).pipe(
      tap(_ => console.log(`fetched cliente id`)),
      catchError(this.handleErrorService.handleError<Programa[]>(`getHero id`,[]))
    );
  }

  getProgramaByNombre(nombre: string): Observable<Programa> {
    const url = `${this.baseUrl + 'api/programa'}/programa=${nombre}`;
    return this.http.get<Programa>(url).pipe(
      tap(_ => console.log(`fetched programa id=${nombre}`)),
      catchError(rest => {
        return of(undefined);
      })
    );
  }

  get(id: string): Observable<Programa> {
    const url = `${this.baseUrl + 'api/programa'}/${id}`;
    return this.http.get<Programa>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Programa>('Cuenta Service', null))
    );
  }
  update(programa: Programa): Observable<any> {
    const url = `${this.baseUrl + 'api/programa'}/${programa.programaId}`;
    return this.http.put(url, programa, httpOptions).pipe(
      tap(_ => this.log(`se modificó el programa con id=${programa.programaId}`)),
      catchError(this.handleError<any>('cliente'))
    );
  }


  delete(programa: Programa | string): Observable<Programa> {
    const id = typeof programa === 'string' ? programa : programa.programaId;
    const url = `${this.baseUrl + 'api/programa'}/${id}`;

    return this.http.delete<Programa>(url, httpOptions).pipe(
      tap(_ => this.log(`se eliminó el programa con id=${id}`)),
      catchError(this.handleError<Programa>('deleteCliente'))
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
