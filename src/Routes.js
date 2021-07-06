import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Movies from './pages/movies/Movies';
import Tv from './pages/tv/Tv';
import DetailTv from './components/Detail/DetailTv';
import DetailMovie from './components/Detail/DetailMovie';

export default function Routes() {
	const loggedUser = localStorage.getItem('user');
	return (
		<>
			{loggedUser && (
				<Router>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route exact path="/movies">
							<Movies />
						</Route>
						<Route path={`/movie/:id`}>
							<DetailMovie />
						</Route>
						<Route exact path="/tv">
							<Tv />
						</Route>
						<Route path={`/tv/:id`}>
							<DetailTv />
						</Route>
					</Switch>
				</Router>
			)}
			{!loggedUser && <Login />}
		</>
	);
}
