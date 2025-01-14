import { useEffect, useState } from "react"
import { AllTrendingType } from "../types/allTrendingType"
import { fetchTrendingAll } from "../api/api";

export const TrendingAll = () => {
    const [trendingAll, setTrendingAll] = useState<AllTrendingType[]>([]);

    useEffect(() => {
        const getTrendingAll = async () => {
            const data = await fetchTrendingAll(); 
            setTrendingAll(data);
        };
        getTrendingAll();
    }, []);

    return(
        <div>
      <h2>Trending All</h2>
      <div>
        {trendingAll.map((movie) => (
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