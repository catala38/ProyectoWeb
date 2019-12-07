import { Component, OnInit } from '@angular/core';
import { FacultadService } from 'src/app/services/facultad.service';
import { Facultad } from 'src/app/models/facultad';

@Component({
  selector: 'app-facultad-list',
  templateUrl: './facultad-list.component.html',
  styleUrls: ['./facultad-list.component.css']
})
export class FacultadListComponent implements OnInit {
  facultades: Facultad[];
  constructor(private facultadService: FacultadService) { }

  ngOnInit() {

    this.getAll();
  }
  getAll() {
    this.facultadService.getAll().subscribe(facultades => this.facultades = facultades);
    console.log(JSON.stringify(this.facultades));

  }
}
