// Menangani semua tombol booking
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
        const package = this.dataset.package;
        const price = this.dataset.price;
        
        // Format pesan WhatsApp
        const message = `Halo Feel.Inframe Photography! ✨

Saya tertarik dengan ${package}
    
Detail Pesanan:
- Paket: ${package}
- Harga: Rp ${price}/jam

Mohon info lebih lanjut mengenai:
1. Slot tanggal yang tersedia
2. Lokasi foto yang direkomendasikan
3. Persiapan yang diperlukan

Terima kasih! 📸`;

        // Encode pesan untuk URL WhatsApp
        const encodedMessage = encodeURIComponent(message);
        
        // Buka WhatsApp dengan pesan terformat
        window.open(`https://wa.me/6282345695620?text=${encodedMessage}`, '_blank');
    });
});

// Animasi untuk floating promo
const floatingPromo = document.querySelector('.floating-promo');
if (floatingPromo) {
    // Tambahkan kelas untuk animasi setelah 2 detik
    setTimeout(() => {
        floatingPromo.classList.add('show');
    }, 2000);

    // Sembunyikan promo saat di-scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll) {
            floatingPromo.style.transform = 'translateY(150%)';
        } else {
            floatingPromo.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// Smooth scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Tambahkan efek loading saat tombol booking diklik
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.innerHTML = 'Loading...';
        setTimeout(() => {
            this.innerHTML = 'Book Now';
        }, 1000);
    });
});

// Tambahkan efek hover untuk feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});