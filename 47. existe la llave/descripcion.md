# Existe la llave

Escribe una función existeLlave que reciba un objeto y un string. La función deberá retornar true si el string es una llave del objeto, false de lo contrario:

```javascript
existeLlave({ name: "Alejo" }, "name"); // true
existeLlave({ name: "Alejo" }, "age"); // false
existeLlave({}, "peso"); // false
existeLlave({ name: "Alejo", peso: 67 }, "peso"); // true
```
