
const pessoa = {
    nome: "Alex",
    idade: 29,
    profissao: "professor"
};



const {nome, idade, profissao} = pessoa;

console.log(nome);
console.log(idade);
console.log(profissao);

const numeros = [10, 20, 30];

const [a, b, c] = numeros;

console.log(a, b, c)

// para pular um valor - const [a, , c] = numeros