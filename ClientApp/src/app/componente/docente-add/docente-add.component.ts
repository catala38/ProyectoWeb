import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/models/programa';
import { ProgramaService } from 'src/app/services/programa.service';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { Facultad } from 'src/app/models/facultad';
import { isUndefined } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-docente-add',
  templateUrl: './docente-add.component.html',
  styleUrls: ['./docente-add.component.css']
})
export class DocenteAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  docente: Docente;
  programa: Programa;
  programas: Programa[];
  facultad: Facultad;
  havePrograma: boolean;

  constructor(private docenteService: DocenteService, private programaService: ProgramaService, private formBuilder: FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.programa = new Programa();
    this.docente = new Docente();
    this.registerForm = this.formBuilder.group({
      identificacion: [this.docente.identificacion, [Validators.required, Validators.minLength(8)]],
      tipoId:[this.docente.tipoId, Validators.required],
      primerNombre: [this.docente.primerNombre, [Validators.required, Validators.minLength(3)]],
      segundoNombre: [this.docente.segundoNombre ], 
      primerApellido: [this.docente.primerApellido, [Validators.required, Validators.minLength(3)]],
      segundoApellido: [this.docente.segundoApellido, [Validators.required]],
      correo: [this.docente.correo, [Validators.required, Validators.email]],
      telefono: [this.docente.telefono, Validators.required],
      password: [this.docente.password = "123"],
      rol:[this.docente.rol="Docente"],
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
      this.programaService.get(num1)
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
        const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Docente guardado con exito';
        } else {
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'error no se pudo guardar el docente';
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