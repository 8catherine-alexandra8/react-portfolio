import React from 'react'
//Global Style
import GlobalStyle from './components/GlobalStyle'
//Screen imports
import AboutScreen from './screens/AboutScreen'
import ContactUsScreen from './screens/AboutScreen'
import OurWorkScreen from './screens/AboutScreen'
import MovieDetailScreen from './screens/MovieDetailScreen'
//Component imports
import Nav from './components/Nav'
//Router
import { Switch, Route, useLocation } from 'react-router-dom'
//Animation
import { AnimatePresence } from 'framer-motion'
import 

function App() {
	const location = useLocation()
	return (
		<div className='App'>
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path='/' exact>
						<AboutUsScreen />
					</Route>
					<Route path='/work' exact>
						<OurworkScreen />
					</Route>
					<Route path='/work/:id'>
						<MovieDetailScreen />
					</Route>
					<Route path='/contact'>
						<ContactUsScreen />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	)
}

export default App
