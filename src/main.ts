import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
      const puerto = Number(process.env.PUERTO_SERVIDOR);

    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.enableCors();

    await app.listen(puerto, () => {
   console.log(`Servidor funcionando puerto: ${puerto}`);
   });

}
bootstrap();
