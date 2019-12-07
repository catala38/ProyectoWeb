import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    FiltroAsignaturaPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'facultadAdd', component: FacultadAddComponent },
      { path: 'facultadList', component: FacultadListComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
