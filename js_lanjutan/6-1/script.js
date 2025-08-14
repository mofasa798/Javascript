// destructuring

// function penjumlahanPerkalian (a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(10, 5)[0];
// const kali = penjumlahanPerkalian(10, 5)[1];

// const [jumlah, kali] = penjumlahanPerkalian(10, 5);
// console.log(jumlah);
// console.log(kali);

// const [jumlah, kurang, kali, bagi] = penjumlahanPerkalian(10, 5);
// console.log(kurang);

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     };
// }
// const { tambah, kurang, kali, bagi } = kalkulasi(10, 5);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// destructuring function arguments
const msh1 = {
    nama: 'muklis',
    umur: 25,
    hobi: 'nuyul',
    nilai: {
        tugas: 90,
        uts: 85,
        uas: 80
    }
}

// function cetakMhs({ nama, umur, hobi }) {
//     return `Halo, saya ${nama}, umur saya ${umur} tahun, hobi saya adalah ${hobi}.`;
// }

// cetakMhs(msh1);
// console.log(cetakMhs(msh1));

function cetakMhs({ nama, umur, hobi, nilai: { tugas, uts, uas } }) {
    return `Halo, saya ${nama}, umur saya ${umur} tahun, hobi saya adalah ${hobi}, dan nilai saya adalah ${uas}.`;
}
console.log(cetakMhs(msh1));