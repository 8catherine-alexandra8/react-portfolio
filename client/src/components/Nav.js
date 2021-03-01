import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import '../burgerStyles.css'

const Nav = () => {
	const { pathname } = useLocation()

	return (
		<StyledWrapper>
			<h1>
				<Link id='logo' to='/'>
					Catherine Alexandra
				</Link>
			</h1>
			<Menu right width={250} noOverlay>
				<a
					id='about'
					className='menu-item'
					href='/'
					style={{ color: pathname === '/' ? '#0b4c5f' : '#b8b7ad' }}
				>
					<i className='far fa-user icon' /> About
				</a>
				<a
					id='projects'
					className='menu-item'
					href='/work'
					style={{ color: pathname === '/work' && '#0b4c5f' }}
				>
					<i className='fas fa-laptop icon' />Projects
				</a>
				<a
					id='resume'
					className='menu-item'
					href='/resume'
					style={{ color: pathname === '/resume' && '#0b4c5f' }}
				>
					<i className='far fa-file-alt icon' /> Resume
				</a>
				<a
					id='contact'
					className='menu-item'
					href='/contact'
					style={{ color: pathname === '/contact' && '#0b4c5f' }}
				>
					<i className='far fa-paper-plane icon' /> Contact
				</a>
			</Menu>
		</StyledWrapper>
	)
}
export default Nav

const StyledWrapper = styled.div`
	min-height: 8vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: #282828;
	position: fixed;
	top: 0;
	z-index: 10;
	padding: 1rem 2rem;
	#logo {
		font-size: 1.2rem;
		font-family: 'Work Sans', sans-serif;
		color: white;
		text-decoration: none;
	}

	@media (min-width: 360px) {
		padding: 1rem 3rem;
	}
	@media (min-width: 768px) {
		padding: 1rem 5rem;
	}
	@media (min-width: 1024px) {
		#logo {
			font-size: 1.4rem;
		}
	}
`
