import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  // Crear categoría
  create(category: Partial<Category>) {
    const nuevaCategoria = this.categoryRepository.create(category);
    return this.categoryRepository.save(nuevaCategoria);
  }

  // Listar categorías
  findAll() {
    return this.categoryRepository.find();
  }
}