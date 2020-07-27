function botao(){
	document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!"; //injeta um texto em html após o clique, em vez do popup
	//alert("Obrigado por clicar!");
}

function redirecionar(){
	window.open("http://www.uol.com.br/") //redireciona para o link numa nova aba
	window.location("http://www.uol.com.br/") //mesma coisa, mas na mesma aba
}

function trocar(elemento){
	elemento.innerHTML = "Passe o mouse aqui";
	alert("trocar texto");
}

function voltar(elemento){
	elemento.innerHTML = "Passe o mouse aqui";
	alert
}

function load(){
	alert("Página carregada!");
}

function funcaoChange(elemento){ //faz o alert avisar que o valor foi trocado, mostrando-o
	alert(elemento.value)
}

/*
function soma(n1, n2){
	return n1 + n2
}
*/

/*
function validaIdade(idade){
	var validar
	if (idade >= 18){
		validar = true;
	}else{
		validar = false;
	}
	return validar
	
}
var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade));
alert(soma(5, 10));
*/


/*
function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai, Japão!", "Japão", "Brasil"));
*/
	

/*
var d = new Date();
alert(d.getMonth()+1) //o 'getMonth' traz o número do mês atual; o '+1' é necessário porque janeiro é o mês 0 e por aí vai
*/


/*
var count;
for (count=0; count<=5; count++)
	alert(count)
*/

/*
var count = 0;
while (count < 5){
	console.log(count);
	count = count + 1; //poderia ser também simplesmente count++
}
*/

/*
var idade = prompt("Qual a sua idade?"); //gera um prompt para o usuário responder
if (idade >= 18){
	alert("Maior de idade!");
}else {
	alert("Menor de idade!");
}
*/



/*
var frutas = [{nome: "maçã", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas.nome);
alert(frutas[1].cor);
*/

/*
var fruta = {nome: "maçã", cor:"vermelha"}
console.log(fruta.nome)
alert(fruta.cor)
*/

/*
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva"); //adiciona 'uva' à lista
lista.pop() //remove o último item da lista
console.log(lista);
alert(lista[1]); //mostra o item da posição '1', ou seja, o segundo item
lista.push("uva");
console.log(lista.length()); //conta o número de itens
console.log(lista.reverse()); //apresenta a lista em ordem inversa
console.log(lista.toString()); //transforma numa string
console.log(lista.join(" / ")); //separa os itens com o que esitver entre as aspas
*/


/*
var nome = "Victor Lopes"
var idade = 29
var idade2 = 10
var frase = "Japão é o melhor time do mundo"
alert("Bem vindo, " + nome + "!"); 'alert' gera uma mensagem pop-up
alert(nome + " tem " + idade + " anos.")
alert(idade + idade2) vai simplesmente somar as duas idades porque não entendeu como string e sim como inteiro
console.log(nome)
console.log(idade + idade2)
console.log(frase.replace("Japão", "Brasil")) //o replace troca a primeira palavra pela segunda; funciona também no alert
console.log(frase.toUpperCase()) //coloca a frase em maiúsculas
console.log(frase.toLowerCase()) //inverso da de cima
*/