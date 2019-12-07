import {Asignatura} from "./asignatura";
import {Docente} from "./Docente";
import { Grupo } from "./Grupo";

export class CargaAcademica {
    cargaId:number;
    docente:Docente;
    asignatura:Asignatura;
    grupos:Grupo[];
}
