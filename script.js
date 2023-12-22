document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = '347ff73078a8a9c28442d5f658c38ff3'
let urlbase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w500'

let resultContainer = document.getElementById('results')

function searchMovies() {
    resultContainer.innerHTML = 'Cargando...'

    let searchInput = document.getElementById('searchInput').value
    fetch(`${urlbase}?api_key=${api_key}&query=${searchInput}`)
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => diplayMovies(response.results))

}
function diplayMovies(movies) {
    resultContainer.innerHTML = ''

    if (movies.length === 0) {
        resultContainer.innerHTML = '<p>no se encontraron resultados para tu busqueda </p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let realeaseDate = document.createElement('p')
        realeaseDate.textContent = 'la fecha de lanzamiento fue: ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let poserPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = poserPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(realeaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)


    });
}