import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

export default function MoviePage(movieId) {
	const [movie, setMovie] = useState({})
	const route_parameters = useParams();
	const URL = `http://www.omdbapi.com/?i=${route_parameters.movieId}&apikey=5bbb8325`

	useEffect(() => {
		const fetchMovie = async () => {
			await fetch(URL).then(async (response) => {
				const movieInfo = await response.json()
				setMovie(movieInfo)
			}).catch((error) => {
				console.log(error)
			})
		}
		fetchMovie()
	}, [URL])

	return (
		<div>
			<h1>This is the movie  {movie.Title}</h1>
			<img src={movie.Poster} alt={movie.Title} />

		</div>
	)
}
