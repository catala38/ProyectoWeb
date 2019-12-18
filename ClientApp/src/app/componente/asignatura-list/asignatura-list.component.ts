import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { ProgramaService } from 'src/app/services/programa.service';
import { Programa } from 'src/app/models/programa';


@Component({
  selector: 'app-asignatura-list',
  templateUrl: './asignatura-list.component.html',
  styleUrls: ['./asignatura-list.component.css']
})
export class AsignaturaListComponent implements OnInit {

  asignaturas :Asignatura[];
  havePrograma: boolean;
  programas: Programa[];
  programa: Programa;
  searchText: string;


  @Output() seleccionado = new EventEmitter<Asignatura>();

  constructor(private asignaturaService: AsignaturaService,
    private programaService: ProgramaService) { }

  ngOnInit() {
    this.getProgramas(),
    this.asignaturaService.getAll().subscribe(result => {
      this.asignaturas = result;
    });
    this.searchText = '';

  }


  seleccionar(asignatura: Asignatura) {
    this.seleccionado.emit(asignatura);
  }


  /*getAll() {
    this.asignaturaService.getAll().subscribe(asignaturas => this.asignaturas = asignaturas);
    console.log(JSON.stringify(this.asignaturas));
  }*/

  getProgramas() {
    this.programaService.getAll().subscribe(programas => this.programas = programas);
  }

  mostrar1() {
    var num1 = ((document.getElementById("referencia") as HTMLInputElement).value);
    if (num1=="Todos..."){
      this.asignaturaService.getAll().subscribe(result => {
        this.asignaturas = result;
      });
    }else{
      this.asignaturaService.getAsignaturasByProgramas(num1).subscribe(asignaturas => this.asignaturas = asignaturas);
    }
   
    
  }

  
  /*
  mostrar() {
    var num1 = ((document.getElementById("referencia") as HTMLInputElement).value);
    if (num1 != "Seleccione...") {
      this.programaService.get(parseInt(num1))
        .subscribe(programa => {
          this.programa = programa
          this.havePrograma = true;
        });
    }
  }*/


}