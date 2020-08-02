import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Front_link.css'
function FrontLink({ link, className }) {
    return (
        <div className={className}>
            <Link to={`/post/${link.uid}`}>
                <img src={link.image} alt=""/>
            </Link>
            <div className="textbox">
                <Link className="category" to={`/category/${link.category}`}>{link.category}</Link>
                <Link to={`/post/${link.uid}`}>
                    <h2 className="title">{link.title}</h2>
                </Link>
                {/* <p>{link.desc}...</p> */}
                <div className="meta">
                    {/* <span className="date">{link.date}</span> */}
                    <span className="author">{link.author}</span>
                </div>
            </div>
        </div>
    )
}

export default FrontLink
