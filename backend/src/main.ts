/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.useLogger(app.get(Logger));
  app.enableCors({
    origin: ['http://localhost:3000'], // Add your frontend domain here
    credentials: true, // Allow cookies to be sent with requests
  });
  await app.listen(5000);
}
bootstrap();
