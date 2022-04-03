import { Photo } from '../../photos/entities/photo.entity';
import { User } from '../../users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Pet {
  
  @PrimaryGeneratedColumn()
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

  @OneToMany(() => Photo, (photo) => photo.pet)
  photos: Photo[];

  @ManyToOne(()=> User, (user) => user.pets)
  @JoinColumn({ name: 'user_id'})
  owner: User;

}