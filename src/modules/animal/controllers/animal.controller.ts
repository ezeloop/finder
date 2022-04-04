import { AnimalService } from '../services/animal.service';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from "@nestjs/common";

@Controller('api/animal')
export class AnimalController {
  constructor(
    private animalService: AnimalService
  ) { }

  @Get()
  getAll() {
    return this.animalService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.animalService.findOne(id);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() body: any) {
    return this.animalService.create(body);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.animalService.update(id, body)
  }

  // @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.animalService.delete(id);
  }
}
