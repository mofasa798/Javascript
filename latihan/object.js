// membuat object
// object literal
// let mhs1 = {
//     nama : "asep",
//     nim : "00123",
//     email : "asep@mail.com",
//     jurusan : "teknik informatika"
// }
// let mhs2 = {
//     nama : "awuik",
//     nim : "00124",
//     email : "awuik@mail.com",
//     jurusan : "teknik informatika"
// }

// function declaration
// function buatObjectMhs(nama, nim, email, jurusan) {
//     let mhs = {};
//     mhs.nama = nama;
//     mhs.nim = nim;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }
// let mhs3 = buatObjectMhs('ujang', '001234', 'ujang@mail.com', 'DKV');

// constructor
// function Mahasiswa(nama, nim, email, jurusan) {
//     // let this = {};
//     this.nama = nama;
//     this.nim = nim;
//     this.email = email;
//     this.jurusan = jurusan;
//     // return this;
// }
// let mhs4 = new Mahasiswa('jajang', '001235', 'jajang@mail.com', 'TPM');


// this
// cara 1 - function declaration
function halo() {
    console.log(this);
    console.log('halo');
}
this.halo();
// konteks this pada cara 1 itu mengembalikan object secara global

// cara 2 - object literal
let obj = {};
obj.halo = function() {
    console.log(this);
    console.log('halo');
}
obj.halo();
// this pada cara 2 itu mengembalikan object yg bersangkutan

// cara 3 - constructor
function Halo() {
    console.log(this);
    console.log('halo');
}
let obj1 = new Halo();
let obj2 = new Halo();
// this pada cara 3 mengembalikan object yg baru dibuat