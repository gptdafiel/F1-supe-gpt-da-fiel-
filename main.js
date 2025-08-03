const canvas = document.getElementById('jogo');
const ctx = canvas.getContext('2d');

// Carrega imagem da pista e do carro (placeholder por enquanto)
const carro = new Image();
carro.src = 'https://i.imgur.com/Q9nJ3yL.png'; // Um carrinho qualquer pra testar

let carroX = 370;
let carroY = 500;
let velocidade = 5;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') carroX -= velocidade;
  if (e.key === 'ArrowRight') carroX += velocidade;
  if (e.key === 'ArrowUp') carroY -= velocidade;
  if (e.key === 'ArrowDown') carroY += velocidade;
});

function desenhar() {
  ctx.fillStyle = '#2e2e2e'; // fundo tipo pista
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Faixas brancas
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(390, 0, 5, canvas.height);

  // Desenha o carro
  ctx.drawImage(carro, carroX, carroY, 60, 100);

  requestAnimationFrame(desenhar);
}

carro.onload = desenhar;
