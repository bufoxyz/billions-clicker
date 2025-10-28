let coins = 0;
let multiplier = 1;
let autoClickers = 0;

const clickBtn = document.getElementById("click-btn");
const coinDisplay = document.getElementById("coins");
const clickSound = document.getElementById("clickSound");
const logo = document.getElementById("logo");
const achievements = document.getElementById("achievements");

function updateDisplay() {
  coinDisplay.textContent = `${coins} B`;
  localStorage.setItem("billionsCoins", coins);
}

function createCoinEffect() {
  const coin = document.createElement("div");
  coin.textContent = "💸";
  coin.className = "coin";
  coin.style.left = (window.innerWidth / 2 + (Math.random() * 100 - 50)) + "px";
  coin.style.top = (window.innerHeight / 2 - 50) + "px";
  document.body.appendChild(coin);
  setTimeout(() => coin.remove(), 1000);
}

function showAchievement(text) {
  const msg = document.createElement("div");
  msg.className = "achievement";
  msg.textContent = text;
  achievements.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}

clickBtn.addEventListener("click", () => {
  coins += 1 * multiplier;
  clickSound.currentTime = 0;
  clickSound.play();
  createCoinEffect();
  logo.classList.add("clicked");
  setTimeout(() => logo.classList.remove("clicked"), 150);

  updateDisplay();

  if (coins === 1) showAchievement("🎉 First Click!");
  if (coins === 100) showAchievement("💰 100 Billions Earned!");
  if (coins === 1000) showAchievement("🐳 You're a True Whale!");
});

document.getElementById("autoClickBtn").addEventListener("click", () => {
  if (coins >= 100) {
    coins -= 100;
    autoClickers++;
    showAchievement("🤖 Auto Clicker Activated!");
  }
});

document.getElementById("multiplierBtn").addEventListener("click", () => {
  if (coins >= 200) {
    coins -= 200;
    multiplier++;
    showAchievement("🚀 Multiplier Upgraded!");
  }
});

setInterval(() => {
  if (autoClickers > 0) {
    coins += autoClickers * multiplier;
    updateDisplay();
  }
}, 1000);

// Restore from localStorage
if (localStorage.getItem("billionsCoins")) {
  coins = parseInt(localStorage.getItem("billionsCoins"));
  updateDisplay();
}
