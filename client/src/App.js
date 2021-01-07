import React from 'react'
//Global Style
import GlobalStyle from './components/GlobalStyle'
//Import Screens
import AboutScreen from './screens/AboutScreen'
import ContactUsScreen from './screens/ContactUsScreen'
import OurWorkScreen from './screens/OurWorkScreen'
import Nav from './components/Nav'
import MovieDetailScreen from './screens/MovieDetailScreen'
//Router
import { Switch, Route, useLocation } from 'react-router-dom'
//Animation
import { AnimatePresence } from 'framer-motion'

function App() {
	const location = useLocation()

	return (
		<div className='App'>
			<GlobalStyle />

			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path='/' exact>
						<AboutScreen />
					</Route>
					<Route path='/work' exact>
						<OurWorkScreen />
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
