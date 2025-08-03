function startGame() {
  document.querySelector(".menu").style.display = "none";
  const canvas = document.getElementById("gameCanvas");
  canvas.style.display = "block";
  const ctx = canvas.getContext("2d");

  const car = {
    x: 375,
    y: 500,
    width: 50,
    height: 80,
    speed: 5,
    color: "#f00"
  };

  const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
  };

  let startTime = Date.now();
  let lastLapTime = startTime;
  let bestLap = null;
  let laps = 0;
  const totalLaps = 3;

  document.addEventListener("keydown", (e) => {
    if (e.key in keys) keys[e.key] = true;
  });

  document.addEventListener("keyup", (e) => {
    if (e.key in keys) keys[e.key] = false;
  });

  function update() {
    if (keys.ArrowUp) car.y -= car.speed;
    if (keys.ArrowDown) car.y += car.speed;
    if (keys.ArrowLeft) car.x -= car.speed;
    if (keys.ArrowRight) car.x += car.speed;

    // Limite da tela
    car.x = Math.max(0, Math.min(canvas.width - car.width, car.x));
    car.y = Math.max(0, Math.min(canvas.height - car.height, car.y));

    // Linha de chegada (no topo da tela)
    if (car.y <= 0) {
      laps++;
      const now = Date.now();
      const lapTime = (now - lastLapTime) / 1000;
      lastLapTime = now;
      if (bestLap === null || lapTime < bestLap) bestLap = lapTime;

      // Reset posição do carro
      car.y = 500;
    }
  }

  function draw() {
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Carro
    ctx.fillStyle = car.color;
    ctx.fillRect(car.x, car.y, car.width, car.height);

    // HUD
    const now = Date.now();
    const totalTime = ((now - startTime) / 1000).toFixed(2);
    ctx.fillStyle = "#fff";
    ctx.font = "16px Arial";
    ctx.fillText(`⏱️ Tempo: ${totalTime}s`, 10, 20);
    ctx.fillText(`🏁 Voltas: ${laps}/${totalLaps}`, 10, 40);
    ctx.fillText(`⏳ Última volta: ${((now - lastLapTime) / 1000).toFixed(2)}s`, 10, 60);
    if (bestLap !== null) {
      ctx.fillText(`🔥 Melhor volta: ${bestLap.toFixed(2)}s`, 10, 80);
    }
  }

  function gameLoop() {
    update();
    draw();

    if (laps < totalLaps) {
      requestAnimationFrame(gameLoop);
    } else {
      alert("🏆 Corrida encerrada!");
    }
  }

  gameLoop();
}
