const express = require("express");
const app = express();
const PORT = 8000;

app.get("/api/productos", (req, res) => {
  const productos = [{ id: 1, nombre: "Laptop", precio: 1200 }];
  res.json(productos);
});

app.get("/api/usuarios",(req, res) => {
  const usuarios = [{
    
  }]
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
