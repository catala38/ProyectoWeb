import { Component, OnInit } from '@angular/core';
import { Programa } from 'src/app/models/programa';
import { ProgramaService } from 'src/app/services/programa.service';
import { Facultad } from 'src/app/models/facultad';
import { FacultadService } from 'src/app/services/facultad.service';
import { isUndefined } from 'util';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalComponent } from 'src/app/componente/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-programa-add',
  templateUrl: './programa-add.component.html',
  styleUrls: ['./programa-add.component.css']
})

export class ProgramaAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  programa: Programa;
  facultad: Facultad;
  facultades: Facultad[];
  haveFacultad: boolean;

  constructor(private programaService: ProgramaService, private facultadService: FacultadService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.facultad = new Facultad();
    this.programa = new Programa();
    this.registerForm = this.formBuilder.group({
      programaId: [0, Validators.required],
      nombrePro: ['', [Validators.required, Validators.minLength(3)]],
      duracionSementral: [0, Validators.required],
      horario: ['', Validators.required],
      metodologia: ['', Validators.required],
      facultad: this.facultad

    });
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
        if (this.haveFacultad) {
          this.programaService.
            addCliente(this.programa).subscribe();
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Programa guardado con exito';
        }
      } else {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Ya existe un programa con ese nombre';
      }
    })

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
