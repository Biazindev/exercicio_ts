function somaNumeros(altura: number, largura: number): number {
    return altura * largura;
}

const valor = somaNumeros (15, 20);
console.log(valor)

class Saudacao {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizOla(): string {
        return `olá ${this.nome}`;
    }
}

const saudacaoInstancia = new Saudacao('Gian');
console.log(saudacaoInstancia.dizOla());

    