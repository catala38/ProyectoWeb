import { Tema } from '../models/tema';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleErrorService } from './handle-error.service';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TemaService {
  temas: Tema[];
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private handleErrorService: HandleErrorService) { }

  addTema(tema: Tema) {
    this.temas=[];
    if (sessionStorage.getItem("temas") != null) {
      this.temas = JSON.parse(sessionStorage.getItem("temas"));
    }
    this.temas.push(tema);
    sessionStorage.setItem("temas",JSON.stringify(this.temas));
    console.log("hola");
    
  }

  getTemas():Tema[]{
    return JSON.parse(sessionStorage.getItem("temas"));
  }


  get(id: number): Observable<Tema> {
    const url = `${this.baseUrl + 'api/Tema'}/${id}`;
    return this.http.get<Tema>(url).pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Tema>('Cuenta Service', null))
    );
  }
  
}
