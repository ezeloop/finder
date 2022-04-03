import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @IsNotEmpty()
  @ApiProperty({
    example: 'youremail@mail.com',
  })
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  @MinLength(8)
  @MaxLength(128)
  password: string;
}
