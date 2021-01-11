import React, { useState } from 'react'
//Animations
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim } from '../animation'
import styled from 'styled-components'

const ContactScreen = () => {
	const [ status, setStatus ] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()
		const form = e.target
		const data = new FormData(form)
		const xhr = new XMLHttpRequest()
		xhr.open(form.method, form.action)
		xhr.setRequestHeader('Accept', 'application/json')
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return
			if (xhr.status === 200) {
				form.reset()
				setStatus('SUCCESS')
			} else {
				setStatus('ERROR')
			}
		}
		xhr.send(data)
	}

	return (
		<ContactStyle
			exit='exit'
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			style={{ background: '#fff' }}
		>
			<Title>
				<Hide>
					<motion.h5 variants={titleAnim}>Email:</motion.h5>
				</Hide>
			</Title>
			<a
				id='email'
				href='mailto:catherine.alexandra.dev@gmail.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				<i class='far fa-envelope' />
			</a>

			<Title>
				<Hide>
					<motion.h5 variants={titleAnim}>Send a message:</motion.h5>
				</Hide>
			</Title>
			<Hide>
				<Form
					onSubmit={submitHandler}
					action='https://formspree.io/f/xwkwaqjd'
					method='POST'
				>
					<label>Name:</label>
					<input type='text' name='name' placeholder='Name' />
					<label>Email:</label>
					<input type='email' name='email' placeholder='Email' />
					<label>Message:</label>
					<textarea
						type='text'
						name='message'
						placeholder='Your message'
					/>
					{status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
					{status === 'ERROR' && <p>Ooops! There was an error.</p>}
				</Form>
			</Hide>
		</ContactStyle>
	)
}
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  i {
	  font-size: 4rem;
	  color:#0B4C5F;
  }
  i:hover {
	  font-size: 5rem;
  }
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`
const Hide = styled.div`overflow: hidden;`

const Title = styled.div`
	margin-bottom: .7rem;
	@media (max-width: 1500px) {
		margin-top: 3rem;
	}
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	background-color: #b8b7ad;
	max-width: 50vw;
	min-width: 250px;
	padding: 2rem;
	border-radius: 4px;
	input {
		width: 100%;
		padding: .8rem 1.3rem;
		margin: 5px 0 14px;
		box-sizing: border-box;
		border-radius: 4px;
		border: 1px solid #353535;
	}
	textarea {
		width: 100%auto;
		height: 150px;
		padding: .8rem 1.3rem;
		margin: 5px 0 14px;
		box-sizing: border-box;
		border-radius: 4px;
		border: 1px solid #353535;
		resize: none;
	}
`
export default ContactScreen
// 		<ContactStyle
// 			exit='exit'
// 			variants={pageAnimation}
// 			initial='hidden'
// 			animate='show'
// 			style={{ background: '#fff' }}
// 		>
// 			<Title>
// 				<Hide>
// 					<motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
// 				</Hide>
// 			</Title>
// 			<div>
// 				<Hide>
// 					<Social variants={titleAnim}>
// 						<Circle />
// 						<h2>Send Us A Message</h2>
// 					</Social>
// 				</Hide>
// 				<Hide>
// 					<Social variants={titleAnim}>
// 						<Circle />
// 						<h2>Send an email.</h2>
// 					</Social>
// 				</Hide>
// 				<Hide>
// 					<Social variants={titleAnim}>
// 						<Circle />
// 						<h2>Social Media</h2>
// 					</Social>
// 				</Hide>
// 			</div>
// 		</ContactStyle>
// 	)

// const ContactStyle = styled(motion.div)`
//   padding: 5rem 10rem;
//   color: #353535;
//   min-height: 90vh;
//   @media (max-width: 1500px) {
//     padding: 2rem;
//     font-size: 1rem;
//   }
// `
// const Title = styled.div`
// 	margin-bottom: 4rem;
// 	color: black;
// 	@media (max-width: 1500px) {
// 		margin-top: 5rem;
// 	}
// `

// const Circle = styled.div`
// 	border-radius: 50%;
// 	width: 3rem;
// 	height: 3rem;
// 	background: #353535;
// `
// const Social = styled(motion.div)`
//   display: flex;
//   align-items: center;
//   h2 {
//     margin: 2rem;
//   }
// `

// export default ContactUs
