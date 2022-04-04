import { Pet } from '../../pets/entities/pet.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Animal {
  
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false, unique: true })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  detail: string;

  @OneToMany(()=> Pet, (pet) => pet.typeOfAnimal)
  pets: Pet;
}