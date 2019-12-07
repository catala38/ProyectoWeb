import { Component, OnInit } from '@angular/core';
import { ProgramaService } from 'src/app/services/programa.service';
import { Programa } from 'src/app/models/programa';



@Component({
  selector: 'app-programa-list',
  templateUrl: './programa-list.component.html',
  styleUrls: ['./programa-list.component.css']
})

export class ProgramaListComponent implements OnInit {

  programas: Programa[];
  

  constructor(private programaService: ProgramaService) { }
  ngOnInit() {

    this.getAll();
    
  }


  getAll() {
    this.programaService.getAll().subscribe(programas => this.programas = programas);
    console.log(JSON.stringify(this.programas));
  }


 
}
