//Imports necesarios
const express = require('express'); 
const router = express.Router();

const {
  crearEmpleado,
  listarEmpleados,
  listarMayores,
  actualizarEmpleado,
  eliminarEmpleado
} = require('../controllers/empleados.controller');

router.post('/', crearEmpleado);
router.get('/', listarEmpleados);
router.get('/mayores', listarMayores);
router.put('/:id', actualizarEmpleado);
router.delete('/:id', eliminarEmpleado);

module.exports = router;
