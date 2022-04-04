import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from "@nestjs/common";
import { ProvinceService } from '../services/provinces.service';

@Controller('api/province')
export class ProvinceController {
  constructor(
    private provinceService: ProvinceService
  ) { }

  @Get()
  getAll() {
    return this.provinceService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.provinceService.findOne(id);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() body: any) {
    return this.provinceService.create(body);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.provinceService.update(id, body)
  }

  // @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.provinceService.delete(id);
  }
}
