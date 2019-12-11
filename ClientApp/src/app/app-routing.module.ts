import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultadAddComponent } from './componente/facultad-add/facultad-add.component';
import { FacultadListComponent } from './componente/facultad-list/facultad-list.component';
import { FacultadEditComponent } from './componente/facultad-edit/facultad-edit.component';
import { ProgramaAddComponent } from './componente/programa-add/programa-add.component';
import {ProgramaListComponent} from './componente/programa-list/programa-list.component';
import {ProgramaEditComponent} from './componente/programa-edit/programa-edit.component';

import { Routes, RouterModule } from '@angular/router';
import { AsignaturaAddComponent } from './componente/asignatura-add/asignatura-add.component';
import { AsignaturaListComponent } from './componente/asignatura-list/asignatura-list.component';
import { AsignaturaEditComponent } from './componente/asignatura-edit/asignatura-edit.component';
import { DocenteAddComponent } from './componente/docente-add/docente-add.component';
import { DocenteListComponent } from './componente/docente-list/docente-list.component';
import { DocenteEditComponent } from './componente/docente-edit/docente-edit.component';
import {EjeTematicoAddComponent} from './componente/eje-tematico-add/eje-tematico-add.component';
import { PlanAsignaturaComponent } from './componente/plan-asignatura/plan-asignatura.component';
import { GrupoAddComponent } from './componente/grupo-add/grupo-add.component';
import { GrupoListComponent } from './componente/grupo-list/grupo-list.component';
import { EjeTematicoListComponent } from './componente/eje-tematico-list/eje-tematico-list.component';
import { EstudianteAddComponent } from './componente/estudiante-add/estudiante-add.component';
import { EstudianteCargaComponent } from './componente/estudiante-carga/estudiante-carga.component';
import {AuthGuard} from './auth/auth.guard';
import {LoginComponent} from './componentes/login/login.component';
import { Login } from './models/login';
import { EstudianteListComponent } from './componente/estudiante-list/estudiante-list.component';


 

const routes: Routes = [
  {path:'',redirectTo:'/logear',pathMatch:'full'},
  {
    path:'logear',
    component:LoginComponent
  },
  {
    path:'facultad-add',
    component:FacultadAddComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path:'login',
    component:LoginComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  {
    path:'facultad-lis',
    component:FacultadListComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'facultad-edit/:id',
    component:FacultadEditComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'programa-add',
    component:ProgramaAddComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'programa-lis',
    component:ProgramaListComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'programa-edit/:id',
    component:ProgramaEditComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'asignatura-add',
    component:AsignaturaAddComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'asignatura-lis',
    component:AsignaturaListComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'asignatura-edit/:id',
    component:AsignaturaEditComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'docente-add',
    component:DocenteAddComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'docente-lis',
    component:DocenteListComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'docente-edit/:id',
    component:DocenteEditComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'ejeTematico-add/:idAsignatura',
    component:EjeTematicoAddComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },
  
  {
    path:'ejeTematico-lis',
    component:EjeTematicoListComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'planAsignatura-add',
    component:PlanAsignaturaComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'grupo-add',
    component:GrupoAddComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'grupo-lis',
    component:GrupoListComponent,canActivate:[AuthGuard],data: { role: 'Administrador' }
  },

  {
    path:'estudiante-add/:grupoId',
    component:EstudianteAddComponent,canActivate:[AuthGuard],data: { role: 'Docente' }
  },

  {
    path:'estudiante-carga',
    component:EstudianteCargaComponent,canActivate:[AuthGuard],data: { role: 'Docente' }
  },

  {
    path:'estudiante-lis',
    component:EstudianteListComponent,canActivate:[AuthGuard],data: { role: 'Docente' }
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
