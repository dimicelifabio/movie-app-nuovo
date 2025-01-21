import { useEffect, useState } from "react";
import { AllTrendingType } from "../types/allTrendingType";
import { fetchTvAll } from "../api/api";
import "../css/TvAll.css"; // Importa il file CSS

export const TvAll = () => {
  const [tvAll, setTvAll] = useState<AllTrendingType[]>([]);

  useEffect(() => {
    const getAllTv = async () => {
      const data = await fetchTvAll();
      setTvAll(data);
    };
    getAllTv();
  }, []);

  return (
    <div>
      <div className="tv-container">
        {tvAll.map((movie) => (
          <div key={movie.id} className="tv-card">
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
