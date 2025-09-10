//Imports
const express = require('express'); //Framework para la api rest
const fs = require('fs'); //Permite la lectura y escritura en nuestro DataEmpleados
const path = require('path') // Permite la creacion de rutas de archivos en multiples SO
const empleadosRoutes = require('./routes/empleados.routes'); //Rutas de endpoint
const { getEstadisticas } = require('./controllers/empleados.controller'); //Acceso al controlador de estadistica
const logger = require('./middleware/logger'); //Logs de peticiones
const app = express(); //Creamos la aplicacion express

app.use(express.json()); //Habilitamos la lectura de JSON request
app.use(logger);

//Creamos y obtenemos la ruta de nuestro DataEmpleados.json
const dataPath = path.join(__dirname,'data','DataEmpleados.json');


//GET TEST - Listar empleados
app.get('/empleadosListar', (re, res) => {
    const data = fs.readFileSync(dataPath,'utf8');
    const empleados = JSON.parse(data);
    res.json(empleados);
})

// Registro de rutas
app.use('/empleados', empleadosRoutes);

//Endpoint de estadistica
app.get('/estadisticas',getEstadisticas);


// Prueba rapida para validar el estado del server
app.get('/', (req, res) => {
  res.send('API Funcionando');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);

});
