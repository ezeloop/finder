import { UsersController } from './controllers/users.controller';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UsersService } from "./services/users.service";
import { Photo } from '../photos/entities/photo.entity';
import { Pet } from '../pets/entities/pet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Photo, Pet])
  ],
  providers: [UsersService],
  controllers: [UsersController]
})

export class UsersModule {}