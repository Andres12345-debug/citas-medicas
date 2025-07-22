import { Global, Module } from '@nestjs/common';
import { Usuario } from 'src/modelos/usuario/usuario';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Global()
@Module({
    imports: [],
    providers: [
        {
            provide: DataSource,
            inject: [],
            useFactory: async () => {
                try {
                    const poolConexion = new DataSource({
                        type: 'postgres',
                        host: String(process.env.HOST),
                        port: Number(process.env.PORT),
                        username: String(process.env.USER),
                        password: String(process.env.CLAVE),
                        database: String(process.env.BASE_DATOS),
                        synchronize: true,
                        logging: true,
                        namingStrategy: new SnakeNamingStrategy(),
                        entities: [Usuario], // Aquí debes agregar tus entidades
                    });

                    await poolConexion.initialize();
                    console.log("Conexión a la base de datos exitosa." + String(process.env.DATA_BASE));

                    return poolConexion;
                } catch (miError) {
                    console.log("Falló al realizar la conexión");
                    throw miError;
                }
            },
        },
    ],
    exports: [DataSource],
})
export class
    ConexionModule { }
