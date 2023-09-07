import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
// import movies from './movies'; // Your movie data


export const movies = [
    {
      id: 1,
      title: 'Barbie',
      description: 'The film stars Margot Robbie as Barbie and Ryan Gosling as Ken, and follows the pair on a journey of self-discovery following an existential crisis.',
      posterURL: 'https://people.com/thmb/FFiHJOzjp0cn9cloy1Ba8456Q_Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(659x285:661x287):format(webp)/barbie-movie-still-071123-2cf8cca8eb1e4f839232db47c6dc839a.jpg',
      rating: 9.5,
      trailerLink: 'https://www.youtube.com/embed/pBk4NYhWNMM?si=_ZwdfXK6YlI1UO6J', 
    },
    {
        id: 2,
        title: 'Oppenheimer',
        description: 'The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.',
        posterURL: 'https://balboapark.org/wp-content/uploads/2023/06/Oppenheimer-Christopher-Nolan-0.jpeg',
        rating: 8.6,
        trailerLink: 'https://www.youtube.com/embed/uYPbbksJxIg?si=VxfyF-DlRr78t6wf',
    },

    
  ];
  
const MovieList = () => {


    
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`} key={movie.id} style={{textDecoration: "none", color: "black"}}>
          <MovieCard movie={movie} />
        </Link>
          
        </div>
      ))}
    </div>
  );
};

export default MovieList;