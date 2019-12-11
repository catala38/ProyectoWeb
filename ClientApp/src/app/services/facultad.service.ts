import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Facultad } from '../models/facultad';
import { HandleErrorService } from './handle-error.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class FacultadService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) { }

  addCliente(facultad: Facultad): Observable<Facultad> {
    return this.http.post<Facultad>(this.baseUrl + 'api/facultad', facultad, httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Facultad>('Registrar Facultad',null))
    );
  }

  getAll(): Observable<Facultad[]> {
    return this.http.get<Facultad[]>(this.baseUrl + 'api/facultad')
    .pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Facultad[]>('getAll', []))
    );
  }

  getFacultadByNombre(nombre: string): Observable<Facultad> {
    const url = `${this.baseUrl + 'api/facultad'}/facultad=${nombre}`;
    return this.http.get<Facultad>(url).pipe(
      tap(_ => console.log(`fetched cliente id=${nombre}`)),
      catchError(rest => {
        return of(undefined);

      })
    );
  }
  
  get(id: number): Observable<Facultad> {
    const url = `${this.baseUrl + 'api/facultad'}/${id}`;
    return this.http.get<Facultad>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Facultad>('Cuenta Service', null))
    );
  }


  update(facultad: Facultad): Observable<any> {
    const url = `${this.baseUrl + 'api/facultad'}/${facultad.facultadId}`;
    return this.http.put(url, facultad, httpOptions).pipe(
      tap(_ => this.log(`se modificó la facultad con id=${facultad.facultadId}`)),
      catchError(this.handleError<any>('cliente'))
    );
  }
  delete(facultad: Facultad | number): Observable<Facultad> {
    const id = typeof facultad === 'number' ? facultad : facultad.facultadId;
    const url = `${this.baseUrl + 'api/facultad'}/${id}`;

    return this.http.delete<Facultad>(url, httpOptions).pipe(
      tap(_ => this.log(`se eliminó la facultad con id=${id}`)),
      catchError(this.handleError<Facultad>('deleteCliente'))
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