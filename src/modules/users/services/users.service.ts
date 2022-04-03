import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from '../dto/create-user.dto';

import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) { }

  findAll() {
    return this.userRepository.find({
      relations: ['pets', 'pets.photos']
    });
  }

  async getOne(id: number) {
    const user = await this.userRepository.findOne(id);

    if (!user) throw new NotFoundException('User does not exists');

    return user;
  }

  async create(dto: createUserDto) {
    const userExist = await this.userRepository.findOne({ email: dto.email });
    if (userExist)
      throw new BadRequestException(`User already registered with email: ${dto.email}`);
    const newUser = this.userRepository.create(dto);
    const user = await this.userRepository.save(newUser);

    delete user.password;
    return user;
  }

  async findByEmail(email: string) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where({ email })
      .addSelect('user.password')
      .getOne();
  }

  async update(id: number, body: any) {
    const user = await this.userRepository.findOne(id);
    this.userRepository.merge(user, body)
    return this.userRepository.save(user)
  }

  async delete(id: number) {
    await this.userRepository.delete(id);
    return true;
  }
}
