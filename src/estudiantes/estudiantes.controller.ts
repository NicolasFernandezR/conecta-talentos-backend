import { Body, Controller, Get, Param, Post, Res, Delete } from '@nestjs/common';
import { Response } from 'express';
import { Estudiante } from 'src/models/estudiante';
import { dataEmpresas, dataEstudiantes, dataOfertaLaboral, dataPostulacion } from 'src/models/data';
import { randomUUID } from 'crypto';

@Controller('estudiantes')
export class EstudiantesController {

    @Post()
    crearEstudiante(@Body() estudiante:Estudiante, @Res() res:Response){
        if (dataEstudiantes.find(dato => dato.email == estudiante.email)) return res.status(404).json( { massage: 'estudiante ya esta registrado'});
        if(!estudiante) return res.status(404).json( { massage: 'no cumple con los requisitos para crear el estudiante'});
        estudiante = {
            ...estudiante,
            id: randomUUID(),
        }
        dataEstudiantes.push(estudiante);
        return res.status(201).json({ massage: 'estudiante creado' });
    }

    @Get(':id')
    obtenerEstudiante(@Param('id') id: string, @Res() res:Response){
        const estudianteSolicitado = dataEstudiantes.find(dato => dato.id == id);
        if(estudianteSolicitado) return res.json(estudianteSolicitado);
        return res.status(404).json({ massage: 'no existe estudiante con esa id' });
    }

    @Get()
    obtenerListaEstudiantes(@Res() res:Response){
        if(dataEstudiantes) return res.json(dataEstudiantes);
        return res.status(404).json({ massage: 'no existen estudiantes' });
    }

    @Delete(':id')
    eliminarEstudiante(@Param('id') id: string, @Res() res:Response){
        const estudianteIndex = dataEstudiantes.findIndex(data => data.id == id);
        if (estudianteIndex === -1) return res.status(404).json({ massage: 'estudiante not found' });
        dataEstudiantes.splice(estudianteIndex, 1);
        return res.json({ massage: 'estudiante deleted' });
    }
}
