# Giffy
Web que usa la API de Giphy para recolectar gifs y mostrarlos. En la web se pueden ver las tendencias, filtrar y buscar gifs. 

## Tecnologías/Librerias
- Javascript
- HTML/CSS
- ReactJS [https://es.reactjs.org/]
- react-hook-form [https://react-hook-form.com/]
- Lodash [https://lodash.com/]
- Formik [https://formik.org/]

## Estructura
El proyecto esta dividido en Componentes, Context, Hooks, Pages y Services.

### Components
Carpeta donde estan todos los componentes que componen la app. Está distribuido de la mejor forma posible para que sea mantenible y que cada componente se gestione de la manera más autónoma posible.

### Context
Los contextos usados en la aplicación se encuentran en esta carpeta. Hay dos contextos, el que gestiona los gifs y el que gestiona los estados de las funciones relacionadas con el usuario, como los favoritos y el token del login.

### Hooks
Hooks personalizados hechos para simplificar el uso de algunas funcionalidades y que la aplicación sea mas escalable y mantenible.

### Pages
En esta carpeta están las paginas que muestran los componentes. Los estilos aplicados se encuentran mayotitariamente en los componentes, para tenerlos mas controlados.

### Services
Archivos para la conexión con la API o backend.
