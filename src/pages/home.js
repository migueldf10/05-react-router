import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieGridItem from '../components/movieGridItem/movieGridItem'
import { Link } from 'react-router-dom'


export default function HomePage() {
	const [movies, setMovies] = useState([])
	const searchTerm = 'dragon'
	const [inputTerm, setInputTerm] = useState("dragon")
	const URL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=5bbb8325`

	useEffect(() => {
		async function fetchOmdb() {
			const data = await axios.get(
				URL
			)
			setMovies(data.data.Search)
		}
		fetchOmdb()
	}, [searchTerm, URL])

	function updateSearch(event) {
		setInputTerm(event.target.value)
	}

	return (
		<div>
			<div className='search-bar'>
				<input onChange={updateSearch} placeholder={'dragon'} />
				<Link to={'/discover/' + inputTerm}>Search</Link>
			</div>
			<ul className='movie-grid'>
				{movies && movies.map((movie) =>
					<MovieGridItem key={movie.imdbID} movie={movie} />
				)}
			</ul>
		</div>
	)
}
