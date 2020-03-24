# Saluda (objetos)

Escribe una función llamada saludar que reciba un objeto que representa una persona y retorne la frase como se muestra a continuación:

```javascript
saludar({ nombre: "Pedro", edad: 23 });
// "Hola Pedro, tienes 23 años"

saludar({ nombre: "Maria", edad: 35 });
// "Hola Maria, tienes 35 años"

saludar({ nombre: "Juan" });
// "Hola Juan"
```

El objeto siempre tendrá la llave nombre. La llave edad es opcional y cuando no está presente deberás omitir la parte ", tienes x años".
