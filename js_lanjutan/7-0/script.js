// for ...of
// array
// const mhs = ['Budi', 'Siti', 'Joko'];
// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach((mhs) => {
//     console.log(mhs);
// });

// for (const m of mhs) {
//     console.log(m);
// }

// string
// for const (n of nama) {
    //     console.log(n);
    // }
    // nama.foreach((n) => {
        //     console.log(n);
        // });
// const nama = 'ujang';
// mhs.forEach((m, i) => {
//     console.log(`${i + 1}. ${m}`);
// })

// for(const [i, m] of mhs.entries()) {
//     console.log(`${i + 1}. ${m}`);
// }

// NodeList
// const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n) => {
//     console.log(n.innerHTML);
// }
// for (n of liNama) {
//     console.log(n.innerHTML);
// }

// arguments
function jumlahAngka() {
    let jumlah = 0;
    for (const a of arguments) {
        jumlah += a;
    }
    return jumlah;
}

jumlahAngka(1, 2, 3, 4, 5);