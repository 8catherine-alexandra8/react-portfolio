import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
//Images
import shunamiHome from '../img/shunamiHome.png'
import fitFocus from '../img/fitFocus.png'
import recipeDBCover from '../img/recipeDBCover.png'
import blogCover from '../img/blogCover.png'

//Animations
import { motion } from 'framer-motion'
import { pageAnimation, fade, photoAnim, lineAnim } from '../animation'
import { useScroll } from '../useScroll'
import ScrollTop from '../components/ScrollTop'

const ProjectListScreen = () => {
	const [ element1, controls1 ] = useScroll()
	const [ element2, controls2 ] = useScroll()
	const [ element3, controls3 ] = useScroll()
	const [ element4, controls4 ] = useScroll()

	return (
		<Work
			style={{ background: '#fff' }}
			exit='exit'
			variants={pageAnimation}
			initial='hidden'
			animate='show'
		>
			<ScrollTop />
			<Project
				ref={element1}
				variants={fade}
				animate={controls1}
				initial='hidden'
			>
				<Link to='/work/e-commerce'>
					<motion.h2 variants={fade}>E-Commerce</motion.h2>
				</Link>
				<motion.div variants={lineAnim} className='line' />
				<Link to='/work/e-commerce'>
					<motion.img
						className='shunami-gif'
						variants={photoAnim}
						src={shunamiHome}
						alt='home page'
					/>
				</Link>
			</Project>

			<Project
				ref={element2}
				variants={fade}
				animate={controls2}
				initial='hidden'
			>
				<Link to='/work/fitfocus'>
					<motion.h2 variants={fade}>
						FitFocus - Productivity App
					</motion.h2>
				</Link>
				<motion.div variants={lineAnim} className='line' />
				<Link to='/work/fitfocus'>
					<motion.img
						variants={photoAnim}
						src={fitFocus}
						alt='fitFocus illustration'
					/>
				</Link>
			</Project>

			<Project
				ref={element3}
				variants={fade}
				animate={controls3}
				initial='hidden'
			>
				<Link to='/work/blogcms'>
					<motion.h2 variants={fade}>Blog CMS</motion.h2>
				</Link>
				<motion.div variants={lineAnim} className='line' />
				<Link to='/work/blogcms'>
					<motion.img
						variants={photoAnim}
						src={blogCover}
						alt='blog api'
					/>
				</Link>
			</Project>

			<Project
				ref={element4}
				variants={fade}
				animate={controls4}
				initial='hidden'
			>
				<Link to='/work/recipeapi'>
					<motion.h2 variants={fade}>Recipes API</motion.h2>
				</Link>
				<motion.div variants={lineAnim} className='line' />
				<Link to='/work/recipeapi'>
					<motion.img
						variants={photoAnim}
						src={recipeDBCover}
						alt='recipe api'
					/>
				</Link>
			</Project>
		</Work>
	)
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  margin-top: 8vh;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`
const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #0B4C5F;
    margin-bottom: 3rem;
  }
  img {
	  width: 85%;
	  object-fit: cover;

  }
  img:hover {
	  transition: all 0.5s ease;
	  width: 90%;
  }
  a {
	  text-decoration: none;
	  color: #1b1b1b;
  }
  a:hover {
	  color:#0B4C5F; 
  }
`
export default ProjectListScreen
