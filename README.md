# Practicas Laboratorio Software Avanzado
## Segundo Semestre 2020
## Christopher Lopez 201504100

### Practica Devops 3 partes
#### Tags de Versionamiento
- Version 1.0.0 Proyecto de Crowdsourcing al repositorio y manejo de artefactos
- Version 1.0.1 Desarrollo de Pruebas unitarias con Mocha JS y calidad de codigo con SonarQube
---------------------------------------
### Practica 5
#### Descripcion del Proyecto
- Version 1.0.0
- Proyecto de Crowdsourcing para Comida a Domilicion usando una arquitectura orientada a microservicios
Creacion de artefactos para el release de la plataforma 
- Herramienta **GULP** para creacion de artefactos
- Lenguaje: Javascript NodeJS 
- 
#### Creacion de Artefactos
- Instruccion de creacion de artefactos en gulpfile.js
- Comando para creacion de artefactos:
  - CMD[**"node_modules\\.bin\\gulp"**]
  
#### Archivos Release
Creacion de carpeta dist para manejo de archivos release,
como javascript es un lenguaje interpretado solo se copiaran los archivos \*.js
- Carpeta Dist para ubicacion de archivos y Se toman todos los archivos \*.js de la carpeta /src **Tarea Buid**
```javascript
  function build(cb) {
    // Copiar Archivos a Dist
    return src('src/**/*.js')
        .pipe(dest('dist/'))
  }
```
- Se comprimen los archivos de /dist y se comprimen para luego copiarlo a /dist nuevamente **Tarea comprimirArchivos**
```javascript
 function comprimirArchivos(cb){
      // Comprimir archivos 
      execSync('zip release_proyecto_201504100.zip dist');
      return src('release_proyecto_201504100.zip')
        .pipe(dest('dist/')) 
  }
  ```

---------------------------------------
### Practica 7
#### Archivos Release
Creacion de carpeta dist para manejo de archivos release,
como javascript es un lenguaje interpretado solo se copiaran los archivos \*.js
- Carpeta Dist para ubicacion de archivos 
- Se toman todos los archivos \*.js de la carpeta /src
- LINK REPOSITORIO ARTEFACTOS: https://github.com/EDDchris2017/artefactos_practicassa
