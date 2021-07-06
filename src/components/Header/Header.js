import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import Logo from './images/movieapp_logo_small.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFilm, faTv } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
	return (
		<header className="headerSidebar">
			<img src={Logo} alt="MovieApp Logo" />
			<Link to="/" className="iconSidebar">
				<FontAwesomeIcon icon={faHome} />
				<span>Home</span>
			</Link>
			<Link to="/movies" className="iconSidebar">
				<FontAwesomeIcon icon={faFilm} />
				<span>Movies</span>
			</Link>
			<Link to="/tv" className="iconSidebar">
				<FontAwesomeIcon icon={faTv} />
				<span>Tv Shows</span>
			</Link>
		</header>
	);
}
