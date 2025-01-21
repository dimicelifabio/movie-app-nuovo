import { useEffect, useState } from "react";
import { AllTrendingType } from "../types/allTrendingType";
import { fetchTrendingAll } from "../api/api";
import '../css/Backdrop_path.css';// Import del file CSS

export const Backdrop_path = () => {
    const [backdrop_path, setBackdrop_path] = useState<AllTrendingType[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const getBackdropPath = async () => {
            const data = await fetchTrendingAll();
            setBackdrop_path(data);
        };
        getBackdropPath();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                return (prevIndex + 1) % backdrop_path.length;
            });
        }, 9000);
        return () => clearInterval(intervalId);
    }, [backdrop_path.length]);

    return (
        <div className="backdrop-container">
            {backdrop_path.length > 0 && (
                <div>
                    <div>
                        <img
                            src={`https://image.tmdb.org/t/p/w780${backdrop_path[currentIndex].backdrop_path}`}
                            alt="Backdrop"
                            className="backdrop-image"
                        />
                    </div>
                    <div className="backdrop-title">
                        {backdrop_path[currentIndex].name}
                    </div>
                    <div className="backdrop-overview">
                        {backdrop_path[currentIndex].overview}
                    </div>
                </div>
            )}
        </div>
    );
};
