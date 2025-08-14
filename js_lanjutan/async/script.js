// $('.search-btn').on('click', function() {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=474a383a&s=' + $('.input-keyword').val(),
//         success: results => { 
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//          });
//          $('.movie-container').html(cards);
//         $('.modal-detail-button').on('click', function() {
//             $.ajax({
//         url: `http://www.omdbapi.com/?apikey=474a383a&i=` + $(this).data('imdbid'),
//         success: m => {
//             const movieDetail = showMovieDetail(m);
//             $('.modal-body').html(movieDetail);
//             $('.modal-title').html(m.Title);
//         },
//         error: (e => { console.log(e.responseText) })
//             });
//         });
//         },
//         error: (e => { console.log(e.responseText) })
//     });
// });


// fetch

// const searchButton = document.querySelector('.search-btn');
// searchButton.addEventListener('click', function() {
//     const inputKeyword = document.querySelector('.input-keyword').value;
//     fetch(`http://www.omdbapi.com/?apikey=474a383a&s=${inputKeyword}`)
//         .then(response => response.json())
//         .then(results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             // ketika tombol detail diklik
//             const modalDetailButtons = document.querySelectorAll('.modal-detail-button');
//             modalDetailButtons.forEach(button => {
//                 button.addEventListener('click', function() {
//                     const imdbID = this.dataset.imdbid;
//                     fetch(`http://www.omdbapi.com/?apikey=474a383a&i=${imdbID}`)
//                         .then(response => response.json())
//                         .then(m => {
//                             const movieDetail = showMovieDetail(m);
//                             const modalBody = document.querySelector('.modal-body');
//                             modalBody.innerHTML = movieDetail;
//                             const modalTitle = document.querySelector('.modal-title');
//                             modalTitle.innerHTML = m.Title;
//                         })
//                         .catch(e => console.log(e));
//                 });
//             });
//         })
//         .catch(e => console.log(e));
// });


const searchButton = document.querySelector('.search-btn');
searchButton.addEventListener('click', async function() {
    const inputKeyword = document.querySelector('.input-keyword').value;
    const movies = await getMovies(inputKeyword);
    updateUI(movies);
});

// event binding untuk tombol detail
document.addEventListener('click', async function(e) {
    if( e.target.classlist.contains('modal-detail-button') ) {
        const imdbID = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbID);
        updateUIDetail(movieDetail);
    }
});

function getMovieDetail(imdbID) {
    return fetch(`http://www.omdbapi.com/?apikey=474a383a&i=${imdbID}`)
        .then(response => response.json())
        .then(m => m);
}

function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

function getMovies(keyword) {
    return fetch(`http://www.omdbapi.com/?apikey=474a383a&s=${keyword}`)
        .then(response => response.json())
        .then(response => response.Search);
}
 
function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}


function showCards(m) {
    return `<div class="col-md-4 my-3">
                <div class="card" style="width: 18rem;">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
};

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                            <li class="list-group-item"><strong>Director: ${m.Director}</strong></li>
                            <li class="list-group-item"><strong>Actors: ${m.Actors}</strong></li>
                            <li class="list-group-item"><strong>Writer: ${m.Writer}</strong></li>
                            <li class="list-group-item"><strong>Plot: ${m.Plot}<br>test</strong></li>
                        </ul>
                    </div>
                </div>
            </div>`
};