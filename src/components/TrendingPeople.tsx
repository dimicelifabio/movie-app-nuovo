import { useEffect, useState } from "react";
import { fetchTrendingPeople } from "../api/api";
import { PeopleTrendingType } from "../types/peopleTrendingType";

export const TrendingPeople = () => {
  const [getTrendingPeople, setTrendingPeople] = useState<PeopleTrendingType[]>([]);

  useEffect(() => {
    const getTrendingPeople = async () => {
      const data = await fetchTrendingPeople();
      setTrendingPeople(data);
    };
    getTrendingPeople();
  }, []);

  return (
    <div>
      <h1>Trending People</h1>
      {getTrendingPeople.map((person) => {
        // se non è presente il profile_path non mostrare nulla
        if (!person.profile_path) {
          return null;
        }
        
        return (
          <div key={person.id}>
            
            <img
              src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
            />
          </div>
        );
      })}
    </div>
  );
};
