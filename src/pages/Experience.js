import React from 'react';
import SEO from '../components/SEO';

export default function Experience() {
	return (
		<main className="container-responsive py-12">
			<SEO title="Experience" description="Internship and academic background of Muhammad Awais." />
			<h2 className="text-2xl sm:text-3xl font-bold">Experience / Education</h2>
			<ul className="mt-6 space-y-4">
				<li className="p-4 rounded-lg border border-black/5 dark:border-white/10">
					<p className="font-semibold">MERN Stack Developer — RankSol (PSEB Sponsored)</p>
					<p className="text-sm text-gray-600 dark:text-gray-300">Working on modern web applications, collaborating with teams, and delivering features.</p>
				</li>
				<li className="p-4 rounded-lg border border-black/5 dark:border-white/10">
					<p className="font-semibold">Certifications</p>
					<p className="text-sm text-gray-600 dark:text-gray-300">Add your certifications here.</p>
				</li>
			</ul>
		</main>
	);
}
