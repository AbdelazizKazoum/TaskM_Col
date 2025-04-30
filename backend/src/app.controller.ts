/* eslint-disable prettier/prettier */
import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles, Unprotected } from 'nest-keycloak-connect';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Unprotected()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('private')
  // @Roles({ roles: ['admin'] })
  // private(): string {
  //   return this.appService.getHello();
  // }

  @Roles({ roles: ['Admin'] })
  @Get('private')
  whoami(@Req() req: any) {
    console.log(req.user.resource_access); // <-- This is the Keycloak user info
    return req.user;
  }
}
