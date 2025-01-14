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
      <h2 style =  {{padding: "10px"}}>Film in tendenza</h2>
      <div style={{display: "flex", width: "100%", overflow: "scroll", gap: "50px", padding: "10px "}}>
        {getTrendingMovies.map((movie) => (
          <div key={movie.id}>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{width: "100%", minWidth: "200px"}}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};