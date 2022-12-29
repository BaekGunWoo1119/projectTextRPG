class HealthBar {
  constructor(x, y, w, h, maxHealth, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.maxHealth = maxHealth;
    this.maxWidth = w;
    this.health = maxHealth;
    this.color = color;
  }

  show(context) {
    context.lineWidth = 4;
    context.strokeStyle = "#333";
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
    context.strokeRect(this.x, this.y, this.maxWidth, this.h);
  }

  updateHealth(val) {
    if (val >= 0) {
      this.health = val;
      this.w = (this.health / this.maxHealth) * this.maxWidth;
    }
  }
}

class PowerBar {
  constructor(x, y, w, h, maxHealth, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.maxHealth = maxHealth;
    this.maxWidth = w;
    this.health = maxHealth;
    this.color = color;
  }

  show(context) {
    context.lineWidth = 4;
    context.strokeStyle = "#333";
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
    context.strokeRect(this.x, this.y, this.maxWidth, this.h);
  }

  updateHealth(val) {
    if (val >= 0) {
      this.health = val;
      this.w = (this.health / this.maxHealth) * this.maxWidth;
    }
  }
}

function vw(percent) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (percent * w) / 100;
}

function vh(percent) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (percent * h) / 100;
}

const canvas = document.getElementById("hp");
const context = canvas.getContext("2d");
const width = canvas.width = vw(39);
const height = canvas.height = vh(12);

let health = 100;
const BarWidth = 30;
const BarHeight = 2;
const x = width / 2 - vw(BarWidth) / 2;
const y = height / 2 - vh(BarHeight) / 2;

const healthBar = new HealthBar(x, y - vh(2), vw(BarWidth), vh(BarHeight), health, "green");
const powerBar = new PowerBar(x, y + vh(2), vw(BarWidth), vh(BarHeight), health, "blue");

const frame = function() {
  context.clearRect(0, 0, width, height);
  healthBar.show(context);
  powerBar.show(context);
  requestAnimationFrame(frame);
}

canvas.onclick = function() {
  health -= 10;
  healthBar.updateHealth(health);
};

frame();