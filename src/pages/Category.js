import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Client from '../utils/PrismicClient';
import Prismic from 'prismic-javascript';
import moment from 'moment';
import Footer from '../components/Footer';
import ArticleLink from '../components/ArticleLink';
import '../css/Category.css';

function Category() {
	const category = useParams().category;
	const [posts, setPosts] = useState(null);
	useEffect(() => {
		const getPosts = async () => {
			const { results } = await Client.query(Prismic.Predicates.at('document.type', 'blog_post'), { orderings: '[document.first_publication_date desc]' });
			setPosts(results.filter(e => e.data.category === category));
		};
		getPosts();
	}, []);
	return posts ? (
		<>
			<main>
				<section className='category'>
					<h1>Category: {category}</h1>
					<div className='category-container'>
						{posts.map((e, index) => (
							<ArticleLink key={index} e={e} />
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	) : (
		''
	);
}

export default Category;

// 'fulltext search'
// const res = await Client.query(
//     Prismic.Predicates.fulltext('document', 'hello')
// )
