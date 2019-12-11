import { Injectable , Inject} from '@angular/core';
import { Grupo } from '../models/grupo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  grupos: Grupo[];
  addGrupoService(grupo: Grupo): Observable<Grupo> {
    return this.http.post<Grupo>(this.baseUrl + 'api/grupo', grupo, httpOptions).pipe(
      tap((newDocente: Grupo) => this.log(`Se agregó un grupo w/ id=${newDocente.grupoId}`)),
      catchError(this.handleError<Grupo>('addDocente'))
    );
  }


  addGrupo(grupo: Grupo) {
    this.grupos=[];
    if (sessionStorage.getItem("grupos") != null) {
      this.grupos = JSON.parse(sessionStorage.getItem("grupos"));
    }
    this.grupos.push(grupo);
    sessionStorage.setItem("grupos",JSON.stringify(this.grupos));
    console.log("hola");
    
  }
  getGrupos():Grupo[]{
    return JSON.parse(sessionStorage.getItem("grupos"));
  }
  

  get(id: number): Observable<Grupo> {
    const url = `${this.baseUrl + 'api/grupo'}/${id}`;
    return this.http.get<Grupo>(url).pipe(
      tap(_ => console.log(`fetched Grupo id=${id}`)),
      catchError(this.handleError<Grupo>(`getHero id=${id}`))
    );
  }
  
  getAll(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(this.baseUrl + 'api/grupo')
    .pipe(
      tap(_ => console.log('Se Consulta la información')),
      catchError(this.handleError<Grupo[]>('getAll', []))
    );
  }

  getGrupoByAsignatura(id: string): Observable<Grupo[]> {
    const url = `${this.baseUrl + 'api/grupo'}/asignatura=${id}`;
    return this.http.get<Grupo[]>(url).pipe(
      tap(_ => console.log(`fetched Grupo id=${id}`)),
      catchError(
        rest=>{
          return of([]);

        }
      )
    );
  }

  getGrupoByDocente(id: string): Observable<Grupo[]> {
    const url = `${this.baseUrl + 'api/grupo'}/docente=${id}`;
    return this.http.get<Grupo[]>(url).pipe(
      tap(_ => console.log(`fetched Grupo id=${id}`)),
      catchError(
        rest=>{
          return of([]);

        }
      )
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
