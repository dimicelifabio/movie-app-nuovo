import { ALL_MOVIES_URL, ALL_URL, MOVIES_URL, PEOPLE_URL, SERIE_URL } from "./config"

export const fetchTrendingAll = async () => {
    try {
        const response = await fetch(ALL_URL);
        if (!response.ok) {
            throw new Error('Errore nella richiesta: ' + response.status);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
        return []; 
    }
};

export const fetchTrendingMovies = async () => {
    try {
        const response = await fetch(MOVIES_URL);
        if (!response.ok) {
            throw new Error('Errore nella richiesta: ' + response.status);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
        return [];
    }
};

export const fetchTrendingTv = async () => {
    try {
        const response = await fetch(SERIE_URL);
        if (!response.ok) {
            throw new Error('Errore nella richiesta: ' + response.status);
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
        return [];
    }
};

export const fetchTrendingPeople = async () => {
    try {
        const response = await fetch(PEOPLE_URL);
        if (!response.ok) {
            throw new Error('Errore nella richiesta: ' + response.status);
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
        return [];
    }
};

export const fetchMoviesAll = async () => {
    try {
        const response = await fetch(ALL_MOVIES_URL);
        if (!response.ok) {
            throw new Error('Errore nella richiesta: ' + response.status);
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Errore nel recupero dei dati:", error);
        return [];
    }
};