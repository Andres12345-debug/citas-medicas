export const ACCESO_SQL = {
  DATOS_SESION: `
    SELECT 
      u.cod_usuario, 
      u.nombre_usuario,
      a.nombre_acceso
    FROM accesos a
    INNER JOIN usuarios u ON u.cod_usuario = a.cod_usuario
    WHERE a.cod_usuario = $1
  `
};
