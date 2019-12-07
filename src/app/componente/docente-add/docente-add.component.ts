import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/models/programa';
import { ProgramaService } from 'src/app/services/programa.service';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { Facultad } from 'src/app/models/facultad';

@Component({
  selector: 'app-docente-add',
  templateUrl: './docente-add.component.html',
  styleUrls: ['./docente-add.component.css']
})
export class DocenteAddComponent implements OnInit {

  docente: Docente;
  programa: Programa;
  programas: Programa[];
  facultad: Facultad;
  havePrograma: boolean;

  constructor(private docenteService: DocenteService, private programaService: ProgramaService) { }

  ngOnInit() {
    this.programa = { programaId: 0, nombrePro: '', duracionSementral: 0, horario: '', metodologia: '', facultad: this.facultad }
    this.docente = { identificacion: '', primerNombre: '', segundoNombre: '', primerApellido: '', segundoApellido: '', correo: '', telefono: '', programa: this.programa }
    this.getProgramas();
    this.havePrograma = false;
  }

  getProgramas() {
    this.programaService.getAll().subscribe(programas => this.programas = programas);
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


  add() {
    this.docente.programa = this.programa;
    console.log(this.docente);
    if (this.havePrograma) {
      this.docenteService.
        addDocente(this.docente).subscribe();
    }

 }
}
