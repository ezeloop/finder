import { AnimalService } from './services/animal.service';
import { AnimalController } from './controllers/animal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Animal } from './entities/animal.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Animal])
  ],
  controllers: [AnimalController],
  providers: [AnimalService],
  exports: [TypeOrmModule],
})
export class AnimalModule {

}
