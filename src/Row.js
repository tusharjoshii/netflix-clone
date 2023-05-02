import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Row.css";

function Row({ title, fetchURL, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/"
    
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://api.themoviedb.org/3/${fetchURL}`);            
            
            setMovies(request.data.results);
            return request;
        }
        // console.log(fetchURL);
        fetchData();

    }, [fetchURL]);

    // console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && ( 
                    <img 
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name} />
                    )
                ))}
            </div>
        </div>
    );
}

export default Row;