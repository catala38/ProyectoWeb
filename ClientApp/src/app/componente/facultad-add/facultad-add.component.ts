import { Component, OnInit } from '@angular/core';
import { Facultad } from 'src/app/models/facultad';
import { FacultadService } from 'src/app/services/facultad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isUndefined } from 'util';
import { AlertModalComponent } from 'src/app/componente/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-facultad-add',
  templateUrl: './facultad-add.component.html',
  styleUrls: ['./facultad-add.component.css']
})

export class FacultadAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  facultad: Facultad;
  constructor(private facultadService: FacultadService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]]
    });
    this.facultad = new Facultad();
  }

  add() {
    this.facultadService.getFacultadByNombre(this.facultad.nombre.toUpperCase()).subscribe(rest => {
      if (isUndefined(rest)) {
        this.facultadService.addCliente(this.facultad).subscribe();
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Facultad guardada con exito';
      } else {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Ya existe una Facultad con ese nombre';
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
