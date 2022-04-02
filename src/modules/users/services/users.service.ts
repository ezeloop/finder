import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ){}

  findAll() {
    return this.userRepository.find({
      relations: ['pets']
    });
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  create(body: any) {
    const newUser = this.userRepository.create(body)
    return this.userRepository.save(newUser);
  }

  async update(id: number, body:any) {
    const user = await this.userRepository.findOne(id);
    this.userRepository.merge(user, body)
    return this.userRepository.save(user)
  }

  async delete(id: number) {
    await this.userRepository.delete(id);
    return true;
  }
}
