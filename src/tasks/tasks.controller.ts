import {Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
       constructor(private readonly tasksService: TasksService) { }

       @Post()
       createTask(@Body() body: { titulo: string; userID: number; categoriaId: number }) {
              return this.tasksService.createTask(body.titulo, body.userID, body.categoriaId);
       }

       @Get()
       findAll(): Promise<Task[]> {
              return this.tasksService.findAll();
       }

       @Get(':id')
       findById(@Param('id', ParseIntPipe) id: number): Promise<Task> { //ParseIntPipe para convertir el id a number
              return this.tasksService.findById(id);
       }

       @Put(':id')
       updateTask(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Task>): Promise<Task> {
              return this.tasksService.updateTask(id, data);
       }

       @Delete(':id')
       deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
              return this.tasksService.deleteTask(id);
       }
}