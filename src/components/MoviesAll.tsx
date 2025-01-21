import { useEffect, useState } from "react";
import { AllTrendingType } from "../types/allTrendingType";
import { fetchMoviesAll } from "../api/api";
import "../css/MoviesAll.css"; // Importa il file CSS

export const MoviesAll = () => {
  const [moviesAll, setMoviesAll] = useState<AllTrendingType[]>([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const data = await fetchMoviesAll();
      setMoviesAll(data);
    };
    getAllMovies();
  }, []);

  return (
    <div>
      <div className="movies-container">
        {moviesAll.map((movie) => (
          <div key={movie.id} className="movie-card">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
