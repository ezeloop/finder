import { Pet } from './../pets/entities/pet.entity';
import { Photo } from './entities/photo.entity';
import { User } from './../users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Photo, Pet])
  ],
  providers: [],
  controllers: []
})
export class PhotosModule {}

