import React from 'react';
import SEO from '../components/SEO';

const projects = [
	{
		title: 'E-commerce Platform',
		description: 'Scalable MERN e-commerce app with cart, checkout, and admin dashboard.',
		tech: ['React', 'Node.js', 'Express', 'MongoDB'],
		role: 'Full-stack Developer',
		image: '/logo512.png',
		live: '#',
		repo: '#',
	},
	{
		title: 'Task Manager',
		description: 'Productivity app for teams with real-time updates and role-based access.',
		tech: ['React', 'Express', 'MongoDB'],
		role: 'Frontend Developer',
		image: '/logo512.png',
		live: '#',
		repo: '#',
	},
	{
		title: 'Portfolio CMS',
		description: 'Lightweight CMS to manage portfolio content and blog posts.',
		tech: ['React', 'Node.js', 'MySQL'],
		role: 'Full-stack Developer',
		image: '/logo512.png',
		live: '#',
		repo: '#',
	},
];

function Card({ p }) {
	return (
		<div className="rounded-lg border border-black/5 dark:border-white/10 overflow-hidden hover:shadow-soft transition-shadow">
			<img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
			<div className="p-4">
				<h4 className="text-lg font-semibold">{p.title}</h4>
				<p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{p.description}</p>
				<p className="text-sm mt-2"><span className="font-medium">Tech:</span> {p.tech.join(', ')}</p>
				<p className="text-sm mt-1"><span className="font-medium">Role:</span> {p.role}</p>
				<div className="mt-3 flex gap-2">
					<a href={p.live} className="px-3 py-2 text-sm rounded-md bg-primary text-white">Live Demo</a>
					<a href={p.repo} className="px-3 py-2 text-sm rounded-md border border-black/10 dark:border-white/20">GitHub</a>
				</div>
			</div>
		</div>
	);
}

export default function Projects() {
	return (
		<main className="container-responsive py-12" id="projects">
			<SEO title="Projects" description="Selected projects by Muhammad Awais with live demos and code." />
			<h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
				{projects.map((p) => <Card key={p.title} p={p} />)}
			</div>
		</main>
	);
}
