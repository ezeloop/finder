import { Photo } from '../../photos/entities/photo.entity';
import { User } from '../../users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Animal } from '../../animal/entities/animal.entity';

@Entity()
export class Pet {
  
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({default: false})
  isMissing: boolean;

  @Column({nullable: true})
  isMissingSince: Date;

  @Column({default: false})
  lookingForHome: boolean;

  @Column()
  dateOfBirth: Date;

  @ManyToOne(()=> Animal, (animal) => animal.id)
  @JoinColumn({ name: 'typeOfAnimal'})
  typeOfAnimal: Animal;

  @OneToMany(() => Photo, (photo) => photo.pet)
  photos: Photo[];

  @ManyToOne(()=> User, (user) => user.pets)
  @JoinColumn({ name: 'user_id'})
  owner: User;

}