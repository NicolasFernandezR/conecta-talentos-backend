export class Estudiante {
    id: string;
    nombre: string;
    apellidos: string;
    edad: number;
    profesion: string;
    email: string;
    constructor(
        id: string,
        nombre: string,
        apellidos: string,
        edad: number,
        profesion: string,
        email: string,
    ){
        this.id= id;
        this.nombre= nombre;
        this.apellidos= apellidos;
        this.edad= edad;
        this.profesion= profesion;
        this.email= email;

    }
}