import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { PetsService } from "../services/pets.service";

@Controller('api/pets')
export class PetsController {

  constructor(
    private petsService: PetsService
    ){}
  
  @Get()
  getAll(){
    return this.petsService.findAll();
  }

  @Get(':id')
    getOne(@Param('id') id: number){
      return this.petsService.findOne(id);
    }

  @Post()
  create(@Body() body: any) {
    return this.petsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.petsService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.petsService.delete(id);
  }
  
}