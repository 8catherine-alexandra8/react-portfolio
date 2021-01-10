import React from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
	const { pathname } = useLocation()

	return (
		<StyledFooter>
			<StyledFooterMenu>
				<Link className='footer-link' to='/'>
					<li style={{ color: pathname === '/' ? '#0b4c5f' : '#b8b7ad' }}>
						About
					</li>
				</Link>
				<Link className='footer-link' to='/work'>
					<li
						style={{ color: pathname === '/work' ? '#0b4c5f' : '#b8b7ad' }}
					>
						Projects
					</li>
				</Link>
				<Link className='footer-link' to='/resume'>
					<li
						style={{
							color : pathname === '/resume' ? '#0b4c5f' : '#b8b7ad'
						}}
					>
						Resume
					</li>
				</Link>
				<Link className='footer-link' to='/contact'>
					<li
						style={{
							color : pathname === '/contact' ? '#0b4c5f' : '#b8b7ad'
						}}
					>
						Contact
					</li>
				</Link>
				<li>
					<i class='fab fa-linkedin' />
				</li>
				<li>
					<i class='fab fa-github' />
				</li>
			</StyledFooterMenu>
			<p>&copy; 2021 Catherine Alexandra. All rights reserved.</p>
		</StyledFooter>
	)
}

export default Footer

const StyledFooter = styled.footer`
	min-height: 10vh;
	display: flex;
	flex-direction: column;
	margin: auto;
	background: #282828;
	padding: 1rem;
	bottom: 0;
	p {
		display: flex;
		padding: 10px;
		justify-content: center;
		font-size: 1rem;
		line-height: normal;
		color: #b8b7ad;
	}
`
const StyledFooterMenu = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
	li {
		padding: 10px;
		font-size: 1.3rem;
		color: #b8b7ad;
		i {
			font-size: 2rem;
		}
	}
	.footer-link {
		text-decoration: none;
	}
`
//		;
