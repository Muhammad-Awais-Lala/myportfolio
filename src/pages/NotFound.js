import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<main className="container-responsive py-20 text-center">
			<SEO title="404" description="Page not found" />
			<h1 className="text-5xl font-bold">404</h1>
			<p className="mt-3 text-gray-600 dark:text-gray-300">The page you’re looking for doesn’t exist.</p>
			<Link to="/" className="mt-6 inline-block px-5 py-3 rounded-md bg-primary text-white">Go Home</Link>
		</main>
	);
}
