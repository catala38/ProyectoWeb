import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { Asignatura } from 'src/app/models/asignatura';
import { EjeTematico } from 'src/app/models/eje-tematico';
import { Tema } from 'src/app/models/tema';
import { TemaService } from 'src/app/services/tema.service';
import { EjeTematicoService } from 'src/app/services/eje-tematico.service';

@Component({
  selector: 'app-eje-tematico-add',
  templateUrl: './eje-tematico-add.component.html',
  styleUrls: ['./eje-tematico-add.component.css']
})
export class EjeTematicoAddComponent implements OnInit {
asignatura:Asignatura;
ejeTematico:EjeTematico;
tema:Tema;
temas:Tema[];
  constructor(
    private route: ActivatedRoute,
    private asignaturaService: AsignaturaService,
    private temaService:TemaService,
    private ejeService:EjeTematicoService
    //private location: Location
  ) { }

  ngOnInit() {
    this.ejeTematico=new EjeTematico();
    this.tema={nombre:'',idTema:0};
    this.get();
    this.temas=[];
  }
  get(): void {
    const id =
      this.route.snapshot.paramMap.get('idAsignatura');
    this.asignaturaService.get(id).subscribe(hero => this.asignatura = hero);
  }
  getTemas(){
    this.temas=this.temaService.getTemas();
  }
  addTema(){
    if(this.tema.nombre!=""){
      this.temaService.addTema(this.tema);
      this.getTemas();
    }else{
      console.log(this.tema);
      alert("digite el nombre");
    }
    
  }
  addEje(){
    this.getTemas();

    this.ejeTematico.temas=this.temas;
    this.ejeTematico.asignatura=this.asignatura;

    this.ejeService.addCliente(this.ejeTematico).subscribe(rest=>{
      sessionStorage.clear();
      this.getTemas();
    });
   
  }


}
