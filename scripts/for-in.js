
const numeros = [10, 20, 30];
// const nome = "A l e x"


// Forma de iteração clássica com array
// for(let index = 0; index< numeros.length; index++){
//     console.log(numeros[index]);
// }
// console.log(numeros.length; )
// console.log(nome.length)


// Forma moderna de iterção com for in  com array
// for(const index in numeros){
//     console.log(numeros[index]);
// }
const pessoa = { 
    nome: "Alex",
    idade: 29,
    profissao: "professor"
}

for(const chave in pessoa) {
    if(pessoa[chave] === "Alex"){
        console.log(pessoa[chave]);
    }
    
}
