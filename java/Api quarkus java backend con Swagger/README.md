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
    
