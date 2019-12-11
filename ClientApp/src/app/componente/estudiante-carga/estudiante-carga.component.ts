import { Component, OnInit } from '@angular/core';
import { GrupoService } from 'src/app/services/grupo.service';
import { CargaAcademicaService } from 'src/app/services/carga-academica.service';
import { Grupo } from 'src/app/models/grupo';
import { CargaAcademica } from 'src/app/models/carga-academica';

@Component({
  selector: 'app-estudiante-carga',
  templateUrl: './estudiante-carga.component.html',
  styleUrls: ['./estudiante-carga.component.css']
})
export class EstudianteCargaComponent implements OnInit {
  grupo: Grupo;
  grupos: Grupo[];
  

  constructor(
    private grupoService: GrupoService) { }


  ngOnInit() {
    this.getAsignaturas();

  }

  getAsignaturas() {
    var identificacion = sessionStorage.getItem('user');
    this.grupoService.getGrupoByDocente(identificacion).subscribe(grupos => this.grupos = grupos);
  }

}