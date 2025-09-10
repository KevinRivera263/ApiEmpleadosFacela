//Imports necesarios
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/DataEmpleados.json');

function leerArchivo() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}
function guardarArchivo(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Crear
function crear(emp) {
  const empleados = leerArchivo();
  const nuevo = { id: Date.now(), ...emp };
  empleados.push(nuevo);
  guardarArchivo(empleados);
  return nuevo;
}

// Listar con filtros
function listar({ edadMin, edadMax, puesto, departamento }) {
  let empleados = leerArchivo();
  if (edadMin) empleados = empleados.filter(e => e.edad >= parseInt(edadMin));
  if (edadMax) empleados = empleados.filter(e => e.edad <= parseInt(edadMax));
  if (puesto) empleados = empleados.filter(e => e.puesto === puesto);
  if (departamento) empleados = empleados.filter(e => e.departamento === departamento);
  return empleados;
}

// Mayores de 30
function listarMayores() {
  return leerArchivo().filter(e => e.edad > 30);
}

// Actualizar
function actualizar(id, cambios) {
  const empleados = leerArchivo();
  const idx = empleados.findIndex(e => e.id === id);
  //val
  if (idx === -1) throw new Error("Empleado no encontrado");

  empleados[idx] = { ...empleados[idx], ...cambios, id };
  guardarArchivo(empleados);
  return empleados[idx];
}

// Eliminar
function eliminar(id) {
  let empleados = leerArchivo();
  const idx = empleados.findIndex(e => e.id === id);
  if (idx === -1) throw new Error("Empleado no encontrado");
  empleados.splice(idx, 1);
  guardarArchivo(empleados);
}

// Estadísticas
function estadisticas() {
  const empleados = leerArchivo();
  const total = empleados.length;
  const promedioEdad = empleados.reduce((a, e) => a + e.edad, 0) / total;

  const porPuesto = {};
  const porDepto = {};
  empleados.forEach(e => {
    porPuesto[e.puesto] = (porPuesto[e.puesto] || 0) + 1;
    porDepto[e.departamento] = (porDepto[e.departamento] || 0) + 1;
  });

  return { total, promedioEdad, porPuesto, porDepto };
}

module.exports = { crear, listar, listarMayores, actualizar, eliminar, estadisticas };
