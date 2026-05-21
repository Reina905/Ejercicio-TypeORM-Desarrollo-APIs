import {
       Controller,
       Get,
       Post,
       Put,
       Delete,
       Param,
       Body,
       ParseIntPipe,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
       constructor(private readonly tasksService: TasksService) { }

       // Crear tarea
       @Post()
       createTask(
              @Body() body: { titulo: string; userID: number; categoriaId: number },
       ) {
              return this.tasksService.createTask(
                     body.titulo,
                     body.userID,
                     body.categoriaId,
              );
       }

       // Obtener todas
       @Get()
       findAll(): Promise<Task[]> {
              return this.tasksService.findAll();
       }

       // Obtener por ID
       @Get(':id')
       findById(
              @Param('id', ParseIntPipe) id: number,
       ): Promise<Task> {
              return this.tasksService.findById(id);
       }

       // Actualizar
       @Put(':id')
       updateTask(
              @Param('id', ParseIntPipe) id: number,
              @Body() data: Partial<Task>,
       ): Promise<Task> {
              return this.tasksService.updateTask(id, data);
       }

       // Eliminar
       @Delete(':id')
       deleteTask(
              @Param('id', ParseIntPipe) id: number,
       ): Promise<void> {
              return this.tasksService.deleteTask(id);
       }
}