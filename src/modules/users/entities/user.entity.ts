import { Pet } from './../../pets/entities/pet.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, BeforeInsert, BeforeUpdate } from 'typeorm';
import { hash } from 'bcryptjs';

@Entity()
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({default: true})
  isActive: boolean;

  @Column()
  password: string;

  @CreateDateColumn({
    name: 'creation_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP'
  })
  creationAt: Date;

  @OneToMany(() => Pet, (pet) => pet.owner)
  pets: Pet[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    this.password = await hash(this.password, 10);
  }

}
