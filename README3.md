Estadísticas:
Para los gráficos usé la biblioteca Highcharts.
Cada gráfico obtiene sus datos mediante fetch a una URL del servidor Flask que 
retorna JSON. Las tres rutas son /api/estadisticas/miembros_por_dia, 
/api/estadisticas/actividades_por_tipo y /api/estadisticas/actividades_por_comuna.

Comentarios:
Los comentarios se cargan y envían de forma asíncrona usando fetch. Al entrar 
al detalle de un miembro, se hace una llamada GET a /api/comentarios/<id> por 
cada actividad. Al enviar un comentario se hace un POST a la misma URL
Las validaciones se hacen tanto en el cliente como en el 
servidor de forma independiente.

Region y comuna (se implementa dado que tarea 2 no lo tenía)
El selector de comuna es dependiente de la región. Al seleccionar una región 
se hace una llamada fetch a /api/comunas/<id_region> que retorna las comunas 
correspondientes y las carga dinámicamente en el selector.

DB
Se usó la misma base de datos de la Tarea 2 agregando la tabla comentario 
con el script tabla-comentario.sql provisto por el enunciado. También se 
agregaron las tablas region y comuna con sus datos usando region-comuna.sql.
