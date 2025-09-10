# API Empleados Facela

API REST desarrollada en **Node.js + Express** Nota: se desarrollo con Node.js version v20.19.4 
La API gestiona empleados almacenados en el archivo de DataEmpleados.json proporcionado
---

## Instalación...

Clonar el repositorio e instala dependencias:

git clone https://github.com/KevinRivera263/ApiEmpleadosFacela.git
cd ApiEmpleadosFacela
npm install

---

# Estructura del Proyecto

ApiEmpleados/
├── controllers/
│   └── empleados.controller.js
├── data/
│   └── DataEmpleados.json
├── middleware/
│   └── logger.js
├── node_modules/   # (ignorado en GitHub por .gitignore)
├── routes/
│   └── empleados.routes.js
├── services/
│   └── empleados.service.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
 ---
##  Ejecución

Modo desarrollo (con nodemon):
npm run dev

Modo producción:
npm start

El servidor quedará disponible en:  
http://localhost:3000

---

##  Endpoints principales (cURL incluido para su uso en Postman)

### Listar empleados
curl -X GET http://localhost:3000/empleados

### Empleados mayores de 30
curl -X GET http://localhost:3000/empleados/mayores

### Crear empleado
curl -X POST http://localhost:3000/empleados \
  -H "Content-Type: application/json" \
  -d '{ "nombre": "Kevin", "edad": 29, "puesto": "Dev", "departamento": "IT" }'

### Actualizar empleado
curl -X PUT http://localhost:3000/empleados/1 \
  -H "Content-Type: application/json" \
  -d '{ "edad": 30, "puesto": "Senior Dev" }'

### Eliminar empleado
curl -X DELETE http://localhost:3000/empleados/1

### Estadísticas
curl -X GET http://localhost:3000/estadisticas

---

##  Notas
- Los datos iniciales están en data/DataEmpleados.json
- Cada petición queda registrada en consola con el middleware logger.
- 
