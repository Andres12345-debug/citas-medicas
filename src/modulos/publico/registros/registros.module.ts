import { Module } from '@nestjs/common';
import { RegistrosService } from './registros.service';
import { RegistrosController } from './registros.controller';

@Module({
  providers: [RegistrosService],
  controllers: [RegistrosController]
})
export class RegistrosModule {}
