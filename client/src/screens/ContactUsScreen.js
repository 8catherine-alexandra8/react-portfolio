import React from 'react'
//Animations
import { motion } from framer-motion
import { pageAnimation } from '../animation'

const ContactUsScreen = () => {
	return (
		<motion.div
			exit='exit'
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			>
				<h1>CONTACT US</h1>
		</motion.div>
	)
}

export default ContactUsScreen
