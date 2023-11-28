// Supondo um jogo no qual dois personagens batalham contra um inimigo, não entre si, de forma individual, 
// Supondo dois jogadores, teríamos algo para receber essas variáveis de cada jogador,
// adiantamos os dados de Nome do Herói, e o acumulo de vitórias e derroas de cada Jogador.

//Dados recebidos da inserção de nome e acumulo de vitórias e derrotas do Hero A
let nameHeroA = "Fulano" 
let vitoriaA = 150	 
let derrotaA = 40 
//Determinando nível
let levelHeroA = getLevel(vitoriaA, derrotaA)

//Dados recebidos da inserção de nome e acumulo de vitórias e derrotas do Hero B
let nameHeroB = "Ciclano" 
let vitoriaB = 80	 
let derrotaB = 50 
//Determinando nível
let levelHeroB = getLevel(vitoriaB, derrotaB)


function getLevel(numero1, numero2){
	    xp = numero1 - numero2


	if (xp <= 10){
    	level = "FERRO"
	}else if (xp > 11 && xp <= 20){
   		level = "BRONZE"
	}else if (xp > 21 && xp <= 50){
    	level = "PRATA"
	}else if (xp > 51 && xp <= 80){
    	level = "OURO"
	}else if (xp > 81 && xp <= 90){
    	level = "DIAMANTE"
	}else if (xp > 91 && xp <= 100){
   		level = "LENDARIO"
	}else{
    	level = "IMORTAL"
	}
	
	const heroXp = [xp, level]

	return heroXp
}


console.log(" O Herói " + nameHeroA + " tem saldo de " + levelHeroA[0] + " está no nível de " + levelHeroA[1])
console.log(" O Herói " + nameHeroB + " tem saldo de " + levelHeroB[0] + " está no nível de " + levelHeroB[1])