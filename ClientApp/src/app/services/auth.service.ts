
  import { Injectable, Inject } from '@angular/core';
  import { Router } from '@angular/router';
  import { Docente } from 'src/app/models/docente'
  import { Observable } from 'rxjs';
  import { HandleErrorService } from 'src/app/services/handle-error.service';
  import { HttpClient } from '@angular/common/http';
  import { Rol } from 'src/app/models/rol';
  import { tap, catchError } from 'rxjs/operators';



  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    baseUrl: string;
    constructor(private _router: Router,private http: HttpClient,
      @Inject('BASE_URL') baseUrl: string,
      private handleErrorService: HandleErrorService) { 
        this.baseUrl = baseUrl;
      }


    docente : Docente;

    login(user: string,nombre: string,apellido: string, rol:string) {
      sessionStorage.setItem('user', user);
      sessionStorage.setItem('nombre', nombre);
      sessionStorage.setItem('apellido', apellido);
      sessionStorage.setItem('roles', rol);
    }

    logout() {
      sessionStorage.clear();
      //this._router.navigate(['/login']);
    }

    isAuthenticated(): boolean {
      return sessionStorage.getItem('user')!=null;
    }

    hasRole(rol: string): boolean {
      let roles: string[]
      if (!this.isAuthenticated()) return false;
      if(sessionStorage.getItem('roles')=="Administrador"){
        roles =["Administrador"];
        return roles.indexOf(rol) >= 0;
      }else{
        if(sessionStorage.getItem('roles')=="Docente"){
          roles = ["Docente"];
          return roles.indexOf(rol) >= 0;
        }else{
          if(sessionStorage.getItem('roles')=="Estudiante"){
            roles = ["Estudiante"];
            return roles.indexOf(rol) >= 0;
          }else{
            if(sessionStorage.getItem('roles')=="JefePrograma"){
              roles = ["JefePrograma"];
              return roles.indexOf(rol) >=0;
            }
          }
        }
        
      }
      
      
    }

    getUserName(): string {
      return sessionStorage.getItem('user') != null ? sessionStorage.getItem('user'):'Anonimo';
    }

    getName(): string {
      return sessionStorage.getItem('nombre') != null ? sessionStorage.getItem('nombre'):'Anonimo';
    }

    getRolUser(): string {
      return sessionStorage.getItem('roles') != null ? sessionStorage.getItem('roles'):'Anonimo';
    }


  }