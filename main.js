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
function startGame() {
  alert("🏎️ Preparando largada! Modo GP da Fiel em construção...");
}body {
  background-color: black;
  color: white;
  font-family: 'Courier New', monospace;
  text-align: center;
  padding-top: 50px;
}

.container {
  border: 3px solid white;
  padding: 30px;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  background-color: #111;
  border-radius: 20px;
  box-shadow: 0 0 10px #fff;
}

button {
  padding: 15px 30px;
  font-size: 20px;
  background-color: #ffcc00;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #ffaa00;
  }<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Super Automobilismo GPT da Fiel</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>🏁 Super Automobilismo GPT da Fiel 🏁</h1>
    <p>Modo PlayStation 2 • Todas as categorias da quebrada</p>
    <button onclick="startGame()">Começar</button>
  </div>
  <script src="main.js"></script>
</body>
</html>
