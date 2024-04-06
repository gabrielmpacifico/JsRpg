
function exibirStatus() {

    if(personagem.Vida <= 0){
        //game over
    }
    if(personagem.Experiencia >= 100 * personagem.Level){
        personagem.Level += 1;
    }


    var statsfinais = "";
    for (const chave in personagem) {
      if (personagem.hasOwnProperty(chave)) {
        statsfinais += `${chave} - ${personagem[chave]} <br>`;
      }
    }
    document.getElementById("stats").innerHTML = statsfinais;
}

function exibirMapa(texto) {
    var dadosmapa = "";
    for (const chave in mapa) {
      if (mapa.hasOwnProperty(chave)) {
        dadosmapa += `${chave} - ${mapa[chave]} | `;
      }
    }
    document.getElementById("main").innerHTML = dadosmapa + '<hr><div class="texto">'+texto+'</div>';

}

function BotoesDado() {
    criarBotao("A", "Jogar Dado", "jogarDado", "");
    criarBotao("B", "", "", "");
    criarBotao("C", "", "", "");
    criarBotao("D", "", "", "");
}

function limparOption() {
    criarBotao("A", "", "", "");
    criarBotao("B", "", "", "");
    criarBotao("C", "", "", "");
    criarBotao("D", "", "", "");
}

function criarBotao(botao, nome, funcao, codigo) {
    document.getElementById("option"+botao).innerHTML = nome;    
    if(funcao != ""){
        document.getElementById("option"+botao).onclick = function(){window[funcao](codigo)};
    }else{
        document.getElementById("option"+botao).onclick = function(){};
    }
}

BotoesDado()
exibirMapa("Você está no primeiro andar, jogue o dado para iniciar")
exibirStatus()

