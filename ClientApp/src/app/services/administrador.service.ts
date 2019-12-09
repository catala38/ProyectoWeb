import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Administrador} from '../models/administrador';
import { HandleErrorService } from './handle-error.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string,private handleErrorService: HandleErrorService) { }

  addAdmin(administrador: Administrador): Observable<Administrador> {
    return this.http.post<Administrador>(this.baseUrl + 'api/administrador', administrador, httpOptions).pipe(
      tap((newAdministrador: Administrador) => this.log(`Se agregó un docente w/ id=${newAdministrador.usuario}`)),
      catchError(this.handleError<Administrador>('addAdmin'))
    );
  }

  getAll(): Observable<Administrador[]> {
    return this.http.get<Administrador[]>(this.baseUrl + 'api/administrador').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Administrador[]>('getAll', []))
    );
  }

  
/*
  get(id: string): Observable<Administrador> {
    const url = `${this.baseUrl + 'api/administrador'}/${id}`;
    return this.http.get<Administrador>(url).pipe(
      tap(_ => console.log(`fetched docente id=${id}`)),
      catchError(this.handleError<Administrador>(`getHero id=${id}`))
    );
  }*/

  get(id: string): Observable<Administrador> {
    const url = `${this.baseUrl + 'api/administrador'}/${id}`;
    return this.http.get<Administrador>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Administrador>('Administrador Service', null))
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
