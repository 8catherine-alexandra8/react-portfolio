import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { About } from '../styles'
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion'
import { useScroll } from '../useScroll'
import { scrollReveal } from '../animation'

const FaqSection = () => {
	const [ element, controls ] = useScroll()
	return (
		<Faq
			variants={scrollReveal}
			ref={element}
			animate={controls}
			initial='hidden'
		>
			<h2>
				Questions? <span>FAQ</span>
			</h2>
			<AnimateSharedLayout>
				<Toggle title='Where can I see your work?'>
					<div className='answer'>
						<p>You can find an index of projects here:</p>
						<Link className='faq-link' to='/work'>
							<i className='far fa-file-alt icon' /> Projects
						</Link>
						<p>
							From there, click on any project that interests you to find
							more details, including links to the deployed application and
							its corresponding GitHub repo
						</p>
					</div>
				</Toggle>
				<Toggle title='Why should I hire you?'>
					<div className='answer'>
						<p>
							In my experience, it is a pleasure to work with people who
							are passionate about, and truly enjoy, their work and I am
							definitely one of those people. I don't have years and years
							of experience to temper my excitement and enthusiasm.
						</p>
						<p>
							Being a self-taught developer demonstrates that I'm
							resourceful, intrinsically motivated, and I can maintain the
							high level of discipline, and fortitude it takes to see
							projects through, even when it's challenging.
						</p>
					</div>
				</Toggle>
				<Toggle title='May I see your resume?'>
					<div className='answer'>
						<p>View and download here:</p>
						<Link className='faq-link' to='/resume'>
							<i className='far fa-file-alt icon' /> Resume
						</Link>
					</div>
				</Toggle>
				<Toggle title='What do you do for fun?'>
					<div className='answer'>
						<p>
							Learning is fun and I've been doing a whole lot of that
							lately.
						</p>
						<p>
							If I'm not sitting in front of the computer, you can find me
							outside, enjoying all the beauty and adventure that Colorado
							has to offer. My most recent hobby is gravel biking and I'd
							like to expand that into bikepacking this year.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</Faq>
	)
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #0b4c5f;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
	}
	.faq-link {
		text-decoration: none;
		color: white;
		font-size: 1.5rem;
	}
  }
`

export default FaqSection
