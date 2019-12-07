import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CargaAcademica } from '../models/carga-academica';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class CargaAcademicaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  addCliente(cargaAcademica: CargaAcademica): Observable<CargaAcademica> {
    return this.http.post<CargaAcademica>(this.baseUrl + 'api/cargaAcademica', cargaAcademica, httpOptions).pipe(
      tap((newCargaAcademica: CargaAcademica) => this.log(`Se agregó una Carga w/ id=${newCargaAcademica.cargaId}`)),
      catchError(this.handleError<CargaAcademica>('addCliente'))
    );
  }

  getAll(): Observable<CargaAcademica[]> {
    return this.http.get<CargaAcademica[]>(this.baseUrl + 'api/cargaAcademica').pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<CargaAcademica[]>('getAll', []))
    );
  }

  get(id: string): Observable<CargaAcademica> {
    const url = `${this.baseUrl + 'api/cargaAcademica'}/${id}`;
    return this.http.get<CargaAcademica>(url).pipe(
      tap(_ => console.log(`fetched cliente id=${id}`)),
      catchError(this.handleError<CargaAcademica>(`getHero id=${id}`))
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
