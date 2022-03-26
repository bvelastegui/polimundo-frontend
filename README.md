# Requerimientos
- Docker

# Instrucciones

1. Descargar la imagen
    ```bash
    docker pull bvelastegui/polimundo-frontend  
    ```

2. Crear el contenedor
    ```bash
    docker run --name some-nginx -d -p 8090:80 bvelastegui/polimundo-frontend 
    ```
3. Acceder a [http://localhost:8090]()   

# Tareas del reto
- [x] Vas a utilizar Vue.js v2.
- [x] Vas a usar Vite para levantar un ambiente prototipo.
- [x] Integra BootstrapVue ó Vuetify para usarlo de framework de estilos de UI.

Usando los elementos de del framework anterior, crea las siguientes páginas:
- [x] Una página donde haya un buscador de tickets aereos, con los siguientes campos: Ciudad de origen, ciudad de destino, fecha de salida, fecha de retorno.
- [x] Una página donde se muestren resultados de búsqueda de tickets aéreos, cada tarjeta de resultado debería tener: precio, aerolínea, número de escalas, duración del vuelo.
- [x] Debes usar vue router y vuex.
- [x] Los datos deben estar quemados en el store, no pierdas tiempo en esto, pueden ser datos tipo lorem ipsum. No se necesita implementar la funcionalidad de búsqueda.
- [x] Es muy importante que sigas los estándares y estilo de código presentado en la documentación de Vue.js.

# Puntos extras:
- [x] Te daremos puntos extras si realizas el challenge a través de docker, es decir, que las herramientas de desarrollo se encuentren en el docker, NO en tú máquina (php, node, etc... NO nos referimos al IDE). Puedes usar docker directo, o cualquier herramienta que use docker como núcleo.
