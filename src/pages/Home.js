import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../css/Home.css';
import Client from '../utils/PrismicClient';
import Prismic from 'prismic-javascript';
import FrontLink from '../components/FrontLink';
import ArticleLink from '../components/ArticleLink';
import Footer from '../components/Footer';
function Home() {
	const [latests, setLatests] = useState(null);
	const [leftLink, setLeftLink] = useState({});
	const [topLink, setTopLink] = useState({});
	const [bottomLink, setBottomLink] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			const {
				data: {
					body: [
						{
							primary: { left_link, top_link, bottom_link },
						},
					],
				},
			} = await Client.getSingle('home_page');
			const { results } = await Client.query(Prismic.Predicates.at('document.type', 'blog_post'), { orderings: '[document.first_publication_date desc]' });
			setLatests(results);
			results.forEach(e => {
				if (e.uid === left_link.uid)
					setLeftLink({
						uid: e.uid,
						image: e.data.image.url,
						title: e.data.title[0].text,
						// desc: e.data.body[0].primary.text[0].text.slice(0, 120),
						category: e.data.category,
						date: e.data.publication_date,
						author: e.data.author,
					});
				if (e.uid === top_link.uid)
					setTopLink({
						uid: e.uid,
						image: e.data.image.url,
						title: e.data.title[0].text,
						// desc: e.data.body[0].primary.text[0].text.slice(0, 80),
						category: e.data.category,
						date: e.data.publication_date,
						author: e.data.author,
					});
				if (e.uid === bottom_link.uid)
					setBottomLink({
						uid: e.uid,
						image: e.data.image.url,
						title: e.data.title[0].text,
						// desc: e.data.body[0].primary.text[0].text.slice(0, 80),
						category: e.data.category,
						date: e.data.publication_date,
						author: e.data.author,
					});
			});
			console.log(results);
		};
		fetchData();
	}, []);
	return latests ? (
		<>
			<Helmet>
				<title>Home | EduPro</title>
			</Helmet>
			<main>
				<div className='home-container'>
					<section className='front-grid'>
						<FrontLink link={leftLink} className='front-left' />
						<FrontLink link={topLink} className='front-small top' />
						<FrontLink link={bottomLink} className='front-small bottom' />
					</section>
					<hr />
					<section className='latests'>
						<h2 className='latests-header'>Latests</h2>
						<div className='latests-container'>{latests ? latests.map((e, index) => <ArticleLink e={e} key={index} />) : ''}</div>
					</section>
				</div>
			</main>
			<Footer />
		</>
	) : (
		''
	);
}

export default Home;
