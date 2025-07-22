import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { UsuariosModule } from '../privado/usuarios/usuarios.module';
import { RegistrosModule } from './registros/registros.module';
import { AccesosModule } from './accesos/accesos.module';

const routes: Routes = [
    {
      path: 'publico',
      children: [UsuariosModule, RegistrosModule],
    },
  ];

@Module({    
  imports: [
    AccesosModule, 
    RegistrosModule,
    // Registrar las rutas del módulo publico
    RouterModule.register(routes),
  ],
  exports: [RouterModule],
})
export class PublicoModule {}
