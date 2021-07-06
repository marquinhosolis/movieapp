import React, { useState } from 'react';

import './Login.scss';
import Button from '../../components/Button/Button';

import MovieAppLogo from './images/movieApp-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
	const [login, setLogin] = useState('admin');
	const [password, setPassword] = useState('admin');
	const [loginError, setLoginError] = useState(false);
	const loggedUser = localStorage.getItem('user');

	if (loggedUser) {
		window.location.href = '/';
	}

	const signIn = () => {
		if (login !== 'admin' || password !== 'admin') {
			console.log('erro');
			setLoginError(true);
		} else {
			localStorage.setItem('user', true);
			window.location.href = '/';
		}
	};

	return (
		<main className="mainLogin">
			<div className="gradientMask"></div>
			<div className="loginContent">
				<img src={MovieAppLogo} alt="MovieApp" />

				<div className="formWrapper">
					<h1>Login</h1>
					<form action="#">
						<label htmlFor="user">Username</label>
						<input
							name="userMovieApp"
							type="text"
							value={login}
							onChange={(e) => setLogin(e.target.value)}
						/>
						<label htmlFor="password">Password</label>
						<input
							name="passwordMovieLogin"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div onClick={signIn}>
							<Button>
								login <FontAwesomeIcon icon={faSignInAlt} />
							</Button>
						</div>
						{loginError && (
							<div className="alertLogin">
								<p>Wrong username or password!</p>
							</div>
						)}
						<p>Credentials: admin / admin</p>
					</form>
				</div>
			</div>
		</main>
	);
}
