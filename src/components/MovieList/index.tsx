"use client";

import { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import { Movie } from "@/types/movie";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "d25224f54431d9f63fd883fb81c1bd42",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  };

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
