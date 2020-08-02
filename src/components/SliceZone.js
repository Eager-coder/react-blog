import React from 'react';
import { RichText } from 'prismic-reactjs';
import Quote from './Quote';
const SliceZone = ({ content }) => {
	console.log(content.map(e => e));
	return (
		<div className='slice-container'>
			{content.map((e, index) => {
				if (e.slice_type === 'text') return <RichText key={index} render={e.primary.text} />;
				if (e.slice_type === 'quote') return <Quote key={index} render={e.primary} />;
			})}
		</div>
	);
};
export default SliceZone;
