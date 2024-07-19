import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesController } from './estudiantes/estudiantes.controller';

@Module({
  imports: [],
  controllers: [AppController, EstudiantesController],
  providers: [AppService],
})
export class AppModule {}
