# Buscando el Producto

Escribe una función buscarProducto que reciba un arreglo de objetos y un número. La función deberá buscar el número dentro de cada objeto (en la llave id) y retornar el objeto encontrado.

Si no encuentra un objeto con ese id deberá retornar null.

```javascript
buscarProducto([{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }], 1);
// { id: 1, nombre: "A" }
buscarProducto([{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }], 566);
// null
```
