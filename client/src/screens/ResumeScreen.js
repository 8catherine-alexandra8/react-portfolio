import React from 'react'
import resume from '../img/CatherineResume.pdf'
import { About } from '../styles'
import styled from 'styled-components'
import ScrollTop from '../components/ScrollTop'

const ResumeScreen = () => {
	return (
		<Resume>
			<ScrollTop />
			<a href='../img/CatherineResume.pdf' download>
				<i className='fas fa-file-download'> Download PDF</i>
			</a>
			<iframe
				title='resume'
				src={resume}
				alt='resume'
				width='100%'
				height='1000px'
			>
				<p>Your browser does not support iframes.</p>
			</iframe>
			<a href='../img/CatherineResume.pdf' download>
				<i className='fas fa-file-download bottom'> Download PDF</i>
			</a>
		</Resume>
	)
}

const Resume = styled(About)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    a {
        text-decoration: none;
        color: white;
        i {
            font-size: 1.5rem;
            padding-bottom: 15px;
            color: #0B4C5F;
        }
        i:hover {
            color: #E9FA03;
        }
        .bottom {
            padding-top: 15px;
        }
    }
`
export default ResumeScreen
