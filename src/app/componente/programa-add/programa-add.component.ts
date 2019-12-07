import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/models/programa';
import { ProgramaService } from 'src/app/services/programa.service';
import { Facultad } from 'src/app/models/facultad';
import { FacultadService } from 'src/app/services/facultad.service';
import { isUndefined } from 'util';


@Component({
  selector: 'app-programa-add',
  templateUrl: './programa-add.component.html',
  styleUrls: ['./programa-add.component.css']
})

export class ProgramaAddComponent implements OnInit {

  programa: Programa;
  facultad: Facultad;
  facultades: Facultad[];
  haveFacultad: boolean;

  constructor(private programaService: ProgramaService, private facultadService: FacultadService) { }

  ngOnInit() {
    this.facultad = { facultadId: 0, nombre: '' }
    this.programa = { programaId: 0, nombrePro: '', duracionSementral: 0, horario: '', metodologia: '', facultad: this.facultad }
    this.getFacultades();
    this.haveFacultad = false;
  }

  getFacultades() {
    this.facultadService.getAll().subscribe(facultades => this.facultades = facultades);
  }


  mostrar() {
    var num1 = ((document.getElementById("referencia") as HTMLInputElement).value);
    if (num1 != "Seleccione...") {
      this.facultadService.get(parseInt(num1))
        .subscribe(facultad => {
          this.facultad = facultad
          this.haveFacultad = true;
        });
    }
  }


  add() {
    this.programa.facultad = this.facultad;
    console.log(this.programa);
    this.programaService.getProgramaByNombre(this.programa.nombrePro.toUpperCase()).subscribe(rest => {
      if (isUndefined(rest)) {
        console.log(rest);
        if (this.haveFacultad) {
          this.programaService.
            addCliente(this.programa).subscribe();
        }
      } else {
        alert('ya existe la facultad');
      }
    })
  }
}
