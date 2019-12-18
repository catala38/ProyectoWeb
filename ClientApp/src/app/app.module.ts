import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FacultadAddComponent } from './componente/facultad-add/facultad-add.component';
import { FacultadListComponent } from './componente/facultad-list/facultad-list.component';
import { FacultadEditComponent } from './componente/facultad-edit/facultad-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgramaAddComponent } from './componente/programa-add/programa-add.component';
import { ProgramaListComponent } from './componente/programa-list/programa-list.component';
import { ProgramaEditComponent } from './componente/programa-edit/programa-edit.component';
import { AsignaturaAddComponent } from './componente/asignatura-add/asignatura-add.component';
import { AsignaturaListComponent } from './componente/asignatura-list/asignatura-list.component';
import { AsignaturaEditComponent } from './componente/asignatura-edit/asignatura-edit.component';
import { DocenteAddComponent } from './componente/docente-add/docente-add.component';
import { DocenteListComponent } from './componente/docente-list/docente-list.component';
import { DocenteEditComponent } from './componente/docente-edit/docente-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FiltroProgramaPipe } from './pipes/filtro-programa.pipe';
import { FiltroAsignaturaPipe } from './pipes/filtro-asignatura.pipe';
import { EjeTematicoAddComponent } from './componente/eje-tematico-add/eje-tematico-add.component';
import { EjeTematicoListComponent } from './componente/eje-tematico-list/eje-tematico-list.component';
import { EjeTematicoEditComponent } from './componente/eje-tematico-edit/eje-tematico-edit.component';
import { TemaAddComponent } from './componente/tema-add/tema-add.component';
import { TemaListComponent } from './componente/tema-list/tema-list.component';
import { TemaEditComponent } from './componente/tema-edit/tema-edit.component';
import { GrupoAddComponent } from './componente/grupo-add/grupo-add.component';
import { GrupoListComponent } from './componente/grupo-list/grupo-list.component';
import { GrupoEditComponent } from './componente/grupo-edit/grupo-edit.component';
import { PlanAsignaturaComponent } from './componente/plan-asignatura/plan-asignatura.component';
import { EstudianteAddComponent } from './componente/estudiante-add/estudiante-add.component';
import { EstudianteCargaComponent } from './componente/estudiante-carga/estudiante-carga.component';
import { AlertModalComponent } from './componente/alert-modal/alert-modal.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavBarComponent } from './componente/nav-bar/nav-bar.component';
import { EstudianteListComponent } from './componente/estudiante-list/estudiante-list.component';
import { PlanDesarrolloAddComponent } from './componente/plan-desarrollo-add/plan-desarrollo-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FacultadAddComponent,
    FacultadListComponent,
    FacultadEditComponent,
    ProgramaAddComponent,
    ProgramaListComponent,
    ProgramaEditComponent,
    AsignaturaAddComponent,
    AsignaturaListComponent,
    AsignaturaEditComponent,
    DocenteAddComponent,
    DocenteListComponent,
    DocenteEditComponent,
    FiltroProgramaPipe,
    FiltroAsignaturaPipe,
    EjeTematicoAddComponent,
    EjeTematicoListComponent,
    EjeTematicoEditComponent,
    TemaAddComponent,
    TemaListComponent,
    TemaEditComponent,
    GrupoAddComponent,
    GrupoListComponent,
    GrupoEditComponent,
    PlanAsignaturaComponent,
    EstudianteAddComponent,
    EstudianteCargaComponent,
    AlertModalComponent,
    LoginComponent,
    NavBarComponent,
    EstudianteListComponent,
    PlanDesarrolloAddComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    
    RouterModule.forRoot([
      { path: 'nav-bar', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    
    HttpClientModule,
    AppRoutingModule,
  ],
  
  entryComponents:[AlertModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
