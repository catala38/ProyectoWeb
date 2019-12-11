import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/models/estudiante';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { GrupoService } from 'src/app/services/grupo.service';
import { Asignatura } from 'src/app/models/asignatura';
import { Grupo } from 'src/app/models/grupo';

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class EstudianteListComponent implements OnInit {
estudiantes:Estudiante[];
asignaturas:Asignatura[];
grupos:Grupo[];
  constructor(private estudianteService:EstudianteService,
    private asignaturaService:AsignaturaService,
    private grupoService:GrupoService) { }

  ngOnInit() {
    this.getAsignaturas();
  }



  getAll() {
    this.estudianteService.getAll().subscribe(estudiantes => this.estudiantes = estudiantes);
  }

  getAsignaturas() {
    var identificacion = sessionStorage.getItem('user');
    this.grupoService.getGrupoByDocente(identificacion).subscribe(grupos => this.grupos = grupos);
  }
  
  getEstudiantes(){
    var id = ((document.getElementById("referencia1") as HTMLInputElement).value);
    this.estudianteService.getEstudianteByGrupo(parseInt(id)).subscribe(estudiantes => this.estudiantes = estudiantes);
  }



}
