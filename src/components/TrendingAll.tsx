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

  return (
    <div >
      <h2 style =  {{padding: "10px"}}>Film e serie TV consigliati per te</h2>
      <div style={{display: "flex", width: "100%", overflow: "scroll", gap: "50px", padding: "10px "}}>
        {trendingAll.map((movie) => (
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