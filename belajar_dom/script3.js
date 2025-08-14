// const p3 = document.querySelector('.p3');
// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightgreen';
// }
// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul'); //ambil parent
//     const liBaru = document.createElement('li'); // bikin element baru
//     const teksBaru = document.createTextNode('Item Baru');
//     liBaru.appendChild(teksBaru); // mulai rangkai
//     ul.appendChild(liBaru); // simpan di dalam
// })

// const p3 = document.querySelector('.pe');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightgreen';
// } 
// p3.onclick = function() {
//     p3.style.color = 'red';
// }
// // pada eventHandler, event yg pertama akan ditimpa oleh event yg kedua

const p3 = document.querySelector('.p3');
p3.addEventListener('click', function() {
    p3.style.backgroundColor = 'lightgreen';
    
})
p3.addEventListener('click', function() {
    p3.style.color = 'red';

})