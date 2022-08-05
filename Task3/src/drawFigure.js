const getCanvas = (canvasId) => {
  let canvas = document.getElementById(canvasId);
  if (!canvas) {
    canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
  }
  return canvas;
};

function drawSquare(x = 0, y = 0, length = 50, color = "yellow", canvasId) {
  this.canvas = getCanvas(canvasId);
  this.canvas.width = length;
  this.canvas.height = length;
  let ctx = this.canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);
}

function drawTriangle(x = 50, y = 0, length = 100, color = "yellow", canvasId) {
  this.canvas = getCanvas(canvasId);
  let ctx = this.canvas.getContext("2d");

  let height = Math.sqrt(length ** 2 - (length / 2) ** 2);
  this.canvas.width = length;
  this.canvas.height = height;

  ctx.strokeStyle = color;
  ctx.moveTo(x, y);
  ctx.lineTo(x - length / 2, y + height);
  ctx.lineTo(x + length / 2, y + height);
  ctx.lineTo(x, y);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
}

