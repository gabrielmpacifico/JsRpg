var mapa = {
	Andar: 1,
	SalasTotais: 10,
	SalaAtual: 0,
	ValorDado: 0,
}
var andar = { //Criar sala de encontro, onde é possível encontrar uma pessoa aleatória e escolher uma ação de ajudar, atacar ou ignorar
	descanso: 0,
	lootBronze: 25,
	lootPrata: 30,
	lootOuro: 31,
	lutaFisicaFacil: 65,
	lutaFisicaMedio: 66,
	lutaFisicaDificil: 67,
	lutaDistancia: 68,
	lutaOrda: 69,
	lutaMagicaFacil: 98,
	lutaMagicaMedio: 99,
	lutaMagicaDificil: 100
}


function jogarDado() {
	var valor = parseInt(Math.random() * 6)+1;
	
	mapa.ValorDado = valor;
	mapa.SalaAtual = mapa.SalaAtual + valor;

	if(mapa.SalaAtual > mapa.SalasTotais){
		subirAndar();
		return;
	}

	var sala = parseInt(Math.random() * 100)+1;
	for (const chave in andar) {
    	if (andar.hasOwnProperty(chave)) {
	        if ( andar[chave] >= sala ) {
	        	window[chave]();
	        	return;
	        }    
      	}
    }
}

function subirAndar() {
	mapa.Andar = mapa.Andar + 1;
	mapa.SalaAtual = 0;
	mapa.SalasTotais = 10 + (mapa.Andar * 2);
	
	if(mapa.SalasTotais > 40)
		mapa.SalasTotais = 40;
	
	var porcentagens = [100];
	for (let i = 0 ; i < 11 ; i++) {
		const porcentagem = parseInt(Math.random() * 100)+1;
		porcentagens.push(porcentagem);
	}
	porcentagens.sort((a, b) => a - b);

	var loop = 0;
	for (const chave in andar) {
  		if (andar.hasOwnProperty(chave)) {
  			andar[chave] = porcentagens[loop];
  			loop++;
  		}
	}

	exibirMapa("Você está no andar " + mapa.Andar + ", jogue o dado para iniciar");
	// Caso tenha uma certa pontuação de inteligencia é possível ver a porcentagem de chance de uma sala ou mais ao entrar no andar, exibida na mensagem acima
	return;
}

function descanso() {
	//local onde é possível usar os consumiveis
	//ou ver as casas a frente com INTELIGENCIA
	//ou upar estatisticas com base no level atual
	exibirMapa("Esta é a sala de DESCANSO")
	BotoesDado()
}
function lootBronze() {
	//consumiveis
	//aumento de status
	exibirMapa("Esta é uma sala de LOOT BRONZE")
	BotoesDado()
}
function lootPrata() {
	//consumiveis
	//aumento de status
	exibirMapa("Esta é uma sala de LOOT PRATA")
	BotoesDado()
}
function lootOuro() {
	//consumiveis
	//aumento de status
	exibirMapa("Esta é uma sala de LOOT OURO")
	BotoesDado()
}
function lutaFisicaFacil() {
	exibirMapa("Nesta sala você encontra um guerreiro com uma espada simples e um escudo quebrado,  ele não parece se importar com a sua presença");
	criarBotao("A", "Atacar", "atacar", "LFF");
	criarBotao("B", "Ataque Furtivo", "ataqueFurtivo", "LFF");
	criarBotao("C", "Correr", "correr", "LFF");
	criarBotao("D", "Conversar", "conversar", "LFF");
}
function lutaFisicaMedio() {
	exibirMapa("Esta é uma sala de LUTA FISICA MEDIO")
	BotoesDado()
}
function lutaFisicaDificil() {
	exibirMapa("Esta é uma sala de LUTA FISICA DIFICIL")
	BotoesDado()
}
function lutaDistancia() {
	exibirMapa("Esta é uma sala de LUTA DISTANCIA")
	BotoesDado()
}
function lutaOrda() {
	exibirMapa("Esta é uma sala de LUTA ORDA")
	BotoesDado()
}
function lutaMagicaFacil() {
	exibirMapa("Esta é uma sala de LUTA MAGICA FACIL")
	BotoesDado()
}
function lutaMagicaMedio() {
	exibirMapa("Esta é uma sala de LUTA MAGICA MEDIO")
	BotoesDado()
}
function lutaMagicaDificil() {
	exibirMapa("Esta é uma sala de LUTA MAGICA DIFICIL")
	BotoesDado()
}
