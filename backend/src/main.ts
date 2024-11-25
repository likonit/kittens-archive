import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from "fs"

async function bootstrap() {

    const httpsOptions = {
      key: fs.readFileSync('/etc/letsencrypt/live/kittens-archive.site/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/kittens-archive.site/fullchain.pem')
    }
    
    const app = await NestFactory.create(AppModule, {
      httpsOptions
    })

    app.enableCors({
      origin: 'https://kittens-archive.site',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      allowedHeaders: 'Content-Type'
    })

  await app.listen(3002)

}

bootstrap();