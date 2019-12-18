import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProgramaService } from 'src/app/services/programa.service';
import { Programa } from 'src/app/models/programa';

@Component({
  selector: 'app-programa-edit',
  templateUrl: './programa-edit.component.html',
  styleUrls: ['./programa-edit.component.css']
})
export class ProgramaEditComponent implements OnInit {

  programa: Programa;
  stask: string;

  constructor(  private route: ActivatedRoute,
    private programaservice: ProgramaService,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.programaservice.get(id)
      .subscribe(hero => this.programa = hero);
  }
  update(): void {
    this.programaservice.update(this.programa)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.programaservice.delete(this.programa)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }


}
