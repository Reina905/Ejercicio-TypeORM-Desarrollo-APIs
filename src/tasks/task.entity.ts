import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn} from "typeorm";
import { User } from "src/users/user.entity";
import { Category } from 'src/categories/category.entity';

@Entity() 
export class Task {
       @PrimaryGeneratedColumn()
       id: number;

       @Column()
       titulo: string;

       @Column({default: false})
       completada: boolean;

       @Column()
       descripcion: string | null;

       @CreateDateColumn()
       fechaCreacion: Date;

       @ManyToOne(() => User, (user)=> user.tareas, {eager: true})
       user: User;

       @ManyToOne(() => Category, (category) => category.tasks)
       category: Category;
}
