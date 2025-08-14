// Cara membuat Object pada Javascript
// 1. Object Literal
// PROBLEM: tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: "Asep",
//     energy: 10,
//     makan: function(porsi) {
//         this.energy += porsi;
//         console.log(`Selamat makan ${porsi} porsi, energi sekarang: ${this.energy}`);
//     },
// }

// let mahasiswa2 = {
//     nama: "Ujang",
//     energy: 10,
//     makan: function(porsi) {
//         this.energy += porsi;
//         console.log(`Selamat makan ${porsi} porsi, energi sekarang: ${this.energy}`);
//     },
// }

// 2. Function Declaration

// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energy += porsi;
//         console.log(`Selamat makan, anda makan ${porsi} porsi, energi sekarang: ${this.energy}`);
//     },
//     main: function(jam) {
//         this.energy -= jam;
//         console.log(`Anda bermain selama ${jam} jam, energi sekarang: ${this.energy}`);
//     },
//     tidur: function(jam) {
//         this.energy += jam * 2;
//         console.log(`Anda tidur selama ${jam} jam, energi sekarang: ${this.energy}`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energi;
    
//     return mahasiswa;
// }

// let Arip = Mahasiswa("Arip", 10);

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energy = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energy += porsi;
//     console.log(`Selamat makan ${this.nama}, anda makan ${porsi} porsi, energi sekarang: ${this.energy}`);
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energy -= jam;
//     console.log(`${this.nama} anda bermain selama ${jam} jam, energi sekarang: ${this.energy}`);
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energy += jam * 2;
//     console.log(`${this.nama} anda tidur selama ${jam} jam, energi sekarang: ${this.energy}`);
// }

// versi class
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energy = energi;
//     }

//     makan(porsi) {
//         this.energy += porsi;
//         console.log(`Selamat makan ${this.nama}, anda makan ${porsi} porsi, energi sekarang: ${this.energy}`);
//     }

//     main(jam) {
//         this.energy -= jam;
//         console.log(`${this.nama} anda bermain selama ${jam} jam, energi sekarang: ${this.energy}`);
//     }

//     tidur(jam) {
//         this.energy += jam * 2;
//         console.log(`${this.nama} anda tidur selama ${jam} jam, energi sekarang: ${this.energy}`);
//     }
// }

// let arip = new Mahasiswa("Arip", 10);




// 3. Constructor Function
// keyword 'new' digunakan untuk membuat instance baru dari constructor function

// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energy = energi;

//     this.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Selamat makan ${nama}, anda makan ${porsi} porsi, energi sekarang: ${this.energy}`);
//     }

//     this.main = function(jam) {
//         this.energy -= jam;
//         console.log(`${nama} anda bermain selama ${jam} jam, energi sekarang: ${this.energy}`);
//     }
// }

// let arip = new Mahasiswa("Arip", 10);

// 4. Object.create

