import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from '../entities/animal.entity';

@Injectable()
export class AnimalService {
  constructor(
    @InjectRepository(Animal) private animalRepository: Repository<Animal>
  ){}

  findAll() {
    return this.animalRepository.find();
  }

  findOne(id: number) {
    return this.animalRepository.findOne(id);
  }

  create(body: any) {
    const newAnimal = this.animalRepository.create(body)
    return this.animalRepository.save(newAnimal);
  }

  async update(id: number, body:any) {
    const newAnimal = await this.animalRepository.findOne(id);
    this.animalRepository.merge(newAnimal, body)
    return this.animalRepository.save(newAnimal)
  }

  async delete(id: number) {
    await this.animalRepository.delete(id);
    return true;
  }
}
