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
                        <div>
                            <img
                                src={`https://image.tmdb.org/t/p/w780${backdrop_path[currentIndex].backdrop_path}`}
                                alt="Backdrop"
                                style={{
                                    width: "70%",
                                    marginLeft: "30%",
                                    height: "auto",
                                    maxHeight: "60vh",
                                    objectFit: "cover",
                                    zIndex: "-1"

                                }}
                            />
                        </div>




                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "20px",
                                color: "white",
                                fontSize: "32px",
                                fontWeight: "bold",
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
                                top: "70%",
                                left: "20px",
                                fontSize: "12px",
                                fontWeight: "normal",
                                color: "white",
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

