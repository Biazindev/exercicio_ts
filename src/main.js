"use strict";
function somaNumeros(altura, largura) {
    return altura * largura;
}
const valor = somaNumeros(15, 20);
console.log(valor);
class Saudacao {
    constructor(nome) {
        this.nome = nome;
    }
    dizOla() {
        return `olá ${this.nome}`;
    }
}
const saudacaoInstancia = new Saudacao('Gian');
console.log(saudacaoInstancia.dizOla());
