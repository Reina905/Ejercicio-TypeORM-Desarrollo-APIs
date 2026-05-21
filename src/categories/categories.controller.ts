import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryService } from './categories.service'
import { Category } from './category.entity';

@Controller('categories')
export class CategoryController {
       constructor(private readonly categoryService: CategoryService) { }

       // Crear categoría
       @Post()
       create(@Body() body: { nombre: string }): Promise<Category> {
              return this.categoryService.create(body.nombre);
       }

       // Listar categorías
       @Get()
       findAll(): Promise<Category[]> {
              return this.categoryService.findAll();
       }
}