import React from 'react'
//Global Style
import GlobalStyle from './components/GlobalStyle'
//Screen imports
import AboutScreen from './screens/AboutScreen'
import ContactUsScreen from './screens/AboutScreen'
import OurWorkScreen from './screens/AboutScreen'
//Component imports
import Nav from './components/Nav'
//Router
import { Switch, Route } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Nav />
			<Switch>
				<Route path='/' exact>
					<AboutUsScreen />
				</Route>
				<Route path='/work'>
					<OurworkScreen />
				</Route>
				<Route path='/contact'>
					<ContactUsScreen />
				</Route>
			</Switch>
		</div>
	)
}

export default App
