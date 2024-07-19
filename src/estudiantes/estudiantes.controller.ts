import { Body, Controller, Get, Param, Post, Res, Delete } from '@nestjs/common';
import { Response } from 'express';
import { Estudiante } from 'src/models/estudiante';
import { dataEmpresas, dataEstudiantes, dataOfertaLaboral, dataPostulacion } from 'src/models/data';
import { randomUUID } from 'crypto';
import { EstudiantesService } from './estudiantes.service';
import { Resultado } from './utils';

@Controller('estudiantes')
export class EstudiantesController {

    constructor( private readonly estudianteService: EstudiantesService){}

    @Post()
    crearEstudiante(@Body() estudiante:Estudiante, @Res() res:Response){
        const respuesta :Resultado = this.estudianteService.crearEstudiante(estudiante);
        if (respuesta.status) return res.status(201).json(respuesta.massage);
        return res.status(404).json(respuesta.massage);
    }

    @Get(':id')
    obtenerEstudianteById(@Param('id') id: string, @Res() res:Response){
        const estudianteSolicitado: Estudiante = this.estudianteService.obtenerEstudianteByID(id);
        if(estudianteSolicitado) return res.json(estudianteSolicitado);
        return res.status(404).json({ massage: 'no existe estudiante con esa id' });
    }

    @Get()
    obtenerListaEstudiantes(@Res() res:Response){
        const estudiantes: Estudiante[] = this.estudianteService.obtenerListaEstudiantes();
        if(estudiantes.length > 0) return res.json(estudiantes);
        return res.status(404).json({ massage: 'no existen estudiantes' });
    }

    @Delete(':id')
    eliminarEstudiante(@Param('id') id: string, @Res() res:Response){
        const resultado: boolean = this.estudianteService.eliminarEstudiante(id);
        if (!resultado) return res.status(404).json({ massage: 'estudiante not found' });
        return res.json({ massage: 'estudiante deleted' });
    }
}
