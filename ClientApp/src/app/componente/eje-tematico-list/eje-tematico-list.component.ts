import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/models/programa';
import { ProgramaService } from 'src/app/services/programa.service';
import { EjeTematicoService } from 'src/app/services/eje-tematico.service';
import { EjeTematico } from 'src/app/models/eje-tematico';
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import * as $ from 'jquery';
import { Action } from 'rxjs/internal/scheduler/Action';


@Component({
  selector: 'app-eje-tematico-list',
  templateUrl: './eje-tematico-list.component.html',
  styleUrls: ['./eje-tematico-list.component.css']
})
export class EjeTematicoListComponent implements OnInit {
asignatura:Asignatura;
  asignaturas:Asignatura[];
  programas:Programa[];
  ejeTematicos:EjeTematico[];

  constructor(private asignaturaService:AsignaturaService, 
    private programaService:ProgramaService,
    private ejeTematicoService:EjeTematicoService) { }

  ngOnInit() {
    this.getAsignaturas();

    $(document).ready(function () {
      $('#Cerrar').on('click', function () {
          $('#sidebar').toggleClass('active');
          window.print();
      });
   });

    }

  
  getEjesByAsignatura() {
    var asig = ((document.getElementById("referencia") as HTMLInputElement).value);
    this.ejeTematicoService.getEjesByAsignaturas(asig).subscribe(ejeTematicos => this.ejeTematicos = ejeTematicos);
  }

  getAsignaturas(){

    this.asignaturaService.getAll().subscribe(asignaturas => this.asignaturas = asignaturas);

  }

  getAsignatura()
{
  var asig = ((document.getElementById("referencia") as HTMLInputElement).value);
  this.asignaturaService.get(asig).subscribe(hero => this.asignatura = hero);
  this.getEjesByAsignatura()
  
}

}
