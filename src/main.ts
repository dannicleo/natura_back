import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST, PUT, PATH',
    credentials: false,
  });
  
  const config =  new DocumentBuilder()
    .setTitle('Natura&Co E-commerce')
    .setDescription('API Natura&Co E-commerce description')
    .setVersion('1.0')
    .addTag('natura')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
