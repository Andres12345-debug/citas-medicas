import { Body, Controller, Post } from '@nestjs/common';
import { AccesosService } from './accesos.service';
import { Acceso } from 'src/modelos/acceso/acceso';

@Controller('accesos')
export class AccesosController {
    constructor(private readonly accesosService: AccesosService) {}
    // Aquí puedes agregar métodos para manejar las solicitudes HTTP relacionadas con accesos
    @Post("/signin")
    public inicioSesion(@Body() objAcceso: Acceso):any {
        return this.accesosService.sesion(objAcceso);
    }
}
