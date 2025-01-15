import { useEffect, useState } from "react"
import { AllTrendingType } from "../types/allTrendingType"
import { fetchTvAll} from "../api/api";

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
    <div >
      <div style={{display: "grid", width: "100%", gap: "50px", padding: "10px", gridTemplateColumns: "repeat(6, 1fr)", marginTop: "100px"}}>
        {tvAll.map((movie) => (
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