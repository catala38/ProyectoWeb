import { Programa } from "./programa";

export class Asignatura {

    AsignaturaId :string;
    Nombre:string;
    Ncreditos :string;
    PreRequisitos :string;
    CoRequisitos :string;
    Tipo :string;
    NatAsignatura1 :string;
    NatAsignatura2 :string;
    programa:Programa;


}
