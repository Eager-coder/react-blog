import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Helmet from 'react-helmet';
import Home from './pages/Home';
import Post from './pages/Post';
import Category from './pages/Category';
import './css/App.css';
function App() {
	return (
		<div className='App'>
			<Router>
				<Helmet>
					<link
						rel='icon'
						href='/assets/icon.png'
						// sizes='32x32'
					/>
				</Helmet>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/post/:uid'>
						<Post />
					</Route>
					<Route path='/category/:category'>
						<Category />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
