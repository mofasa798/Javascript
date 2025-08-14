let jmlAngkot = 10;
let angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if( noAngkot <= 6 && noAngkot !== 5) {
        console.log('Angkot no. ' + noAngkot + ' lagi narik!');
    } else if( noAngkot === 8 || noAngkot === 10 || noAngkot === 5 ) {
        console.log('Angkot no. ' + noAngkot + ' lagi lembur!');
    } else {
        console.log('Angkot no. ' + noAngkot + ' lagi mandek!');
    }
}