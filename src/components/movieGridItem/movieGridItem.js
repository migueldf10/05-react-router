import React from 'react'
import './movieGridItem.scss'
import { Link } from 'react-router-dom'

export default function MovieGridItem(props) {
	const { movie } = props
	return (
		<Link to={'/movies/' + movie.imdbID}>
			<li key={movie.imdbID} className='movie-grid-item'>
				<h3>
					{movie.Title}
				</h3>
				<img src={movie.Poster} alt={movie.Title} />
			</li>
		</Link>

	)
}
