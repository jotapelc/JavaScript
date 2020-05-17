/* var nome = "Paty";
var idade= 29;
var frase = "Japão é top"

alert("Bem vindo: " + nome + " tem " + idade);

console.log(nome);
console.log(idade);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase()); */

// var lista= ["maça","uva","pera"];
// lista.push("uva");
// lista.pop("laranja");
// console.log(lista[1]);
// console.log(lista.toString());

// console.log(lista.join(" |"))

// var fruta = {nome: "maça", cor:"vermelho"}
// console.log(fruta.nome)
// alert(fruta.cor)

// var frutas = [{nome: "maça", cor: "vermelho"},
//               {nome: "uva", cor: "roxa"}];
// console.log(frutas[0].cor);
// alert(frutas[1].nome);

// var nome = prompt("Qual seu nome? ");
// alert("Olá, " + nome);

// var idade = prompt("Qual sua idade: ");
// if (idade >= 18){
//     alert("Maior de 18");
// }else{
//     alert("menor de 18");
// }


// var conta = 0;
// while (conta < 5){
//     console.log(conta);
//     conta = conta+1;
//     alert(conta)
// };

// var conta;
// for (conta=0; conta <= 5; conta++){
//     alert(conta)
// }

// var d =new Date();
// alert(d);
// alert(d.getDay());
// alert(d.getHours());

// function soma(n1,n2){
//     return n1 + n2;
// }
// alert(soma(5, 10));

// function validaidade(idade){
//     var validar;
//     if(idade >= 18){
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade?");
// console.log(validaidade(idade));

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome) 
// }
// alert(setReplace("vai Japão", "Japão", "Brasil"));


function clicou(){
   // alert("Obrigado por clicar");
   document.getElementById("agradecimento").innerHTML = "Obrigado Por Clicar";
   console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    //window.open("https://www.google.com.br/") //abre em aba diferente
    window.location.href = "https://www.google.com.br/"; //abre na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Passe o mouse aqui"
    //alert("trocar texto")
}
function load(){
    alert("pagina carregada")
}

function fucaoChange(elemento){
    Console.log(elemento.value)

}