import { useEffect, useState } from "react"
import { fetchTrendingMovies } from "../api/api";
import { MovieTrendingType } from "../types/movieTrendingType";

export const TrendingMovies = () => {
    const [getTrendingMovies, setgetTrendingMovies] = useState<MovieTrendingType[]>([]);

    useEffect(() => {
        const getTrendingMovies = async () => {
            const data = await fetchTrendingMovies(); 
            setgetTrendingMovies(data);
        };
        getTrendingMovies();
    }, []);

    return(
        <div>
      <h2>Trending Movies</h2>
      <div>
        {getTrendingMovies.map((movie) => (
          <div key={movie.id}>
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