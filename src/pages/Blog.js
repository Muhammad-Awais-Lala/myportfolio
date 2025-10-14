import React from 'react';
import SEO from '../components/SEO';

export default function Blog() {
	return (
		<main className="container-responsive py-12">
			<SEO title="Blog" description="Articles and case studies by Muhammad Awais (coming soon)." />
			<h2 className="text-2xl sm:text-3xl font-bold">Blog / Case Studies</h2>
			<p className="mt-4 text-gray-700 dark:text-gray-300">Coming soon. I’ll be sharing deep dives on MERN patterns, performance, and deployment tips.</p>
		</main>
	);
}
