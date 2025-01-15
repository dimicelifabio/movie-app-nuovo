import { useEffect, useState } from "react"
import { AllTrendingType } from "../types/allTrendingType"
import { fetchMoviesAll} from "../api/api";

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
    <div >
      <div style={{display: "grid", width: "100%", gap: "50px", padding: "10px", gridTemplateColumns: "repeat(5, 1fr)", marginTop: "100px"}}>
        {moviesAll.map((movie) => (
          <div key={movie.id}>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{width: "100%", maxWidth: "200px"}}

              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};