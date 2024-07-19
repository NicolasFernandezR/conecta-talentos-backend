import { Empresa } from "./empresa";
import { Postulacion } from "./postulacion";

export class OfertaLaboral {
    id: string;
    fechaCreacion: Date;
    descripcion: string;
    cargo: string;
    region: string;
    tipo: string;
    estado: boolean;
    empresa: Empresa;
    postulaciones: Postulacion[];
    constructor (
        id: string,
        fechaCreacion: Date,
        descripcion: string,
        cargo: string,
        region: string,
        tipo: string,
        estado: boolean,
        empresa: Empresa,
        postulaciones: Postulacion[],
    ){
        this.id= id;
        this.fechaCreacion= fechaCreacion;
        this.descripcion= descripcion;
        this.cargo= cargo;
        this.region= region;
        this.tipo= tipo;
        this.estado= estado;
        this.empresa= empresa;
        this.postulaciones= postulaciones;
    }
}