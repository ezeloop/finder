import { Pet } from './../pets/entities/pet.entity';
import { Photo } from './entities/photo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forFeature([Photo, Pet])
  ],
  providers: [],
  controllers: [],
  exports: [TypeOrmModule],
})
export class PhotosModule {}

