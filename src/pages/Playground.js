import React from 'react';
import SEO from '../components/SEO';

export default function Playground() {
	return (
		<main className="container-responsive py-12">
			<SEO title="Playground" description="Tech playground with mini demos and code snippets." />
			<h2 className="text-2xl sm:text-3xl font-bold">Tech Playground</h2>
			<p className="mt-4 text-gray-700 dark:text-gray-300">Interactive mini demos will go here. You can embed CodeSandbox, CodePen, or custom widgets.</p>
		</main>
	);
}
