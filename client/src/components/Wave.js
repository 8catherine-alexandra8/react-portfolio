import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { fade } from '../animation'

const Wave = () => {
	return (
		<WaveSvg
			viewBox='0 0 1384 539'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<motion.path
				variants={fade}
				initial={{ pathLength: 0, pathOffset: 1 }}
				animate={{ pathLength: 1, pathOffset: 0 }}
				transition={{ duration: 3 }}
				d='M66 217L92 173M66 217L140 182M66 217L72 143M66 217H140M66 217L34 143M92 173L140 182M92 173L72 143M92 173L127 122M140 182L127 122M140 182L211 122M140 182L187 191M140 182V217M72 143L127 122M72 143L59 74M127 122H211M127 122L59 74M127 122L120 63M127 122L149 101L120 63M211 122L187 191M211 122V197M211 122L310 182M187 191L211 197M187 191V254M211 197L187 254M211 197L310 182M140 217L187 254M187 254L310 182M310 182L355 235M310 182H383M310 182L347 159L498 254M355 235L383 182M355 235L498 254M383 182H436M498 254L508 182M498 254L436 182M498 254L551 287M508 182H436M508 182L531.752 240M551 287L639 254M551 287L531.752 240M551 287L611 306M639 254L531.752 240M639 254L611 306M639 254V312M611 306L639 312M611 306V361M639 312L611 361M611 361H657M611 361V423M611 423L657 361M611 423H671M657 361L671 423M657 361L742 443M671 423L742 443M671 423L698 452M742 443L698 452M742 443L776 518M742 443L802 492M698 452L776 518M776 518L802 492M776 518L827 536M802 492L827 536M802 492L857.5 478M827 536L913 464M913 464L857.5 478M913 464L869 415M913 464L994 423M913 464L994 503M857.5 478L869 415M869 415L994 423M869 415L1021 387.776M994 423V503M994 423L1070 379M994 503L1070 379M1070 379L1079 325M1070 379L1021 387.776M1070 379L1134 361M1079 325L1021 387.776M1079 325L1134 361M1079 325L1101 274M1134 361L1251 306M1134 361L1117.5 317.5M1101 274L1117.5 317.5M1101 274L1251 306M1101 274L1181 197M1101 274L1209 245M1251 306L1117.5 317.5M1251 306L1209 245M1181 197L1209 245M1181 197H1226M1181 197L1231 143M1181 197L1162 143M1181 197L1152 159L1162 143M1209 245L1226 197M1226 197L1231 143M1231 143H1162M1231 143L1197 95M1231 143L1319 84M1162 143L1197 95M1197 95L1274 88.0574M1319 84L1336 35M1319 84L1274 88.0574M1336 35L1274 88.0574M1336 35L1379 26L1362 63L1336 35ZM59 74L120 63M59 74L34 143M59 74L4 5M120 63L4 5M34 143L4 5'
				stroke='#D96ED4'
				strokeOpacity='0.5'
				strokeWidth='5'
			/>
		</WaveSvg>
	)
}
// const Wave = () => {
// 	return (
// 		<WaveSvg
// 			viewBox='0 0 1440 363'
// 			fill='none'
// 			xmlns='http://www.w3.org/2000/svg'
// 		>
// 			<motion.path
// 				initial={{ pathLength: 0, pathOffset: 1 }}
// 				animate={{ pathLength: 1, pathOffset: 0 }}
// 				transition={{ duration: 1 }}
// 				d='M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5'
// 				stroke='#D96ED4'
// 				strokeOpacity='0.5'
// 				strokeWidth='10'
// 			/>
// 		</WaveSvg>
// 	)
// }

const WaveSvg = styled.svg`
	position: absolute;
	left: 0;
	z-index: -1;
`

export default Wave
//@media (max-width: 1300px) {
//		display: none;
//	}
