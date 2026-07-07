// 1. Gerekli HTML elemanlarını seçiyoruz
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// 2. Hamburger menüye tıklama olayı (Event Listener) ekliyoruz
mobileMenu.addEventListener('click', () => {
    // Menünün görünürlüğünü sağlayan 'active' class'ını ekle/çıkar
    navLinks.classList.toggle('active');
    
    // İkonu değiştiriyoruz: Menü açıkken çarpı (X), kapalıyken hamburger (üç çizgi) yap
    const icon = mobileMenu.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// 3. Mobil menü açıkken herhangi bir linke tıklanırsa menüyü otomatik kapat
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});