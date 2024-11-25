import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as mysql from "mysql2/promise"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getHello(@Body() body: any): Promise<string> {
    
      const action = body.action
      return this.appService.updateDb(action, body)

  }
}
