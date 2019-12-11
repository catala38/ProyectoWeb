import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GrupoService } from 'src/app/services/grupo.service';
import { Grupo } from 'src/app/models/grupo';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Asignatura } from 'src/app/models/asignatura';
import { isNumber } from 'util';


@Component({
  selector: 'app-estudiante-add',
  templateUrl: './estudiante-add.component.html',
  styleUrls: ['./estudiante-add.component.css']
})
export class EstudianteAddComponent implements OnInit {
  grupo: Grupo;
  estudiantes: Estudiante[];
  estudiante: Estudiante;
  asignatura: Asignatura;

  constructor(private route: ActivatedRoute, private location: Location,
    private grupoService: GrupoService,
    private estudianteService: EstudianteService
  ) { }

  ngOnInit() {
    this.get();
    //this.grupo = new Grupo();
    //this.estudiante = new Estudiante();
    this.getEstudiantesByGrupos();
    this.estudiante = { idEstudiante: 0, identificacion: "", primerNombre: "", segundoNombre: "", primerApellido: "", segundoApellido: "", correo: "", grupo: this.grupo }
  }


  get(): void {
    const id =
      +this.route.snapshot.paramMap.get('grupoId');
    this.grupoService.get(id)
      .subscribe(hero => this.grupo = hero);
  }

  addEstudiante() {
    var contador = 0;
    this.estudiante.grupo = this.grupo;
    var id = +this.route.snapshot.paramMap.get('grupoId');
    this.estudianteService.getEstudianteByGrupo(id).subscribe(rest => {
      this.estudiantes = rest;
      this.estudiantes.forEach(element => {
        contador++;
      });

      if (contador > 24) {
        alert("El grupo excedio el limite de cupos");
      } else {

        this.estudianteService.addEstudiante(this.estudiante).subscribe();
        this.getEstudiantesByGrupos();
      }

    });
  }


  getEstudiantesByGrupos() {
    var id = +this.route.snapshot.paramMap.get('grupoId');
    this.estudianteService.getEstudianteByGrupo(id).subscribe(estudiantes => this.estudiantes = estudiantes);
  }


}