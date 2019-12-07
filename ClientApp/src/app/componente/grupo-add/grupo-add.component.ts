import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { ProgramaService } from 'src/app/services/programa.service';
import { Programa } from 'src/app/models/programa';
import { Asignatura } from 'src/app/models/asignatura';
import { DocenteService } from 'src/app/services/docente.service';
import { Docente } from 'src/app/models/docente';
import { Grupo } from 'src/app/models/grupo';
import { GrupoService } from 'src/app/services/grupo.service';
import { Facultad } from 'src/app/models/facultad';
import { CargaAcademica } from 'src/app/models/carga-academica';
import { CargaAcademicaService } from 'src/app/services/carga-academica.service';

@Component({
  selector: 'app-grupo-add',
  templateUrl: './grupo-add.component.html',
  styleUrls: ['./grupo-add.component.css']
})
export class GrupoAddComponent implements OnInit {

  asignaturas:Asignatura[];
  asignatura:Asignatura;
  docente:Docente;
  docentes:Docente[];
  programa:Programa;
  programas:Programa[];
  grupo:Grupo;
  grupos:Grupo[];
  facultad:Facultad;
  cargaAcademica:CargaAcademica;
cargas:CargaAcademica[];

  constructor(private asignaturaService:AsignaturaService,
    private programaService:ProgramaService,
    private docenteService:DocenteService,
    private grupoService:GrupoService,
    private cargaAcademicaService:CargaAcademicaService) { }

  
  ngOnInit() {
    this.getProgramas();
    this.cargaAcademica=new CargaAcademica();
    this.asignatura=new Asignatura();
    this.docente=new Docente();
    this.grupo={grupoId:0,asignatura:this.asignatura,docente:this.docente,numero:0};
    this.grupos=[];
  }


  getProgramas() {
    this.programaService.getAll().subscribe(programas => this.programas = programas);
  }

  mostrar1(){
    var num1 = ((document.getElementById("referenciaP") as HTMLInputElement).value);
    this.asignaturaService.getAsignaturasByProgramas(parseInt(num1)).subscribe(asignaturas => this.asignaturas = asignaturas);
    this.docenteService.getDocentesByProgramas(parseInt(num1)).subscribe(docentes => this.docentes = docentes);

  }


  mostrarAsignatura() {
    var asig = ((document.getElementById("referenciaA") as HTMLInputElement).value);
    if (asig != "Seleccione...") {
      this.asignaturaService.get(asig)
        .subscribe(asignatura => {
          this.asignatura = asignatura
    
        });
    }
  }

  
  mostrarDocente() {
    var doc = ((document.getElementById("referenciaD") as HTMLInputElement).value);
    if (doc != "Seleccione...") {
      this.docenteService.get(doc)
        .subscribe(docente => {
          this.docente = docente
    
        });
    }
  }


 /* getGrupos(){
    this.grupos=this.grupoService.getGrupos();
  }*/

  
  /*getCargas() {
    this.cargaAcademicaService.getAll().subscribe(cargas => this.cargas = cargas);
  }*/
  

  addGrupo(){
  var contador=0;
  
    var asig = ((document.getElementById("referenciaA") as HTMLInputElement).value);
    console.log(asig);
  this.grupoService.getGrupoByAsignatura(asig).subscribe(rest=>{
    this.grupos=rest;
    this.grupos.forEach(element => {
      contador++;
    });
    console.log(this.grupos);
    this.grupo.asignatura=this.asignatura;
    this.grupo.numero=contador+1;
    this.grupo.docente=this.docente;
     this.grupo.grupoId=0; 
       this.grupoService.addGrupoService(this.grupo).subscribe();
   });
  
     
  
  }

 
/*
  getCargas(){
    this.cargaAcademicaService.getAll().subscribe(cargas => this.cargas = cargas);
  }*/
  



}

