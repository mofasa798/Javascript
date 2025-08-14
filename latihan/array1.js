// manipulasi Array

// 1. menambah isi array
// let arr = [];
// arr[0] = "ajinium";
// arr[1] = "ajian";
// arr[2] = "hansen";

// console.log(arr);

// 2. menghapus isi array
// let arr = ["ajinium", "ajian", "hansen"];
// arr[2] = undefined;
// console.log(arr);

// 3. menampilkan isi array
// let arr = ["ajinium", "ajian", "hansen", "pixman"];

// for( let i = 0; i < arr.length; i++ ) {
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }
    
// method pada array
// 1. join
    
// console.log(arr.join());

// 2. push & pop
// arr.push('jeki');
// arr.pop();

// 3. unshift & shift
// // arr.unshift('pixman');
// arr.shift();
// console.log(arr.join(' - '));

// 4. slice
// splice(indexAwal, mauDihapusberapa, elemenBaru1, dsb, ...)
// arr.splice(1, 1, 'rusdi');
// console.log(arr.join(' - '));

// 5. slice
// slice(awal,akhir);
// let arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '));

// 6. forEach
// let angka = [1,2,3,4,5,6,7,8];
// let nama = ["ajinium", "ajian", "hansen", "pixman", "rusdi"];
// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke- ' + (i+1) + ' adalah : ' + e);
// })

// 7. map
// let angka = [1,2,3,4,5,6,7,8];
// let angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));
    
// 8. sort    
// let angka = [1,2,3,5,7,8,4,6,15,20];
// console.log(angka.join(' - '));
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));

// 9. filter & find
let angka = [1,2,10,16,9,4,5];
let angka2 = angka.find(function(x) {
    return x > 5;
});
console.log(angka2);