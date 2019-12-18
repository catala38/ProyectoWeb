import { Component, OnInit } from '@angular/core';
import { ItemPlanDesarrollo } from 'src/app/models/item-plan-desarrollo';
import { PlanDesarrolloService } from 'src/app/services/plan-desarrollo.service';
import { Grupo } from 'src/app/models/grupo';
import { GrupoService } from 'src/app/services/grupo.service';
import { DocenteService } from 'src/app/services/docente.service';
import { Docente } from 'src/app/models/docente';
import { Asignatura } from 'src/app/models/asignatura';
import * as $ from 'jquery';

@Component({
  selector: 'app-plan-desarrollo-list',
  templateUrl: './plan-desarrollo-list.component.html',
  styleUrls: ['./plan-desarrollo-list.component.css']
})
export class PlanDesarrolloListComponent implements OnInit {
  id: string;
  grupo: Grupo;
  grupos: Grupo[];
  planes:ItemPlanDesarrollo[];
  docente:Docente;
  asignatura:Asignatura;

  constructor(private planDesarrolloService:PlanDesarrolloService, private grupoService:GrupoService,
    private docenteService:DocenteService) { }

  ngOnInit() {
    this.id = sessionStorage.getItem('user');
    this.getGrupos();

    
    $(document).ready(function () {
      $('#Cerrar').on('click', function () {
          $('#sidebar').toggleClass('active');
          window.print();
      });
   });


  }

  getGrupos() {
    this.grupoService.getGrupoByDocente(this.id).subscribe(rest => {
      this.grupos = rest;

    })
  }
  getPlan(){
    var num1 = ((document.getElementById("referencia") as HTMLInputElement).value);
      this.planDesarrolloService.getPlanesByGrupo(parseInt(num1)).subscribe(planes => this.planes = planes);
      this.grupoService.get(parseInt(num1)).subscribe(hero => this.grupo = hero);
      this.getDocente();
  }

  getDocente(){
    this.docenteService.get(this.id).subscribe(hero => this.docente = hero);

  }

  

}
