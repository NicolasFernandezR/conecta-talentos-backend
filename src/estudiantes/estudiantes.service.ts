import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { dataEstudiantes } from 'src/models/data';
import { Estudiante } from 'src/models/estudiante';
import { Resultado } from './utils';
import { isEmpty } from 'rxjs';
import { isBooleanObject } from 'util/types';

@Injectable()
export class EstudiantesService {

    crearEstudiante(estudiante: Estudiante):Resultado{
        if (dataEstudiantes.find(dato => dato.email == estudiante.email)) return {status: false, massage: 'correo ya se encuentra registrado'};
        if(Object.keys(estudiante).length == 0) return {status: false, massage: 'se debe ingresar datos para el registro'} ;
        estudiante = {
            ...estudiante,
            id: randomUUID(),
        }
        dataEstudiantes.push(estudiante);
        return { status: true, massage: 'estudiante creado' };
    }
    
    obtenerEstudianteByID(id: string):Estudiante {
        const estudianteSolicitado: Estudiante = dataEstudiantes.find(dato => dato.id == id);
        if(estudianteSolicitado) return estudianteSolicitado;
        return null;
    }

    obtenerListaEstudiantes(){
        return dataEstudiantes;
    }

    eliminarEstudiante(id: string){
        const estudianteIndex = dataEstudiantes.findIndex(data => data.id == id);
        if (estudianteIndex === -1) return false;
        dataEstudiantes.splice(estudianteIndex, 1);
        return true;
    }

}
