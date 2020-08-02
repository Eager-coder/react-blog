import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Article_link.css'
import moment from 'moment'
function ArticleLink({ e }) {
    return (
        <div className="article">
            <Link className="image-link" to={`/post/${e.uid}`}  >
                <img src={e.data.image.url} alt=""/>
            </Link>
            <div className="textbox">
                <Link className="category" to={`/category/${e.data.category}`}>{e.data.category}</Link>
                <Link to={`/post/${e.uid}`}>
                    <h2 className="title">{e.data.title[0].text}</h2> 
                </Link>
                <div className="meta">
                    <span className="author">{e.data.author}</span>
                    <span className="date">{moment(e.first_publication_date).format('LL')}</span>
                </div>
            </div>
        </div>
    )
}

export default ArticleLink
