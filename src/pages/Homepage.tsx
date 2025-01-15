import { Backdrop_path } from "../components/Backdrop_path"
import { Navbar } from "../components/Header"
import { TrendingAll } from "../components/TrendingAll"
import { TrendingMovies } from "../components/TrendingMovies"
import { TrendingTv } from "../components/TrendingTV"

export const Homepage = () => {
    return (
        <>
            <Navbar />
            <Backdrop_path />
            <TrendingAll />
            <TrendingMovies />
            <TrendingTv/>
        </>
    )

}