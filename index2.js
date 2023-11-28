// Supondo um jogo no qual dois personagens batalham contra um inimigo, não entre si, de forma individual, 
// mas com resultados comparados entre os participantes do jogo
// Supondo dois jogadores, teríamos algo para receber essas variáveis de cada jogador,
// adiantamos os dados de Nome do Herói, e o acumulo de vitórias e derroas de cada Jogador.

//Dados recebidos da inserção de nome e acumulo de vitórias e derrotas do Hero A
let nameHeroA = "Fulano" 
let vitoriaA = 80	 
let derrotaA = 40
// Gerando resultados Hero A
let xpA = somar(vitoriaA, derrotaA) 
let levelHeroA = getLevel(xpA)


//Dados recebidos da inserção de nome e acumulo de vitórias e derrotas do Hero B
let nameHeroB = "Ciclano" 
let vitoriaB = 120 
let derrotaB = 30 
// Gerando resultados Hero B
let xpB = somar(vitoriaB, derrotaB) 
let levelHeroB = getLevel(xpB)


function somar(numero1, numero2) {
    return numero1 - numero2;
}
    
function getLevel(numero1){

	if (numero1 <= 10){
    	level = "FERRO"
	}else if (numero1 > 11 && numero1 <= 20){
   		level = "BRONZE"
	}else if (numero1 > 21 && numero1 <= 50){
    	level = "PRATA"
	}else if (numero1 > 51 && numero1 <= 80){
    	level = "OURO"
	}else if (numero1 > 81 && numero1 <= 90){
    	level = "DIAMANTE"
	}else if (numero1 > 91 && numero1 <= 100){
   		level = "LENDARIO"
	}else{
    	level = "IMORTAL"
	}
		return level
}

//Fiz essa array para achar o maior valor entre os xps, que seria o vencedor.
const xpall = [xpA, xpB]

//Assim, considerando sempre um ambiente de batalha com dois jogadores, teríamos uma dessas possibilidades, caso um deles
//fique com o maior xp.
switch(Math.max.apply(null, xpall)){
	case xpA:
		console.log("1º LUGAR - O Herói " + nameHeroA + " tem saldo de " + xpA + " está no nível de " + levelHeroA)
		console.log("2º LUGAR - O Herói " + nameHeroB + " tem saldo de " + xpB + " está no nível de " + levelHeroB)
	break;
	case xpB:
		console.log("1º LUGAR - O Herói " + nameHeroB + " tem saldo de " + xpB + " está no nível de " + levelHeroB)
		console.log("2º LUGAR - O Herói " + nameHeroA + " tem saldo de " + xpA + " está no nível de " + levelHeroA)
	break;
	}
	