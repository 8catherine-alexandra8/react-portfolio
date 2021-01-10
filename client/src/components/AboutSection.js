import React from 'react'
import portrait from '../img/portrait.png'
import portraitPlaceholder from '../img/portraitPlaceholder2.png'
import home1 from '../img/home1.png'
import { About, Description, Image, Hide } from '../styles'
//Framer Motion
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from '../animation'
import Wave from './Wave'

const AboutSection = () => {
	return (
		<About>
			<Description>
				<motion.div>
					<Hide>
						<motion.h2 variants={titleAnim}>Let's</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>
							<span>create</span> something special
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>together</motion.h2>
					</Hide>
				</motion.div>
				<motion.p variants={fade}>
					Take a look a look at what I've been working on, and get in touch
				</motion.p>
				<motion.button variants={fade}>Contact Me</motion.button>
			</Description>
			<Image>
				<motion.img
					variants={photoAnim}
					src={portraitPlaceholder}
					alt='portrait of developer'
				/>
			</Image>
			<Wave />
		</About>
	)
}

//Styled Components

export default AboutSection
