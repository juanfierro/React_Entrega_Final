
### Ecommerce MiBouquet

- Ver un listado de productos.
- Agregar productos al carrito de compras.
- Vaciar el carrito.
- Eliminar productos del carrito.
- Generar una orden de compra.

El proyecto está desarrollado utilizando **React** y **Firebase**.

## Tecnologías y librerías utilizadas

- **React** (v18.3.1): Framework de JavaScript para construir interfaces de usuario.
- **Firebase** (v11.2.0): Plataforma para backend como servicio.
- **React Router DOM** (v7.1.1): Para el manejo de rutas en la aplicación.
- **Bulma** (v1.0.2): Framework CSS para diseño.
- **Font Awesome**: Para íconos.
  - `@fortawesome/fontawesome-svg-core` (v6.7.1)
  - `@fortawesome/free-solid-svg-icons` (v6.7.1)
  - `@fortawesome/react-fontawesome` (v0.2.2)
- **Testing Libraries**: Para pruebas unitarias.
  - `@testing-library/react` (v13.4.0)
  - `@testing-library/user-event` (v13.5.0)
  - `@testing-library/jest-dom` (v5.17.0)
- **Web Vitals** (v2.1.4): Para medir el rendimiento de la aplicación.


### 1. Clonar el repositorio
```bash
git clone https://github.com/juanfierro/React_Entrega_Final.git
cd React_Entrega_Fina
```

### 2. Instalar dependencias
Ejecuta el siguiente comando para instalar todas las dependencias necesarias:
```bash
npm install
```

### 3. Configurar Firebase
Crea un archivo `.env` en la raíz del proyecto y añade tus credenciales de Firebase:
En mi caso, pasare por medio de la descripcion de la entrega mis credenciales de firebase para
el archivo .env
```env
REACT_APP_apiKey=tu-api-key
REACT_APP_authDomain=tu-auth-domain
REACT_APP_projectId=tu-project-id
REACT_APP_storageBucket=tu-storage-bucket
REACT_APP_messagingSenderId=tu-messaging-sender-id
REACT_APP_appId=1:tu-app-id
```

### 4. Ejecutar el proyecto
Para iniciar la aplicación en modo desarrollo:
```bash
npm start
```
Esto abrirá el proyecto en tu navegador en [http://localhost:3000](http://localhost:3000).

## Navegación por el programa

### Menú de navegación
El menú de navegación consta de los siguientes botones:

- **Inicio**: Va a la página inicial donde se listan los productos. Aquí se muestra:
  - Imagen del producto.
  - Nombre del producto.
  - Descripción.
  - Precio.
  - Stock disponible.
  - Botón "Ver detalle".
- **Ramos**: Lista todos los artículos que tienen la categoría "ramos".
- **Coronas**: Lista todos los artículos que tienen la categoría "coronas".
- **Flores de solapa**: Lista todos los artículos que tienen la categoría "flores".


### Detalle de producto
Se puede acceder al detalle de un producto desde la página **Inicio** o desde alguna categoría específica, haciendo clic en el botón "Ver detalle".

En esta vista se muestra:
- Imagen del producto.
- Nombre del producto.
- Categoría.
- Descripción.
- Precio.

Desde aquí, puedes agregar productos al carrito. El contador de productos está limitado al stock disponible. Si no hay stock, el botón "Agregar al carrito" estará deshabilitado y se mostrará el mensaje "Sin stock".


### Agregar productos al carrito
Una vez que se visualiza el detalle del producto y se eligen las cantidades deseadas, puedes hacer clic en el botón "Agregar al carrito". Al hacerlo, se muestra:
- Nombre del producto.
- Categoría.
- Descripción.
- Precio unitario.
- Cantidad seleccionada.
- Importe total a abonar.
- Botón "Terminar compra".

Además, en la barra de navegación, un ícono de carrito de compras muestra la cantidad de productos que se han agregado.

### Procesar la compra
Al cargar productos al carrito, puedes hacer clic en el botón "Terminar compra". Esto despliega una ventana con los siguientes detalles:
- Productos agregados al carrito (nombre, precio, cantidad, subtotal).
- Opciones disponibles:
  - Eliminar productos del carrito.
  - Limpiar el carrito.
  - Hacer el checkout de los productos comprados.
- Total a pagar.

### Generar orden de compra
Al hacer clic en el botón "Checkout", se abre una nueva ventana donde debes agregar los datos del comprador:
- Nombre.
- Teléfono.
- Email.

Después, puedes hacer clic en:
- **Submit**: Para terminar la compra y generar la orden (se muestra el ID de la compra).
- **Cancelar**: Para borrar los datos y volver a cargarlos.

## Scripts disponibles

En este proyecto puedes ejecutar los siguientes comandos:

- `npm start`: Inicia el servidor de desarrollo.
- `npm test`: Corre las pruebas configuradas.
- `npm run build`: Crea una versión de producción del proyecto.

## Notas adicionales

- Asegúrate de tener tus credenciales de Firebase configuradas en el archivo `.env`.
- El proyecto incluye diseño responsivo gracias a **Bulma**.
- Puedes personalizar los íconos utilizando **Font Awesome**.