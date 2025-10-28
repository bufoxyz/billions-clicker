let coins = 0;

const coinCount = document.getElementById("coinCount");
const button = document.getElementById("clickButton");

button.addEventListener("click", () => {
  coins++;
  coinCount.textContent = `${coins} Billions`;
  button.style.transform = "scale(0.95)";
  setTimeout(() => (button.style.transform = "scale(1)"), 100);
});

