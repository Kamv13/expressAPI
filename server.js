const express = require("express");
const app = express();
const PORT = 8000;

app.get("/api/productos", (req, res) => {
  const productos = [{ id: 1, nombre: "Laptop", precio: 1200 }];
  res.json(productos);
});

app.get("/api/usuarios", (req, res) => {
  const usuarios = [
    {
      id: 1,
      nombre: "Juan",
      email: "juan@gmail.com",
    },
  ];
  res.json(usuarios);
});

app.get('/api/categorias', (req, res) => {
  const categorias = [
  { id: 1, nombre: 'Electrónica' },
  { id: 2, nombre: 'Ropa' },
  { id: 3, nombre: 'Hogar' }
];
  res.json(categorias);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});








const pedidos = [
  { id: 1, usuario: "Juan", total: 500 },
  { id: 2, usuario: "Ana", total: 750 },
  { id: 3, usuario: "Carlos", total: 1200 }
];

app.get('/api/pedidos', (req, res) => {
  res.json(pedidos);
});










