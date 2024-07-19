export class Empresa {
    id: string;
    nombre: string;
    sitioWeb: string;
    tipo: string;
    constructor (
        id: string,
        nombre: string,
        sitioWeb: string,
        tipo: string,
    ){
        this.id = id;
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.tipo =tipo;
    }
}