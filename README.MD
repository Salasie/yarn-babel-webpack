# Paso a paso

## 1. Crear carpeta
```sh
$ mkdir yarn-babel-webpack
```
## 2. Entrar en carpeta
```sh
$ cd yarn-babel-webpack
```
## 3. Crear package.json
```sh
$ cd yarn init
```
## 4. Instalar dependencias (modo desarrollo)
```sh
$ yarn add -D babel-core babel-loader babel-preset-es2016 webpack webpack-dev-server http-server
```
#### - 4.1 Informacion sobre dependencias
`babel-core`: libreria core de babel
`babel-loader`: libreria encargada de cargar "presets" de babel (puede ser es6, react jsx, etc)
`babel-preset-es2015`: libreria que tiene los cambios de es6 a es5
`webpack`: Empaquetador de modulos con loaders y pluguins (ver post)
`webpack-dev-server`: Servidor web embebido para ambientes de desarrollo.
`http-server`: dependencia de webpack-dev-server

## 5 Configuracion basica del proyecto

#### - 5.1 creo carpeta **src**, en la cual estaran las fuentes del proyecto
```sh
$ mkdir src
```
#### - 5.2 creo carpeta **dist**, En la cual se generara el bundle del proyecto
```sh
$ mkdir dist
```

#### - 5.3 creo *index.html* dentro de **src** con la siguiente info:

    <html>
      <head>
        <meta charset="utf-8">
        <title>yarn, webpack y babel</title>
      </head>
      <body>
        <div id="app" />
        <script src="app.js" type="text/javascript"></script>
      </body>
    </html>

#### - 5.4 Crear index.js dentro de "src" con el siguiente codigo de ES6:
    // Arrow Functions ES6
    let test = x => {
        console.log(x);
    }
    // Promises ES6
    let promiseFunction = valor => {
        return new Promise(
            (resolve, reject) => {
                if(valor){
                    resolve("Hola Mundo");
                }else{
                    reject("Error");
                }
            }
        );
    }
    //Call Promises ES6
    promiseFunction(false).then(
        x => {
            test(x);
        }
    ).catch(
        y => {
            test(y);
        }
    );


## 6 configuro webpack (utilizo la version 2 de webpack)

#### - 6.1 Creo archivo *webpack.config.js* en la carpeta **yarn-babel-webpack**, para mas informacion del archivo ver el post (Hola Mundo webpack)

    'use strict';
    const path = require('path');

    // Path build
    var PATH_BUILD = path.resolve(__dirname, 'dist');

    // Path src
    var PATH_SRC = path.resolve(__dirname, 'src');

    var config = {
      entry: PATH_SRC + '/index.js',
      output: {
        path: PATH_BUILD,
        filename:'app.js'
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            include: PATH_SRC,
            use: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      }
    };

    module.exports = config;


## 7 Configuro babel

#### 7.1 - creo archivo *.babelrc* en la carpeta **yarn-babel-webpack**, este archivo funciona para informarle a babel que presents utilizar. Debe tener la siguiente informacion:
    {
      "presets": [
        "es2015"
      ]
    }

## 8 Configuro server para desarrollo

#### 8.1 - Agregar **parametro script**  al archivo package.json (esta dentro de la carpeta *yarn-babel-webpack*)

    "scripts": {
      "start": "webpack-dev-server --inline --content-base ./src"
    },

#### 8.2 - Quedaria asi:
    {
      "name": "yarn-babel-webpack",
      "version": "1.0.0",
      "main": "index.js",
      "license": "MIT",
      "scripts": {
        "start": "webpack-dev-server --inline --content-base ./src"
      },
      "devDependencies": {
        "babel-core": "^6.24.0",
        "babel-loader": "^6.4.1",
        "babel-preset-es2015": "^6.24.0",
        "http-server": "^0.9.0",
        "webpack": "^2.3.3",
        "webpack-dev-server": "^2.4.2"
      }
    }
## Extras

#### 9.1 - Agregar .gitignore para:
  * node_module
  * .vscode (en mi caso es el editor que utilizo)

```sh
node_modules
.vscode
```

