import { Estudiante } from "./estudiante";

export class Postulacion{
    id: number;
    fechaPostulacion: string;
    estudiante: Estudiante;
    estado: string;
    constructor(
        id: number,
        fechaPostulacion: string,
        estudiante: Estudiante,
        estado: string,
    ){
        this.id= id;
        this.fechaPostulacion= fechaPostulacion;
        this.estudiante= estudiante;
        this.estado= estado;
    }
}