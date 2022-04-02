import { Pet } from './entities/pet.entity';
import { Photo } from './../photos/entities/photo.entity';
import { User } from './../users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PetsController } from './controllers/pets.controller';
import { PetsService } from './services/pets.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Photo, Pet])
  ],
  controllers: [PetsController],
  providers: [PetsService],
  exports: [TypeOrmModule],
})
export class PetsModule {}
