import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FacultadService } from 'src/app/services/facultad.service'
import { Facultad } from 'src/app/models/facultad';

@Component({
  selector: 'app-facultad-edit',
  templateUrl: './facultad-edit.component.html',
  styleUrls: ['./facultad-edit.component.css']
})
export class FacultadEditComponent implements OnInit {

  facultad: Facultad;
  stask: string;

  constructor(
    private route: ActivatedRoute,
    private facultadservice: FacultadService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id =
      +this.route.snapshot.paramMap.get('id');
    this.facultadservice.get(id)
      .subscribe(hero => this.facultad = hero);
  }
  update(): void {
    this.facultadservice.update(this.facultad)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.facultadservice.delete(this.facultad)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

}
