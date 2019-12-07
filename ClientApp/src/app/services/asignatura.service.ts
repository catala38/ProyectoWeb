import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Asignatura } from '../models/asignatura';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addCliente(asignatura: Asignatura): Observable<Asignatura> {
    return this.http.post<Asignatura>(this.baseUrl + 'api/asignatura', asignatura, httpOptions).pipe(
      tap((newAsignatura: Asignatura) => this.log(`Se agregó una asignatura w/ id=${newAsignatura.AsignaturaId}`)),
      catchError(this.handleError<Asignatura>('addCliente'))
    );
  }

  getAll(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.baseUrl + 'api/asignatura').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Asignatura[]>('getAll', []))
    );
  }
  getAsignaturasByProgramas(id:number): Observable<Asignatura[]> {
    const url = `${this.baseUrl + 'api/asignatura'}/programa=${id}`;
    return this.http.get<Asignatura[]>(url).pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Asignatura[]>('getAll', []))
    );
  }

  get(id: string): Observable<Asignatura> {
    const url = `${this.baseUrl + 'api/asignatura'}/${id}`;
    return this.http.get<Asignatura>(url).pipe(
      tap(_ => console.log(`fetched cliente id=${id}`)),
      catchError(this.handleError<Asignatura>(`getHero id=${id}`))
    );
  }
  update(asignatura: Asignatura): Observable<any> {
    const url = `${this.baseUrl + 'api/asignatura'}/${asignatura.AsignaturaId}`;
    return this.http.put(url, asignatura, httpOptions).pipe(
      tap(_ => this.log(`se modificó la Asignatura con id=${asignatura.AsignaturaId}`)),
      catchError(this.handleError<any>('cliente'))
    );
  }


  delete(asignatura: Asignatura | string): Observable<Asignatura> {
    const id = typeof asignatura === 'string' ? asignatura : asignatura.AsignaturaId;
    const url = `${this.baseUrl + 'api/asignatura'}/${id}`;

    return this.http.delete<Asignatura>(url, httpOptions).pipe(
      tap(_ => this.log(`se eleminó la asignatura con id=${id}`)),
      catchError(this.handleError<Asignatura>('deleteCliente'))
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
