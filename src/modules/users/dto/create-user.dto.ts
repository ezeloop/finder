import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class createUserDto {
  @ApiProperty()
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  lastName: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsNumber()
  province: number;

  @IsNotEmpty()
  @ApiProperty({
    example: 'youremail@email.com',
  })
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'min length 8',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(128)
  password: string;
}
