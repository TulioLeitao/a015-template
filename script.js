//aula de laços

//-----exercício 1

/*
let num = Number(prompt('Digite um número qualquer. Para sair digite 0'));
let soma = 0

while(num !==0){   //while sempre tem uma condição, e um bloque de código
    soma += num // += quer dizer ela mesma + num
    num = Number(prompt('Digite um número qualquer. Para sair digite 0'));
} 

alert (`A soma dos número é ${soma}`);


//-----exercício 2


let num = Number(prompt('Insira um número'));

for (let i = 0; i <= num; i++){

    console.log (i)
    
};


//-----exercício 3


const array = [7, 6, 5, 4, 3, 2, 1];

for (let i = 0; i < array.length; i++){

    console.log(`O índice da variável é ${i} e seu valor é ${array[i]}`)

};
*/


//----exercício de fixação 1


let usuario = prompt ("Digite seu sódigo de usuário").toUpperCase();

while (usuario !=="A" ){
    alert ('Acesso  negado');
    usuario = prompt ("Digite seu sódigo de usuário");
};


alert ('Boas-vindas, admin')

//----exercício de fixação 2

let num = Number(prompt("Digite até quando você quer ver a tabuada de 2"));

for(let i=1; i<=num ; i++){
console.log ("2 x "+i+" = " + (2*i));
}



//----exercício de fixação 3

let anoes = ["Thorin", "Balin", "Dwalin", "Fili", "Kili", "Dori", "Nori", "Ori", "Nori", "Gloin", "Bifur", "Bofur", "Bombur" ];

for (let i = 0; i < anoes.length; i++){

    console.log (anoes[i].toUpperCase())

};
