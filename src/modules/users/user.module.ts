
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UsersService } from "./services/users.service";
import { Pet } from '../pets/entities/pet.entity';
import { UsersController } from "./controllers/users.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), Pet
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [TypeOrmModule, UsersService],
})

export class UsersModule {}