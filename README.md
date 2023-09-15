#House of Dev - Brandon Castillo

##Contenidos
- *Introducción*
- *Metodologías*
- *Tecnologías*
- *Spring 1*
- *Spring 2*
- *Spring 3*
- *Spring 4*
- *Observaciones*

##Introducción
House of Dev es un proyecto Integrador del Bootcamp de Plataforma 5, que busca integrar todos los conociminetos aprendidos durante el transcurso de la cursada. El proyecto consiste en crear una aplicación web destinada al alquiler y venta de inmuebles. Con la opcion de reservar citas con los propietarios, agregar propiedades a favoritos, buscar propiedades por ciudad, barrio, categoria, cantidad de habitaciones y tipo de propiedad, ya se local, terreno, casa, departamento, o ph. El usuario ademas podra agregar comentarios a la propiedades, mas una puntuación (5 rating) y ver las comentarios de los otros usuarios. Luego esta la opcion del modo Admin, donde los determinados usuarios tienen el poder de crear propiedades, modificar propiedades, elimnar usuarios, admitear usuarios, eliminar citas, elimnar comentarios, ver todos los usuarios y todas las citas.

##Metodologias 
Para este proyecto utilice la metodologia de Scrumm, donde cada semana designaba unas tarjetas a realizar durante esa semana, y las iba colocando en la seccion de completas, hacia entre 2 y 3 tarjetas por día. También tuve que hacer un reporte todas las semanas, más hacer una video-demo donde explica en que habia trabajado esa semana y mostrarlo. 

##Tecnolgías
Para este proyecto decidi separar el back y el front en dos repos de github para una posterior deploy. Para el back use nodejs, para crear el server expressjs, para crear los modelos y comunicarme con mi base de datos sequelize, y la base de datos que use fue postgres sql. Primero, para probar todas mis rutas y sus metodos utilicé el programa Insomnia y para visualizar mejor mi base de datos utilicé Postico. En el tema de seguridad utilice bcrypt para encriptar de manera segura las contraseñas, generar una salt unica, y mezclarlas con una palabra secreta. Para guardar mis configuraciones de usuario del lado del servidor utilce Jason Web Token, para poder mantenerla sesión, guardando datos en las cookies del navegador. Para el front utilice la biblioteca de React para realizar la Interface de Usuario, para los estilos use el compilador de Css, Sass para un mejor manejo de los estilos y su organización. Para hacer pedidos a mi API utilce la biblioteca Axios, React-Router-Dom para el manejo de rutas y navegación, Redux para controlar las variables globales, la biblioteca Animate para los mensajes de exito o de warning y react-datepicker para agendar las citas. Tambien utilice los modelos del figma para darme una idea como hacer la interface.

##Spring 1
El spring 1 consistia de realizar toda las rutas de mi sitio web. Para crear/modificar/ver usuario/propiedades/citas/favoritos/reviews.  Las fui realizacion con Insomnia un programa para hacer pedidos a mi API. Luego de probar todas mis rutas y sus metodos, pude continuar. Tambien realice los modelos de todas las tablas, incluyendo sus respectivas validaciones para cada campo. Ya sean de longitud de caracteres o tipos de datos. Luego de verificar creando filas en todas mis tablas con Postico, continue con mi Spring 2.

##Spring 2
Para el spring dos me encargue de hacer las vistas iguales al figma, realice las vistas del Login y el Register, tambien le di funcionalidad a sus inputs para poder guardar los datos ingresados, modifique su estilo y el de los botones para una mejor lectura del proyecto. Importe las imagenes y los detalle del figma acomodandolos a mi proyecto. Importe la biblioteca react-alerts para mostrar los mensajes de comunicacion con el usuario de una manera mas detallada y agradable. Utilice el Custom Hook useInput para guardar y modificar mis inputs de manera mas rapida y modifique este mismo para que pueda tener un valor inicial.

##Spring 3
Para el Spring 3 se trabajo vistas de propiedades, la opcion de admin de crear propiedades, de ver todos los usuarios, de admitearlos o eliminarlos, de modificar o eliminar propiedades. De mostrar los favoritos y elimnarlos en directo.


##Spring 4
Realize las autorizaciones google para poder ingresar con una guenta de gmail, las configuraciones y las rutas para enviar un mail luego de reservar una cita, termine las vistas para crear reviews y poder verlas, las vistas que maneja el admin para ver todas las citas y eliminar las que el quiera. Realice la logica de los filtos, ya sea por input, select u ordenamiento. 

##Observaciones
Muy buen trabajo, muy completo. Salió todo bien no detecte ningún error, quedo bien redondo.

