import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Province } from '../entities/province.entity';

@Injectable()
export class ProvinceService {
  constructor(
    @InjectRepository(Province) private provinceRepository: Repository<Province>
  ){}

  findAll() {
    return this.provinceRepository.find();
  }

  findOne(id: number) {
    return this.provinceRepository.findOne(id);
  }

  create(body: any) {
    const newProvince = this.provinceRepository.create(body)
    return this.provinceRepository.save(newProvince);
  }

  async update(id: number, body:any) {
    const newProvince = await this.provinceRepository.findOne(id);
    this.provinceRepository.merge(newProvince, body)
    return this.provinceRepository.save(newProvince)
  }

  async delete(id: number) {
    await this.provinceRepository.delete(id);
    return true;
  }
}
