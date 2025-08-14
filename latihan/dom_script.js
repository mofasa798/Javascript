// 1. Seleksi Elemen
const judulUtama = document.getElementById('judul');
const infoParagraf = document.querySelector('.teks-info');
const tombolUbah = document.getElementById('tombolUbah');
const tombolWarna = document.getElementById('tombolWarna');
const kontainer = document.getElementById('kontainer');

// 2. Modifikasi Konten
judulUtama.textContent = "Selamat Datang di Halaman Interaktif!";
infoParagraf.innerHTML = "Ini adalah **paragraf** yang dimodifikasi melalui <em>JavaScript</em>.";

// 3. Modifikasi Gaya
judulUtama.style.color = "blue";
infoParagraf.style.fontSize = "18px";

// 4. Menambahkan Event Listener (Merespons Interaksi Pengguna)
tombolUbah.addEventListener('click', function() {
    judulUtama.textContent = "Judul Telah Diubah!";
});

tombolWarna.addEventListener('click', function() {
    // Toggle class untuk mengganti warna latar belakang
    infoParagraf.classList.toggle('highlight');
});

// 5. Membuat dan Menambahkan Elemen Baru
const elemenBaru = document.createElement('p');
elemenBaru.textContent = "Ini adalah paragraf yang dibuat dengan JavaScript.";
kontainer.appendChild(elemenBaru);

const linkBaru = document.createElement('a');
linkBaru.href = "https://www.google.com";
linkBaru.textContent = "Kunjungi Google";
kontainer.appendChild(linkBaru);

// Menghapus elemen (contoh: setelah 5 detik)
setTimeout(() => {
    // Pastikan elemenBaru masih ada sebelum dihapus
    if (kontainer.contains(elemenBaru)) {
        kontainer.removeChild(elemenBaru);
        console.log("Paragraf berhasil dihapus.");
    }
}, 5000); // Hapus setelah 5 detik