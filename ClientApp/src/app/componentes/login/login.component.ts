import { ActivatedRoute } from '@angular/router';
import { DocenteService } from 'src/app/services/docente.service'
import { Docente } from 'src/app/models/docente';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { AlertModalComponent } from 'src/app/componente/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  docente: Docente;
  stask: string;
  registerForm: FormGroup;
  logear:Login;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private docenteService: DocenteService,
    private location: Location,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private modalService: NgbModal,
    private _router: Router
  ) { }

  ngOnInit() {
    this.logear = new Login();
    this.registerForm = this.formBuilder.group({
      usuario: [this.logear.usuario,Validators.required],
      contra: [this.logear.contra,Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    //this.verify();
    this._router.navigate(['/']);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.docenteService.get(this.logear.usuario)
      .subscribe(hero => this.docente = hero);
  }
  verify(){
    if (this.docente.identificacion == this.logear.usuario && this.docente.password == this.logear.contra){
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Resultado Operación";
      messageBox.componentInstance.message = ('Bienvenido: '+this.docente.primerNombre+'- Su cargo en el sistema es: '+this.docente.rol);
      this.login()
    }else{
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Resultado Operación";
      messageBox.componentInstance.message = 'Verifique los datos de su cuenta :-)';
    }
  }

  login()
  {
      this.authService.login(this.docente.identificacion,this.docente.primerNombre,this.docente.primerApellido, this.docente.password, this.docente.rol);
  }



}
