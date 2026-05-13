Se adaptó el modelo de datos propuesto en el enunciado eliminando las tablas  `region` y `comuna`, ya que en la Tarea 1 no las incluí. En su lugar, 
la tabla `miembro` contiene los campos `tipo` y `edad`  que sí usé en la Tarea 1, las validaciones se mantuvieron.

Se mejoró la interfaz con mejor distribucion de datos y css apropiado, además cambié el flujo en el que el usuario se registra y además agrega su actividad, 
registrandose y agregando la actividad al mismo tiempo, enviando todos los datos de inmediato a la base de datos.

Para ejecutar el proyecto se debe correr el archivo `tarea2.sql` para crear la base de datos, luego instalar las dependencias con  `pip install -r requirements.txt`
y finalmente ejecutar `flask run`.

CREDENCIALES
- Host: localhost
- Puerto: 3306
- Base de datos: tarea2
- Usuario: cc5002
- Contraseña: programacionweb
