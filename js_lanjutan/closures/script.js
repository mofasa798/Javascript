// function init() {
//     // let nama = "Gendeng";
//     return function(nama) {
//         console.log(nama);
//     }
// }
// let panggilNAma = init();
// panggilNAma('Ujang');
// panggilNAma('Jajang');

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Selamat ${waktu}, Tuan ${nama}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Ujang');
// selamatSiang('Jajang');
// selamatMalam('Tejo');

// implicit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Ujang'));

// ini menggunakan arrow function map dan console.table
// let mahasiswa = ['Ujang', 'Jajang', 'Tejo'];
// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf);

// konsep this pada arrow function
// constructor function
// const mahasiswa = function() {
//     this.nama = 'Ujang';
//     this.umur = 20;

//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
//     }
// }

// const ujang = new mahasiswa();

// arrow function
// const mahasiswa = function() {
//     this.nama = 'Ujang';
//     this.umur = 20;

//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
//     }
// }

// const ujang = new mahasiswa();

// object literal
// const mhs1 = {
//     nama: 'Ujang',
//     umur: 20,
//     sayHello() {
//         console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
//     }
// }

// const mahasiswa = function() {
//     this.nama = 'Ujang';
//     this.umur = 20;

//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur} tahun.`);
//     }
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 1000);
// }

// const ujang = new mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if(!this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle('size');
    setTimeout(() => {
        this.classList.toggle('caption');
    }, 600);
});