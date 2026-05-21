import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
       constructor(
              @InjectRepository(Category)
              private categoryRepository: Repository<Category>,
       ) { }

       // Crear categoría
       async create(nombre: string): Promise<Category> {
              const nueva = this.categoryRepository.create({ nombre });
              return this.categoryRepository.save(nueva);
       }

       // Listar categorías
       async findAll(): Promise<Category[]> {
              return this.categoryRepository.find();
       }
}