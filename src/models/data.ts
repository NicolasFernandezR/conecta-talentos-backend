import { randomUUID } from "crypto";
import { Empresa } from "./empresa";
import { Estudiante } from "./estudiante";
import { OfertaLaboral } from "./ofertaLaboral";
import { Postulacion } from "./postulacion";

export const dataEmpresas: Empresa[] = [];
export const dataOfertaLaboral: OfertaLaboral[] = [];
export const dataPostulacion: Postulacion[] = [];


export const dataEstudiantes: Estudiante[] = [
    new Estudiante(randomUUID(), "Juan", "Pérez", 20, "Ingeniero", "juan.perez@example.com"),
    new Estudiante(randomUUID(), "María", "García", 22, "Doctora", "maria.garcia@example.com"),
    new Estudiante(randomUUID(), "Carlos", "López", 25, "Abogado", "carlos.lopez@example.com"),
    new Estudiante(randomUUID(), "Ana", "Martínez", 21, "Diseñadora", "ana.martinez@example.com"),
    new Estudiante(randomUUID(), "Luis", "Hernández", 23, "Arquitecto", "luis.hernandez@example.com")
];