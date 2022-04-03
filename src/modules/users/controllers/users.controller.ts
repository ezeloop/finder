import { createUserDto } from './../dto/create-user.dto';
import { Controller, Get, Param, Post, Body, Put, Delete, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('api/users')
export class UsersController {

  constructor(
    private userService: UsersService
  ) { }

  @Get()
  getAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.userService.getOne(id);
  }

  @UsePipes(new ValidationPipe({skipMissingProperties: true}))
  @UsePipes(new ValidationPipe({forbidNonWhitelisted: true, whitelist: true, transform: true}))
  @ApiOperation({ summary: 'Registrar Usuario' })
  @ApiResponse({
    status: 200,
    description: 'Aqui podrás registrar un usuario, ingresando los datos requeridos',
    type: createUserDto,
  })
  @Post()
  async create(@Body() dto: createUserDto) {
    const data = await this.userService.create(dto);
    return { message: 'User created', data };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.userService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }

}