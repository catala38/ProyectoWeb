import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { Grupo } from 'src/app/models/grupo';
import { GrupoService } from 'src/app/services/grupo.service';
import { ItemPlanDesarrollo } from 'src/app/models/item-plan-desarrollo';
import { EjeTematico } from 'src/app/models/eje-tematico';
import { EjeTematicoService } from 'src/app/services/eje-tematico.service';
import { Asignatura } from 'src/app/models/asignatura';
import { TemaService } from 'src/app/services/tema.service';
import { Tema } from 'src/app/models/tema';
import { PlanDesarrolloService } from 'src/app/services/plan-desarrollo.service';
import { TemaIP } from 'src/app/models/tema-ip';


@Component({
  selector: 'app-plan-desarrollo-add',
  templateUrl: './plan-desarrollo-add.component.html',
  styleUrls: ['./plan-desarrollo-add.component.css']
})
export class PlanDesarrolloAddComponent implements OnInit {
  docente: Docente;
  id: string;
  temaIP: TemaIP;
  grupo: Grupo;
  grupos: Grupo[];
  planDesarrollo: ItemPlanDesarrollo;
  ejes: EjeTematico[];
  temas: Tema[];
  eje: EjeTematico;
  asignatura: Asignatura;
  tema: Tema;

  constructor(private docenteService: DocenteService, private planDesarrolloService: PlanDesarrolloService, private temaService: TemaService, private grupoService: GrupoService, private ejeService: EjeTematicoService) { }
  ngOnInit() {
    this.grupos = [];
    this.planDesarrollo = new ItemPlanDesarrollo();
    this.planDesarrollo.temasIP = [];
    this.ejes = [];

    this.id = sessionStorage.getItem('user');
    this.getCurrentDocente();
    this.getGrupos();
  }
  getEjes() {
    this.asignatura = this.grupo.asignatura;
    console.log(this.asignatura);
    this.ejeService.getEjesByAsignaturas(this.asignatura.asignaturaId).subscribe(ejes => {
      this.ejes = ejes;


    });


  }
  mostrar2() {
    var num1 = ((document.getElementById("referencia2") as HTMLInputElement).value);
    if (num1 != "Seleccione...") {
      this.ejeService.get(parseInt(num1))
        .subscribe(eje => {
          this.eje = eje;
          this.temas = eje.temas;
          console.log(this.temas);
        });
    }
  }
  mostrar3() {
    var num1 = ((document.getElementById("referencia3") as HTMLInputElement).value);
    console.log(num1);
    if (num1 != "Seleccione...") {
      this.temaService.get(parseInt(num1))
        .subscribe(tema => {
          this.tema = tema;
          console.log(tema);
        });
    }

  }
  addTema() {
    this.temaIP = new TemaIP();
    this.temaIP.temaIPId = 0;
    this.temaIP.nombre = this.tema.nombre;
    this.planDesarrollo.temasIP.push(this.temaIP);
    alert("tema agregado");
  }
  mostrar() {
    var num1 = ((document.getElementById("referencia") as HTMLInputElement).value);
    if (num1 != "Seleccione...") {
      this.grupoService.get(parseInt(num1))
        .subscribe(grupo => {
          this.grupo = grupo
          this.getEjes();
        });
    }
  }
  addItemPlan() {
    this.planDesarrollo.grupo = this.grupo;
    this.planDesarrollo.ejeTematico = this.eje;
    this.planDesarrollo.fechaFin = (document.getElementById("finalDate") as HTMLInputElement).value;
    this.planDesarrollo.fechaInicio = (document.getElementById("initialDate") as HTMLInputElement).value;
    console.log(this.planDesarrollo);
    this.planDesarrolloService.addItemPlanDesarrollo(this.planDesarrollo).subscribe();
    alert("Asignatura parcelada");
  }
  getCurrentDocente() {
    this.docenteService.get(this.id).subscribe(rest => {
      this.docente = rest;
    });
  }
  getGrupos() {
    this.grupoService.getGrupoByDocente(this.id).subscribe(rest => {
      this.grupos = rest;

    })
  }



}
