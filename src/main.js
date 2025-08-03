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

    // Limite de tela
    car.x = Math.max(0, Math.min(canvas.width - car.width, car.x));
    car.y = Math.max(0, Math.min(canvas.height - car.height, car.y));
  }

  function draw() {
    ctx.fill
