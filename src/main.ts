import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const APPLICATION_NAME = "redbaton"
  const APPPLICATION_DESCRIPTION = 'redbaton website admin portal';
  const app = await NestFactory.create(AppModule);
  const globalPrefix = process.env.API_PREFIX || '';
  if (globalPrefix) {
    app.setGlobalPrefix(globalPrefix);
  }
  const options = new DocumentBuilder()
    .setTitle(APPLICATION_NAME)
    .setDescription(APPPLICATION_DESCRIPTION)
    .setVersion('1.0')
    .addBearerAuth(
      {
        // I was also testing it without prefix 'Bearer ' before the JWT
        description: `Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        type: 'http',
        in: 'Header',
      },
      'token',
    ).build()
    console.log("database connected")
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0');
}

bootstrap();
