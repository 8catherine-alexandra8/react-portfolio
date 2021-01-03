import React from 'react'
//Global Style
import GlobalStyle from './components/GlobalStyle'
//Screen imports
import AboutScreen from './screens/AboutScreen'
//Component imports
import Nav from './components/Nav'

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Nav />
			<AboutUs />
		</div>
	)
}

export default App
