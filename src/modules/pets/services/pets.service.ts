import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pet } from '../entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petRepository: Repository<Pet>
  ){}

  findAll() {
    return this.petRepository.find(
      {relations: ['photos', 'owner', 'typeOfAnimal']}
    );
  }

  findOne(id: number) {
    return this.petRepository.findOne(id);
  }

  create(body: any) {
    const newPet = this.petRepository.create(body)
    return this.petRepository.save(newPet);
  }

  async update(id: number, body:any) {
    const pet = await this.petRepository.findOne(id);
    this.petRepository.merge(pet, body)
    return this.petRepository.save(pet)
  }

  async delete(id: number) {
    await this.petRepository.delete(id);
    return true;
  }
}
