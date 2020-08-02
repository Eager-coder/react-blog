import React from 'react';

function Quote({ render }) {
	return (
		<blockquote>
			<p className='quote'>{render.quote[0].text}</p>
			<cite>~{render.name_of_the_author[0].text}</cite>
		</blockquote>
	);
}

export default Quote;
