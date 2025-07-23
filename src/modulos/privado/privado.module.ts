import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RouterModule, Routes } from '@nestjs/core';
import { PublicoModule } from '../publico/publico.module';

const routes: Routes = [
    {
      path: 'privado',
      children: [UsuariosModule],
    },
  ];

@Module({
  imports: [UsuariosModule,    
    // Registrar las rutas del módulo privado
    RouterModule.register(routes)
    ],
      exports: [RouterModule],
})
export class PrivadoModule {}
