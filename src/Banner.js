import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from './axios';
import requests from './Requests';

function Banner() {
    const[movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    }, [])
    console.log(movie);


    function truncate(string, n){
        return string?.length>n? string.substr(0, n-1) + '...':string;

    }
  return (
    <header className='banner' style={{
        backgroundPosition: "center center",
        backgroundSize: "cover",
        objectFit:"contain",
        // Black background: https://wallpapercave.com/wp/wp3321103.jpg
        
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` 
    }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>
                {movie?.title || movie?.name || movie?.original_name}
                Arjun Pathak
            </h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Engineer,</button>
                <button className='banner__button'>22</button>

            </div>
            <h1 className='banner__description'>
                
                {truncate(movie?.overview, 150)}
            </h1>
        </div>

        <div className='banner--fadeBottom'>
            
        </div>
      
    </header>
  );
}

export default Banner