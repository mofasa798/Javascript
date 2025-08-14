// const angka = [-1, 8,9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(angka);
// console.log(newAngka);

// reduce
// jumlahkan semua elemen pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(newAngka);

// method chaining
// cari angka > 5, lalu kalikan 3, baru jumlahkan
// const newAngka = angka.filter((a) => a > 5)
//     .map(a => a * 3)
//     .reduce((acc, cur) => acc + cur, 0);
// console.log(newAngka);



// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang "JAVASCRIPT LANJUTAN"
let jsLanjut = videos.filter(video => video.textContent.includes('JS Lanjutan'))

// ambil durasi masing2 video
    .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit jadi detik
    .map(waktu => {
        // 10:30 -> [10, 30] split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1]; // ubah jadi detik
    })

// jumlahkan semua detik
.reduce((total, detik) => total + detik, 0);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - (jam * 3600);
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - (menit * 60);

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
const jmlVideo = videos.filter(video => video.textContent.includes('JS Lanjutan')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video`;