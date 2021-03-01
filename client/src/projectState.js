//Import Images
import shunamiSearch from './img/shunamiSearch.gif'
import shunamiGit from './img/shunamiGit.png'
import focusFitGit from './img/focusFitGit.png'
import fitFocus from './img/fitFocus.gif'
import recipeGit from './img/recipeGitA.png'
import recipeDB from './img/recipeDB.gif'
import blogSmaller from './img/blogSmaller.gif'
import blogGit from './img/blogGit.png'

export const projectState = () => {
	return [
		{
			title              : 'E-Commerce',
			about              :
				'Clean, responsive e-commerce site with shopper friendly UI and protected UI for admin. Customers can browse, search, purchase via PayPal account or credit card, track orders and review products. Admins can edit orders, create/edit/delete users & products, and upload product images.',
			gif                : shunamiSearch,
			gifLink            : 'https://shunami.herokuapp.com/',
			gifWidth           : '600',
			git                : shunamiGit,
			gitLink            :
				'https://github.com/8catherine-alexandra8/mern-ecomm',
			gitWidth           : '',
			url                : '/work/e-commerce',
			frontEndTech       : [
				'React',
				'Redux',
				'React-Bootstrap',
				'HTML',
				'CSS'
			],
			backEndTech        : [
				'Node',
				'Express',
				'Axios',
				'Paypal API',
				'Mongoose',
				'MongoDB Atlas',
				'bcryptjs',
				'JSON Web Token'
			],
			futureEnhancements : [
				'Utilize 3rd party storage service for images uploaded by admins, during product creation, so that images persist indefinitely',
				'Give admin users the ability to control order of product display',
				`Update database stock records as part of order 'isPaid' state update`,
				'Show alert to user if selected item is last one, upon cart update'
			]
		},
		{
			title              : 'FitFocus',
			about              :
				'Productivity application, based on the Pomodoro technique:  Users set their own interval targets for focus, short breaks, long breaks and total number of focus sessions for the day.  App utilizes interval timers, progress bars, UI design, and sounds to keep user on schedule.  During short break intervals, user is prompted with body-weight exercises to enhance the efficacy of the break. A lazy-break option is also available for short break intervals. At the end of the work session, app provides user with feedback showing time spent focusing and exercising as well as percent of goal target achieved. *Note: deployed site is set up as demo.  Focus and long break intervals last 1 second/minute and short break intervals last 10 seconds/minute',
			gif                : fitFocus,
			gifLink            : 'https://fitandfocused.herokuapp.com/',
			gifWidth           : '250',
			git                : focusFitGit,
			gitLink            :
				'https://github.com/8catherine-alexandra8/fitfocus',
			gitWidth           : '',
			url                : '/work/fitfocus',
			frontEndTech       : [
				'React',
				'Redux',
				'React-Bootstrap',
				'HTML',
				'CSS'
			],
			backEndTech        : [
				'Node',
				'Express',
				'Axios',
				'Mongoose',
				'MongoDB Atlas'
			],
			futureEnhancements : [
				'Rebuild using React Native',
				'Add user accounts',
				`Track user, by account, over time, and provide long term performance feedback`,
				'Give user ability to set audio preferences'
			]
		},
		{
			title              : 'Recipes API',
			about              :
				'Simple, intuitive, recipes API where users can search for recipes, add recipes, edit recipes and delete recipes',
			gif                : recipeDB,
			gifLink            : 'https://db-4-recipes.herokuapp.com/',
			gifWidth           : '600',
			git                : recipeGit,
			gitLink            :
				'https://github.com/8catherine-alexandra8/mernstack-recipes-db',
			gitWidth           : '',
			url                : '/work/recipeapi',
			frontEndTech       : [ 'React', 'HTML', 'CSS' ],
			backEndTech        : [
				'Node',
				'Express',
				'Axios',
				'Mongoose',
				'MongoDB Atlas'
			],
			futureEnhancements : [
				'Add images and image upload capability',
				'Add filters so users can search for recipes based on inclusion of multiple ingredients',
				`Add recipe sharing functionality`,
				'Improve formatting in recipe directions section'
			]
		},
		{
			title              : 'Blog CMS',
			about              :
				'Content management system for bloggers, designed to facilitate the posting of content by any registered user, via convenient templates, pre-formatted to support several different types of blog posts, like the ever popular list-type post and how-to post.  Registered and non-registered users can read content and search content, but only registered users can comment on posts, create posts and edit their own posts.',
			gif                : blogSmaller,
			gifLink            : 'https://npmrundev-blog.herokuapp.com/',
			gifWidth           : '500',
			git                : blogGit,
			gitLink            :
				'https://github.com/8catherine-alexandra8/mern-styled-components-blog',
			gitWidth           : '',
			url                : '/work/blogcms',
			frontEndTech       : [
				'React',
				'HTML',
				'CSS',
				'Styled-Components',
				'React-Bootstrap'
			],
			backEndTech        : [
				'Node',
				'Express',
				'Axios',
				'Mongoose',
				'MongoDB Atlas',
				'Firebase Auth',
				'Firebase Storage',
				'FormSpree API',
				'Quotable API'
			],
			futureEnhancements : [
				'Provide registered users with opportunity to upload a profile pic',
				'Expand user customization capabilities within blog post templates',
				'Add a social buttons package for sharing content',
				'Refactor to take better advantage of styled-component potential'
			]
		}
	]
}
