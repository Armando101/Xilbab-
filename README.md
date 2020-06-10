# Xilbaba

Este proyecto fue hecho con la version 9.0.6 de Angular

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Producción

Para ejecutar mandar este proyecto en producción con GitHub pages seguir los siguientes pasos:

1. Instalar __angular-cli-ghpages__
```
npm i angular-cli-ghpages
```

2. Agregar angular-cli-ghpages al proyecto
```
ng add angular-cli-ghpages
```

3. Hacer el deploy de la siguiente manera
```
ng deploy --repo=git@github.com:Armando101/Xilbab-.git --base-href=https://armando101.github.io/Xilbab-/home
```

## Proyecto en producción
Este proyecto se encuentra disponible en la siguiente dirección: https://armando101.github.io/Xilbab-/

## Sobre el proyecto
Esta es una aplicación en la que puedes visualizar datos sobre las camas disponibles y medidas que han tomado diferentes países del mundo ante la pandemia del coronavirus.

## Funcionalidades

### Cards
En la vista principal encontrarás dos cards, una con el promedio de camas disponibles en cierto país y en la segunda la última medida de prevención que ha tomado dicho país.

![Cards](https://raw.githubusercontent.com/Armando101/Xilbab-/master/src/assets/screenshots/SS1.png)

### Buscador
En el header cuentas con un buscador, ingresa el país de tu interés para buscar más información, si ingresas un país que no existe te arrojará un mensaje de país no encontrado.

![Buscador](https://raw.githubusercontent.com/Armando101/Xilbab-/master/src/assets/screenshots/SS2.png)

### Más detalles

A la izquierda de cada país encontrarás un botón, al hacer click se desplegará un overlay que te mostrará más datos de dicho país.

En la sección de medidas hay otro botón para mostrar todas las medidas de prevención tomadoas por dicho país ya que por defecto sólo muestra la primera.

![overlay](https://github.com/Armando101/Xilbab-/blob/master/src/assets/screenshots/SS3.png)

#### Responsive
En la vista en dispositivos móviles se muestran la información de los países de manera horizontal, el botón de más detalles se muestra en la parte superior de cada país y de igual manera puedes buscar el país de tu elección.

![responsive cards](https://github.com/Armando101/Xilbab-/blob/master/src/assets/screenshots/SS4.png)

### Mapa
En esta vista tenemos un mapa usando la API de google maps. Se muestra un ícono por cada país, puedes seleccionar el país de tu elección para ver la información básica. Los detalles extras se muestran en el panel lateral izquierdo.

![Mapa](https://github.com/Armando101/Xilbab-/blob/master/src/assets/screenshots/SS5.png)

![Mapa Detalles](https://github.com/Armando101/Xilbab-/blob/master/src/assets/screenshots/SS7.png)

#### Responsive
En la vista para dispositivos móviles se muestra el mapa y un botón en la parte superrior izquierda. Al presionar el botón se muestran los detalles extras.

![MapaResponsive](https://github.com/Armando101/Xilbab-/blob/master/src/assets/screenshots/SS6.png)

![MapaResponsiveDetalles](https://github.com/Armando101/Xilbab-/blob/master/src/assets/screenshots/SS8.png)