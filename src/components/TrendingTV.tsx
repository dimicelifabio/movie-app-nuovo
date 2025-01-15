import { useEffect, useState } from "react"
import { fetchTrendingTv } from "../api/api";
import { TvTrendingType } from "../types/tvTrendingType";

export const TrendingTv = () => {
    const [getTrendingTv, setgetTrendingTv] = useState<TvTrendingType[]>([]);

    useEffect(() => {
        const getTrendingTv = async () => {
            const data = await fetchTrendingTv(); 
            setgetTrendingTv(data);
        };
        getTrendingTv();
    }, []);

    return(
        <div>
      <h2 style =  {{padding: "10px"}}>Serie TV in tendenza</h2>
      <div style={{display: "flex", width: "100%", overflow: "scroll", gap: "50px", padding: "10px "}}>
        {getTrendingTv.map((tv) => (
          <div key={tv.id}>
            {tv.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                alt={tv.name}
                style={{width: "100%", minWidth: "200px"}}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};