import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/models/programa';
import { ProgramaService } from 'src/app/services/programa.service';
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Facultad } from 'src/app/models/facultad';
import { FacultadService } from 'src/app/services/facultad.service';
import { isUndefined } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-asignatura-add',
  templateUrl: './asignatura-add.component.html',
  styleUrls: ['./asignatura-add.component.css']
})
export class AsignaturaAddComponent implements OnInit {
  
  registerForm: FormGroup;
  submitted = false;
  asignatura: Asignatura;
  programa: Programa;
  programas: Programa[];
  havePrograma: boolean;

  constructor(private asignaturaService: AsignaturaService, private programaService: ProgramaService, private facultadService: FacultadService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.programa = new Programa();
    this.asignatura = new Asignatura();
    this.registerForm = this.formBuilder.group({
      AsignaturaId: ['', [Validators.required, Validators.minLength(3)]],
      Nombre: ['', [Validators.required, Validators.minLength(3)]],
      Ncreditos: ['', Validators.required],
      PreRequisitos: ['', Validators.required],
      CoRequisitos: ['', Validators.required],
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
    console.log(this.asignatura);
    if (this.havePrograma) {
      this.asignaturaService.addCliente(this.asignatura).subscribe();
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
