import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class createPetDto {

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  name: string;

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  isMissing: boolean;

  @IsOptional()
  @ApiProperty()
  @IsDate()
  isMissingSince: Date;

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  lookingForHome: boolean;

  @IsNotEmpty()
  @ApiProperty()
  @IsDate()
  dateOfBirth: Date;

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  typeOfAnimal: number;

  // @IsOptional()
  // @ApiProperty()
  // @IsString()
  // photos: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  owner: number;

}
