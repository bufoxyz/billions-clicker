// Ambil elemen dari HTML
const coinDisplay = document.getElementById('coins');
const clickButton = document.getElementById('click-btn');

// Variabel untuk menyimpan jumlah coin
let coins = 0;

// Fungsi saat tombol diklik
clickButton.addEventListener('click', () => {
    coins++;
    coinDisplay.textContent = `${coins} Billions`;

    // Animasi kecil waktu klik
    clickButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        clickButton.style.transform = 'scale(1)';
    }, 100);
});
