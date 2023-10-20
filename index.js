const express = require ('express');
const app = express();
const PORT = 3000;
const middlewares = require('./middlewares');

// Lista de tareas como objetos
const tareas = [
  { id: 1, descripcion: 'Hacer la compra', completado: false },
  { id: 2, descripcion: 'Lavar el coche', completado: true },
  { id: 3, descripcion: 'Estudiar para el examen', completado: false }
];

// Ruta para obtener la lista de tareas en formato JSON
app.get('/tareas', (req, res) => {
  res.json(tareas);
});

app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});

app.use(express.json());
// Middleware de nivel de aplicación para validar métodos HTTP
app.use(middlewares.validarMetodosHTTP);
// Importar el router list-view
const listViewRouter = require('./list-view-router');

// Usar el router en una ruta específica
app.use('/listar', listViewRouter);

// se ingresa con http://localhost:3000/listar/incompletas o http://localhost:3000/listar/completas

// Importar el router list-edit
const listEditRouter = require('./list-edit-router');

// Usar el router en rutas específicas
app.use('/editar', listEditRouter);