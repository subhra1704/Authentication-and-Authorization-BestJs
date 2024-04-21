import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './role.guard';
import { CONSTANTS } from 'constant';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('local')) //Authentication done 1 step
  @Post('auth/login')
  async login(@Request() req) {
    //Authorize and generate Token 2 step
    let token = this.authService.generateToken(req.user);
    return token;
  }

  // @UseGuards(AuthGuard('jwt')) //Authentication done 1 step
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER)) //Authentication done 1 step also authorization on Role basis
  @Get('/android-Developer')
  androidDeveloperData(): string {
    return 'This is final data after auth verify';
  }

  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER)) //Authentication done 1 step also authorization on Role basis
  @Get('/web-Developer')
  webDeveloperData(): string {
    return 'This is final data after auth verify';
  }
}
