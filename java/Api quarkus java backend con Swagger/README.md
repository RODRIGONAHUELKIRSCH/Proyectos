## Datos importantes

- **Rama principal es `develop`**: Tuvimos muchos errores a la hora de hacer merge con Eclipse y por esto, y dado que teníamos tiempo limitado, decidimos dejarlo todo en `develop`.
- **Endpoints listados**: Los endpoints listados son los que están en el `README`. Faltan endpoints como el de la receta, pero no nos alcanzó el tiempo; veremos si podemos sumarlo para la próxima entrega. Además, queremos mejorar la lógica y las relaciones de los turnos y las disponibilidades.

## Futuras mejoras
- **Endpoint de recetas**: Implementación del endpoint de recetas.
- **Mejoras en lógica**: Mejorar la lógica y las relaciones de los turnos y las disponibilidades.

## Endpoints

### /medicos

- **GET /medicos**
  - Consumes: application/json
  - Produces: application/json

- **POST /medicos**
  - Ejemplo de solicitud:
    ```json
    {
        "idEspecialidad": 1,
        "nombre": "Lautaro",
        "apellido": "Ortiz",
        "foto": "foto",
        "email": "lautaro@gmail.com",
        "password": "123"
    }
    ```
  - Consumes: application/json
  - Produces: application/json

- **PUT /medicos/{id}**
  - Consumes: application/json
  - Produces: application/json

- **DELETE /medicos/{id}**
  - Consumes: application/json
  - Produces: application/json

### /especialidades

- **GET /especialidades**
  - Consumes: application/json
  - Produces: application/json

- **POST /especialidades**
  - Ejemplo de solicitud:
    ```json
    {
        "areaEspecialidad": "Cardiologo"
    }
    ```
  - Consumes: application/json
  - Produces: application/json

- **DELETE /especialidades/{id}**
  - Consumes: application/json
  - Produces: application/json

### /paciente

- **POST /paciente**
  - Ejemplo de solicitud:
    ```json
    {
        "nombre": "Rodrigo",
        "apellido": "Kirsch",
        "email": "rodrigo@gmail.com",
        "password": "12345"
    }
    ```
  - Consumes: application/json
  - Produces: application/json

### /disponibilidades

- **POST /disponibilidades**
  - Ejemplo de solicitud:
    ```json
    {
        "idMedico": 1, 
        "fecha": "2024-06-30",
        "hora": "09:00"
    }
    ```
  - Consumes: application/json
  - Produces: application/json

### /turnos

- **POST /turnos**
  - Ejemplo de solicitud:
    ```json
    {
        "disponibilidad":1,
        "estado":"Disponible",
        "motivo":"gripe",
        "idpaciente": 1
    }
    ```
  - Consumes: application/json
  - Produces: application/json
    
