import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<div className='header'>
			<ul>
				<li>
					<Link to='/' >
						Go to home
            </Link>
				</li>
			</ul>
		</div>
	)
}
