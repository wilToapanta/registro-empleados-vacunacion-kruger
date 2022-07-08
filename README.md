#Sistema para el registro de vacunación de empleados- KRUGER 

Para llevar a cabo el desarrollo del proyecto solicitado, se utilizó las siguientes herramientas, angular 14 para el frotend , Spring Boot 2.7.1 para backend ,  jdk 17 para la ejecución del backend y para base de datos postgres 14.
# ¡NOTA!
En caso de presentar problemas en la implementación de la aplicación web, comunicarse a los siguientes contactos.
**Número de celular**: 0992532867
**Correro:** wilmer_topanta@hotmail.com

------------
# Tareas completadas

    Modulo Administrador
    Agregar Empleado
    Listar empleado
    Eliminar Empleado
    Dar de alta al empleado(Genera usuario y contraseña)

# Cómo descargar la aplicación
En el siguiente [link (descarga)](https://github.com/wilToapanta/registro-empleados-vacunacion-kruger.git "link de descarga")  puede descargar la aplicación.

    git clone https://github.com/wilToapanta/registro-empleados-vacunacion-kruger.git

------------


# Antes de Correr la Aplicación
Previo a la ejecución de la aplicación, debe tener instalado Node.js, angular 14,  jdk 17, IntelliJ IDEA y postgres 14.

------------

# Configuración de la conexión a la base 
Para la configuración de la conexión a la base de datos se debe acceder al  proyecto backend, donde se encuentra la ruta:

    src/main/resources/application.properties

Dentro el fichero application.properties, se debe configurar el nombre de la base de datos, puerto y la versión instalada de postgres. 

------------

# Restauración de la base de datos
Se debe restaurar el backup de la base de datos (“bd_vacunacion”), el cual se encuentar dentro de la carpeta inventario-vacunacion.

------------

# Configuración de CrossOrigin
Para que el frontend consuma los servicios del backend, es necesario cambiar el CrossOrigin del controlador del EmployeeController y UserControler, el cual se encuentra dentro de la ruta src/main/java/ com.empleadovacunacion.inventario /controller, el CrossOrigin debe tener la dirección donde se está ejecuntado el frotend. 

    @CrossOrigin (origins = "http://localhost:4200")

------------

# Configuración de la url para el consumo de servicios
Para consumir los servicios dentro del frotend, es necesario configurar la url del backend, el cual se encuentra en el directorio frontEnd-inventario/src/app/services/ employe.service.ts. En el employe.service.ts, se debe configurar la dirección y el puerto en la cual se encuentra ejecutando el backend, esta configuración se encuentra en la variable url.


    http://localhost:8080

------------

# Ejecución de aplicación
Para utilizar la aplicación se debe ejecutar tanto como el frontend y el backend. Una vez dentro del proyecto frontend, debe utilizar el comando ng serve --open, mientras tanto, una vez abierto el proyecto de backend en el editor IntelliJ IDEA, buscar en archivo InventarioApplication en el directorio src/main/java/com.empleadovacunacion.inventario, el cual debe ejecutarlo.

------------

# Acceso al sistema
Para acceder al modulo de administrador, el usuario debe iniciar sesión con las siguientes credenciales:
**Usuario:** wil
**Password:**123
