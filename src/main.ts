import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  app.enableVersioning({
    type:VersioningType.URI
  });
  await app.listen(3000);
}
bootstrap();
//229:queryBuilder/233:methode generique/236/250/255 bonus