const addMoviesBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if(movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovie = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter))

    filteredMovie.forEach((movie) => {
        const movieEl = document.createElement('li');
        const { info, ...otherProps} = movie;
        console.log('otherProps', otherProps);
        // const {title} = info;
        let text = movie.getFormattedTitle() + ' - ';
        for(const key in info) {
            if(key !== 'title') {
                text = text + `${key}: ${info[key]}`
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    })
}

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (extraName.trim() === '' || 
        extraValue === '') {
        return
    }

    const newMovie = {
        info: {
            set title(val) {
                if(title.trim() === '') {
                    this._title = 'DEFAULT';
                    return;
                } else {
                    this._title = val
                }
            },      
            get title() {
                return this._title
            },         
            [extraName]: extraValue       // this [] its because is a dynamic value;
        },
        id: Math.random().toString(),
        getFormattedTitle() {
            return this.info.title.toUpperCase();
        }
    }

    movies.push(newMovie);
    console.log(newMovie);

    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
    console.log(filter);
}

addMoviesBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

