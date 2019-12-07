import { Component, OnInit } from '@angular/core';
import { GrupoService } from 'src/app/services/grupo.service';
import { CargaAcademicaService } from 'src/app/services/carga-academica.service';
import { Grupo } from 'src/app/models/grupo';
import { CargaAcademica } from 'src/app/models/carga-academica';

@Component({
  selector: 'app-grupo-list',
  templateUrl: './grupo-list.component.html',
  styleUrls: ['./grupo-list.component.css']
})
export class GrupoListComponent implements OnInit {

  grupo:Grupo;
  grupos:Grupo[];
  cargaAcademica:CargaAcademica;
cargas:CargaAcademica[];

  constructor(
    private grupoService:GrupoService,
    private cargaAcademicaService:CargaAcademicaService) { }

  
  ngOnInit() {
    this.getCargas();
    //this.getGrupos();
  }


  
  
  /*getGrupos(){
    this.grupoService.getAll().subscribe(grupos => this.grupos = grupos);
  }*/

  getCargas(){
    this.cargaAcademicaService.getAll().subscribe(cargas => this.cargas = cargas);
  }
  


}
