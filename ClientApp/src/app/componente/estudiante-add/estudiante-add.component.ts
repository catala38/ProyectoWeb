import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CargaAcademicaService } from 'src/app/services/carga-academica.service';
import { GrupoService } from 'src/app/services/grupo.service';
import { Grupo } from 'src/app/models/grupo';

@Component({
  selector: 'app-estudiante-add',
  templateUrl: './estudiante-add.component.html',
  styleUrls: ['./estudiante-add.component.css']
})
export class EstudianteAddComponent implements OnInit {
grupo:Grupo;
  constructor(private route: ActivatedRoute, private location: Location,
    private cargaAcademicaService: CargaAcademicaService, private grupoService:GrupoService
  ) { }

  ngOnInit() {
    this.get();
  }


  get(): void {
    const id =
      +this.route.snapshot.paramMap.get('id');
    this.grupoService.get(id)
      .subscribe(hero => this.grupo = hero);
  }

}
