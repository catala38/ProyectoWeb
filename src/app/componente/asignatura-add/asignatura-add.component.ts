import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/models/programa';
import { ProgramaService } from 'src/app/services/programa.service';
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Facultad } from 'src/app/models/facultad';
import {FacultadService} from 'src/app/services/facultad.service';



@Component({
  selector: 'app-asignatura-add',
  templateUrl: './asignatura-add.component.html',
  styleUrls: ['./asignatura-add.component.css']
})
export class AsignaturaAddComponent implements OnInit {

  asignatura: Asignatura;
  programa: Programa;
  programas: Programa[];
  facultad: Facultad;
  facultades : Facultad[];
  havePrograma: boolean;

  constructor(private asignaturaService: AsignaturaService, private programaService: ProgramaService,private facultadService : FacultadService) { }

  ngOnInit() {
    
    this.programa = { programaId: 0, nombrePro: '', duracionSementral: 0, horario: '', metodologia: '', facultad: this.facultad }
    this.asignatura = { AsignaturaId: '', Nombre: '', Ncreditos: '', PreRequisitos: '', CoRequisitos: '', Tipo: '', NatAsignatura1: '',NatAsignatura2: '', programa: this.programa }
    this.getFacultades();
    this.getProgramas();
    this.havePrograma = false;
    

  }

  /*getProgramas() {
    this.programaService.getAll().subscribe(programas => this.programas = programas);
  }*/

  getFacultades() {
    this.facultadService.getAll().subscribe(facultades => this.facultades = facultades);
  }


  mostrar() {
   
    var num1 = ((document.getElementById("referencia") as HTMLInputElement).value);
    if (num1 != "Seleccione...") {
      this.programaService.get(parseInt(num1))
        .subscribe(programa => {
          this.programa = programa
          this.havePrograma = true;
        });
    }

    
  }

  mostrar1() {
    var num1 = ((document.getElementById("referencia1") as HTMLInputElement).value);
    if (num1 != "Seleccione...") {
      this.facultadService.get(parseInt(num1))
        .subscribe(facultad => {
          this.facultad = facultad
          
        });
    }

}


getProgramas() {
    var num1 = this.facultad.facultadId;
    this.programaService.getFac(num1).subscribe(programas => this.programas = programas);

}
 
  add() {
    this.asignatura.programa = this.programa;
    console.log(this.asignatura);
    if (this.havePrograma) {
      this.asignaturaService.
        addCliente(this.asignatura).subscribe();
    }


  }

}
