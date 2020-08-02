import React, { useEffect, useState } from 'react'
import Client from '../utils/PrismicClient'
import RichTextSlice from '../components/SliceZone'
import { useParams, Link } from 'react-router-dom';
import moment from 'moment'
import { Helmet } from 'react-helmet'
import '../css/Post.css'
export default function Post() {
    const [postData, setData] = useState(null)
    const [comments, setComments] = useState('')
    const uid = useParams().uid
    useEffect(() => {
        const getPost = async () => {
            const data = await Client.getByUID('blog_post', uid)
            if (data) setData(data)
            // console.log(VK.Share.button())
        }
        getPost()
        setComments(<div className="fb-comments" data-href={`http://localhost:3000/post/${uid}`} data-numposts="5" data-width=""></div>)
        // window.FB.XFBML.parse()
    }, [uid])
    return (
            postData !== null ? 
        <section className="post">
            <Helmet>
                <meta property="og:url"  content={window.location.href} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={postData.data.title[0].text} />
                <meta property="og:description" content="How much does culture influence creative thinking?" />
                <meta property="og:image" content={postData.data.image.url} />
                <meta name="twitter:title" content={postData.data.title[0].text}></meta>
                <meta name="twitter:image" content={postData.data.image.url}></meta>
            </Helmet>
            <div className="post-container">
                <div className="hero">
                    <Link to={`/category/${postData.data.category}`} className="category">{postData.data.category}</Link>
                    <h1>{postData.data.title[0].text}</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsam nam magni, sint cupiditate eveniet quis natus molestiae. A eaque culpa deleniti?</p>
                    <hr/>
                    <div className="date-and-author">
                        <span>By {postData.data.author} | {moment(postData.data.first_publication_date).format('LL')}</span>
                    </div>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=https://anifind.netlify.app/anime/41353`} target="_blank">
                    Share on Facebook</a>

                    <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-url="https://the-steppe.com/steppe-english/what-s-so-evil-about-nuts" data-show-count="false">Tweet</a>
                   
                    {/* Vk */}
                    <a href={`https://vk.com/share.php?url=https://the-steppe.com/steppe-english/what-s-so-evil-about-nuts`} target="_blank">Поделиться ВКонтакте</a>
                    <img src={postData.data.image.url} alt=""/>
                </div>
                <RichTextSlice content={postData ? postData.data.body[0].primary.text : ''} />
            </div>
            {comments}
        </section>
            : ''
    )
}
