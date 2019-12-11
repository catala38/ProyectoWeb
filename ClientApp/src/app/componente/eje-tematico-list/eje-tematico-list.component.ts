import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/models/programa';
import { ProgramaService } from 'src/app/services/programa.service';
import { EjeTematicoService } from 'src/app/services/eje-tematico.service';
import { EjeTematico } from 'src/app/models/eje-tematico';
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-eje-tematico-list',
  templateUrl: './eje-tematico-list.component.html',
  styleUrls: ['./eje-tematico-list.component.css']
})
export class EjeTematicoListComponent implements OnInit {

  asignaturas:Asignatura[];
  programas:Programa[];
  ejeTematicos:EjeTematico[];

  constructor(private asignaturaService:AsignaturaService, 
    private programaService:ProgramaService,
    private ejeTematicoService:EjeTematicoService) { }

  ngOnInit() {
    this.getEjes();
  }

  
  getEjes() {
    this.ejeTematicoService.getAll().subscribe(ejeTematicos => this.ejeTematicos = ejeTematicos);
  }
  
}
