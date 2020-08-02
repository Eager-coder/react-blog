import React from 'react'
import { RichText } from 'prismic-reactjs'

const RichTextSlice = ({content}) => {
    return (
        <div className="richtext-container">
            <RichText render={content} />
        </div>
    )
}
export default RichTextSlice