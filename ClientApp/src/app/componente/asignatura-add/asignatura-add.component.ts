import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/models/programa';
import { ProgramaService } from 'src/app/services/programa.service';
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Facultad } from 'src/app/models/facultad';
import { FacultadService } from 'src/app/services/facultad.service';
import { isUndefined } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-asignatura-add',
  templateUrl: './asignatura-add.component.html',
  styleUrls: ['./asignatura-add.component.css']
})
export class AsignaturaAddComponent implements OnInit {
  
  registerForm: FormGroup;
  submitted = false;
  asignatura: Asignatura;
  asignaturas:Asignatura [];
  programa: Programa;
  programas: Programa[];
  havePrograma: boolean;

  constructor(private asignaturaService: AsignaturaService, 
    private programaService: ProgramaService, 
    private facultadService: FacultadService, 
    private formBuilder: FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.programa = new Programa();
    this.asignatura = new Asignatura();
    this.registerForm = this.formBuilder.group({
      AsignaturaId: ['', [Validators.required, Validators.minLength(3)]],
      Nombre: ['', [Validators.required, Validators.minLength(3)]],
      Ncreditos: ['', Validators.required],
      PreRequisitos: [this.asignatura.PreRequisitos],
      CoRequisitos: [this.asignatura.CoRequisitos],
      Tipo: ['', Validators.required],
      NatAsignatura1: ['', Validators.required],
      NatAsignatura2: ['', Validators.required],
      programa: this.programa
    });
   
    this.getProgramas();
    this.havePrograma = false;
  }

  getProgramas() {
    this.programaService.getAll().subscribe(programas => this.programas = programas);
  }


  mostrar() {

    var num1 = ((document.getElementById("referencia") as HTMLInputElement).value);
    this.asignaturaService.getAsignaturasByProgramas(parseInt(num1)).subscribe(asignaturas => this.asignaturas = asignaturas);

    if (num1 != "Seleccione...") {
      this.programaService.get(parseInt(num1))
        .subscribe(programa => {
          this.programa = programa
          this.havePrograma = true;
        });
    }

  }

  add() {
    this.asignatura.programa = this.programa;
    if (this.havePrograma) {
      this.asignaturaService.addCliente(this.asignatura).subscribe(rest => {

        if (rest!=null) {
          this.asignaturaService.addCliente(this.asignatura).subscribe();
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Asignatura guardada con exito';
        } else {
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'no se pudo guardar esa asignatura';
        }
      });
    }
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.add();

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
