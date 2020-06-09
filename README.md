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

## Sobre el proyecto
Esta es una aplicación en la que puedes visualizar datos sobre las camas disponibles y medidas que han tomado diferentes países del mundo ante la pandemia del coronavirus.

## Funcionalidades
En la vista principal encontrarás dos cards, una con el promedio de camas disponibles en cierto país y en la segunda la última medida de prevención que ha tomado dicho país.
