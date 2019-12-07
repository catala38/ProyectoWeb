import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { EjeTematico } from '../models/eje-tematico';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class EjeTematicoService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addCliente(ejetematico: EjeTematico): Observable<EjeTematico> {
    return this.http.post<EjeTematico>(this.baseUrl + 'api/ejetematico', ejetematico, httpOptions).pipe(
      tap((newEjeTematico: EjeTematico) => this.log(`Se agregó una eje w/ id=${newEjeTematico.ejeId}`)),
      catchError(this.handleError<EjeTematico>('addCliente'))
    );
  }

  getAll(): Observable<EjeTematico[]> {
    return this.http.get<EjeTematico[]>(this.baseUrl + 'api/ejetematico').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<EjeTematico[]>('getAll', []))
    );
  }

  get(id: string): Observable<EjeTematico> {
    const url = `${this.baseUrl + 'api/ejetematico'}/${id}`;
    return this.http.get<EjeTematico>(url).pipe(
      tap(_ => console.log(`fetched cliente id=${id}`)),
      catchError(this.handleError<EjeTematico>(`getHero id=${id}`))
    );
  }
  update(ejetematico: EjeTematico): Observable<any> {
    const url = `${this.baseUrl + 'api/ejetematico'}/${ejetematico.ejeId}`;
    return this.http.put(url, ejetematico, httpOptions).pipe(
      tap(_ => this.log(`se modificó la Asignatura con id=${ejetematico.ejeId}`)),
      catchError(this.handleError<any>('cliente'))
    );
  }


  delete(ejetematico: EjeTematico | string): Observable<EjeTematico> {
    const id = typeof ejetematico === 'string' ? ejetematico : ejetematico.ejeId;
    const url = `${this.baseUrl + 'api/ejetematico'}/${id}`;

    return this.http.delete<EjeTematico>(url, httpOptions).pipe(
      tap(_ => this.log(`se eleminó la asignatura con id=${id}`)),
      catchError(this.handleError<EjeTematico>('deleteCliente'))
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
