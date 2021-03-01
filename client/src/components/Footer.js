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
					<a
						id='github-link'
						href='https://github.com/8catherine-alexandra8'
						target='_blank'
						rel='noreferrer'
						className='footer-link'
					>
						<i className='fab fa-github external-link' />
					</a>
				</li>
				<li>
					<a
						id='linkedin-link'
						href='https://www.linkedin.com/in/catherine-alexandra-b595a957/'
						targer='_blank'
						className='footer-link'
					>
						<i className='fab fa-linkedin external-link' />
					</a>
				</li>
				<li>
					<a
						id='email'
						href='mailto:catherine.alexandra.dev@gmail.com'
						target='_blank'
						rel='noopener noreferrer'
						className='footer-link'
					>
						<i className='far fa-envelope external-link' />
					</a>
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
		justify-content: center;
		padding-top: 25px;
		padding-bottom: 0px;
		font-size: 1rem;
		line-height: normal;
		color: #b8b7ad;
	}
`
const StyledFooterMenu = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;

	li {
		padding: 10px;
		font-size: 1.3rem;
		color: #b8b7ad;
		i {
			font-size: 2rem;
			color: #b8b7ad;
		}
		i:hover {
			color: #e9fa03;
			transition: all 0.5s ease;
		}
	}
	li:hover {
		color: #e9fa03 !important;
		transition: all 0.5s ease !important;
	}
	.footer-link {
		text-decoration: none;
	}
`
