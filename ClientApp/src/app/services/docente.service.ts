import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Docente } from '../models/docente';
import { HandleErrorService } from './handle-error.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) { }

  addDocente(docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(this.baseUrl + 'api/docente', docente, httpOptions).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Docente>('Registrar Docente', null))
    );
  }

  getAll(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.baseUrl + 'api/docente').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Docente[]>('getAll', []))
    );
  }

  getDocentesByProgramas(id:string): Observable<Docente[]> {
    const url = `${this.baseUrl + 'api/docente'}/programa=${id}`;
    return this.http.get<Docente[]>(url).pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Docente[]>('getAll', []))
    );
  }

  get(id: string): Observable<Docente> {
    const url = `${this.baseUrl + 'api/docente'}/${id}`;
    return this.http.get<Docente>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Docente>('Cuenta Service', null))
    );
  }

  
  
  update(docente: Docente): Observable<any> {
    const url = `${this.baseUrl + 'api/docente'}/${docente.identificacion}`;
    return this.http.put(url, docente, httpOptions).pipe(
      tap(_ => this.log(`se modificaron los datos del docente con id=${docente.identificacion}`)),
      catchError(this.handleError<any>('docente'))
    );
  }


  delete(docente: Docente | string): Observable<Docente> {
    const id = typeof docente === 'string' ? docente : docente.identificacion;
    const url = `${this.baseUrl + 'api/docente'}/${id}`;

    return this.http.delete<Docente>(url, httpOptions).pipe(
      tap(_ => this.log(`se eleminó el docente con id=${id}`)),
      catchError(this.handleError<Docente>('deleteDocente'))
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

