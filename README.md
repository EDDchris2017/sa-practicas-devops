# Practicas Laboratorio Software Avanzado
## Segundo Semestre 2020
## Christopher Lopez 201504100

### Practica Devops 3 partes
#### Tags de Versionamiento
- Version 1.0.0 Proyecto de Crowdsourcing al repositorio y manejo de artefactos
- Version 1.0.1 Desarrollo de Pruebas unitarias con Mocha JS y calidad de codigo con SonarQube
- Version 1.0.2 Desarrollo de Pipeline con JenkinsFile y repositorio de artefactos 
---------------------------------------
### Practica 5
#### Descripcion del Proyecto
- Version 1.0.0
- Proyecto de Crowdsourcing para Comida a Domilicion usando una arquitectura orientada a microservicios
Creacion de artefactos para el release de la plataforma 
- Herramienta **GULP** para creacion de artefactos
- Lenguaje: Javascript NodeJS 

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
### Practica 6
#### Descripcion del Proyecto
- Version 1.0.1
- Proyecto de Crowdsourcing para Comida a Domilicion usando una arquitectura orientada a microservicios
Manejo de Pruebas Unitarias y Calidad de Codigo con SonarQube
- Herramienta **Mocha JS** para pruebas unitarias
- Herramienta **SonarQube** para evaluacion de calidad de codigo y Test Coverage
- Lenguaje: Javascript NodeJS 

#### Correr pruebas unitarias con MochaJS
- Programacion de Pruebas unitarias en /test/app_test.js
- Comando para correr pruebas:
  - CMD[**""node_modules/.bin/mocha""**]
- Comando para correr pruebas con script NPM
  - CMD[**npm run test**]
  
#### Correr evaluacion de calidad de codigo con SonarQube
- Definicion de propiedades de evaluacion en el archivo sonar-project.properties
- Correr analisis con Sonar Scanner :
  - CMD[**npm run test_sonar**]
  
#### Definicion de pruebas unitarias
*Se realizon pruebas de los metodos web services del microservicio Restaurante*
- Verificacion que el servicio este activo 
  - Realizar un peticion get a la ruta "/" con la respuesta : **Restaurante activo**
```javascript
it("Verificar que el servicio responda 'Restaurante Activo'", (done) => {
        request(Restaurante)
            .get('/')
            .expect('Restaurante activo')
            .end(done)
});
```
- Comprobar recibo de pedido del cliente al Restaurante
  - Realizar un peticion get a la ruta "/recibirpedido" con la respuesta : **Que tal Christopher tu pedido se esta procesando ...**
   - Parametros formato JSON
    - Cliente: "Christopher"
    - pedido : "Pizza Hawaina"
```javascript
it("Comprobar recibo de pedido , responda 'Que tal Christopher tu pedido se esta procesando ...'", (done) =>{
        request(Restaurante)
        .post('/recibirpedido')
        .send({
            cliente: "Christopher",
            pedido: "Pizza Hawaina"
        })
        .expect(200, function(err, res) {
            (res.body.res == "Que tal Christopher tu pedido se esta procesando ...").should.be.true
            done();
       });
});
```

- Realizar peticion del estado del pedido
  - Realizar un peticion get a la ruta "/informarestado" con la respuesta : **El pedido sigue en proceso ...**
```javascript
it("Comprobar monitoreo de pedido, responda 'El pedido sigue en proceso'", (done) =>{
        request(Restaurante)
        .post('/informarestado')
        .expect(200, function(err,res){
            (res.body.res == "El pedido sigue en proceso").should.be.true
            // Terminar el servicio
            done()
        })
});
```
#### Definicion de Propiedades de Calidad de Codigo
SonarScanner para el cliente de analisis 
```java
sonar.projectKey=PracticaDevOpsSA
sonar.projectName=PracticaDevOpsSA
sonar.projectVersion=1
sonar.sources=src/
sonar.exclusions=src/*.css 
```
---------------------------------------
### Practica 7
#### Archivos Release
Creacion de carpeta dist para manejo de archivos release,
como javascript es un lenguaje interpretado solo se copiaran los archivos \*.js
- Carpeta Dist para ubicacion de archivos 
- Se toman todos los archivos \*.js de la carpeta /src
- LINK REPOSITORIO ARTEFACTOS: https://github.com/EDDchris2017/artefactos_practicassa
