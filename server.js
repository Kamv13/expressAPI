const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});







const categorias = [
  { id: 1, nombre: 'Electrónica' },
  { id: 2, nombre: 'Ropa' },
  { id: 3, nombre: 'Hogar' }
];
app.get('/api/categorias', (req, res) => {
  res.json(categorias);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});