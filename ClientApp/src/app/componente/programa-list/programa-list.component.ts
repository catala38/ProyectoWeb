import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProgramaService } from 'src/app/services/programa.service';
import { Programa } from 'src/app/models/programa';
import { Facultad } from 'src/app/models/facultad';
import { FacultadService } from 'src/app/services/facultad.service';


@Component({
  selector: 'app-programa-list',
  templateUrl: './programa-list.component.html',
  styleUrls: ['./programa-list.component.css']
})

export class ProgramaListComponent implements OnInit {

  programas: Programa[];
  searchText: string;
  facultad: Facultad;
  facultades: Facultad[];
  @Output() seleccionado = new EventEmitter<Programa>();
  

  constructor(private programaService: ProgramaService,private facultadService: FacultadService) { }
  
  ngOnInit() {
    this.getFacultades();
    this.programaService.getAll().subscribe(result =>{
      this.programas = result;
      //this.searchText = ((document.getElementById("referencia") as HTMLInputElement).value);
      this.searchText = '';
    });
    
  }

  seleccionar(programa: Programa) {
    this.seleccionado.emit(programa);
  }

  getFacultades() {
    this.facultadService.getAll().subscribe(facultades => this.facultades = facultades);
  }

 

}

 

 

