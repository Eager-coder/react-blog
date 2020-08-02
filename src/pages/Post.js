import React, { useEffect, useState } from 'react';
import Client from '../utils/PrismicClient';
import SliceZone from '../components/SliceZone';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import { FacebookProvider, Comments } from 'react-facebook';
import Footer from '../components/Footer';
import '../css/Post.css';
export default function Post() {
	const [postData, setData] = useState(null);
	const uid = useParams().uid;
	useEffect(() => {
		const getPost = async () => {
			const data = await Client.getByUID('blog_post', uid);
			if (data) setData(data);
			console.log(data);
		};
		getPost();
	}, [uid]);
	return postData !== null ? (
		<>
			<main>
				<article className='post'>
					<Helmet>
						<meta property='og:url' content={window.location.href} />
						<meta property='og:type' content='article' />
						<meta property='og:title' content={postData.data.title[0].text} />
						<meta property='og:description' content='How much does culture influence creative thinking?' />
						<meta property='og:image' content={postData.data.image.url} />
						<meta name='twitter:title' content={postData.data.title[0].text}></meta>
						<meta name='twitter:image' content={postData.data.image.url}></meta>
					</Helmet>
					<div className='post-container'>
						<div className='hero'>
							<Link to={`/category/${postData.data.category}`} className='category'>
								{postData.data.category}
							</Link>
							<h1>{postData.data.title[0].text}</h1>
							<p className='desc'>{postData.data.description}</p>
							<hr />
							<div className='date-and-author'>
								<span>
									By {postData.data.author} | {moment(postData.data.first_publication_date).format('LL')}
								</span>
							</div>

							<img src={postData.data.image.url} alt='' />
						</div>
						<SliceZone content={postData ? postData.data.body : ''} />
						<section className='share'>
							<h4>Share the article</h4>
							<div className='share-links'>
								<a className='share-facebook' href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target='_blank'>
									<i className='fab fa-facebook-f'></i>
								</a>
								<a
									href='https://twitter.com/share?ref_src=twsrc%5Etfw'
									// className='twitter-share-button'
									// data-size='large'
									data-url={window.location.href}
									data-show-count='false'
								>
									<i className='fab fa-twitter'></i>
								</a>

								<a className='share-vk' href={`https://vk.com/share.php?url=${window.location.href}`} target='_blank'>
									<i className='fab fa-vk'></i>
								</a>
							</div>
						</section>
						<section className='comments'>
							<h4 className='comment-title'>Leave a comment</h4>
							<div className='comments-container'>
								<FacebookProvider appId='749408989149871'>
									<Comments width='100%' href={window.location.href} />
								</FacebookProvider>
							</div>
						</section>
					</div>
				</article>
			</main>
			<Footer />
		</>
	) : (
		''
	);
}
