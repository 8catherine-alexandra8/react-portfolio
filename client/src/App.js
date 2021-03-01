import React from 'react'
//Global Style
import GlobalStyle from './components/GlobalStyle'
//Import Screens
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import ProjectListScreen from './screens/ProjectListScreen'
import ProjectDetailScreen from './screens/ProjectDetailScreen'
import ResumeScreen from './screens/ResumeScreen'

//Router
import { Switch, Route, useLocation } from 'react-router-dom'
//Animation
import { AnimatePresence } from 'framer-motion'
//Components
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
	const location = useLocation()
	console.log(
		'window vw by vh',
		window.innerWidth,
		'X',
		window.innerHeight
	)
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
						<ProjectListScreen />
					</Route>
					<Route path='/work/:id'>
						<ProjectDetailScreen />
					</Route>
					<Route path='/resume'>
						<ResumeScreen />
					</Route>
					<Route path='/contact'>
						<ContactScreen />
					</Route>
				</Switch>
			</AnimatePresence>
			<Footer />
		</div>
	)
}

export default App
