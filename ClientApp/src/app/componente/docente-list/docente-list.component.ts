import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { ProgramaService } from 'src/app/services/programa.service';
import { Programa } from 'src/app/models/programa';

@Component({
  selector: 'app-docente-list',
  templateUrl: './docente-list.component.html',
  styleUrls: ['./docente-list.component.css']
})
export class DocenteListComponent implements OnInit {

  docentes :Docente[];
  havePrograma: boolean;
  programas: Programa[];
  programa: Programa;


  constructor(private docenteService: DocenteService,private programaService: ProgramaService) { }

  ngOnInit() {
    this.getProgramas(),
    this.getAll();
  }

  getAll() {
    this.docenteService.getAll().subscribe(docentes => this.docentes = docentes);
    console.log(JSON.stringify(this.docentes));
  }

  getProgramas() {
    this.programaService.getAll().subscribe(programas => this.programas = programas);
  }

  mostrar() {
    var num1 = ((document.getElementById("referencia") as HTMLInputElement).value);
    this.docenteService.getDocentesByProgramas(num1).subscribe(docentes => this.docentes = docentes);

  }

}