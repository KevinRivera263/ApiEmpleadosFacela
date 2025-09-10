const empleadosService = require('../services/empleados.service');

// POST /empleados - creacion de nuevos empleados
function crearEmpleado(req, res) {
  const { nombre, edad, puesto, departamento } = req.body;
  if (!nombre || nombre.length < 3) return res.status(400).json({ error: "Nombre inválido" });
  if (!edad || edad <= 0) return res.status(400).json({ error: "Edad inválida" });

  const nuevo = empleadosService.crear({ nombre, edad, puesto, departamento });
  res.status(201).json(nuevo);
}

// GET /empleados
function listarEmpleados(req, res) {
  const { edadMin, edadMax, puesto, departamento } = req.query;
  const lista = empleadosService.listar({ edadMin, edadMax, puesto, departamento });
  res.json(lista);
}

// GET /empleados/mayores - Empleados mayores
function listarMayores(req, res) {
  const lista = empleadosService.listarMayores();
  res.json(lista);
}

// PUT /empleados/:id - actualizaremos por id
function actualizarEmpleado(req, res) {
  const { id } = req.params;
  try {
    const actualizado = empleadosService.actualizar(parseInt(id), req.body);
    res.json(actualizado);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
}

// DELETE /empleados/:id - eliminaremos por id
function eliminarEmpleado(req, res) {
  const { id } = req.params;
  try {
    empleadosService.eliminar(parseInt(id));
    res.status(204).end();
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
}

// GET /estadisticas
function getEstadisticas(req, res) {
  const stats = empleadosService.estadisticas();
  res.json(stats);
}

module.exports = {
  crearEmpleado,
  listarEmpleados,
  listarMayores,
  actualizarEmpleado,
  eliminarEmpleado,
  getEstadisticas
};
