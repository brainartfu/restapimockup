import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Express} from 'express';
import { INestApplication } from '@nestjs/common';
import {ExpressAdapter} from '@nestjs/platform-express';

// must remove comment when deploy lambda

// export async function createApp(
//   expressApp: Express
// ): Promise<INestApplication> {
//   const app = await NestFactory.create(
//     AppModule,
//     new ExpressAdapter(expressApp)
//   );

//   app.enableCors({
//     origin:"*"
//   });

//   return app;
// }




// must active in local running

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:'*' 
  });
  await app.listen(3001);
}
bootstrap();