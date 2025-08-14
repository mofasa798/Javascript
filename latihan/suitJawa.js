let tanya = true;
while ( tanya ) {

// menangkap pilihan player
let p = prompt('Pilih: gajah, semut, orang');
// menangkap pilihan komp
// membangkitkan bilangan random
let comp = Math.random();

if(comp < 0.34) {
    comp = 'gajah';
} else if(comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
} else {
    comp = 'semut';
}

let hasil = '';
// menentukan rules
if( p == comp) {
    hasil = 'Seri!';
} else if( p == 'gajah') {
    hasil = ( comp == 'orang') ? 'Menang!' : 'Kalah!';
} else if(p == 'orang') {
    hasil = ( comp == 'gajah') ? 'Kalah!' : 'Menang!'; 
} else if(p == 'semut') {
hasil =( comp == 'orang') ? 'Kalah!' : 'Menang!';
} else {
    hasil = 'Anda yang benar saja, ulangilah!!!';
}
// tampilkan hasil
alert('Kamu memilih: ' + p + ', Komputer memilih: ' + comp + '\nMaka hasilnya: kamu ' + hasil);
tanya = confirm('rematch?');
}
alert('Thx gan.')