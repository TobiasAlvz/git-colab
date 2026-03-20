// Jogo de Adivinhação no terminal

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Gera número aleatório de 1 a 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;

function perguntar() {
  rl.question("Adivinhe o número (1 a 100): ", (resposta) => {
    const palpite = parseInt(resposta);
    tentativas++;

    if (isNaN(palpite)) {
      console.log("❌ Digite um número válido!");
      return perguntar();
    }

    if (palpite === numeroSecreto) {
      console.log(`🎉 Parabéns! Você acertou em ${tentativas} tentativas.`);
      rl.close();
    } else if (palpite < numeroSecreto) {
      console.log("📉 Muito baixo!");
      perguntar();
    } else {
      console.log("📈 Muito alto!");
      perguntar();
    }
  });
}

console.log("🎮 Bem-vindo ao Jogo de Adivinhação!");
perguntar();