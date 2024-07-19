import { Estudiante } from "./estudiante";

export class Postulacion{
    id: string;
    fechaPostulacion: Date;
    estudiante: Estudiante;
    estado: string;
    constructor(
        id: string,
        fechaPostulacion: Date,
        estudiante: Estudiante,
        estado: string,
    ){
        this.id= id;
        this.fechaPostulacion= fechaPostulacion;
        this.estudiante= estudiante;
        this.estado= estado;
    }
}