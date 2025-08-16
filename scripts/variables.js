
// var aceita redeclaração e reatribuição. ("Sofre içamento(hoisting)")
var nome = "Vitoria";
// O correto seria apenas reatribuir valor, ou seja colocar nome = "Arthur";
var nome = "Arthur";

console.log(nome);
// let não aceita redeclaração, mas aceita reatribuição. (Não sofre içamento)
let idade = 27;
    idade = 28;

    console.log(idade);
// const não aceita redeclaração nem reatribuição. (Não sofre içamento)
const profissao = "desenvolvedor";
console.log(profissao);

function saudar(){
    alert("Olá!")
};

saudar();
