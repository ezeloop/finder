import { Pet } from '../../pets/entities/pet.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Photo {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(()=> Pet, (pet) => pet.photos)
  @JoinColumn({ name: 'pet_id'})
  pet: Pet

}