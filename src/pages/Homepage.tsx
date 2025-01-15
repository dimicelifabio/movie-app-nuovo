import { Backdrop_path } from "../components/Backdrop_path"
import { Navbar } from "../components/Header"
import { MoviesAll } from "../components/MoviesAll"
import { TrendingAll } from "../components/TrendingAll"
import { TrendingMovies } from "../components/TrendingMovies"
import { TrendingPeople } from "../components/TrendingPeople"

export const Homepage = () => {
    return (
        <>
            <Navbar />
            <Backdrop_path />
            <TrendingAll />
            <TrendingMovies />
            <TrendingPeople />
            <MoviesAll />
        </>
    )

}