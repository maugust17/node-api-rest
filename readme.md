# Configuración de variables de entorno

Para ejecutar este proyecto, es necesario crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```
FIREBASE_API_KEY=TU_API_KEY
FIREBASE_AUTH_DOMAIN=TU_AUTH_DOMAIN
FIREBASE_PROJECT_ID=TU_PROJECT_ID
FIREBASE_STORAGE_BUCKET=TU_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID=TU_MESSAGING_SENDER_ID
FIREBASE_APP_ID=TU_APP_ID
FIREBASE_MEASUREMENT_ID=TU_MEASUREMENT_ID
JWT_SECRET_KEY=CLAVE_PARA_ENCRIPTAR
```

Reemplaza los valores de ejemplo por los datos correspondientes a tu proyecto de Firebase.

# Ejecutar el proyecto

Una vez configurado el entorno de trabajo es posible ejecutar la aplicaciòn de diferentes formas

NPM
- Con ```npm run start``` o ```npm run debug```

Docker Compose
 - Es necesario crear la imagen con el comando ```docker build -t node-api-rest .```
 - Luego hay que ejecutar ```docker compose up --build```
 - Para detener la aplicacion se ejecuta el comando ```docker compose up --build```

Makefile
- Para simplificar los comandos anteriores existe el archivo ```makefile```.
- Los comandos son ```make run```, ```make docker-build```, ```make docker-run```, ```make docker-down```

# Usuario por defecto

Por defecto el sistema configura un usuario en la db para usar el sistema

```
{
    "email": "admin@example.com",
    "password": "123456"
}
```

# Pruebas con Postman

Dentro de la carpeta ```./postman``` se encuentran archivos para importar y realizar las pruebas. Està la colecciòn y los entornos (local, vercel).

# Endpoints

- POST /auth/register
```
{
    "email": "admin2@example.com",
    "password": "123456"
}
```

- POST /auth/login
```
{
    "email": "admin2@example.com",
    "password": "123456"
}
```

- POST /api/products
```
{
    "name" : "Nombre de producto",
    "price" : "1234.22",
    "sku": "1233123",
    "description" : "Descripción",
    "stock": 100,
    "category": "Categoria"
}
```

- GET /api/products

- GET /api/products/:id

- PUT /api/products/:id
```
{
    "name" : "Nombre de producto",
    "price" : "1234.22",
    "sku": "1233123",
    "description" : "Descripción",
    "stock": 150,
    "category": "Categoria"
}
```

- DELETE /api/products/:id
