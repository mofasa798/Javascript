// spread operator
// memecah iterable menjadi single element
// console.log(...mhs);

// menggabungkan array
// const mhs = ['Dimas', 'Rizki', 'Fathur', 'Asep'];
// const dosen = ['Doni', 'Rizky', 'Cahya'];
// const orang = [...mhs, 'Aji', ...dosen];
// const orang = mhs.concat(dosen);
// console.log(orang);

// mengcopy array
// const mhs = ['Dimas', 'Rizki', 'Fathur', 'Asep'];
// const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'Doni';
// console.log(mhs1); 

// const liMHs = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < liMHs.length; i++) {
//     mhs.push(liMHs[i].textContent);
// }
// console.log(mhs);
// const mhs = [...liMHs].map(m => m.textContent);
// console.log(mhs);

// const nama = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// nama.innerHTML = huruf;

// rest parameter
// function myFunction() {
    // return myArgs;
    // return `a = ${a}, b = ${b}, myArgs = ${myArgs.join(', ')}`;
    // return Array.from(arguments);
//     return [...arguments];
// }

// console.log(myFunction(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
    // let total = 0;
    // for(const a of angka) {
    //     total += a;
    // }

    // return total;

    // return angka.reduce((a, b) => a + b, 0);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const grup1 = ['Dimas', 'Rizki', 'Fathur', 'Asep'];
// const [ketua, wakil, ...anggota] = grup1;
// console.log(anggota);

// object destructuring
// const team = {
//     pm: 'Dimas',
//     frontEnd1: 'Rizki',
//     frontEnd2: 'Fathur',
//     backEnd: 'Asep',
//     uiUx: 'Doni',
//     devOps: 'Cahya'
// }
// const { pm, ...myTeam} = team;
// console.log(myTeam);

// filtering
function filterBy(type, values) {
    return values.filter(value => value.type === type).map(value => value.name);
}