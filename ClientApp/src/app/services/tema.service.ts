import { Injectable } from '@angular/core';
import { Tema } from '../models/tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  temas: Tema[];
  constructor() { }

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


  
}
