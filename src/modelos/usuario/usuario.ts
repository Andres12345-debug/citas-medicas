import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Acceso } from "../acceso/acceso";

@Entity("usuarios", { schema: "public" })
export class Usuario {
    @PrimaryGeneratedColumn({ type: "integer", name: "cod_usuario" })
    public codUsuario: number;
    
    @Column({ type: "integer", nullable: false, name: "cedula" })
    public cedula: number;

    @Column({ type: "varchar", length: 250, nullable: false, name: "nombre_usuario" })
    public nombreUsuario: string;

  // Relación con Acceso
  @OneToOne(() => Acceso, (objAcceso) => objAcceso.usuario)
  public acceso?: Acceso;
}

