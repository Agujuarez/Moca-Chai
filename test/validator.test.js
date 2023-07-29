const { it, describe } = require('mocha');
const expect = require('chai').expect;
let archivoValidator = require('./validator');

describe('Prueba de suma', function(){
    it('El resultado de la suma debe ser 6', function(){
        const result = archivoValidator.suma(3,3);
        expect(result).to.be.equal(6);
    })

    it('Esta prueba valida un Email', function(){
        const result = archivoValidator.validateEmail('johndoe@gmail.com');
        expect(result).to.be.equal(true);
    })
})