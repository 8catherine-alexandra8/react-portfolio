import styled from 'styled-components'
import { motion } from 'framer-motion'

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`
export const Description = styled.div`
	flex: 1;
	padding-right: 5rem;
	h2 {
		font-weight: lighter;
	}
	@media (max-width: 1300px) {
		padding: 0;
		button {
			margin: 2rem 0rem 5rem 0rem;
		}
	}
`
export const Image = styled.div`
	flex: 1;
	overflow: hidden;
	img {
		width: 100%;
		height: 80vh;
		object-fit: scale-down;
		@media (max-width: 1300px) {
			object-fit: contain;
		}
	}
`

export const Hide = styled.div`overflow: hidden;`

// export const burgerStyles = {
// 	bmBurgerButton    : {
// 		position : 'fixed',
// 		width    : '36px',
// 		height   : '30px',
// 		right    : '36px',
// 		top      : '36px'
// 	},
// 	bmBurgerBars      : {
// 		background : 'white'
// 	},
// 	bmBurgerBarsHover : {
// 		background : '#a90000'
// 	},
// 	bmCrossButton     : {
// 		height : '24px',
// 		width  : '24px'
// 	},
// 	bmCross           : {
// 		background : '#bdc3c7'
// 	},

// 	bmMenuWrap        : {
// 		position : 'fixed',
// 		height   : '100%'
// 	},
// 	bmMenu            : {
// 		background : '#373a47',
// 		padding    : '2.5em 1.5em 0',
// 		fontSize   : '1.15em'
// 	},
// 	bmMorphShape      : {
// 		fill : '#373a47'
// 	},
// 	bmItemList        : {
// 		color   : '#b8b7ad',
// 		padding : '0.8em'
// 	},
// 	bmItem            : {
// 		display        : 'block',
// 		textDecoration : 'none',
// 		color          : '#b8b7ad'
// 	},
// 	bmOverlay         : {
// 		background : 'rgba(0, 0, 0, 0.3)'
// 	}
// }
