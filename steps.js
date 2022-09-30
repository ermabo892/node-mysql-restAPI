//? inicializa proyecto con package.json 
//* npm init -y

//? Instalacion de modulos
// * npm i express 
// * npm i nodemon -D
// * npm i mysql2

//? Instalacion de extensiones
// * thunder client .... para simular peticiones put post y delete


//todo para ejecutar nodemon
//x`x    colocar en package.json un script de:
//* "dev": "nodemon index.js" y en consola npm run dev

//? Remplazar el require por el IMPORT
//* ingresar "type": "module" en el package.json 

//? crear servidor

//!enrutamiento o endpoint
//* CRUD de la pagina employees

//? coneccion a base de datos
//* antes se crea la base de datos
//* se crea un archivo para la coneccion db.js 
//* se importa sql2 con promise import {createPool} from "mysql2/promise";

//? rutas
//* se crea carpeta para colocar unicamente las rutas y a su vez todas pasan dentro de src
//* se reconfigura las rutas donde sea necesario, nodemon y pool del index.js
// * se pasan las rutas a su propia carpeta y se agrega el modulio de Routes de express
// * se cambias los app de las rutas por routes y se exportan
// * se crea un archivo para alojar las funciones de las rutas para tener el codigo mas ordenado
// * concepto que se llama controladore

//! Hacer POST a la base de datos
// * se necesita importar el modulo pool para hacer el query
// * se activa app.use(express.json()) para que express pueda leer objetos json 
// * los valores del json se toman con req.body el cual sacaremos su valores de nombre y salario
//todo */ const {name, salary} = req.body esta respuesta se pasa por sql 
//todo INSERT INTO employee (name, salary) VALUES (?, ?)", [name, salary]
//? se guarda en una lista rows para mostar solo las filas [rows]
// * dato curioso: si quieres cambiar la ruta por ejemplo /api/employee
// * lo puedes hacer cambiando uno en uno las rutas o
// * en el app.use("/api", employeesRoutes) para que cambien todas al tiempo

//? delete se hace lo mismo que el getEmployeeByID

// ? UPDATE O ACTUALIZACION
// * se requiere el req.body y el req.params.id
// * se coloca el params en la ruta de put
// * se crea una condicional para obtener un mensaje si no existe el id buscado
// * se manda un status para notificar codigo 404
// * se configura para que la respuesta sea el dato actualizado
// * se escoge el index 0 para que solo envie un objeto y no el una lista de objetos     
//! para actualizar solo un dato de objeto
// * los datos vacios por defecto se llenan con null
// * asi se se cambia el metodo put a path por estardar REST
// * para evitar el valor null se agrega la palabra clave de sql IFNULL()
// * se agrega quitando el signo ? en los valores name y salary
//? IFNULL(?, name)

// ? Manejo de errores
// * se usa try catch para el manejo de errores
// * se utiliza en las peticiones hacia la base de datos
// * se prueba con throw new Error()

// ? Ruta no encontrada
// * se usa un midleware app.use((req, res, next) =>{}
//! INVESTIGAR MAS

// ? Variables de entorno
// *se instala el modulo npm i dotenv
// * se crea una archivo con extension .env
// *se crea un arcchivo config.js donde se importa el modulo dotenv
// * se importa la funcion config y se ejecuta para leer variables de entorno
// *se importa el archiv config en el index.js
// * en config se crean variables que guardne las variables de entorno
// * ejemplo const PORT = process.env.PORT || 3000
// * se exportan las variables
// * en index.js se importan esas variables desde config.js
// * se importa config y sus variables de nuevo pero el db.js

// ? recomendacion
//* se pasa la aplicacion de index.js a app.js y se exporta como app
//* en index.js se importa app y el port desde config.js

// ? Despliegue
// * git ignore para ignorar el .env y node_modules
// todo git y github
// * git init
// * git add .
// * git commit -m "first commit"
// * crear nuevo repositorio en github 
// * se copia la linea del git remote add origin y se pega en la terminal
// * git push origin master 
// * refrescar github
// todo git y github
// * crear el script start en el package json start : "src/index.js"
// * se vuelve a subir historial de git
// * https://railway.app/ para despliegue