import { useEffect, useState } from "react";
import { AllTrendingType } from "../types/allTrendingType";
import { fetchTrendingAll } from "../api/api";

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
        <>
            <div style={{ position: "relative", width: "100%" }}>
                {backdrop_path.length > 0 && (
                    <div style={{ position: "relative" }}>

                        <img
                            src={`https://image.tmdb.org/t/p/w780${backdrop_path[currentIndex].backdrop_path}`}
                            alt="Backdrop"
                            style={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "50vh",
                                objectFit: "cover",
                                background: "linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%)"

                            }}
                        />
 

                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "20px",
                                color: "red",
                                fontSize: "24px",
                                fontWeight: "bold",
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                                padding: "5px 10px",
                                borderRadius: "5px",
                            }}
                        >
                            {backdrop_path[currentIndex].name}
                        </div>
                        <div
                            style={{
                                position: "absolute",
                                width: "40%",
                                top: "80%",
                                left: "20px",
                                color: "black",
                                fontSize: "16px",
                                padding: "5px 10px",
                                borderRadius: "5px",
                            }}
                        >
                            {backdrop_path[currentIndex].overview}
                        </div>

                    </div>
                )}
            </div>
        </>
    );
};

