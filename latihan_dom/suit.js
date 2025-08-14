function getPilihanComp() {
    // menangkap pilihan komp
    // membangkitkan bilangan random
    const comp = Math.random();
        if(comp < 0.34) {
            comp = 'gajah';
        } else if(comp >= 0.34 && comp < 0.67) {
            comp = 'orang';
        } else {
            comp = 'semut';
        }
}

function getHasil(comp, player) {
    if( player == comp) {
        return 'Seri!';
    } else if( player == 'gajah') {
        return ( comp == 'orang') ? 'Menang!' : 'Kalah!';
    } else if(player == 'orang') {
        return ( comp == 'gajah') ? 'Kalah!' : 'Menang!'; 
    } else if(player == 'semut') {
        return ( comp == 'orang') ? 'Kalah!' : 'Menang!';
    }
}

function putar() {
    const imgComp = document.querySelector('.img-comp');
    const gambar = comp;
    let i = 0;
    const awalMulai = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - awalMulai > 1000) {clearInterval; return;}
        imgComp.setAttribute('src', + gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    }, 1000);
}


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
            const pilihanComp = getPilihanComp;
            const pilihanPlayer = pil.className;
            const hasil = getHasil(pilihanComp, pilihanPlayer);
            putar();

            setTimeout(function() {
                const imgComp = document.querySelector('.img-comp');
                imgComp.setAttribute('src', pilihanComp + '.png');

                const info = document.querySelector('.info');
                info.innerHTML = hasil;
            }, 1000);
            
    })
})





// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanComp = getPilihanComp;
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComp, pilihanPlayer)

//     const imgComp = document.querySelector('.img-comp');
//     imgComp.setAttribute('src', pilihanComp + '.png')

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     const pilihanComp = getPilihanComp;
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComp, pilihanPlayer)

//     const imgComp = document.querySelector('.img-comp');
//     imgComp.setAttribute('src', pilihanComp + '.png')

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pilihanComp = getPilihanComp;
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComp, pilihanPlayer)

//     const imgComp = document.querySelector('.img-comp');
//     imgComp.setAttribute('src', pilihanComp + '.png')

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });