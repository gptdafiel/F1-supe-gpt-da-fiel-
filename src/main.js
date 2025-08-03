function startGame() {
  document.querySelector(".menu").style.display = "none";
  const canvas = document.getElementById("gameCanvas");
  canvas.style.display = "block";
  const ctx = canvas.getContext("2d");

  let carX = 375;
  let carY = 500;

  function draw() {
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Carro
    ctx.fillStyle = "#f00";
    ctx.fillRect(carX, carY, 50, 80);

    requestAnimationFrame(draw);
  }

  draw();
}
