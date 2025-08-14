// 1. HTML Fragments
// const mhs = {
//     nama: 'Ucok',
//     umur: 20,
//     nim: '098123',
//     email: 'ucok@mail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
//     <p class="email">${mhs.email}</p>
//     <span class="umur">${mhs.umur} tahun</span>
// </div>`;


// 2. Looping
// const mhs = [
//     {
//         nama: 'Ucok',
//         umur: 20,
//         nim: '098123',
//         email: 'ucok@mail.com'
//     },
//     {
//         nama: 'Ujang',
//         umur: 21,
//         nim: '098124',
//         email: 'ujang@mail.com'
//     }
// ];
// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.nim}</li>
//         <li>${m.email}</li>
//         <li>${m.umur} tahun</li>
//     </ul>`).join('')}`;


// 3. Conditional
// ternary
// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana Sarasvati'
// }

// const el = `<div class="lagu">
//     <h2>${lagu.judul}</h2> 
//     <span class="penyanyi">${lagu.penyanyi}</span>
//     <p class="status">${lagu.penyanyi ? 'Lagu ini dinyanyikan oleh ' + lagu.penyanyi : 'Penyanyi tidak diketahui'}</p>
// </div>`;


// 4. Nested
// HTML Fragments bersarang
// const mhs = {
//     nama: 'Ucok',  
//     umur: 20,
//     nim: '098123',
//     matkul: [
//         'Dasar-Dasar Pemrograman',
//         'Pemrograman Web Lanjut',
//         'Algoritma dan Struktur Data'
//     ]
// };
// function cetakMatkul(matkul) {
//     return `
//     <ol>
//         ${matkul.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>`;
// }
// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
//     <p class="umur">${mhs.umur} tahun</p>
//     <h4>Daftar Mata Kuliah:</h4>
//     <ul>
//         ${cetakMatkul(mhs.matkul)}
//     </ul>`;
// document.body.innerHTML = el;

// Tagged Templates
// const nama = 'Ucok';
// const umur = 20;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba `Halo, nama saya ${nama}, umur saya ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = 'Ucok';
const umur = 20;
const email = 'ucok@mail.com';

function coba(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = coba `Halo, nama saya ${nama}, umur saya ${umur} tahun, email saya adalah ${email}.`;

document.body.innerHTML = str;