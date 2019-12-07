import {Asignatura} from "./asignatura";
import { Tema } from "./tema";

export class EjeTematico {
    ejeId:number;
    nombre:string;
    asignatura:Asignatura;
    temas:Tema[];
}
