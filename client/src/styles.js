import styled from 'styled-components'
import { motion } from 'framer-motion'

export const About = styled(motion.div)`
	display: block;
	padding: 2rem 2rem;
	text-align: center;
	color: white;
	min-height: 90vh;
	margin-top: 8vh;
  	@media (min-width: 1200px) {
  		display: flex;
  		align-items: center;
  		justify-content: space-between;
  		padding: 5rem 10rem;
  	}
`
export const Description = styled.div`
	padding: 0;
	button {
		margin: 2rem 0rem 5rem 0rem;
	}
	span {
		text-shadow: 2px 2px 4px #000000;
	}
	@media (min-width: 768px) {
		p {
			font-size: 1.6rem;
		}
	}
	@media (min-width: 1200px) {
		flex: 1;
		padding-right: 5rem;
		font-weight: lighter;
	}
`
export const Image = styled.div`
	flex: 1;
	overflow: hidden;
	img {
		width: 100%;
		object-fit: scale-down;
	}
	@media (min-width: 540px) {
		height: 60vh;
		max-width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
	@media (min-width: 768px) {
		height: 70vh;
		max-width: 60%;
	}
	@media (min-width: 1024px) {
		max-width: 50%;
	}
	@media (min-width: 1400px) {
		max-width: 500px;
		padding-left: 7%;
		padding-top: 2%;
	}
`

export const Hide = styled.div`overflow: hidden;`
