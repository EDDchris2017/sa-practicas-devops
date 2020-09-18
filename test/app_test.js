const assert  = require("assert");
const request =  require("supertest");
const should = require('chai').should();
const Restaurante = require("../src/Restaurante/RestauranteService").app;

//Pruebas al Servicio de Restaurante
describe('Restaurante', function(){
    it("Verificar que el servicio responda 'Restaurante Activo'", (done) => {
        request(Restaurante)
            .get('/')
            .expect('Restaurante activo')
            .end(done)
    });
    it("Comprobar recibo de pedido", (done) =>{
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
    it("Comprobar monitoreo de pedido", (done) =>{
        request(Restaurante)
        .post('/informarestado')
        .expect(200, function(err,res){
            (res.body.res == "El pedido sigue en proceso").should.be.true
            done()
        })
    })
});

//mocha **/*.test.js
//node node_modules/.bin/mocha 