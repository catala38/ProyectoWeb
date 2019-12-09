import { ActivatedRoute } from '@angular/router';
import { DocenteService } from 'src/app/services/docente.service'
import { Docente } from 'src/app/models/docente';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';
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
  administrador:Administrador;
  stask: string;
  registerForm: FormGroup;
  logear:Login;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private docenteService: DocenteService,
    private administradorService: AdministradorService,
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
      contra: [this.logear.contra,Validators.required],
      rol: [this.logear.rol,Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.verify();
    this._router.navigate(['/']);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  get():void {
    this.get1();
    this.get2();
  }

  get1(): void {
    this.docenteService.get(this.logear.usuario)
      .subscribe(hero => this.docente = hero);
  }

  get2(): void {
    this.administradorService.get(this.logear.usuario)
      .subscribe(hero => this.administrador = hero);
  }

  verify(){
     var rol = "Administrador";
     var rolDoc = "Docente";

     if (rolDoc == this.logear.rol){
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
     }else{
       if(rol == this.logear.rol){
        if (this.administrador.usuario == this.logear.usuario && this.administrador.password == this.logear.contra){
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = ('Bienvenido: '+this.administrador.usuario+'- Su cargo en el sistema es: '+this.administrador.rol);
          this.login()
        }else{
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Verifique los datos de su cuenta :-)';
        }
       }
     }
      /*if (this.docente.identificacion == this.logear.usuario && this.docente.password == this.logear.contra){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = ('Bienvenido: '+this.docente.primerNombre+'- Su cargo en el sistema es: '+this.docente.rol);
        this.login()
      }else{
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Verifique los datos de su cuenta :-)';
      }*/
    /*  if (this.administrador.usuario == this.logear.usuario && this.administrador.password == this.logear.contra){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = ('Bienvenido: '+this.logear.usuario);    
        this.login()
      }else{
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Verifique los datos de su cuenta :-)';
      }*/
     

  }

  login()
  {
    var rol = "Administrador";
     var rolDoc = "Docente";
    //this.authService.login(this.administrador.usuario,"Admin","Admin",this.administrador.rol);
    //this.authService.login(this.docente.identificacion,this.docente.primerNombre,this.docente.primerApellido, this.docente.rol);

    if(rol== this.logear.rol){
      this.authService.login(this.administrador.usuario,"Admin","Admin",this.administrador.rol);
    }else if(rolDoc== this.logear.rol){
      this.authService.login(this.docente.identificacion,this.docente.primerNombre,this.docente.primerApellido, this.docente.rol);  
    }
    
    
  }




}
