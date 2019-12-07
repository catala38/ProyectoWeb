import { Component, OnInit } from '@angular/core';
import { Facultad } from 'src/app/models/facultad';
import { FacultadService } from 'src/app/services/facultad.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isUndefined } from 'util';

@Component({
  selector: 'app-facultad-add',
  templateUrl: './facultad-add.component.html',
  styleUrls: ['./facultad-add.component.css']
})

export class FacultadAddComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  facultad: Facultad;
  constructor(private facultadService: FacultadService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]]
    });
    this.facultad = new Facultad();
  }

  add() {
      this.facultadService.getFacultadByNombre(this.facultad.nombre.toUpperCase()).subscribe(rest => {
        if (isUndefined(rest)) {
          console.log(rest);

          this.facultadService.addCliente(this.facultad).subscribe();

        } else {

          alert('ya existe la facultad');
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
