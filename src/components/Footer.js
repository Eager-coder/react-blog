import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';
function Footer() {
	return (
		<footer>
			<div className='footer-container'>
				<div className='flex-container'>
					<div className='logo'>
						<span>EduPro</span>
					</div>
					<div className='links'>
						<div className='link-column'>
							<span className='column-name'>Articles</span>
							<Link to='/category/education' className='link'>
								Education
							</Link>
							<Link to='/category/hobby' className='link'>
								Hobby
							</Link>
							<Link to='/category/entertainment' className='link'>
								Entertainment
							</Link>
							<Link to='/category/business' className='link'>
								Business
							</Link>
							<Link to='/category/lifestyle' className='link'>
								Lifestyle
							</Link>
							<Link to='/category/tech' className='link'>
								Tech
							</Link>
						</div>
						<div className='link-column'>
							<span className='column-name'>WE ARE</span>
							<Link to='#' className='link'>
								About
							</Link>
							<Link to='#' className='link'>
								Jobs
							</Link>
							<Link to='#' className='link'>
								For the Record
							</Link>
						</div>
					</div>
					<div className='social-media'>
						<span className='column-name'>Follow us</span>
						<div className='meida-links'>
							<div>
								<i className='fab fa-instagram'></i>
							</div>
							<div>
								<i className='fab fa-twitter'></i>
							</div>
							<div>
								<i className='fab fa-facebook-f'></i>
							</div>
						</div>
					</div>
				</div>

				<div className='bottom-items'>
					<span>© 2020 Education Progress</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
