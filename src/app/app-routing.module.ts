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

const routes: Routes = [
  
  {
    path:'facultad-add',
    component:FacultadAddComponent
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

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
