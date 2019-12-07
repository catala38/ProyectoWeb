import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Router } from '@angular/router';
import { Programa } from 'src/app/models/programa';
import { ProgramaService } from 'src/app/services/programa.service';
import { EjeTematicoService } from 'src/app/services/eje-tematico.service';
import { EjeTematico } from 'src/app/models/eje-tematico';


@Component({
  selector: 'app-plan-asignatura',
  templateUrl: './plan-asignatura.component.html',
  styleUrls: ['./plan-asignatura.component.css']
})
export class PlanAsignaturaComponent implements OnInit {

  asignaturas:Asignatura[];
  programas:Programa[];
  ejeTematicos:EjeTematico[];
  constructor(private asignaturaService:AsignaturaService, 
    private router:Router,
    private programaService:ProgramaService,
    private ejeTematicoService:EjeTematicoService) { }

  ngOnInit() {
    //this.getAll();
    this.getProgramas() 
    this.getEjes();
  }

  /*getAll(){
    this.asignaturaService.getAll().subscribe(asignaturas => this.asignaturas = asignaturas);

  }*/

  abrirEje(){
  var num1 = ((document.getElementById("referencia") as HTMLInputElement).value);
  this.router.navigate([`ejeTematico-add/${num1}`])

  }

  getProgramas() {
    this.programaService.getAll().subscribe(programas => this.programas = programas);
  }

  
  mostrar1(){
    var num1 = ((document.getElementById("referencia1") as HTMLInputElement).value);
    this.asignaturaService.getAsignaturasByProgramas(parseInt(num1)).subscribe(asignaturas => this.asignaturas = asignaturas);
  }

  getEjes() {
    this.ejeTematicoService.getAll().subscribe(ejeTematicos => this.ejeTematicos = ejeTematicos);
  }

}
