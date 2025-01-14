import { TrendingAll } from "../components/TrendingAll"
import { TrendingMovies } from "../components/TrendingMovies"
import { TrendingPeople } from "../components/TrendingPeople"

export const Homepage = () => {
    return (
        <>
            <TrendingAll />
            <TrendingMovies />
            <TrendingPeople />
        </>
    )

}