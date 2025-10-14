import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ title, description, path = '/', image = '/logo512.png' }) {
	const fullTitle = title ? `${title} | Muhammad Awais` : 'Muhammad Awais | MERN Stack Developer';
	return (
		<Helmet>
			<title>{fullTitle}</title>
			<meta name="description" content={description || 'MERN Stack Developer portfolio of Muhammad Awais'} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description || ''} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={path} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description || ''} />
			<meta name="twitter:image" content={image} />
		</Helmet>
	);
}
