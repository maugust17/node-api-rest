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
```

Reemplaza los valores de ejemplo por los datos correspondientes a tu proyecto de Firebase.

# Usuario por defecto

Por defecto el sistema configura un usuario en la db para usar el sistema

```
{
    "email": "admin@example.com",
    "password": "123456"
}
```