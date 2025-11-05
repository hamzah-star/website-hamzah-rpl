// Scroll ke bagian tertentu
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Form kirim pesan dengan popup notifikasi
function sendMessage() {
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const pesan = document.getElementById('pesan').value.trim();

  if (!nama || !email || !pesan) {
    showPopup('Silakan isi semua kolom terlebih dahulu.');
    return false;
  }

  // Simulasi pengiriman
  showPopup(`Terima kasih ${nama}, pesanmu telah terkirim!`);
  document.getElementById('contactForm').reset();
  return false; // mencegah refresh
}

function showPopup(text) {
  const popup = document.getElementById('popup');
  const textEl = document.getElementById('popupText');
  textEl.textContent = text;
  popup.style.display = 'flex';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// === FITUR MODE GELAP ===
function toggleMode() {
  const body = document.body;
  const btn = document.getElementById('modeBtn');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    btn.textContent = '🌞';
    localStorage.setItem('theme', 'dark');
  } else {
    btn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Simpan preferensi tema saat reload
window.addEventListener('DOMContentLoaded', (event) => {
  const savedTheme = localStorage.getItem('theme');
  const btn = document.getElementById('modeBtn');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    if (btn) btn.textContent = '🌞';
  }
});
