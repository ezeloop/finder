import { AuthDto } from './../dto/auth-dto';
import { AuthService } from '../services/auth.service';
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('Modulo de autenticación')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Loguear usuario' })
  @ApiResponse({
    status: 200,
    description:
      'Ingresa los datos para realizar la autenticación',
    type: AuthDto,
  })
  @Post('login')
  login(@Req() req: any) {
    const data = this.authService.login(req.body);
    return {
      message: 'Login successful',
      data,
    };
  }

  @ApiOperation({ summary: 'Refrescar token jwt' })
  @ApiResponse({
    status: 200,
    description: 'Ingresa el token para refrescarlo nuevamente',
  })
  @UseGuards(AuthGuard('jwt'))
  @Get('refresh')
  refreshToken(@Req() req: any) {
    const data = this.authService.login(req.user);
    return {
      message: 'Token reloaed',
      data,
    };
  }
}
