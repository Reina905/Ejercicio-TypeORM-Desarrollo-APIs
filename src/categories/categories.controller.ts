import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryService } from './categories.service'
import { Category } from './category.entity';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // Crear categoría
  @Post()
  create(@Body() category: Partial<Category>) {
    return this.categoryService.create(category);
  }

  // Listar categorías
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }
}