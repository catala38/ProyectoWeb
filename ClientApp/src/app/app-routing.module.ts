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
 

const routes: Routes = [
  
  {
    path:'facultad-add',
    component:FacultadAddComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'facultad-lis',
    component:FacultadListComponent
  },

  {
    path:'facultad-edit/:id',
    component:FacultadEditComponent
  },

  {
    path:'programa-add',
    component:ProgramaAddComponent
  },

  {
    path:'programa-lis',
    component:ProgramaListComponent
  },

  {
    path:'programa-edit/:id',
    component:ProgramaEditComponent
  },

  {
    path:'asignatura-add',
    component:AsignaturaAddComponent
  },

  {
    path:'asignatura-lis',
    component:AsignaturaListComponent
  },

  {
    path:'asignatura-edit/:id',
    component:AsignaturaEditComponent
  },

  {
    path:'docente-add',
    component:DocenteAddComponent
  },

  {
    path:'docente-lis',
    component:DocenteListComponent
  },

  {
    path:'docente-edit/:id',
    component:DocenteEditComponent
  },

  {
    path:'ejeTematico-add/:idAsignatura',
    component:EjeTematicoAddComponent
  },
  
  {
    path:'ejeTematico-lis',
    component:EjeTematicoListComponent
  },

  {
    path:'planAsignatura-add',
    component:PlanAsignaturaComponent
  },

  {
    path:'grupo-add',
    component:GrupoAddComponent
  },

  {
    path:'grupo-lis',
    component:GrupoListComponent
  },

  {
    path:'estudiante-add/:grupoId',
    component:EstudianteAddComponent
  },

  {
    path:'estudiante-carga',
    component:EstudianteCargaComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
