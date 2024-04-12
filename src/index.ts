// Chamar a função comecarJogo - Função Principal do jogo
comecarJogo();

// Função para criar o tabuleiro vazio
function criarPosicao(): string[] {
    return ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
}

// Função para exibir o tabuleiro com posições de 1 a 9
function moldarTabuleiro(tabuleiro: string[]): void {
    let mensagem = "";
    for (let i = 0; i < tabuleiro.length; i++) {
        mensagem += " | " + tabuleiro[i] + " | ";
        if ((i + 1) % 3 === 0) {
            mensagem += "\n";
        }
    }
    alert(mensagem);
}

// Função para verificar se houve um vencedor, de acordo com as combinaçõs possíveis
function verificarVitoria(tabuleiro: string[], jogador: string): boolean {
    const combinacaoLinhaouColuna = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8],
        [0, 4, 8], 
        [2, 4, 6]
    ];

    for (let i = 0; i < combinacaoLinhaouColuna.length; i++) {
        const combinacao = combinacaoLinhaouColuna[i];
        const [a, b, c] = combinacao;
        if (tabuleiro[a] === jogador && tabuleiro[b] === jogador && tabuleiro[c] === jogador) {
            return true;
        }
    }
    return false;
}

// Função principal que faz a interação jogo/jogador
function comecarJogo(): void {
    let tabuleiro = criarPosicao();
    let jogadorAtual = "X";
    let rodada = 0;
    let jogoFinalizado = false;

    while (!jogoFinalizado && rodada < 9) {
        moldarTabuleiro(tabuleiro);
        let posicao = Number(prompt(`Jogador ${jogadorAtual}, escolha uma posição de 1 a 9:`) || "");
        if (posicao >= 1 && posicao <= 9 && tabuleiro[posicao - 1] !== "X" && tabuleiro[posicao - 1] !== "O") {
            tabuleiro[posicao - 1] = jogadorAtual;
            if (verificarVitoria(tabuleiro, jogadorAtual)) {
                alert(`O Jogador ${jogadorAtual} venceu!`);
                jogoFinalizado = true;
            } else {
                jogadorAtual = jogadorAtual === "X" ? "O" : "X";
                rodada++;
            }
        } else {
            alert("Esta posição já foi escolhida. \nEscolha novamente.");
        }
    }

    if (!jogoFinalizado) {
        alert("O jogo empatou!");
    }
}


