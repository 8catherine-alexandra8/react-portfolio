import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import '../burgerStyles.css'

const Nav = () => {
	const { pathname } = useLocation()

	return (
		<StyledNav>
			<h1>
				<Link id='logo' to='/'>
					Catherine Alexandra
				</Link>
			</h1>
			<Menu right width={250}>
				<a
					id='about'
					className='menu-item'
					href='/'
					style={{ color: pathname === '/' ? '#0b4c5f' : '#b8b7ad' }}
				>
					<i class='far fa-user icon' /> About
				</a>
				<a
					id='projects'
					className='menu-item'
					href='/work'
					style={{ color: pathname === '/work' && '#0b4c5f' }}
				>
					<i class='fas fa-laptop icon' />Projects
				</a>
				<a
					id='resume'
					className='menu-item'
					href='/resume'
					style={{ color: pathname === '/resume' && '#0b4c5f' }}
				>
					<i class='far fa-file-alt icon' /> Resume
				</a>
				<a
					id='contact'
					className='menu-item'
					href='/contact'
					style={{ color: pathname === '/contact' && '#0b4c5f' }}
				>
					<i class='far fa-paper-plane icon' /> Contact
				</a>
			</Menu>
		</StyledNav>
	)
}
export default Nav

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background: #282828;
	position: sticky;
	top: 0;
	z-index: 10;
	#logo {
		font-size: 1.7rem;
		font-family: 'Work Sans', sans-serif;
		color: white;
		text-decoration: none;
	}
	@media (max-width: 1300px) {
		padding: 2rem 1rem;
		#logo {
			display: inline-block;
			margin: 1rem;
		}
	}
`
// const Line = styled.div`
// 	height: 0.3rem;
// 	background: #0b4c5f;
// 	width: 0%;
// 	position: absolute;
// 	bottom: -80%;
// 	left: 60%;
// 	@media (max-width: 1300px) {
// 		left: 0%;
// 	}
// `
// 	li {
// 	padding-left: 10rem;
// 	position: relative;
// }

// 	a {
// 	color: white;
// 	text-decoration: none;
// }

// ul {
// 	display: flex;
// 	list-style: none;
// }

// <a
// 	onClick={() => showSettings()}
// 	className='menu-item--small'
// 	href=''
// >
// 	Settings
// </a>

// const Nav = () => {
// 	const { pathname } = useLocation()
// 	return (
// 		<StyledNav>
// <h1>
// 	<Link id='logo' to='/'>
// 		Capture
// 	</Link>
// </h1>
// 			<ul>
// 				<li>
// 					<Link to='/'>1. About Us</Link>
// <Line
// 	transition={{ duration: 0.75 }}
// 	initial={{ width: '0%' }}
// 	animate={{ width: pathname === '/' ? '50%' : '0%' }}
// />
// 				</li>
// 				<li>
// 					<Link to='/work'>2. Our Work</Link>
// 					<Line
// 						transition={{ duration: 0.75 }}
// 						initial={{ width: '0%' }}
// 						animate={{ width: pathname === '/work' ? '50%' : '0%' }}
// 					/>
// 				</li>
// 				<li>
// 					<Link to='/contact'>3. Contact Us</Link>
// 					<Line
// 						transition={{ duration: 0.75 }}
// 						initial={{ width: '0%' }}
// 						animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
// 					/>
// 				</li>
// 			</ul>
// 		</StyledNav>
// 	)
// }

// const StyledNav = styled.nav`
// 	min-height: 10vh;
// 	display: flex;
// 	margin: auto;
// 	justify-content: space-between;
// 	align-items: center;
// 	padding: 1rem 10rem;
// 	background: #282828;
// 	position: sticky;
// 	top: 0;
// 	z-index: 10;
// 	a {
// 		color: white;
// 		text-decoration: none;
// 	}
// 	ul {
// 		display: flex;
// 		list-style: none;
// 	}
// 	#logo {
// 		font-size: 1.5rem;
// 		font-family: "Lobster", cursive;
// 		font-weight: lighter;
// 	}
// 	li {
// 		padding-left: 10rem;
// 		position: relative;
// 	}
// 	@media (max-width: 1300px) {
// flex-direction: column;
// padding: 2rem 1rem;
// #logo {
// 	display: inline-block;
// 	margin: 1rem;
// }
// ul {
// 			padding: 2rem;
// 			justify-content: space-around;
// 			width: 100%;
// 			li {
// 				padding: 0;
// 			}
// 		}
// 	}
// `

// export default Nav
