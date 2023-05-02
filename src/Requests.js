const API_KEY="4272cf3f0edaa73fa4c5d8963bf8c641";

const requests={
    fetchTrending: `trending/all/week?api_key=4272cf3f0edaa73fa4c5d8963bf8c641&language=en-US`,
    // https://api.themoviedb.org/3/trending/all/week?api_key=4272cf3f0edaa73fa4c5d8963bf8c641&language=en-US
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    // https://api.themoviedb.org/3/discover/tv?api_key=4272cf3f0edaa73fa4c5d8963bf8c641&with_networks=213
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    // https://api.themoviedb.org/3/movie/top_rated?api_key=4272cf3f0edaa73fa4c5d8963bf8c641&language=en-US
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres-28`,
    // https://api.themoviedb.org/3/discover/movie?api_key=4272cf3f0edaa73fa4c5d8963bf8c641&with_genres-28
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`, 
    // https://api.themoviedb.org/3/discover/movie?api_key=4272cf3f0edaa73fa4c5d8963bf8c641&with_genres=35
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27` ,
    // https://api.themoviedb.org/3/discover/movie?api_key=4272cf3f0edaa73fa4c5d8963bf8c641&with_genres=27
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    // https://api.themoviedb.org/3/discover/movie?api_key=4272cf3f0edaa73fa4c5d8963bf8c641&with_genres=10749
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
    // https://api.themoviedb.org/3/discover/movie?api_key=4272cf3f0edaa73fa4c5d8963bf8c641&with_genres=99
    };

export default requests;