import { EjeTematico } from "./eje-tematico";
import { Grupo } from "./grupo";
import { Tema } from "./tema";
import { TemaIP } from "./tema-ip";

export class ItemPlanDesarrollo {
    idPlan:number;
    ejeTematico:EjeTematico;
    grupo:Grupo;
    fechaInicio:string;
    fechaFin:string;
    periodo:string;
    ano:string;
    trabajoIndependiente:String;
    estrategias:string;
    competencias:string;
    temasIP:TemaIP[];
    referencias:String;
}
