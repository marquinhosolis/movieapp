import React from 'react';

import Header from '../../components/Header/Header';
import Showcase from '../../components/Showcase/Showcase';
import Spotlight from '../../components/Spotlight/Spotlight';

import '../home/Home.scss';

export default function Tv() {
	return (
		<main className="pageWrapper mainHome">
			<Header />
			<Spotlight id="1399" type="tv" />
			<Showcase type="tv" title="Popular Tv Shows" list="popular" />
			<Showcase type="tv" title="Top Rated Tv Shows" list="top_rated" />
		</main>
	);
}
