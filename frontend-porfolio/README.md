# FrontendPorfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Add Bootstrap

npm install bootstrap

    "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.scss"
    ],
    "scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/@popperjs/core/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]

## Add FontAwesone

npm install @fortawesome/angular-fontawesome
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-brands-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-solid-svg-icons

en app.module.ts 

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowDown as faArrowDown } from '@fortawesome/free-solid-svg-icons';

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  export class AppModule {
  constructor (library: FaIconLibrary) {
    library.addIcons(faArrowDown);
  }
}

ejemplo de uso:
<fa-icon [icon]="['fas','arrow-down']"></fa-icon>


## Para actualizar el proyecto luego de hacer deploy:
- Cada cambio en el BACK:
1) Abrir el CMD como administrador, en la carpeta del back del proyecto.
2) git add .
3) git commit -m "mensaje"
4) git push heroku main (o máster, el que usaron al principio)
  (ver en que rama estoy)
  si no es la main git push heroku rama:main

- Cada cambio en el FRONT:
1) ng build o ng build --configuration=productiond
2) firebase deploy 


#ADD tags
git tag v0.0.1 -m "Primera versión"
git push origin v1.0.1 / git push --tags
