var personagem = { //implementar dinheiro
    Nome: 'Nome',
    Level: 1,
    Experiencia: 0,
    Vida: 100,
    Armadura: 0,
    Forca: 1,
    PoderMagico: 1,
    Inteligencia: 0,
    Sorte: 0,
    Pontaria: 0,
    DefesaMagica: 0,
    Furtividade: 0
}

function atacar(codigo) {
    var valor = parseInt(Math.random() * 100)+1;
    switch(codigo) {
        case "LFF":
            if(valor - mapa.Andar + personagem.Forca >= 20){
                var exp = parseInt(Math.random() * 5)+1;
                personagem.Experiencia += exp;
                
                exibirMapa("Você se defende, acerta o ataque e derrota o inimigo");
                exibirStatus();
                BotoesDado();
            }else{
                var dano = parseInt(Math.random() * 5)+1;
                personagem.Vida -= dano - personagem.Armadura;
                
                exibirMapa("Você não consegue acertar o ataque e recebe dano do inimigo, ele agora está com raiva");
                limparOption();
                criarBotao("A", "Atacar", "atacar", "LFF");
                exibirStatus();
            }
    }
}
function ataqueFurtivo(codigo) {
    
}
function correr(codigo) {

}
function conversar(codigo) {

}